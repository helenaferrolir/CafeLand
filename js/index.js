function btn_menu() {
    const tracos = document.querySelector('img.img-menu')
    const nav = document.querySelector('nav')

    const menuDesktop = document.querySelector('.menu-desktop')

    if (nav.classList.contains('menu') != true) {
        nav.classList.add('menu')
        menuDesktop.style.display = 'block'
    } else {
        nav.classList.remove('menu')
        menuDesktop.style.display = 'none'
    }


}

function refresh() {
    //screen.width 
    const menuDesktop = document.querySelector('.menu-desktop')
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 850) {
            menuDesktop.style.display = 'flex'
        } else {
            menuDesktop.style.display = 'none'
        }
    })

}
