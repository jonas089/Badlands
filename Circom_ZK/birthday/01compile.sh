mkdir -p ./output
mkdir -p ./output/constraints
circom bday.circom --r1cs --wasm --sym --c -o ./output/constraints
