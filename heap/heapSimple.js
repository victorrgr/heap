/**
 * 
 * @param {number} index 
 * @param {number[]} vector 
 * @returns {number} Parent value of a specified index inside specified vector
 */
function getParent(index, vector) {
  return vector[Math.floor((index - 1) / 2)];
}

/**
 * 
 * @param {number} index 
 * @returns {number} Parent vector's index positon
 */
function getParentIndex(index) {
  return Math.floor((index - 1) / 2)
}

// TODO: Utilizar recursividade para fazer o ajuste do heap
// Fazer com que a função se chame com os parâmetros:
// index atual a ser calculado, pai atual do index,
// filho à esquerda, filho à direita
//  
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
    if (getParent(elementIndex, heapVector) == undefined || getParent(elementIndex, heapVector) >= insertion) {
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