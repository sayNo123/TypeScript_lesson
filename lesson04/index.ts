var fun = ():void => {
  console.log(123);
}
fun();

let fun1 = (...numArr: number[]): string => {
  let sum = 0;
  for(let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  return `${sum}px`;
}
console.log(fun1(1,2,333,4,1,2,3,2))