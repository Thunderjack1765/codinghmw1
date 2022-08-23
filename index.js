//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.



let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages);

//Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.

console.log(ages.pop() - ages.shift());

//Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(27);
console.log(ages);
console.log(ages.pop() - ages.shift());

//Use a loop to iterate through the array and calculate the average age. Print the result to the console.
console.log(ages);
let total = 0;

for(let i = 0; i < ages.length; i++){
total = total + ages[i];
}
console.log(total / ages.length);


//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.


let names = [`Sam`, `Tommy`, `Tim`, `Sally`, `Buck`, `Bob`];

//Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

let x=0;

for(let i=0; i<names.length;i++){
x = x + names[i].length
}
console.log(x/names.length);

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

for(let i=0; i<names.length;i++){
    console.log(names.join(``));
}

//How do you access the last element of any array?
let last = names[names.length - 1];

//How do you access the first element of any array?
console.log(names[0]);

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

namesArray = ["Kelly", "Sam", "Kate"]
nameLengths = [5, 3, 4]


for (let i = 0; i < namesArray.length; i++) {
    nameLengths.push(namesArray[i].length);
}
console.log(nameLengths);


let b = 0;
for (i = 0; i < nameLengths.length; i++) {
    b += nameLengths[i];
}
console.log(b);
    



//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function hello(word, n){
let c = ``;
for(let i = 0; i < n;i++){
c+=word
}
return c;
}
console.log(hello(`Hello`, 3));



//Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function Fullname (firstName, lastName){
return(firstName + ` `  + lastName)
}
console.log(Fullname(`Jordan`, `Benson`));

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
numbers = [25,50,75]

function greaterThan(){
const sum = numbers.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  
 if(sum > 100){
return true;
 }
 else{
    return false;
 }
}console.log(greaterThan());


// Write a function that takes an array of numbers and returns the average of all the elements in the array.
 numberArray = [1, 1, 1, 1, 1,];
 
 function averageElement (a, b){
return a + b;
 }
 let sum = numberArray.reduce(averageElement);
 let avg = sum / numberArray.length;

 console.log(avg);

// Write a function that takes two arrays of numbers and returns true if the average
// of the elements in the first array is greater than the average of the elements in the second arra

arr1 = [1]
arr2 = [5,1,1,1,1]
function lessThan(a, b){
    return a + b;
}
let sum1 = arr1.reduce(lessThan);
let avg1 = sum / arr1.length;
console.log(avg1);

function lessThan2 (c, d){
 return c + d;
}
let sum2 = arr2.reduce(lessThan2);
let avg2 = sum2 / arr2.length;
console.log(avg2);

if(avg1 > avg2){
console.log(`True`)
}


// Write a function called willBuyDrink that takes a boolean isHotOutside, 
//and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutSide, moneyInPocket){
if(isHotOutSide == true && moneyInPocket >=10.50){
    return true;
}



}console.log(willBuyDrink(true, 10.50));

// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function idk(firstStatement, lastStatement){
    return firstStatement  + lastStatement 
}
console.log(idk(`this is simple ` + ` idk what to say`))