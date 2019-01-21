<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="description" content="">
    <link rel="stylesheet" type="text/css" href="css/style.css">

    <title></title>
</head>
<body>
<div id="buttonContainer">
    <p id="unlockMessage">Enter the right code to unlock the vault.</p>
    <button class="vaultButton" type="button" onclick="buttonPressedKey(this)">1</button>
    <button class="vaultButton" type="button" onclick="buttonPressedKey(this)">2</button>
    <button class="vaultButton" type="button" onclick="buttonPressedKey(this)">3</button>
    <br>
    <button class="vaultButton" type="button" onclick="buttonPressedKey(this)">4</button>
    <button class="vaultButton" type="button" onclick="buttonPressedKey(this)">5</button>
    <button class="vaultButton" type="button" onclick="buttonPressedKey(this)">6</button>
    <br>
    <button class="vaultButton" type="button" onclick="buttonPressedKey(this)">7</button>
    <button class="vaultButton" type="button" onclick="buttonPressedKey(this)">8</button>
    <button class="vaultButton" type="button" onclick="buttonPressedKey(this)">9</button>
    <br>
    <button class="vaultButton" type="button" onclick="buttonPressedKey(this)">0</button>
</div>
<div id="correctVaultColor"></div>
<div id="wrongVaultColor"></div>
<script src="js/vault.js">  </script>
</body>
</html>
