import axios from "axios";
const url = "https://api.rawg.io/api/games"

let games = document.querySelector("#free-games");


let skeletons = document.createElement("div");
skeletons.setAttribute("id", "free-games_skeletons")
skeletons.classList.add(...["grid", "mx-auto", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-10", "md:gap-3", "lg:gap-3", "xl:gap-5"])

const generateSkeleton = () => {
    for (let index = 0; index < 6; index++) {
        skeletons.innerHTML += `<div class="">
        <div class="w-[380px] h-[200px] md:w-[350px] lg:w-[315px] xl:w-[355px] rounded-lg" style="animation: pulse-bg 1s infinite;"></div>
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
            key: "612070ac113041ea814773b5a589e9f3",
            genres: "platformer",
            page_size: 6,
        }
    })
        .then((res) => {
            let dataobj = res.data.results
            dataobj.sort((a, b) => {
                const playTimeA = a.playtime;
                const playTimeB = b.playtime;
                return playTimeA - playTimeB;
            });
            games.classList.add(...["grid", "mx-auto", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-2", "md:gap-2", "lg:gap-3",])
            games.removeChild(document.getElementById("free-games_skeletons"))

            dataobj.forEach((game, index) => {
                if (index >= 6) {
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
            <div class="pt-10">
            <img class="slide_img_free" src="${game.background_image}" alt="">
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