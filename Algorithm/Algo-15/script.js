function Oddnumber(array){
    for(let i=0;i<array.length;i++){
        if(array[i]%2==1){
            return true;
        }
        else{
            return false;
        }

    }
}
let array1=[3,5,7,9];
let array2=[2,3,4,5];
console.log(Oddnumber(array1));
console.log(Oddnumber(array2));
