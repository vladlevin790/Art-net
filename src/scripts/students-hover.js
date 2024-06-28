let cards = document.getElementsByClassName('services-cards');
let fullName = ['Павленко Владимир', 'Ефремов Иван', 'Абдул Вахаб', 'Дмитрий Масленников'];

Array.from(cards).forEach((el, index) => {
    let par = document.createElement('p');
    par.style.fontFamily = 'Lobster';
    par.style.fontSize = '36px';
    par.style.position = 'absolute';
    par.style.top = '40%';
    par.style.opacity = '1';
    par.style.zIndex = '1';
    par.style.width = '400px';
    par.style.pointerEvents = 'none';
    par.style.textAlign = 'center';

    el.addEventListener('mouseenter', () => {
        el.style.position = 'relative';
        par.textContent = fullName[index];
        el.appendChild(par);
    });

    el.addEventListener('mouseleave', () => {
        if (el.contains(par)) {
            el.removeChild(par);
        }
    });
});
