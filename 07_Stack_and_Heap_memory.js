                                              //STACK

// primitive dataTypes are stored inside a stack memory 
// primitive data types are share the value and not actual value it will share the copy of value 
//if you do change in the shared value then no change occured inside the actual value 
// stack memory stores primitive, local veriables and methods 

let name = "anand";   // the actual value as it is 
let name2 = name;     // change in shared value 
name2="samadhan";

console.log(name)
console.log(name2)


                                        //HEAP

// Inside the Heap memory we can store the non-primitive and objects
// in non primitive its work on call by refferance 
// it will provide a shared refferance 
// if do changes then it will change the actual value because its provide a actual values not the copy
// it will change the value and give the latest Assigned value 

let user1 = {

    name:"anand",
    mail:"anand@8347gmail.com",
    mono:"8214573145",
    fav_game:"cricket"
}

let user2 = user1;

user2.mail="mazzi@gamil.com"

console.log(user1)
console.log(user2)

// in this case if you change the value then Actual value also change 
//because its not provide copies it provide Actual value in case of non-primitive