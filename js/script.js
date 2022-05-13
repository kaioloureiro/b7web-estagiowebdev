function responsividade() {
    if (window.innerWidth <= 1300) {
        document.querySelector('#nav').style.paddingTop = '10px'
        document.querySelector('#nav').style.paddingBottom = '10px'
    } else {
        document.querySelector('#nav').style.paddingTop = '16px'
        document.querySelector('#nav').style.paddingBottom = '16px'
    }
}

window.addEventListener('resize', responsividade)