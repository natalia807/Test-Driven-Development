//Função que divide dois números
function divisao(a, b){

    if (b === 0){
        return 'Erro';
    }

    return a / b;
}

module.exports = divisao;