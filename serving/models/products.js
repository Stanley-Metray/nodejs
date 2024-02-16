const products = [];

module.exports = class Product
{
    constructor(id, title){
        this.id = id,
        this.title = title;
    }

    save()
    {
        products.push(this);
    }

    static getProduct(id)
    {
        return products.filter(value=>{
            if(value.id===id)
                return value;
        });
    }

    static getAllProducts(){
        return products;
    }
}