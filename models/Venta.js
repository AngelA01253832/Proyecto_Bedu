class Venta{
    constructor(id_venta,año,id_cliente,fecha,num_doc,tipo_doc){
        this.id_venta = id_venta;
        this.año = año;
        this.id_cliente = id_cliente;
        this.fecha = fecha;
        this.num_doc = num_doc;
        this.pre = tipo_doc;
    }
}

module.exports(Venta);