// Questions Marks
// Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.

function QuestionsMarks(str) { 
    // code goes here  
    let sum = qMark = 0;
    let noLetters = str.replace(/[a-zA-Z]/g, "");
    for (let i = 0; i < noLetters.length; i++){
        if (!isNaN(parseFloat(noLetters[i])) && isFinite(noLetters[i])){
            for (let j = i+1; j < noLetters.length; j++){
                if (noLetters[j] === '?'){
                    qMark++;
                } else if (!isNaN(parseFloat(noLetters[j])) && isFinite(noLetters[j])){
                    if ((Number.parseInt(noLetters[i]) + Number.parseInt(noLetters[j])) == 10 && qMark == 3){
                        sum++;
                        qMark = 0;
                        break;
                    } else if (qMark > 3){
                        qMark = 0;
                        break;
                    } else if ((Number.parseInt(noLetters[i]) + Number.parseInt(noLetters[j])) == 10 && qMark != 3){
                        return false;
                    }
                }                
            }
        }  
    }
    if (sum === 0){
        return false
    } else if (sum > 0){
        return true
    }
}
     
// keep this function call here 
console.log(QuestionsMarks("arrb6???4xxbl5???eee5"));
