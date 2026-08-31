function visitProduct(rockId) {
    const url = `product.html?id=${encodeURIComponent(rockId)}`;
    window.location.href = url;
}


//Gemini generated code below:
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.betterSearch');
    const cards = document.querySelectorAll('.catalogContainer .card');

    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevents the browser's default form submission and page reload
    });

    
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();

        cards.forEach((card) => {
            const title = card.querySelector('h3').textContent.toLowerCase();

            if (query.length > 0 && title.includes(query)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});