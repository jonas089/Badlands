pragma circom 2.0.0;
template Multiplier2 () {

   // Declaration of signals.
   signal input d;
   signal input m;
   signal input y;
   // c will be written to public.json
   signal output c;

   // Constraints.
   c <== d * m * y;
   // If pc == vc && proof.is_valid:
   // accept
}
