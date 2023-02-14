pragma circom 2.0.0;

include "../../circuits/sha512/sha512.circom";
include "../circom-lib/binsum.circom";

component main = Sha512(1024);
