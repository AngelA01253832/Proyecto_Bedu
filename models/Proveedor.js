class Proveedor{
    constructor(id_proveedor,empresa,rfc_proveedor,calle,exterior,interior,colonia,cp,ciudad,pais){
        this.id_proveedor = id_proveedor;
        this.empresa = empresa;
        this.rfc_proveedor =rfc_proveedor;
        this.calle = calle;
        this.exterior = exterior;
        this.interior = interior;
        this.colonia = colonia;
        this.cp = cp;
        this.ciudad = ciudad;
        this.pais = pais;
    }
}

module.exports(Proveedor);