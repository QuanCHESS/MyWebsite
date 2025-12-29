function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();
