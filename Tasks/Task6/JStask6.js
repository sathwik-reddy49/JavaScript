// Highest and lowest digit in given Number , and also sum of them.
var a = prompt("Enter a number");
var b = a[0];
var c = a[0];
for(var i=1;i<a.length;i++){
    if(b<a[i]){
        b=a[i];
    }
    else if(c>a[i]){
        c=a[i];
    }
}
console.log("Highest digit is "+b);
console.log("Lowest digit is "+c);
console.log("Sum of digits is "+(Number(b)+Number(c)));