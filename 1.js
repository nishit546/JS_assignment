var sub1 = 90;
var sub2 = 60;
var sub3 = 79;
var sub4 = 80;
var sub5 = 89;
var total = sub1+sub2+sub3+sub4+sub5;
var percentage = total * 100 / 500;
console.log("percentage is ", percentage);
if(percentage>=90){
    console.log("A");
}
else if(80<=percentage<=89){
    console.log("B");
}
else if(70<=percentage<=79){
    console.log("C");
}
else if(60<=percentage<=69){
    console.log("D");
}
else{
    console.log("Fail");
}