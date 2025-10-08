var arr = [10,20,40,50,12,54,60];
var max = arr[0];
for(var i = 0;i<arr.length;i++){
    if(max<arr[i]){
        max = arr[i];
    }
}
        console.log(max);