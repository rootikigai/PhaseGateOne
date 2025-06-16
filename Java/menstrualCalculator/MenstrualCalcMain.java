import java.time.LocalDate;
import java.util.Scanner;

public class MenstrualCalcMain{
  public static void main(String[] args){
    Scanner input = new Scanner(System.in);
    LocalDate lastPeriodStartDate;
    int aveCycleDays;
    int periodDays;
    LocalDate nextPeriodDate;
    LocalDate ovulationDate;
    int nav = -1;
    while(nav != 0){
      String message = """
  ===Menstrual Calculator===
  """;
      System.out.println(message);
      lastPeriodStartDate = MenstrualCalcFunctions.getAnyDateInput("Please, enter the date when your last period started (YYYY-MM-DD): ");
      System.out.print("Please enter your average cycle length in days: ");
      aveCycleDays = Integer.parseInt(input.nextLine());
      System.out.print("Please enter the number of days your period lasts: ");
      periodDays = Integer.parseInt(input.nextLine());

      nextPeriodDate = MenstrualCalcFunctions.getNextPeriodDate(lastPeriodStartDate, aveCycleDays);
      ovulationDate = MenstrualCalcFunctions.getOvulationDate(lastPeriodStartDate, aveCycleDays);
      LocalDate[] fertilityPeriod = MenstrualCalcFunctions.getFertilityPeriod(ovulationDate);
      LocalDate[] safeDays = MenstrualCalcFunctions.getSafeDaysPeriod(lastPeriodStartDate, periodDays, fertilityPeriod, nextPeriodDate);

      System.out.println("\nYour Results:");
      System.out.println("Next Period Date: " + nextPeriodDate);
      System.out.println("Ovulation Date: " + ovulationDate);
      System.out.println("Fertility Period: " + fertilityPeriod[0] + " to " + fertilityPeriod[1]);
      System.out.println("Safe Days Period:");
      System.out.println("\tBefore Fertility: " + safeDays[0] + " to " + safeDays[1]);
      System.out.println("\tAfter Fertility: " + safeDays[2] + " to " + safeDays[3] + "\n");

      System.out.print("Would you like to calculate again(for No, press 0. To continue, press any other number): ");
      nav = input.nextInt();      
      if(nav == 0){
        System.out.println("\nExiting calculator...");
        break;
      }
    }
  }
}
