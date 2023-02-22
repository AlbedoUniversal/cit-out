(function navigation() {
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
          document.querySelector(".turnkey-office").scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          break;
        case 1:
          document.querySelector(".effective-it-decisions").scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          break;
        case 2:
          document.querySelector(".projects").scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          break;
        case 3:
          document.querySelector(".form").scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          break;

        default:
          break;
      }
    });
  });
})();
