function compareArrays(arr1, arr2) {
  let result = false;
  if (arr1.length === arr2.length) {
    result = arr1.every((element, index) => element === arr2[index]);
  }
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  const filteredArr = arr.filter((val) => val > 0 && val % 3 == 0);
  resultArr = filteredArr.map(val => val * 10);
  return resultArr; // array
}
