document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll("#hackedScreen h1, #hackedScreen h2, #hackedScreen h3, #hackedScreen .hacker-name");

    function changeColor() {
        let randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        elements.forEach(element => {
            element.style.color = randomColor;
        });
    }

    setInterval(changeColor, 200); // تغيير الألوان كل 200 مللي ثانية
});
