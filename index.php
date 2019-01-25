<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="description" content="">
    <link rel="stylesheet" type="text/css" href="css/style.css">

    <title></title>
</head>
<body>
<h1>Enter the right code to unlock the vault.</h1>
<div class="container">
    <h2 id="unlockMessage"></h2>
    <div id="buttonContainer">
        <button class="vaultButton" type="button" onclick="buttonPressedKey(this)">1</button>
        <button class="vaultButton" type="button" onclick="buttonPressedKey(this)">2</button>
        <button class="vaultButton" type="button" onclick="buttonPressedKey(this)">3</button>
        <button class="vaultButton" type="button" onclick="buttonPressedKey(this)">4</button>
        <button class="vaultButton" type="button" onclick="buttonPressedKey(this)">5</button>
        <button class="vaultButton" type="button" onclick="buttonPressedKey(this)">6</button>
        <button class="vaultButton" type="button" onclick="buttonPressedKey(this)">7</button>
        <button class="vaultButton" type="button" onclick="buttonPressedKey(this)">8</button>
        <button class="vaultButton" type="button" onclick="buttonPressedKey(this)">9</button>
        <button class="vaultButton" type="button" onclick="buttonPressedKey(this)">0</button>
    </div>
    <div class="rightWrongContainer">
        <p id="amountRight" class="rightWrongText"></p>
        <p id="amountWrong" class="rightWrongText"></p>
    </div>
    <div class="colorContainer">
        <div id="correctVaultColor"></div>
        <div id="wrongVaultColor"></div>
    </div>
    <img id="key" src="pictures/key.png" alt="Vault" height="100" width="200">
    <img id="vault" src="pictures/vault.png" alt="Key" height="200" width="200">
    <img id="blocker" src="pictures/block.png" alt="Blocker" height="150" width="150">
</div>
<script src="js/vault.js"></script>
</body>
</html>
