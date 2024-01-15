function isPalindrome(word) {
  // function isPalindrome(word) {
  // Convert to lowercase and remove non-alphabetic characters
  const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');

  // Initialize pointers
  let start = 0;
  let end = cleanWord.length - 1;

  // Iterate through the string
  while (start < end) {
    // Compare characters at each position
    if (cleanWord[start] !== cleanWord[end]) {
      return false;
    }

    // Move pointers towards each other
    start++;
    end--;
  }

  // If entire string is traversed without finding unequal characters, it's a palindrome
  return true;
}

// You can run `node index.js` to view these console logs


/* 
  Add your pseudocode here
  f (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("A man a plan a canal Panama"));
}
*/

/*
  Add written explanation of your solution here
  The goal is to create a function that determines whether a given word is a palindrome or not. A palindrome is a word that reads the same forwards and backward.
  Convert the word to lowercase to make the comparison case-insensitive.Remove any non-alphabetic characters (like spaces or punctuation).
  Use two pointers, one at the beginning and one at the end of the cleaned word.
  If the characters are not the same, it's not a palindrome.
  Move the pointers towards each other and continue the comparison.
I f the entire word is checked without finding unequal characters, it's a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
