const prompt = require("prompt-sync")();
let name;
let choice;
let countA = 0;
let countB = 0;
let extroverted = 0;
let introverted = 0;
let sensing = 0;
let intuitive = 0;
let thinking = 0;
let feeling = 0;
let judging = 0;
let perceptive = 0;
let resultINTJ;
let resultINTP;
let resultENTJ;
let resultENTP;
let resultINFJ;
let resultINFP;
let resultENFJ;
let resultENFP;
let resultISTJ;
let resultISFJ;
let resultESTJ;
let resultESFJ;
let resultISTP;
let resultISFP;
let resultESTP;
let resultESFP;
//let nav;

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

function intj(){
    if(introverted > extroverted && intuitive > sensing && thinking > feeling && judging > perceptive){
        resultINTJ = console.log(`Hey ${name}, the results are in!
======================================================
You are: An Architect - INTJ (Introverted, Intuitive, Thinking, Judging)

INTJs are strategic, determined, and innovative thinkers. They are often described as the “masterminds” of the personality world, driven by logic and long-term goals. They have a deep internal world of ideas and concepts and tend to be future-focused visionaries. INTJs value competence, independence, and intellectual rigor, and they are not afraid to challenge conventional wisdom to achieve their goals.

Strengths:

Highly analytical, strategic thinkers
Independent and self-sufficient
Creative problem-solvers, with a talent for long-term planning
Committed to personal growth and self-improvement
Willing to challenge the status quo and think outside the box

Weaknesses:

Can appear aloof or distant due to their focus on logic over emotions
May struggle with more emotionally driven or subjective aspects of life
Prone to perfectionism, which can create frustration if things don’t go as planned
Tendency to isolate themselves in pursuit of their goals

Famous INTJs: Elon Musk, Hillary Clinton, and Arnold Schwarzenegger
`);
    }
    return resultINTJ;
}

function intp(){
    if(introverted > extroverted && intuitive > sensing && thinking > feeling && judging < perceptive){
        resultINTP = console.log(`Hey ${name}, the results are in!
======================================================
You are: A Logician - INTP (Introverted, Intuitive, Thinking, Perceptive)

INTPs are the quintessential thinkers, constantly exploring new ideas and trying to understand how things work. They are curious, inventive, and deeply interested in abstract theories and concepts. INTPs thrive on intellectual challenges and enjoy engaging in complex, theoretical discussions. They tend to be independent and skeptical of authority and conventions.

Strengths:

Logical, analytical, and deeply curious
Creative problem-solvers who enjoy intellectual challenges
Open-minded and constantly seeking new perspectives
Able to detach from emotions, allowing them to analyze situations without bias
Excellent at seeing patterns and solving abstract problems

Weaknesses:

Can become lost in theory and overanalyze, sometimes missing practical solutions
Often uninterested in mundane or routine tasks
May seem aloof or disconnected from emotional realities
Struggles with making decisions, particularly when there’s not enough data to form a conclusion

Famous INTPs: Albert Einstein, Bill Gates, and Charles Darwin
`);
    }
    return resultINTP;
}


//...
name = prompt("What is your name?: ")
console.log(`\nWelcome ${name}. Search yourself and think before answering. Can you say you prefer either A or B for the following questions?`)

let question1 = console.log("Question 1:\nA. Expend energy, enjoy groups\nB. Conserve energy, enjoy one-on-one: ")
answerChoice();
if (choice === "a"){
    extroverted++
}
else if (choice === "b"){
    introverted++
}

let question2 = console.log("Question 2:\nA. Interpret literally\nB. Look for meaning and possibilities: ")
answerChoice();
if (choice === "a"){
    sensing++
}
else if (choice === "b"){
    intuitive++
}

let question3 = console.log("Question 3:\nA. Logical, thinking, questioning\nB. Empathetic, feeling, accomodating: ")
answerChoice();
if (choice === "a"){
    thinking++
}
else if (choice === "b"){
    feeling++
}

