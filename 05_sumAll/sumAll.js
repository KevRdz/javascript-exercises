const sumAll = function(start, end) {
  let sum = 0
  let startNum = start
  let endNum = end

  if (start > end) {
    startNum = end
    endNum = start
  }

  if (start < 0 || end < 0) {
    return "ERROR"
  }

  if (Number.isInteger(start) === false || Number.isInteger(end) === false) {
    return "ERROR"
  }

  for (let i = startNum; i <= endNum; i++) {
    sum += i
  }
  return sum
};

// Do not edit below this line
module.exports = sumAll;
