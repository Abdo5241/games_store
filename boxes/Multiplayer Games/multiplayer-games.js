// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import axios from "axios";
const url = "https://api.rawg.io/api/games"
import 'swiper/css/bundle';
let games = document.querySelector("#multiplayer-games");


const swiper = new Swiper('.swiper', {
    hashNavigation: true,
    // autoplay: {
    //     delay: 1000,
    // },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.custom-button-next',
        prevEl: '.custom-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 5,
            spaceBetween: 10
        }
    }
});



let skeletons = document.createElement("div");
skeletons.setAttribute("id", "multiplayer-games_skeletons")
skeletons.classList.add("flex")

const generateSkeleton = () => {
    for (let index = 0; index < 5; index++) {
        skeletons.innerHTML += `<div class="mx-1">
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
            key: "612070ac113041ea814773b5a589e9f3",
            page_size: 20,
            genres: "casual",
            // ordering: "metacritic"
        }
    })
        .then((res) => {
            let dataobj = res.data.results

            dataobj.forEach((game, index) => {
                games.innerHTML += generateGame(game)
            });
            games.removeChild(document.getElementById("multiplayer-games_skeletons"));

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
    <div class="swiper-slide" data-hash="multiplayer-games-swiper-${game.id}">
    <img src="${game.background_image}" alt="" class="slide_img_bottom">
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
}