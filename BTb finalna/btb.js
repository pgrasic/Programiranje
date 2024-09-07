const {Node} = require("./nod.js");

class BTB {
    constructor() {
        this.root = undefined;
    }
    
    dodajBalansirano(ovajBroj) {
        let newNode = new Node(ovajBroj);
        if (!this.root) {
            this.root = newNode;
            return;
        }else{
            this.root.dodaj(ovajBroj)
        }
    }
        
    pretraga(ovajBroj) {
        let trenutni = this.root;
        while (trenutni) {
            if (ovajBroj === trenutni.ovajBroj) {
                return true; 
            } else if (ovajBroj < trenutni.ovajBroj) {
                trenutni = trenutni.lijevo;
            } else {
                trenutni = trenutni.desno; 
            }
        }
        return false; 
    }
    
    printBTUnaprijed(trenutni = this.root){
        if(trenutni){
            if (trenutni.lijevo) this.printBTUnaprijed(trenutni.lijevo);
            console.log(trenutni.ovajBroj);
            if (trenutni.desno) this.printBTUnaprijed(trenutni.desno);
        }
    }
    printBTUnatrag(trenutni = this.root){
        if(trenutni){
            if (trenutni.desno) this.printBTUnatrag(trenutni.desno);
            console.log(trenutni.ovajBroj);
            if (trenutni.lijevo) this.printBTUnatrag(trenutni.lijevo);
        }
    }}




module.exports={BTB}


