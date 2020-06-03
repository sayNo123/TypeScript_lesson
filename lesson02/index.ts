// 布尔类型（boolean）
var flag: boolean = true
flag = false

// 数字类型（number）
var a: number = 123
console.log(a);
// a = "string"     // 错误写法
a = 456

// 字符串类型（string）
var str: string = "this is str"
// str = 12    // 错误写法
// str = false   // 错误写法

// 数组类型（array）
// 第一种定义数组的方式：
let arr: number[] = [1,2,3,4,4,5,5,666]
console.log(arr)
// 第二种定义数组的方式：
let arr1: Array<number> = [1,2,3,4,5,6]
console.log(arr1)

// 元组类型（tuple） 属于数组的一种，可以指定数组里元素的类型
let arr2: [string, number, boolean] = ["你好", 2.34, true]
console.log(arr2)

// 枚举类型（enum）
/* 随着计算机的不断普及，程序不仅只有用于数值计算，还更广泛的用于处理非数值的数据。
// 例如：性别、月份、星期几、颜色、单位名、学历、职业等，都不是数值数据
// 在其他程序设计语言中，一般用一个数值来代表某一状态，这种处理方法不直观，易读性差。
// 如果能在程序中用自然语言中有相应含义的单词来代表某一状态，则程序就很容易阅读和理解。
// 也就是说，事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示它的每一个值，这种方法称为枚举方法，用这种方法定义的类型称枚举类型。*/
/*
enum 枚举名{
  标识符[=整型常量],
  标识符[=整型常量],
  ...

  标识符[=整型常量]
}
*/
enum Flag {
  success = 1,
  error = -1
}
var f: Flag = Flag.success
console.log(f)  // 1

enum Color {
  red,
  blue,
  orange
}
var c: Color = Color.blue
console.log(c)  // 1

enum Color1 {
  red,
  blue = 5,
  orange
}
var c1: Color1 = Color1.blue
var c2: Color1 = Color1.orange
console.log(c1)  // 5
console.log(c2)  // 6