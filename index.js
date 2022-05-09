const fs = require('fs');

const heapClass = require("./heap/heapClass.js");
const heapSimple = require("./heap/heapSimple.js");

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

// Valor:    element 
// Esquerda: 2 * index + 1
// Direita:  2 * (index + 1)
// Parent:   Par: (index / 2) - 1 | Ímpar: (index - 1) / 2

let res = null;

// res = heapClass.heapInsertionClass([100, 19, 36, 17, 3, 25, 1, 2, 7], 90);
res = heapClass.heapInsertionClass([100, 19, 36, 17, 3, 25, 1, 2, 7], 101);
fs.writeFileSync("./output/HeapClass.json", JSON.stringify(res, getCircularReplacer()));
console.log("Result in ./output/HeapClass.json");

// res = heapSimple.heapInsertionSimple([100, 19, 36, 17, 3, 25, 1, 2, 7], 90);
res = heapSimple.heapInsertionSimple([100, 19, 36, 17, 3, 25, 1, 2, 7], 101);
fs.writeFileSync("./output/HeapSimple.json", JSON.stringify(res));
console.log("Result in ./output/HeapSimple.json");
