const navegacion= document.getElementById("navegacion")
const btnMenu= document.getElementById("btn_menu")
const bgMenu= document.getElementById("bg-menu")

btnMenu.addEventListener("click",()=>{
    navegacion.classList.toggle("toggle");
    bgMenu.classList.toggle("toggle-bg");

})
bgMenu.addEventListener("click",()=>{
    navegacion.classList.remove("toggle");
    bgMenu.classList.remove("toggle-bg");  

})