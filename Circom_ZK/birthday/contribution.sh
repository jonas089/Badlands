snarkjs powersoftau prepare phase2 pot12_0001.ptau pot12_final.ptau -v
snarkjs groth16 setup bday.r1cs pot12_final.ptau \
bday_0000.zkey
snarkjs zkey contribute bday_0000.zkey bday_0001.zkey \
--name="jonas macbook air" -v
snarkjs zkey export verificationkey bday_0001.zkey \
verification_key.json


