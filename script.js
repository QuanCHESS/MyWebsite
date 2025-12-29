function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 80) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
