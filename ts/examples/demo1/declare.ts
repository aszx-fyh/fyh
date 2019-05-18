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
