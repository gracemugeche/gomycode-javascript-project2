// js/arrayfunction.js

//1. finding maximum and minimum numbers
function minAndMax(arr) {
  if (arr.length === 0) return { min: undefined, max: undefined };

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  return { min, max };
}

//2.sum of arrays
function sumArray (arr) {
    let sum=0
    for(let i=0 ; i<arr.length; i++) {
        sum+=arr [i];
    }
    return sum;
}

//3. filter array
function filterArray(arr, condition) {
    return arr.filter(condition);
  }