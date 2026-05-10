const carrinho = require('./carrinho');
//total deve ser soma dos produtos
// carrinho com produtos
test('deve retornar a soma total dos produtos', () => {
  expect(carrinho([10, 20, 30])).toBe(60);
});

// carrinho vazio
test('deve retornar 0 para carrinho vazio', () => {
  expect(carrinho([])).toBe(0);
});

// valores negativos
test('deve retornar erro para valores negativos', () => {
  expect(carrinho([10, -5, 20])).toBe('Erro');
});