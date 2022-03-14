let from = window.localStorage.getItem("detail");

let iplFullTeamDetails = JSON.parse(window.localStorage.getItem("iplteaminfo"));

let teamdetails = [];
let batsman = "";
let bowler = "";
for (let i = 0; i < iplFullTeamDetails.length; i++) {
    if (iplFullTeamDetails[i].from.toUpperCase() === from.toUpperCase()) {
        teamdetails.push(iplFullTeamDetails[i]);
        if (iplFullTeamDetails[i].description.toUpperCase() === "BATSMAN") {
            if (iplFullTeamDetails.length !== (i + 1)) {
                batsman = batsman + iplFullTeamDetails[i].playerName + ",";
            } else {
                batsman = batsman + iplFullTeamDetails[i].playerName;
            }
        }
    
        if (iplFullTeamDetails[i].description.toUpperCase() === "BOWLER") {
            if (iplFullTeamDetails.length !== (i + 1)) {
                bowler = bowler + iplFullTeamDetails[i].playerName + ",";
            } else {
                bowler = bowler + iplFullTeamDetails[i].playerName;
            }
        }
    }

}

let tt = `<div style="text-align: center;color: rgb(40, 48, 53)">
<h2><b><img src="`+ teamdetails[0].teamlogopath + `" alt="` + teamdetails[0].from + `" style="width:10%;height:24%"></b></h2>
</div>
<br>
<div style="width: 30%; float: left;">
<b>Team Name: </b> `+ teamdetails[0].teamFullName +`
</div>
<div style="width: 30%; float: left;">
<b>Player Count: </b> `+ teamdetails.length +`
</div>
<div style="width: 30%; float: left;">
<b>Top Batsman: </b> `+ batsman +`
</div>
<div style="width: 30%; float: left;">
<b>Top Bowler: </b> `+ bowler +`
</div>
<div style="width: 30%; float: left;">
<b>Championship Won: </b> `+ teamdetails[0].teamchampionshipwon +`
</div>
<br>
<div style="width: 30%; float: left;">

</div>
<br><br><br>`;

for (let i = 0; i < teamdetails.length; i++) {
    let playingstatus = teamdetails[i].isPlaying? "Yes" : "No";
    tt = tt + `<div class="card">
        <div class="container">
        <img src="#" alt="Player photo" style="width:40%;height:65%"></b></h2>
            <h4><b>`+ teamdetails[i].playerName + `</b></h4>
            <b>Price:&nbsp;</b> ` + teamdetails[i].price +`&nbsp;&nbsp;
            <b>Role:&nbsp;</b> ` + teamdetails[i].description +`&nbsp;&nbsp;
            <b>Playing Status:&nbsp;</b> ` + playingstatus + `&nbsp;&nbsp;
        </div>
        </div>`;
}
document.getElementById("idcard").innerHTML = tt;