import ed25519
import curve25519
import json
from bitstring import BitArray
import binascii
import base64
from bitarray import bitarray
## First, some preliminaries that will be needed.

import hashlib

def sha512(s):
    return hashlib.sha512(s).digest()

# Base field Z_p
p = 2**255 - 19

def modp_inv(x):
    return pow(x, p-2, p)

# Curve constant
d = -121665 * modp_inv(121666) % p

# Group order
q = 2**252 + 27742317777372353535851937790883648493

def sha512_modq(s):
    return int.from_bytes(sha512(s), "little") % q

## Then follows functions to perform point operations.

# Points are represented as tuples (X, Y, Z, T) of extended
# coordinates, with x = X/Z, y = Y/Z, x*y = T/Z

def point_add(P, Q):
    A, B = (P[1]-P[0]) * (Q[1]-Q[0]) % p, (P[1]+P[0]) * (Q[1]+Q[0]) % p;
    C, D = 2 * P[3] * Q[3] * d % p, 2 * P[2] * Q[2] % p;
    E, F, G, H = B-A, D-C, D+C, B+A;
    return (E*F, G*H, F*G, E*H);



# Computes Q = s * Q
def point_mul(s, P):
    Q = (0, 1, 1, 0)  # Neutral element
    while s > 0:
        if s & 1:
            Q = point_add(Q, P)
        P = point_add(P, P)
        s >>= 1
    return Q

def point_equal(P, Q):
    # x1 / z1 == x2 / z2  <==>  x1 * z2 == x2 * z1
    if (P[0] * Q[2] - Q[0] * P[2]) % p != 0:
        return False
    if (P[1] * Q[2] - Q[1] * P[2]) % p != 0:
        return False
    return True

## Now follows functions for point compression.

# Square root of -1
modp_sqrt_m1 = pow(2, (p-1) // 4, p)

# Compute corresponding x-coordinate, with low bit corresponding to
# sign, or return None on failure
def recover_x(y, sign):
    if y >= p:
        return None
    x2 = (y*y-1) * modp_inv(d*y*y+1)
    if x2 == 0:
        if sign:
            return None
        else:
            return 0

    # Compute square root of x2
    x = pow(x2, (p+3) // 8, p)
    if (x*x - x2) % p != 0:
        x = x * modp_sqrt_m1 % p
    if (x*x - x2) % p != 0:
        return None

    if (x & 1) != sign:
        x = p - x
    return x




# Base point
g_y = 4 * modp_inv(5) % p
g_x = recover_x(g_y, 0)
G = (g_x, g_y, 1, g_x * g_y % p)

def point_compress(P):
    zinv = modp_inv(P[2])
    x = P[0] * zinv % p
    y = P[1] * zinv % p
    return int.to_bytes(y | ((x & 1) << 255), 32, "little")

def point_decompress(s):
    if len(s) != 32:
        raise Exception("Invalid input length for decompression")
    y = int.from_bytes(s, "little")
    sign = y >> 255
    y &= (1 << 255) - 1

    x = recover_x(y, sign)
    if x is None:
        return None
    else:
        return (x, y, 1, x*y % p)

## These are functions for manipulating the private key.

def secret_expand(secret):
    if len(secret) != 32:
        raise Exception("Bad size of private key")
    h = sha512(secret)
    a = int.from_bytes(h[:32], "little")
    a &= (1 << 254) - 8
    a |= (1 << 254)
    return (a, h[32:])

def secret_to_public(secret):
    (a, dummy) = secret_expand(secret)
    return point_compress(point_mul(a, G))




## The signature function works as below.

def sign(secret, msg):
    a, prefix = secret_expand(secret)
    A = point_compress(point_mul(a, G))
    r = sha512_modq(prefix + msg)
    R = point_mul(r, G)
    Rs = point_compress(R)
    h = sha512_modq(Rs + A + msg)
    s = (r + h * a) % q
    return Rs + int.to_bytes(s, 32, "little")

## And finally the verification function.

def verify(public, msg, signature):
	if len(public) != 32:
		raise Exception("Bad public key length")
	if len(signature) != 64:
		Exception("Bad signature length")
	A = point_decompress(public)
	if not A:
		return False
	Rs = signature[:32]
	R = point_decompress(Rs)
	if not R:
		return False
	s = int.from_bytes(signature[32:], "little")
	if s >= q: return False
	h = sha512_modq(Rs + public + msg)
	sB = point_mul(s, G)
	hA = point_mul(h, A)
	print("R: ", R)
	print("A: ", A)
	print("msg: ", msg)
	return point_equal(sB, point_add(R, hA))


# Define the message to be signed
msg = b"Hi"

# Generate an Ed25519 key pair
sk, public_key = ed25519.create_keypair()

# Sign the message using the private key
signature = sk.sign(msg)

# Convert the signature to bytes
# signature_bytes = signature.to_bytes()

# Extract R8 and S from the signature bytes
R8 = signature[:32]
S = signature[32:]
# Convert the public key to binary
A = public_key.to_bytes()

res = verify(A, msg, signature)

print(res)
PointA = point_decompress(A)
PointR = point_decompress(R8)
def tuple_to_array_4x3(t):
    # Convert each element in the tuple to base85
    encoded = [base64.b85encode(i.to_bytes(32, byteorder="little")).decode() for i in t]
    # Create a 2D array of size 4x3 to hold the encoded values
    result = [[0 for j in range(3)] for i in range(4)]
    # Split each base85 string into chunks of 3 characters and fill the array row by row
    for i in range(4):
        for j in range(3):
            chunk = encoded[i][j*3:(j+1)*3]
            result[i][j] = ord(chunk[0]) + (ord(chunk[1]) << 8) + (ord(chunk[2]) << 16)
    return result
def binary(public_key_bytes):
	public_key_binary = ''.join(format(b, '08b') for b in public_key_bytes)
	return public_key_binary

def generate_inputs():
	print(PointA)
	print("Length: ", len(binary(msg)))
	i_json = {
	    "msg":list(binary(msg)),
	    "R8":list(binary(R8)),
	    "S":list(binary(S)[:-1]),
	    "A":list(binary(A)),
	    "PointA":tuple_to_array_4x3(PointA),
	    "PointR":tuple_to_array_4x3(PointR)
	}
	s = str(i_json)
	_s = ''
	for l in s:
	    if l != "'":
	        _s += l
	    else:
	        _s += '"'
	print(_s)
	with open('./inputs/input.json', 'w') as input_file:
	    input_file.write(_s)
	pass


generate_inputs()