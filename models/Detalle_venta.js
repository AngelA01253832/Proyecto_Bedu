class Detalle_venta{
    constructor(id_venta, año,id_producto,cantidad,pre_prod_compra){
        this.id_venta = id_venta;
        this.año = año;
        this.id_producto = id_producto;
        this.cantidad = cantidad;
        this.pre_prod_compra = pre_prod_compra;

    }
}

module.exports(Detalle_venta);