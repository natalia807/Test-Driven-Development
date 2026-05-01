const login = require('./login');

// login válido
test('deve retornar true para usuario e senha corretos', () => {
  expect(login("admin", 1234)).toBe(true);
});

// senha inválida
test('deve retornar false para senha incorreta', () => {
  expect(login("admin", 1235)).toBe(false);
});

// usuário inválido
test('deve retornar false para usuario incorreto', () => {
  expect(login("admin1234", 1234)).toBe(false);
});