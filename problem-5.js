console.time('time')
let dividers = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
let smallest = 0
let current = 1
while (smallest === 0) {
    let found = dividers.every(divider => {
        return current % divider === 0
    })
    if (found) {
        smallest = current
        break
    } else {
        current++
    }
}


console.log(smallest)
console.timeEnd('time')