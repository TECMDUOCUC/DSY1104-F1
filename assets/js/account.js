document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('submit', (e) => {
        e.preventDefault();
        const formId = e.target.id;

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