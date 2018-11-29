// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// bubble sort -> goes through every index and sorts it in the right position
// Big O - n^2
function bubbleSort(arr) {
  // implement bubble sort
  for (let i=0; i < arr.length; i++) {
    // the - 1 is to handle the [index] starting at 0
    for (let j=0; j < (arr.length - i -1); j++) {
      if (arr[j] > arr[j+1]) {
        // if that is the case, we want to swap the two value
        const lesser = arr[j+1];
        // lets us assign the greater to lesser and will be what we will be looking at
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  // return the sorted array
  return arr;
}

// selection sort Big O n^2
// assuming that index 0 is the lowest number
// will have indexOfMin -> when going through the array, if the next index is lower than the current
// that index will be selected as the current indexOfMin
// after going through the array, indexOfMin will then switch places with the initial indexOfMin
// process is repeated until finished going through the array
function selectionSort(arr) {
  for (let i=0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if(arr.length === 1) {
    return arr;
  }

  // finding the center index of the array
  const center = Math.floor(arr.length/2);

  // left is all the number from index 0 and anything before center
  const left = arr.slice(0, center);

  // taking anything from the center to anything after
  const right = arr.slice(center);

  // calling merge function and joining them
 return merge(mergeSort(left), mergeSort(right));
}

// sorted not joined yet?
function merge(left, right) {
  const results = [];
  
  // as long as there is something  in both left and right side
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  // this is pretty much saying that if there are still left OR right numbers left then just added on whatever side it was on
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
