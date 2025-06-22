import java.util.Scanner;

public class LagbajaStudentGradeMain{
  public static void main(String[] args){
    Scanner input = new Scanner(System.in);
    int numOfStudents = 0;
    int numOfSubjects = 0;
    int studentScore = 0;
    int[][] studentScores = new int[numOfStudents][numOfSubjects];
    int[] overallTotalScores = new int[numOfStudents];
    int[] overallSubjectTotal = new int[numOfSubjects];
    int[] totalPasses = new int[numOfSubjects];
    int[] totalFails = new int[numOfSubjects];
    System.out.print("How many students do you have?");
    numOfStudents = input.nextInt();
    System.out.print("How many subjects do they offer?");
    numOfSubjects = input.nextInt();
    System.out.println("Saving >>>>>>>>>>>>>>>>>>");
    System.out.println("Saved Successfully");
    for(int student = 0; student < numOfStudents; student++){
      System.out.println("Entering score for student " + (student + 1));
      for(int subject = 0; subject < numOfSubjects; subject++){
        System.out.println("Enter score for subject " + (subject + 1) + " (0 - 100): ");
        studentScore = input.nextInt();
      }
      overallTotalScores[student] += studentScore;
      overallSubjectTotal[subject] += studentScore;
      if(studentScore > 50){
        totalPasses[subject]++;
      }
      else{
        totalFails[subject]++;
      }
    }
    //average
    
  }
}
