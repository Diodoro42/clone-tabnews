const calculadora = require("../../models/calculadora.js");

test("calcular", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("soma igual a 20", () => {
  const resultado = calculadora.somar(10, 10);
  expect(resultado).toBe(20);
});

test("soma igual a 30", () => {
  const resultado = calculadora.somar(10, 15);
  expect(resultado).toBe(30);
});

test("verifica se é positivo", () => {
  const resultado = calculadora.somar(3, 0);
  expect(resultado).toBeGreaterThan(0);
});

test("verificar se é maior que 5", () => {
  const resultado = calculadora.somar(2, 3);
  expect(resultado).toBeGreaterThan(4);
});
