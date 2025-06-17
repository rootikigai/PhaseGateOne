import java.util.Scanner;
import java.util.Arrays;
public class CcValidatorMain{
	public static void main(String[] args){
    Scanner input = new Scanner(System.in);
    String ccType;
    int ccDigLength;
    String ccValStat = "Valid";
    System.out.print("Count the card number. How many are they: ");
    ccDigLength = input.nextInt();
    int[] cardNum = new int[ccDigLength];
    System.out.print("Enter card numbers separated by spaces: ");
      for(int i = 0; i < ccDigLength; i++){
        cardNum[i] = input.nextInt();
        //System.out.print(cardNum[i]);
      }
    if(ccDigLength >= 13 && ccDigLength <= 16 && cardNum[0] == 4){
      ccType = "You have a Visa Card.";
      ccValStat = "Valid";
    }
    else if(ccDigLength >= 13 && ccDigLength <= 16 && cardNum[0] == 5){
      ccType = "You have a MasterCard.";
      ccValStat = "Valid";
    }
    else if(ccDigLength >= 13 && ccDigLength <= 16 && cardNum[0] == 3 && cardNum[1] == 7){
      ccType = "You have an American Express Card.";
      ccValStat = "Valid";
    }
    else if(ccDigLength >= 13 && ccDigLength <= 16 && cardNum[0] == 6){
      ccType = "You have a Discover Card.";
      ccValStat = "Valid";
    }
    else{
      ccType = "Invalid Card";
      ccValStat = "Invalid";
    }

 System.out.println("******************************************");
        System.out.println("** Credit Card Type: " + ccType);
        System.out.println("** Credit Card Number: " + Arrays.toString(cardNum));
        System.out.println("** Credit Card Digit Length: " + ccDigLength);
        System.out.println("** Credit Card Validity Status: " + ccValStat);
        System.out.println("******************************************");
	}
}
