const cpf = require('./cpf');
//Regra: CPF deve ter exatamente 11 caracteres.
// CPF válido
test('deve retornar Cpf válido', () => {
  expect(cpf("20334419025")).toBe('Válido');
});

// CPF curto
test('deve retornar Cpf inválido', () => {
  expect(cpf("2033441902")).toBe('Inválido: precisa ter 11 caracteres');
});

// CPF vazio
test('deve retornar Cpf vazio', () => {
  expect(cpf()).toBe('Cpf está vazio');
});