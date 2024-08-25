// JavaScript Fundamentals – Part 2

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores



// Task 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


// Task 2_3_4_5
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins...");
    }
}

// Data 1
let dolphins_1= [44, 23, 71];

let koalas_1 = [65, 54, 49];

let avgDolphins_1 = calcAverage(dolphins_1[0], dolphins_1[1], dolphins_1[2]);
console.log('Average Dolphins in data 1:', avgDolphins_1);

let avgKoalas_1 = calcAverage(koalas_1[0], koalas_1[1], koalas_1[2]);
console.log('Average Koalas in data 1:', avgKoalas_1);

checkWinner(avgDolphins_1, avgKoalas_1);


// Data 2
let dolphins_2 = [85, 54, 41];
let koalas_2 = [23, 34, 27];

let avgDolphins_2 = calcAverage(dolphins_2[0], dolphins_2[1], dolphins_2[2]);
console.log('Average Dolphins in data 2:', avgDolphins_2);

let avgKoalas_2 = calcAverage(koalas_2[0], koalas_2[1], koalas_2[2]);
console.log('Average Koalas in data 2:', avgKoalas_2);

checkWinner(avgDolphins_2, avgKoalas_2);
