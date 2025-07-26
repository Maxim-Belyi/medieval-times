import Swiper from 'swiper';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

export function initSlider() {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Autoplay, Pagination],
        slidesPerView: 'auto',
        spaceBetween: 1,
        effect: 'slide',
        loop: true,
        speed: 800,

        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
} 