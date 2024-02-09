let ImgTop = document.querySelector("#container-1")
let container = document.querySelector("#container-1");
let layers = document.querySelectorAll(".layer");
// img
let modalM = document.querySelector("#modal2")
let modal = document.querySelector("#modal")
let header = document.querySelector("header")

let nums = document.querySelectorAll(".nums .num")
let section = document.querySelector("Numbers")
const accordion = document.querySelectorAll(".accordion")

// img
document.querySelector("body").addEventListener("mousemove", (Event) => {
    let x = Event.screenX / -25;
    let y = Event.screenY / -25;
    ImgTop.style.transform = `translate(${x}px,${y}px)`
})

container.onmousemove = function (event) {
    let x = event.pageX;
    let y = event.pageY;

    layers[0].style.transform = 'translate(' + x / 70 * - 2 + 'px, ' + y / 70 * - 2 + 'px)';
    layers[1].style.transform = 'translate(' + x / 60 * - 4 + 'px, ' + y / 90 * - 4 + 'px)';
    layers[2].style.transform = 'translate(' + x / 80 * - 6 + 'px, ' + y / 100 * - 6 + 'px)';
};
// end img 

// header


const btnHome = document.querySelectorAll(".btn-home");

for (const btn of btnHome) {
    btn.addEventListener("click", function () {
        const current = document.querySelector(".active");
        if (current) {
            current.classList.remove("active");
        }
        this.classList.add("active");
    });
}


window.addEventListener("scroll", (e) => {
    if (window.scrollY > 300) {
        header.classList.add("Scroll-header")
        header.classList.add("animate__animated")
        header.classList.add("animate__fadeInDown")
        header.style.position = "sticky"
    } else {
        header.classList.remove("Scroll-header")
        header.classList.remove("animate__animated")
        header.classList.remove("animate__fadeInDown")
    }
})
// end header

// box Numbers
// window.onscroll = function () {
//     if (window.scrollY >= section.offsetTop) {
//         nums.forEach((num) => startCount(num));
//     }
// };

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    },)
}
startCount(document.querySelectorAll(".nums .num")[0])
// end Numbers



// faq
accordion.forEach(accordion => {
    const svgAccordion = accordion.querySelector(".svg-accordion")
    const answer = accordion.querySelector(".answer")

    accordion.addEventListener('click', () => {
        svgAccordion.classList.toggle('active')
        answer.classList.toggle('active')
    })

});
// end faq






// modal footer
// const generateModal = (modal) => {
//     return `

//     `
// }
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




