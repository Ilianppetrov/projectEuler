console.time('time');

for (let c = 1; c <= 600; c++) {
    let cPow = Math.pow(c, 2);
    for (let b = 1; b < c; b++) {
        let bPow = Math.pow(b, 2)
        let aPow = cPow - bPow;
        let a = Math.sqrt(aPow);
        if (a + b + c === 1000) {
            console.log(a * b * c)
        }
        
    }
}




console.timeEnd('time')