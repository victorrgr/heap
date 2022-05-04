const fs = require('fs');

async function heap() {
  // Assumindo que o HEAP de entrada é um vetor que está correto
  let input = [100, 19, 36, 17, 3, 25, 1, 2, 7];
  /*
     * 100 -> 19,36
        19 -> 17,3
        36 -> 25,1
          17 -> 2,7
          3  -> 90 [inseção]
     */

  let extremity = input.length - 1;
  let insertion = 90;

  input[extremity + 1] = insertion;

  // esquerda = 2 *  indice + 1
  // direita =  2 * (indice + 1)

  // A inserção de um valor no HEAP tem que ser sempre na EXTREMIDADE + 1

  console.log(input);
  console.log(`----------------------`);

  let index = 0;
  for (let element of input) {
    // TODO: Entender como fazer a pesquisa reversa de um certo elemento (no caso o 90)
    console.log(`
      Elemento: ${element}; 
      Esquerda: ${input[2 * index + 1]}; 
      Direita: ${input[2 * (index + 1)]}.`);

    if (index % 2 == 0) {
			if (index == 0) 
				console.log('raiz');
      else 
				console.log("direita");
    } else {
      console.log("esquerda");
    }

    index++;
  }

  let output = null;
  console.log(output);
}

// heap();

// Valor: element 
// Esquerda: 2 * index + 1
// Direita:  2 * (index + 1)
// Parent:   (index / 2) - 1
class TreeNode {

  constructor(value, left, right, parent) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }

}

async function heapWithClass() {
  let heapVector = [100, 19, 36, 17, 3, 25, 1, 2, 7];
  let input = [];
  let output = [];

  for (let element of heapVector) {
    input.push(
      new TreeNode(
        element,
        null,
        null,
        null
      )
    );
  }

  let extremity = input.length - 1;
  let insertion = 90;

  // input[extremity + 1] = insertion;
  input[extremity + 1] = new TreeNode(
    insertion, null, null, null
  );

  console.log(input)

  let index = 0
  for (let element of input) {
    element.left =   input[2 * index + 1];
    element.right =  input[2 * (index + 1)];
    if (index % 2 == 0)
      element.parent = input[(index / 2) - 1];
    else
      element.parent = input[(index - 1) / 2];
    index++
  }

  // let index = 0;
  // for (let element of input) {
  //   if (index % 2 == 0) {
  //     output.push(
  //       new TreeNode(
  //         element,
  //         input[2 * index + 1],
  //         input[2 * (index + 1)],
  //         input[(index / 2) - 1]
  //       )
  //     );
  //   } else {
  //     output.push(
  //       new TreeNode(
  //         element,
  //         input[2 * index + 1],
  //         input[2 * (index + 1)],
  //         input[(index - 1) / 2]
  //       )
  //     );
  //   }
  //   index++;
  // }

  // console.log(output)
  // console.log(input)

  
  let x = input[0];
  console.log(x);

  // fs.writeFileSync("TreeNode.json", JSON.stringify(x));
  fs.writeFileSync("TreeNode.json", JSON.stringify(x, getCircularReplacer()));
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

heapWithClass();