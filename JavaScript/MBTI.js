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
        resultINTJ = console.log(`And now  ${name}, the results are in!
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
        resultINTP = console.log(`And now  ${name}, the results are in!
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

function entj(){
    if(introverted < extroverted && intuitive > sensing && thinking > feeling && judging > perceptive){
        resultENTJ = console.log(`And now  ${name}, the results are in!
======================================================
You are: A Commander - ENTJ (Extroverted, Intuitive, Thinking, Judging)

ENTJs are assertive, goal-oriented leaders who thrive on efficiency and structure. They are natural-born organizers, driven by their desire to achieve success and lead others. ENTJs are logical, strategic, and assertive, with a keen ability to analyze complex situations and make quick, effective decisions. They are often seen as "commanders" who take charge of any situation, organizing people and resources to meet their objectives.

Strengths:

Highly organized, strategic, and goal-driven
Excellent decision-makers, especially in high-pressure situations
Natural leaders with a strong sense of confidence
Determined and persistent in pursuing their goals
Very capable of managing people and resources efficiently

Weaknesses:

Can come across as overly critical or domineering
May struggle to understand or appreciate the emotional needs of others
Can become impatient with inefficiency or those who do not share their sense of urgency
Tendency to push others too hard in pursuit of goals

Famous ENTJs: Steve Jobs, Margaret Thatcher, and Napoleon Bonaparte
`);
    }
    return resultENTJ;
}

function entp(){
    if(introverted < extroverted && intuitive > sensing && thinking > feeling && judging < perceptive){
        resultENTP = console.log(`And now  ${name}, the results are in!
======================================================
You are: A Debater - ENTP (Extroverted, Intuitive, Thinking, Perceptive)

ENTPs are energetic, creative, and charismatic individuals who love to engage in intellectual debates and explore new ideas. Known as the “debater,” ENTPs excel at seeing all sides of an issue and love to challenge ideas and assumptions. They enjoy intellectual sparring, always seeking new ways to improve the world or solve problems. They are open-minded, adaptable, and highly resourceful.

Strengths:

Creative, with a talent for generating new ideas
Quick-witted and love intellectual debates
Excellent problem-solvers who think outside the box
Charismatic and outgoing, able to persuade and inspire others
Adaptable and enjoy change and new experiences

Weaknesses:

Can be argumentative, especially when seeking to explore all sides of an issue
May struggle with following through on projects due to lack of focus or interest
Can become overly critical of others’ ideas or approaches
Can be seen as inconsiderate of people’s emotions in favor of intellectual pursuits

Famous ENTPs: Thomas Edison, Leonardo da Vinci, and Mark Twain
`);
    }
    return resultENTP;
}

function infj(){
    if(introverted > extroverted && intuitive > sensing && thinking < feeling && judging > perceptive){
        resultINFJ = console.log(`And now  ${name}, the results are in!
======================================================
You are: An Advocate - INFJ (Introverted, Intuitive, Feeling, Judging)

INFJs are insightful, empathetic, and idealistic individuals. They are deeply concerned with making a positive difference in the world and have a strong sense of purpose in life. INFJs are often drawn to helping others, whether through counseling, advocacy, or creative expression. They are highly intuitive, with a profound understanding of human nature, and they tend to have a deep inner vision of what the world could be.

Strengths:

Deeply empathetic and caring, often putting others’ needs before their own
Visionary thinkers with a strong sense of purpose
Excellent at understanding the emotions and motivations of others
Often have a unique perspective on the world and their place in it
Committed to making a positive difference in society

Weaknesses:

Can be overly idealistic, sometimes setting unrealistic expectations
Prone to burnout when they give too much of themselves to others
Tendency to be reserved or secretive, leading to misunderstandings
Can struggle with conflict and may avoid confrontation

Famous INFJs: Martin Luther King Jr., Nelson Mandela, and J.K. Rowling
`);
    }
    return resultINFJ;
}

function infp(){
    if(introverted > extroverted && intuitive > sensing && thinking < feeling && judging < perceptive){
        resultINFP = console.log(`And now  ${name}, the results are in!
======================================================
You are: A Mediator - INFP (Introverted, Intuitive, Feeling, Perceptive)

INFPs are gentle, creative, and deeply reflective individuals who are guided by their values and ideals. They often feel a sense of duty to live authentically and to make the world a better place. INFPs are passionate about causes they believe in, but they can be somewhat private and reserved, preferring to work behind the scenes to make a difference. They are also highly creative, often pursuing artistic endeavors or exploring new ideas.

Strengths:

Deeply introspective, with a rich inner world
Strong sense of personal values and authenticity
Idealistic and motivated to make a positive impact on the world
Creative, artistic, and often drawn to writing or other forms of self-expression
Empathetic and compassionate

Weaknesses:

Can be overly idealistic, leading to disappointment when reality doesn’t meet expectations
Struggle with self-doubt and may be overly critical of themselves
Prone to procrastination or becoming overwhelmed by their idealistic visions
Can be too sensitive to criticism or conflict

Famous INFPs: William Shakespeare, Audrey Hepburn, and John Lennon
`);
    }
    return resultINFP;
}

function enfj(){
    if(introverted < extroverted && intuitive > sensing && thinking < feeling && judging > perceptive){
        resultENFJ = console.log(`And now  ${name}, the results are in!
======================================================
You are: A Protagonist - ENFJ (Extroverted, Intuitive, Feeling, Judging)

ENFJs are charismatic, empathetic, and inspiring leaders who are deeply concerned with the well-being of others. They are highly social and excel in environments where they can build strong personal connections and guide others toward achieving their full potential. ENFJs are driven by their values and a desire to improve the lives of those around them, often finding themselves in positions of leadership and influence.

Strengths:

Exceptional at understanding others' emotions and motivations
Strong, inspiring leaders who lead by example
Excellent communicators and can motivate others with ease
Empathetic and genuinely care about the well-being of others
Visionary thinkers who can inspire positive change in communities

Weaknesses:

Can overextend themselves by taking on too much responsibility for others
May struggle with accepting criticism or rejection, as they care deeply about how others perceive them
Tend to idealize people and situations, which can lead to disappointment when reality doesn’t align with expectations
Can be seen as overly controlling or self-sacrificing

Famous ENFJs: Barack Obama, Oprah Winfrey, and Jennifer Lawrence
`);
    }
    return resultENFJ;
}

function enfp(){
    if(introverted < extroverted && intuitive > sensing && thinking < feeling && judging < perceptive){
        resultENFP = console.log(`And now  ${name}, the results are in!
======================================================
You are: A Campaigner - ENFP (Extroverted, Intuitive, Feeling, Perceptive)

ENFPs are energetic, curious, and deeply passionate about their beliefs and the potential of others. They are driven by a desire for personal growth, exploration, and meaningful connections. ENFPs are known for their creativity and love of new experiences, often jumping from one idea to the next. They thrive on variety, excitement, and the opportunity to engage with like-minded individuals.

Strengths:

Enthusiastic, optimistic, and highly motivated
Strong people skills and capable of building deep, meaningful relationships
Creative thinkers who love exploring new ideas and possibilities
Adaptable and flexible, with a natural ability to connect with others
Inspiring and motivating, able to bring out the best in those around them

Weaknesses:

Can struggle with focusing on one task or goal at a time, leading to a lack of follow-through
May become easily bored or distracted when routines set in
Tendency to overcommit themselves to causes and projects, leading to burnout
Can become overly idealistic, sometimes disregarding practical concerns

Famous ENFPs: Robin Williams, Ellen DeGeneres, and Walt Disney
`);
    }
    return resultENFP;
}

function istj(){
    if(introverted > extroverted && intuitive < sensing && thinking > feeling && judging > perceptive){
        resultISTJ = console.log(`And now  ${name}, the results are in!
======================================================
You are: A Logistician - ISTJ (Introverted, Sensing, Thinking, Judging)

ISTJs are grounded, responsible, and highly detail-oriented individuals. They are known for their strong work ethic and commitment to duty. ISTJs value structure, tradition, and reliability, often excelling in environments that require organization and attention to detail. They prefer to focus on facts, logic, and real-world applications rather than abstract theories or hypothetical ideas.

Strengths:

Extremely reliable, responsible, and dependable
Highly organized, with a strong attention to detail
Practical, with a focus on real-world solutions and applications
Dedicated to completing tasks to the best of their ability
Loyal and trustworthy, with a strong sense of duty

Weaknesses:

Can be resistant to change or new ideas, especially if they disrupt established routines
May struggle with flexibility or improvisation in unfamiliar situations
Can be seen as rigid or inflexible when it comes to rules or systems
May have difficulty understanding or prioritizing emotions over logic

Famous ISTJs: George Washington, Angela Merkel, and Queen Elizabeth II
`);
    }
    return resultISTJ;
}

function isfj(){
    if(introverted > extroverted && intuitive < sensing && thinking < feeling && judging > perceptive){
        resultISTJ = console.log(`And now  ${name}, the results are in!
======================================================
You are: A Defender - ISFJ (Introverted, Sensing, Feeling, Judging)

ISFJs are nurturing, dedicated, and highly conscientious individuals. They are often described as the "defenders" of their loved ones, offering support, stability, and care. ISFJs thrive in environments where they can help others, whether through caregiving roles or by ensuring that systems run smoothly. They are deeply committed to their responsibilities and value traditions, loyalty, and stability.

Strengths:

Caring, compassionate, and deeply concerned with the well-being of others
Detail-oriented and reliable, with a strong sense of duty
Highly observant of others’ needs, often anticipating what is required without being asked
Organized and methodical in their approach to tasks
Dedicated to their relationships and responsibilities

Weaknesses:

Can be overly self-sacrificing, sometimes neglecting their own needs in favor of others
Tendency to avoid conflict, which can lead to repressed feelings or unresolved issues
Can become overwhelmed by the expectations placed on them by others
May resist change, preferring to stick to familiar routines

Famous ISFJs: Mother Teresa, Rosa Parks, and Kate Middleton
`);
    }
    return resultISFJ;
}

function estj(){
    if(introverted < extroverted && intuitive < sensing && thinking > feeling && judging > perceptive){
        resultESTJ = console.log(`And now  ${name}, the results are in!
======================================================
You are: An Executive - ESTJ (Extroverted, Sensing, Thinking, Judging)

ESTJs are natural-born leaders who thrive in structured, organized environments. They are practical, assertive, and deeply focused on efficiency and results. ESTJs are highly responsible and take pride in their work and achievements. They value tradition, rules, and order, and they are often found in leadership roles where they can ensure that things are done correctly and efficiently.

Strengths:

Strong organizational skills, with an ability to manage both people and projects
Decisive and action-oriented, often able to make tough decisions quickly
Pragmatic and results-focused, with a clear sense of what needs to be done
Highly responsible and dependable
Loyal and protective of their loved ones and their values

Weaknesses:

Can be seen as rigid or inflexible, especially when it comes to rules and procedures
May be critical or overly demanding of others, especially when things don’t go as planned
Tendency to overlook the emotional needs of others in favor of achieving goals
Can become impatient with inefficiency or disorder

Famous ESTJs: Winston Churchill, Margaret Thatcher, and Judge Judy
`);
    }
    return resultESTJ;
}

function esfj(){
    if(introverted < extroverted && intuitive < sensing && thinking < feeling && judging > perceptive){
        resultESFJ = console.log(`And now  ${name}, the results are in!
======================================================
You are: A Consul - ESFJ (Extroverted, Sensing, Feeling, Judging)

ESFJs are sociable, empathetic, and highly attuned to the needs of others. They are deeply invested in maintaining harmony and making sure everyone around them feels supported and valued. ESFJs are excellent communicators and excel in social settings, often taking on roles where they can provide care and organization to groups. They value tradition, community, and stability, and they seek to ensure that everyone’s needs are met.

Strengths:

Warm, friendly, and deeply empathetic toward others
Highly social and great at building strong, supportive relationships
Excellent at organizing events and making sure people feel included
Responsible and dependable, with a strong desire to care for others
Strong moral compass, guided by a desire to maintain harmony and stability

Weaknesses:

Can be overly concerned with what others think, leading to stress or anxiety
May take criticism too personally, as they care deeply about maintaining social harmony
Can be seen as too focused on tradition and routine, resistant to change
May neglect their own needs in favor of taking care of others

Famous ESFJs: Taylor Swift, Jennifer Garner, and Bill Clinton
`);
    }
    return resultESFJ;
}

function istp(){
    if(introverted > extroverted && intuitive < sensing && thinking > feeling && judging < perceptive){
        resultISTP = console.log(`And now  ${name}, the results are in!
======================================================
You are: A Virtuoso - ISTP (Introverted, Sensing, Thinking, Perceptive)

ISTPs are action-oriented, hands-on individuals who thrive on solving problems and understanding how things work. They are practical, adaptable, and enjoy taking risks. ISTPs are typically independent and enjoy exploring new environments, often finding creative solutions to challenges. They are naturally curious, with a tendency to experiment and learn by doing.

Strengths:

Logical and highly analytical, able to understand complex systems quickly
Adventurous and spontaneous, willing to take risks to achieve their goals
Calm under pressure and able to think clearly in stressful situations
Independent and self-reliant, preferring to work on their own terms
Excellent at solving practical, real-world problems

Weaknesses:

Can seem detached or emotionally distant due to their focus on logic over emotions
May struggle with long-term planning or structure, preferring to live in the moment
Can become easily bored with routine tasks and repetitive activities
Tendency to avoid dealing with emotional or interpersonal issues

Famous ISTPs: Clint Eastwood, Amelia Earhart, and Michael Jordan
`);
    }
    return resultISTP;
}

function isfp(){
    if(introverted > extroverted && intuitive < sensing && thinking < feeling && judging < perceptive){
        resultISFP = console.log(`And now  ${name}, the results are in!
======================================================
You are: An Adventurer - ISFP (Introverted, Sensing, Feeling, Perceptive)

ISFPs are creative, sensitive, and deeply attuned to their surroundings. They value personal freedom and enjoy exploring the world in a spontaneous and hands-on way. ISFPs are often artists or creators, with a strong desire to express themselves through their work or hobbies. They are also highly empathetic, often drawn to causes that involve helping others or protecting the environment.

Strengths:

Creative, artistic, and highly attuned to beauty and aesthetics
Empathetic and sensitive, with a deep concern for the feelings of others
Independent and enjoy pursuing their personal passions and interests
Spontaneous and adaptable, able to embrace new experiences
Calm and gentle, able to provide emotional support when needed

Weaknesses:

Can be overly private, sometimes hiding their true feelings from others
Prone to procrastination or becoming easily distracted from tasks
May struggle with conflict or difficult conversations, preferring to avoid confrontation
Can become overwhelmed by emotions, leading to withdrawal

Famous ISFPs: Marilyn Monroe, Bob Dylan, and Princess Diana
`);
    }
    return resultISFP;
}

function estp(){
    if(introverted < extroverted && intuitive < sensing && thinking > feeling && judging < perceptive){
        resultESTP = console.log(`And now  ${name}, the results are in!
======================================================
You are: An Entrepreneur - ESTP (Extroverted, Sensing, Thinking, Perceptive)

ESTPs are energetic, action-driven individuals who thrive on excitement, new experiences, and challenges. Often described as the "entrepreneurs" of the personality world, they are quick thinkers, adaptable, and love to dive headfirst into new projects or adventures. ESTPs are highly social and have a knack for engaging others with their charm and enthusiasm. They live in the moment, making decisions quickly and efficiently.

Strengths:

Energetic, adaptable, and action-oriented
Quick thinkers who can make decisions in high-pressure situations
Social and outgoing, able to engage with people easily
Excellent at problem-solving and troubleshooting in real-time
Thrives in fast-paced environments that offer variety and excitement

Weaknesses:

Can be impulsive or reckless, sometimes acting without fully thinking through consequences
May struggle with long-term planning or projects that require patience
Can be seen as overly competitive or self-centered at times
Tendency to avoid deeper, introspective reflection and emotional depth

Famous ESTPs: Ernest Hemingway, Donald Trump, and Madonna
`);
    }
    return resultESTP;
}

function esfp(){
    if(introverted < extroverted && intuitive < sensing && thinking < feeling && judging < perceptive){
        resultESFP = console.log(`And now  ${name}, the results are in!
======================================================
You are: An Entrepreneur - ESFP (Extroverted, Sensing, Thinking, Perceptive)

ESFPs are lively, spontaneous, and fun-loving individuals who thrive in social environments and seek to bring joy and excitement to those around them. They are often the life of the party, with a natural ability to make people laugh and feel comfortable. ESFPs are highly in tune with their surroundings and enjoy sensory experiences, such as music, food, and travel. They are all about living in the present and experiencing life to its fullest.

Strengths:

Energetic, outgoing, and always looking for the next adventure
Charismatic and fun-loving, able to make social connections with ease
Spontaneous and adaptable, enjoying life as it comes
Great at entertaining and engaging others in social settings
Empathetic and sensitive to the feelings of those around them

Weaknesses:

Can be easily distracted or struggle with long-term planning
Prone to acting impulsively without thinking about the consequences
May have difficulty with structure or routines, preferring spontaneity
Can be overly sensitive to criticism or rejection, especially in social situations

Famous ESFPs: Elvis Presley, Marilyn Monroe, and Ariana Grande
`);
    }
    return resultESFP;
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

let question10 = console.log("Question 10:\nA. Standard, usual, conventional\nB. Different, novel, unique: ")
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


console.log(`Here are the number of choices you made ${name}:
Number of As you picked: ${countA} / 20
Number of Bs you picked: ${countB} / 20

What that translates to:
========================

Extroverted = ${extroverted} / 5
Introverted = ${introverted} / 5
Sensing = ${sensing} / 5
Intuitive = ${intuitive} / 5
Thinking = ${thinking} / 5
Feeling = ${feeling} / 5
Judging = ${judging} / 5
Perception = ${perceptive} / 5
=========================`);


intj();
intp();
entj();
entp();
infj();
infp();
enfj();
enfp();
istj();
isfj();
estj();
esfj();
istp();
isfp();
estp();
esfp();


