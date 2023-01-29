import random, time
from helper import cut
'''
no-cutulus implementation
1. agree on g
2. a = rand
3. b = rand
4. A = g^a
5. B = g^b

s = B^a = A^b

'''

class DH:
    def __init__(self, a, b, g, p):
        self.a = a
        self.b = b
        self.g = g
        self.p = p
    def A(self):
        return (fast_power(self.g, self.a) % self.p)
    def B(self):
        return (fast_power(self.g, self.b) % self.p)
    def secret(self, side):
        if side == "A":
            B = self.B()
            return (fast_power(B, self.a) % self.p)
        elif side == "B":
            A = self.A()
            return (fast_power(A, self.b) % self.p)
        else:
            return None
'''
class Proof:
    def __init__(self, g, a, b, l):
        self.g = g
        self.a = a
        self.b = b
        self.l = l
    def calc_A(self):
        s1 = self.g
        for i in range(0, self.a - 1):
            s1 = s1*self.g
            if len(str(s1)) >= self.l:
                s1 = cut(s1, self.l)
        print('S1: ', s1)
        return s1
    def calc_B(self):
        s2 = self.g
        for i in range(0, self.b - 1):
            s2 = s2*self.g
            if len(str(s2)) >= self.l:
                s2 = cut(s2, self.l)
        print('S2: ', s2)
        return s2
    def secret(self, pub, side):
        if side == 'A':
            _s = pub
            for i in range(0, self.a - 1):
                _s = _s*pub
                if len(str(_s)) >= self.l:
                    _s = cut(_s, self.l)
            return _s
        elif side == 'B':
            _s = pub
            for i in range(0, self.b - 1):
                _s = _s*pub
                if len(str(_s)) >= self.l:
                    _s = cut(_s, self.l)
            return _s
'''
def test():
    '''
    a = 5
    b = 9
    while b == a:
        b = random.randint(3, 10)

    g = random.randint(3, 50)
    _Proof = Proof(g, a, b, l=3)
    A = _Proof.calc_A()
    B = _Proof.calc_B()
    if(_Proof.secret(A, 'B') == _Proof.secret(B, 'A')):
        print('[Success] Proof is valid. S1({s1}) == S2({s2})'.format(s1=_Proof.secret(A, 'B'), s2=_Proof.secret(B, 'A')))
    else:
        print('[Error] Proof mismatch! S1({s1}) == S2({s2})'.format(s1=_Proof.secret(A, 'B'), s2=_Proof.secret(B, 'A')))
    '''
    instance = DH(3, 5, 3, 100)
    assert(instance.secret('A') == instance.secret('B'))
    print('[Success] Secrets match.')
    print('Secret for Alice: ', instance.secret('A'))
    print('Secret for Bob: ', instance.secret('B'))
'''
for i in range(0, 10):
    test()
    time.sleep(1)
'''

def fast_power(g, a):
    if a <= 1:
        return g**a
    if a % 2 == 0:
        x = fast_power(g, a / 2)
        return x**2
    else:
        x = fast_power(g, a // 2)
        return (x**2)*g

test()
