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
        updateSliderPosition(e.clientX);
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            updateSliderPosition(e.clientX);
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });

    sliderButton.addEventListener("touchstart", (e) => {
        isDragging = true;
        updateSliderPosition(e.touches[0].clientX);
    });

    document.addEventListener("touchmove", (e) => {
        if (isDragging) {
            updateSliderPosition(e.touches[0].clientX);
        }
    });

    document.addEventListener("touchend", () => {
        isDragging = false;
    });

    function updateSliderPosition(clientX) {
        const offset = clientX - comparison.getBoundingClientRect().left;
        const width = comparison.offsetWidth;

        let newPosition = Math.max(0, Math.min(offset, width));

        sliderButton.style.left = newPosition + "px";
        before.style.width = newPosition + "px";

        console.log(`newPosition: ${newPosition}, offset: ${offset}, width: ${width}`);
    }
}

imageComparison("#image-comparison");
