window.addEventListener("scroll", function(){
    let header = document.querySelector('header')
    header.classList.toggle('rolagem', window.scrollY > 0)
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


