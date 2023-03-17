

window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    var seta = document.querySelector(".seta a img");
    header.classList.toggle("navfixed", window.scrollY > 0);
    seta.classList.toggle("none", window.scrollY > 500);
})

const menuItems = document.querySelectorAll('.nav ul li a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top:to - 80,
        behavior: "smooth",
    })
};

const icon = document.querySelectorAll('.iconhab div.hIcons ');

icon.addEventListener("mouseover", (event) => {

    var element = event.target;
    const id2 = element.getAttribute('class');
    console.log(id2)
    // var modelicons =document.querySelector('.hIcons div');

    // modelicons.style.display = 'none'
});





function loading() {
    document.querySelector(".telaLoad").style.display = "none";
    document.querySelector(".container").style.display = "block";
}
