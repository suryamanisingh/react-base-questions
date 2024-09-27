//Qustion 1:---------------------------------------------------------
// ANSWER:
console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
new Promise((resolve) => {
  resolve(console.log(3));
}).then(() => {
  console.log(4);
});
new Promise((resolve) => {
  resolve(console.log(5));
}).then(() => {
  console.log(6);
});
console.log(7);

//Qustion 2:---------------------------------------------------------
// ANSWER:
console.log(0);
for (var i = 1; i < 5; i++) {
  setTimeout(() => console.log(i));
}
console.log(6);

//Qustion 3:---------------------------------------------------------
// ANSWER:
var str = 'Name';
function testString() {
  console.log(str);
  var str = 'changed';
}
testString();
console.log(str);

//Qustion 4:---------------------------------------------------------
// ANSWER:
let obj2 = {};
let profile = {
  name: "Michal"
}
let profile2 = {
  name: "Michal"
}
console.log({} == {});
console.log(obj2 == {});
console.log(profile === profile2);
console.log(null == undefined);

//Qustion 5:---------------------------------------------------------
// ANSWER:
x = 33;
console.log(x);
var x;
y = 34;
var y;
console.log(y);

//Qustion 6:---------------------------------------------------------
// ANSWER:
let obj = [
  0,
  1,
  'Hyderabad',
  {
    name: 'Rohit',
    city: 'Noida',
  },
];
let obj3 = [...obj];
obj3[3].name = 'Mohit';
obj3[2] = 'Mumbai';
console.log(obj);

//Qustion 7:---------------------------------------------------------
async function TotalExecution() {
  await func1(); //10sec
  await func2(); //5 sec
  await func3(); //2 sec
}
