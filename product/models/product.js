const mysql = require('mysql');


class Product {

    connect() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'a9591303870A',
            database: 'sharpener'
        });

        this.connection.connect((err) => {
            if (err)
                return console.log(err);

            console.log("Database connected");
        });
    }

    addProduct(product) {
        const query = `INSERT INTO product (title, description, imageurl) VALUES (?, ?, ?)`;
        const values = [product.title, product.description, product.url];

        return new Promise((resolve, reject) => {
            this.connection.query(query, values, (err, result) => {
                if (err) {
                    reject(err); 
                } else {
                    resolve(result);
                }
            });
        });
    }

    deleteProduct(title)
    {
        const query = `DELETE FROM product WHERE title=?`;
        const values = [title];

        return new Promise((resolve,reject)=>{
            this.connection.query(query, values, (err, result)=>{
                if(err)
                    reject(err);
                else
                    resolve(result);
            });
        })
    }
}

module.exports = Product;


