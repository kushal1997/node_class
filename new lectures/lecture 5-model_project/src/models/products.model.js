 class ProductModel{
    constructor(_id,_name,_descr,_price,_poster){
        this.id=_id;
        this.name=_name;
        this.descr=_descr;
        this.price=_price;
        this.poster=_poster;
    }
    static get(){
        return products;
    }
}
var products=[
    new ProductModel(1,"Iphone 7","This is the new Iphone from Apple",1200,"https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"),
]

module.exports=ProductModel;