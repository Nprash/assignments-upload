
// function changeColor(){
//     document.getElementById('title').style.color = 'red';
// }

let counter = 0;

function increment() {
    counter = counter + 1;
    //counter++
    //counter += 1
    document.getElementById('counter').innerHTML = counter;
}
function decrement() {
    counter = counter - 1;
    //counter--
    //counter -= 1
    document.getElementById('counter').innerHTML = counter;
}
function reset() {
    counter = 0;
    //counter++
    //counter += 1
    document.getElementById('counter').innerHTML = counter;
}

// 2nd project-2 code:----------------------------

let count = 0;
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btnn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count == 0) {
            value.style.color = "black";
        }
        value.textContent = count;
    });
});


// project-3 code:1 or sample 1--------------------------------

// const colors = ["blueviolet","lightyellow","lightgrey","black","orange","red","purple"];
// const background = document.getElementById('changecolorof');
// const color = document.querySelector('.color');

// function changecolor(){
//     let rand = getrandomno();
//     background.style.backgroundColor = colors[rand];
//     color.textContent = colors[rand];
//     // console.log(rand);

// }
// function getrandomno() {
//     return Math.floor(Math.random()*colors.length);
// }

// --------------------working code----------------------------------
// const colors = ["#D59284","#C8C320","#20C86A","#20C8A2","#707FD2"];|
//         function changecolor(){                                    |
//             let randomcolor = randomnumber();                      |
//             var element1 = document.getElementById('changecolorof');
//             var element2 = document.querySelector('.color');       |
//             element1.style.backgroundColor = colors[randomcolor];  |
//             element2.textContent = colors[randomcolor];            |
//         }                                                          |
//         function randomnumber(){                                   |
//             return Math.floor(Math.random()*colors.length);        |
//         }

// ------------------working code----------------------------------

// project-3 code:2 or Hex color--------------------------------

// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// const background = document.getElementById('changecolorof');
// const color = document.querySelector('.color');

// function changecolor() {
//     let colorformat = "#";
//     for (let i = 0; i < 6; i++) {
//         colorformat += hex[randomnumber()];
//     }
//     background.style.backgroundColor = colorformat;
//     color.textContent = colorformat;
//     console.log(colorformat);
// }

// function randomnumber() {
//     return Math.floor(Math.random() * hex.length);
// }


// ------------------------ preject 4 -------------------

const reviews = [
    {
        id: 1,
        name: "prasanth-guitar",
        job: "front end developer-1",
        img:
            "./gallery with/pr-bike-1.jpg",
        text:
            "Possess strong knowledge of  programming languages such as HTML/CSS, JavaScript."

    },
    {
        id: 2,
        name: "prasanth-nephew",
        job: "web designer-2",
        img:
            "./gallery with/pr-nep-3.jpg",
        text:
            "Looking to gain a Web Designing position that can benefit from huge programming knowledge.",
    },
    {
        id: 3,
        name: "prasanth-guitar2",
        job: "intern-3",
        img:
            "./gallery with/pr-gitar-4.jpg",
        text:
            "Looking for web developer internship. to enhance my coding skills without any hassels",
    },
    {
        id: 4,
        name: "prasanth-guitar3",
        job: "the boss-4",
        img:
            "./gallery with/pr-gitar-5.jpg",
        text:
            "to enhance overall strategic plan and direction of an organization lor ipsum lorm. ",
    },
];

//select items

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// set initial item or initiate 

let currentitem = 0;
window.addEventListener('DOMContentLoaded', function () {
    showcontent(currentitem);
});

// to map reviews array to the html elements of the content
function showcontent(person) {  // to hold the array of content in a variable called as prson
    img.src = reviews[person].img;
    author.textContent = reviews[person].name;
    job.textContent = reviews[person].job;
    info.textContent = reviews[person].text;
}

// to display content by the buttons 
nextBtn.addEventListener('click', function () {
    currentitem++;
    if (currentitem > reviews.length - 1) {
        currentitem = 0;
    }
    showcontent(currentitem);
    console.log(currentitem);
});

prevBtn.addEventListener('click', function () {
    currentitem--;
    if (currentitem < 0) {
        currentitem = reviews.length - 1;
    }
    showcontent(currentitem);
    console.log(currentitem);
});







