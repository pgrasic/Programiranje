const {JVL}=require("./jvl")
const {Node}=require("./nod")

class JVLS extends JVL{
    constructor(){
        super();
    }
    dodajSortirano(vrijednost) {
        let newNode = new Node(vrijednost);
        if (this.prvi == undefined) {
            this.prvi = newNode;
        } else {
            let element = this.prvi;
            if (vrijednost <= element.value) {
                newNode.next = element;
                this.prvi = newNode;
            }else{
                let prethodnik=this.prvi;
                let sljedbenik=this.prvi.next;
                while(sljedbenik!==undefined && vrijednost>sljedbenik.value){
                    prethodnik=sljedbenik
                    sljedbenik=sljedbenik.next
                }
                if (sljedbenik==undefined){
                      prethodnik.next=newNode;
                    }
                else{
                    prethodnik.next=newNode;
                    newNode.next=sljedbenik;
                }
            }
        }
    }
    dodajNaKraj(vrijednost){
        this.dodajSortirano(vrijednost)
        }
    dodajNaPocetak(vrijednost){
        this.dodajSortirano(vrijednost)
        }
}
module.exports={JVLS}
    //treba ispis i pronađi nasljediti
    //metoda za dodavanje  mora bitbi samo jedna. zabravniti one iz jvla