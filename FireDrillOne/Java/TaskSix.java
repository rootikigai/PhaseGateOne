/*

public class TaskSix{
	public static void main(String[] args){
		int temp = 4;
		for(int i = 1; i <= 10; i++){
			if(i % 4 == 0){
        System.out.print(i + " ");
        int multiple = i;
      	for(int j = 1; j < 5; j++){
        	multiple = multiple * temp;
          System.out.print(multiple + " ");
      	}
      }
		}
	}
}

*/
public class TaskSix{
	public static void main(String[] args){
		for(int i = 1; i <= 10; i++){
      if(i % 4 == 0){
        //System.out.print((i + " "));
        for(int j = 1; j < 6; j++){
          System.out.print(i * j + " ");
        }
      }
		}
	}
}
