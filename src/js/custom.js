

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
    const content = btn.nextElementSibling;
    const icon = btn.querySelector(".icon");

    // اگر همین آیتم باز بود → ببند
    if (!content.classList.contains("hidden")) {
      content.classList.add("hidden");
      icon.classList.remove("rotate-180");
    } else {
      // اول همه رو ببند
      document.querySelectorAll(".accordion-content").forEach(c => c.classList.add("hidden"));
      document.querySelectorAll(".accordion-btn .icon").forEach(i => i.classList.remove("rotate-180"));

      // بعد آیتم کلیک‌شده رو باز کن
      content.classList.remove("hidden");
      icon.classList.add("rotate-180");
    }
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


document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const box = document.getElementById("bottomBox");

  openBtn.addEventListener("click", () => {
    box.classList.remove("hidden");
    // حرکت به بالا
    box.classList.remove("translate-y-full");
  });

  closeBtn.addEventListener("click", () => {
    // حرکت به پایین
    box.classList.add("translate-y-full");
    // بعد از پایان انیمیشن دوباره hidden بشه
    setTimeout(() => {
      box.classList.add("hidden");
    }, 300); // مدت زمان transition
  });
});








  window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      current = sec.id;
    }
  });

  document.querySelectorAll(".fixed-tabs a").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});



// 





// 


document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
  });
});

// 



document.querySelectorAll(".toggle-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault(); // جلوگیری از رفتار پیش‌فرض دکمه

    const submenu = btn.parentElement.nextElementSibling;
    const icon = btn.querySelector("svg"); // آیکون داخل دکمه

    // اگر باز بود → ببند
    if (!submenu.classList.contains("hidden")) {
      submenu.classList.add("hidden");
      // آیکون برگرده به حالت اولیه
      icon.classList.remove("rotate-180");
      icon.classList.add("rotate-90");
    } else {
      // فقط همین سطح باز بشه، بقیه بسته بمونن
      const parent = btn.closest("li");
      parent.querySelectorAll(":scope > .submenu").forEach(s => s.classList.add("hidden"));
      parent.querySelectorAll(":scope > .toggle-btn svg").forEach(i => {
        i.classList.remove("rotate-180");
        i.classList.add("rotate-90");
      });

      // زیرمنو باز بشه
      submenu.classList.remove("hidden");
      // آیکون بچرخه به پایین
      icon.classList.remove("rotate-90");
      icon.classList.add("rotate-180");
    }
  });
});