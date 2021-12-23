const openButton = document.querySelector(".openModal");
const closeButton = document.querySelector(".close");
const popUp = document.querySelector(".popup");

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
popUp.addEventListener("click", closeModal);

function openModal() {
  popUp.style.display = "block";
  document.body.style.overflow = "hidden";
  document.querySelector("#header_sticky").style.display = "none";
}

function closeModal() {
  popUp.style.display = "none";
  document.body.style.overflow = "";
  document.querySelector("#header_sticky").style.display = "flex";
}
