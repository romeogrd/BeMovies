const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    loop: false,
    slidesPerView: '4',
  
    // If we need pagination
   
  
    // Navigation arrows
    navigation: {
      nextEl: '.button-next1',
      prevEl: '.button-prev1',
    },
  
    
  });





  /* --------------------------------------------------------------------- */

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


/* ------------------------*/

  const swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    loop: true,
    slidesPerView: '4',
  
   
  
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


const modalMovies = document.querySelector(".modalMovies");
const slide1 = document.querySelector(".slide1");
const closeModalMovies = document.querySelector(".closeModalMovies");


slide1.addEventListener("click", () => {
    modalMovies.showModal();
});


closeModalMovies.addEventListener("click", () => {
    modalMovies.close();
});
