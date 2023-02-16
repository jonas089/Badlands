pragma circom 2.0.0;

include "./scalarmul.circom";
include "./modulus.circom";
include "./point-addition.circom";
include "./pointcompress.circom";

include "circom-lib/comparators.circom";
include "circom-lib/gates.circom";
include "sha512-main/circuits/sha512/sha512.circom";


template InputTest(n) {
  assert(n % 8 == 0);

  signal input msg[n];

  signal input A[256];
  signal input R8[256];
  signal input S[255];

  signal input PointA[4][3];
  signal input PointR[4][3];

  signal output OA;
  signal output OcompressA;
  signal output OR8;
  signal output OcompressR;

  var G[4][3] = [[6836562328990639286768922, 21231440843933962135602345, 10097852978535018773096760],
                 [7737125245533626718119512, 23211375736600880154358579, 30948500982134506872478105],
                 [1, 0, 0],
                 [20943500354259764865654179, 24722277920680796426601402, 31289658119428895172835987]
                ];

  var i;
  var j;

  component compressA = PointCompress();
  component compressR = PointCompress();
  for (i=0; i<4; i++) {
    for (j=0; j<3; j++) {
      compressA.P[i][j] <== PointA[i][j];
      compressR.P[i][j] <== PointR[i][j];
    }
  }

  for (i=0; i<256; i++) {
    compressR.out[i] === R8[i];
    compressA.out[i] === A[i];
  }
  OA <== A;
  OcompressA <== compressA;
  OR8 <== R8;
  OcompressR <== compressR;

}
