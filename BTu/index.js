const {BT}=require("./bt")

let stablo=new BT()

stablo.dodaj(10);
stablo.dodaj(20);
stablo.dodaj(40);
stablo.dodaj(25);
stablo.dodaj(14);
stablo.dodaj(6);
stablo.dodaj(31);
stablo.dodaj(33);
stablo.dodaj(65);
stablo.dodaj(2);
stablo.dodaj(0);


stablo.printBTUnaprijed();
stablo.printBTUnatrag();

console.log(stablo.pretraga(65));
console.log(stablo.pretraga(77));

