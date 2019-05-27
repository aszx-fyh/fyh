import * as foo from "foo";

let bar = foo.bar;
console.log(bar);

//交叉类型
function extend<T, U>(first: T, second: U): T & U {
  const result = <T & U>{};
  for (const id in first) {
    if (first.hasOwnProperty(id)) {
      (<T>result)[id] = first[id];
    }
  }
  for (const id in second) {
    if (!result.hasOwnProperty(id)) {
      (<U>result)[id] = second[id];
    }
  }
  return result;
}

const x = extend({ a: "hello" }, { b: 42 });

// 现在 x 拥有了 a 属性与 b 属性
const a = x.a;
const b = x.b;
let nameNumber: [string, number] = ["jeerry", 20];
nameNumber[1] = 55;
const [name, num] = nameNumber;

type Text = string | { text: string };
type Coordinates = [number, number];
type Callback = (data: string) => void;

declare const myPoint: { x: number; y: number };
interface Point {
  x: number;
  y: number;
}
declare const myPoint1: Point;
interface Point {
  z: number;
}
let s = myPoint1.z;

enum Weekday {
  Monday,
  Tuseday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
namespace Weekday {
  export function isBusinessDay(day: Weekday) {
    switch (day) {
      case Weekday.Saturday:
      case Weekday.Sunday:
        return false;
      default:
        return true;
    }
  }
}

const mon = Weekday.Monday;
const sun = Weekday.Sunday;

console.log(Weekday.isBusinessDay(mon)); // true
console.log(Weekday.isBusinessDay(sun));

const foo1 = 123;
const bar1 = foo1.toString();

window.helloWorld();

interface ReturnString {
  (): string;
}
declare const foo2: ReturnString;
const bar2 = foo2();

interface Complex {
  (foo: string, bar?: number, ...other: boolean[]): number;
}
interface Overloaded {
  (foo: string): string;
  (foo: number): number;
}
function stringOrNumber(foo: number): number;
function stringOrNumber(foo: string): string;
function stringOrNumber(foo: any): any {
  if (typeof foo === "number") {
    return foo * foo;
  } else if (typeof foo === "string") {
    return `hello ${foo}`;
  }
}

const overloaded: Overloaded = stringOrNumber;
const str = overloaded("");
const num1 = overloaded(213);

//内联注解
let overloaded1: {
  (foo: string): string;
  (foo: number): number;
};

interface CellMeWithNewToGetString {
  new (): string;
}

declare const Foo: CellMeWithNewToGetString;
const bar111 = new Foo();
interface F1 {
  bar: number;
  foo: string;
}
const f1 = {} as F1;
f1.bar = 34;
f1.foo = "";
const f2 = <F1>{
  // 编译器将会提供关于 Foo 属性的代码提示
  // 但是开发人员也很容易忘记添加所有的属性
  // 同样，如果 Foo 被重构，这段代码也可能被破坏（例如，一个新的属性被添加）。
};

const f3: F1 = {};
interface fx {
  name: string;
}
function logName(something: fx) {
  console.log(something.name);
}

logName({ name: "matt" }); // ok
let ss = { name: "matt", job: "being awesome" };
logName(ss);
let xs: { foo: number; [x: string]: any };

xs = { foo: 1, baz: 2 };

let foo3: "Hello";
foo3 = "bar";

type CardinalDirection = "North" | 1 | "East" | "South" | "West";

function move(distance: number, direction: CardinalDirection) {
  // ...
}

move(1, "North"); // ok
move(1, "Nurth"); // Error

function iTakeFoo(foo: "foo") {}
const test = {
  someProp: "foo" as "foo"
};
iTakeFoo(test.someProp);

function strEnum<T extends string>(o: Array<T>): { [k in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

const Direction1 = strEnum(["North", "South", "East", "West"]);
type Direction = keyof typeof Direction1;

let sample: Direction;
sample = Direction1.North;
sample = "North";
sample = "AnytingElse";

type Koo = {
  bar: number;
  bas: number;
};

type KooReadonly = Readonly<Koo>;
const koo: Koo = { bar: 123, bas: 3434 };
koo.bar = 454545;
const kooReadonly: KooReadonly = { bar: 343, bas: 565 };
kooReadonly.bar = 6565;

const getJSON = <T>(config: {
  url: string;
  headers?: { [key: string]: string };
}): Promise<T> => {
  const fetchConfig = {
    method: "GET",
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(config.headers || {})
  };
  return fetch(config.url, fetchConfig).then<T>(response => response.json());
};
const foo4 = {
  a: 123,
  b: 456
};

foo4.a = "hello";

interface NestedCSS {
  color?: string;
  [selector: string]: string | NestedCSS;
}

const example: NestedCSS = {
  color: "red",
  ".subclass": {
    color: "blue"
  }
};
// type FieldState = {
//   value: string;
// };
// //交叉类型
// type FormState = { isValid: boolean } & {
//   [fieldName: string]: string;
// };

type FieldState = {
  value: string;
};

type FormState = { isValid: false } & { [fieldName: string]: FieldState };

// 将它用于从某些地方获取的 JavaScript 对象
declare const foo: FormState;

const isValidBool = foo.isValid;
const somethingFieldState = foo["something"];

// 使用它来创建一个对象时，将不会工作
const bar2323: FormState = {
  // 'isValid' 不能赋值给 'FieldState'
  isValid: false
};
