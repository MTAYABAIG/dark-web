// JavaScript
// const bars = document.getElementById("hamBurger");
const hamBurger = document.getElementById('bars-icon');
const headerMenu = document.getElementById("mobile-menu");
const closeIcon = document.getElementById("close-icon");
const curYear = document.getElementById('currentYear')

hamBurger.addEventListener("click", showHeaderMenu);

function showHeaderMenu() {
  headerMenu.classList.remove("hidden");
  hamBurger.classList.add("hidden");
  closeIcon.classList.remove("hidden");
}

closeIcon.addEventListener('click', closeHeaderMenu);

function closeHeaderMenu(){
    headerMenu.classList.add("hidden");
    hamBurger.classList.remove("hidden");
    closeIcon.classList.add("hidden");

}

window.onload = function() {
    var currentYear = new Date().getFullYear();
    curYear.innerText = ` ${  currentYear} `  ;
  };
