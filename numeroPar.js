//Cenário: Criar função que verifica se um número é par

//Um caso que deve passar (Red)
test('deve retornar true para número par', () => {
  expect(ehPar(4)).toBe(true);
});
//Um caso que não deve passar (Red)
test('deve retornar false para número ímpar', () => {
  expect(ehPar(3)).toBe(false);
});
//Código mínimo
function ehPar(numero) {
  return true;
}

