class Cliente{
    constructor(nombre,calle,exterior,interior,colonia,cp,ciudad,estado,telefono){
        this.nombre = nombre;
        this.calle = calle;
        this.exterior = exterior;
        this.interior = interior;
        this.colonia = colonia;
        this.cp = cp;
        this.ciudad = ciudad;
        this.estado = estado;
        this.telefono = telefono;
    }
}

module.exports(Cliente);