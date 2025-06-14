(() => {
    "use strict";

    // VALIDAÇÃO PERSONALIZADA
    function validarTelefone(input) {
        if (!input) return;
        const valorSemMascara = $(input).cleanVal(); //LIMPA A MÁSCARA
        if (valorSemMascara) {
            // VERIFICA SE CONTEM MAIS DE 11 DIGITOS (DDD + 9)
            input.setCustomValidity(valorSemMascara.length < 11 ? 'Telefone incompleto.' : '');
        }
    }

    // PERMITE ACRESCENTAR MAIS VALIDAÇÕES PERSONALIZADAS
    function validarCampo(input) {
        switch (input.id) {
            case 'telefone':
                validarTelefone(input);
                break;
        }
    }

    // ENCONTRA FORMULARIOS COM ESSA CLASSE 
    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form) => {
        form.addEventListener("submit", (event) => {
            r
            form.querySelectorAll('input, select, textarea').forEach(validarCampo);

            // SE FORMULARIO NAO VALIDO:                                        
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            // ACRESCENTA CLASSE DE VALIDAÇÃO DO BOOTSTRAP                                        
            form.classList.add("was-validated");
        }, false);

        // VALIDAÇÃO PERSONALIZADA EM TEMPO REAL
        form.addEventListener('input', (event) => {
            const input = event.target; //ARMAZENA O IMPUT DO EVENTO

            if (form.classList.contains('was-validated')) {
                validarCampo(input); //RODA A FUNÇÃO COM O IMPUT SELECIONADO
            }
        })
    }
    )();

})

// MÁSCARAS 
$('#telefone').mask('(00) 00000-0000');
$('#preco').mask("000.000,00", { reverse: true });