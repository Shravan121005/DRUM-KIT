// click functionality
var listOfDrums = document.querySelectorAll(".drum");
for(var i = 0;i<listOfDrums.length;i++){
    listOfDrums[i].addEventListener("click",buttonClick);
}
function buttonClick(){
    var ch = this.innerText;
    playByText(ch);
    keyAnimation(ch);
}

//keyboard functionality
document.addEventListener("keydown", function(event){
    playByText(event.key);
    keyAnimation(event.key);
});

//sound play functionality
function playByText(ch){
    switch(ch){
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
        break;
        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
        break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
        break;
        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;
        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break;
        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
        break;
        default:
    }
}

function keyAnimation(ch){
    var buttonToAnimate = document.querySelector("."+ch);
    buttonToAnimate.classList.add("pressed");
    setTimeout(function(){
        buttonToAnimate.classList.remove("pressed");
    }, 100);
}
