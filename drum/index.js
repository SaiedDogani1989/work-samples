const numberOfDrumButton = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDrumButton; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let world = this.innerHTML;
        makeSound(world)
        buttonAnimation(world)
    })
}

document.addEventListener("keydown", (event) => {
    makeSound(event.key)
    buttonAnimation(event.key)
})



function makeSound(key) {
    if (key === "w") {
        let tom1 = new Audio("sounds/tom-1.mp3")
        tom1.play()
    }
    else if (key === "a") {
        let tom2 = new Audio("sounds/tom-2.mp3")
        tom2.play()
    }
    else if (key === "s") {
        let tom3 = new Audio("sounds/tom-3.mp3")
        tom3.play()
    }
    else if (key === "d") {
        let tom4 = new Audio("sounds/tom-4.mp3")
        tom4.play()
    }
    else if (key === "j") {
        let snare = new Audio("sounds/snare.mp3")
        snare.play()
    }
    else if (key === "k") {
        let crash = new Audio("sounds/crash.mp3")
        crash.play()
    }
    else if (key === "l") {
        let kickBass = new Audio("sounds/kick-bass.mp3")
        kickBass.play()
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed");

    setInterval(function () {
        activeButton.classList.remove("pressed", 200)
    })
}















