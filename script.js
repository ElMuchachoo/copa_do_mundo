function iniciarTransicao(idImagem, imagens, tempo) {
    let indice = 0;
    const img = document.getElementById(idImagem);

    setInterval(() => {
        // some a imagem
        img.style.opacity = 0;

        setTimeout(() => {
            // troca a imagem
            indice = (indice + 1) % imagens.length;
            img.src = imagens[indice];

            // reaparece suavemente
            img.style.opacity = 1;
        }, 800); // tempo do fade
    }, tempo);
}

// Listas de imagens
const imagens1 = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];
const imagens2 = ["images/4.jpg", "images/5.jpg", "images/6.jpg"];
const imagens3 = ["images/7.jpg", "images/8.jpg", "images/9.jpg"];

// Inicia com tempos diferentes
iniciarTransicao("img1", imagens1, 3500);
iniciarTransicao("img2", imagens2, 4500);
iniciarTransicao("img3", imagens3, 5500);
