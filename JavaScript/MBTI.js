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
        choice = prompt("Your answer: ").toLowerCase();
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

let question1 = console.log("Question 1:\nA. Expend energy, enjoy groups\nB. Conserve energy, enjoy one-on-one: ")
answerChoice();
if (choice === "a"){
    countE++
}
else if (choice === "b"){
    countI++
}

let question2 = console.log("Question 2:\nA. Interpret literally\nB. Look for meaning and possibilities: ")
answerChoice();
if (choice === "a"){
    countS++
}
else if (choice === "b"){
    countN++
}

let question3 = console.log("Question 3:\nA. Logical, thinking, questioning\nB. Empathetic, feeling, accomodating: ")
answerChoice();
if (choice === "a"){
    countT++
}
else if (choice === "b"){
    countF++
}

let question4 = console.log("Question 4:\nA. Organised, orderly\nB. Flexible, adaptable: ")
answerChoice();
if (choice === "a"){
    countJ++
}
else if (choice === "b"){
    countP++
}

let question5 = console.log("Question 5:\nA. More outgoing, think out loud\nB. More reserved, think to yourself: ")
answerChoice();
if (choice === "a"){
    countE++
}
else if (choice === "b"){
    countI++
}

let question6 = console.log("Question 6:\nA. Practical, realistic, experiential\nB. Imaginative, innovative, theoretical: ")
answerChoice();
if (choice === "a"){
    countS++
}
else if (choice === "b"){
    countN++
}

let question7 = console.log("Question 7:\nA. Candid, straight-forward, frank\nB. Tactful, kind, encouraging: ")
answerChoice();
if (choice === "a"){
    countT++
}
else if (choice === "b"){
    countF++
}

let question8 = console.log("Question 8:\nA. Plan, schedule\nB. Unplanned, spontaneous: ")
answerChoice();
if (choice === "a"){
    countJ++
}
else if (choice === "b"){
    countP++
}

let question9 = console.log("Question 9:\nA. Seek many tasks, public activities, interaction with others\nB. Seek private, solitary activities with quiet to concentrate: ")
answerChoice();
if (choice === "a"){
    countE++
}
else if (choice === "b"){
    countI++
}

let question10 = console.log("Question 10:\nA. Standart, usual, conventional\nB. Different, novel, unique: ")
answerChoice();
if (choice === "a"){
    countS++
}
else if (choice === "b"){
    countN++
}

let question11 = console.log("Question 11:\nA. Firm, tend to criticize, hold the line\nB. Gentle, tend to appreciate, consciliate: ")
answerChoice();
if (choice === "a"){
    countT++
}
else if (choice === "b"){
    countF++
}

let question12 = console.log("Question 12:\nA. Regulated, structured\nB. easy-going, live and let live: ")
answerChoice();
if (choice === "a"){
    countJ++
}
else if (choice === "b"){
    countP++
}

let question13 = console.log("Question 13:\nA. External, communicative, express yourself\nB. Internal, reticent, keep to yourself: ")
answerChoice();
if (choice === "a"){
    countE++
}
else if (choice === "b"){
    countI++
}

let question14 = console.log("Question 14:\nA. Focus on here and now\nB. Look to the future, global perspective, big picture: ")
answerChoice();
if (choice === "a"){
    countS++
}
else if (choice === "b"){
    countN++
}

let question15 = console.log("Question 15:\nA. Tough-minded, just\nB. Tender-hearted, merciful: ")
answerChoice();
if (choice === "a"){
    countT++
}
else if (choice === "b"){
    countF++
}

let question16 = console.log("Question 16:\nA. Preparation, plan ahead\nB. Go with the flow, adapt as you go: ")
answerChoice();
if (choice === "a"){
    countJ++
}
else if (choice === "b"){
    countP++
}

let question17 = console.log("Question 17:\nA. Active, initiate\nB. Reflective, deliberate: ")
answerChoice();
if (choice === "a"){
    countE++
}
else if (choice === "b"){
    countI++
}

let question18 = console.log("Question 18:\nA. Facts, things, what is\nB. Ideas, dreams, what could be, philosophical: ")
answerChoice();
if (choice === "a"){
    countS++
}
else if (choice === "b"){
    countN++
}

let question19 = console.log("Question 19:\nA. Matter of fact, issue-oriented\nB. Sensitive, people-oriented, compassionate: ")
answerChoice();
if (choice === "a"){
    countT++
}
else if (choice === "b"){
    countF++
}

let question20 = console.log("Question 20:\nA. Control, govern\nB. Latitude, freedom: ")
answerChoice();
if (choice === "a"){
    countJ++
}
else if (choice === "b"){
    countP++
}


console.log(countA, countB, countE, countI, countS, countN, countT, countF, countJ, countP);

