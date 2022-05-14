function responsividade() {
    let cont = document.getElementsByClassName('container')

    if (window.innerWidth <= 1200) {
        for(let i in cont) {
            cont[i].style.maxWidth = '900'
            cont[i].style.margin = '200'

        }
    } else {
        for(let i in cont) {
            cont[i].style.maxWidth = '1140'
        }
    }
}

window.addEventListener('resize', responsividade)