const express = require('express');
const router = express.Router();
const db = require('./../modules/database');

/* GET home page. */
router.get('/auth', async function(req, res, next) {

    var id = req.params.user_id;
    var pass = req.params.user_pass;

    var sql = "SELECT * FROM `admin` WHERE `user_id` = '"+id+"' AND `user_password` = '"+pass+"'";

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
        // code to handle successfull  login 
    } else {
        // code to handle unsuccessfull  login
     }

});

module.exports = router;