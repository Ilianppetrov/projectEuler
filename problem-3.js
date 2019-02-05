let largestPrime;
console.time('time')
function primeFactor(num) {
    if (num === 0) {
        return
    }
    let newNum = 0;
    for (let index = 2; index <= num; index++) {
        if (num % index === 0) {
            largestPrime = index;
            newNum = num / index
            break
        }
    }
    primeFactor(newNum)
}
primeFactor(600851475143)

console.timeEnd('time')
console.log(largestPrime)