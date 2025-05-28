export function applyInputRangeStyle () {
    const priceRange = document.getElementById("price-range");

    function updateTrackColor() {
        const value = priceRange.value;
        const max = priceRange.max;
        const percentage = (value / max) * 100;
        priceRange.style.background = `linear-gradient(to right, var(--brand-1) ${percentage}%, var(--gray-5) ${percentage}%)`;
    }

    updateTrackColor();

    priceRange.addEventListener("input", updateTrackColor);
}

