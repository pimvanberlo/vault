var unlockCode = "0492";
var pressedButton = "";
var buttons = document.getElementsByClassName("vaultButton");

function buttonPressedKey(pressedNumber) {
    pressedButton = pressedButton + pressedNumber.innerText;
    document.getElementById("unlockMessage").innerHTML = pressedButton;

    if (pressedButton.length === unlockCode.length) {

        if (pressedButton === unlockCode) {
            document.getElementById("unlockMessage").innerHTML = "Vault Unlocked!";
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;
            }
        }
        else {
            document.getElementById("unlockMessage").innerHTML = "Wrong Code!";
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;
            }
        }
        pressedButton = "";
    }
}
