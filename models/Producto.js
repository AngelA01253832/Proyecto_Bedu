class Producto{
    constructor(id,categorie,name,desc,stock,pre,image){
        this.id = id;
        this.categorie = categorie;
        this.name = name;
        this.desc = desc;
        this.stock = stock;
        this.pre = pre;
        this.image = image;
    }
}

module.exports(Producto);