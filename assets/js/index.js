
window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
})



function loading() {
    document.querySelector(".telaLoad").style.display = "none";
    document.querySelector(".container").style.display = "block";
}
