
const user =  require('./user');
const UserClass = require('./use-single');
// import {user} from './user'; // ES6

console.log(user);

// const userObj = new UserClass;

// console.log(userObj.team1);

class clsSecond extends UserClass {
    constructor() {
        super();
    }
}
const userObj = new clsSecond;
console.log(userObj.team1);

