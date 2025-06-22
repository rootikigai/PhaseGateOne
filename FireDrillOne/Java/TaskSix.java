public class TaskSix{
	public static void main(String[] args){
    int temp = 4;
		for(int i = 1; i <= 10; i++){
      if(i % 4 == 0){
        for(int j = 0; j < 5; j++){          
            System.out.print((i * temp));
        }
      }
		}
	}
}
