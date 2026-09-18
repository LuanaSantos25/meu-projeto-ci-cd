const soma = require('../soma');

test('soma de 2 + 3 deve ser 5', () => {
  expect(soma(2, 3)).toBe(5);
});

test('soma de números negativos', () => {
  expect(soma(-2, -3)).toBe(-5);
});

test('soma de número positivo e negativo', () => {
  expect(soma(10, -5)).toBe(5);
});

test('soma com zero', () => {
  expect(soma(7, 0)).toBe(7);
});

test('soma de números grandes', () => {
  expect(soma(1000, 2000)).toBe(3000);
});
