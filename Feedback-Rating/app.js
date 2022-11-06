const namefield = document.querySelector('.input1').value;
const feedbackfield = document.querySelector('.input2').value;
const submitbutton = document.querySelector('.btn');

let catcher = [];

function submit() {
    let namefield = document.getElementById('input1').value;
    let feedbackfield = document.getElementById('input2').value;
    let ratings = document.getElementById('ratings');
    let star1 = document.getElementById('star1');
    
    let star2 = document.getElementById('star2');
    let star3 = document.getElementById('star3');
    
    let star4 = document.getElementById('star4');
    let star5 = document.getElementById('star5');
    
    let alert = document.getElementById("alert");
    if (namefield != "" && feedbackfield != "") {
        let namefilter = catcher.filter((x) => {
            return x.input1 == namefield;
        });

        if (namefilter.length == 0) {
            let enterdata = { input1: namefield, input2: feedbackfield }
            catcher.push(enterdata)
            console.log(g)
            
            console.log(catcher);

    

            alert.innerHTML = "Give rating below ";
            alert.classList.remove("alertby")
            alert.classList.add("green")
            setInterval(() => {
                alert.classList.add('alertby')
                alert.classList.remove("green")
            }, 3000)

            let starratings = {star1:1,star2:2,star3:3,star4:4,star5:5};
            const totalstars = 5;
            //run ratings
            document.addEventListener("DOMContentLoaded", getratings);
            function getratings(){
                for(let g in starratings){
                    console.log(g);
                }
            }
            let inputvalue;
            let listen1 = star1.addEventListener('click', function (){
                return inputvalue = 1+"⭐"
                console.log(listen1);

            })
        }



    }
    else {
        alert.innerHTML = "Fill all the fields"
        alert.classList.remove('alertby')
        alert.classList.add("red")
        setInterval(() => {
            alert.classList.add('alertby')
            alert.classList.remove("red")
        }, 3000)
    }
    // document.getElementById('input1').value = "";
    // document.getElementById('input2').value = "";
}