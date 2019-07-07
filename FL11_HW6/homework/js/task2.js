var a=+(prompt("Input a"));
var b=+(prompt("Input b"));
var c=+(prompt("Input c"));
if(!((a+b)>c) || !((a+c)>b) || !(b+c)>a){
    console.log('Triangle doesn`t exist');
}
else if ((a==b) && (b==c) && (a==c)){
    console.log('Equivalent triangle');
}
else if ((a==b) || (b==c) || (a==c)){
    console.log('Isosceles triangle');
}
else
    console.log('Normal triangle');

