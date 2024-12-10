// Strings 

// Q1 
// var a = "     sai";
// var b = "sathwik     ";
// var c = a.trim().concat(b.trim()).toUpperCase();
// console.log(c);

// Q2
// var a = "RAMU";
// var b = a.slice(1,3);
// console.log(b.indexOf(b[b.length - 1]));
// console.log(b.toLowerCase());

// Q3
// var a = "s";
// var b = a.concat("ai");
// console.log(b.toUpperCase());
// console.log(b[b.length - 2]);

// Q4
// var a = "sathwik";
// var b = "sridhar";
// var c = a.slice(0,3);
// var d = b.slice(-3);
// var final = c.charAt(0).toUpperCase()+c.slice(1,3)+d.slice(-3,-1)+d.charAt(d.length - 1).toUpperCase();
// console.log(final);

// Q5
// var a = "      sathwik       ";
// var b = a.trim();
// var c = b.charAt(0).toUpperCase()+b.slice(1,b.length-1)+b.charAt(b.length - 1).toUpperCase();
// console.log(c);
// var d = c.slice(1,3)+"hiii"
// console.log(d);

// Q6
// var a = "hello there , how are you";
// console.log(a.indexOf("are"));

// Objects 

// Q1
// var person = {
//     fname: "sathwik",
//     lname: "Reddy",
//     age: "23"
// }
// console.log(person.fname);
// person.city = "New York";
// console.log(person);

// Q2
// var obj = {
//     name:"Sathwik",
//     Price:200,
//     inStock:true
// }
// console.log(obj);
// obj.Price = 300;
// delete obj.inStock;
// console.log(obj);

// Q3 
// var library = {
//     romance : {
//         books : ["Parugu","Arya2"]
//     },
//     fantasy : {
//         books : ["Harry potter","Bahubali"]
//     },
//     mystery : {
//         books : ["Joker","Us"]
//     }
// };
// console.log(library);
// library.ScienceFiction = {
//     books : ["Dune"]
// }
// console.log(library);
// console.log(library.fantasy.books[0]);
// delete library.mystery;
// console.log(library);

// Q4 
// var user = {
//     username : "sathwik",
//     email : "sathwik@gmail.com",
//     address : {
//         city : "New York",
//         state : "NY",
//         zip : "123"
//     }
// }
// console.log(user);
// Object.freeze(user);
// user.email = "sathwik@.com";
// console.log(user);
// console.log(Object.isFrozen(user));
// user.phone = "1234567890";
// console.log(user);

// Q5
var car = {
    make : "Lamborghini",
    model : "Aventador",
    price : "6cr"
}
console.log(car);
Object.seal(car);
delete car.make;
console.log(car);
console.log(Object.isSealed(car));
car.price = "7cr";
console.log(car);
console.log(Object.isExtensible(car));