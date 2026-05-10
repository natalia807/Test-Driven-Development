//Regra: Usuário só é maior de idade se tiver 18 anos ou mais.
const maioridade = require('./maioridade');
//idade válida
test('deve retornar que é maior de idade', () => {
  expect(maioridade(18)).toBe('É maior de idade!');
});
//menor de idade
test('deve retornar que é menor de idade', () => {
  expect(maioridade(15)).toBe('É menor de idade!');
});
//idade negativa
test('deve retornar idade negativa', () => {
  expect(maioridade(-10)).toBe('Idade negativa!');
});