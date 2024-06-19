
function findPrimeNumbers(maxNum, n) {
    const primeNumbers = [];
    let count = 0

    for (let num = 2; num < maxNum; num++) {
        let isPrime = true;

        // We only need to check up to the square root of num, because if num is divisible by some number p, then it is also divisible by num/p.
        // Therefore, we can check up to the square root of num and still have checked all the factors of num.
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primeNumbers.push(num);
            count++
        }
        if (count == n) {
            return primeNumbers;
        }
    }

    return primeNumbers;
}

// Example
const maxNumber = Infinity;
const n = 1000
const primeNumbers = findPrimeNumbers(maxNumber, n);
console.log(primeNumbers);

