from Crypto.Hash import SHA384
import time, json

big_prime = 174440041
def main():
    secret = {"d":"22", "m":"05", "y":"2002"}
    inputs = {}
    for s in secret:
        _hash = SHA384.new()
        _hash.update(secret[s].encode('utf-8'))
        _hash = _hash.digest()
        # as binary
        _hash = ''.join(format(byte, '08b') for byte in _hash)
        b = int(_hash) % big_prime
        inputs[s] = b
    print('d: {d}'.format(d=inputs['d']))
    print('m: {m}'.format(m=inputs['m']))
    print('y: {y}'.format(y=inputs['y']))

    _s = str(inputs)
    _inputs = ''
    for l in _s:
        if l != "'":
            _inputs += l
        else:
            _inputs += '"'
    print(int(inputs['d'])*int(inputs['m']))
    with open('./inputs/input.json', 'w') as input_file:
        input_file.write(str(_inputs))

def tests():
    p = None
    i = None
    with open('./output/public.json', 'r') as public:
        p = json.loads(public.read())
    with open('./inputs/input.json', 'r') as inputs:
        i = json.loads(inputs.read())
    '''
   a <== d * y;
   b <== m * y;
   c <== d * m;
    '''
    if not str(int(i['d']) * int(i['y'])) == p[0]:
        print(str(int(i['d']) * int(i['y'])))
        print(p[0])
        print('Error #1')
    if not str(int(i['m']) * int(i['y'])) == p[1]:
        print('Error #2')
    if not str(int(i['d']) * int(i['m'])) == p[2]:
        print('Error #3')
    print('OK.')
main()
#tests()
