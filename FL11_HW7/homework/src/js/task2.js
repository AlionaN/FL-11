let start;
let random;
let choice;
let prize;
start = confirm("Do you want to play a game?");
if (start==false){
    alert('You did not become a billionaire, but can.');
}
else{
    random=Math.floor(Math.random()*(7));
    choice=prompt("Enter a number of pocket on which the ball could land(from 0 to 8)");
}


