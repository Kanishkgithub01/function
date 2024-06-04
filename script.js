document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById('colorButton');

    button.addEventListener('click', changeBackgroundColor);

    function changeBackgroundColor() {
        let colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FF8F33', '#8F33FF'];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    }
});
