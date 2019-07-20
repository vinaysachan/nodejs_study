const a = {name : "vinay"};
const b = a ; //copy(clone) with pointer
const c = {...a} ; //clone without pointer
b.name = 'Sanjeev' ;
c.name = 'Prasoon' ;
console.log(a,b,c);


setTimeout(() => {
    console.log('timer 1');
},1000);