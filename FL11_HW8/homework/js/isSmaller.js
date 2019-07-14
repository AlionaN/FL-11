function isSmaller(a, b){
    var choice;
    choice=Math.min(a, b);
    alert(choice==a);
}
var a = prompt("Enter first number");
var b = prompt("Enter second number");
isSmaller(a, b);
