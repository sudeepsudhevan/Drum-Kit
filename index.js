var button_list = document.querySelectorAll(".drum");
// console.log(document.querySelectorAll("button").length)

for (var i = 0;i<button_list.length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        console.log(this);
        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
              break;
            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
              break;
            case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');      
                tom3.play();
            case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');      
                tom4.play();
            case "j":
                var snare = new Audio('sounds/snare.mp3');      
                snare.play();
            case "k":
                var crash = new Audio('sounds/crash.mp3');      
                crash.play();
            case "l":
                var kick = new Audio('sounds/kick-bass.mp3');      
                kick.play();     
                
            default:
                break;
        }
    })
}

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
