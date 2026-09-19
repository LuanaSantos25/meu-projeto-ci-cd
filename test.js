const soma = require('./soma');

test('soma simples 2 + 3 deve ser 5', () => {
  expect(soma(2, 3)).toBe(5);
});
