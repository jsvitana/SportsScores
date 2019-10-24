let score = "";
let game = toString(2019102400)
//const url = "http://www.nfl.com/liveupdate/game-center/2019102100/2019102100_gtd.json"

fetch("http://www.nfl.com/liveupdate/scores/scores.json")
.then((resp) => resp.json()
.then((data) => {
    score = data;
    alert(score);
    }))