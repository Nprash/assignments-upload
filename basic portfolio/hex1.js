const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const background = document.getElementById('changecolorof');
const color = document.querySelector('.color');

function changecolor() {
    let colorformat = "#";
    for (let i = 0; i < 6; i++) {
        colorformat += hex[randomnumber()];
    }
    background.style.backgroundColor = colorformat;
    color.textContent = colorformat;
    console.log(colorformat);
}

function randomnumber() {
    return Math.floor(Math.random() * hex.length);
}