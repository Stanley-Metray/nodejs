const mysql = require('mysql');

class User {

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
        })
    }

    createTable() {
        const query = `create table if not exists appointments ( id int auto_increment not null, username varchar(225) not null, phone varchar(25) not null, email varchar(225) not null, primary key (id))`;
        this.connection.query(query, (err)=>{
            if(err)
                return console.log(err);
        });
    }

    scheduleAppointment(user)
    {
        const query = `insert into appointments (username, phone, email) values (?,?,?)`;
        const values = [user.username, user.phone, user.email];

        return new Promise((resolve, reject)=>{
            this.connection.query(query, values, (err, result)=>{
                if(err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    }

    getAllApointments()
    {
        const query = `select * from appointments`;

        return new Promise((resolve, reject)=>{
            this.connection.query(query, (err, result)=>{
                if(err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    }

    deleteApointment(id)
    {
        const query = 'delete from appointments where id=?';

        return new Promise((resolve, reject)=>{
            this.connection.query(query, [id], (err, result)=>{
                if(err)
                    reject(err);
                else
                    resolve(result);
            });
        });
    }
}

module.exports = User;
