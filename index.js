const hero_Section = document.querySelector(".section_hero");
// =================================
//creating a portfolio tab component
// =================================
const p_btns = document.querySelector(".p_btns");
const p_btn = document.querySelectorAll(".p_btn");
const p_img_elem = document.querySelectorAll(".image_overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((curElem) => curElem.classList.remove("p_btn_active"));
  p_btn_clicked.classList.add("p_btn_active");

  //to find the number in data attr
  const btn_num = p_btn_clicked.dataset.btnNum;
  //   console.log(btn_num);

  const img_active = document.querySelectorAll(`.p_btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add("p_img_not_active"));
  img_active.forEach((curElem) => curElem.classList.remove("p_img_not_active"));
});

// =================================
// testimonial swiper js code
// =================================
// new Swiper(".mySwiper", {
//   slidesPerView: 2,
//   spaceBetween: 30,
//   autoplay: {
//     delay: 2500,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

const myJsmedia = (widthSize) => {
  if(widthSize.matches){
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  }else{
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
    });
  }
}

const widthSize = window.matchMedia("(max-width: 780px)");
//call listner function at run time
myJsmedia(widthSize);
//Attach listner function on state changes
widthSize.addEventListener("change", myJsmedia);

// =================================
// scroll to top js code
// =================================
const heroSection = document.querySelector(".section_hero");
const footerElem = document.querySelector(".section_footer");

const scrooollElement = document.createElement("div");
scrooollElement.classList.add("scrollTop-style");

scrooollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrooollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};

scrooollElement.addEventListener("click", scrollTop);

// =================================
// smooth scrolling effect js code
// =================================
const portfolioSec = document.querySelector(".section_portfilio");

document.querySelector(".portfolio_link").addEventListener("click", () => {
  portfolioSec.scrollIntoView({ behavior: "smooth" });
});

const hireMeSection = document.querySelector(".section_contact");

document.querySelector(".hireme_btn").addEventListener("click", () => {
  hireMeSection.scrollIntoView({ behavior: "smooth" });
});

// document.querySelector(".contact_link").addEventListener("click", () => {
//   contactSec.scrollIntoView({ behavior: "smooth" });
// });

// =================================
// counter number animate js code
// =================================
const counterNum = document.querySelectorAll(".counter_number");

const speed = 200;

counterNum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);

    const initialNum = parseInt(curElem.innerText);
    // console.log(initialNum);

    const incrementNumber = Math.trunc(targetNumber / speed);
    // console.log(incrementNumber);

    if (initialNum < targetNumber) {
      curElem.innerText = `${initialNum + incrementNumber}+`;

      setTimeout(updateNumber, 12);
    }
  };
  updateNumber();
});

// =================================
// Sticky navbar js code
// =================================
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    // console.log(ent);
    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
  }
);
observer.observe(hero_Section);

// =================================
// Toggle mobile menu js code
// =================================
const mobile_nav = document.querySelector(".mobile_navbar_btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});

// =================================
// Slick Slider
// =================================
$(".slider_container").slick({
  // dots: true,
  // fade: true,
  infinite: true,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 1800,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});