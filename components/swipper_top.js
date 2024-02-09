// import Swiffy Slider JS
import { swiffyslider } from 'swiffy-slider'
window.swiffyslider = swiffyslider;

window.addEventListener("load", () => {
    window.swiffyslider.init();
});

// import Swiffy Slider CSS
import "swiffy-slider/css"

let Slider_top = document.querySelector("#Slider_top_container")


const generateSlider = (Slider_topElement) => {
    return `
    <div
    class="rounded-xl slider-indicators-highlight swiffy-slider slider-item-show2-sm slider-item-ratio slider-item-ratio-21x9 slider-item-snapstart slider-nav-arrow slider-nav-touch slider-nav-autohide slider-nav-page slider-nav-autoplay slider-nav-autopause slider-indicators-outside  slider-nav-animation slider-nav-animation-zoomout slider-item-helper"
    data-slider-nav-autoplay-interval="50000">
    <ul class="slider-container rounded-lg ">
      <li class="relative">
        <div id="slide1" class="">
          <div class="overlay"></div>

          <img class="-mt-16" src="./img/img Slider top container/img1.jpg" alt="">
          <!-- text -->
          <div class="animate__animated animate__fadeIn absolute pl-[30px] text-white mt-[-380px] w-80 z-20 ">
            <h1 class="text-[14px] font-sans">EPISODE 08 // ACT I</h1>
            <h1 class="pt-5 text-[18px] font-sans">Wield the new twin-barrel Outlaw sniper in EPISODE 08 // ACT I.
            </h1>
          </div>
          <!-- end text -->
          <!-- button -->
          <div class="absolute pl-[30px] text-white mt-[-230px] w-80  space-y-2 z-20">
            <span class="text-[18px]">Free</span>
            <div class="flex items-center">
              <button class="bg-[#ff6b27] rounded-md py-2 px-4 hover:bg-[#c06b44]">Play For Free</button>
            </div>
          </div>
          <!-- end -->
          <!-- logo button -->
          <div id="logo ">
            <img class="z-20 absolute mt-[-500px] w-[130px] pl-[30px]   animate__animated animate__fadeInRight"
              src="./img/img Slider top container/logo/logo1.jpg" alt="">
          </div>
          <!-- end logo -->
        </div>
      </li>
      <li class="relative">
        <div id="slide2 ">
          <div class="overlay"></div>
          <img class="-mt-16 " src="./img/img Slider top container/img2.jpg" alt="">
          <!-- text -->
          <div class=" animate__animated animate__fadeIn absolute pl-[30px] text-white mt-[-400px] w-80 z-20">
            <h1 class="text-[14px] font-sans">Now Available</h1>
            <h1 class="pt-5 text-[18px] font-sans">Discover what it means to become Na’vi. Join other clans to
              protect Pandora from the formidable forces of the RDA.
            </h1>
          </div>
          <!-- end text -->
          <!-- button -->
          <div class="absolute pl-[30px] z-20 text-white mt-[-230px] w-96 space-y-2">
            <span class="font-medium">Startin at $69.99</span>
            <div class="flex items-center">
              <button class="bg-[#ff6b27] rounded-md py-2 px-4 hover:bg-[#c06b44]">BUY NOW</button>
              <span class="pl-16">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-7 h-7">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </span>
              <span class="text-[12px] pl-2">ADD TO CART</span>
            </div>

          </div>
          <!-- end -->
          <!-- logo -->
          <div class="">
            <img class="absolute z-20 mt-[-480px] w-[230px] ml-[22px] animate__animated animate__fadeInRight"
              src="./img/img Slider top container/logo/logo2.png" alt="">
          </div>
          <!-- end logo -->
        </div>
      </li>
      <li class="relative slide-visible">
        <div id="slide3">
          <div class="overlay"></div>
          <img class="-mt-10" src="./img/img Slider top container/img3.jpg" alt="">
          <!-- text -->
          <div class="absolute pl-[30px] text-white mt-[-390px] w-80 z-20">
            <h1 class="font-normal text-[17px]">Available March 8, 2024</h1>
            <h1 class="pt-5 text-[18px] font-sans">Tactical, beautiful, and wholly unique, the GOTY-winning sci-fi
              RTS returns with Homeworld 3.
            </h1>
          </div>
          <!-- end text -->
          <!-- button -->
          <div class="absolute z-20 pl-[30px] text-white mt-[-250px] w-96 space-y-2">
            <span class="font-medium">Startin at $39.99</span>
            <div class="flex items-center">
              <button class="bg-[#ff6b27] rounded-md py-2 px-4 hover:bg-[#c06b44]">Play For Free</button>
              <span class="pl-16">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-7 h-7">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </span>
              <span class="text-[12px] pl-2">ADD TO CART</span>
            </div>

          </div>
          <!-- end -->
          <!-- logo -->
          <div class="">
            <img class="absolute z-20 mt-[-520px] w-[200px]  ml-[30px] animate__animated animate__fadeInRight"
              src="./img/img Slider top container/logo/logo3.png" alt="">
          </div>
          <!-- end logo -->
        </div>
      </li>
      <li class="relative">
        <div id="slide4  ">
          <div class="overlay"></div>
          <img class="-mt-16 " src="./img/img Slider top container/img4.jpg" alt="">
          <!-- text -->
          <div class="absolute pl-[30px] text-white mt-[-380px] w-80 z-20">
            <h1 class="text-[14px] font-sans">Last Chance to Pre-Purchase</h1>
            <h1 class="pt-5 text-[18px] font-sans">Pre-purchase Deluxe Edition to get bonus content and up to
              three days of early access.
            </h1>
          </div>
          <!-- end text -->
          <!-- button -->
          <div class="absolute z-20 pl-[30px] text-white mt-[-230px] w-96 space-y-2">
            <span class="font-medium">Startin at $59.99</span>
            <div class="flex items-center ">
              <button class="bg-[#ff6b27] rounded-md py-2 px-4 hover:bg-[#c06b44]">Play For Free</button>
              <span class="pl-16">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-7 h-7  ">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </span>
              <span class="text-[12px] pl-2   ">ADD TO CART</span>
            </div>

          </div>
          <!-- end -->
          <!-- logo -->
          <div class="">
            <img class="absolute z-20 mt-[-480px] w-[200px] ml-[30px] animate__animated animate__fadeInRight"
              src="./img/img Slider top container/logo/logo4.png" alt="">
          </div>
          <!-- end logo -->
        </div>
      </li>
      <li class="relative">
        <div id="slide5 ">
          <img class="-mt-16 " src="./img/img Slider top container/img5.jpg" alt="">
          <!-- text -->
          <div class=" absolute pl-[30px] text-white mt-[-380px] w-80 z-20">
            <h1 class="text-[14px] font-sans">Coming February 16</h1>
            <h1 class="pt-5 text-[18px] font-sans">Pre-purchase Premium Edition and play up to three days early,
              plus get the Highness of the High Seas Pack.
            </h1>
          </div>
          <!-- end text -->
          <!-- button -->
          <div class="absolute pl-[30px] text-white mt-[-230px] w-96 space-y-2">
            <span class="font-medium">Startin at $59.99</span>
            <div class="flex items-center">
              <button class="bg-[#ff6b27] rounded-md py-2 px-4 hover:bg-[#c06b44]">Play For Free</button>
              <span class="pl-16">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-7 h-7">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </span>
              <span class="text-[12px] pl-2">ADD TO CART</span>
            </div>

          </div>
          <!-- end -->
          <!-- logo -->
          <div class="">
            <img class="absolute mt-[-480px] w-[230px] ml-[30px] animate__animated animate__fadeInRight"
              src="./img/img Slider top container/logo/logo5.png" alt="">
          </div>
          <!-- end logo -->
        </div>
      </li>
      <li class="relative">
        <div id="slide6">
          <div class="overlay"></div>
          <img class="-mt-28" src="./img/img Slider top container/img6.jpg" alt="">
          <!-- text -->
          <div class="absolute pl-[30px] text-white mt-[-420px] w-96 z-20">
            <h1 class="text-[14px] font-sans">EPISODE 08 // ACT I</h1>
            <h1 class="pt-5 text-[18px] font-sans">You are Star-Lord. The fate of the galaxy and the Guardians is
              in your hands. Time to show the universe what you’re made of. You got this. Probably.
            </h1>
          </div>
          <!-- end text -->
          <!-- button -->
          <div class="absolute z-20 pl-[30px] text-white mt-[-250px] w-96 space-y-2">
            <span class="font-medium">Startin at $59.99</span>
            <div class="flex items-center">
              <button class="bg-[#ff6b27] rounded-md py-2 px-4 hover:bg-[#c06b44]">Play For Free</button>
              <span class="pl-16">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-7 h-7">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </span>
              <span class="text-[12px] pl-2">ADD TO CART</span>
            </div>

          </div>
          <!-- end -->
          <!-- logo -->
          <div class="">
            <img class="absolute z-20 mt-[-500px] w-[150px] ml-[30px] animate__animated animate__fadeInRight"
              src="./img/img Slider top container/logo/logo6.png" alt="">
          </div>
          <!-- end logo -->
        </div>
      </li>
    </ul>

    <button type="button" class="slider-nav z-20"></button>
    <button type="button" class="slider-nav z-20 slider-nav-next"></button>


    <ul class="slider-indicators">
      <li class="active"></li>
      <li class=""></li>
      <li class=""></li>
      <li class=""></li>
      <li class=""></li>
      <li class=""></li>
    </ul>
  </div>
        
        `

}
Slider_top.innerHTML = generateSlider(Slider_top)
