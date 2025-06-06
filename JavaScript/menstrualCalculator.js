const prompt = require("prompt-sync")();

function getAnyDateInput(promptUser){
    while(true){
        let userDate = new Date(prompt(promptUser))
        if(isNaN(userDate)){
            console.log("Invalid date.")
        }
        else{
            return userDate;
        }
    }
}
/*
function getNextPeriodDate(lastPeriodStartDate, averageCycleDays){
    lastPeriodStartDate = getAnyDateInput("Please, enter date when your last period started, in this format...STRICTLY! (YYYY-MM-DD): ");
    aveCycleDays = parseInt(prompt("Please enter your average days for your cycle length: "));
    let nextPeriodDate = new Date(lastPeriodStartDate);
    nextPeriodDate.setDate(nextPeriodDate.getDate() + aveCycleDays);

    console.log(nextPeriodDate.toDateString())
}
getNextPeriodDate();
*/
function getOvulationDate(lastPeriodStartDate, aveCycleDays){
    lastPeriodStartDate = getAnyDateInput("Please, enter date when your last period started, in this format...STRICTLY! (YYYY-MM-DD): ");
    aveCycleDays = parseInt(prompt("Please enter your average days for your cycle length: "));
    let ovulationDate = new Date(lastPeriodStartDate);
    ovulationDate.setDate(ovulationDate.getDate() + (aveCycleDays - 14));
    console.log(ovulationDate.toDateString());
}
getOvulationDate();

