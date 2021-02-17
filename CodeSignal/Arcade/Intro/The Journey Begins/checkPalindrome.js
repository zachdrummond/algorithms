/* INSTRUCTIONS
Given the string, check if it is a palindrome.
Palindrome: A string that doesn't changed when reversed (it reads the same backward and forward).

Example
For inputString = "aabaa", the output should be checkPalindrome(inputString) = true;
For inputString = "abac", the output should be checkPalindrome(inputString) = false;
For inputString = "a", the output should be checkPalindrome(inputString) = true.
*/

function checkPalindrome(inputString) {

    const arr = inputString.split(""); // Splits the string into individual characters
    arr.reverse();
    let str = arr.join(""); // Joins the characters back together into one string
    if(inputString == str){
        return true;
    } else {
        return false;
    }
}
