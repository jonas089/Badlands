import ed25519
import curve25519

'''javascript
bigintModArith = require('bigint-mod-arith');
function buffer2bits(buff) {
	const res = [];
	for (let i = 0; i < buff.length; i++) {
		for (let j = 0; j < 8; j++) {
			if ((buff[i] >> j) & 1) {
				res.push(1n);
			} else {
				res.push(0n);
			}
		}
	}
	return res;
}

function point_compress(P){
    const zinv = bigintModArith.modInv(P[2],p);
    let x = modulus(P[0] * zinv , p);
    let y = modulus(P[1] * zinv , p);
	const inter = y | ((x & 1n) << 255n)
	return buffer2bits(bigIntToLEBuffer(inter));
}
'''
p = 2**255 - 19

def modp_inv(x):
    return pow(x, p-2, p)

def point_compress(P):
    zinv = modp_inv(P[2])
    x = P[0] * zinv % p
    y = P[1] * zinv % p
    return int.to_bytes(y | ((x & 1) << 255), 32, "little")

# Define the message to be signed
msg = b"Hello, world!"

# Generate an Ed25519 key pair
sk, public_key = ed25519.create_keypair()

# Sign the message using the private key
signature = sk.sign(msg)

# Convert the signature to bytes
# signature_bytes = signature.to_bytes()

# Extract R8 and S from the signature bytes
R8 = signature[:32]
S = signature[32:]
print(R8)
print(S)
# Convert the public key to binary
A = public_key.to_bytes()
print(A)
# Convert R8 to a point on the elliptic curve
PointR = point_compress(R8)
print(PointR)
# Convert the public key to a point on the elliptic curve
PointA = point_compress(A)
print(PointA)


print(msg)
print(R8)
print(S)
print(A)
print(PointA)
print(PointR)






'''python
   The rest of this section describes how Ed25519 can be implemented in
   Python (version 3.2 or later) for illustration.  See Appendix A for
   the complete implementation and Appendix B for a test-driver to run
   it through some test vectors.

   Note that this code is not intended for production as it is not
   proven to be correct for all inputs, nor does it protect against
   side-channel attacks.  The purpose is to illustrate the algorithm to
   help implementers with their own implementation.

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







Josefsson & Liusvaara         Informational                    [Page 20]

RFC 8032                EdDSA: Ed25519 and Ed448            January 2017


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






Josefsson & Liusvaara         Informational                    [Page 21]

RFC 8032                EdDSA: Ed25519 and Ed448            January 2017


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













Josefsson & Liusvaara         Informational                    [Page 22]

RFC 8032                EdDSA: Ed25519 and Ed448            January 2017


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
    return point_equal(sB, point_add(R, hA))



'''




'''

const bigintModArith = require('bigint-mod-arith');
function buffer2bits(buff) {
	const res = [];
	for (let i = 0; i < buff.length; i++) {
		for (let j = 0; j < 8; j++) {
			if ((buff[i] >> j) & 1) {
				res.push(1n);
			} else {
				res.push(0n);
			}
		}
	}
	return res;
}

function convertToEvenLength(hexInput) {
	if (hexInput.length % 2 == 1) {
		return '0' + hexInput;
	}
	return hexInput;
}

function normalize(input) {
	if (IsPowerOfTwo(input.length)) {
		input.push(0n);
	}
	return input;
}

function IsPowerOfTwo(x) {
	return (x & (x - 1)) == 0;
}

function bigIntToLEBuffer(x) {
	return Buffer.from(convertToEvenLength(x.toString(16)), 'hex').reverse()
}

function pad(x, n) {
	var total = n - x.length;
	for (var i = 0; i < total; i++) {
		x.push(0n);
	}
	return x;
}
// This function will give the right modulud as expected
function modulus(num, p) {
	return ((num % p) + p) % p;
}

function bitsToBigInt(arr) {
	res = BigInt(0);
	for (var i = 0; i < arr.length; i++) {
		res += (BigInt(2) ** BigInt(i)) * BigInt(arr[i]);
	}
	return res;
}

// This function will convert a bigInt into the chucks of Integers
function chunkBigInt(n, mod = BigInt(2 ** 51)) {
	if (!n) return [0];
	let arr = [];
	while (n) {
		arr.push(BigInt(modulus(n, mod)));
		n /= mod;
	}
	return arr;
}

let p = BigInt(2 ** 255) - BigInt(19);
let d = 37095705934669439343138083508754565189542113879843219016388785533085940283555n;
// This function will perform point addition on elliptic curve 25519 to check point addition circom
function point_add(P, Q) {
	let A = modulus((P[1] - P[0]) * (Q[1] - Q[0]), p);
	let B = modulus((P[1] + P[0]) * (Q[1] + Q[0]), p);
	let C = modulus(BigInt(2) * P[3] * Q[3] * d, p);
	let D = modulus(BigInt(2) * P[2] * Q[2], p);

	let E = B - A;
	let F = D - C;
	let G = D + C;
	let H = B + A;

	return [E * F, G * H, F * G, E * H];
}
//This funciton will give the point multiplcation on EC 25519
function point_mul(s, P) {
	let Q = [0n, 1n, 1n, 0n];
	while (s > 0) {
		if (s & 1n) {
			Q = point_add(Q, P);
		}
		P = point_add(P, P);
		s >>= 1n;
	}
	return Q;
}

function dechunk(x, mod = BigInt(2 ** 51)) {
	sum = 0n;
	for (let i = 0; i < x.length; i++) {
		sum += (mod ** BigInt(i)) * x[i];
	}
	return sum;
}
function point_equal(P, Q) {
    //  x1 / z1 == x2 / z2  <==>  x1 * z2 == x2 * z1
    if (modulus((P[0] * Q[2] - Q[0] * P[2]), p) != 0n){
        return false
	}
    if (modulus((P[1] * Q[2] - Q[1] * P[2]), p) != 0n){
        return false
	}
    return true

}
function point_compress(P){
    const zinv = bigintModArith.modInv(P[2],p);
    let x = modulus(P[0] * zinv , p);
    let y = modulus(P[1] * zinv , p);
	const inter = y | ((x & 1n) << 255n)
	return buffer2bits(bigIntToLEBuffer(inter));
}
module.exports = {
	buffer2bits,
	convertToEvenLength,
	normalize,
	bigIntToLEBuffer,
	pad,
	chunkBigInt,
	bitsToBigInt,
	point_add,
	modulus,
	point_mul,
	dechunk,
	point_equal,
	point_compress
};

'''
