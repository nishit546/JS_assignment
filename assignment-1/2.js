var units = 500;
var totalbill = 0;
if(units<=100){
    totalbill=100*5;
}
else if(units<=300){
    var first100 = 100*5;
    var remaining = units - 100;
    var next = remaining*7;
    totalbill = first100 + next;
}
else{
    var first100 = 100*5;
    var next200 = 200*7;
    var remaining = units - 300;
    var final = remaining * 10;
    totalbill = first100 + next200 + final;
}
console.log("The total electricity bill is ", totalbill);
