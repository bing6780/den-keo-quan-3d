document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.carousel');
    const faces = document.querySelectorAll('.face');

    // Khi đưa chuột vào bất kỳ mặt nào, đèn sẽ dừng lại
    faces.forEach(face => {
        face.addEventListener('mouseenter', () => {
            carousel.classList.add('paused');
        });

        // Khi rê chuột ra ngoài, đèn sẽ tiếp tục quay
        face.addEventListener('mouseleave', () => {
            carousel.classList.remove('paused');
        });
    });
});
