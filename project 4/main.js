//Select element function
const selectElement=(element)=>document.querySelector(element);

let menuToggler=selectElement(".menu-toggle")
let body=selectElement("body")

menuToggler.addEventListener("click",function (){
    body.classList.toggle("open")
})


// Scroll reveal 

window.sr=ScrollReveal();
sr.reveal('.animate-left',{
    origin:'left',
    duration:1000,
    distance:'25rem',
    delay:300
})
sr.reveal('.animate-right',{
    origin:'right',
    duration:1000,
    distance:'25rem',
    delay:600
})
sr.reveal('.animate-top',{
    origin:'top',
    duration:900,
    // distance:'25rem',
    delay:600
})
sr.reveal('.logo',{
    origin:'top',
    duration:300,
    distance:'25rem',
    delay:300
})
sr.reveal('.animate-buttom',{
    origin:'bottom',
    duration:1000,
    distance:'25rem',
    delay:600
})
sr.reveal(".nav-item",{
    interval: 200
})