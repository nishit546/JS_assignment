var arr = [10,13,15,14,19,26,28,29]
var even = 0;
var odd = 0;
for(var i = 0;i<arr.length;i++){
    if(arr[i]%2==0){
even++;
    }
    else{
odd++;
    }
}
console.log(even);
console.log(odd);