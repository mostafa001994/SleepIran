

var thumbs_image_gallery = new Swiper(
    ".thumbs_image_gallery", {
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
            slidesPerView: 4,
            spaceBetween: 10,


        },

        480: {
            slidesPerView: 4,
            spaceBetween: 10,


        },

        640: {
            slidesPerView: 4,

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


var slider_image_gallery = new Swiper(

    ".slider_image_gallery", {
    spaceBetween: 10,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true

    },
    thumbs: {
        swiper: thumbs_image_gallery,
    },
});





var thumbs_image_gallery2 = new Swiper(
    ".thumbs_image_gallery2", {
    spaceBetween: 10,
    slidesPerView: 6,
    // freeMode: true,
    // watchSlidesProgress: true,

    breakpoints: {
        // when window width is >= 320px

        300: {
            // slidesPerView: 2,

        },

        320: {
            slidesPerView: 4,
            spaceBetween: 10,


        },

        480: {
            slidesPerView: 4,
            spaceBetween: 10,


        },

        640: {
            slidesPerView: 4,

        },

        768: {
            slidesPerView: 6,
            direction: "horizontal"
        },
        1024: {
            slidesPerView: 6,
            direction: "horizontal"


        },
        1265: {
            slidesPerView: 6,
            direction: "horizontal"
        }

    },
});


var slider_image_gallery2 = new Swiper(

    ".slider_image_gallery2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: thumbs_image_gallery2,
    },
});





const products = new Swiper(
    ".products", {
    spaceBetween: 10
    ,

    loop: true,

    // centeredSlides:true,
    slidesPerView: 4,

    // autoplay: true,
    // using "ratio" endpoints

    breakpoints: {
        // when window width is >= 320px

        300: {
            slidesPerView: 1,

        },

        320: {
            slidesPerView: 1,
        },

        480: {
            slidesPerView: 1,

        },

        640: {
            slidesPerView: 2,
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
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

}
)



const testimonials = new Swiper(
    ".testimonials", {
    spaceBetween: 15
    ,

    loop: true,

    // centeredSlides:true,

    // autoplay: true,
    // using "ratio" endpoints

    breakpoints: {
        // when window width is >= 320px


        640: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,

        },
        1265: {
            slidesPerView: 2,
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

window.addEventListener('scroll', function () {
    const box = document.getElementById('myBox');
    if (window.scrollY > 600) { // وقتی اسکرول بیشتر از 300px شد
        box.classList.add('fixed');
    } else {
        box.classList.remove('fixed');
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



// 

const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // همه آیتم‌ها بسته بشن
        document.querySelectorAll(".accordion-content").forEach(c => c.classList.add("hidden"));
        document.querySelectorAll(".accordion-btn .icon").forEach(i => i.classList.remove("rotate-180"));

        // آیتم کلیک‌شده باز بشه
        const content = btn.nextElementSibling;
        const icon = btn.querySelector(".icon");
        content.classList.remove("hidden");
        icon.classList.add("rotate-180"); // چرخش آیکون
    });
});



// 

// باز کردن مودال
document.querySelectorAll(".open-modal").forEach(btn => {
    btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const modal = document.getElementById(targetId);
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    });
});

// بستن مودال
document.querySelectorAll(".close-modal").forEach(btn => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    });
});



// 

// 