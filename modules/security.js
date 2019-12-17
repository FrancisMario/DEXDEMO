const pool = require('./database');

// this function adds new deliveries to the database 
    async function auth(content) {
    var sql = "SELECT * FROM `admin` WHERE `user_id` = '"+content.userid+"' AND `user_password` = '"+content.password+"'";

       let promise = new Promise((res, rej) => {

        pool.query(sql, function (err, result, fields) {
            
            if (err){ console.log(err); res("500")};
            if(!(result === undefined)){
                console.log(JSON.stringify(result[0]));
                res("200");
            } else {
                res("404");
            }
                 
        });
    });

    // wait until the promise returns us a value
    let result = await promise;
    let bool = (result === "200");
        if(bool){
            return true;
        } else {
            return false;
        }
}

module.exports.auth = auth;