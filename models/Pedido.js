class Pedido{
    constructor(numPedido, fecha, nombrePlato, precioPlato, importe, estado){
        this.numPedido = numPedido;
        this.fecha = fecha;
        this.nombrePlato = nombrePlato;
        this.precioPlato = precioPlato;
        this.importe = importe;
        this.estado = estado;
    }
}

module.exports(Pedido);