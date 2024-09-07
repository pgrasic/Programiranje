const {Node}=require("./nod.js")
class JVL{
    prvi
    dodajNaKraj(vrijednost){
        let newNode=new Node(vrijednost);
        if (this.prvi==undefined){
            this.prvi=newNode
        }else{
            let element=this.prvi;
            while(!element.next==undefined){
                element=element.next;
            }
            element.next=newNode;
        }
    }
    dodajNaPocetak(vrijednost){
        let newNode=new Node(vrijednost);
        if (this.prvi==undefined){
            this.prvi=newNode
        }else{
            newNode.next=this.prvi
            this.prvi=newNode
        }
    }

    pronadji(vrijednost){
        //let vrijednost
        //let newNode=new Node(vrijednost);
        let element=this.prvi;
        while (!element==undefined){
            if(vrijednost==element.value){
                return true;
            }
            element=element.next;
        }
        return false;
    }

    printList () {
        let element=this.prvi;
        while (element!==undefined){
            console.log(element.value);
            element=element.next;
        }
    }
}
    /*
        pronadji(vrijednost) // vraća true/false - postoji li ili ne
        ispisiSve()
    */

module.exports={JVL}