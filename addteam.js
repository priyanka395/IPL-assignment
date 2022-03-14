let iplFullTeamDetails = JSON.parse(window.localStorage.getItem("iplteaminfo"));

document.getElementById("savebutton").onclick = function () {
    let id = Math.floor(Math.random() * 10) + 1;
    let team = {
        "id": id,
        "playerName": document.getElementById("playername").value,
        "from": document.getElementById("teamshortname").value,
        "price": document.getElementById("playerprice").value,
        "isPlaying": document.getElementById("playingplayer").value,
        "description": document.getElementById("playerdescription").value,
        "teamFullName": document.getElementById("teamfullname").value,
        "teamchampionshipwon": 0
    }
    if (team.playerName !== "" && team.from !== "" && team.price !== "" && team.isPlaying !== null && team.description !== "" && team.teamFullName !== "") {
        iplFullTeamDetails.push(team);
        window.localStorage.removeItem("iplteaminfo");
        window.localStorage.setItem("iplteaminfo", JSON.stringify(iplFullTeamDetails));

        // location.href = "index.html";
    }
};