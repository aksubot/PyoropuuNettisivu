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



const KButton = document.querySelectorAll(".Kdropdown, .Hdropdown");


const containers = document.querySelectorAll(".hinnatCont3, .hinnatContSwitch3, .hinnatContNoSwitch2, .hinnatCont2, .hinnatContNoSwitch22, .ktCont");




const triangles = document.querySelectorAll(".triangle");


for(let i=0; i< KButton.length; i++) KButton[i].onclick = function(){

    if(i==KButton.length-1) {
        containers[i].classList.toggle("dropdown-active");
        triangles[i].classList.toggle("flip");
        return;
    }

    if(KButton[i].classList.contains("Kdropdown") && containers[i-1].classList.contains("dropdown-active")){
        containers[i-1].classList.toggle("dropdown-active");
        triangles[i-1].classList.toggle("flip");
    }
    else if(KButton[i].classList.contains("Hdropdown") && containers[i+1].classList.contains("dropdown-active")){
        containers[i+1].classList.toggle("dropdown-active");
        triangles[i+1].classList.toggle("flip");
    }
    

    containers[i].classList.toggle("dropdown-active");
    triangles[i].classList.toggle("flip");
}


