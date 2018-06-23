const express = require('express');
const router = express.Router();
const rp = require('request-promise');
const key = require('../model/keys');

router.get("/", (req, res)=>{

    var options = {
        uri: key.shopifyLink,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };
     
    rp(options)
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            // API call failed...
            res.send('API call failed..');
    });

});

router.get("/productInfo", (req, res)=>{
    // res.render

});



module.exports = router;
