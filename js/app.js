let totalGeral;
limpar();

function adicionar(){
    //Recuperar valores, nome produto, quantidade, valor
    let Produto = document.getElementById('produto').value;
    let Quantidade = document.getElementById('quantidade').value;

    //Verifica se o produto selecionado é valido
    if (!Produto || Produto.trim()===""){
        alert("Selecione um produto valido.");
        return;
    } 
    //Verifica se a quanridade inserida é valida
    if(isNaN(Quantidade) || Quantidade <= 0){
        alert("Insira uma quantidade válida.");
        return;
    }
    let NomeProduto = Produto.split('-')[0];
    let ValorUnitario = Produto.split('R$')[1];

    //Calcular preço, subtotal
    let Preco = Quantidade * ValorUnitario;

    //adicionar no carrinho
    let Carrinho = document.getElementById('lista-produtos');
    Carrinho.innerHTML = Carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
    <span class="texto-azul">${Quantidade}x</span> ${NomeProduto} <span class="texto-azul">R$${Preco}</span>
    </section>`;

    //atualizar o valor total
     totalGeral = totalGeral + Preco;
     let campoTotal = document.getElementById('valor-total');
     campoTotal.textContent = `R$ ${totalGeral}`;
     document.getElementById('quantidade').value = 0;
}
function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}

