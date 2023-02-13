mkdir -p ./output
mkdir -p ./output/constraints
circom $1.circom --r1cs --wasm --sym --c -o ./output/constraints
