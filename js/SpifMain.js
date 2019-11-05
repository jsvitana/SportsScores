const url = "http://www.nfl.com/liveupdate/game-center/2019102100/2019102100_gtd.json"

const app = new Vue({
    el: '#FootballData',
    data: {
        temp: {},
        object: {
            togo: '',
            down: '',
            clock: '',
            Hname: 'test',
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
        }
    },
    created () {
        fetch("http://www.nfl.com/liveupdate/scores/scores.json")
        .then((resp) => resp.json()
        .then((data) => {
            this.temp = (data[Object.keys(data)[0]].home.abbr);
            
            let chosenGame = data[Object.keys(data)[3]];
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

            if(homeName == "JAC"){homeName = "Jacksonville Jaguars";}
            else if (homeName == "HOU"){homeName = "Houston Texans";}
            else if (homeName == "SF"){homeName = "San Francisco 49ers";}
            else if (homeName == "ARI"){homeName = "Arizona Cardinals";}
            else if (homeName == "BUF"){homeName = "Buffalo Bills";}
            else if (homeName == "WAS"){homeName = "Washington Redskins";}
            else if (homeName == "CAR"){homeName = "Carolina Panthers";}
            else if (homeName == "TEN"){homeName = "Tennessee Titans";}
            else if (homeName == "KC"){homeName = "Kansas City Chiefs";}
            else if (homeName == "MIN"){homeName = "Minnesota Vikings";}
            else if (homeName == "MIA"){homeName = "Miami Dolphins";}
            else if (homeName == "NYJ"){homeName = "New York Jets";}
            else if (homeName == "PHI"){homeName = "Philadelphia Eagles";}
            else if (homeName == "CHI"){homeName = "Chicago Bears";}
            else if (homeName == "PIT"){homeName = "Pittsburgh Steelers";}
            else if (homeName == "IND"){homeName = "Indianapolis Colts";}
            else if (homeName == "OAK"){homeName = "Oakland Raiders";}
            else if (homeName == "DET"){homeName = "Detroit Lions";}
            else if (homeName == "SEA"){homeName = "Seattle Seahawks";}
            else if (homeName == "TB"){homeName = "Tampa Bay Buccaneers";}
            else if (homeName == "DEN"){homeName = "Denver Broncos";}
            else if (homeName == "CLE"){homeName = "Cleveland Browns";}
            else if (homeName == "LAC"){homeName = "Los Angeles Chargers";}
            else if (homeName == "GB"){homeName = "Green Bay Packers";}
            else if (homeName == "BAL"){homeName = "Baltimore Ravens";}
            else if (homeName == "NE"){homeName = "New England Patriots";}
            else if (homeName == "NYG"){homeName = "New York Giants";}
            else if (homeName == "DAL"){homeName = "Dallas Cowboys";}
            else if (homeName == ""){homeName = "";}
            else if (homeName == ""){homeName = "";}
            else if (homeName == ""){homeName = "";}
            else if (homeName == ""){homeName = "";}
            //else{homeName = "An Error has occured";}

            if(awayName == "JAC"){awayName = "Jacksonville Jaguars";}
            else if (awayName == "HOU"){awayName = "Houston Texans";}
            else if (awayName == "SF"){awayName = "San Francisco 49ers";}
            else if (awayName == "ARI"){awayName = "Arizona Cardinals";}
            else if (awayName == "BUF"){awayName = "Buffalo Bills";}
            else if (awayName == "WAS"){awayName = "Washington Redskins";}
            else if (awayName == "CAR"){awayName = "Carolina Panthers";}
            else if (awayName == "TEN"){awayName = "Tennessee Titans";}
            else if (awayName == "KC"){awayName = "Kansas City Chiefs";}
            else if (awayName == "MIN"){awayName = "Minnesota Vikings";}
            else if (awayName == "MIA"){awayName = "Miami Dolphins";}
            else if (awayName == "NYJ"){awayName = "New York Jets";}
            else if (awayName == "PHI"){awayName = "Philadelphia Eagles";}
            else if (awayName == "CHI"){awayName = "Chicago Bears";}
            else if (awayName == "PIT"){awayName = "Pittsburgh Steelers";}
            else if (awayName == "IND"){awayName = "Indianapolis Colts";}
            else if (awayName == "OAK"){awayName = "Oakland Raiders";}
            else if (awayName == "DET"){awayName = "Detroit Lions";}
            else if (awayName == "SEA"){awayName = "Seattle Seahawks";}
            else if (awayName == "TB"){awayName = "Tampa Bay Buccaneers";}
            else if (awayName == "DEN"){awayName = "Denver Broncos";}
            else if (awayName == "CLE"){awayName = "Cleveland Browns";}
            else if (awayName == "LAC"){awayName = "Los Angeles Chargers";}
            else if (awayName == "GB"){awayName = "Green Bay Packers";}
            else if (awayName == "BAL"){awayName = "Baltimore Ravens";}
            else if (awayName == "NE"){awayName = "New England Patriots";}
            else if (awayName == "NYG"){awayName = "New York Giants";}
            else if (awayName == "DAL"){awayName = "Dallas Cowboys";}
            else if (awayName == ""){awayName = "";}
            else if (awayName == ""){awayName = "";}
            else if (awayName == ""){awayName = "";}
            else if (awayName == ""){awayName = "";}
            //else{awayName = "An Error has occured";}
            
            this.object.Hname = homeName;
            this.object.HST = homeScoreTotal;
            this.object.HFS = homeFirstScore;
            this.object.HSS = homeSecondScore;
            this.object.HTS = homeThirdScore;
            this.object.HFS = homeFourthScore;
            this.object.Aname = awayName;
            this.object.AST = awayScoreTotal;
            this.object.AFS = awayFirstScore;
            this.object.ASS = awaySecondScore;
            this.object.ATS = awayThirdScore;
            this.object.AFS = awayFourthScore;
            this.object.clock = time;
            this.object.down = down2;
            this.object.togo = yardToGo;
            }))
    }
})

