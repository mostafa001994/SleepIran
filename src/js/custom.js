

var main_slider = new Swiper(".main_slider", {
  spaceBetween: 0,
  slidesPerView: 1,


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  watchOverflow: false, // 👈 اینو اضافه کن


});




var blog_slider = new Swiper(".blog_slider", {
  spaceBetween: 20,
  slidesPerView: 2,


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});




var thumbs_image_gallery = new Swiper(".thumbs_image_gallery", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: { slidesPerView: 4, spaceBetween: 10 },
    480: { slidesPerView: 4, spaceBetween: 10 },
    640: { slidesPerView: 4 },
    768: { slidesPerView: 4, direction: "horizontal" },
    1024: { slidesPerView: 4, direction: "horizontal" },
    1265: { slidesPerView: 4, direction: "horizontal" }
  },
  on: {
    init: function () {
      this.slides.forEach(slide => {
        slide.classList.remove("bg-change", "open-modal");
        slide.removeAttribute("data-target");
      });
      const lastVisibleIndex = this.activeIndex + this.params.slidesPerView - 1;
      if (this.slides[lastVisibleIndex]) {
        this.slides[lastVisibleIndex].classList.add("bg-change", "open-modal");
        this.slides[lastVisibleIndex].setAttribute("data-target", "product-gallery");
      }
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        slide.classList.remove("bg-change", "open-modal");
        slide.removeAttribute("data-target");
      });
      const lastVisibleIndex = this.activeIndex + this.params.slidesPerView - 1;
      if (this.slides[lastVisibleIndex]) {
        this.slides[lastVisibleIndex].classList.add("bg-change", "open-modal");
        this.slides[lastVisibleIndex].setAttribute("data-target", "product-gallery");
      }
    }
  }
});


var slider_image_gallery = new Swiper(".slider_image_gallery", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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

  // pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  // },

});








const products = new Swiper(
  ".products", {
  spaceBetween: 15
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
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,

    },
    1265: {
      slidesPerView: 4,
    }


  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

}
)



const blog_products = new Swiper(
  ".blog_products", {
  spaceBetween: 15
  ,

  loop: true,

  // centeredSlides:true,
  slidesPerView: 3,

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
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,

    },
    1265: {
      slidesPerView: 3,
    }


  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

}
)



