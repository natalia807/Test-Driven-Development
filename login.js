function login(usuario, senha) {
  const usuarioCorreto = {
    usuario: "admin",
    senha: 1234
  };

  return (
    usuario === usuarioCorreto.usuario &&
    senha === usuarioCorreto.senha
  );
}

module.exports = login;