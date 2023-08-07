// Searching Challenge
// Have the function SearchingChallenge(str) take the str parameter being passed and find the longest substring that contains k unique characters, where k will be the first character from the string. The substring will start from the second position in the string because the first character will be the integer k. For example: if str is "2aabbacbaa" there are several substrings that all contain 2 unique characters, namely: ["aabba", "ac", "cb", "ba"], but your program should return "aabba" because it is the longest substring. If there are multiple longest substrings, then return the first substring encountered with the longest length. k will range from 1 to 6.

function SearchingChallenge(str) {

    const token = 'x3nqi9hjk7d'
    const kCharacter = Number.parseInt(str[0]);
    let longString = '';

    for (i = 1; i < str.length + 1; i++) {

        for (j = i + 1; j < str.length + 1; j++) {
            const substring = str.substring(i, j);

            if (substring.length > longString.length) {
                const uniqueCharacters = [];

                for (cont = 0; cont < substring.length; cont ++){

                    if (!uniqueCharacters.includes(substring.charAt(cont))){
                        uniqueCharacters.push(substring.charAt(cont));
                    }
                }

                if (substring.length > longString.length && kCharacter === uniqueCharacters.length){
                    longString = substring;
                }
            }
        }
    }

    if (longString.length > 0){
        reversedLongString = reverseString(longString);
        reversedToken = reverseString(token);
        const output = `${reversedLongString}:${reversedToken}`;
        return output;

    } else {
        return -1;
    }
}

function reverseString(string){
    var newString = "";
    for (var i = string.length - 1; i >= 0; i--){
        newString += string[i];
    }
    return newString;
}

console.log(SearchingChallenge("2aabbcbbbadef"));