function getAverage(arr) {
  let average = 0;
  arr.forEach((num) => {
    average += num;
  });
  return average / arr.length;
}

export default function analyzeArray(arr) {
  const analyzedObj = {};
  const averageOfArr = getAverage(arr);
  analyzedObj["average"] = averageOfArr;
  return analyzedObj;
}
