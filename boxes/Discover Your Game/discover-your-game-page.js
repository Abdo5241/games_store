import axios from "axios";
const url = "https://api.rawg.io/api/games?key=612070ac113041ea814773b5a589e9f3&&page_size=40"
let games = document.querySelector("#discover-your-game_page");

let skeletons = document.createElement("div");
skeletons.setAttribute("id", "discover-your-game_page_skeletons")
skeletons.classList.add(...["grid", "grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-10", "md:gap-4", "lg:gap-10", "px-3"])

const generateSkeleton = () => {
    for (let index = 0; index < 40; index++) {
        skeletons.innerHTML += `<div class="mx-2">
        <div class="w-[200px] h-[270px] rounded-lg md:w-[300px] md:h-[250px] lg:w-[270px] lg:h-[320px]" style="animation: pulse-bg 1s infinite;"></div>
        <div class="text-white mt-3 space-y-4">
            <span class="font-normal w-[50px] h-[7px] rounded-md" style="animation: pulse-bg 1s infinite;""></span>
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
    };
    return skeletons;
}

games.appendChild(generateSkeleton());


setTimeout(() => {
    axios.get(url)
        .then((res) => {
            let dataobj = res.data.results
            dataobj.forEach((game, index) => {
                games.innerHTML += generateGame(game)
            });

            games.classList.add(...["grid", "grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-2", "md:gap-3", "lg:gap-3", "px-6",])
            games.removeChild(document.getElementById("discover-your-game_page_skeletons"))

            console.log(dataobj);
        }).catch((err) => {
            console.log(err);
        });
},);

const generatePrice = () => {
    const price = Math.floor((Math.random() * 70) + 1)
    return price > 35 ? price : 74;
}
const generateGame = (game) => {
    return `
    <div class='flex flex-col mx-auto '>
    <img src="${game.background_image}" alt="" class="slide_img_top">
    <div class="text-white mt-3 space-y-4">
    <a href="#" class="font-normal">${game.name}</a>
    <div class="slide_text">
    <a href="#" class="button_all Discount %">-${generatePrice()}%</a> 
    <a href="#" class="line-through text-[14px] Discount- font-light">$${generatePrice()}</a>
    <a class="text-[16px]" href="#">$${generatePrice()}</a>
    </div>
    </div>
    </div>
    `
};