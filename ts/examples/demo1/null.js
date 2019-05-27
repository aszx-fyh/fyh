"use strict";
function broken(name) {
    function postfix(epithet) {
        return name.charAt(0) + ".  the " + epithet; // error, 'name' is possibly null
    }
    name = name || "Bob";
    return postfix("great");
}
function fixed(name) {
    function postfix(epithet) {
        return name.charAt(0) + ".  the " + epithet; // ok
    }
    name = name || "Bob";
    return postfix("great");
}
console.log(broken(null));
function broken1(name) {
    name = name || "xxx";
    return name.charAt(0) + "xxx";
}
console.log(broken1(null));
