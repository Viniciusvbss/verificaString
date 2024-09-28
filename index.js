// Função que verifica a quantidade de letras 'a' na string
function verificarLetraA(string) {
  const regex = /a/gi; // Expressão regular para 'a' ou 'A'
  const matches = string.match(regex); // Encontra todas as ocorrências
  const quantidade = matches ? matches.length : 0; // Conta as ocorrências

  console.log(`A letra 'a' aparece ${quantidade} vez(es) na string.`);
}

// String definida diretamente no código
const minhaString = "A árvore e o abacate são deliciosos.";

// Chama a função com a string definida
verificarLetraA(minhaString);
