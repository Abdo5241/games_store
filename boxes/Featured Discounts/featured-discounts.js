import axios from "axios";
const url = "https://api.rawg.io/api/games"

let games = document.querySelector("#featured-discounts");


let skeletons = document.createElement("div");
skeletons.setAttribute("id", "featured-discounts-skeletons")
skeletons.classList.add("flex", "mx-auto", "flex-col", "lg:flex-row", "gap-2")

const generateSkeleton = () => {
    for (let index = 0; index < 3; index++) {
        skeletons.innerHTML += `<div class="pt-5">
        <div class="w-[450px] h-[200px] md:w-[700px] md:h-[220px] lg:w-[345px] lg:h-[210px] rounded-lg " style="animation: pulse-bg 1s infinite;"></div>
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
            key: "60afdc9c17194d88bc8b7b14c3e2690c",
            page_size: 3,
            ordering: "action",
            genres: "board-games"
        }
    })
        .then((res) => {
            let dataobj = res.data.results
            dataobj.sort((a, b) => {
                const playTimeA = a.playtime;
                const playTimeB = b.playtime;
                return playTimeA - playTimeB;
            });
            games.removeChild(document.getElementById("featured-discounts-skeletons"))

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
},);


const generatePrice = () => {
    const price = Math.floor((Math.random() * 70) + 1)
    return price > 35 ? price : 74;
}


const generateGame = (game) => {
    return `
            <div class="pt-10">
            <img class="slide_img_Discounts " src="${game.background_image}" alt="">
            <div class="text-white space-y-2 pt-3">
            <div>
                <a class="text-free " href="#">BASE GAME</a>
            </div>
            <a href="#">${game.name}</a>
            <div class=" space-x-1">
            <a href="#" class="button_all Discount %">-${generatePrice()}%</a> 
            <a href="#" class="line-through text-[14px] Discount- font-light">$${generatePrice()}</a>
            <a class="text-[16px]" href="#">$${generatePrice()}</a>
            </div>
            </div>
            </div>
    `
}