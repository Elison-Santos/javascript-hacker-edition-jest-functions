// Função que soma dois números
function somar(num1, num2) {
  resultado = (num1) + (num2);
  return resultado;
  
}

// Função que subtrai dois números
function subtrair(num1, num2) {
  return num1 - (num2);
}

// Função que multiplica dois números
function multiplicar(num1, num2) {
  return num1 * num2;
}

// Função que divide dois números, com verificação de divisão por zero
function dividir(num1, num2) {

  if(num1 === 0 || num2 ===0){
    throw new Error("Divisão por zero não é permitida");
    
  }else{
  return num1 / num2;
  }
}

// Função que verifica se um número é par
function ehPar(num) {
  if(num % 2 == 0){
    return "é par";
  }
  else{
    return "é impar";
  }
}

// Exporta todas as funções para serem usadas nos testes
module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
};
