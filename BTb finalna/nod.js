class Node{
    constructor(ovajBroj, lijevo=undefined, desno=undefined){
        this.ovajBroj=ovajBroj
        this.lijevo=undefined;
        this.desno=undefined;
        this.brojacL=0;
        this.brojacD=0;
    }
    dodaj(noviBroj){
        if(this.brojacL<this.brojacD){
            this.brojacD++
            if (this.desno==undefined){
                this.desno=new Node(noviBroj)
            }else{
                this.desno.dodaj(noviBroj)
            }
        }else{
            this.brojacL++
            if (this.lijevo==undefined){
                this.lijevo=new Node(noviBroj)
            }else{
                this.lijevo.dodaj(noviBroj)
            }
        }
    }
}


module.exports={Node}