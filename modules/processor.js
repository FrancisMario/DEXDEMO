const pool = require('./database');

// this retrieves all the bookings from the database
async function getAllBookings() {

    var sql = "SELECT * FROM `deliveries` WHERE 'delivery_status' != 'delivered'"
    let promise = new Promise((res, rej) => {
        pool.query(sql, function (err, result, fields) {
            if (err) {
                res("404")
            }
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





module.exports.confirmDelivery = confirmDelivery;
module.exports.getAllBookings = getAllBookings;
module.exports.getElement = getElement;
module.exports.makeReciepts = makeReciepts;