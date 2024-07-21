function SumOfArray(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum=sum+array[i];
    }
    return sum;
 }
let array1=[1,2,3,4,5];
console.log(SumOfArray(array1));
