// var a = Number(prompt("Enter a number"));
// for (var i=2;i<=a;i++) {
//     if(a%i == 0) {
//         var result = a+" Not Prime";
//         break;
//     }
//     else {
//         var result = a+" Prime";
//     }
// }
// console.log(result);

// var a = Number(prompt("Enter a number"));
// var count = 0;
// for (var i=2;i<a;i++) {
//     if(a%i == 0) {
//         count++;
//         break;
//     }
// }
// count == 0 ? console.log(a+" Prime") : console.log(a+" Not Prime");

var a = Number(prompt("Enter a number"));
var count = 0;
if(a<=1) {
    console.log(a+" Not Prime");
}
else {
    for (var i=2;i<a;i++) {
        if(a%i == 0) {
            count++;
            break;
        }
    }
    count == 0 ? console.log(a+" Prime") : console.log(a+" Not Prime");
}