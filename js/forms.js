(() => {
    "use strict";

    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                if (!form.checkValidity()) { //checa se o formulario é invalido (!)
                    event.preventDefault(); // se invalido, previne envio
                    event.stopPropagation(); //evita que o evento se propague para elementos pai
                }

                form.classList.add("was-validated"); //acrescenta a classe de verificação do bootstrap
            },
            false
        );
    });
})();

// MASCARAS

$('#telefone').mask('(00) 00000-0000')
$('#preco').mask("000.000,00", {reverse: true});