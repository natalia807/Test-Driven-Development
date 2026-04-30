const soma = require('./soma');

test('deve somar 2 + 2 e retornar 4', () => {
  expect(soma(2, 2)).toBe(4);
});