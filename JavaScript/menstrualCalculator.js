const prompt = require("prompt-sync")();

function getAnyDateInput(promptUser){
    while(true){
        let userInput = prompt(promptUser);
        let userDate = new Date(userInput);
        if(isNaN(userDate)){
            console.log("Invalid date.")
        }
        else{
            return userDate;
        }
    }
}
//getAnyDateInput("Enter Date: ");

function getNextPeriodDate(lastPeriodStartDate, averageCycleDays){
//    lastPeriodStartDate = getAnyDateInput("Please, enter date when your last period started, in this format...STRICTLY! (YYYY-MM-DD): ");
//    aveCycleDays = parseInt(prompt("Please enter your average days for your cycle length: "));
    let nextPeriodDate = new Date(lastPeriodStartDate);
    nextPeriodDate.setDate(nextPeriodDate.getDate() + aveCycleDays);

    return nextPeriodDate;
}
//getNextPeriodDate();

function getOvulationDate(lastPeriodStartDate, aveCycleDays){
//    lastPeriodStartDate = getAnyDateInput("Please, enter date when your last period started, in this format...STRICTLY! (YYYY-MM-DD): ");
//    aveCycleDays = parseInt(prompt("Please enter your average days for your cycle length: "));
    let ovulationDate = new Date(lastPeriodStartDate);
    ovulationDate.setDate(ovulationDate.getDate() + (aveCycleDays - 14));
    return ovulationDate;
}
//getOvulationDate();

function getFertilityPeriod(ovulationDate){
//    ovulationDate = getAnyDateInput("Please, enter your ovulation date, in this format...STRICTLY! (YYYY-MM-DD): ");
    let startFertilityPeriod = new Date(ovulationDate);
    startFertilityPeriod.setDate(startFertilityPeriod.getDate() - 2)
    let endFertilityPeriod = new Date(ovulationDate);
    endFertilityPeriod.setDate(endFertilityPeriod.getDate() + 2);
    return {startFertilityPeriod, endFertilityPeriod}
}
//getFertilityPeriod();

function getSafeDaysPeriod(lastPeriodStartDate, periodDays, fertilityPeriod, nextPeriodDate){
//    lastPeriodStartDate = getAnyDateInput("Please, enter date when your last period started,\nin this format...STRICTLY! (YYYY-MM-DD): ");
//    periodDays = parseInt(prompt("Please enter the number of days your period lasted: "));
    let periodEnd = new Date(lastPeriodStartDate);
    periodEnd.setDate(periodEnd.getDate() + periodDays);
    let safeBeforeFertStart = new Date(periodEnd);
    let safeBeforeFertEnd = new Date(fertilityPeriod.startFertilityPeriod);
    safeBeforeFertEnd.setDate(safeBeforeFertEnd.getDate() - 1);

    let safeAfterFertEnd = new Date(fertilityPeriod.endFertilityPeriod);
    safeAfterFertEnd.setDate(safeAfterFertEnd.getDate() + 1)
    let safeBeforeNextPeriod = new Date(nextPeriodStart);
    safeBeforeNextPeriod.setDate(safeBeforeNextPeriod.getDate() - 1);

    return {safeBeforeFertStart, safeBeforeFertEnd, safeAfterFertEnd, safeBeforeNextPeriod};
}
