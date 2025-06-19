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


const phoneInput = document.getElementById("telefone");

// impede que digite letra no input do telefone
phoneInput.addEventListener("input", () => {
    // converte qualquer outro caracter digitado em uma string vazia
    phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");
});