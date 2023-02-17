# 'Bday' Circuit - Unfinished
./00auto.sh bday => compile circuit, contribute to new powersoftau ceremony, compute witness, generate proof and validate proof. \
Example output:
```
[DEBUG] snarkJS: Applying key: L Section: 0/3
[DEBUG] snarkJS: Applying key: H Section: 0/8
[INFO]  snarkJS: Circuit Hash:
		db1a71f1 abe7354a 39b7fd9d ec15f057
		a8490f04 4064c23e 6f811e61 e854a635
		e4b65d95 fa649d6e 5f5839c5 2176d62d
		73cadc1f a3c4bdae 3c9e1c43 6d2ac3f7
[INFO]  snarkJS: Contribution Hash:
		3a2cd0d7 e795aaa5 8c427a64 b115bae1
		892fa689 373c5478 62466247 ec20b745
		65543646 0a235091 47e381e4 83e4125f
		0f32d811 b8746699 ac044817 df9bf6dd
[INFO]  snarkJS: OK!

```
Input date can be found in ./inputs/input.json

# TBD
Use SHA.circom, Modulus.circom or equiv. To include the computations done in inputs.py in the circuit to provide moderate security.
