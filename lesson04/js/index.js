"use strict";
var fun = function () {
    console.log(123);
};
fun();
var fun1 = function () {
    var numArr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numArr[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < numArr.length; i++) {
        sum += numArr[i];
    }
    return sum + "px";
};
console.log(fun1(1, 2, 333, 4, 1, 2, 3, 2));
