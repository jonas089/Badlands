from numpy import sqrt, floor
def cut(v, l):
    return int(str(v)[-l:])

'''
If the number is less than 2, not prime.
If the number is 2, prime.
If the number can be divided by 2 with no remainder, not prime.
If the number has a divisor between 3 and sqrt(n), not prime
Otherwise, prime.

'''
def primality_test(n):
    if n < 2:
        return False
    elif n == 2:
        return True
    elif n % 2 == 0:
        return False
    _range = range(3, int(floor(sqrt(n))+1), 2)
    for value in _range:
        if n % value == 0:
            return False

    return True


def tests():
    for i in range(0, 100):
        print(i,":",primality_test(i))
#tests()
