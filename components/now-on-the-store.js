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
        key: "ac0b0fc08aed42e99d286cf3e4d5e552",
        page_size: 15,
        genres: "strategy",
        // ordering: "metacritic"
    }
})
    .then((res) => {
        let dataobj = res.data.results
        let games = document.querySelector("#Now-on-the-store-swiper");
        dataobj.forEach((game, index) => {
            games.innerHTML += generateGame(game)
        });

        console.log(dataobj);
    }).catch((err) => {
        console.log(err);
    });

const generatePrice = () => {
    const price = Math.floor((Math.random() * 70) + 1);
    return price > 40 ? price : 29;

}
const generateGame = (game) => {
    return `
    <div class="swiper-slide" data-hash="nowx-swiper-${game.id}">
    <img src="${game.background_image}" alt="" class="slide_img_top">
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
}