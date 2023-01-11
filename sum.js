/* eslint-disable func-style */
const args = process.argv;
// console.log(args.slice(2));
// let a = Number(args[2]);
// let b = Number(args[3]);
// console.log(a + b);

// function sum() {
//   return (Number(args[2]) + Number(args[3]));
// }

const sum = () => Number(args[2]) + Number(args[3]);


console.log(sum());