let a={};
Object.defineProperty(a,'name',{
    value:3
});
let b=a.name;
let s=Object.getOwnPropertyDescriptor(b,'name');
console.log(s);
