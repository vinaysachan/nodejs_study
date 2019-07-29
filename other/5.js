class myCls1 {
    constructor() {
        
    }
}
class myCls2 extends myCls1 {
    name;
    constructor(userName) {
        super();
        this.name = userName ;
    }
    getName() {
        return this.name ;
    }
}
const a = new myCls2('vinay');
console.log(a.getName());