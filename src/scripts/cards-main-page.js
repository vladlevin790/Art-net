let cards = document.getElementsByClassName('services-cards');
let prices = document.getElementsByClassName('price-cards');

document.addEventListener('DOMContentLoaded', () => {
    Array.from(prices).forEach((price) => {
        price.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
        price.style.opacity = '0';
        price.style.visibility = 'hidden';
    });
});

Array.from(cards).forEach((el, index) => {
    el.addEventListener('mouseenter', () => {
        Array.from(prices).forEach((price, indexPrice) => {
            if (index === indexPrice) {
                price.style.opacity = '1';
                price.style.visibility = 'visible';
            } else {
                price.style.opacity = '0';
                price.style.visibility = 'hidden';
            }
        });
    });

    el.addEventListener('mouseleave', () => {
        Array.from(prices).forEach((price) => {
            price.style.opacity = '0';
            price.style.visibility = 'hidden';
        });
    });
});
