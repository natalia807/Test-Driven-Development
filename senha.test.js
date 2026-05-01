const senha = require('./senha');

// senha válida
test('deve retornar true para senha maior ou igual a 6 caracteres', () => {
  expect(senha('123456')).toBe(true);
});

// senha curta
test('deve retornar false para senha menor do que 6 caracteres', () => {
  expect(senha('123')).toBe(false);
});

// senha vazia
test('deve retornar false para senha vazia', () => {
  expect(senha('')).toBe(false);
});