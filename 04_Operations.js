//operations in javaScript same as a java 
//1) mathematical Operations 


console.log("==================================mathematical oper====================================")
let num = 10
let num1=12

console.log(num*num1)
console.log(num+num1)
console.log(num-num1)  // this all the mathematical operations in javaScript same as java 
console.log(num/num1)
console.log(num%num1)
console.log(2**3)      // this means 2 res to 3



console.log("================================comparison operators======================================")
//comparison Operaters in javaScript     in java this is relational Operators

console.log(num>1 && num1<45)
console.log(num>19)
console.log(num<62)
console.log(num>=66)
console.log(num==2)
console.log(num!=36)
console.log(num<=76)


console.log("========================================Assignment Operators==============================")
//Assignment Operaters

console.log(num+=62)
console.log(num/=87)
console.log(num*=21)   //same as remaining opearters


//Logical Opeartors in js 

//1) && both condition true that time only true otherwise fallse 
//2) || at least one codition true then true otherwise false 
//3) ! used to write inverse process

//Type operators | typeof, instanceof |
//Relational operators | in |
//Unary operators | +, -, !, ~, typeof, void, delete |


// In Java: for adding to Strings we need to use cocat method 
// In js : We directly use + operator 
// other Operators not working here becouse only one operator Overloaded in js that is + Operator

console.log("====================================String Operations=============================")
let str1 = "Hello"
let str2 = " javaScript"

let str3 = str1 + str2   
console.log(str3)

// inside a javaScript also Special Case present we are seen that things in java 

console.log("3"+3+3)   // the output Become 333 becouse after the string there is no any mathematical operation perform
console.log(3+3+"3")   // the output become 63 becouse before the String it perform mathematical Operations
// this is the Special case in String 

console.log(3+3-2*43/432) // Here Js Perform Math Operation but with the help BODMAS Rule

console.log("+++++++++++++++++++++++++++++++++++++++++++Unary Operators============================")

// Increment Operators 

let digit = 43
digit++            // this is known as postIncrement operator
++digit            // this is known as preIncrement Operator
digit--            // this is known as postDecrement Operator
--digit             // this is known as preDecrement Operator

console.log(digit)


//