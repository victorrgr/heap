
/**
 * 
 * @param {number} index 
 * @param {number[]} vector 
 * @returns {number} Parent value of a specified index inside specified vector
 */
 function getParent(index, vector) {
  if (index % 2 == 0)
    return vector[(index / 2) - 1];
  else
    return vector[(index - 1) / 2];
}

/**
 * 
 * @param {number} index 
 * @returns {number} Parent vector's index positon
 */
function getParentIndex(index) {
  if (index % 2 == 0)
    return (index / 2) - 1;
  else
    return (index - 1) / 2;
}

/**
 * 
 * @param {number[]} heapVector 
 * @param {number} insertion 
 * @returns {number[]}
 */
function heapInsertionSimple(heapVector, insertion) {
  let extremity = heapVector.length - 1;
  heapVector[extremity + 1] = insertion;

  let element = insertion;
  let elementIndex = extremity + 1;

  while (true) {
    if (getParent(elementIndex, heapVector) >= insertion) {
      break;
    } else {
      let parentIndex = getParentIndex(elementIndex);
      let parent = getParent(elementIndex, heapVector);

      heapVector[parentIndex] = element;
      heapVector[elementIndex] = parent;

      elementIndex = parentIndex;
    }
  }

  return heapVector;
}

module.exports = { heapInsertionSimple };