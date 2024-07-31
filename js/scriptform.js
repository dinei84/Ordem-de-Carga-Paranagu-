document.addEventListener('DOMContentLoaded', function() {
  atualizarNumeroOrdem();

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
      document.getElementById('veiculo-dolly').textContent = orderData.veiculoDolly;
      document.getElementById('veiculo-placa3').textContent = orderData.veiculoPlaca3;
      document.getElementById('capacidadeSpan').textContent = orderData.capacidade;
      document.getElementById('CPFmotoristaSpan').textContent = orderData.CPFmotorista;
      document.getElementById('motoristaSpan').textContent = orderData.motorista;
      document.getElementById('previsaoCarregamentoSpan').textContent = orderData.previsaoCarregamento;
      document.getElementById('pedidoSpan').textContent = orderData.pedido;
      document.getElementById('observacoesSpan').textContent = orderData.observacoes;
  }

  document.querySelector('.imprimir button').addEventListener('click', function() {
      window.print();
  });
});

document.getElementById('orderForm').addEventListener('submit', function(event) {
  event.preventDefault();    

  const formData = {
      centroCusto: document.getElementById('centroCusto').value,
      cliente: document.getElementById('cliente').value,
      coleta: document.getElementById('coleta').value,
      armazem: document.getElementById('armazem').value,
      coletaUF: document.getElementById('coletaUF').value,
      entrega: document.getElementById('entrega').value,
      entregaUF: document.getElementById('entregaUF').value,
      produto: document.getElementById('produto').value,
      veiculoCavalo: document.getElementById('veiculo-cavalo').value,
      veiculoPlaca2: document.getElementById('veiculo-placa2').value,
      veiculoDolly: document.getElementById('veiculo-dolly').value,
      veiculoPlaca3: document.getElementById('veiculo-placa3').value,
      capacidade: document.getElementById('capacidade').value,
      motorista: document.getElementById('motorista').value,
      CPFmotorista: document.getElementById('CPFmotorista').value,
      previsaoCarregamento: document.getElementById('previsaoCarregamento').value,
      pedido: document.getElementById('pedido').value,
      observacoes: document.getElementById('observacoes').value
  };

  localStorage.setItem('orderData', JSON.stringify(formData));
  window.location.href = 'index.html';
});

const limpar = document.getElementById('clean');

limpar.addEventListener('click', () => {
  document.getElementById('centroCusto').value = '';
  document.getElementById('cliente').value = '';
  document.getElementById('coleta').value = '';
  document.getElementById('armazem').value = ''; 
  document.getElementById('coletaUF').value = '';
  document.getElementById('entrega').value = '';
  document.getElementById('entregaUF').value = '';
  document.getElementById('produto').value = '';
  document.getElementById('veiculo-cavalo').value = '';
  document.getElementById('veiculo-placa2').value = '';
  document.getElementById('veiculo-dolly').value = '';
  document.getElementById('veiculo-placa3').value = '';
  document.getElementById('capacidade').value = '';
  document.getElementById('motorista').value = '';
  document.getElementById('CPFmotorista').value = '';
  document.getElementById('previsaoCarregamento').value = '';
  document.getElementById('pedido').value = '';
  document.getElementById('observacoes').value = '';
});
