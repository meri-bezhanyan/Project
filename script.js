// // Lesson 1

// // 1.
// let num = prompt("Enter the number: ");
// if (num > 0) {
//     console.log("1");
//  }
// else if (num < 0) {
//     console.log("-1");
//  }
// else{
//     console.log("0");
// }



// // 2.
// let a = -4;
// let b = 22;
// let result = a + b < 4 ? "Мало" : "Много";

// console.log(result);


// // 3.
// let step = 0;

// while (step <= 40){
//     if (step > 9){
//         console.log(step);
//     }
//     step = step + 2;
// } 



// // 4.
// let number = prompt("Enter the number: ");
// let result1 = 0;
// for (let i = 0; i<=10; i++){
//     result1 = number * i;
//     console.log(result1);
// }


// // 5.
// let num1 = 1;
// let sum = 0;
// while (num1 <= 14){
//     sum+=num1;
//     num1++;
// }
// console.log(sum);


// // 6.
// let sum1 = 0;

// for (let i = 1; i <= 40; i++){
//     if(i%2 == 0){
//         sum1+=i;
//     }
// }
// console.log(sum1);


// // 7.
// let num2 = 1;
// let sum2 = 0 ;
// while (num2 <= 40){
//     if (num2%2 != 0){
//         sum2+=num2;
//     }
//     num2++;
// }
// console.log(sum2);



// // 8.
// let result4 = 1;

// for (let i = 1; i <= 60; i++){
//     if (i%6 == 0){
//         result4*=i;
//     }
// }
// console.log(result4);



// // Lesson 2 

// // 1.
// let result2 = 0;
// function Sum (n){
//     for (let i = 0; i <= n; i++){
//         if (i%2 != 0){
//             result2+=i;
//         }
//     }
//     return result2;
// }
// console.log(Sum(10));


// // 2.
// let num3 = (a) => {
//     if (a%5 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(num3(400));


// // 3.
// let result3 = MyFunc(6,8);

// function MyFunc (a,b){
//     if (a%2 == 0 && b%2 == 0){
//         return a+b;
//     }
//     else{
//         return a*b;
//     }
// }
// console.log(result3);


// // 4.
// function func (x) {
//     if (x >= 0){
//         return "positive";
//     }
//     else{
//         return "negative";
//     }
// }
// console.log(func(30));
// <<<<<<< HEAD
// =======



// // let person = {
// //     first_name: "Meri",
// //     last_name: "Bezhanyan",
// //     age:"19"
// // }
// // console.log(person.age);
// // person.city = "
// // Yrevan";
// // console.log(person["city"]);//zangvaci tesqova talis

// // let uxx = {
// //     b:5,
// //     a:4,
// //     makeres:function(){return this.a * this.b}
// // }

// // console.log(uxx.makeres());


// // let name = "Ann";
// // let age1 = 29;

// // let aoj = {name,age};
// // console.log (obj);



// // let country = {
// //     name1:"Armenia",
// //     city1:"Aparan"
// // }

// // let{name1,country_name} = country;
    
// // console.log(country.country_name); //???



// // let arr = [1,5,2.33,"name",'d'];
// // arr[-2] = 42;//vorpes obyekta pahum
// // arr["name"] = "Sona";
// // console.log(arr);

// // let a = new Array(3);
// // console.log(a);//datarka

// // let x = arr.push(3,9);
// // console.log(arr);

// // console.log(Array.isArray(arr));//stuguma zangvaca te che


// // let arr = ["apple","kiwi","banana","orange"];
// // console.log(arr.includes("kiwi"));

// // let arr1 = [11,-9,6,0,5,-90,-4];

// // console.log(arr.filter(a => a < 0));//???
// // console.log(findIndex("banana"));//???
// // findLastIndex();
// // every();
// // some();
// // map();
// // foreach();



// // // 1.
// // function isEvene(a){
// //     if (a%2 == 0){
// //         console.log("Evene");
// //     }
// //     else{
// //         console.log("Not Evene");
// //     }
// // }
// // isEvene(8);

// // // 2.
// // function minimum(a,b){
// //     if (a<b){
// //         console.log("Minimum: ",a);
// //     }
// //     else if (b<a){
// //         console.log("Minimum: ",b);
// //     }
// //     else{
// //         console.log("Equal");
// //     }
// // }

// // minimum(9,9);

// // 3.
// // let factorial = (a) => {
// //     let result = 1;
// //     while(a>=1){
// //         result *= a;
// //         a--;
// //     }
// //     return result;
// // }

// // console.log(factorial(5));

// // // 4.
// // function Sum(a){
// //     let sum = 0;
// //     for(let i = 0; i <= a; i++){
// //         if(i%2 == 0){
// //             sum+=i;
// //         }
// //     }
// //     console.log(sum);
// // }
// // Sum(8);


// // // 5.
// // function Rating(a){
// //     if(a == 9 || a == 10){
// //         console.log("Great");
// //     }
// //     else if (a == 8 || a == 7){
// //         console.log("Good");
// //     }
// //     else if (a <= 6){
// //         console.log("Satisfactor");
// //     }
// // }

// // Rating(2);

// // // 6.
// // function Maximum(a,b,c){
// //     if(a > b && a > c){
// //         console.log("Maximum: ",a);
// //     }
// //     else if(b > a && b > c){
// //         console.log("Maximum: ",b);
// //     }
// //     else if(c > a && c > b){
// //         console.log("Maximum: ",c);
// //     }
// // }
// // Maximum(10,-3,4);


// // // 7.
// // function Simple(a) {
// //     if (a <= 1) {
// //         console.log("Not simple"); 
// //         return;
// //     }

// //     for (let i = 2; i <= Math.sqrt(a); i++) {
// //         if (a % i === 0) {
// //             console.log("Not simple");
// //             return;
// //         }
// //     }

// //     console.log("Simple");
// // }

// // Simple(5); 



// // // 8.
// // function Calculator(a,b,c){
// //     switch (c){
// //         case '+':
// //             console.log(a+b);
// //             break;
// //         case '-':
// //             console.log(a-b);
// //             break;
// //         case '*':
// //             console.log(a*b);
// //             break;
// //         case '/':
// //             console.log(a/b);
// //             break;
// //     }
// // }
// // Calculator(6,2,'/');


// // // 9.
// // function Reverse(a) {
// //     let result = 0;
// //     while (a != 0) {
// //         let c = a % 10;      
// //         result = result * 10 + c; 
// //         a = Math.floor(a / 10);   
// //     }
// //     console.log(result);
// // }

// // Reverse(6549);
// >>>>>>> 1f55a8e (chanel_website)
