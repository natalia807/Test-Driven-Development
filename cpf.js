function cpf(numero){

    if (!numero){
        return "Cpf está vazio";
    }

    if (numero.length === 11){
        return "Válido";
    }

    return "Inválido: precisa ter 11 caracteres";
}

module.exports = cpf;