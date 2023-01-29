# Working with [Circom](https://docs.circom.io/getting-started/writing-circuits/)
Example circuits written in Circom specification language.
# Birthday
Prove that you know a Birthday e.g. d, m, y such that d * m * y = c. \
c is public so the verifier can compare (public.json). \
If pc == vc and the proof is valid, one can assume the prover knows the Birthday (d, m and y). \
Brute-force difficulty for a Birthday (d, m, y): \
  - reasonable range: 1960-2010
  - possible combinations: 365*50 = 18250
  => therefore it's unlikely to guess a Birthday that's not 01.01.1960 or 31.12.2010 on 1st attempt. \
Example: Jonas Birthday is 16.08.2000 => odds of guessing correct d, m, y blind, on first attempt, are 1:18250
