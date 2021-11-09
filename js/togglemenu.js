const swup = new Swup();

swup.on('willReplaceContent', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
});

const menu = function (element) {
    return document.querySelector(element);
}

let menuToggle = menu('.nav-toggle');
let body = menu('body');

menuToggle.addEventListener('click', function () {
    body.classList.toggle('open');
});

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '2rem',
    delay: 600
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '2rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '2rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '2rem',
    delay: 600
});


