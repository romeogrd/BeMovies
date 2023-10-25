
const buttonMain = document.querySelector(".buttonMain");
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDkyZDk1Yjg3NGRlZmNlY2YxNDQ1MTM4YjdiZjk1NiIsInN1YiI6IjY1MzI4MTE1NmY4ZDk1MDBlYTU5MzJlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pymXNzJECjXs5m9U3sIp6xnvHRpr_gPnK2KZx_vvwjQ'
    }
  };

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



    buttonMain.addEventListener("click", function (e) {
        const inputMain = document.querySelector(".inputMain");

const swiperWrapper1 = document.querySelector(".swiper-wrapper1");
        const inputMainValue = inputMain.value ;
        
          
          fetch(`https://api.themoviedb.org/3/search/movie?query=${inputMainValue}&include_adult=false&language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => console.log(response))

            .then(data => {
                if(data.results) {
                    for (let i = 0; i < data.data.results.length; i++){

                        const imgSrcMovie = data.results[i].poster_path;
                        const createDivImg = document.createElement("div");
                        createDivImg.className = "swiper-slide";
                        const createImg = document.createElement("img");
                        createImg.src = imgSrcMovie;
                        createDivImg.appendChild(createImg);
                        swiperWrapper1.appendChild(createDivImg);

                    }
                }
            })
            .catch(err => {
                console.error(err)
            });
    })





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


/* -------------------------------------------------------------------------------

https://api.themoviedb.org/3/search/movie?query=[input.value]&include_adult=false&language=en-US&page=1   (recherche d'un film par nom) 

results []
 [9]  image : poster_path
  [11]  titre : title
[10]    annee : release_date (mais format yyyy-mm-dd)
[13]  rate : vote_average
[3]  genre : genre_ids   (a lair compliqué) 
[7] resume : overview




https://api.themoviedb.org/3/tv/{series_id}/aggregate_credits 
















*/
