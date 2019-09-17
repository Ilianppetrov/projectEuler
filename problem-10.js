console.time('time')

let totalCount = 2;

for (let index = 3; index <= 2000000; index = index + 2) {
    for (let inner = 3; inner <= index; inner = inner + 2) {
        if (index === inner) {
            totalCount += index
        }
        if (index % inner === 0) {
            break
        }
    }
}

console.log(totalCount)
console.timeEnd('time')