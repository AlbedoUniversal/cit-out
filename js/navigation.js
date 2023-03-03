(function navigation() {
  const topOffset = 50;
  let elementPosition;
  let offsetPosition;

  document.querySelector(".button-know-more").addEventListener("click", () => {
    document.querySelector(".form").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
  [
    ...document
      .querySelector(".burger-menu__screen--second")
      .querySelectorAll(".menu-item"),
  ].map((el, index) => {
    el.addEventListener("click", () => {
      document.querySelector(".checkbox-menu-mobile").checked = false;
      switch (index) {
        case 0:
          elementPosition = document
            .querySelector(".turnkey-office")
            .getBoundingClientRect().top;
          offsetPosition = elementPosition - topOffset;
          window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
          });
          // .scrollIntoView({
          //   behavior: "smooth",
          //   block: "start",
          // });
          break;
        case 1:
          // document.querySelector(".effective-it-decisions").scrollIntoView({
          //   behavior: "smooth",
          //   block: "start",
          // });
          elementPosition = document
            .querySelector(".effective-it-decisions")
            .getBoundingClientRect().top;
          offsetPosition = elementPosition - topOffset;
          window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
          });
          break;
        case 2:
          // document.querySelector(".projects").scrollIntoView({
          //   behavior: "smooth",
          //   block: "start",
          // });
          elementPosition = document
            .querySelector(".projects")
            .getBoundingClientRect().top;
          offsetPosition = elementPosition - topOffset;
          window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
          });
          break;
        case 3:
          // document.querySelector(".form").scrollIntoView({
          //   behavior: "smooth",
          //   block: "start",
          // });
          elementPosition = document
            .querySelector(".form")
            .getBoundingClientRect().top;
          offsetPosition = elementPosition - topOffset;
          window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
          });

          break;

        default:
          break;
      }
    });
  });
})();
