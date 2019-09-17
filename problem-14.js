console.time('time');

let isEven = (number) => number/2

let isOdd = (number) => 3*number + 1

let chainObj = {
};

let largestChain = 0;
let largestNumber = 0

for (let index = 13; index < 1000000; index++) {
    let iteratingNumber = index
    let count = 0
    let counted = false
    while(iteratingNumber !== 1) {
        if (chainObj[iteratingNumber]) {
            chainObj[index] = chainObj[iteratingNumber] + count
            counted = true;
            break
        }
        if (iteratingNumber % 2 === 0) {
            iteratingNumber = isEven(iteratingNumber)
        } else {
            iteratingNumber = isOdd(iteratingNumber)
        }
        count++
    }
    if (!counted) {
        chainObj[index] = count;
    }
    counted = false;
    if (chainObj[index] > largestChain) {
        largestChain = chainObj[index]
        largestNumber = index
    }
}


console.log(largestNumber);
console.timeEnd('time');