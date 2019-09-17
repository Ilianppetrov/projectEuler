console.time('time')

let sqrtAcc = 0;
let sumAcc = 0

for (let index = 1; index <= 100; index++) {
    sumAcc = sumAcc + index;
    sqrtAcc = sqrtAcc + Math.pow(index, 2)
}
sumAcc = Math.pow(sumAcc, 2)

console.timeEnd('time')
console.log(sumAcc - sqrtAcc)