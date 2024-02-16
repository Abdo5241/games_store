

let footer = document.querySelector("#footer")

const generatefooter = (footer) => {
    return `
    <footer class="text-[15px]">

    <div class="text-white pt-20 space-y-16">

        <ul class="flex justify-center  gap-5">
            <!-- discord -->
            <li><a class=" text-2xl py-[10px] px-[10px]  duration-[400ms] bg-[#5965F1] hover:bg-[#6a75f0]   rounded-full"
                    href=""><i class="fa-brands fa-discord"></i></a></li>
            <!-- end discord -->
            <!-- facebook -->
            <li><a class=" text-2xl py-[9px] px-[12px]  duration-[400ms] bg-[#0B66FF] hover:bg-[#568ded]   rounded-full"
                    href=""><i class="fa-brands fa-facebook"></i></a>
            </li>
            <!-- end facebook -->
            <!-- Twitter -->
            <li><a class=" text-2xl py-[9px] px-[11px]  duration-[400ms] bg-[#1FA0F1] hover:bg-[#6bc1f7]   rounded-full"
                    href=""><i class="fa-brands fa-twitter"></i></a></li>
            <!-- end Twitter -->
            <!-- instagram -->
            <li><a class=" text-2xl py-[9px] px-[12px]  duration-[400ms] bg-[#6D45C2] hover:bg-[#855ddc]   rounded-full"
                    href=""><i class="fa-brands fa-instagram"></i></a>
            </li>
            <!-- end instagram -->
            <!-- telegram -->
            <li><a class=" text-2xl py-[9px] px-[12px] duration-[400ms] bg-[#1e1e1e] hover:bg-[#282727]  rounded-full"
                    href=""><i class="fa-brands fa-x-twitter"></i></a>
                <!-- end telegram -->
            </li>
        </ul>


        <div class="space-y-20">
            <p class="flex justify-center">Copyright © 2022 .<span onclick="openModalM()"
                    class="text-[#EF6838] cursor-pointer">Cyber Arcade ツ</span>.
                All Rights
                Reserved.
            </p>
            <ul class="relative flex items-center justify-center gap-7 pb-16">
                <li class="footer-links" onclick="openModalSecurity()">Security</li>
                <li class="footer-links" onclick="openModalSecurity()">Terms</li>
                <li class="footer-links" onclick="openModalSecurity()">Privacy</li>
            </ul>
        </div>
    </div>
    <!-- modal 1 -->
    <div id="modal" onclick="closeModalDody()" class="text-[16px] md:text-[18px] lg:text-[14px]" style="display: none;">
        <div onclick="event.stopPropagation()" class="content space-y-5 animate__animated animate__fadeInDown ">
            <div class="flex justify-between border-b border-[#cdcdcdbe] pb-3">
                <h1 class="text-2xl font-[600]">Security</h1>
                <svg onclick="closeModalSvg()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="  Remove-from-cart w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </div>
            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            <li>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim
            </li>
            <li>Quidam lisque persius interesset his et, Lisque persius interesset his et, in quot quidam
                persequeris vim, ad mea essent possim
            </li>
            <li>In quot quidam persequeris vim, ad mea essent possim Quidam lisque persius interesset
                his et.
            </li>
            <li>Quidam lisque persius interesset his et, Lisque persius interesset his et.
            </li>
            <li>Interesset his et, Lisque persius interesset his et, in quot quidam persequeris vim, ad mea
                essent possim
            </li>
            <li>Persius interesset his et, Lisque persius interesset his et, in quot quidam persequeris vim, ad
                mea essent possim
            </li>
            <li>Quot quidam persequeris vim Quidam lisque persius interesset his et, Lisque persius interesset
                his et, in quot quidam persequeris
            </li>
        </div>
    </div>

    <!-- modal 2 -->
    <div id="modal2" onclick="closeModalMDody()" class="flex justify-centertext-[16px]" style="display: none;">
        <div onclick="event.stopPropagation()" class="content space-y-5 animate__animated animate__fadeInDown ">
            <div class="flex justify-between border-b border-[#cdcdcdbe] pb-3">
                <h1 class="text-2xl font-[600]">Cyber Arcade <span class="text-orange-500">ツ</span></h1>
                <svg onclick="closeModalMSvg()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="  Remove-from-cart w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </div>
            <li>Thank you for choosing    <span class="">Cyber
            Arcade <span class="font-[600] text-orange-500">ツ </span></span>
            as your gaming destination. Follow us on social media to stay updated
                on the latest games and deals.</li>

        </div>
    </div>

    <!-- modal 3  -->
    <div id="modal" onclick="closeModalDody()" class="text-[16px]" style="display: none;">
        <div onclick="event.stopPropagation()" class="content space-y-5 animate__animated animate__fadeInDown ">
            <div class="flex justify-between border-b border-[#cdcdcdbe] pb-3">
                <h1 class="text-2xl font-[600]">Security</h1>
                <svg onclick="closeModalSvg()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="  Remove-from-cart w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </div>
            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            <li>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim
            </li>
            <li>Quidam lisque persius interesset his et, Lisque persius interesset his et, in quot quidam
                persequeris vim, ad mea essent possim
            </li>
            <li>In quot quidam persequeris vim, ad mea essent possim Quidam lisque persius interesset
                his et.
            </li>
            <li>Quidam lisque persius interesset his et, Lisque persius interesset his et.
            </li>
            <li>Interesset his et, Lisque persius interesset his et, in quot quidam persequeris vim, ad mea
                essent possim
            </li>
            <li>Persius interesset his et, Lisque persius interesset his et, in quot quidam persequeris vim, ad
                mea essent possim
            </li>
            <li>Quot quidam persequeris vim Quidam lisque persius interesset his et, Lisque persius interesset
                his et, in quot quidam persequeris
            </li>
        </div>
    </div>

    <!-- modal 4 -->
    <div id="modal" onclick="closeModalDody()" class="text-[16px]" style="display: none;">
        <div onclick="event.stopPropagation()" class="content space-y-5 animate__animated animate__fadeInDown ">
            <div class="flex justify-between border-b border-[#cdcdcdbe] pb-3">
                <h1 class="text-2xl font-[600]">Security</h1>
                <svg onclick="closeModalSvg()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="  Remove-from-cart w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </div>
            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</p>
            <li>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim
            </li>
            <li>Quidam lisque persius interesset his et, Lisque persius interesset his et, in quot quidam
                persequeris vim, ad mea essent possim
            </li>
            <li>In quot quidam persequeris vim, ad mea essent possim Quidam lisque persius interesset
                his et.
            </li>
            <li>Quidam lisque persius interesset his et, Lisque persius interesset his et.
            </li>
            <li>Interesset his et, Lisque persius interesset his et, in quot quidam persequeris vim, ad mea
                essent possim
            </li>
            <li>Persius interesset his et, Lisque persius interesset his et, in quot quidam persequeris vim, ad
                mea essent possim
            </li>
            <li>Quot quidam persequeris vim Quidam lisque persius interesset his et, Lisque persius interesset
                his et, in quot quidam persequeris
            </li>
        </div>
    </div>

</footer>

    `
}
footer.innerHTML = generatefooter(footer);


let modalM = document.querySelector("#modal2")
let modal = document.querySelector("#modal")
// modal.innerHTML = generateModal(modalM)

function closeModalMDody() {
    modal2.style.display = "none"
}
function closeModalMSvg() {
    modal2.style.display = "none"
}
function openModalM() {
    modal2.style.display = "flex"
}

function closeModalDody() {
    modal.style.display = "none"
}
function closeModalSvg() {
    modal.style.display = "none"
}
function openModalSecurity() {
    modal.style.display = "flex"
}
// end modal footer
