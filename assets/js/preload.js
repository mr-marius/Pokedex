//Preload
window.addEventListener("load", () => {
    const load = document.querySelector(".preload-container");

    setTimeout(() => {
        load.classList.add("preload-hidden")
    }, 4000);
})
