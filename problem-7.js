console.time('time')
let primeCount = 0;
let prime = 0
for (let index = 1; index < Infinity; index = index + 2) {
    if (primeCount === 5) {
        break
    }
    for (let i = 3; i < index; i++) {
        console.log(i)
        if (index % i === 0) {
            primeCount++
            prime = index
        }
        
    }
}

console.log(prime)


console.timeEnd('time')