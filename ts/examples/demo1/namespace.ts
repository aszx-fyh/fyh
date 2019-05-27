namespace importing {
  export class Foo {}
}
import Bar = importing.Foo;
let bar: Bar;

let foo = 123;
let bak: typeof foo;
bak = 343;
//bak = "23";//Error

class Fop {
  foo: number = 1;
}
declare let _foo: Fop;
let barz = _foo.foo;
let bara = { a: 3 };
let _bara: typeof bara = { a: 33 };

const colors = {
  red: "red",
  blue: "blue"
};

type Colors = keyof typeof colors;
let color: Colors; //'red'|'blue'
color = "red";
color = "blue";
let ss = Object.keys(colors);
