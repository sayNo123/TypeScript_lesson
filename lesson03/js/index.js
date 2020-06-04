"use strict";
// 函数的定义
// ES5
// function run() {
//   return "run";
// }
// // 匿名函数
// var run = function() {
//   return "run";
// }
// TS 中定义函数的方法
// 正确的写法
// function run(): string {
//   return "run";
// }
// 错误的写法
// function run(): string {
//   return 123;
// }
// 匿名函数
// var fun = function(): number {
//   return 123;
// }
// console.log(fun());
// TS 中定义方法传参
// function getInfo(name: string, age: number): string {
//   return `${name} ---- ${age}`;
// }
// console.log(getInfo("张三", 20));
// 匿名函数传参
// var getInfo = function(name: string, age: number): string {
//   return `${name} ---- ${age}`;
// }
// console.log(getInfo("张三",21))
// 没有返回值的方法
// function run(): void {
//   console.log("run");
// }
// run();
// 方法的可选参数
// ES5 里面的方法实参和形参可以不一样，但是 TS 里必须一样，如果不一样，就需要配置可选参数
// function getInfo(name: string, age?:number): string {
//   if(age) {
//     return `${name} --- ${age}`;
//   } else {
//     return `${name} --- 年龄保密`;
//   }
// }
// console.log(getInfo("张三"))
// 默认参数
// ES5 里面没法设置默认参数，ES6 和 TS 中可以设置默认参数
// function getInfo(name: string, age:number = 30): string {
//   if(age) {
//     return `${name} --- ${age}`;
//   } else {
//     return `${name} --- 年龄保密`;
//   }
// }
// console.log(getInfo("张三"))
// console.log(getInfo("张三", 40))
// 剩余参数
// function sum(a: number, b: number, c: number, d: number): number {
//   return a + b + c + d;
// }
// console.log(sum(1,2,3,4))
// 三点运算符，接收形参传过来的值
// function sum(...result: number[]): number {
//   var sum = 0;
//   for(var i = 0; i < result.length; i++) {
//     sum += result[i];
//   }
//   return sum;
// }
// console.log(sum(1,2,3,4,5,6))
// function sum(a: number, b: number, ...result: number[]): number {
//   var sum = a + b;
//   for(var i = 0; i < result.length; i++) {
//     sum += result[i];
//   }
//   return sum;
// }
// console.log(sum(1,2,3,4,5,6))
// 函数重载
// java 中方法的重载，重载的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况
// JavaScript 中的重载通过为同一个函数提供多个函数类型定义来实现多种功能的目的。
// TS 为了兼容 ES6 和 ES6 重载的写法，和 java 中有区别
// ES5 中出现同名方法，下面的函数会替换上面的函数
// function css(config) {
// }
// function css(config, value) {
// }
// TS 中的重载
// function getInfo(name: string): string;
// function getInfo(age: number): number;
// function getInfo(str: any): any {
//   if(typeof str === 'string') {
//     return "我叫: " + str;
//   } else {
//     return "我的年龄是：" + str;
//   }
// }
// console.log(getInfo("张三"))  // 正确的写法
// console.log(getInfo(12))  // 正确的写法
// console.log(getInfo(true))  // 错误的写法
// function getInfo(name: string): string;
// function getInfo(name: string, age: number): string;
// function getInfo(name: any, age?: any): any {
//   if(age) {
//     return `我叫：${name}, 我的年龄是：${age}`;
//   } else {
//     return `我叫：${name}`;
//   }
// }
// console.log(getInfo("张三", 24))
// 箭头函数
// ES5
//  setTimeout(function() {
//    console.log("run");
//  }, 1000);
// this 指向的问题，箭头函数里 this 指向上下文
setTimeout(function () {
    console.log("run");
}, 1000);
