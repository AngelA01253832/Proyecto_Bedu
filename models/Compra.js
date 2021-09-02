class Compra{
    constructor(id_compra,año,id_proveedor,fecha,num,doc){
        this.id_compra = id_compra;
        this.año = año;
        this.id_proveedor = id_proveedor;
        this.fecha = fecha;
        this.num = num;
        this.doc = doc;
    }
}

module.exports(Compra);