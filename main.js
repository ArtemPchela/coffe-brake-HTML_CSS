function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".nav-items");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}

const highlightR = document.querySelector(".fa-chevron-right");
const highlightL = document.querySelector(".fa-chevron-left");
const switchOff = document.querySelectorAll(".content-btn");
const light = "off";

const addClassHover = () => {
    highlightR.classList.add(light);
    highlightL.classList.add(light);
}

const removeClassHover = () => {
    highlightR.classList.remove(light);
    highlightL.classList.remove(light);
}

switchOff.forEach((n) => {
    n.addEventListener("mouseover", addClassHover);
    n.addEventListener("mouseout", removeClassHover);
});

