//Função que verifica se é maior de idade.
function maioridade(idade){

    if (idade < 0){
        return "Idade negativa!";
    }

    if (idade >= 18){
        return "É maior de idade!";
    }

    return "É menor de idade!";
}

module.exports = maioridade;