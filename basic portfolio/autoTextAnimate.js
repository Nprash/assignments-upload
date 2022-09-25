
const Textanimate = document.querySelector(".Textanimate");

const career = ["singer", "dancer", "flutist", "Web developer", "instructor"];

let careerIndex = 0;
let characterIndex = 0;

function updateText(){
    characterIndex++;  // it stops by giving one value with giving one one char and stops to read second index value we have to use if cond to check values lenth
    Textanimate.innerHTML = `<h1>Iam ${career[careerIndex].slice(0,1)=== "i"? "an":"a"} ${career[careerIndex].slice(0,characterIndex)}</h1>` //slice give us substring of a string 1st argument will be index position 2nd will be no of char that we wnt to print
    //${career[careerIndex].slice(0,1)=== "i"? "an":"a"} to have a and an when first letter of a string would be Id
// above line we reading characterIndex or each character of a string, if one string happend it needs to jump on 2nd string
    if(characterIndex === career[careerIndex].length){ //if the charctindx = to length of indexvalue , we need to increase the careerindex so that 2nd string willpas and reads alll the letter, to read the each letter in a 2nd value charcterindex must be 0
        careerIndex++; //it passes the 2nd index value to read that is how career index will increase
        characterIndex = 0; //it starts character reading from 0  it prints 1st charcter again charcterindex will increase by 1 then it reads 2nd charcter goes on..
    }

    if(careerIndex === career.length){
        careerIndex= 0; //which means after reading each char in everu string again we wanna repeat this same for that 
    }
    setTimeout(updateText, 500);

}


updateText();






// console.log(career[careerIndex].slice(0,1))
// console.log(career[careerIndex].slice(0,characterIndex))
// updateText();

