// there are two types of datatypes primitive types and non primitive types 

//primitive dataTypes: String, Number, Boolean, Undefined, Null

//Non_Primitive dataTypes: Array, Objects, Functions 
// this is the mainly used non-primitive data types in js there bi differance betweeen java and javascript 

// javaScript is a dynamically typed language 

// Symbol Type in javaScript 

const number = "101"

const number1 = Symbol("101")

const number2 = Symbol("101");

const number3 = "101";

console.log(number==number3)   // it will return true becouse same numbers are coming 

console.log(number==number1)   // it will return false becouse special symbol attached to this number 

console.log(number1==number2)  // it will return fallse becouse both numbers are contain special 

// Primitive Datatypes only one remaining bigNumber

const bigNumber = 8248263432195621974563218493214n  // if you use a bigNumber then you need to write n after the end

console.log(bigNumber+821476n) //to perform any operation with the bigNumber you need to write n after the end 
                                // otherwise it will return a typeError

 
// We are Watching a Basics of Array, Object, Functions of Non Primitive 
// After that we learn Advance things 

//Array

const arr = ["anand","anuuu","radha","anuj","ananya"]  // this is the array in javaScript 
                                        //take one container and write inside it muktiple values that you want to Store

// Object 
const info = {
    name: "anand",
    game: "Cricket" ,          // this is known as a objects its looking like a jesson response
    same: "first Same "
}

//functions

const myFunction = function(){  // javaScript functions are the same as a java methods 

    console.log("its my first function")
}
// we can store the functions inside a veriable its veryy funnyy
// inside the functions we can write the block of code 


// for the checking the type of vriable we use typeof 

console.log(typeof null)  // it will return object
console.log(typeof undefined)  // it will return undefined
console.log(typeof myFunction)  // it will return function but Read as s Object of Function
console.log(typeof info)       // it will return object
console.log(typeof arr)        // it will returna object

// the return type of nonPrimitive datatypes return Objects but only function return Object of Function
// but the return type of a function is a function but read as a object of Function

console.log(typeof number1)

//the return type of number1 is Symbol