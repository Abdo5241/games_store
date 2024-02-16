// import Swiffy Slider JS
import { swiffyslider } from 'swiffy-slider'
window.swiffyslider = swiffyslider;

window.addEventListener("load", () => {
  window.swiffyslider.init();
});

// import Swiffy Slider CSS
import "swiffy-slider/css"

let Slider_sm = document.querySelector("#Slider_top_sm")


const generateSlider = (Slider_smElement) => {
  return `
  <div
  class="mx-auto container swiffy-slider slider-item-reveal slider-item-show2-sm  slider-item-nogap slider-item-nosnap-touch slider-nav-autoplay slider-indicators-round slider-indicators-outside slider-indicators-highlight slider-indicators-sm slider-nav-animation slider-nav-animation-appear slider-nav-mousedrag"
  data-slider-nav-autoplay-interval="10000000" style="--swiffy-slider-animation-duration: 0.99s;">
  <ul class="slider-container rounded-lg  ">
    <li class="relative">
      <div id="slide1" class="">
        <div class="overlay_sm_2"></div>

        <img class="w-full rounded-lg " src="img/img Slider top container/img-sm-1.jpg" alt="">
        <!-- text -->
        <div
          class="animate__animated animate__fadeIn absolute pl-[10px] md:pl-[25px] text-white mt-[-200px] md:mt-[-400px]  w-72 md:w-[560px] z-20 ">
          <h1 class="text-[14px] md:text-[24px] font-sans">EPISODE 08 // ACT I</h1>
          <h1 class="pt-5 text-[14px] md:text-[26px] font-sans">Wield the new twin-barrel Outlaw sniper in
            EPISODE 08 // ACT I.

          </h1>
        </div>
        <!-- end text -->
        <!-- button -->
        <div class="absolute pl-[25px] z-20 text-white hidden md:block mt-[-150px] w-[450px] space-y-2">
          <div class="flex items-center">
            <button class="bg-[#ff6b27] text-[18px] rounded-md py-2 px-4 md:py-4 md:px-6 hover:bg-[#c06b44]">PLAY FOR FREE</button>
            <span class="pl-16">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </span>
            <span class="text-[18px] pl-2">ADD TO CART</span>
          </div>

        </div>
        <!-- end -->
        <!-- logo button -->
        <div id="logo ">
          <img
            class="z-20 absolute mt-[-320px] md:mt-[-750px] w-[70px] md:w-[180px] pl-[10px] md:pl-[25px]   animate__animated animate__fadeInRight"
            src="./img/img Slider top container/logo/logo1.jpg" alt="">
        </div>
        <!-- end logo -->
      </div>
    </li>
    <li class="relative">
      <div id="slide2">
        <div class="overlay_sm_2"></div>
        <img class="w-full rounded-lg md:" src="img/img Slider top container/img-sm-2.jpg" alt="">
        <!-- text -->
        <div class=" absolute pl-[10px] md:pl-[25px] text-white mt-[-200px] md:mt-[-400px] w-72 md:w-[560px] z-20">
          <h1 class="text-[14px] md:text-[24px] font-sans">Now Available</h1>
          <h1 class="pt-5 text-[14px] md:text-[26px] font-sans">Discover what it means to become Na’vi. Join
            other clans to
            protect Pandora from the formidable forces of the RDA.
          </h1>
        </div>
        <!-- end text -->
        <!-- button -->
        <div class="absolute pl-[25px] z-20 text-white hidden md:block mt-[-150px] w-[450px] space-y-2">
          <span class="font-medium text-[20px]">Startin at $69.99</span>
          <div class="flex items-center">
            <button class="bg-[#ff6b27] text-[20px] rounded-md py-2 px-4 md:py-4 md:px-8 hover:bg-[#c06b44]">BUY NOW</button>
            <span class="pl-16">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </span>
            <span class="text-[18px] pl-2">ADD TO CART</span>
          </div>

        </div>
        <!-- end -->
        <!-- logo -->
        <div class="">
          <img
            class="z-20 absolute mt-[-320px] md:mt-[-630px] w-[180px] md:w-[300px] pl-[10px] md:pl-[20px]  animate__animated animate__fadeInRight"
            src="./img/img Slider top container/logo/logo2.png" alt="">
        </div>
        <!-- end logo -->
      </div>
    </li>
    <li class="relative slide-visible">
      <div id="slide3" class="">
        <div class="overlay_sm_2"></div>

        <img class="w-full rounded-lg md:" src="img/img Slider top container/img-sm-3.jpg" alt="">
        <!-- text -->
        <div
          class="animate__animated animate__fadeIn absolute pl-[10px] md:pl-[25px] text-white mt-[-200px] md:mt-[-400px]  w-72 md:w-[560px] z-20 ">
          <h1 class="text-[14px] md:text-[24px] font-sans">EPISODE 08 // ACT I</h1>
          <h1 class="pt-5 text-[14px] md:text-[26px] font-sans">Wield the new twin-barrel Outlaw sniper in
            EPISODE 08 // ACT I.

          </h1>
        </div>
        <!-- end text -->
        <!-- button -->
        <div class="absolute pl-[25px] z-20 text-white hidden md:block mt-[-150px] w-[400px] space-y-2">
          <div class="flex items-center">
            <button class="bg-[#ff6b27] rounded-md py-2 px-4 md:py-4 md:px-8 hover:bg-[#c06b44]">PLAY FOR FREE</button>
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
        <!-- logo button -->
        <div id="logo ">
          <img
            class="z-20 absolute mt-[-320px] md:mt-[-630px] w-[130px] md:w-[300px] pl-[10px] md:pl-[25px]   animate__animated animate__fadeInRight"
            src="img/img Slider top container/logo/logo3.png" alt="">
        </div>
        <!-- end logo -->
      </div>
    </li>
    <li class="relative">
      <div id="slide4" class="">
        <div class="overlay_sm_2"></div>

        <img class="w-full rounded-lg md:" src="img/img Slider top container/img-sm-4.jpg" alt="">
        <!-- text -->
        <div
          class="animate__animated animate__fadeIn absolute pl-[10px] md:pl-[25px] text-white mt-[-200px] md:mt-[-400px]  w-72 md:w-[560px] z-20 ">
          <h1 class="text-[14px] md:text-[24px] font-sans">EPISODE 08 // ACT I</h1>
          <h1 class="pt-5 text-[14px] md:text-[26px] font-sans">Wield the new twin-barrel Outlaw sniper in
            EPISODE 08 // ACT I.

          </h1>
        </div>
        <!-- end text -->
        <!-- button -->
        <div class="absolute pl-[25px] z-20 text-white hidden md:block mt-[-150px] w-[400px] space-y-2">
          <div class="flex items-center">
            <button class="bg-[#ff6b27] rounded-md py-2 px-4 md:py-4 md:px-8 hover:bg-[#c06b44]">PLAY FOR FREE</button>
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
        <!-- logo button -->
        <div id="logo ">
          <img
            class="z-20 absolute mt-[-320px] md:mt-[-630px] w-[130px] md:w-[300px] pl-[10px] md:pl-[25px]   animate__animated animate__fadeInRight"
            src="img/img Slider top container/logo/logo4.png" alt="">
        </div>
        <!-- end logo -->
      </div>
    </li>
    <li class="relative">
      <div id="slide5" class="">
        <div class="overlay_sm_2"></div>

        <img class="w-full rounded-lg md:" src="img/img Slider top container/img-sm-5.jpg" alt="">
        <!-- text -->
        <div
          class="animate__animated animate__fadeIn absolute pl-[10px] md:pl-[25px] text-white mt-[-200px] md:mt-[-400px]  w-72 md:w-[560px] z-20 ">
          <h1 class="text-[14px] md:text-[24px] font-sans">EPISODE 08 // ACT I</h1>
          <h1 class="pt-5 text-[14px] md:text-[26px] font-sans">Wield the new twin-barrel Outlaw sniper in
            EPISODE 08 // ACT I.

          </h1>
        </div>
        <!-- end text -->
        <!-- button -->
        <div class="absolute pl-[25px] z-20 text-white hidden md:block mt-[-150px] w-[400px] space-y-2">
          <div class="flex items-center">
            <button class="bg-[#ff6b27] rounded-md py-2 px-4 md:py-4 md:px-8 hover:bg-[#c06b44]">PLAY FOR FREE</button>
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
        <!-- logo button -->
        <div id="logo ">
          <img
            class="z-20 absolute mt-[-320px] md:mt-[-670px] w-[150px] md:w-[350px] pl-[10px] md:pl-[25px]   animate__animated animate__fadeInRight"
            src="img/img Slider top container/logo/logo5.png" alt="">
        </div>
        <!-- end logo -->
      </div>
    </li>
    <li class="relative">
      <div id="slide6" class="">
        <div class="overlay_sm_2"></div>

        <img class="w-full rounded-lg md:" src="img/img Slider top container/img-sm-6.jpg" alt="">
        <!-- text -->
        <div
          class="animate__animated animate__fadeIn absolute pl-[10px] md:pl-[25px] text-white mt-[-200px] md:mt-[-400px]  w-72 md:w-[560px] z-20 ">
          <h1 class="text-[14px] md:text-[24px] font-sans">EPISODE 08 // ACT I</h1>
          <h1 class="pt-5 text-[14px] md:text-[26px] font-sans">Wield the new twin-barrel Outlaw sniper in
            EPISODE 08 // ACT I.

          </h1>
        </div>
        <!-- end text -->
        <!-- button -->
        <div class="absolute pl-[25px] z-20 text-white hidden md:block mt-[-150px] w-[400px] space-y-2">
          <div class="flex items-center">
            <button class="bg-[#ff6b27] rounded-md py-2 px-4 md:py-4 md:px-8 hover:bg-[#c06b44]">PLAY FOR FREE</button>
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
        <!-- logo button -->
        <div id="logo ">
          <img
            class="z-20 absolute mt-[-320px] md:mt-[-630px] w-[120px] md:w-[300px] pl-[10px] md:pl-[25px]   animate__animated animate__fadeInRight"
            src="img/img Slider top container/logo/logo6.png" alt="">
        </div>
        <!-- end logo -->
      </div>
    </li>
  </ul>

  <button type="button" class="slider-nav z-20"></button>
  <button type="button" class="slider-nav z-20 slider-nav-next"></button>

  <ul class="slider-indicators">
    <li class="active" style=""></li>
    <li class=""></li>
    <li class=""></li>
    <li class=""></li>
    <li class=""></li>
    <li class=""></li>
  </ul>
</div>
        `

}
Slider_sm.innerHTML = generateSlider(Slider_sm)
