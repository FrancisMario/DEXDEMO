const express = require('express');
const router = express.Router();
const fs = require('mz/fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200).render('panel',{
        title: 'Clients',
        logout : true,
        company_name: 'DEX_GAMBIA',
        client : [
            {client_name : 'Gamcell', client_image_url : '', total : 100, pending : 6,client_id : 0},
            {client_name : 'Qcell', client_image_url : '', total : 149, pending : 62, client_id: 1},
            {client_name : 'GPA', client_image_url : '', total : 40, pending : 78,client_id:2},
            {client_name : 'WestCoastRadio', client_image_url : '', total : 156, pending : 10,client_id:3}
        ]
    });

});
module.exports = router;