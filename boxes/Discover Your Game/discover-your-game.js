import axios from "axios";
const url = "https://api.rawg.io/api/games"
let games = document.querySelector("#discover-your-game");

let skeletons = document.createElement("div")
skeletons.setAttribute("id", "discover-your-game-skeletons")
skeletons.classList.add(...["grid", "grid-cols-2", "md:grid-cols-3", "lg:grid-cols-5", "gap-10", "md:gap-5", "lg:gap-3"])

const generateSkeleton = () => {
    for (let index = 0; index < 5; index++) {
        skeletons.innerHTML += `<div class="">
        <div class="w-[200px] h-[270px] rounded-lg lg:w-[205px]" style="animation: pulse-bg 1s infinite;"></div>
        <div class="text-white mt-3 space-y-4">
            <span class="font-normal w-[50px] h-[7px] rounded-md style="animation: pulse-bg 1s infinite;""></span>
            <div class="flex flex-col gap-3">
            <div class="flex gap-4">
                <span  class="button_all w-[40px] h-[7px] rounded-s-full "style="animation: pulse-bg 1s infinite;"></span>
                <span  class="line-through font-light w-[90px] h-[7px] rounded-s-full"style="animation: pulse-bg 1s infinite;"></span>
            </div>    
                <span class=" font-normal text-[14px] w-[180px] h-[7px] rounded-s-full"style="animation: pulse-bg 1s infinite;"></span>
                <span class=" font-normal text-[14px] w-[70px] h-[7px] rounded-s-full"style="animation: pulse-bg 1s infinite;"></span>
            </div>
        </div>
        </div>`
    }
    return skeletons;
}
games.appendChild(generateSkeleton());

setTimeout(() => {

    axios.get(url, {
        params: {
            key: "60afdc9c17194d88bc8b7b14c3e2690c",
            page_size: 5,
            genres: "simulation",
            // ordering: "metacritic"
        }
    })
        .then((res) => {
            let dataobj = res.data.results

            dataobj.forEach((game, index) => {
                games.innerHTML += generateGame(game)
            });
            games.classList.add(...["grid", "grid-cols-2", "md:grid-cols-3", "lg:grid-cols-5", "gap-2", "md:gap-3", "lg:gap-3",])
            games.removeChild(document.getElementById("discover-your-game-skeletons"))

            console.log(dataobj);
        }).catch((err) => {
            console.log(err);
        });
},)

const generatePrice = () => {
    const price = Math.floor((Math.random() * 70) + 1)
    return price > 35 ? price : 74;
}
const generateGame = (game) => {
    return `
    <div class="img">
    <img class="slide_img_top_one" src="${game.background_image}" alt="" ">
    <div class="text-white pt-3">
        <a class="" href="#">${game.name}</a>
        <div class="pt-3 space-x-[6px] slide_text ">
        <a href="#" class="button_all Discount %">-${generatePrice()}%</a> 
        <a href="#" class="line-through text-[14px] Discount- font-light">$${generatePrice()}</a>
        <a class="text-[16px]" href="#">$${generatePrice()}</a>
        </div>
    </div>
    </div>
    `
}


