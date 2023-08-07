// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.

function FirstFactorial(num) { 

  // code goes here  
  let cont = 1
  let fat = num;
  while (cont != num){
    fat *= cont;
    cont++
  }
  return fat;   
}
     
// keep this function call here 
console.log(FirstFactorial(5));