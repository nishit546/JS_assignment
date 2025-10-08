var arr = [10,30,50,12,98,45,9,3,67]
var min = arr[0];
for(var i = 0;i<arr.length;i++){
    if(min>arr[i]){
        min = arr[i];
    }
}
        console.log(min);
