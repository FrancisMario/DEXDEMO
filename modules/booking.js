const pool = require('./database');

// this function adds new deliveries to the database 
    async function add_booking(content) {

    const generator = require('./generator.js');
        
    var sender_contact = '{phone : "'+ content.sender_contact.phone +'", phone : "'+ content.sender_contact.email +'" }';
    var recipient_contact =  '{phone : "'+ content.recipient_contact.phone +'", phone : "'+ content.recipient_contact.email +'" }';
    var key = content.sender_name + sender_contact + content.pickup_date + content.pickup_time + content.pickup_address + content.package_size + content.package_description + content.recipient_name + recipient_contact + content.recipient_location;
    console.log("------------------------------------------------");
    console.log(key);
    console.log("------------------------------------------------");
    const delivery_id = generator.generate_delivery_id(key.toString());
    var sql = "INSERT INTO `deliveries` " + 
    "(`table_id`, `delivery_id` , `sender_id`, `pickup_date`, `pickup_time`, `pickup_address`, `package_size`, `package_description`, `recipient_name`, `recipient_contact`, `recipient_location`, `delivery_status`)" + 
    " VALUES (NULL,'"+ delivery_id +"', '"+ content.sender_name +"', '"+ content.pickup_date +"', '"+ content.pickup_time +"', '"+ content.pickup_address +"', '"+ content.package_size +"', '"+ content.package_description +"', '"+ content.recipient_name +"', '"+ recipient_contact +"', '"+ content.recipient_location +"', 'pending')";
    let promise = new Promise((res, rej) => {
        //test:  var sql = "SELECT * FROM `admins`";
       
       
        pool.query(sql, function (err, result, fields) {
            console.log(sender_contact);
            if (err){ console.log(err); res("500")};
            res("200");
            //testing:   console.log(pool.affectedrows);
        });


    });

    // wait until the promise returns us a value
    let result = await promise;
    let bool = (result === "200");
    console.log("----------- "+bool+" ------------")
    if(bool){
        console.log("----------- returning true ------------")
        return true;
    } else {
        console.log("----------- returning false ------------")
        return false;
    }
}

// this function adds new deliveries to the database 
    async function get_booking(content) {
    var sql = 'SELECT * FROM `deliveries` WHERE `delivery_id` =' + content;  

    let promise1 = new Promise((res, rej) => {

        pool.query(sql, function (err, result, fields) {

            if (err){ console.log(err); res("500")};    
            
            // making sure the result isn't an empty response
                console.log({result});
                console.log({sql});
                if (result[0] != undefined) {
                    res({result});
                    } else {
                        res("NO_ITEM_FOUND");
                }
            //testing:   console.log(pool.affectedrows);
        });


    });

    // wait until the promise returns a value
    return await promise1;
    
}

module.exports.add_booking = add_booking
module.exports.get_booking = get_booking