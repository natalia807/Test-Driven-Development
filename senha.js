//Regra: Senha deve ter no mínimo 6 caracteres 
function senha(entrada) {
    return entrada.length >= 6; //retorna o tamanho da senha
}

module.exports = senha;