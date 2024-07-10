function getArrayParams(...arr) {
  return ( arr.length === 0 ? 0 : { 
     min: Math.min(...arr),
     max: Math.max(...arr),
     avg: +(arr
            .reduce((sum, current) => sum + current, 0)/arr.length)
            .toFixed(2)
          } )
}

function summElementsWorker(...arr) {
  return (
    arr.length === 0 ? 0 : arr.reduce((sum, current) => sum + current, 0)
  )
}

function differenceMaxMinWorker(...arr) {
  return (
    arr.length === 0 ? 0 : Math.max(...arr) - Math.min(...arr)
  )
}

function differenceEvenOddWorker(...arr) {
  return (  
    arr.length === 0 ? 0 : arr.reduce((res, current) => current%2 === 0 ? res + current : res - current, 0)
  )
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
     return 0 } 

  const evenElements = arr.filter((current) => current%2 === 0);
  const sumElements = evenElements.reduce((res, current) => res += current, 0);

  return (
    sumElements/evenElements.length
  )
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let funcResult = 0;
  for (let elem of arrOfArr) {
    funcResult = func(...elem);
    if (funcResult > maxWorkerResult) { 
      maxWorkerResult = funcResult;
    }
  }
  return maxWorkerResult;
}
