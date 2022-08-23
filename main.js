let ham = document.querySelector('.ham');
let hamimg = document.querySelector('.ham img');
let nav = document.querySelector('#nav-menu');

ham.addEventListener('click' , ()=>{
    if(nav.className == "nav-menu"){
        hamimg.setAttribute("src", "images/icon-close.svg");
        nav.classList.add('nav-menu-active');

        // nav.style.display ="flex";
        // nav.setAttribute("class" , "nav-menu");
        // nav.style.transition='0.3s';


    }
    else if(nav.className='nav-menu nav-menu-active'){
        hamimg.setAttribute("src", "images/icon-hamburger.svg");
        nav.classList.remove('nav-menu-active');

        // nav.style.display ="none";
        // nav.setAttribute("class" , "nav-menu nav-menuactive");



    }
});