const isParensBalanced=(str)=>{
    return str.split('').reduce((counter,char)=>{
        if(counter<0){
            return counter;
        }
        else if(char==='('){
            return ++counter;
        }else if(char===')'){
            return --counter
        }else{
            return counter;
        }
    },0)
}
isParensBalanced('(())') // 0 <-- balanced
isParensBalanced('(asdfds)') //0 <-- balanced
isParensBalanced('(()') // 1 <-- not balanced
isParensBalanced(')(') // -1 <-- not balanced

let cars = ['BMW','Benz', 'Benz', 'Tesla', 'BMW', 'Toyota'];
let carsObj=cars.reduce((obj,name)=>{
    obj[name]=obj[name]?++obj[name]:1;
    return obj;
},{});

//利用解构删除不需要的属性
let {_internal, tooBig, ...cleanObject} = {el1: '1', _internal:"secret", tooBig:{}, el2: '2', el3: '3'};
console.log(cleanObject); // {el1: '1', el2: '2', el3: '3'}