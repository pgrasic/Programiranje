const {JVL}=require("./jvl")

let lista=new JVL()
lista.dodajNaKraj(8)
lista.dodajNaKraj(2)
lista.dodajNaPocetak(6)
lista.dodajNaPocetak(1)

console.log(3,lista.pronadji(3))
//if(!lista.pronadji(7)) lista.dodajNaKraj(7)

lista.printList()
