import axios from "axios";
const url = "https://api.rawg.io/api/games"
let games = document.querySelector("#Trending_page");

let skeletons = document.createElement("div");
skeletons.setAttribute("id", "top_skeletons")
skeletons.classList.add(...["grid", "grid-cols-1", "md:grid-cols-3", "lg:grid-cols-5", "gap-5"]);


const generateSkeleton = () => {
    for (let index = 0; index < 40; index++) {
        skeletons.innerHTML += `<div class="">
        <div class="w-[212px] h-[270px] rounded-lg" style="animation: pulse-bg 1s infinite;"></div>
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
    };
    return skeletons;
}

games.appendChild(generateSkeleton());


setTimeout(() => {

    axios.get(url, {
        params: {
            key: "ac0b0fc08aed42e99d286cf3e4d5e552",
            page_size: 40,
            genres: "shooter",
            // ordering: "metacritic"
        }
    })
        .then((res) => {
            let dataobj = res.data.results
            dataobj.forEach((game, index) => {
                games.innerHTML += generateGame(game)
            });
            games.classList.add(...["grid", "grid-cols-1", "md:grid-cols-3", "lg:grid-cols-5", "gap-5"])
            games.removeChild(document.getElementById("top_skeletons"))

            console.log(dataobj);
        }).catch((err) => {
            console.log(err);
        });
}, 3000);


const generatePrice = () => {
    const price = Math.floor((Math.random() * 70) + 1);
    return price > 35 ? price : 29;

}
const generateGame = (game) => {
    return `
    <div class='flex flex-col'>
    <img src="${game.background_image}" alt="" class="slide_img_top w-[300px]">
    <div class="text-white mt-3 space-y-4">
    <a href="#" class="font-normal">${game.name}</a>
    <div class="slide_text">
    <a href="#" class="button_all"> -20%</a>
    <a href="#" class="line-through font-light">$100</a>
    <a href="#" class=" font-normal text-[14px]">$${generatePrice()}</a>
    </div>
    </div>
    </div>
    `
};