// Object Homework
// 1.
let person = {
    name: "Meri",
    age: 19,
    city: "Yerevan"
};
person.isStudent = true;
delete person.city;
console.log("age" in person);
console.log(person);

// 2.
let object = {
    password: "hello",
	age: undefined,
	address: 123,
	name: undefined
};

for(let key in object){
    if(object[key]==undefined){
        delete object[key];
    }
}
console.log(object);



// Array Homework
// 1.
let arr = [2,8,5];
console.log(arr);
arr.push(90);
console.log(arr);
arr.unshift(6,4);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);


// 2.
const numbers = [3,7,10,15,20,25];
let result = numbers.find(num => num > 10);
console.log(result);
let result1 = numbers.find(num => num%5 == 0);
console.log(result1);


// 3.
const numbers1 = [5,12,8,130,44];
let result2 = numbers1.filter(num => num > 10);
console.log(result2);
let result3 = numbers1.filter(num => num%2 == 0);
console.log(result3);


// 4.
const words = ["spray","limit","elite","exuberant","destruction","present"]; 
let result4 = words.filter(item => item.length > 6);
console.log(result4);


// 5.
const numbers2 = [1, 2, 3, 4, 5]; 
let result5 = numbers2.map(num => num*2);
console.log(result5);
let result6 = numbers2.map(num => num+10);
console.log(result6);


// 6.
const people = [
{ name: "Anna", age: 17 },
{ name: "Karen", age: 22 },
{ name: "Aram", age: 15 },
{ name: "Meri", age: 19 }
];
let result7 = people.find(item => item.age > 18);
console.log(result7);
let result8 = people.filter(item => item.age >= 18);
console.log(result8);
let result9 = people.map(item => item.name);
console.log(result9);