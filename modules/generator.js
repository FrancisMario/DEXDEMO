
 function generate_delivery_id(key){
        // const randomstring = require("randomstring");  
        //         const val = randomstring.generate({
        //           length: 80,
        //             charset: 'alphanumeric'
        //         });
        const crypto = require("crypto");
        let val = crypto.createHash('md5').update(key).digest("hex");
        return val;

}



// this function gets the most recent delivery from the database 
//     async function add_booking(content) {

//     const pool = require('./database');
//     var Json_reviews = "";

//     // const user_id = generator.generate_delivery_id;
//     let promise = new Promise((res, rej) => {
//         var sql = "SELECT * FROM `news_deliveries` ORDER BY 'table_id' DESC LIMIT 1";
//         //test:  var sql = "SELECT * FROM `admins`";
//         pool.query(sql, function (err, result, fields) {
//             if (err) res("500");
//             res(result);    
//         });
//     });

//     // wait until the promise returns us a value
//     let result = await promise;
//     console.log(result);
//     console.log("hello");
//     return result;

// }


module.exports.generate_delivery_id = generate_delivery_id;