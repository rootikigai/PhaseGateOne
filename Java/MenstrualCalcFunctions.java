import java.time.LocalDate;
import java.util.Scanner;
import java.time.format.DateTimeParseException;

public class MenstrualCalcFunctions{
	public static LocalDate getAnyDateInput(String promptUser){
		Scanner input = new Scanner(System.in);

		while(true){
      System.out.print(promptUser);
      String userInput = input.nextLine();
      try{
        LocalDate userDate = LocalDate.parse(userInput);
        return userDate;
      }
      catch (DateTimeParseException wahala){
        System.out.println("Invalid Date. See example: 2025-10-27, year first, month next, day last...no whine me.");
      }
		}
	}

  public static LocalDate getNextPeriodDate(LocalDate lastPeriodStartDate, int aveCycleDays){
    LocalDate nextPeriodDate = lastPeriodStartDate.plusDays(aveCycleDays);
    return nextPeriodDate;
  }

  public static LocalDate getOvulationDate(LocalDate lastPeriodStartDate, int aveCycleDays){
    LocalDate ovulationDate = lastPeriodStartDate.plusDays(aveCycleDays - 14);
    return ovulationDate;
  }

  public static LocalDate[] getFertilityPeriod(LocalDate ovulationDate){
    LocalDate startFertilityPeriod = ovulationDate.minusDays(2);
    LocalDate endFertilityPeriod = ovulationDate.plusDays(2);
    return new LocalDate[]{startFertilityPeriod, endFertilityPeriod};
  }

  public static LocalDate[] getSafeDaysPeriod(LocalDate lastPeriodStartDate, int periodDays, LocalDate[] fertilityPeriod, LocalDate nextPeriodDate){
    LocalDate periodEnd = lastPeriodStartDate.plusDays(periodDays);
    LocalDate safeBeforeFertStart = periodEnd;
    LocalDate safeBeforeFertEnd = fertilityPeriod[0].minusDays(1);

    LocalDate safeAfterFertEnd = fertilityPeriod[1].plusDays(1);
    LocalDate safeBeforeNextPeriod = nextPeriodDate.minusDays(1);

    return new LocalDate[]{
      safeBeforeFertStart, safeBeforeFertEnd, safeAfterFertEnd, safeBeforeNextPeriod
    };
  }
}
