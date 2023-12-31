// Script responsavel pela automação do menu hamburger

const btnMobile = document.getElementById('btn-mobile');
// const >> declara a variavel no uso do decorrer do codigo

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
        if(active) {
            event.currentTarget.setAttribute('arial-label', 'Fechar Menu');
        } else {
            event.currentTarget.setAttribute('arial-label', 'Abrir Menu');
        }
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile;addEventListener('touchstart', toggleMenu)