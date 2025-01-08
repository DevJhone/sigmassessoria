document.addEventListener("DOMContentLoaded", () => {
    // Slider automático para clientes
    const clientSlider = document.querySelector(".client-slider .logos");
    if (clientSlider) {
        let scrollAmount = 0;
        const scrollStep = 2; // Pixels a cada passo
        const scrollInterval = 50; // Intervalo entre passos em ms

        function autoScroll() {
            scrollAmount += scrollStep;
            if (scrollAmount >= clientSlider.scrollWidth / 2) {
                scrollAmount = 0; // Reset para o início
            }
            clientSlider.style.transform = `translateX(-${scrollAmount}px)`;
        }

        setInterval(autoScroll, scrollInterval);
    }

    // Slider manual (opcional para galeria de imagens)
    const slider = document.querySelector(".slider");
    if (slider) {
        let startX;
        let isDragging = false;

        slider.addEventListener("mousedown", (e) => {
            isDragging = true;
            startX = e.pageX - slider.offsetLeft;
            slider.style.cursor = "grabbing";
        });

        slider.addEventListener("mouseleave", () => {
            isDragging = false;
            slider.style.cursor = "default";
        });

        slider.addEventListener("mouseup", () => {
            isDragging = false;
            slider.style.cursor = "default";
        });

        slider.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const scroll = startX - x;
            slider.scrollLeft += scroll;
        });
    }
});
