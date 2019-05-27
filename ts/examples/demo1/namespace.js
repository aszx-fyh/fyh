var importing;
(function (importing) {
    var Foo = /** @class */ (function () {
        function Foo() {
        }
        return Foo;
    }());
    importing.Foo = Foo;
})(importing || (importing = {}));
var Bar = importing.Foo;
var bar;
