document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const slider = document.querySelector(".slider");
    const dotsContainer = document.querySelector(".dots");
    let currentIndex = 0;

    // Criar bolinhas dinamicamente com base no número de slides
    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active"); // Marca a primeira bolinha como ativa
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function updateSlider() {
        // Move o slider para mostrar o slide atual
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Atualiza as bolinhas
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Avança para o próximo slide, reinicia após o último
        updateSlider();
    }

    // Inicia o loop automático
    const interval = setInterval(nextSlide, 3000); // Troca de slide a cada 3 segundos

    // Adiciona interatividade com as bolinhas
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index; // Muda para o slide correspondente à bolinha
            updateSlider();
            clearInterval(interval); // Para o autoplay temporariamente ao clicar
        });
    });
});


// Configuração do Mapa
function initMap() {
    const location = { lat: -15.9330, lng: -41.9314 }; // Substitua pela sua latitude e longitude
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });
    new google.maps.Marker({
        position: location,
        map: map,
        title: "Sigma Assessoria",
    });
}

// Inicialização do Google Maps
window.onload = () => {
    if (typeof google !== "undefined" && google.maps) {
        initMap();
    } else {
        console.error("Google Maps API não carregada. Verifique a chave de API.");
    }
};
  

document.addEventListener("DOMContentLoaded", () => {
    const valueItems = document.querySelectorAll("#values .value-item");
    const highlightItems = document.querySelectorAll("#highlights .highlight-item");

    function revealOnScroll() {
        const triggerBottom = window.innerHeight / 1.2;

        // Animação para os itens de valores
        valueItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerBottom) {
                item.classList.add("visible");
            }
        });

        // Animação para os itens de destaques
        highlightItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerBottom) {
                item.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
});

document.addEventListener("DOMContentLoaded", () => {
    const highlightLink = document.querySelector(".highlight");

    if (highlightLink) {
        // Adiciona e remove a classe "highlight-active" em intervalos
        setInterval(() => {
            highlightLink.classList.toggle("highlight-active");
        }, 2000); // Intervalo de 2 segundos
    }
});

