

let shopControllerNew  = {

    name : 'vinay' ,

    myfunction : () => {
        return 'you are under my function in shopController' ;
    },

    ejsPagehandle : (req, res, next) => {
        let data = { title: 'Ejs title', heading: 'This is Ejs Heading with Comtroller' } ; //Model
        res.render('ejs/ejs_file.ejs', data);
    },
};

module.exports = shopControllerNew ;


// exports.ejsPagehandle = (req, res, next) => {
//     let data = { title: 'Ejs title', heading: 'This is Ejs Heading with Comtroller' } ; //Model
//     res.render('ejs/ejs_file.ejs', data);
// };