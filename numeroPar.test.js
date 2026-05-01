test('deve retornar true para número par', () => {
  expect(ehPar(4)).toBe(true);
});

test('deve retornar false para número ímpar', () => {
  expect(ehPar(3)).toBe(false);
});