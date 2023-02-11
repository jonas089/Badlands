# $1 : name of circuit. Example: bday.circom => $1 = bday
# => user$ ./00auto.sh bday
./01compile.sh
./02compute_witness.sh $1
./03powersoftau_ceremony.sh
./04contribution.sh $1
./05generate_proof.sh $1
#./06verify.sh
