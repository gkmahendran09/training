let addPlayer = document.getElementById("add-Player");
let selectPlayer = document.getElementById("select-Player");
let playersList = document.getElementById("players-List");

function addPlayertolist() {
    let playername = addPlayer.value;
    let li = document.createElement("li");
    li.innerText = playername;
    playersList.appendChild(li);
}

selectPlayer.addEventListener("click", addPlayertolist);




