function carrinho(produtos) {

    if (produtos.some(valor => valor < 0)) {
        return 'Erro';
    }

    return produtos.reduce((total, valor) => total + valor, 0);
}

module.exports = carrinho;