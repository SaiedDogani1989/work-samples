function load() {
    let randomNumber1 = Math.floor((Math.random() * 6) + 1) // 1-6
    let randomDiceImg1 = "images/" + "dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.ong 
    document.querySelector(".img1").setAttribute("src", randomDiceImg1); // change the src


    let randomNumber2 = Math.floor((Math.random() * 6) + 1)
    let randomDiceImg2 = "images/" + "dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", randomDiceImg2);


    //player 1 win
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "player 1 win ⛳";
    }
    // player 1 win
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "🏳️‍🌈 player 2 win";
    }
    //draw
    else {
        document.querySelector("h1").innerHTML = "Draw";
    }
}