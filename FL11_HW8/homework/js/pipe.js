var x;
var count;
x = +prompt("Enter x");
count = prompt("Enter number of iteration");
function pipe(){
   var first = x;
   for (var i=1; i<=count; i++){
       first=addOne(first);
   }
   alert(first);
}
function addOne(x){
    return +(x+1);
}
pipe();