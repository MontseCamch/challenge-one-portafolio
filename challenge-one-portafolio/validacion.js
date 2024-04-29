//Validación de datos del formulario en JavaScript

const email = document.getElementById("email");

email.addEventListener("input", function (event){
    if (email.validity.typeMismatch){
        email.setCustomValidity(
            "Dirección de correo electrónica no válida.",
        );
    } else {
        email.setCustomValidity("");
    }
});
