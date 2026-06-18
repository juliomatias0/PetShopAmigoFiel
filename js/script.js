// REQUISITO 3 - Função 1: Exibir mensagem de boas-vindas ao carregar a página
window.onload = function() {
    alert("Bem-vindo ao PetShop Amigo Fiel!");
    
    // Inicia o relógio assim que a página carrega
    atualizarRelogio();
};

// REQUISITO 3 - Função 2: Mostrar data e hora atual
function atualizarRelogio() {
    setInterval(function() {
        var dataAtual = new Date();
        var formatoLocal = dataAtual.toLocaleString("pt-BR");
        document.getElementById("relogio").innerHTML = formatoLocal;
    }, 1000); // Atualiza a cada 1000 milissegundos (1 segundo)
}

// REQUISITO 3 - Função 3: Alerta para o Botão Enviar Cadastro
function enviarCadastro(event) {
    // Evita que a página recarregue ao enviar o formulário
    event.preventDefault(); 
    alert("Cadastro realizado com sucesso!");
}

// REQUISITO 6: Alerta para o Botão Agendar
function fazerAgendamento(event) {
    // Evita que a página recarregue ao enviar o formulário
    event.preventDefault(); 
    alert("Agendamento realizado com sucesso!");
}
