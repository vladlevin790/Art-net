const sliderButton = document.createElement("button");
const beforeDiv = document.createElement("div");
function imageComparison(selector) {
    const comparison = document.querySelector(selector);
    comparison.classList.add("image-comparison");
    beforeDiv.className = "image-comparison__before";
    comparison.prepend(beforeDiv);
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
        document.addEventListener("mousemove", (e) => {
            const offset = e.pageX - comparison.offsetLeft;
            const width = comparison.offsetWidth;

            if (offset < 0) offset = 0;
            if (offset > width) offset = width;

            sliderButton.style.left = offset + "px";
            before.style.width = offset + "px";
        });

        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", () => {});
        });
    });
}

imageComparison("#image-comparison");