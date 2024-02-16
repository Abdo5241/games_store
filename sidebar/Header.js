let header = document.querySelector("header")


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