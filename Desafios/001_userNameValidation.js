// Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, otherwise return the string false.

// function UsernameValidation(str) { 
//     if (str.length < 4 || str.length > 25){
//         console.log(1)
//         return false
//     }

//     if (!/^[a-zA-Z]/.test(str)){
//         console.log(2)
//         return false
//     }

//     if (!/^[a-zA-Z0-9_]+$/.test(str)){
//         console.log(3)
//         return false
//     }

//     if (str.endsWith("_")){
//         console.log(4)
//         return false
//     }

//     return true;   
// }
     
// console.log(UsernameValidation('u__hello_world123'));

//-----------------------------------------------------------------------------------------------------

function UsernameValidation(str) { 
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,23}[a-zA-Z0-9]$/; 
    // '^': Start of the string.
    // '[a-zA-Z]': Matches any single letter (uppercase or lowercase) at the beginning.
    // '[a-zA-Z0-9]{2,23}': Matches between 2 and 23 characters of letters or numbers.  
    // {2,23}: exclui o primeiro e o último caso.
    // '[a-zA-Z0-9]': Matches any single letter or number at the end.
    // '$': End of the string.
    return usernameRegex.test(str);  
}
     
// keep this function call here 
console.log(UsernameValidation('a24_'));