// Lesson 1

// 1.
let num = prompt("Enter the number: ");
if (num > 0) {
    console.log("1");
 }
else if (num < 0) {
    console.log("-1");
 }
else{
    console.log("0");
}



// 2.
let a = -4;
let b = 22;
let result = a + b < 4 ? "Мало" : "Много";

console.log(result);



// 3.
let step = 0;

while (step <= 40){
    if (step > 9){
        console.log(step);
    }
    step = step + 2;
} 



// 4.
let number = prompt("Enter the number: ");
let result1 = 0;
for (let i = 0; i<=10; i++){
    result1 = number * i;
    console.log(result1);
}


// 5.
let num1 = 1;
let sum = 0;
while (num1 <= 14){
    sum+=num1;
    num1++;
}
console.log(sum);


// 6.
let sum1 = 0;

for (let i = 1; i <= 40; i++){
    if(i%2 == 0){
        sum1+=i;
    }
}
console.log(sum1);


// 7.
let num2 = 1;
let sum2 = 0 ;
while (num2 <= 40){
    if (num2%2 != 0){
        sum2+=num2;
    }
    num2++;
}
console.log(sum2);



// 8.
let result4 = 1;

for (let i = 1; i <= 60; i++){
    if (i%6 == 0){
        result4*=i;
    }
}
console.log(result4);



// Lesson 2 

// 1.
let result2 = 0;
function Sum (n){
    for (let i = 0; i <= n; i++){
        if (i%2 != 0){
            result2+=i;
        }
    }
    return result2;
}
console.log(Sum(10));


// 2.
let num3 = (a) => {
    if (a%5 == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(num3(400));


// 3.
let result3 = MyFunc(6,8);

function MyFunc (a,b){
    if (a%2 == 0 && b%2 == 0){
        return a+b;
    }
    else{
        return a*b;
    }
}
console.log(result3);


// 4.
function func (x) {
    if (x >= 0){
        return "positive";
    }
    else{
        return "negative";
    }
}
console.log(func(30));
