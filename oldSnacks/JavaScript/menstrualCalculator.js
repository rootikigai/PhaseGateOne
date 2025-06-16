const prompt = require("prompt-sync")();

function getAnyDateInput(promptUser){
    while(true){
        let userInput = prompt(promptUser);
        let userDate = new Date(userInput);
        if(isNaN(userDate)){
            console.log("Invalid Date. See example: 2025-10-27, year first, month next, day last...no whine me.")
        }
        else{
            return userDate;
        }
    }
}

function getNextPeriodDate(lastPeriodStartDate, aveCycleDays){
    let nextPeriodDate = new Date(lastPeriodStartDate);
    nextPeriodDate.setDate(nextPeriodDate.getDate() + aveCycleDays);

    return nextPeriodDate;
}

function getOvulationDate(lastPeriodStartDate, aveCycleDays){
    let ovulationDate = new Date(lastPeriodStartDate);
    ovulationDate.setDate(ovulationDate.getDate() + (aveCycleDays - 14));
    return ovulationDate;
}

function getFertilityPeriod(ovulationDate){
    let startFertilityPeriod = new Date(ovulationDate);
    startFertilityPeriod.setDate(startFertilityPeriod.getDate() - 2)
    let endFertilityPeriod = new Date(ovulationDate);
    endFertilityPeriod.setDate(endFertilityPeriod.getDate() + 2);
    return {startFertilityPeriod, endFertilityPeriod}
}

function getSafeDaysPeriod(lastPeriodStartDate, periodDays, fertilityPeriod, nextPeriodDate){
    let periodEnd = new Date(lastPeriodStartDate);
    periodEnd.setDate(periodEnd.getDate() + periodDays);
    let safeBeforeFertStart = new Date(periodEnd);
    let safeBeforeFertEnd = new Date(fertilityPeriod.startFertilityPeriod);
    safeBeforeFertEnd.setDate(safeBeforeFertEnd.getDate() - 1);

    let safeAfterFertEnd = new Date(fertilityPeriod.endFertilityPeriod);
    safeAfterFertEnd.setDate(safeAfterFertEnd.getDate() + 1)
    let safeBeforeNextPeriod = new Date(nextPeriodDate);
    safeBeforeNextPeriod.setDate(safeBeforeNextPeriod.getDate() - 1);

    return {safeBeforeFertStart, safeBeforeFertEnd, safeAfterFertEnd, safeBeforeNextPeriod};
}

let message = `
===Menstrual Calculator===
`;
console.log(message)
let lastPeriodStartDate = getAnyDateInput("Please, enter the date when your last period started (YYYY-MM-DD): ");
let aveCycleDays = parseInt(prompt("Please enter your average cycle length in days: "));
let periodDays = parseInt(prompt("Please enter the number of days your period lasts: "));
let nextPeriodDate = getNextPeriodDate(lastPeriodStartDate, aveCycleDays);
let ovulationDate = getOvulationDate(lastPeriodStartDate, aveCycleDays);
let fertilityPeriod = getFertilityPeriod(ovulationDate);
let safeDays = getSafeDaysPeriod(lastPeriodStartDate, periodDays, fertilityPeriod, nextPeriodDate);
console.log("Next Period Date: " + nextPeriodDate.toDateString());
console.log("Ovulation Date: " + ovulationDate.toDateString());
console.log(`Fertility Period: ${fertilityPeriod.startFertilityPeriod.toDateString()} - ${fertilityPeriod.endFertilityPeriod.toDateString()}`);
console.log(`Safe Days Period: ${safeDays.safeBeforeFertStart.toDateString()} - ${safeDays.safeBeforeFertEnd.toDateString()} and ${safeDays.safeAfterFertEnd.toDateString()} - ${safeDays.safeBeforeNextPeriod.toDateString()}`);



