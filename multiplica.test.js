const multiplica = require('./multiplica');
//Teste inicial (Red)
test('deve receber pelo menos um numero negativo', () => {
  expect(multiplica(-1, -2)).toBe(2);
});