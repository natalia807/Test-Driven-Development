const divisao = require('./divisao');

// divisão normal
test('deve retornar resultado da divisão', () => {
  expect(divisao(4, 2)).toBe(2);
});

// divisão por zero
test('deve retornar erro para divisão por zero', () => {
  expect(divisao(4, 0)).toBe('Erro');
});

// números negativos
test('deve dividir números negativos corretamente', () => {
  expect(divisao(-4, -2)).toBe(2);
});