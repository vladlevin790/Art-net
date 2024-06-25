function imageComparison(selector) {
    const comparison = document.querySelector(selector);
    comparison.classList.add("image-comparison");

    const beforeDiv = document.createElement("div");
    beforeDiv.className = "image-comparison__before";
    comparison.prepend(beforeDiv);

    const sliderButton = document.createElement("button");
    sliderButton.className = "image-comparison__slider";
    comparison.appendChild(sliderButton);

    const images = comparison.querySelectorAll("img");
    images.forEach((img) => {
        img.classList.add("image-comparison__image");
    });

    const before = comparison.querySelector(".image-comparison__before");
    before.appendChild(images[0]);

    sliderButton.addEventListener("dragstart", (e) => e.preventDefault());

    sliderButton.addEventListener("mousedown", (e) => {
        const slider = sliderButton;
        const doc = document;
        doc.addEventListener("mousemove", (e) => {
            const offset = e.pageX - comparison.offsetLeft;
            const width = comparison.offsetWidth;

            if (offset < 0) offset = 0;
            if (offset > width) offset = width;

            slider.style.left = offset + "px";
            before.style.width = offset + "px";
        });

        doc.addEventListener("mouseup", () => {
            doc.removeEventListener("mousemove", () => {});
        });
    });
}

imageComparison("#image-comparison");