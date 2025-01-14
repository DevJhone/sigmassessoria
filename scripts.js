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
