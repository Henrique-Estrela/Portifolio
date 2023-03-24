window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    var header2 = document.querySelector(".navbar");
    var header3 = document.querySelector(".navbar-p");
    var seta = document.querySelector(".seta a img");

    header.classList.toggle("navfixed", window.scrollY > 0);
    header2.classList.toggle("navfixed", window.scrollY > 0);
    header3.classList.toggle("navfixed", window.scrollY > 0);


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





function loading() {
    document.querySelector(".telaLoad").style.display = "none";
    document.querySelector(".container").style.display = "block";
}


const btn = document.querySelector('#submit');

btn.addEventListener("click", function(e){
    if (!document.querySelector('#email').value == "" && !document.querySelector('#name').value == "" && !document.querySelector('#message').value == ""){

        console.log(document.querySelector('.boxenviar input').value)
        Swal.fire({
            title: 'Seu Email foi enviado com sucesso!',
            icon: 'success',
            iconColor: '#87007d',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            color: '#87007d',
            showConfirmButton: false

            
        }).then((result) => {
        document.querySelector('contactForm').submit();
    })};
})           



function navbar() {
    var nav = document.querySelector('.navbar-p');
    let checkboxmenu = document.querySelector('#checkbox-menu'); 
     if (checkboxmenu.checked == false) {
        nav.classList.add('active');
        
    }else{
        nav.classList.remove('active');
    }
}


