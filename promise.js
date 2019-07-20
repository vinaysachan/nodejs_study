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
        resolve('Done 1 2 3 4 5'); 
    },2000);
});

setTimeout(()=> {
    console.log('vinay');
}, 2000);




 