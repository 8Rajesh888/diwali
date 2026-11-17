function arrange(array) {
  const newArray = [];
  let isSortedAscending = true;
  let run = [];

  for (var i = 0; i < array.length; i++) {
    run.push(array[i]);

    if (array[i + 1] === undefined) {
      continue;
    }

    isSortedAscending = array[i] <= array[i + 1] ? true : false;

    if (isSortedAscending) {
      newArray.push(run);
      run = [];
    }

  }

  if (run.length !== 0)
    newArray.push(run);

  return newArray;
}

console.log(arrange([5, 4, 3, 2, 1, 2, 3, 3, 3, 1, 4, 3, 4, 6, 6, 6, 4, 2, 1, 2, 3]));
// console.log(arrange([1, 2, 3, 3, 3, 1, 4, 3, 4, 6, 6, 6, 4, 2, 1, 2, 3, 1, 2, 3, 3, 3, 1, 4, 3, 4, 6, 6, 6, 4, 2, 1, 2, 3]));