//js/stringfunction.js

//1. reversing a string
function reversestring(str) {
  return str.split("").reverse().join("");
}

//2.counting characters
function countcharacters(str) {
  let count = 0;
  for (const char of str) {
    count++;
  }
  return count;
}

//3.capitalizing words
function capitalizeWords(sentence) {
    return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}


