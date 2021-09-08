function ShowTime()
{
    var date = new Date();
    var n1=date.toLocaleTimeString();
    // var n2=date.tolocaleDateString();
    document.getElementById("MyClockDisplay").innerText = n1;
    document.getElementById("MyClockDisplay").textContent= n1;
}
ShowTime();