const button = document.getElementById("button");
const input = document.getElementById("input")
const header = document.getElementById("header")
const intro = document.getElementById("intro")
const main = document.getElementById("main")



document.addEventListener("keydown", (event) => {
    header.textContent=event.which
    key.textContent=event.key
    code.textContent=event.code
    which.textContent=event.which

    intro.style.display = "none"
    main.style.display = "block"
})