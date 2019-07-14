
function formatTime(minutes){
    var m = minutes%60;
    var h = (minutes - m)/60%24;
    var d = Math.floor(minutes/60/24);
    alert(d + " day(s))" + h +" hour(s)" + m + " minute(s)");
}
var minutes;
minutes = prompt("Enter number of minutes");
formatTime(minutes);