const navLinks = document.getElementById('navLinks');
const divBurger = document.getElementById('divBurger');
const lis = document.querySelectorAll('.navLinks li')

divBurger.addEventListener('click', ()=>{
    navLinks.classList.toggle('navLinksActive');

    lis.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation = '';
        }
        else{
            link.style.animation = `liAnimation 0.6s ease forwards ${index/7+0.5}s`;
        }
    });

    divBurger.classList.toggle('x');
});