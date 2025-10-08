var arr = [98,-69,96,0,0,45,-79];
var pos = 0;
var neg = 0;
var zero = 0;
for(var i = 0;i<arr.length;i++){
    if(arr[i]>0){
pos++;
    }
    else if(arr[i]<0){
        neg++;
    }
    else{
        zero++;
    }
}
console.log(pos);
console.log(neg);
console.log(zero);