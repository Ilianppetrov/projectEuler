console.time('time');
let count = 0;
let dividerNumbers = 0;

function isPrime(num) {

    if (num === 2) {
      return true;
    }
    else if(num > 1){
      for (var i = 2;  i < num; i++) {
  
        if (num % i !== 0 ) {
          return true;
        }
  
        else if (num === i * i) {
          return false
        }
  
        else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  
  }

const countDividers = (number) => {
    let dividers = {};
    let index = 1;
    while (number > 1) {
        if (number % index === 0 && isPrime(index)) {
            if (dividers[index]) {
                dividers[index] += 1
            } else {
                dividers[index] = 1
            }
            number = number / index
            index = 1;
        }
        index++
    }
    return Object.values(dividers).reduce((acc, curr) => {
        return acc * (curr + 1)
    }, 1)
}

for (let index = 1; index < Infinity; index++) {
    if (dividerNumbers > 500) {
        console.log('done')
        break
    }
    count += index
    let dividers = countDividers(count)
    if ( dividers > dividerNumbers) {
        dividerNumbers = dividers
        console.log(count)
    }
    
}

console.timeEnd('time')