name = ""
choice = ""
countA = 0;
countB = 0;
extroverted = 0
introverted = 0
sensing = 0
intuitive = 0
thinking = 0
feeling = 0
judging = 0
perceptive = 0

def answer_choice():
    while choice != "a" or choice != "b":
        choice = input("Your answer: ").lower();
        if choice == "a":
            countA += 1
            break
        elif choice == "b":
            countB += 1
            break
        else:
            print("Expected A or B as response. I know this is an error, please try again")

def intj():
    if introverted > extroverted and intuitive > sensing and thinking > feeling and judging > perceptive:
        result_intj = f"""
And now {name}, the results are in!
============================================================
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
"""
print(intj)
