//1. Set(4) {1,2,3,4}
//2. "ref"
//3. Map(2) {Array(3) => true, Array(3) => false}



// hasDuplicate


const hasDuplicate = arr => new Set(arr).size !== arr.length;
    






// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.


const vowelCount = str => {
    const [...letters] = str;
    const vowels = 'aeiou'
    letters.filter(letter => vowels.includes(letter.toLowerCase()))
    const vowelMap = new Map();

    for (let vowel of vowels){
        if (letters.includes(vowel)){
            let letterCount = 0;
            for (let letter of letters){
                if (letter === vowel) letterCount++
            }
            vowelMap.set(vowel, letterCount);
        }
    }
 return vowelMap;
}



