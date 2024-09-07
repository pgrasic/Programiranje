const {DVLS}=require("./dvls")

let lista=new DVLS()

/*lista.dodajNaKraj(8)
lista.dodajNaKraj(2)
lista.dodajNaPocetak(6)
lista.dodajNaPocetak(1)*/

//console.log(3,lista.pronadji(3))
//if(!lista.pronadji(7)) lista.dodajNaKraj(7)


lista.dodaj(30)
lista.dodaj(10)
lista.dodaj(20)
lista.dodaj(50)
lista.dodaj(40)
lista.dodaj(45)
lista.dodaj(0)
lista.dodaj(5)
lista.dodaj(60)
lista.dodaj(70)

lista.pronadji(5)

lista.printListUnaprijed()
console.log("----------")
lista.printListUnatrag()