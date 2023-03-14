
window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    var seta = document.querySelector(".seta a img");
    header.classList.toggle("navfixed", window.scrollY > 0);
    seta.classList.toggle("none", window.scrollY > 500);
})



function loading() {
    document.querySelector(".telaLoad").style.display = "none";
    document.querySelector(".container").style.display = "block";
}
