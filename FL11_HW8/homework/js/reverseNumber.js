var number;
number=prompt("Enter integer number");
function reverseNumber(number){
    let result = 0;
    if (number<0){
        number*=-1;
        while (number){
            result = result*10 + number%10;
            number = Math.floor(number/10);
        }
        alert("-" + result);
    }
    else{
    while (number){
        result = result*10 + number%10;
        number = Math.floor(number/10);
    }
    alert(result);
}
}
reverseNumber(number);