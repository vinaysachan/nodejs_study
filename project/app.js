const express = require('express');
//Most Impoertant Line :- 
const app = express();
const bodyparser = require('body-parser');
const pathPackage = require('path'); //Npm Node Core Module
const shopRoute = require('./routes/shop');
const adminRoute =  require('./routes/admin');

// const rout = require('./routes'); when we creatre index.js and all routes included in index.js 

const utilPath = require('./util/main_module_dir');
const pug = require('pug');
let ejs = require('ejs');
app.use(bodyparser.urlencoded());


app.set('view engine', 'pug'); //After the view engine is set, you don’t have to specify the engine or load the template engine module in your app; Express loads the module internally, as shown below (for the above example).


//dll

//app => middleware ==>     app.use(path(optional), callbackFn,callbackFn,callbackFn..)

//Public folder is not accable so make this folder static :-

//=> actual public path==>  /var/vinay/www/study/nodejs_study/project/ (our project path) + 'public' (working directory)



app.use(express.static(pathPackage.join(utilPath,'public')));

app.use((req, res, next) => {
    console.log('This is midlleware 1');
    next();
});

app.use((req, res, next) => {
    //Ip check =>
    // if(IpLimitReach > 2) {
    //     res.send('Vinay');
    // } else {
    //     next();
    // } 
    console.log('This is midlleware 2');
    // res.send('Vinay');
    next();
});

app.use(shopRoute);
app.use('/admin',adminRoute);

app.use((req, res, next) => {

    // res.status(404).send('<h1>Page Not Found</h1>');
    // res.status(404).sendFile(pathPackage.join(__dirname, 'views', '404.html'));
    res.status(404).sendFile(pathPackage.join(utilPath, 'views', '404.html'));
}); 

// app.get('/add-product', (req, res, next) => {
//     res.send('<h1>This is add-product</h1><form method="post" action="/product"><input type="text" name="title" /><button type="submit">Submit</button></form>');
// });
//Method ==> only Post
// app.post('/product', (req, res, next) => {
//    //Form Submit ==> ....
//     res.redirect('/');
// });
// app.get('/', (req, res, next) => {
//     res.send('<h1>This is Prodcuts Listing</h1>');
// });

app.listen(2000);