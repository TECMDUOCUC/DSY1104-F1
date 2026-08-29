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

function redirectTo(uri, newPage){
    if (uri) {
        if (newPage){
            window.open(uri, "_blank", "noopener,noreferrer");
        } else {
            window.location.href = uri;
        }
    }
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

renderText();