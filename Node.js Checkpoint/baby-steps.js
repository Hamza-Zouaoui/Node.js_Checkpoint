let arr=process.argv;
let sum=0;
for (let i in arr){
    if(i>1){
    sum=sum+Number(arr[i]);}
}
console.log(sum);