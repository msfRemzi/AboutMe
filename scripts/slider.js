const swiper = new Swiper('.swiper', {
    slidesPerView: 2.5,
    spaceBetween: 48,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        1200: {
            slidesPerView: 2.5,
            spaceBetween: 48,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 28,
        },
        320: {
            slidesPerView: 1.5,
            spaceBetween: 18,
        }
    }
}
);