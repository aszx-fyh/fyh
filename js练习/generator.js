function* gen(a,b){
    console.log('hello '+(yield 'gen'));
    foo(yield a,yield b);
    let s=yield 'yield';
    
    return 1;
}
function foo(a,b){
    console.log(a,b);
}
const g=gen(2,3);
g.next(12);//next传值,作为上一次yield语句的返回值
g.next();

let myIterable={name:'fyh'};
myIterable[Symbol.iterator]=function*(){
    yield 1;
    yield 2;
    yield 3;
}

let arr_myIterable=[...myIterable];