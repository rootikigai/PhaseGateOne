import java.time.LocalDate;
import java.util.Scanner;

public class MenstrualCalcFunctions{
	public static LocalDate getAnyDateInput(String promptUser){
		Scanner input = new Scanner(System.in);

		while(true){
      System.out.print(promptUser);
      String userInput = scanner.nextLine();
      try{
        LocalDate userDate = LocalDate.parse(userInput);
        return userDate;
      }
      catch (DateTimeParseException wahala){
        System.out.println("Invalid Date. See example: 2025-10-27, year first, month next, day last...no whine me.");
      }
		}
	}

  public static localDate getNextPeriodDate(LocalDate lastPeriodStartDate, int aveCycleDays){

  }





}
