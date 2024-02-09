// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import axios from "axios";
const url = "https://api.rawg.io/api/games"
import 'swiper/css/bundle';


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
            spaceBetween: 15
        }
    }
});


axios.get(url, {
    params: {
        key: "9f19b59eaa71485ba341f04700dbe158",
        page_size: 20,
        genres: "casual",
        // ordering: "metacritic"
    }
})
    .then((res) => {
        let dataobj = res.data.results
        let games = document.querySelector("#multiplayer-games");
        dataobj.forEach((game, index) => {
            games.innerHTML += generateGame(game)
        });

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
    <div class="swiper-slide" data-hash="racing-swiper-${game.id}">
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
}