const args = process.argv;
let rollTime = 0;
let dice = [];
while (rollTime < args[2]) {
  dice.push(Math.floor(Math.random() * 7));
  rollTime++;
}
console.log(dice.join(", "));
