let data = [
    {
        "id": 1,
        "playerName": "Hardik Pandya",
        "from": "MI",
        "price": "6.50 Cr",
        "isPlaying": true,
        "description": "bowler",
        "teamFullName": "Mumbai Indians",
        "teamlogopath": "mi.png",
        "teamchampionshipwon": 4
    },
    {
        "id": 2,
        "playerName": "Virat Kohali",
        "from": "RCB",
        "price": "8.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "teamFullName": "Royal Challengers Bangalore",
        "teamlogopath": "rcb.png",
        "teamchampionshipwon": 1
    },
    {
        "id": 3,
        "playerName": "Yuvraj Singh",
        "from": "MI",
        "price": "1.50 Cr",
        "isPlaying": false,
        "description": "Batsman",
        "teamFullName": "Mumbai Indians",
        "teamlogopath": "mi.png",
        "teamchampionshipwon": 4
    }, {
        "id": 4,
        "playerName": "Chris Morris",
        "from": "RR",
        "price": "16.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "teamFullName": "Rajastan Royals",
        "teamlogopath": "rr.png",
        "teamchampionshipwon": 2
    },
    {
        "id": 5,
        "playerName": "Glenn James Maxwell",
        "from": "KXIP",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "teamFullName": "Kings XI Panjab",
        "teamlogopath": "KP.png",
        "teamchampionshipwon": 1
    },
    {
        "id": 6,
        "playerName": "Sunil Narine",
        "from": "KKR",
        "price": "6.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "teamFullName": "Kolkata Knight Riders",
        "teamlogopath": "kkr.png",
        "teamchampionshipwon": 1
    }, {
        "id": 7,
        "playerName": "Rishabh Pant",
        "from": "DC",
        "price": "6.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "teamFullName": "Delhi Capitals ",
        "teamlogopath": "dc.jpg",
        "teamchampionshipwon": 0
    }, {
        "id": 8,
        "playerName": "Jos Buttler",
        "from": "RR",
        "price": "6.50 Cr",
        "isPlaying": true,
        "description": "Bolwer",
        "teamFullName": "Rajastan Royals",
        "teamlogopath": "rr.png",
        "teamchampionshipwon": 2
    }, {
        "id": 9,
        "playerName": "Mohammed Siraj",
        "from": "RCB",
        "price": "6.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "teamFullName": "Royal Challengers Bangalore",
        "teamlogopath": "rcb.png",
        "teamchampionshipwon": 1
    }, {
        "id": 10,
        "playerName": "Shikhar Dhawan",
        "from": "KXIP",
        "price": "6.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "teamFullName": "Kings XI Panjab",
        "teamlogopath": "KP.png",
        "teamchampionshipwon": 1
    }, {
        "id": 11,
        "playerName": "Kieron Pollard",
        "from": "MI",
        "price": "6.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "teamFullName": "Mumbai Indians",
        "teamlogopath": "mi.png",
        "teamchampionshipwon": 4
    }, {
        "id": 12,
        "playerName": "Ishan Kishan",
        "from": "MI",
        "price": "6.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "teamFullName": "Mumbai Indians",
        "teamlogopath": "mi.png",
        "teamchampionshipwon": 4
    }, {
        "id": 13,
        "playerName": "Prithvi Shaw",
        "from": "MI",
        "price": "6.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "teamFullName": "Mumbai Indians",
        "teamlogopath": "mi.png",
        "teamchampionshipwon": 4
    }
];

if (window.localStorage.getItem("iplteaminfo") === null || window.localStorage.getItem("iplteaminfo") === undefined || window.localStorage.getItem("iplteaminfo") === "") {
    window.localStorage.setItem("iplteaminfo", JSON.stringify(data));
}

let iplFullTeamDetails = JSON.parse(window.localStorage.getItem("iplteaminfo"));

let teams = [];

for (let i = 0; i < iplFullTeamDetails.length; i++) {
    if (!teams.includes(iplFullTeamDetails[i].from)) {
        teams.push(iplFullTeamDetails[i].from);
    }
}

let tt = ``;
let searchkey = "";

showdata();

function showdata() {
    tt = ``;
    if (searchkey !== "" && searchkey !== null) {
        tt = `<h4>Team:   ` + searchkey.toUpperCase() + ` </h4>`;
        let count=0;
        for (let j = 0; j < iplFullTeamDetails.length; j++) {
            if (iplFullTeamDetails[j].from.toUpperCase() === searchkey.toUpperCase()) {
                tt = tt + `<div>
                ` + iplFullTeamDetails[j].playerName + `
                </div>`;
                count++;
            }
        }
        if (count==0) {
            tt = tt + `<div>
            No Players found for the team
        </div>`;
        }
    } else {
        for (let i = 0; i < teams.length; i++) {
            let obj = null;
            for (let j = 0; j < iplFullTeamDetails.length; j++) {
                if (iplFullTeamDetails[j].from === teams[i]) {
                    obj = iplFullTeamDetails[j];
                    break;
                }
            }
            tt = tt + `<div class="card" onclick="details(` + i + `)">
        <img src="`+ obj.teamlogopath + `" alt="` + obj.from + `" style="width:30%;height:85%">
        <div class="container"><h4><b>`+ obj.teamFullName + `</b></h4>
        </div>
        </div>`;

        }
    }
    document.getElementById("idcard").innerHTML = tt;
}

function details(i) {
    window.localStorage.setItem("detail", teams[i]);
    location.href = "teamdetail.html";
}

function search() {
    searchkey = "";
    tt="";
    searchkey = document.getElementById("searchId").value;
    
    showdata();
}


