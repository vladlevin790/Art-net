let card = document.getElementsByClassName('services-cards');
let images = ["./src/images/Card1.png", "./src/images/Card2.png", "./src/images/Card3.png", "./src/images/Card4.png"];
let headers = ["Групповые занятия", "Индивидуальные занятия", "Сертификат", "Мастер-классы"];
let texts = [
    "Регулярные занятия по абонементу. 6+. Откройте для себя мир творчества в компании единомышленников! Опытные преподаватели и дружелюбная атмосфера помогут вам раскрыть свой потенциал и создать нечто уникальное.",
    "Откройте для себя мир творчества в уютной атмосфере индивидуальных занятий с нашим профессиональным художником.",
    "Подарите незабываемые впечатления с нашими подарочными сертификатами на мастер-классы, курсы и праздники. Вдохновение, творчество и радость ждут ваших любимых!",
    "Откройте мир искусства с нашими веселыми творческими сеансами! Дети могут создать свои собственные картины на холсте, не имея особых навыков рисования. Вдохновение и творчество ждут ваших маленьких художников!"
];
let mobilePrices = ["4000р", "6000р", "3000р", "5000р"];

Array.from(card).forEach((el, index) => {
    el.addEventListener('click', () => {
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let modal = document.createElement('div');
        let closeButton = document.createElement('button');
        modal.classList.add('modal');
        div1.classList.add('modal-div1');
        div2.classList.add('modal-div2');

        modal.style.width = '1000px';
        modal.style.height = '650px';
        modal.style.padding = '20px';
        modal.style.border = 'none';
        modal.style.borderRadius = '10px';
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.backgroundColor = '#fff';
        modal.style.zIndex = '1001';
        modal.style.display = 'flex';

        let modalBackground = document.createElement('div');
        modalBackground.classList.add('modal-background');
        modalBackground.style.position = 'fixed';
        modalBackground.style.top = '0';
        modalBackground.style.left = '0';
        modalBackground.style.width = '100%';
        modalBackground.style.height = '100%';
        modalBackground.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        modalBackground.style.zIndex = '1000';

        let img = document.createElement('img');
        img.src = images[index];
        img.alt = index;
        img.style.width = "638px";
        img.style.height = 'auto';
        div2.appendChild(img);

        let header = document.createElement('h2');
        header.textContent = headers[index];
        header.style.fontFamily = 'Lobster';
        header.style.fontSize = '36px';
        header.style.marginTop = '20px';
        header.style.marginBottom = '0';
        div1.appendChild(header);

        let paragraph = document.createElement('p');
        paragraph.textContent = texts[index];
        paragraph.style.fontFamily = 'Roboto';
        paragraph.style.fontSize = '24px';
        div1.appendChild(paragraph);

        if (window.innerWidth <= 1024) {
            let priceParagraph = document.createElement('p');
            priceParagraph.textContent = `Цена: ${mobilePrices[index]}`;
            priceParagraph.style.fontFamily = 'Roboto';
            priceParagraph.style.fontSize = '24px';
            div1.appendChild(priceParagraph);
        }

        let exitParagraph = document.createElement('p');
        exitParagraph.textContent = 'Х';
        exitParagraph.style.fontSize = '36px';
        exitParagraph.style.marginTop = '0';
        exitParagraph.style.cursor = 'pointer';
        exitParagraph.addEventListener('click', () => {
            document.body.removeChild(modalBackground);
            document.body.removeChild(modal);
        });

        div1.style.background = '#D3F8E2';
        div1.style.maxHeight = '400px';
        div1.style.maxWidth = '348px';
        div1.style.display = 'flex';
        div1.style.flexDirection = 'column';
        div1.style.justifyContent = 'center';
        div1.style.padding = '40px';
        div1.style.marginTop = '40px';
        div1.style.borderRadius = '20px';


        closeButton.textContent = 'Позвонить';
        closeButton.style.padding = '10px 20px';
        closeButton.style.marginTop = '20px';
        closeButton.style.backgroundColor = '#A9DEF9';
        closeButton.style.border = 'none';
        closeButton.style.cursor = 'pointer';
        closeButton.style.color = 'white';
        closeButton.style.width = '204px';
        closeButton.style.height = '84px';
        closeButton.style.borderRadius = '20px';
        closeButton.addEventListener('click', () => {
            document.body.removeChild(modalBackground);
            document.body.removeChild(modal);
        });

        div2.appendChild(closeButton);
        modal.appendChild(div2);
        modal.appendChild(div1);
        modal.appendChild(exitParagraph);
        document.body.appendChild(modalBackground);
        document.body.appendChild(modal);

        modalBackground.addEventListener('click', () => {
            document.body.removeChild(modalBackground);
            document.body.removeChild(modal);
        });
    });
});
