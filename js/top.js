const swiper01 = new Swiper(".swiper01", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next01",
    prevEl: ".swiper-button-prev01",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const swiper02 = new Swiper(".swiper02", {
  loop: true,
  pagination: {
    el: ".swiper-pagination02",
  },
  navigation: {
    nextEl: ".swiper-button-next02",
    prevEl: ".swiper-button-prev02",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});