let question4 = console.log("Question 4:\nA. Organised, orderly\nB. Flexible, adaptable: ")
answerChoice();
if (choice === "a"){
    judging++
}
else if (choice === "b"){
    perceptive++
}

let question5 = console.log("Question 5:\nA. More outgoing, think out loud\nB. More reserved, think to yourself: ")
answerChoice();
if (choice === "a"){
    extroverted++
}
else if (choice === "b"){
    introverted++
}

let question6 = console.log("Question 6:\nA. Practical, realistic, experiential\nB. Imaginative, innovative, theoretical: ")
answerChoice();
if (choice === "a"){
    sensing++
}
else if (choice === "b"){
    intuitive++
}

let question7 = console.log("Question 7:\nA. Candid, straight-forward, frank\nB. Tactful, kind, encouraging: ")
answerChoice();
if (choice === "a"){
    thinking++
}
else if (choice === "b"){
    feeling++
}

let question8 = console.log("Question 8:\nA. Plan, schedule\nB. Unplanned, spontaneous: ")
answerChoice();
if (choice === "a"){
    judging++
}
else if (choice === "b"){
    perceptive++
}

let question9 = console.log("Question 9:\nA. Seek many tasks, public activities, interaction with others\nB. Seek private, solitary activities with quiet to concentrate: ")
answerChoice();
if (choice === "a"){
    extroverted++
}
else if (choice === "b"){
    introverted++
}

let question10 = console.log("Question 10:\nA. Standart, usual, conventional\nB. Different, novel, unique: ")
answerChoice();
if (choice === "a"){
    sensing++
}
else if (choice === "b"){
    intuitive++
}

let question11 = console.log("Question 11:\nA. Firm, tend to criticize, hold the line\nB. Gentle, tend to appreciate, consciliate: ")
answerChoice();
if (choice === "a"){
    thinking++
}
else if (choice === "b"){
    feeling++
}

let question12 = console.log("Question 12:\nA. Regulated, structured\nB. easy-going, live and let live: ")
answerChoice();
if (choice === "a"){
    judging++
}
else if (choice === "b"){
    perceptive++
}

let question13 = console.log("Question 13:\nA. External, communicative, express yourself\nB. Internal, reticent, keep to yourself: ")
answerChoice();
if (choice === "a"){
    extroverted++
}
else if (choice === "b"){
    introverted++
}

let question14 = console.log("Question 14:\nA. Focus on here and now\nB. Look to the future, global perspective, big picture: ")
answerChoice();
if (choice === "a"){
    sensing++
}
else if (choice === "b"){
    intuitive++
}

let question15 = console.log("Question 15:\nA. Tough-minded, just\nB. Tender-hearted, merciful: ")
answerChoice();
if (choice === "a"){
    thinking++
}
else if (choice === "b"){
    feeling++
}

let question16 = console.log("Question 16:\nA. Preparation, plan ahead\nB. Go with the flow, adapt as you go: ")
answerChoice();
if (choice === "a"){
    judging++
}
else if (choice === "b"){
    perceptive++
}

let question17 = console.log("Question 17:\nA. Active, initiate\nB. Reflective, deliberate: ")
answerChoice();
if (choice === "a"){
    extroverted++
}
else if (choice === "b"){
    introverted++
}

let question18 = console.log("Question 18:\nA. Facts, things, what is\nB. Ideas, dreams, what could be, philosophical: ")
answerChoice();
if (choice === "a"){
    sensing++
}
else if (choice === "b"){
    intuitive++
}

let question19 = console.log("Question 19:\nA. Matter of fact, issue-oriented\nB. Sensitive, people-oriented, compassionate: ")
answerChoice();
if (choice === "a"){
    thinking++
}
else if (choice === "b"){
    feeling++
}

let question20 = console.log("Question 20:\nA. Control, govern\nB. Latitude, freedom: ")
answerChoice();
if (choice === "a"){
    judging++
}
else if (choice === "b"){
    perceptive++
}
console.log


console.log(countA, countB, extroverted, introverted, sensing, intuitive, thinking, feeling, judging, perceptive);


intj();
intp();



