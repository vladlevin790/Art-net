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

    let isDragging = false;

    sliderButton.addEventListener("mousedown", (e) => {
        isDragging = true;
        updateSliderPosition(e.pageX);
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            updateSliderPosition(e.pageX);
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });

    sliderButton.addEventListener("touchstart", (e) => {
        isDragging = true;
        updateSliderPosition(e.touches[0].pageX);
    });

    document.addEventListener("touchmove", (e) => {
        if (isDragging) {
            updateSliderPosition(e.touches[0].pageX);
        }
    });

    document.addEventListener("touchend", () => {
        isDragging = false;
    });

    function updateSliderPosition(pageX) {
        const offset = pageX - comparison.offsetLeft;
        const width = comparison.offsetWidth;

        let newPosition = (offset < 0) ? 0 : (offset > width) ? width : offset;

        sliderButton.style.left = newPosition + "px";
        before.style.width = newPosition + "px";
    }
}

imageComparison("#image-comparison");
