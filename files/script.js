window.addEventListener("scroll", () => {
    const section4 = document.querySelector(".section-4");
    const section5 = document.querySelector(".section-5");
    const overlay = document.querySelector(".black-overlay");

    const section4Top = section4.getBoundingClientRect().top;
    const section5Top = section5.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (section4Top < windowHeight / 2 && section5Top > windowHeight / 2) {
        overlay.style.opacity = 1; // Закрашивание экрана в черный
    } else {
        overlay.style.opacity = 0; // Убираем черный фон
    }
});
