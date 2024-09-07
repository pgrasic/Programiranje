const {Node}=require("./nod.js")
class DVL{
    prvi
    zadnji

    dodajNaKraj(ovajBroj){
        let newNode=new Node(ovajBroj);
        if (this.zadnji==undefined){
            this.prvi=newNode
            this.zadnji=newNode
        }else{ //else menjamo, if štima
            newNode.prev=this.zadnji
            this.zadnji.next=newNode
            this.zadnji=newNode
        }
    }
    dodajNaPocetak(ovajBroj){
        let newNode=new Node(ovajBroj);
        if (this.prvi==undefined){
            this.prvi=newNode
            this.zadnji=newNode
        }else{
            newNode.next=this.prvi
            this.prvi.prev=newNode
            this.prvi=newNode
        }
    }

    pronadji(ovajBroj){
        //let vrijednost
        //let newNode=new Node(vrijednost);
        let element=this.prvi;
        while (!element==undefined){
            if(ovajBroj==element.value){
                return true;
            }
            element=element.next;
        }
        return false;
    }

    printListUnaprijed () {
        let element=this.prvi;
        while (element!==undefined){
            console.log(element.value);
            element=element.next;
        }
    }
    printListUnatrag () {
        let element=this.zadnji;
        while (element!==undefined){
            console.log(element.value);
            element=element.prev;
        }
    }
}


    /*
        print i pronajdji su ok iz jvl-a
    */

module.exports={DVL}