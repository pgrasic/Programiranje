const {DVL}=require("./dvl")

let lista=new DVL()

/*lista.dodajNaKraj(8)
lista.dodajNaKraj(2)
lista.dodajNaPocetak(6)
lista.dodajNaPocetak(1)*/

//console.log(3,lista.pronadji(3))
//if(!lista.pronadji(7)) lista.dodajNaKraj(7)


lista.dodajNaKraj(30)
lista.dodajNaKraj(10)
lista.dodajNaKraj(20)
lista.dodajNaKraj(50)
lista.dodajNaKraj(40)

lista.dodajNaPocetak(45)
lista.dodajNaPocetak(0)
lista.dodajNaPocetak(5)
lista.dodajNaPocetak(60)
lista.dodajNaPocetak(70)

lista.pronadji(5)

lista.printListUnaprijed()
console.log("----------")
lista.printListUnatrag()