document.addEventListener("DOMContentLoaded", function () {
    let swiper = new Swiper(".roadmap__slider", {
        loop: false,
        spaceBetween: 33,
        slidesPerView: 1,
        allowTouchMove: true,
        navigation: {
            nextEl: ".roadmap__slide-next",
            prevEl: ".roadmap__slide-prev",
        },
        breakpoints: {
            768: {
                spaceBetween: 33,
                slidesPerView: 2,
            },
            1000: {
                spaceBetween: 33,
                slidesPerView: 3,
            },
            1280: {
                spaceBetween: 50,
                slidesPerView: 4,
            },
        },
    });

    let buySwiper = new Swiper(".buy__slider", {
        loop: false,
        spaceBetween: 24,
        slidesPerView: 'auto',
        navigation: {
            nextEl: ".buy__slide-next",
            prevEl: ".buy__slide-prev",
        },
        breakpoints: {
            480: {
                spaceBetween: 40,
            },
            768: {
                spaceBetween: 40,
            },
            1000: {
                spaceBetween: 40,
                slidesPerView: 'auto',
            },
            1280: {
                spaceBetween: 40,
                slidesPerView: 6,
            },
        },
    });

    const copyButton = document.querySelector(".hero__block-btn");

    copyButton.addEventListener("click", () => {
        const dataAddress = copyButton.getAttribute("data-adress");
        navigator.clipboard.writeText(dataAddress);
    });
});

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
burger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
menu.addEventListener('click', (event) => {
    if (window.innerWidth < 768 && (event.target.tagName === 'A' || event.target.tagName === 'BUTTON')) {
        menu.classList.remove('active');
    }
});

function checkScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
window.addEventListener('load', checkScroll);
window.addEventListener('resize', checkScroll);
window.addEventListener('scroll', checkScroll);


document.addEventListener('click', function (event) {
    const charityOpen = document.querySelectorAll('.charity-open');
    const dropOpen = document.querySelectorAll('.drop-open');
    const vaucherOpen = document.querySelectorAll('.vaucher-open');
    const exchangeOpen = document.querySelectorAll('.exchange-open');

    const charity = document.querySelector('.charity');
    const drop = document.querySelector('.drop');
    const vaucher = document.querySelector('.vaucher');
    const exchange = document.querySelector('.exchange');

    const charityBlock = document.querySelector('.charity__inner');
    const dropBlock = document.querySelector('.drop__inner');
    const vaucherBlock = document.querySelector('.vaucher__inner');
    const exchangeBlock = document.querySelector('.exchange__inner');

    const charityActive = document.querySelector('.charity.active');
    const dropActive = document.querySelector('.drop.active');
    const vaucherActive = document.querySelector('.vaucher.active');
    const exchangeActive = document.querySelector('.exchange.active');

    const charityClose = document.querySelector('.charity__close');
    const dropClose = document.querySelector('.drop__close');
    const vaucherClose = document.querySelector('.vaucher__close');
    const exchangeClose = document.querySelector('.exchange__close');

    charityOpen.forEach(button => {
        if (button.contains(event.target)) {
            charity?.classList.add('active');
        }
    });
    dropOpen.forEach(button => {
        if (button.contains(event.target)) {
            drop?.classList.add('active');
        }
    });
    vaucherOpen.forEach(button => {
        if (button.contains(event.target)) {
            vaucher?.classList.add('active');
        }
    });
    exchangeOpen.forEach(button => {
        if (button.contains(event.target)) {
            exchange?.classList.add('active');
        }
    });

    if (charityBlock && !charityBlock.contains(event.target) && charityActive || charityClose && charityClose.contains(event.target)) {
        charity?.classList.remove('active');
    }
    if (dropBlock && !dropBlock.contains(event.target) && dropActive || dropClose && dropClose.contains(event.target)) {
        drop?.classList.remove('active');
    }
    if (vaucherBlock && !vaucherBlock.contains(event.target) && vaucherActive || vaucherClose && vaucherClose.contains(event.target)) {
        vaucher?.classList.remove('active');
    }
    if (exchangeBlock && !exchangeBlock.contains(event.target) && exchangeActive || exchangeClose && exchangeClose.contains(event.target)) {
        exchange?.classList.remove('active');
    }
});
