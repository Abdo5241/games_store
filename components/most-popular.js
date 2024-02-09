import axios from "axios";
const url = "https://api.rawg.io/api/games"
let games = document.querySelector("#most-popular");

let skeletons = document.createElement("div")
skeletons.setAttribute("id", "most-popular-skeletons")
skeletons.classList.add("flex")

const generateSkeleton = () => {
    for (let index = 0; index < 5; index++) {
        skeletons.innerHTML += `
        <div class="mx-2">
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
        </div>
        `
    }
    return skeletons;
}
games.appendChild(generateSkeleton());


axios.get(url, {
    params: {
        key: "9f19b59eaa71485ba341f04700dbe158",
        page_size: 5,
        genres: "massively-multiplayer",
        // ordering: "metacritic"
    }
})
    .then((res) => {
        let dataobj = res.data.results

        dataobj.forEach((game, index) => {
            games.innerHTML += generateGame(game)
        });
        games.removeChild(document.getElementById("most-popular-skeletons"))

        console.log(dataobj);
    }).catch((err) => {
        console.log(err);
    });

const generatePrice = () => {
    const price = Math.floor((Math.random() * 70) + 1)
    return price > 35 ? price : 74;
}
const generateGame = (game) => {
    return `
    <div class="img">
    <img class="hover_MostPopular  slide_img_top" src="${game.background_image}" alt="" ">
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


