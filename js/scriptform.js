function submitForm() {
    // Captura os dados do formulário
    const form = document.getElementById('orderForm'); // Corrigi o ID do formulário
    const formData = new FormData(form);

    // Converte os dados do formulário em um objeto
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Armazena os dados no localStorage
    localStorage.setItem('formData', JSON.stringify(formObject));

    // Redireciona para a página de resultado
    window.location.href = 'index.html'; // Direciona para a página index.html
}
