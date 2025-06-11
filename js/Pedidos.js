
let linhaSelecionada = null;

// Ao clicar no botão "Excluir" da tabela
document.querySelectorAll('a.btn-danger[data-bs-toggle="modal"]').forEach(botao => {
    botao.addEventListener('click', function (event) {
        event.preventDefault(); // Impede navegação

        // Pega a linha pai do botão
        linhaSelecionada = this.closest('tr');
    });
});

// Ao clicar no botão "Excluir" do modal
document.querySelector('#modalExcluir .btn-danger').addEventListener('click', function () {
    if (linhaSelecionada) {
        linhaSelecionada.remove(); // Remove a linha
        linhaSelecionada = null;

        // Fecha o modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('modalExcluir'));
        modal.hide();
    }
});