const related_posts = new Swiper(
  ".related_posts", {
  spaceBetween: 15
  ,

  loop: true,

  // centeredSlides:true,
  slidesPerView: 3,

  // autoplay: true,
  // using "ratio" endpoints

  breakpoints: {
    // when window width is >= 320px

    300: {
      slidesPerView: 1,

    },

    320: {
      slidesPerView: 2,
    },

    480: {
      slidesPerView: 2,

    },

    640: {
      slidesPerView: 2,
      // spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,

    },
    1265: {
      slidesPerView: 3,
    }


  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

}
)



const more_products = new Swiper(
  ".more_products", {
  spaceBetween: 15
  ,

  loop: true,

  // centeredSlides:true,
  slidesPerView: 3,

  // autoplay: true,
  // using "ratio" endpoints

  breakpoints: {
    // when window width is >= 320px

    300: {
      slidesPerView: 1,

    },

    320: {
      slidesPerView: 2,
    },

    480: {
      slidesPerView: 2,

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

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

}
)





const offers_slider = new Swiper(
  ".offers_slider", {
  spaceBetween: 15
  ,

  loop: true,

  // centeredSlides:true,
  slidesPerView: 6,

  // autoplay: true,
  // using "ratio" endpoints

  breakpoints: {
    // when window width is >= 320px

    300: {
      slidesPerView: 2,
      spaceBetween: 10


    },

    320: {
      slidesPerView: 3,
      spaceBetween: 10

    },

    480: {
      slidesPerView: 3,

      spaceBetween: 10

    },

    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,

    },
    1265: {
      slidesPerView: 6,
    }


  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

}
)



const brands_slider = new Swiper(
  ".brands_slider", {
  spaceBetween: 15
  ,

  loop: true,

  // centeredSlides:true,
  slidesPerView: 9,

  // autoplay: true,
  // using "ratio" endpoints

  breakpoints: {
    // when window width is >= 320px

    300: {
      slidesPerView: 2,

    },

    320: {
      slidesPerView: 3,
    },

    480: {
      slidesPerView: 3,

    },

    640: {
      slidesPerView: 3,
      // spaceBetween: 20,
    },
    768: {
      slidesPerView: 7,
    },
    1024: {
      slidesPerView: 7,

    },
    1265: {
      slidesPerView: 9,
    }


  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

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

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

}
)









// function increaseValue() {
//   let input = document.getElementById('quantity');
//   input.value = parseInt(input.value) + 1;
// }

// function decreaseValue() {
//   let input = document.getElementById('quantity');
//   let current = parseInt(input.value);
//   if (current > 1) {
//     input.value = current - 1;
//   }
// }


// همه دکمه‌های افزایش
function increaseValue(button) {
  // پیدا کردن input مربوط به همین دکمه
  let input = button.parentNode.querySelector('.quantity, .cart-quantity');
  input.value = parseInt(input.value) + 1;
}

function decreaseValue(button) {
  let input = button.parentNode.querySelector('.quantity, .cart-quantity');
  let current = parseInt(input.value);
  if (current > 1) {
    input.value = current - 1;
  }
}


//   

window.addEventListener('scroll', function () {
  const box = document.getElementById('myBox');
 
 if (box) {
  if (window.scrollY > 600) { // وقتی اسکرول بیشتر از 300px شد
    box.classList.add('fixed');
  } else {

    


      box.classList.remove('fixed');
    
  }}
});



window.addEventListener('scroll', function () {
  const box = document.getElementById('btm-atc');
  const bg = document.getElementById('bg');


  if (box && bg) {


    if (window.scrollY > 450) { // وقتی اسکرول بیشتر از 300px شد
      box.classList.add('fixed!');
      box.classList.add('fixed');
      bg.classList.add('h-14!');
    } else {
      box.classList.remove('fixed!');
      box.classList.remove('fixed');
      bg.classList.remove('h-14!')

    }

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

    if (!content.classList.contains("hidden")) {
      // بستن آیتم فعلی
      content.classList.add("hidden");
      icon.classList.remove("rotate-180");

      // فقط اگر داخل specifications بود کلاس active حذف کن
      if (btn.closest("#specifications")) {
        // btn.classList.remove("h-16!");
      }
    } else {
      // اول همه رو ببند
      document.querySelectorAll(".accordion-content").forEach(c => c.classList.add("hidden"));
      document.querySelectorAll(".accordion-btn .icon").forEach(i => i.classList.remove("rotate-180"));

      // بعد آیتم کلیک‌شده رو باز کن
      content.classList.remove("hidden");
      icon.classList.add("rotate-180");

      // فقط اگر داخل specifications بود کلاس active اضافه کن
      if (btn.closest("#specifications")) {
        // اول همه‌ی دکمه‌های داخل specifications رو از active خالی کن
        document.querySelectorAll("#specifications .accordion-btn").forEach(b => b.classList.remove("active"));
        // btn.classList.add("h-16!");
      }
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

document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", (e) => {
    // اگر کلیک روی خود modal بود (یعنی بک‌دراپ)، نه داخل modal-content
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  });
});




// bottomBox


document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn2");
  const bottomBox = document.getElementById("bottomBox2");

  if (openBtn && bottomBox) {


    openBtn.addEventListener("click", () => {
      bottomBox.classList.remove("hidden");
      bottomBox.classList.remove("translate-y-full");
    });

  }

  closeBtn.addEventListener("click", () => {
    bottomBox.classList.add("translate-y-full");
    bottomBox.classList.add("hidden");
  });




});






//

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





//mobile menu 


document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");
  const backdrop = document.getElementById("backdrop");


  // باز کردن منو
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
    backdrop.classList.remove("hidden");

  });

  // بستن منو با دکمه بستن
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
    backdrop.classList.add("hidden");

  });

  // بستن منو با کلیک بیرون
  document.addEventListener("click", (e) => {
    const isClickInsideMenu = mobileMenu.contains(e.target) || menuBtn.contains(e.target);
    if (!isClickInsideMenu && !mobileMenu.classList.contains("translate-x-full")) {
      mobileMenu.classList.add("translate-x-full");
      backdrop.classList.add("hidden");
    }
  });


  // بستن منو با کلیک روی بک‌دراپ
  backdrop.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
    backdrop.classList.add("hidden");
  });



});

