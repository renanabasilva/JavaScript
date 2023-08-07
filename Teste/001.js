// Math Challenge
// Have the function MathChallenge(str) take the str parameter being passed and determine if there is some substring K that can be repeated N > 1 times to produce the input string exactly as it appears. Your program should return the longest substring K, and if there is none it should return the string -1.

// For example: if str is "abcababcababcab" then your program should return abcab because that is the longest substring that is repeated 3 times to create the final string. Another example: if str is "abababababab" then your program should return ababab because it is the longest substring. If the input string contains only a single character, your program should return the string -1.

function MathChallenge(str) { 

    if (str.length === 1) {
        return '-1';
    }

    let longString = '';
    for (i = 0; i < str.length/2; i++){
        const substring = str.substring(0, i+1);
        const stringRepeat = str.length / substring.length;

        if (substring.repeat(stringRepeat) === str && substring.length != str.length){
            longString = substring;
        }
    }

    return longString.length > 0 ? longString : -1;  
  }

  console.log(MathChallenge('xyzxyzxyz'));