let from = window.localStorage.getItem("detail");

let iplFullTeamDetails = JSON.parse(window.localStorage.getItem("iplteaminfo"));

let teamdetails = [];

for (let i = 0; i < iplFullTeamDetails.length; i++) {
    if (iplFullTeamDetails[i].from.toUpperCase() === from.toUpperCase()) {
        teamdetails.push(iplFullTeamDetails[i]);
    }

}

document.getElementById("logoId").innerHTML = `<h2><b><img src="`+ teamdetails[0].teamlogopath + `" alt="` + teamdetails[0].from + `"
style="width:10%;height:24%"></b></h2>`;

document.getElementById("savebutton").onclick = function () {
    let id = Math.floor(Math.random() * 10) + 1;
    let team = {
        "id": id,
        "playerName": document.getElementById("playername").value,
        "from": teamdetails[0].from,
        "price": document.getElementById("playerprice").value,
        "isPlaying": document.getElementById("playingplayer").value,
        "description": document.getElementById("playerdescription").value,
        "teamFullName": teamdetails[0].teamFullName,
        "teamchampionshipwon": teamdetails[0].teamchampionshipwon
    }
    if (team.playerName !== "" && team.price !== "" && team.isPlaying !== null && team.description !== "") {
        iplFullTeamDetails.push(team);
        window.localStorage.removeItem("iplteaminfo");
        window.localStorage.setItem("iplteaminfo", JSON.stringify(iplFullTeamDetails));
    }
};