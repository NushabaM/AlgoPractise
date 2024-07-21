function countVowels(word) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count=count+1;
        }
    }
    
    return count;
}

let word1 = "hello";
let word2 = "JavaScript";
console.log(countVowels(word1));
console.log(countVowels(word2));