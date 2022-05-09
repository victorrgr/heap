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
function heapInsertionClass(heapVector, insertion) {
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
  while (true) {
    if (insertion.parent == undefined || insertion.parent.value >= insertion.value) {
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

module.exports = { heapInsertionClass };