// 


document.addEventListener("DOMContentLoaded", () => {
  const emailFields = document.querySelectorAll('input[type="email"]');

  emailFields.forEach(field => {
    field.addEventListener("blur", () => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const errorSpan = field.parentNode.querySelector('.error-message');

      if (!regex.test(field.value) && field.value.trim() !== "") {
        errorSpan.innerHTML = `
                  <span class="text-red-600 text-sm">  فرمت ایمیل اشتباه است.</span>
        <svg class="w-4 h-4">
            <use xlink:href="#danger"></use>
        </svg>
`;field.classList.add("border-red-500", "text-red-600");
      } else {
        errorSpan.innerHTML = "";

         

        field.classList.remove("border-red-500", "text-red-600");

      }
    });
  });
});






const toggleBtns = document.querySelectorAll(".toggle-btn");
const submenuPage = document.getElementById("submenu-page");
const submenuContent = document.getElementById("submenu-content");
const backBtn = document.getElementById("back-btn");

toggleBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const submenu = btn.closest("li").querySelector(".submenu");
    if (submenu) {
      // محتوای زیرمنو رو کپی کن داخل صفحه کامل
      submenuContent.innerHTML = submenu.innerHTML;
      // نمایش صفحه کامل
      submenuPage.classList.remove("hidden");
    }
  });
});

backBtn.addEventListener("click", () => {
  submenuPage.classList.add("hidden");
});





// document.addEventListener("DOMContentLoaded", () => {
//   const addToCartBtns = document.querySelectorAll(".add-to-cart"); // همه دکمه‌ها با کلاس addtocart
//   const mobileCart = document.getElementById("mobileAddedToCart");
//   const backdrop = document.getElementById("backdrop");

//   addToCartBtns.forEach(btn => {
//     btn.addEventListener("click", (e) => {
//       e.preventDefault(); // جلوگیری از رفتار پیش‌فرض <a>
//       mobileCart.classList.remove("-translate-x-full"); // سبد خرید باز میشه
//       backdrop.classList.remove("hidden"); // بک‌دراپ نمایش داده میشه
//     });
//   });
// });



document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".otp");

  // حالت اولیه → اولین باکس فعال
  inputs[0].classList.add("active");
  inputs[0].focus();

  inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      if (input.value.length === 1 && index < inputs.length - 1) {
        // حذف حالت active از باکس فعلی
        input.classList.remove("active");

        // فوکوس و active روی باکس بعدی
        inputs[index + 1].focus();
        inputs[index + 1].classList.add("active");
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !input.value && index > 0) {
        // حذف active از باکس فعلی
        input.classList.remove("active");

        // برگشت به باکس قبلی
        inputs[index - 1].focus();
        inputs[index - 1].classList.add("active");
      }
    });
  });
});






document.addEventListener("DOMContentLoaded", () => {
  const cartButtons = document.querySelectorAll(".cart-btn"); // همه دکمه‌ها
  const mobileCart = document.getElementById("mobileAddedToCart");
  const closeCart = document.getElementById("closeAddedToCart");
  const backdrop = document.getElementById("backdrop");

  // اگر سبد یا بک‌دراپ پیدا نشد، از ادامه صرف‌نظر کن
  if (!mobileCart || !backdrop) return;

  // باز کردن با همه دکمه‌های cart-btn
  cartButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      // اگر دکمه <a> است:
      if (e.target.closest("a")) e.preventDefault();
      mobileCart.classList.remove("-translate-x-full");
      backdrop.classList.remove("hidden");
    });
  });

  // بستن با دکمهٔ بستن
  if (closeCart) {
    closeCart.addEventListener("click", (e) => {
      e.preventDefault();
      mobileCart.classList.add("-translate-x-full");
      backdrop.classList.add("hidden");
    });
  }

  // بستن با کلیک بیرون از پنل
  document.addEventListener("click", (e) => {
    const clickedInsideCart = mobileCart.contains(e.target);
    const clickedOnAnyCartBtn = Array.from(cartButtons).some(btn => btn.contains(e.target));

    if (!clickedInsideCart && !clickedOnAnyCartBtn && !mobileCart.classList.contains("-translate-x-full")) {
      mobileCart.classList.add("-translate-x-full");
      backdrop.classList.add("hidden");
    }
  });

  // بستن با کلیک روی بک‌دراپ
  backdrop.addEventListener("click", () => {
    mobileCart.classList.add("-translate-x-full");
    backdrop.classList.add("hidden");
  });
});


