let totalGerado;
limpar()

function adicionar() {
    // Recuperar valores nome do produto, quantidade e valores
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    // Verificar se o produto é válido
    if (!produto || produto.trim() === '') {
        alert('Selecione um produto válido.');
        return;
    }

    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Insira uma quantidade válida.');
        return;
    }
    
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    // Calcular o subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    // Adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + '<section class="carrinho__produtos__produto"> <span class="texto-azul">' + quantidade + 'x</span> ' + nomeProduto + ' <span class="texto-azul">R$' + preco + '</span> </section>';
    // Atualizar o valor total
    totalGerado = totalGerado + preco;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = 'R$' + totalGerado;
    document.getElementById('quantidade').value = '';
}

function limpar() {
    totalGerado = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}