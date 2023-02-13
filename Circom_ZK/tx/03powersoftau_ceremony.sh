mkdir -p ./output/powersoftau
snarkjs powersoftau new bn128 12 ./output/powersoftau/pot12_0000.ptau -v
snarkjs powersoftau contribute ./output/powersoftau/pot12_0000.ptau ./output/powersoftau/pot12_0001.ptau \
--name="First contribution" -v
