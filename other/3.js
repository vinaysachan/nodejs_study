//class => property + method

//object ==> instance of a class
const a = {
        name : "vinay", 
        country : "India",
        objfunction : function () {
            return this.name ;
        }
};
console.log(a.country) ;
console.log(a.objfunction()) ;

const person = {
    name : "Vinay", 
    age : 33,  
    anFn : () => { console.log('Hi, My name is ' + this.name )}
    //Arraow function is not taking this var inside her body
};
person.anFn();


