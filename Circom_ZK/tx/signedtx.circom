pragma circom 2.0.0;
include "./ed25519-circom/circuits/verify.circom";
template TxVerifier (){
  component MyCircuit = Ed25519Verifier(256);
  signal input msg[256];
  signal input A[256];
  signal input R8[256];
  signal input S[255];
  signal input PointA[4][3];
  signal input PointR[4][3];

  MyCircuit.msg <== msg;
  MyCircuit.A <== A;
  MyCircuit.R8 <== R8;
  MyCircuit.S <== S;
  MyCircuit.PointA <== PointA;
  MyCircuit.PointR <== PointR;

  signal output valid;
  valid <== MyCircuit.out;
}
component main = TxVerifier();
