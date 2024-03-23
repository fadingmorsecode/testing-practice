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

export default function analyzeArray(arr) {
  const analyzedObj = {};
  analyzedObj.average = getAverage(arr);
  analyzedObj.min = getMin(arr);
  return analyzedObj;
}
