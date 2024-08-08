// Verifica se está na página de resultado
if (window.location.pathname.endsWith('index.html')) {
    // Recupera os dados do localStorage
    const formData = JSON.parse(localStorage.getItem('formData'));

    // Preenche os spans com os dados do formulário
    document.getElementById('centroCustoSpan').innerText = formData.centroCusto;
    document.getElementById('clienteSpan').innerText = formData.cliente;
    document.getElementById('coletaSpan').innerText = formData.coleta;
    document.getElementById('armazemSpan').innerText = formData.armazem;
    document.getElementById('coletaUFSpan').innerText = formData.coletaUF;
    document.getElementById('entregaSpan').innerText = formData.entrega;
    document.getElementById('entregaUFSpan').innerText = formData.entregaUF;
    document.getElementById('produtoSpan').innerText = formData.produto;
    document.getElementById('veiculoCavaloSpan').innerText = formData['veiculo-cavalo'];
    document.getElementById('veiculoPlaca2Span').innerText = formData['veiculo-placa2'];
    document.getElementById('veiculo-dolly').innerText = formData['veiculo-dolly'];
    document.getElementById('veiculo-placa3').innerText = formData['veiculo-placa3'];
    document.getElementById('capacidadeSpan').innerText = formData.capacidade;
    document.getElementById('motoristaSpan').innerText = formData.motorista;
    document.getElementById('CPFmotoristaSpan').innerText = formData.CPFmotorista;
    document.getElementById('previsaoCarregamentoSpan').innerText = formData.previsaoCarregamento;
    document.getElementById('pedidoSpan').innerText = formData.pedido;
    document.getElementById('observacoesSpan').innerText = formData.observacoes;
}

document.getElementById('imprimir').addEventListener('click', function() {
    window.print();
});