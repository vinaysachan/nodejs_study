const path = require('path');

//process.mainModule.filename ==> main mdule file name with absolute path


const main_module = process.mainModule.filename ;

const main_module_dir = path.dirname(main_module);


module.exports =  main_module_dir;
