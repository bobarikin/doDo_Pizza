
const openButton = document.querySelector(".openModal");
const closeButton = document.querySelector(".close");
const popUp = document.querySelector(".popup");

openButton.addEventListener("click", function() {
    popUp.style.display = "block";
    document.body.style.overflow = "hidden";
});

closeButton.addEventListener("click", function() {
    popUp.style.display = "none";
    document.body.style.overflow = "";
});