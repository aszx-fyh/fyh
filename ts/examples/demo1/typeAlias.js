"use strict";
function getName(n) {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}
var people;
var s = people.name;
var s = people.next.name;
var s = people.next.next.name;
var s = people.next.next.next.name;
var sk = "hello";
