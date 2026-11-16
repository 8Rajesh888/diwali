function gen(l, centre, r) {
  const left = l ?? 0;
  const right = r ?? 0;
  if (left + centre + right === 0) {
    return 0;
  }
  if (left === 1 && (centre === 1 || right === 1)) {
    return 0
  }
  return 1
}

function generate(array) {
  const result =[] ;
  for (let i = 0; i < array.length; i++) {
    const left = array[i -1];
    const centre = array[i];
    const right = array[i +1];
    
    result.push(gen(left, centre, right));
  }
  return result;
}

function genMul(array,num = 1) {
  let arr = array;
  console.log("initial",arr);
  for (let i = 0; i < num; i++) {
    arr = generate(arr);
    console.log(arr);
  }
  return arr;
}

//const arr = [0,0,0,1,0,0,0]
const arr = [
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 1,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0
]
genMul(arr,15);

