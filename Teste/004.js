function MathChallenge(str) {
    if (str.length === 1) {
      return -1;
    }
  
    let longestSubstring = '';
  
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length / 2 + 1; j++) {
        const substring = str.substring(i, j);
        const repeatCount = str.length / substring.length;
  
        if (substring.repeat(repeatCount) === str && repeatCount > 1) {
          if (substring.length > longestSubstring.length) {
            longestSubstring = substring;
          }
        }
      }
    }
  
    return longestSubstring.length > 0 ? longestSubstring : -1;
  }
  
  // Test cases
  console.log(MathChallenge("abcababcababcab")); // Output: "abcab"
  console.log(MathChallenge("abababababab"));   // Output: "ababab"
  console.log(MathChallenge("a"));             // Output: -1
  console.log(MathChallenge("abcabc"));        // Output: "abc"
  console.log(MathChallenge("xyzxyzxyz"));     // Output: "xyz"
  