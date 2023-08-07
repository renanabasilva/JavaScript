// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

function LongestWord(sen) { 

  // code goes here  
  let regex = /[^a-zA-Z ]/g
  let onlyLetters = sen.replace(regex, '')
  let bigWord = ''
  onlyLetters = onlyLetters.split(' ')
  for (let i = 0; i < onlyLetters.length; i++){
    if (onlyLetters[i].length > bigWord.length){
        bigWord = onlyLetters[i]
    }
  }
  return bigWord
  console.log(bigWord)  
}
     
// keep this function call here 
LongestWord("I love dogs fu#asdn&!! time")