import axios from "axios";
const url = "https://api.rawg.io/api/games"
let games = document.querySelector("#swiper-video");

setTimeout(() => {

    axios.get(url, {
        params: {
            key: "612070ac113041ea814773b5a589e9f3",
            ordering: "playtime"

        }
    })
        .then((res) => {
            let dataobj = res.data.results
            dataobj.sort((a, b) => {
                const playTimeA = a.playtime;
                const playTimeB = b.playtime;
                return playTimeA - playTimeB;
            });


            dataobj.forEach((game, index) => {
                if (index >= 1) {
                    return;
                }
                games.innerHTML += generateGame(game)
            });

            console.log(dataobj);
        }).catch((err) => {
            console.log(err);
        });
},);


const generateGame = (game) => {
    return `
    <div>
        <img class="w-[400px]" src="${game._pk}" alt="">
        <h1>${game.pk}</h1>
                            </div>
    
    `

}

