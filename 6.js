class Human {
    gender ='Male';
    age =30;
    printMyGender = () => {
        return this.gender;
    }
}
class Person extends Human {  
    gender ='Female';
    name ='Vinay sachan';
    // age = 89 ;
    printMyName = () => {
        return this.name;
    }
    printMyAge = () => {
        return this.age;
    }
}
const person = new Person();
console.log(person.printMyAge());


let a = [1,2,3,4];
//let b = a + [5,6,7,8,90]
a = [...a, 5,6,7,8,9,0]  // [1,2,3,4]; 
console.log(a);

let obj = {'name' : "Vinay"};
console.log(obj);
obj = {...obj, age : 30};
console.log(obj);
//Rest Operator
function sum (...args) {
    //array is args
}
sum(1,2,3,4);

[username , userage , usercountry] = ['vinay', 30, 'india'] ; //DB 

console.log(usercountry);

