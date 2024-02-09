let Header = document.querySelector("#Header")


const generateHeader = (HeaderElement) => {
    return `
    <div class="px-10 py-4 w-full flex items-center justify-between">
    <div class="pl-48 flex items-center">
        <input id="nav_toggle"
            class="w-[400px] relative text-white bg-[#202020] pl-10 p-5 rounded-lg h-6 outline-0 focus:bg-[#282828]"
            type="text" placeholder="Search store">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-5 h-5 text-white absolute ml-2 ">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>

    </div>

    <div class="text-white space-x-4 flex items-center">
        <a href="game-buy/game-buy.html"> <button
                class="bg-[#ff6b27] py-1 px-2 rounded-md transition hover:bg-orange-500 ">Get
                The App</button>
        </a>

        <a href="/login/Login.html"><button
                class="bg-[#ff6b27] py-1 px-6 rounded-md transition hover:bg-orange-500">Login</button>
        </a>


        <a class="hover-links2" href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="" style="width: 24px; height: 24px;">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
        </a>

        <a class="hover-links2" href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="" style="width: 24px; height: 24px;">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg></a>
        <!-- User -->
        <div>
            <img class="rounded-full" src="./img/u1.jpeg" alt="" width="40px">
        </div>
        <!-- END User -->
    </div>
</div>
    `

}
Header.innerHTML = generateHeader(Header);
