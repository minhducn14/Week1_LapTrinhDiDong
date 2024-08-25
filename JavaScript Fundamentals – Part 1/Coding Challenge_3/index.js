// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// Data 1
let dolphins =[ 96, 108, 89]
let koalas = [88, 91, 110]

// Task 1
let dolphins_avg = dolphins.reduce((a, b) => a + b, 0) / dolphins.length
let koalas_avg = koalas.reduce((a, b) => a + b, 0) / koalas.length

// Task 2
if(dolphins_avg > koalas_avg){
    console.log("Dolphins win with an average score of", dolphins_avg)
} else if(koalas_avg > dolphins_avg){
    console.log("Koalas win with an average score of", koalas_avg)
} else {
    console.log("It's a draw!")
}


function checkWinner(dolphinsScores, koalasScores, minimumScore = 100) {
    const avgDolphins = dolphinsScores.reduce((a, b) => a + b, 0) / dolphinsScores.length;
    const avgKoalas = koalasScores.reduce((a, b) => a + b, 0) / koalasScores.length;

    console.log(`Average Dolphins: ${avgDolphins}`);
    console.log(`Average Koalas: ${avgKoalas}`);

    if (avgDolphins >= minimumScore && avgKoalas >= minimumScore) {
        if (avgDolphins === avgKoalas) {
            console.log("It's a draw!");
        } else if (avgDolphins > avgKoalas) {
            console.log("Dolphins win the trophy!");
        } else {
            console.log("Koalas win the trophy!");
        }
    } else if (avgDolphins >= minimumScore && avgDolphins > avgKoalas) {
        console.log("Dolphins win the trophy!");
    } else if (avgKoalas >= minimumScore && avgKoalas > avgDolphins) {
        console.log("Koalas win the trophy!");
    } else {
        console.log("No team wins the trophy.");
    }
}

// Data Bonus 1
let dolphins_bonus1 =[ 97, 112, 101]
let koalas_bonus1 = [109, 95, 123]

checkWinner(dolphins_bonus1, koalas_bonus1);


// Data Bonus 2
let dolphins_bonus2 =[ 97, 112, 101]
let koalas_bonus2 = [109, 95, 106]
checkWinner(dolphins_bonus2, koalas_bonus2);