let score = "";
//const url = "http://www.nfl.com/liveupdate/game-center/2019102100/2019102100_gtd.json"

const app = new Vue({
    el: '#test',
    data: {
        message: 'this'
    },
    created () {
        fetch("http://www.nfl.com/liveupdate/scores/scores.json")
        .then((resp) => resp.json()
        .then((data) => {
            this.message = data[Object.keys(data)[0]].home.abbr;
            }))
    }
})

