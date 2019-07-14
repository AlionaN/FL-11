var number = [];
var count;
function getMin(number){
    count = prompt("How many arguments do you want to enter?");
    for (var i=0; i<count; i++){
        number[i]=+prompt("Enter one of number");
    }
    var min = number[0];
    for (var i=0; i<number.length; i++){
        if (number[i]<min){
            min = number[i];
        }
    }
    alert(min);
}
getMin(number);