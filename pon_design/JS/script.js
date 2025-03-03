
window.addEventListener('scroll', function() {
    const header = this.document.querySelector('#header');
    const headerHeight = header.offsetHeight;
    if ($(this).scrollTop() > 50) {
        header.classList.add('sticky');
        this.document.body.style.marginTop = headerHeight + 'px';
    } else {
        header.classList.remove('sticky');
        document.body.style.marginTop = '0';
    }
});

document.addEventListener('DOMContentLoaded', function() {
var swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay:3000,
        disableOnInteraction: false,
    },
});
});

var backToTopBtn = document.getElementById('js-pagetop'); 
window.onscroll = function() {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
    ) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
}
    backToTopBtn.onclick = function() {
        window.screenTop({top: 0,behavior: 'smooth'});
    };



$(document).ready(function() {
    $('.nav__toggle').on('click', function() {
        $(this).toggleClass('show');
        $('.top-pg__header .nav').toggleClass('show');
        $('.header .nav').toggleClass('show');
        $('.top-pg__header .nav.header .nav').fadeToggle(4000);
        $('.top-pg__header .nav.header .nav').toggleClass('show');
    });
});