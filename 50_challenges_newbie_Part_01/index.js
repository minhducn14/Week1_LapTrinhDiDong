// log ra với đằng trước là số thứ tự của bài toán
// 1. Print numbers from 1 to 10
console.log('1. Print numbers from 1 to 10');
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Print the odd numbers less than 100
// Xuat tren 1 dong
console.log('2. Print the odd numbers less than 100');
for (let i = 1; i < 100; i += 2) {

    console.log(i);
}

// 3. Print the multiplication table with 7
console.log('3. Print the multiplication table with 7');
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}
// 4. Print all the multiplication tables with numbers from 1 to 10
console.log('4. Print all the multiplication tables with numbers from 1 to 10');
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
// 5. Calculate the sum of numbers from 1 to 10
console.log('5. Calculate the sum of numbers from 1 to 10');
let sum5 = 0;
for (let i = 1; i <= 10; i++) {
    sum5 += i;
}
console.log(sum5);
// 6. Calculate 10!
console.log('6. Calculate 10!');
let factorial = 1;
for (let i = 1; i <= 10; i++) {
    factorial *= i;
}
console.log(factorial);
// 7. Calculate the sum of even numbers greater than 10 and less than 30
console.log('7. Calculate the sum of even numbers greater than 10 and less than 30');
let sum7 = 0;
for (let i = 12; i < 30; i += 2) {
    sum7 += i;
}
console.log(sum7);
// 8. Create a function that will convert from Celsius to Fahrenheit
console.log('8. Create a function that will convert from Celsius to Fahrenheit');
function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}
let fahrenheit = celsiusToFahrenheit(30);
console.log(fahrenheit);
// 9. Create a function that will convert from Fahrenheit to Celsius
console.log('9. Create a function that will convert from Fahrenheit to Celsius');
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
let celsius = fahrenheitToCelsius(86);
console.log(celsius);
// 10. Calculate the sum of numbers in an array of numbers
console.log('10. Calculate the sum of numbers in an array of numbers');
let numbers = [1, 2, 3, 4, 5];
let sum10 = 0;
numbers.forEach(number => sum10 += number);
console.log(sum10);
// 11. Calculate the average of the numbers in an array of numbers
console.log('11. Calculate the average of the numbers in an array of numbers');
let average = sum10 / numbers.length;
console.log(average);
// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
console.log('12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers');
function getPositiveNumbers(numbers) {
    return numbers.filter(number => number > 0);
}
let positiveNumbers = getPositiveNumbers(numbers);
console.log(positiveNumbers);
// 13. Find the maximum number in an array of numbers
console.log('13. Find the maximum number in an array of numbers');
let max = Math.max(...numbers);
console.log(max);
// 14. Print the first 10 Fibonacci numbers without recursion
console.log('14. Print the first 10 Fibonacci numbers without recursion');
let fibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci);
// 15. Create a function that will find the nth Fibonacci number using recursion
console.log('15. Create a function that will find the nth Fibonacci number using recursion');
function fibonacciRecursive(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log(fibonacciRecursive(10));
// 16. Create a function that will return a Boolean specifying if a number is prime
console.log('16. Create a function that will return a Boolean specifying if a number is prime');
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(`17:` + isPrime(17));
// 17. Calculate the sum of digits of a positive integer number
console.log('17. Calculate the sum of digits of a positive integer number');
function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}
console.log(`123:` + sumOfDigits(123));
// 18. Print the first 100 prime numbers
console.log('18. Print the first 100 prime numbers');
let primeNumbers = [];
let number = 2;
while (primeNumbers.length < 100) {
    if (isPrime(number)) {
        primeNumbers.push(number);
    }
    number++;
}
console.log(primeNumbers);
// 19. Create a function that will return in an array the first “p” prime numbers greater than “n”
console.log('19. Create a function that will return in an array the first “p” prime numbers greater than “n”');
function getPrimes(n, p) {
    let primes = [];
    let number = n + 1;
    while (primes.length < p) {
        if (isPrime(number)) {
            primes.push(number);
        }
        number++;
    }
    return primes;
}
console.log("3 prime numbers greater than 10: ");
console.log(getPrimes(10, 3));
// 20. Rotate an array to the left 1 position
console.log('20. Rotate an array to the left 1 position');
function rotateLeft(arr) {
    if (arr.length === 0) return arr;
    const firstElement = arr.shift();
    arr.push(firstElement);
    return arr;
}
const array = [1, 2, 3, 4, 5];
console.log(rotateLeft(array));
// 21. Rotate an array to the right 1 position
console.log('21. Rotate an array to the right 1 position');
function rotateRight(arr) {
    if (arr.length === 0) return arr;
    const lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
}
console.log(rotateRight(array));
// 22. Reverse an array
console.log('22. Reverse an array');
function reverseArray(array) {
    return array.reverse();
}
console.log(reverseArray(numbers));
// 23. Reverse a string
console.log('23. Reverse a string');
function reverseString(string) {
    return string.split('').reverse().join('');
}
console.log(reverseString('hello'));
// 24. Create a function that will merge two arrays and return the result as a new array
console.log('24. Create a function that will merge two arrays and return the result as a new array');
function mergeArrays(array1, array2) {
    return array1.concat(array2);
}
console.log(mergeArrays([1, 2], [3, 4]));
// 25. Create a function that will receive two arrays of numbers as arguments 
// and return an array composed of all the numbers that are either in the first array or second array but not in both
console.log('25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both');
function getUniqueNumbers(array1, array2) {
    return array1.filter(number => !array2.includes(number)).concat(array2.filter(number => !array1.includes(number)));
}
let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
console.log("Array 1: " + array1);
console.log("Array 2: " + array2);
console.log(getUniqueNumbers(array1, array2));
// 26. Create a function that will receive two arrays 
// and will return an array with elements that are in the first array but not in the second
console.log('26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second');
function getDifferentElements(array1, array2) {
    return array1.filter(element => !array2.includes(element));
}
console.log("Array 1: " + array1);
console.log("Array 2: " + array2);
console.log(getDifferentElements([1, 2, 3], [2, 3, 4]));