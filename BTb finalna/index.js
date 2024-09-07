const {BTB}=require("./btb")

let stablo=new BTB()

// stablo.dodaj(10);
// stablo.dodaj(20);
// stablo.dodaj(40);
// stablo.dodaj(25);
// stablo.dodaj(14);
// stablo.dodaj(6);
// stablo.dodaj(31);
stablo.dodajBalansirano(33);
stablo.dodajBalansirano(65);
stablo.dodajBalansirano(2);
stablo.dodajBalansirano(77);

stablo.printBTUnaprijed();
console.log("---------------------")
stablo.printBTUnatrag();

console.log(stablo.pretraga(20));
console.log(stablo.pretraga(33));

