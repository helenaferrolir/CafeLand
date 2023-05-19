function btn_menu() {    
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

const listItems = document.querySelectorAll("li.i")
for (let item of listItems) {
    item.addEventListener("click", function () {
        const dicaId = item.getAttribute("id")
        window.location.href = `/dicas-geraiss?id=${dicaId}`
    })
}


function menu() {
    const id = "dica1torneio"
    const li = document.querySelectorAll("nav li.i")
    for (let ii in li) {
        ii.addEventListener("click", function () {
            const i = ii.getAttribute("id")
            if (i == id) {
                window.location.href = `/dicas-torneio?id=${id}`
            }
        })
    }

}





