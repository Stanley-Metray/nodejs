const mysql = require('mysql');


class Expense {
    connect() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'a9591303870A',
            database: 'sharpener'
        });

        this.connection.connect((err) => {
            if (err) return console.log(err);
            console.log("Connected...");
        });
    }

    addExpense(expense) {
        const query = `insert into expenses (item, price, description) values (?,?,?)`;
        const values = [expense.item, expense.price, expense.description];

        return new Promise((resolve, reject) => {
            this.connection.query(query, values, (err, result) => {
                if (err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    }

    getExpenses(){
        const query = `select * from expenses`;

        return new Promise((resolve, reject)=>{
            this.connection.query(query, (err,result)=>{
                if(err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    }

    deleteExpense(id)
    {
        const query = `delete from expenses where id=?`;
        const values = [id];

        return new Promise((resolve, reject)=>{
            this.connection.query(query, values, (err, result)=>{
                if(err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    }
}


module.exports = Expense;