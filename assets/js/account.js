//GEMINI 3.6 FLASH GENERATED FUNCTION
document.addEventListener('DOMContentLoaded', () => {
    // Regex for standard email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    document.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        const formId = form.id;

        // Retrieve the email input value from the submitted form
        const emailInput = form.querySelector('input[name="email"]');
        const emailValue = emailInput ? emailInput.value.trim() : '';

        // Validate email format
        if (!emailRegex.test(emailValue)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            emailInput.focus();
            return;
        }

        if (formId === 'register') {
            alert('¡Registro exitoso!');
            redirectTo('index.html');
        } else if (formId === 'login') {
            alert('¡Inicio de sesión exitoso!');
            redirectTo('index.html');
        }
    });
});


function redirectTo(uri, newPage){
    if (uri) {
        if (newPage){
            window.open(uri, "_blank", "noopener,noreferrer");
        } else {
            window.location.href = uri;
        }
    }
}