function btn_menu() {
    const tracos = document.querySelector('img.img-menu')
    const nav = document.querySelector('nav')
    if (nav.classList) {
        nav.classList.toggle('menu')
    } else {
        nav.className += 'menu'
    }
}