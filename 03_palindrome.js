//Problem 3: Check for Palindrome

/**
 * Problem 3: Check for Palindrome
 * Write a function that checks if a string is a palindrome (reads the same forward and backward).
 * 
 * Example:
 * Input: "madam"
 * Output: true
 * 
 * Input: "hello"
 * Output: false
*/

function isPalindrome(str) {

    str = str.toLowerCase();

    let reversed = str.split("").reverse().join("");
    
    return str === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
