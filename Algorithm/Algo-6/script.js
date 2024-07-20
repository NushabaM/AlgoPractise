function reverseString(word) {
    return word.split('').reverse().join('');
}
let word1 = "Romane";
let reversedWord1 = reverseString(word1);

let word2 = "Lena";
let reversedWord2 = reverseString(word2);

console.log(reversedWord1); 
console.log(reversedWord2);