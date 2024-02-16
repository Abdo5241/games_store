// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import axios from "axios";
const url = "https://api.rawg.io/api/games"
import 'swiper/css/bundle';


const swiper = new Swiper('.swiper', {
    hashNavigation: true,
    autoplay: {
        delay: 0,
    },

    speed: 2500,
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
            slidesPerView: 3,
            spaceBetween: 10
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 4,
            spaceBetween: 7
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 5,
            spaceBetween: 10
        },
        // when window width is >= 1280px
        1280: {
            slidesPerView: 6,
            spaceBetween: 10
        }
    }
});


axios.get(url, {
    params: {
        key: "60afdc9c17194d88bc8b7b14c3e2690c",
        page_size: 40,
        genres: "fighting",
        // ordering: "metacritic"
    }
})
    .then((res) => {
        let dataobj = res.data.results
        let games = document.querySelector("#swiper-home-2");
        dataobj.forEach((game, index) => {
            games.innerHTML += generateGame(game)
        });

        console.log(dataobj);
    }).catch((err) => {
        console.log(err);
    });



const generateGame = (game) => {
    return `
    <div class="swiper-slide" style=" transition-timing-function: linear;">
    <img src="${game.background_image}" alt="" class="swiper-home-1">
</div>
    `
}