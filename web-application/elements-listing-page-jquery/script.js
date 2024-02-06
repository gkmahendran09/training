$(document).ready(function() {
    $('#select-Player').click(function() {
        addPlayerToList();
    });
});

function addPlayerToList() {
    let playername = $('#add-Player').val();
    if (playername.trim() === "") return;
    let li = $('<li>').text(playername);
    $('#players-List').append(li);
    $('#add-Player').val(''); 
}



