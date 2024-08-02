
function toggleMobileMenu(menu){
    menu.classList.toggle('open');
}

document.querySelector('.icon-hamburger').addEventListener("click", function(){
    document.body.classList.toggle('menu-open');
});