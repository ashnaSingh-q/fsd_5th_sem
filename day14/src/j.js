
const num = Number(process.argv[2]);

if (process.argv[2] === undefined || !Number.isInteger(num) || num < 0) {
    console.log("Usage: node factorial.js <non-negative integer>");
} else {
    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    console.log(`Factorial of ${num} is ${factorial}`);
}
