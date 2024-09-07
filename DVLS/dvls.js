const { DVL } = require("./dvl")
const {Node}=require("./nod.js")

class DVLS extends DVL{
    prvi
    zadnji
    
    dodaj (ovajBroj){
        let newNode=new Node(ovajBroj);
        if(this.prvi==undefined){
            this.prvi=newNode;
            this.zadnji=newNode;
        }else if(ovajBroj <= this.prvi.value){
            newNode.next=this.prvi;
            this.prvi.prev=newNode;
            this.prvi=newNode;
        }else{
            let prethodnik=this.prvi;
            let sljedbenik=this.prvi.next;
            while(sljedbenik!=undefined && ovajBroj>sljedbenik.value){
                prethodnik=sljedbenik;
                sljedbenik=sljedbenik.next;
            }
            prethodnik.next=newNode;
            if (sljedbenik!=undefined){
                sljedbenik.prev=newNode
            }else{
                this.zadnji=newNode
            }
            newNode.prev=prethodnik;
            newNode.next=sljedbenik;
        }
    }
    dodajNaKraj(ovajBroj){
        this.dodaj(ovajBroj)
    }
    dodajNaPocetak(ovajBroj){
        this.dodaj(ovajBroj)
    }
}
module.exports={DVLS}