import axios from "axios";
const url = "https://api.rawg.io/api/games?key=ac0b0fc08aed42e99d286cf3e4d5e552&&page_size=5"




axios.get(url, {
    params: {
        key: "ac0b0fc08aed42e99d286cf3e4d5e552",
        page_size: 5,
        genres: "adventure",
        // ordering: "metacritic"
    }
})
    .then((res) => {
        let dataobj = res.data.results
        let games = document.querySelector("#most-popular");
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
    < <div class="img">
    <img class="hover_MostPopular  slide_img_top" src="${game.background_image}" alt="" ">
    <div class="text-white pt-3">
        <a class="" href="#">${game.name}</a>
        <div class="pt-3 space-x-3 slide_text ">
        <a href="#" class="button_all"> -50%</a>
        <a class="line-through text-[14px] font-light" href="#">$39.99</a>
        <a class="font-normal text-[14px]" href="#">$${generatePrice()}</a>
        </div>
    </div>
    </div>
    `
}