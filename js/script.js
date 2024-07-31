document.addEventListener('DOMContentLoaded', function() {
    const orderData = JSON.parse(localStorage.getItem('orderData'));
    if (orderData) {
        document.getElementById('centroCustoSpan').textContent = orderData.centroCusto;
        document.getElementById('clienteSpan').textContent = orderData.cliente;
        document.getElementById('coletaSpan').textContent = orderData.coleta;
        document.getElementById('armazemSpan').textContent = orderData.armazem;
        document.getElementById('coletaUFSpan').textContent = orderData.coletaUF;
        document.getElementById('entregaSpan').textContent = orderData.entrega;
        document.getElementById('entregaUFSpan').textContent = orderData.entregaUF;
        document.getElementById('produtoSpan').textContent = orderData.produto;
        document.getElementById('veiculoCavaloSpan').textContent = orderData.veiculoCavalo;
        document.getElementById('veiculoPlaca2Span').textContent = orderData.veiculoPlaca2;
        document.getElementById('veiculo-dolly').textContent = orderData.veiculoPlaca2;
        document.getElementById('veiculo-placa3').textContent = orderData.veiculoPlaca2;
        document.getElementById('capacidadeSpan').textContent = orderData.capacidade;
        document.getElementById('CPFmotoristaSpan').textContent = orderData.CPFmotorista;
        document.getElementById('motoristaSpan').textContent = orderData.motorista;
        document.getElementById('previsaoCarregamentoSpan').textContent = orderData.previsaoCarregamento;
        document.getElementById('pedidoSpan').textContent = orderData.pedido;
        document.getElementById('observacoesSpan').textContent = orderData.observacoes;
    }
    document.querySelector('button').addEventListener('click', function() {
        window.print();
    });
});
