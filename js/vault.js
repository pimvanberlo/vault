var unlockCode = "0492";
var pressedButton = "";

function buttonPressedKey(pressedNumber) {
    pressedButton = pressedButton + pressedNumber.innerText;
    document.getElementById("unlockMessage").innerHTML = pressedButton;

    if (pressedButton.length === 4) {

        if (pressedButton === unlockCode) {
            document.getElementById("unlockMessage").innerHTML = "Vault Unlocked!";
        }
        else {
            document.getElementById("unlockMessage").innerHTML = "Wrong Code!";
        }
        pressedButton = "";
    }
}