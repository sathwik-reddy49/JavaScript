// var a = [1, 2, 3, 4, 5];
// console.log(a.length);
// a.push(6,7);
// console.log(a);
// a.pop();
// console.log(a);
// a.unshift(0);
// console.log(a);
// a.shift();
// console.log(a);
// a.reverse();
// console.log(a);
// console.log(a.indexOf(3));
// console.log(a.includes(4));
// console.log(a.sort());
// console.log(a.join());
// console.log(a.join(''));

// Q1 
// var a = [1, 2, 3, 4, 5];
// a.push(6);
// console.log(a);
// a.shift();
// console.log(a);

// Q2
// var a = [1, 2, 3, 4, 5];
// console.log(a.reverse().join(''));

// Q3
// var a = [5,4,3,2,1];
// a.sort().pop();
// console.log(a);

// Q4
// var a = [1, 2, 3, 4, 5];
// a.unshift(1,0);
// console.log(a);
// a.shift();
// console.log(a);
// console.log(a.length);

// Q5
// var a = [1,2,3,4,5];
// var b = [9,8,7,6];
// var c = a.concat(b);
// console.log(c);
// c.sort().pop();
// console.log(c);

// Q1 
// var a = ["Alice", "Bob", "Charlie", "David"];
// a.unshift("Elise");
// a.pop();
// console.log(a.includes("Bob"));
// console.log(a);

// Q2
// var a = "Learn,Practice,Improve";
// console.log(a.split(",").reverse().join(" "));

// Q3
// var a = ["Song1", "Song2", "Song3"];
// var b = ["Song4", "Song5"];
// var c = a.concat(b);
// c.shift();
// c.push("Song6");
// console.log(c);

// Q5 
// var a = ["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"];
// var b = a.splice(1,3);
// var c = ["The Matrix", "The Godfather"];
// var d = b.concat(c);
// d.reverse();
// console.log(d);

// Q7 
// var a = "John,Doe,Jane,Smith";
// var b = a.split(",");
// console.log(b.includes("Jane"));
// console.log(b.reverse().join(" "));

// Q8 
// var a = [1, 2, 3, 4, 5];
// a.shift();
// a.push(6,7);
// console.log(a.length);
// console.log(a);

// Q9
// var a = ["Milk", "Bread", "Eggs", "Butter"];
// console.log(a.includes("Eggs"));
// a.pop();
// a.push("Cheese", "Juice");
// console.log(a);

// Q10
// var a = ["Alice", "Bob", "Charlie"];
// var b = ["David", "Eve"];
// a.reverse();
// var c = a.concat(b);
// c.unshift("Frank");
// console.log(c);

// Q11
var a = ["Milk", "Bread", "Eggs", "Butter"];
var b = a.indexOf("Eggs");
a[b] = "Cheese";
a.unshift("Juice");
console.log(a);