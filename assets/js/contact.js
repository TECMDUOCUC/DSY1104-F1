document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (form.checkValidity()) {
            const data = Object.fromEntries(new FormData(e.target));
            console.log('Form submission payload:', data);
            form.reset();
        }
    });
});