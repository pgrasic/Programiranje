const { Node } = require("./nod.js");

class BT {
    constructor() {
        this.root = undefined;
    }
    dodaj(ovajBroj) {
        let newNode = new Node(ovajBroj);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let trenutni = this.root;
        while (true) {
            if (ovajBroj < trenutni.ovajBroj) {
                if (!trenutni.lijevo) {
                    trenutni.lijevo = newNode;
                    return;
                }
                trenutni = trenutni.lijevo;
            } else {
                if (!trenutni.desno) {
                    trenutni.desno = newNode;
                    return;
                }
                trenutni = trenutni.desno;
            }
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
    }
}

module.exports = { BT };
