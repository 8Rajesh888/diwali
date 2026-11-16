function arrange(array) {
  const newArray = [];
  let isAsending = true;
  let pastIsAsending = isAsending;
  let run =[];
  for (var i = 0; i < array.length; i++) {
    run.push(array[i])
    if (array[i + 1] === undefined) {
      continue
    }
    if( array[i] === array[i + 1]) {
      newArray.push(run);
        run = []
    }
    else{
      isAsending = array[i] < array[i + 1]
      ? true : false ;
    
      if (isAsending != pastIsAsending)
      {
        newArray.push(run);
        run = []
      }
      pastIsAsending = isAsending;
    }
      
  }
  if(run.length != 0)
  newArray.push(run);
  return newArray;
  
}

const inputs = [
  [1, 2, 3, 2, 1],
[1, 2, 2, 3],
[5, 5, 4, 3],
[3, 3, 3, 2, 1],
[1],
[],
];

for (const input  of inputs) {
  // Tab to edit
console.log(input);
console.log(arrange(input));
console.log("--------")
}