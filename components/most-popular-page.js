import axios from "axios";
const url = "https://api.rawg.io/api/games"


axios.get(url, {
    params: {
        key: "ac0b0fc08aed42e99d286cf3e4d5e552",
        page_size: 40,
        genres: "adventure",
        // ordering: "metacritic"
    }
})
    .then((res) => {
        let dataobj = res.data.results
        let games = document.querySelector("#most-popular_page");
        dataobj.forEach((game, index) => {
            games.innerHTML += generateGame(game)
        });

        console.log(dataobj);
    }).catch((err) => {
        console.log(err);
    });

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