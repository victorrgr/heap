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

heap();
