var ImagemAtual = "img/menu_burguer";
var ImagemProxima = "img/menuburguer.png";
var ImagemAtual2 = "img/logo_menu.png";
var ImagemProxima2 = "img/logomenu.png";

window.addEventListener("scroll", function(){
    let header = document.querySelector('header')
    header.classList.toggle('rolagem', window.scrollY > 0)
    document.getElementById("dentro-menu").src = ImagemAtual;
    ImagemAtual = ImagemProxima;
    document.getElementById("icone").src = ImagemAtual2;
    ImagemAtual2 = ImagemProxima2;
})

document.querySelectorAll('.navmenu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementsByClassName('menu-toggle').checked = false;
    });
});

function toggleMenu() {
    var navMenu = document.querySelector('.navmenu');
    navMenu.classList.toggle('active');
}

document.querySelectorAll('.navmenu li').forEach(link => {
    link.addEventListener('click', () => {
        var navMenu = document.querySelector('.navmenu');
        navMenu.classList.remove('active');
    });
});


