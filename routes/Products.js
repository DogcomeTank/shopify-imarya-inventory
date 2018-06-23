const express = require('express');
const router = express.Router();
const rp = require('request-promise');
const key = require('../model/keys');

router.get("/", (req, res)=>{

    var options = {
        uri: 'https://4314729d9708f1ac8c8b2e45276db2f8:9b00c21d7c2901c54cf628868e0dc5cb@imaryakids.myshopify.com/admin/products.json',
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