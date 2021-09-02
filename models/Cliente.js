class Cliente{
    constructor(id_cliente,empresa,cliente,calle,exterior,interior,colonia,cp,ciudad,estado){
        this.id_cliente = id_cliente;
        this.empresa = empresa;
        this.cliente = cliente;
        this.calle = calle;
        this.exterior = exterior;
        this.interior = interior;
        this.colonia = colonia;
        this.cp = cp;
        this.ciudad = ciudad;
        this.estado = estado;
    }
}

module.exports(Cliente);