//mobile cart 

document.addEventListener("DOMContentLoaded", () => {
  const btnCart = document.getElementById("btnCart");
  const mobileCart = document.getElementById("mobileCart");
  const closeCart = document.getElementById("closeCart");
  const backdrop = document.getElementById("backdrop");





  // باز کردن منو
  btnCart.addEventListener("click", () => {
    mobileCart.classList.remove("-translate-x-full");
    backdrop.classList.remove("hidden");
  });




  // بستن منو با دکمه بستن
  closeCart.addEventListener("click", () => {
    mobileCart.classList.add("-translate-x-full");
    backdrop.classList.add("hidden");;
  });

  // بستن منو با کلیک بیرون
  document.addEventListener("click", (e) => {
    const isClickInsideMenu = mobileCart.contains(e.target) || btnCart.contains(e.target);
    if (!isClickInsideMenu && !mobileCart.classList.contains("-translate-x-full")) {
      mobileCart.classList.add("-translate-x-full");
      backdrop.classList.add("hidden");
    }
  });

  // بستن منو با کلیک روی بک‌دراپ
  backdrop.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
    backdrop.classList.add("hidden");
  });

});

// 



//mobile cart 

document.addEventListener("DOMContentLoaded", () => {
  const btnSearch = document.getElementById("btnSearch");
  const mobileSearch = document.getElementById("mobileSearch");
  const closeSearch = document.getElementById("closeSearch");
  const backdrop = document.getElementById("backdrop");


  // باز کردن منو
  btnSearch.addEventListener("click", () => {
    mobileSearch.classList.remove("translate-x-full");
    backdrop.classList.remove("hidden");
  });

  // بستن منو با دکمه بستن
  closeSearch.addEventListener("click", () => {
    mobileSearch.classList.add("translate-x-full");
    backdrop.classList.add("hidden");;
  });

  // بستن منو با کلیک بیرون
  document.addEventListener("click", (e) => {
    const isClickInsideMenu = mobileSearch.contains(e.target) || btnSearch.contains(e.target);
    if (!isClickInsideMenu && !mobileSearch.classList.contains("translate-x-full")) {
      mobileSearch.classList.add("translate-x-full");
      backdrop.classList.add("hidden");
    }
  });

  // بستن منو با کلیک روی بک‌دراپ
  backdrop.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
    backdrop.classList.add("hidden");
  });

});

// 




// mobile mega menu
// document.querySelectorAll(".toggle-btn").forEach(btn => {
//     btn.addEventListener("click", e => {
//         e.preventDefault(); // جلوگیری از رفتار پیش‌فرض دکمه

//         const submenu = btn.parentElement.nextElementSibling;
//         const icon = btn.querySelector("svg"); // آیکون داخل دکمه

//         // اگر باز بود → ببند
//         if (!submenu.classList.contains("hidden")) {
//             submenu.classList.add("hidden");
//             // آیکون برگرده به حالت اولیه
//             icon.classList.remove("rotate-180");
//             icon.classList.add("rotate-90");
//         } else {
//             // فقط همین سطح باز بشه، بقیه بسته بمونن
//             const parent = btn.closest("li");
//             parent.querySelectorAll(":scope > .submenu").forEach(s => s.classList.add("hidden"));
//             parent.querySelectorAll(":scope > .toggle-btn svg").forEach(i => {
//                 i.classList.remove("rotate-180");
//                 i.classList.add("rotate-90");
//             });

//             // زیرمنو باز بشه
//             submenu.classList.remove("hidden");
//             // آیکون بچرخه به پایین
//             icon.classList.remove("rotate-90");
//             icon.classList.add("rotate-180");
//         }
//     });
// });



// 


document.querySelectorAll(".toggle-third").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const submenu = btn.closest("li").querySelector(".submenu");
    submenu.classList.toggle("hidden");
  });
});



// 

// 


const searchBtn = document.querySelector(".search-btn svg");
const searchBox = document.querySelector(".search-resault");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchBox.classList.toggle("hidden");
});

