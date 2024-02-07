let addPlayer = document.getElementById("add-player");
let selectPlayer = document.getElementById("select-player");
let playersList = document.getElementById("players-list");

function addPlayertolist() {
    let playername = addPlayer.value;
    let li = document.createElement("li");
    li.innerText = playername;
    playersList.appendChild(li);
}

selectPlayer.addEventListener("click", addPlayertolist);


