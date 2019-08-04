const express = require('express');

const path = require('path'); //Npm Node Core Module

const utilPath = require('../util/main_module_dir');

const shopControllerRequire = require('./../controllers/shopController');


const Router = express.Router();

Router.get('/', (req, res, next) => {
    //res.send('<h1>dsfsd</h1>');
    //res.sendFile(path.join(__dirname,'../','views','shop.html'));
    let html_path = path.join(utilPath, 'views', 'shop.html' ); //main_dir + views + shop.html
    res.sendFile(html_path);
});

Router.get('/pug_page', (req, res, next) => {
    //data <== from db
    let data = { title: 'Pug title', heading: 'This is Pug Heading' } ;
    res.render('pug/pug_page', data);
});

Router.get('/ejs_page',(req, res, next) => {
    let data = { title: 'Ejs title', heading: 'This is Ejs Heading' } ;
    res.render('ejs/ejs_file.ejs', data);
});
//Url Parameters :-
Router.get('/ejs_page/:country',(req, res, next) => {

    console.log(shopControllerRequire.name);
    
    console.log(shopControllerRequire.myfunction());
    

    console.log(req.params); 
    let url_params = req.params;
    let data = { title: 'Ejs title', heading: 'This is Ejs Heading with Params '+ url_params.country } ;
    res.render('ejs/ejs_file.ejs', data);
});

//Use Controller :-
Router.get('/ejs_page_with_conytroller',shopControllerRequire.ejsPagehandle);


module.exports = Router ;