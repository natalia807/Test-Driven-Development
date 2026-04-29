//Teste (Red): somar dois números
test('deve somar 2 + 2 e retornar 4', () => {
  expect(soma(2, 2)).toBe(4);
});

//Teste (Green): código mínimo para passar
function soma(a, b) {
  return 4;
}

//Teste (Blue): refactor
function soma(a, b) {
  return a + b;
}
