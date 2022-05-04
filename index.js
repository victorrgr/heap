const fs = require('fs');

// Valor:    element 
// Esquerda: 2 * index + 1
// Direita:  2 * (index + 1)
// Parent:   Par: (index / 2) - 1 | Ímpar: (index - 1) / 2
/**
 * Class that represents a node in a Heap Tree
 */
class TreeNode {
  constructor(value, left, right, parent) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

/**
 * 
 * @param {number[]} heapVector Input should be a valid Heap vector which could either be complete or incomplete
 * @param {number} insertion Number to be inserted into the Heap vector
 * @returns {TreeNode}
 */
function insertIntoHeap(heapVector, insertion) {
  let treeNodeArray = [];

  for (let element of heapVector) {
    treeNodeArray.push(new TreeNode(element, null, null, null));
  }

  let extremity = treeNodeArray.length - 1;

  treeNodeArray[extremity + 1] = new TreeNode(insertion, null, null, null);

  let index = 0
  for (let element of treeNodeArray) {
    element.left = treeNodeArray[2 * index + 1];
    element.right = treeNodeArray[2 * (index + 1)];
    if (index % 2 == 0)
      element.parent = treeNodeArray[(index / 2) - 1];
    else
      element.parent = treeNodeArray[(index - 1) / 2];
    index++
  }

  let output = adjustInsertion(treeNodeArray);

  return output;
}

/**
 * Adjust the inserion value to a postion where it is considered a valid Heap tree
 * @param {TreeNode[]} treeNodeArray 
 * @returns {TreeNode} The root of the Heap Tree correctly adjusted
 */
function adjustInsertion(treeNodeArray) {
  let insertion = treeNodeArray[treeNodeArray.length -1];
  let stop = false;
  while (!stop) {
    if (insertion.parent.value >= insertion.value) {
      stop = true;
      break;
    } else {
      let parent = insertion.parent;
      let parentValue = insertion.parent.value;

      insertion.parent.value = insertion.value;
      insertion.value = parentValue;
      insertion = parent;
    }
  }

  let root = treeNodeArray[0];

  return root;
}

const getCircularReplacer = () => {
  const seen = new WeakSet()
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return
      }
      seen.add(value)
    }
    return value
  }
}

// Execution

// TODO: Talvez criar uma implementação mais simples sem a utilização de classes
let result = insertIntoHeap([100, 19, 36, 17, 3, 25, 1, 2, 7], 90);

fs.writeFileSync("TreeNode.json", JSON.stringify(result, getCircularReplacer()));