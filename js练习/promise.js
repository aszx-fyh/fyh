let p=Promise.resolve(12);
let p1=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('resolve p1');
        }, 4000);
});

let p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject('reject p2');
    }, 2000);
});

Promise.all([p,p2,p1]).then((res)=>{
    console.log('all',res);
}).catch(error=>{
    console.log('catch',error);
});