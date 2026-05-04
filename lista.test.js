const lista = require('./lista');

// lista com elementos
test('deve retornar o tamanho da lista com elementos', () => {
  expect(lista([1, 2, 3, 4, 5])).toBe(5);
});

// lista vazia
test('deve retornar 0 para lista vazia', () => {
  expect(lista([])).toBe(0);
});