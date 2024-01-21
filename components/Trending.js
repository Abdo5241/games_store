import axios from "axios";
const url = "https://api.rawg.io/api/games"
let games = document.querySelector("#trending");




let skeletons = document.createElement("div");
skeletons.setAttribute("id", "trending_skeletons")
skeletons.classList.add("flex", "flex-col")

const generateSkeleton = () => {
    for (let index = 0; index < 5; index++) {
        skeletons.innerHTML += `<div class="flex items-center hover_TopSellers">
    <div class="rounded-[4px] w-[90px] h-[63px]" style="animation: pulse-bg 1s infinite;"></div>
    <div class="text-white flex flex-col gap-2 pl-4">
        <span class="Name-box w-[100px] h-[10px] rounded-full" style="animation: pulse-bg 1s infinite;"></span>
        <div class="flex items-center gap-2">
        <span class="button_all w-[40px] h-[20px] rounded-lg" style="animation: pulse-bg 1s infinite;"></span>
        <span class="price-box w-[15px] h-[10px] rounded-full" style="animation: pulse-bg 1s infinite;"></span>
        <span class="text-[13px] w-[20px] h-[10px] rounded-full" style="animation: pulse-bg 1s infinite;"></span>
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
            page_size: 5,
            // ordering: "added",
            genres: "family"
        }
    })
        .then((res) => {

            let dataobj = res.data.results
            dataobj.forEach((game, index) => {
                games.innerHTML += generateGame(game)
            });

            games.removeChild(document.getElementById('trending_skeletons'));


            console.log(dataobj);
        }).catch((err) => {
            console.log(err);
        });
}, 3000)


const generatePrice = () => {
    const price = Math.floor((Math.random() * 70) + 1);
    return price > 35 ? price : 29;

}
const generateGame = (game) => {
    return `
    <div class="flex items-center  hover_TopSellers">
    <img class="rounded-[4px] w-[90px] h-[65px]" src="${game.background_image}" alt="" ">
    <div class="text-white flex flex-col gap-2 pl-4">
        <a class="Name-box" href="#">${game.name}</a>
        <div class="flex items-center gap-2">
        <a class="button_all" href="#">-50%</a>
        <a class="price-box" href="#">$59.99</a>
        <a class="text-[13px]" href="#">$${generatePrice()}</a>
        </div>
    </div>
    </div>
    `
}