document.addEventListener('DOMContentLoaded', function() {
  let currentOrderNumber = parseInt(localStorage.getItem('currentOrderNumber')) || 31200;

  function generateOrderNumber() {
      currentOrderNumber++;
      localStorage.setItem('currentOrderNumber', currentOrderNumber);
      return currentOrderNumber;
  }

  document.getElementById('orderForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const formData = {
          orderNumber: generateOrderNumber(),
          centroCusto: document.getElementById('centroCusto').value,
          cliente: document.getElementById('cliente').value,
          coleta: document.getElementById('coleta').value,
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
      const fields = ['centroCusto', 'cliente', 'coleta', 'coletaUF', 'entrega', 'entregaUF', 'produto',
                      'veiculo-cavalo', 'veiculo-placa2', 'veiculo-dolly', 'veiculo-placa3', 'capacidade',
                      'motorista', 'CPFmotorista', 'previsaoCarregamento', 'pedido', 'observacoes'];

      fields.forEach(field => {
          document.getElementById(field).value = '';
      });
  });
});
