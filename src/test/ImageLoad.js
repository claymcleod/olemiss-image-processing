/**
 * @author Clay McLeod
 */

alert("Starting");

	float pixels[25];
			float row = 0.0;
			float column = 0.0;
			float 
			while(counter < 25.0){
				
				
				if((mod(counter, 5.0) == 0.0) && (counter != 0.0))
					row++;
					
				column = mod(counter, 5.0);
				
				alert(row+", "+column);
			//	printf("%d, %d",row,column); 
				counter++;
			}