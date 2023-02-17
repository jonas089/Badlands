# 'signedtx' Circuit
**Failed**: build tests => error in wasm builder

**Failed**: run circuit with default Javascript inputs: 

See [output.txt](https://github.com/jonas089/cryptographic-research/blob/master/Circom_ZK/tx/playground/ed25519-circom/Output.txt) \
From [ed25519-circom](https://github.com/jonas089/cryptographic-research/blob/master/Circom_ZK/tx/playground/ed25519-circom/test/ed25519verfication.test.js) \
In [inputs.json](https://github.com/jonas089/cryptographic-research/blob/master/Circom_ZK/tx/inputs/input.json) \
Conclusion: Circom-ed25519 does not work out of the box. \
Error in run.sh / 02*.sh: 
```bash
jonass-air:tx chef$ ./run.sh
template instances: 210
non-linear constraints: 2563940
linear constraints: 0
public inputs: 0
public outputs: 1
private inputs: 807
private outputs: 0
wires: 2516886
labels: 11791370
Written successfully: ./output/constraints/signedtx.r1cs
Written successfully: ./output/constraints/signedtx.sym
Written successfully: ./output/constraints/signedtx_cpp/signedtx.cpp and ./output/constraints/signedtx_cpp/signedtx.dat
Written successfully: ./output/constraints/signedtx_cpp/main.cpp, circom.hpp, calcwit.hpp, calcwit.cpp, fr.hpp, fr.cpp, fr.asm and Makefile
Written successfully: ./output/constraints/signedtx_js/signedtx.wasm
Everything went okay, circom safe
/Users/chef/Desktop/cryptographic-research/Circom_ZK/tx/output/constraints/signedtx_js/witness_calculator.js:161
                    throw new Error(err);
                          ^

Error: Error: Assert Failed.
Error in template Ed25519Verifier_208 line: 46
Error in template TxVerifier_209 line: 17

    at /Users/chef/Desktop/cryptographic-research/Circom_ZK/tx/output/constraints/signedtx_js/witness_calculator.js:161:27
    at Array.forEach (<anonymous>)
    at WitnessCalculator._doCalculateWitness (/Users/chef/Desktop/cryptographic-research/Circom_ZK/tx/output/constraints/signedtx_js/witness_calculator.js:136:14)
    at WitnessCalculator.calculateWTNSBin (/Users/chef/Desktop/cryptographic-research/Circom_ZK/tx/output/constraints/signedtx_js/witness_calculator.js:212:20)
    at /Users/chef/Desktop/cryptographic-research/Circom_ZK/tx/output/constraints/signedtx_js/generate_witness.js:15:38
```
