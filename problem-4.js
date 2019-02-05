console.time('time');

function isPalindromic(num) {
    let reversed = num.toString().split('').reverse('').join('')
    
    return num === Number(reversed)
}

let largestPalindromic = 0;

for (let indexOne = 0; indexOne < 999; indexOne++) {
    for (let indexTwo = 0; indexTwo < 999; indexTwo++) {
        let multy = indexOne * indexTwo
        if (isPalindromic(multy)) {
            if (multy > largestPalindromic) {
                largestPalindromic = multy
            }
        }
    }
}

console.log(largestPalindromic)
console.timeEnd('time');
