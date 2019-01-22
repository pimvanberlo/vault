let unlockCode = "0492";
let pressedButton = "";
let buttons = document.getElementsByClassName("vaultButton");
let wrongColor = document.getElementById("wrongVaultColor");
let correctColor = document.getElementById("correctVaultColor");
let intervalTimer = 0;
let amountWrong = 0;
let amountRight = 0;

document.getElementById("amountRight").innerHTML = "Right amount: " + amountRight;
document.getElementById("amountWrong").innerHTML = "Wrong amount: " + amountWrong;

function buttonPressedKey(pressedNumber) {
    pressedButton = pressedButton + pressedNumber.innerText;
    document.getElementById("unlockMessage").innerHTML = pressedButton;

    if (pressedButton.length === unlockCode.length) {

        if (pressedButton === unlockCode) {
            // audio player
            let audio = new Audio('sounds/vaultUnlock.wav');
            audio.play();
            // right amount counter
            amountRight++;
            document.getElementById("amountRight").innerHTML = "Right amount: " + amountRight;
            // unlock message
            document.getElementById("unlockMessage").innerHTML = "Vault Unlocked!";

            for (var i = 0; i < buttons.length; i++) { // for loop

                buttons[i].disabled = true;
                buttons[i].style.opacity = "0.6";
                buttons[i].style.cursor = "not-allowed";

            }

            let blink = setInterval(function () {

                //add +1 every time the setInterval function runs
                intervalTimer++;
                //change the css of the green and red box to create a blinking effect
                console.log(intervalTimer);
                if (correctColor.style.backgroundColor === "green") {
                    correctColor.style.backgroundColor = "rgb(0, 70, 0)";
                } else {
                    correctColor.style.backgroundColor = "green";

                }

                //check if the interval has ran 8 times
                if (intervalTimer === 8) {
                    //ClearInterval function stops the interval after 8 times
                    clearInterval(blink);
                    intervalTimer = 0;
                    for (var i = 0; i < buttons.length; i++) {
                        buttons[i].disabled = false;
                        buttons[i].style.opacity = "1";
                        buttons[i].style.cursor = "pointer";
                    }
                }

            }, 500);

        }
        else {
            let audio = new Audio('sounds/wrongCode.wav');
            audio.play();

            amountWrong++;
            document.getElementById("amountWrong").innerHTML = "Wrong amount: " + amountWrong;

            document.getElementById("unlockMessage").innerHTML = "Wrong Code!";
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;
                buttons[i].style.opacity = "0.6";
                buttons[i].style.cursor = "not-allowed";

            }
            let blink = setInterval(function () {
                //add +1 every time the setInterval function runs
                intervalTimer++;
                //change the css of the green and red box to create a blinking effect
                console.log(intervalTimer);
                if (wrongColor.style.backgroundColor === "red") {
                    wrongColor.style.backgroundColor = "rgb(70, 0, 0)";
                } else {
                    wrongColor.style.backgroundColor = "red";
                }
                //check if the interval has ran ten times
                if (intervalTimer === 8) {
                    //ClearInterval function stops the interval after 8 times
                    clearInterval(blink);
                    intervalTimer = 0;
                    for (var i = 0; i < buttons.length; i++) {
                        buttons[i].disabled = false;
                        buttons[i].style.opacity = "1";
                        buttons[i].style.cursor = "pointer";
                    }
                }

            }, 500);
        }
        pressedButton = "";
    }
}

