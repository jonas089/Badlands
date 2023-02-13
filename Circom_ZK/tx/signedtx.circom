pragma circom 2.0.0;

template Ed25519Verifier {
  signal input msg[1];

  signal input A[1];
  signal input R8[1];
  signal input S[1];

  signal output valid;
}
component main = Ed25519Verifier();

/*
in verify.circom:
signal input msg[n];

signal input A[256];
signal input R8[256];
signal input S[255];



msg is the data for the signature

R8 is the first 256 bits of the signature (LSB to MSB)

S is the first 255 bits of the last 256 bits of the signature (LSB to MSB)

A is the public key in binary (LSB to MSB)
*/
