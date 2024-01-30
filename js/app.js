let totalGerado = 0;
limpar()

function adicionar() {
    //recuperar valores nome do produto, quantidade e valores
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //calcular o subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    //adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + '<section class="carrinho__produtos__produto"> <span class="texto-azul">' + quantidade + 'x</span> ' + nomeProduto + ' <span class="texto-azul">R$' + preco + '</span> </section>';
    //atualizar o valor total
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