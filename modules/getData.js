const pool = require('./database');

// this retrieves all the details about a recorded client from database using the client id as key
async function getClientInfo(params) {
    var sql = '';
    if(params.client_type == 'cp'){
         sql = "SELECT * FROM `corporate_clients` WHERE `client_id` = '" + params.id  + "';";
    } else {
        sql = "SELECT * FROM `regular_clients` WHERE `client_id` = " + params.id;
        
    }
    
    let promise = new Promise((res, rej) => {
        pool.query(sql, function (err, result, fields) {
            if (err) {
                console.log(sql);
                res("404")
            }
            if (result != undefined) {
                console.log(result[0]);
                console.log(sql);
                res(JSON.stringify(result));
            }
            res("NO_RECORDS_ERROR");
        })
    }).catch(function(){console.log("LOL")});
    var response = await promise;
    return response;

}


// this retrieves all the Recorded clients
async function getAllClients(params) {
    var sql = '';
    if(params.client_type == 'cp'){
         sql = "SELECT * FROM `corporate_clients` ;";
    } else {
        sql = "SELECT * FROM `regular_clients` ;";
        
    }
    
    let promise = new Promise((res, rej) => {
        pool.query(sql, function (err, result, fields) {
            if (err) {
                console.log(sql);
                res("404")
            }
            if (result != undefined) {
                console.log(result[0]);
                console.log(sql);
                res(JSON.stringify(result));
            }
            res("NO_RECORDS_ERROR");
        })
    }).catch(function(){console.log("LOL")});
    var response = await promise;
    return response;

}



// this retrieves a single element from the database using the element id
async function getElement(elementId) {
    var sql = "SELECT * FROM `deliveries` WHERE 'delivery_id' = '" + elementId + "';";
    let promise = new Promise((res, rej) => {
        pool.query(sql, function (err, result, fields) {
            if (err) {
                res("404")
            }
            // console.log(fields)
            if (result != undefined) {
                console.log(JSON.stringify(result[0]));
                res(JSON.stringify(result));
            }
            res("NO_RECORDS_ERROR");

        })
    });
    var response = await promise;
    return response;
}


// this retrieves a single element from the database using the element id
async function confirmDelivery(content) {
    var sql = "UPDATE `deliveries` SET `delivery_status` = '1' WHERE `deliveries`.`delivery_id` = '" + elementId + "';";

    if (content.user_evn.auto_reciepts = true) {
        // TODO send a delivery reciept
    }
    let promise = new Promise((res, rej) => {
        pool.query(sql, function (err, result, fields) {
            if (err) {
                res("404")
            }
            // console.log(fields)

            res('200');


        });
    });
    var response = await promise;
    return response;
}


async function makeReciepts(content) {
    var sql = "INSERT INTO `delivery_reciepts` (`table_id`, `client_id`, `delivery_id`, `date`, `amount`)\
     VALUES (NULL, '"+content.client_id+"', '"+content.delivery_id+"', '"+Date()+"', '"+content.payment+"')";
    let promise = new Promise((res, rej) => {
        pool.query(sql, function (err, result, fields) {
            if (err) {
                res("404")
            }
            res("NO_RECORDS_ERROR");

        })
    });
}





module.exports.getModalInfo = getClientInfo;
module.exports.getAllClients = getAllClients;
// module.exports.getAllBookings = getAllBookings;
// module.exports.getElement = getElement;
// module.exports.makeReciepts = makeReciepts;