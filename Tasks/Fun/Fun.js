// var x = 1;
// var y = 1;
// for(var i=1;i<10;i++) {
//     if(i%2 == 0) {
//         x*=2;
//     }
//     else{
//         y*=2;
//     }
// }
// console.log(x);
// console.log(y);

// var a = [1,2,3,4,5];
// for (var i = 0;i<=a.length-1;i++) {
//     console.log(a[i]);
// }

// var a = [10,11,12,13,14,15,16];
// var x =0;
// var y =0;
// for (var i =0;i<a.length;i++) {
//     if(a[i]%2 == 0) {
//         x+=a[i];
//     }
//     else{
//         y+=a[i];
//     }
// }
// console.log(x);
// console.log(y);

// var i=-1;
// while(i>=-5) {
//     console.log(i);
//     i--;
// }

var x = "123456";
var y = x[0];
for (var i = 0;i<x.length;i++) {
    if(y<x[i]) {
        y = x[i];
    }
}
console.log(y);