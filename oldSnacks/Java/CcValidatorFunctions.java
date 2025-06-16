import java.util.Scanner;

public class CcValidatorFunctions{
  public static int[] checkCreditCardNumber(int[] numbers){
    Scanner input = new Scanner(System.in);
    System.out.print("Count the card number. How many are they: ");
    int size = input.nextInt();
    System.out.print("Enter the card numbers: ");
    numbers = input.nextInt();
    
    return numbers;
  }
  public static void main(String[] args){
    System.out.println(checkCreditCardNumber(int[] numbers));
  }
}
