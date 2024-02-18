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

    static updateProduct(id, title)
    {
        for(let i=0; i<products.length; i++)
        {
            if(products[i].id===id)
                products[i].title = title;
        }
    }

    static deleteProduct(id, title)
    {
        let index = undefined;
        for(let i=0; i<products.length; i++)
        {
            if(products[i].id===id)
                index = i;
        }

        products.splice(index, 1);
    }
}