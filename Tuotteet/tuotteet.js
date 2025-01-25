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



const hinnatButton = document.querySelectorAll(".Hdropdown");
const ktButton = document.querySelectorAll(".Kdropdown");

const hinnat = document.querySelectorAll(".hinnatCont3, .hinnatContSwitch3, .hinnatContNoSwitch2, .hinnatCont2, .hinnatContNoSwitch22");
const kt = document.querySelectorAll(".ktCont");


const triangles = document.querySelectorAll(".triangle");

for(let i = 0; i < hinnatButton.length; i++) hinnatButton[i].onclick = function(){
    // if(i == 1) {
    //     hinnat[1].classList.toggle("dropdown-active");
    //     triangles[1].classList.toggle("flip");
    //     return;
    // }

    if(kt[i] == undefined){
        hinnat[i].classList.toggle("dropdown-active");

        if(triangles[i+i] == undefined){
            triangles[triangles.length-1].classList.toggle("flip");
            return;
        }
        triangles[i+i].classList.toggle("flip");

        return;
    }

    if(kt[i].classList.contains("dropdown-active")){ 
        kt[i].classList.toggle("dropdown-active");
        let x = i+1;
        triangles[x+i].classList.toggle("flip");
    }   
    hinnat[i].classList.toggle("dropdown-active");
    triangles[i+i].classList.toggle("flip");
}

for(let i = 0; i < ktButton.length; i++) ktButton[i].onclick = function(){
    // if(i == 1) {
    //     hinnat[1].classList.toggle("dropdown-active");
    //     triangles[1].classList.toggle("flip");
    //     return;
    // }
    if(hinnat[i].classList.contains("dropdown-active")){
        hinnat[i].classList.toggle("dropdown-active");
        triangles[i+i].classList.toggle("flip");
    }
    kt[i].classList.toggle("dropdown-active");
    let x = i+1;
    triangles[x+i].classList.toggle("flip");
}

