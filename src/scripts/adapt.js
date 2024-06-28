document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');
    const exPar = document.createElement('p');
    exPar.textContent = 'X';
    exPar.style.cursor = 'pointer';
    exPar.style.background = '#E4C1F9';
    exPar.style.padding = '10px';
    exPar.style.maxWidth = '15px';
    exPar.style.borderRadius = '10px';

    exPar.addEventListener('click', () => {
        nav.classList.remove('active');
        nav.removeChild(exPar);
    });

    burgerMenu.addEventListener('click', () => {
        if (!nav.contains(exPar)) {
            nav.insertBefore(exPar, nav.firstChild);
        }
        nav.classList.toggle('active');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            nav.classList.remove('active');
            if (nav.contains(exPar)) {
                nav.removeChild(exPar);
            }
        }
    });
});
