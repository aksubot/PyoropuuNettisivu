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



const button = document.querySelectorAll(".dropdown");

const hinnat = document.querySelectorAll(".hinnatCont3, .hinnatContSwitch3, .hinnatContNoSwitch2, .hinnatCont2, .hinnatContNoSwitch22");

const triangles = document.querySelectorAll(".triangle");

for(let i = 0; i < button.length; i++) button[i].onclick = function(){
    if(i == 5) {
        hinnat[4].classList.toggle("dropdown-active");
        triangles[4].classList.toggle("flip");
        return;
    }
    hinnat[i].classList.toggle("dropdown-active");
    triangles[i].classList.toggle("flip");
}
