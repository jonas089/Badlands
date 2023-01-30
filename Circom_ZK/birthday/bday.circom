pragma circom 2.0.0;
template Birthday () {

   // Declaration of signals.
   signal input d;
   signal input m;
   signal input y;
   // c will be written to public.json
   signal output a;
   signal output b;
   // Constraints.
   // two outputs so d and m are not interchangeable
   a <== d * y;
   b <== m * y;
}
component main = Birthday();
