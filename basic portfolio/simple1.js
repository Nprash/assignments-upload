// const colors = ["#D59284", "#C8C320", "#20C86A", "#20C8A2", "#707FD2"];
//     function changecolor() {
//         let randomcolor = randomnumber();
//         var element1 = document.getElementById('changecolorof');
//         var element2 = document.querySelector('.color');
//         element1.style.backgroundColor = colors[randomcolor];
//         element2.textContent = colors[randomcolor];
//     }
// function randomnumber() {
//     return Math.floor(Math.random() * colors.length);
// }

const colors = ["blueviolet","lightyellow","lightgrey","black","orange","red","purple"];
const background = document.getElementById('changecolorof');
const color = document.querySelector('.color');

function changecolor(){
    let rand = getrandomno();
    background.style.backgroundColor = colors[rand];
    color.textContent = colors[rand];
    // console.log(rand);

}
function getrandomno() {
    return Math.floor(Math.random()*colors.length);
}
