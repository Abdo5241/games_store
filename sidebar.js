let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let modal = document.querySelector("#modal");
let closed = true;
let body_overlay = document.getElementById("body_overlay");

// btn.onclick = () => {
//     toggleSidebar()

// };

function toggleSidebar(e) {
    e.stopPropagation()
    sidebar.classList.toggle("active");
    if (closed === true) {
        closed = false
        btn.classList.add("rotate-180")
        // body_overlay.classList.add("bg-red-500")
    }
    else {
        closed = true
        btn.classList.remove("rotate-180")
        // body_overlay.classList.add("hidden")
        // body_overlay.classList.remove("bg-red-500")
    }
}
function closeSideBar(e) {
    e.stopPropagation()
    sidebar.classList.remove("active");
    closed = true
    btn.classList.remove("rotate-180")

}



