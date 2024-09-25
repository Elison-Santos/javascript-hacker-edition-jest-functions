const {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
} = require("../src/index.js");

// Testes para a função somar
test("Soma dois números corretamente", () => {
  expect(somar( 2 , 0)).toBe(2);
});

test("Soma dois números negativos corretamente", () => {
  expect(somar( -2 , -2)).toBe(-4);
});

// Testes para a função subtrair
test("Subtrai dois números corretamente", () => {
  expect(subtrair( 2 , 0)).toBe(2);
});

test("Subtrai com resultado negativo", () => {
  expect(subtrair( -2 , -2)).toBe(0);
});

// Testes para a função multiplicar
test("Multiplica dois números corretamente", () => {
  expect(multiplicar( 5 , 2)).toBe(10);
});

test("Multiplica número por zero", () => {
  expect(multiplicar( 5 , 0)).toBe(0);
});

// Testes para a função dividir
test("Divide dois números corretamente", () => {
  expect(dividir( 10 , 2)).toBe(5);
});

test("Lança erro ao dividir por zero", () => {
  expect(() => dividir(10, 0)).toThrow("Divisão por zero não é permitida");
});

// Testes para a função ehPar
test("Verifica se o número é par", () => {
  expect(ehPar(10)).toBe("é par");
});

test("Verifica se o número é ímpar", () => {
  expect(ehPar(5)).toBe("é impar");

});
