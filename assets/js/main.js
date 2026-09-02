//yeah I can't really think of anything else to add but to whoever
//is reading this please add more I'm having fun making these
const phrases = [
    "El que esté libre de pecado, que tire la primera...",
    "Una mirada a Medusa, te convertirá en...",
    "Metiendo David su mano en la bolsa, tomó de allí una...",
    "Eternamente empujando la ladera, Sísifo volvió a caer con la...",
    "Quien logre sacarla del pedestal, reclamará la espada en la...",
    "Y Dios le ordenó a Moisés que subiera la montaña y tomara los mandamientos escritos en...",
    "Tranquilo, que nunca se tropieza dos veces con la misma..."
];

const stones = [
    "assets/images/1.png",
    "assets/images/2.webp",
    "assets/images/3.png",
    "assets/images/4.png",
    "assets/images/5.png",
    "assets/images/6.png",
    "assets/images/7.png",
    "assets/images/8.png",
    "assets/images/9.png",
    "assets/images/10.png",
    "assets/images/11.png",
    "assets/images/12.png",
    "assets/images/13.png",
    "assets/images/14.png",
    "assets/images/15.png",
    "assets/images/16.png",
    "assets/images/17.png",
    "assets/images/18.png",
]

let activeIndex = 1;

//Gemini 3.1 pro generated FUNCTION
function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.carousel .card');
    const total = cards.length;

    if (total === 0) return;

    // Get the actual active card element
    const activeCard = cards[activeIndex];

    // Get the center of the visible carousel container
    const containerCenter = carousel.offsetWidth / 2;

    // Get the exact center of the active card relative to the track
    // offsetLeft handles all varying widths and gaps dynamically!
    const activeCardCenter = activeCard.offsetLeft + (activeCard.offsetWidth / 2);

    // Calculate how much we need to shift the track to align both centers
    const offset = containerCenter - activeCardCenter;

    // Apply the shift
    track.style.transform = `translateX(${offset}px)`;

    // Update classes for the styling
    cards.forEach((card, index) => {
        card.classList.remove('active', 'side', 'far');

        if (index === activeIndex) {
            card.classList.add('active');
        } else if (index === activeIndex - 1 || index === activeIndex + 1) {
            card.classList.add('side');
        } else {
            card.classList.add('far');
        }
    });
};

function setActiveCard(cardElement) {
    const cards = Array.from(document.querySelectorAll('.carousel .card'));
    const index = cards.indexOf(cardElement);
    if (index !== -1) {
        activeIndex = index;
        updateCarousel();
    }
}

function redirectTo(uri, newPage){
    if (uri) {
        if (newPage){
            window.open(uri, "_blank", "noopener,noreferrer");
        } else {
            window.location.href = uri;
        }
    }
}

function visitProduct(rockId) {
    const url = `product.html?id=${encodeURIComponent(rockId)}`;
    window.location.href = url;
}

function renderText(){
    const text = document.getElementById("quote");
    const image = document.getElementById("stoned");

    text.textContent = phrases[
        Math.floor(Math.random() * phrases.length)
    ];
    image.src = stones[
        Math.floor(Math.random() * stones.length)
    ];
}



document.addEventListener('DOMContentLoaded', () => {
    updateCarousel();
    renderText();

    
    window.addEventListener('resize', updateCarousel);
});

//Gemini generated code below:
window.addEventListener('click', () => {
        const audio = document.getElementById('bg-music');
        
        audio.volume = 1.0; 

        audio.play()
            .then(() => {
                console.log("Success! Audio is looping in the background.");
            })
            .catch(error => {
                console.error("Browser explicitly blocked playback:", error);
            });
            
    }, { once: true });