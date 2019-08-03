const express = require('express');

const path = require('path');

const utilPath = require('./../util/path');

const Router = express.Router();

Router.get('/add-product',(req, res, next) => {
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    res.sendFile(path.join(utilPath,'views','add-product.html'));
});

Router.post('/product', (req, res, next) => {
    //Form Sublit ->
   console.log(req.body,'================');
   res.redirect('/');
});

module.exports = Router ;