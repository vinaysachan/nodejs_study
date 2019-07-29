//promise => then(success) => catch(error)


// const fetchdata = () => {
//     const promiseFn = new Promise((resolve, reject) => {
//         setTimeout(() => { resolve('Done 1 2 3 4 5'); },2000);
//     });
//     return promiseFn;
//  };
//  setTimeout(()=> {
//     fetchdata().then(text => {
//         console.log(text);
//         return fetchdata();
//     }).then(text2 => { console.log(text2); });
//     console.log('Timer is done 2');
//  },2000);



const mypromiseFn = new Promise((resolve, reject) => {
    setTimeout(() => { 
        // reject('Done 1 2 3 4 5'); 
        throw new Error("oops!");
    },2000);
});

setTimeout(()=> {
    console.log('vinay');
    mypromiseFn.then((data) => {
        console.log(data);
    }).catch(error => {
        console.log(error);
    });
}, 2000);

let name = 'vinay' ;
let a = 'My name is ' + name ;
let b = `My name is ${name}`; 
console.log(a,b);
// ' "" ` ~



 