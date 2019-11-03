let homeTeam = "";
let homeScore = "";
let awayTeam = "";
let awayScore = "";
let test;
const url = "http://www.nfl.com/liveupdate/game-center/2019102100/2019102100_gtd.json"

const app = new Vue({
    el: '#test',
    data: {
        togo: '',
        down: '',
        clock: '',
        Hname: '',
        Aname: '',
        HFS: '',
        AFS: '',
        HSS: '',
        ASS: '',
        HTS: '',
        ATS: '',
        HFS: '',
        AFS: '',
        HST: '',
        AST: ''
    },
    created () {
        fetch("http://www.nfl.com/liveupdate/scores/scores.json")
        .then((resp) => resp.json()
        .then((data) => {
            let chosenGame = data[Object.keys(data)[0]];
            time = chosenGame.clock === null ? time = 0 : time = chosenGame.clock;
            down2 = chosenGame.down === null ? down2 = 0 : down2 = chosenGame.down;
            yardToGo = chosenGame.togo === null ? yardToGo = 0 : yardToGo = chosenGame.togo;
            //homeTeam = 
            homeName = chosenGame.home.abbr;
            homeScoreTotal = chosenGame.home.score.T === null ? homeScoreTotal = 0 : homeScoreTotal = chosenGame.home.score.T;
            homeFirstScore = chosenGame.home.score['1'] === null ? homeFirstScore = 0 : homeFirstScore = chosenGame.home.score['1'];
            homeSecondScore = chosenGame.home.score['2'] === null ? homeSecondScore = 0 : homeSecondScore = chosenGame.home.score['2'];
            homeThirdScore = chosenGame.home.score['3'] === null ? homeThirdScore = 0 : homeThirdScore = chosenGame.home.score['3'];
            homeFourthScore = chosenGame.home.score['4'] === null ? homeFourthScore = 0 : homeFourthScore = chosenGame.home.score['4'];
            //awayTeam = 
            awayName = chosenGame.away.abbr;
            awayScoreTotal = chosenGame.away.score.T === null ? awayScoreTotal = 0 : awayScoreTotal = chosenGame.away.score.T;
            awayFirstScore = chosenGame.away.score['1'] === null ? awayFirstScore = 0 : awayFirstScore = chosenGame.away.score['1'];
            awaySecondScore = chosenGame.away.score['2'] === null ? awaySecondScore = 0 : awaySecondScore = chosenGame.away.score['2'];
            awayThirdScore = chosenGame.away.score['3'] === null ? awayThirdScore = 0 : awayThirdScore = chosenGame.away.score['3'];
            awayFourthScore = chosenGame.away.score['4'] === null ? awayFourthScore = 0 : awayFourthScore = chosenGame.away.score['4'];

            this.Hname = homeName;
            this.HST = homeScoreTotal;
            this.HFS = homeFirstScore;
            this.HSS = homeSecondScore;
            this.HTS = homeThirdScore;
            this.HFS = homeFourthScore;
            this.Aname = awayName;
            this.AST = awayScoreTotal;
            this.AFS = awayFirstScore;
            this.ASS = awaySecondScore;
            this.ATS = awayThirdScore;
            this.AFS = awayFourthScore;
            this.clock = time;
            this.down = down2;
            this.togo = yardToGo;
            }))
    }
})

