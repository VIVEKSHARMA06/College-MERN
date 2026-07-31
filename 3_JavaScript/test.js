// console.time("x");
// function fn() {
//     let s = 0;
//     for (n of arguments) {
//         s += n;
//     }
//     // console.log(s);
// }
// fn(1, 2, 3, 4, 5, 6, 7);
// console.timeEnd("x");
// console.time("y");
// function fn2(...arr) {
//     let s = 0;
//     let sum = arr.reduce((a,n) => a+n);
//     // console.log(sum);
// }
// fn2(1,2,3,4,5,6,7)
// console.timeEnd("y");
// let arr=Array.from({a:1,});
// console.log(arr);
let arr = [12,43,1,6,23,67]
arr.sort((a,b) => b-a);
console.log(arr);
