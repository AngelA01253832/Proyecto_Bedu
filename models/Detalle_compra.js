class Detalle_compra{
    constructor(id_compra, año,id_producto,cantidad,pre_prod_compra){
        this.id_compra = id_compra;
        this.año = año;
        this.id_producto = id_producto;
        this.cantidad = cantidad;
        this.pre_prod_compra = pre_prod_compra;

    }
}

module.exports(Detalle_compra);