var unlockCode = "0492";
var pressedButton = "";
var buttons = document.getElementsByClassName("vaultButton");
let wrongColor = document.getElementById("wrongVaultColor");
let correctColor = document.getElementById("correctVaultColor");
let intervalTimer = 0;

function buttonPressedKey(pressedNumber) {
    pressedButton = pressedButton + pressedNumber.innerText;
    document.getElementById("unlockMessage").innerHTML = pressedButton;

    if (pressedButton.length === unlockCode.length) {

        if (pressedButton === unlockCode) {
            document.getElementById("unlockMessage").innerHTML = "Vault Unlocked!";
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;

            }
            let blink = setInterval(function() {

                //add +1 every time the setInterval function runs
                intervalTimer++;

                //change the css of the green and red box to create a blinking effect
                console.log(intervalTimer);
                if (correctColor.style.backgroundColor === "green") {
                    correctColor.style.backgroundColor = "rgb(0, 70, 0)";
                }else {
                    correctColor.style.backgroundColor = "green";
                }

                //check if the interval has ran ten times
                if(intervalTimer === 8) {
                    //ClearInterval function stops the interval after 8 times
                    clearInterval(blink);
                    intervalTimer = 0;
                    for (var i = 0; i < buttons.length; i++) {
                        buttons[i].disabled = false;

                    }
                }

            }, 500);

        }
        else {
            document.getElementById("unlockMessage").innerHTML = "Wrong Code!";
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;

            }


            let blink = setInterval(function() {

                //add +1 every time the setInterval function runs
                intervalTimer++;

                //change the css of the green and red box to create a blinking effect
                console.log(intervalTimer);
                if (wrongColor.style.backgroundColor === "red") {
                    wrongColor.style.backgroundColor = "rgb(70, 0, 0)";
                }else {
                    wrongColor.style.backgroundColor = "red";
                }

                //check if the interval has ran ten times
                if(intervalTimer === 8) {
                    //ClearInterval function stops the interval after 8 times
                    clearInterval(blink);
                    intervalTimer = 0;
                    for (var i = 0; i < buttons.length; i++) {
                        buttons[i].disabled = false;
                    }
                }

            }, 500);
        }
        pressedButton = "";
    }
}

