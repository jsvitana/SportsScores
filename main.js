let homeTeam = "";
let homeScore = "";
let awayTeam = "";
let awayScore = "";
//const url = "http://www.nfl.com/liveupdate/game-center/2019102100/2019102100_gtd.json"

const app = new Vue({
    el: '#test',
    data: {
        score: ''
    },
    created () {
        fetch("http://www.nfl.com/liveupdate/scores/scores.json")
        .then((resp) => resp.json()
        .then((data) => {
            let chosenGame = data[Object.keys(data)[0]];
            //homeTeam = 
            homeScore = chosenGame.home.score.T;
            //awayTeam = 
            awayScore = chosenGame.away.score.T;
            this.score = homeScore + "-" + awayScore;
            }))
    }
})

