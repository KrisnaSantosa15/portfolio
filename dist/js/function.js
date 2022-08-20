var splide = new Splide(".splide", {
  type: "loop",
  focus: "center",
  perPage: 3,
  gap: "2rem",
  pagination: false,
  breakpoints: {
    1024: {
      perPage: 3,
      gap: "2rem",
    },
    768: {
      perPage: 2,
      gap: "1rem",
    },
    640: {
      perPage: 2,
      gap: ".9rem",
      //   height: "18rem",
    },
    480: {
      perPage: 1,
      gap: ".7rem",
      //   height: "15rem",
    },
  },
});

splide.mount();
//   End of splide
