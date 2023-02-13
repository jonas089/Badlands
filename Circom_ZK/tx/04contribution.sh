mkdir -p ./output/zkeys
snarkjs powersoftau prepare phase2 ./output/powersoftau/pot12_0001.ptau ./output/powersoftau/pot12_final.ptau -v
snarkjs groth16 setup ./output/constraints/$1.r1cs ./output/powersoftau/pot12_final.ptau \
./output/zkeys/$1._0000.zkey
snarkjs zkey contribute ./output/zkeys/$1._0000.zkey ./output/zkeys/$1._0001.zkey \
--name="jonas macbook air" -v
snarkjs zkey export verificationkey ./output/zkeys/$1._0001.zkey \
./output/zkeys/verification_key.json