// بستن فقط وقتی بیرون کلیک بشه
document.addEventListener("click", (e) => {
  const clickedInsideBtn = searchBtn.contains(e.target);
  const clickedInsideBox = searchBox.contains(e.target);

  // اگر کلیک داخل دکمه یا داخل باکس بود، کاری نکن
  if (clickedInsideBtn || clickedInsideBox) {
    return;
  }

  // در غیر این صورت، باکس بسته بشه
  searchBox.classList.add("hidden");
});

// 





document.querySelectorAll(".brand-mobile").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault(); // جلوگیری از رفتن به لینک

    const targetSpan = el.querySelector(".brand-mobile span");
    targetSpan.classList.toggle("block!"); // اضافه/حذف کلاس فقط روی span پایینی
  });
});





document.querySelectorAll(".brand-mobile").forEach(el => {
  const targetSpan = el.querySelector("span");

  // کلیک
  el.addEventListener("click", e => {
    e.preventDefault();
    targetSpan.classList.toggle("block!"); // اضافه/حذف کلاس روی span
  });

  // هاور (mouseenter و mouseleave)
  el.addEventListener("mouseenter", () => {
    targetSpan.classList.add("block!");
  });

  el.addEventListener("mouseleave", () => {
    targetSpan.classList.remove("block!");
  });
});



// مشاهده بیشتر در حالت موبایل 1

document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.getElementById("myContent");
  const content = wrapper.querySelector(".swiper-wrapper");
  const btn = document.getElementById("toggleBtn");
  const textSpan = btn.querySelector(".btn-text");
  const icon = btn.querySelector(".icon");

  if (content.scrollHeight > 500) {
    btn.style.display = "flex";
  }

  btn.addEventListener("click", function () {
    wrapper.classList.toggle("open");

    if (wrapper.classList.contains("open")) {
      textSpan.textContent = "بستن";   // فقط متن تغییر می‌کنه
      icon.classList.add("rotate-180");    // آیکون می‌چرخه
    } else {
      textSpan.textContent = "نمایش بیشتر";
      icon.classList.remove("rotate-180");
    }
  });
});






// مشاهده بیشتر در حالت موبایل 2

document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.getElementById("specifications");
  const content = wrapper.querySelector(".more-content");
  const btn = document.getElementById("toggleBtn2");
  const textSpan = btn.querySelector(".btn-text");
  const icon = btn.querySelector(".icon");


  if (content.scrollHeight > 400) {
    btn.style.display = "flex";
  }

  btn.addEventListener("click", function () {
    wrapper.classList.toggle("open");

    if (wrapper.classList.contains("open")) {
      textSpan.textContent = "بستن";   // فقط متن تغییر می‌کنه
      icon.classList.add("rotate-180");    // آیکون می‌چرخه
    } else {
      textSpan.textContent = "نمایش بیشتر";
      icon.classList.remove("rotate-180");
    }
  });
});




const inputs = document.querySelectorAll(".otp");

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    // فقط عدد قبول کنه
    input.value = input.value.replace(/[^0-9]/g, "");

    // وقتی یک رقم وارد شد بره به بعدی
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  // اگر کاربر Backspace زد برگرده به قبلی
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && input.value === "" && index > 0) {
      inputs[index - 1].focus();
    }
  });
});






const countdownEl = document.getElementById("countdown");

  const startTime = new Date(countdownEl.dataset.start).getTime();
  const endTime = new Date(countdownEl.dataset.end).getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();

    if (now < startTime) {
      countdownEl.innerHTML = "<span>--</span>:<span>--</span>:<span>--</span>";
      return;
    }

    const distance = endTime - now;

    if (distance <= 0) {
      clearInterval(timer);
      countdownEl.innerHTML = "<span>00</span>:<span>00</span>:<span>00</span>";
      return;
    }

    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    const h = String(hours).padStart(2, "0");
    const m = String(minutes).padStart(2, "0");
    const s = String(seconds).padStart(2, "0");

    countdownEl.innerHTML = `<span>${h}</span>:<span>${m}</span>:<span>${s}</span>`;
  }, 1000);







function toggleContent(button) {
  // پیدا کردن بخش table-content مربوط به همین section
  let section = button.closest('.table-of-contents');
  let content = section.querySelector('.table-content');

  if (content) {
    content.classList.toggle('closed');
  }
}




