const menu = document.querySelector('#mobile-menu')
const menuLinks =document.querySelector('.navbar__menu')

const overlay = document.querySelector(".overlay");

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

    overlay.classList.toggle("overlay-is-active");
})

overlay.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

    overlay.classList.toggle("overlay-is-active");
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
