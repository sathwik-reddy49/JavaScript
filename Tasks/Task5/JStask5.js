// function a(){
//     var obj = {
//         hero_name : "Allu Arjun",
//         movie_name : "Pushpa 2",
//         director_name : "Sukhumar",
//         plotof_movie : "Action"
//     }
//     console.log(obj);
// }
// a();

// var a = 1;
// while(a<=10){
//     console.log(a);
//     a++;
// }

// var a = 10;
// while(a>0){
//     console.log(a);
//     a--;    
// }

// var a = -1;
// while(a>=-10){
//     console.log(a);
//     a--;
// }

// var a = -10;
// while(a<0){
//     console.log(a);
//     a++;
// }

// var a = prompt("Please enter a number");
// var i =0;
// while(i<a.length){
//     if(a[i]%2==0){
//         console.log(a[i] , "is even");
//     }
//     else{
//         console.log(a[i] , "is odd");
//     }
//     i++;
// }

var a = prompt("Please enter a number");
var sumEven = 0;
var sumOdd = 0;
var i =0;
while(i<a.length){
    if(a[i]%2==0){
        sumEven+=Number(a[i]);
    }
    else{
        sumOdd+=Number(a[i]);
    }
    i++;
}
console.log("Sum of even numbers: " , sumEven);
console.log("Sum of odd numbers: " , sumOdd);