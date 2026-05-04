const cadastro = require('./cadastro');
//sucesso
test('deve receber e-mail e senha', () => {
  expect(cadastro("João","email@email.com")).toBe(true);
});
//campo vazio
test('deve receber os campos e-mail e senha vazios', () => {
  expect(cadastro("")).toBe(false);
});
//email inválido
test('email inválido', () => {
  expect(cadastro("João", "email")).toBe(false);
});