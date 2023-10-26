

const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    loop: true,
    slidesPerView: '4',
    spaceBetween: 19,
    // If we need pagination


    // Navigation arrows
    navigation: {
        nextEl: '.button-next1',
        prevEl: '.button-prev1',
    },


});




/* ----------------------------SWIPER 2----------------------------------------- */

const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    loop: true,
    slidesPerView: '4',
    spaceBetween: 19,




    // Navigation arrows
    navigation: {
        nextEl: '.button-next2',
        prevEl: '.button-prev2',
    },


});


/* --------------------------SWIPER 3------------*/

const swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    loop: true,
    slidesPerView: '4',
    spaceBetween: 19,


    // Navigation arrows
    navigation: {
        nextEl: '.button-next3',
        prevEl: '.button-prev3',
    },


});

/*   -------------------------------------------------------------------------- */

const modalRegister = document.querySelector(".modalRegister");
const registerBtnMenu = document.querySelector(".registerBtnMenu");
const closeModal = document.querySelector(".closeModal");


registerBtnMenu.addEventListener("click", () => {
    modalRegister.showModal();
});


closeModal.addEventListener("click", () => {
    modalRegister.close();
});


/* --------------------------------------------------------------------------- */


const swiperSlides = document.querySelectorAll(".swiper-slide");
const modalMovies = document.querySelector(".modalMovies");
const closeModalMovies = document.querySelector(".closeModalMovies");

swiperSlides.forEach(slide => {
    slide.addEventListener("click", () => {
        modalMovies.showModal();
    });
});

closeModalMovies.addEventListener("click", () => {
    modalMovies.close();
});

/* -------------------------------------------------------------------------------

*/
