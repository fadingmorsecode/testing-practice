function getAverage(arr) {
  let average = 0;
  arr.forEach((num) => {
    average += num;
  });
  return average / arr.length;
}

function getMin(arr) {
  return Math.min(...arr);
}

function getMax(arr) {
  return Math.max(...arr);
}

function getLength(arr) {
  return arr.length;
}

export default function analyzeArray(arr) {
  const analyzedObj = {};
  analyzedObj.average = getAverage(arr);
  analyzedObj.min = getMin(arr);
  analyzedObj.max = getMax(arr);
  analyzedObj.length = getLength(arr);
  return analyzedObj;
}
