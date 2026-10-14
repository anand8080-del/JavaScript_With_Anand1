let score = "133";

let valueInNumber = Number(score)  // this is used to convert a value one typt to another type 
                                   // if value is converted into Number but Not Proper Number then O/P is NaN means Not a Number 

console.log(typeof valueInNumber)
console.log(valueInNumber)     

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

let score1 = "123j"

let convertValueIntoNumber = Number(score1)  // this will be print NaN Not a Number 

console.log(typeof convertValueIntoNumber)
console.log(convertValueIntoNumber)

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

let MobileNo = 823218742
let convertIntoString = String(MobileNo) // this will convert this mobile number into the String

console.log( typeof convertIntoString)
console.log(convertIntoString)

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

let num = null

let convertIntoInteger = Number(num)

console.log(typeof convertIntoInteger)

console.log(convertIntoInteger)

