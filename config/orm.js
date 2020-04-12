let connection = require('./connection');

//needed methods
//1. selectAll()
//2. insertOne()
//3. updateOne()

var orm = {
    selectAll: function (cb) {
        let queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function (burger_name, cb) {
        let queryString = "INSERT INTO burgers (burger_name) VALUES(?);";
        connection.query(queryString, [burger_name], (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    update: function (id, cb) {
        let queryString = "UPDATE burgers SET chomped = 1  WHERE id = ?;";
        connection.query(queryString, [id], (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    delete: function (id, cb) {
        let queryString = "DELETE FROM burgers WHERE id = ?";
        connection.query(queryString, [id], (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }

}


//export orm
module.exports = orm;