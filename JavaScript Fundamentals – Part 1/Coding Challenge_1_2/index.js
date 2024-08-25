// JavaScript Fundamentals – Part 1


// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.


// Data 1
// Task 1
let mark_mass1 = 78 
let mark_height1 = 1.69
let john_mass1 = 92
let john_height1 = 1.95 

// Task 2
let mark_bmi1 = mark_mass1 / mark_height1 ** 2
let john_bmi1 = john_mass1 / john_height1 ** 2

// Task 3
let mark_higher_bmi1 = mark_bmi1 > john_bmi1

console.log("Data 1 Results:")
console.log("Mark's BMI:", mark_bmi1)
console.log("John's BMI:", john_bmi1)
console.log("Does Mark have a higher BMI than John?", mark_higher_bmi1)

// Data 2
// Task 1
let mark_mass2 = 95  
let mark_height2 = 1.88  
let john_mass2 = 85  
let john_height2 = 1.76  

// Task 2
let mark_bmi2 = mark_mass2 / mark_height2 ** 2
let john_bmi2 = john_mass2 / john_height2 ** 2

// Task 3
let mark_higher_bmi2 = mark_bmi2 > john_bmi2

console.log("Data 2 Results:")
console.log("Mark's BMI:", mark_bmi2)
console.log("John's BMI:", john_bmi2)
console.log("Does Mark have a higher BMI than John?", mark_higher_bmi2)





// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement

// Data 1
// Task 1
if (mark_higher_bmi1) {
    console.log("Mark's BMI is higher than John's!")}
else{
    console.log("John's BMI is higher than Mark's!")
}

// Task 2
if (mark_higher_bmi1) {
    console.log(`Mark's BMI (${mark_bmi1}) is higher than John's (${john_bmi1})!`)}
else{
    console.log(`John's BMI (${john_bmi1}) is higher than Mark's (${mark_bmi1})!`)
}

// Data 2
// Task 1
if (mark_higher_bmi2) {
    console.log("Mark's BMI is higher than John's!")}
else{
    console.log("John's BMI is higher than Mark's!")
}