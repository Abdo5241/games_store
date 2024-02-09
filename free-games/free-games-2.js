import axios from "axios";
const url = "https://api.rawg.io/api/games"

let games = document.querySelector("#free-games2");


let skeletons = document.createElement("div");
skeletons.setAttribute("id", "free-games2_skeletons")
skeletons.classList.add("flex", "flex-row")

const generateSkeleton = () => {
    for (let index = 0; index < 3; index++) {
        skeletons.innerHTML += `<div class="mx-2 ">
        <div class="w-[360px] h-[200px] rounded-lg" style="animation: pulse-bg 1s infinite;"></div>
        <div class="text-white mt-3 space-y-4">
            <span class="font-normal w-[50px] h-[7px] rounded-md style="animation: pulse-bg 1s infinite;""></span>
            <div class="flex flex-col gap-3">
            <div class="flex gap-4">
                <span  class="button_all w-[20px] h-[7px] rounded-s-full "style="animation: pulse-bg 1s infinite;"></span>
            </div>    
                <span class=" font-normal text-[14px] w-[80px] h-[7px] rounded-s-full"style="animation: pulse-bg 1s infinite;"></span>
                <span class=" font-normal text-[14px] w-[40px] h-[7px] rounded-s-full"style="animation: pulse-bg 1s infinite;"></span>
            </div>
        </div>
        </div>`
    };
    return skeletons;
}

games.appendChild(generateSkeleton());



setTimeout(() => {

    axios.get(url, {
        params: {
            key: "9f19b59eaa71485ba341f04700dbe158",
            genres: "arcade",
            page_size: 3,
        }
    })
        .then((res) => {
            let dataobj = res.data.results
            dataobj.sort((a, b) => {
                const playTimeA = a.playtime;
                const playTimeB = b.playtime;
                return playTimeA - playTimeB;
            });
            games.removeChild(document.getElementById("free-games2_skeletons"))

            dataobj.forEach((game, index) => {
                if (index >= 5) {
                    return;
                }
                games.innerHTML += generateGame(game)
            });

            console.log(dataobj);
        }).catch((err) => {
            console.log(err);
        });
});


const generateGame = (game) => {
    return `

            <div class="pt-10">
            <img class="Free_Game2" src="${game.background_image}" alt="" width="390px">
            <div class="text-white space-y-2 pt-3">
            <div>
                <a class="text-free " href="#">BASE GAME</a>
            </div>
            <a href="#">${game.name}</a>
            <div>
                <a href="#">Free</a>
            </div>
            </div>
            </div>


    `
}