document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section:not(.head-navigation)'); // Select all sections except the one containing the nav

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('section-hidden');
        observer.observe(section);
    });
});
