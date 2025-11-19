

var thumbs_movie = new Swiper(
    ".thumbs_movie", {
    spaceBetween: 10,
    slidesPerView: 4,
    // freeMode: true,
    // watchSlidesProgress: true,

    breakpoints: {
        // when window width is >= 320px

        300: {
            // slidesPerView: 2,

        },

        320: {
            slidesPerView: 5,
            direction: "vertical",
            spaceBetween: 10,


        },

        480: {
            slidesPerView: 5,
            direction: "vertical",
            spaceBetween: 10,


        },

        640: {
            slidesPerView: 5,
            direction: "vertical"

        },

        768: {
            slidesPerView: 4,
            direction: "horizontal"
        },
        1024: {
            slidesPerView: 4,
            direction: "horizontal"


        },
        1265: {
            slidesPerView: 4,
            direction: "horizontal"
        }

    },
});


var slider_movie = new Swiper(

    ".slider_movie", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: thumbs_movie,
    },
});






const products = new Swiper(
    ".products", {
    spaceBetween: 30,

    loop: true,

    // centeredSlides:true,

    // autoplay: true,
    // using "ratio" endpoints

    breakpoints: {
        // when window width is >= 320px

        300: {
            slidesPerView: 2,

        },

        320: {
            slidesPerView: 2,
        },

        480: {
            slidesPerView: 2,

        },

        640: {
            slidesPerView: 3,
            // spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,

        },
        1265: {
            slidesPerView: 4,
        }


    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true

    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

}
)



// 
  function increaseValue() {
    let input = document.getElementById('quantity');
    input.value = parseInt(input.value) + 1;
  }

  function decreaseValue() {
    let input = document.getElementById('quantity');
    let current = parseInt(input.value);
    if (current > 1) {
      input.value = current - 1;
    }
  }

//   

    window.addEventListener('scroll', function() {
    const box = document.getElementById('myBox');
    if (window.scrollY > 600) { // وقتی اسکرول بیشتر از 300px شد
      box.classList.add('fixed','w-11/12'  ,'p-2!' , 'shadow');
    } else {
      box.classList.remove('fixed','w-11/12' ,'p-2!' , 'shadow');
    }
  });


//


  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.add('hidden'));

      tab.classList.add('active');
      contents[index].classList.remove('hidden');
    });
  });

// 
