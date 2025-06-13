const prompt = require("prompt-sync")();
let choice;
let countA = 0;
let countB = 0;
let countE = 0;
let countI = 0;
let countS = 0;
let countN = 0;
let countT = 0;
let countF = 0;
let countJ = 0;
let countP = 0;
let nav;

function answerChoice(){
    while(choice !== "a" || choice !== "b"){
        let choice = prompt("Your answer: ").toLowerCase();
        if(choice === "a"){
            countA += 1
            break;
        }
        else if(choice === "b"){
            countB += 1
            break;
        }
        else{
            console.log("Expected A or B as Response. I know this is an error, Please try again");
        }
    }
}


//...
let name = prompt("What is your name?: ")
console.log(`\nWelcome ${name}. Search yourself and think before answering. Can you say you prefer either A or B for the following questions?`)
let question1 = console.log("A. Expend Energy, Enjoy Groups\nB. Conserve Energy, Enjoy One-on-One: ")
answerChoice(choice);
if (countA == 1){
    countE++
}
else{
    countI++
}
//console.log(countA, countB, countE, countI);

