const express = require('express');
const router = express.Router();
const fs = require('mz/fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200).render('login',{
        title: 'Login',
        logout : false,
        company_name: 'DEX_GAMBIA'
    });

});

module.exports = router;
    //     Promise.all([
    //         fs.readFile('./views/header.hbs'),
    //         fs.readFile('./views/login.hbs'),
    //         fs.readFile('./views/footer.hbs')
    
    // ])
    //     .then(files => files.map(f => f.toString('utf-8')))
    //     .then(files => res.send(files.join('')))
    //     .catch(error => res.status(500).send(error.toString()));