let coins = 0;

function coinclick() {
    coins+= 1;
    update()
}


function update() {
    document.getElementById("cointext").innerHTML = coins + " Coins"
}