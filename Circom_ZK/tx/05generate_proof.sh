mkdir -p ./output
snarkjs groth16 prove ./output/zkeys/$1._0001.zkey ./output/witness.wtns ./output/proof.json ./output/public.json
