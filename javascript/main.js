var burgerButton = document.querySelector('#burger-button');

var overlay = document.querySelector('#overlay');

var body = document.querySelector('body');

var mobileMenu = document.querySelector('#phone-menu');

burgerButton.addEventListener('click', function(e){
    e.preventDefault();

    this.classList.toggle('crossed');
    overlay.classList.toggle('visible');
    body.classList.toggle('no_scroll');
    mobileMenu.classList.toggle('opened');
})

