//Campos: nome e email
function cadastro (nome, email) {
    const usuarioCorreto = {
        nome : "João",
        email: "email@email.com"
    };

    return (
    nome === usuarioCorreto.nome &&
    email === usuarioCorreto.email
  );


}

module.exports = cadastro;
