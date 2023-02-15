(function about() {
  let list = document.querySelector(".list-menu");

  let decs = document
    .querySelector(".about-blocks")
    .querySelectorAll(".description");
  let active = 1;
  [...list.children].map((element, index) => {
    element.addEventListener("click", (event) => {
      [...list.children].map((el, ind) => {
        if (event.currentTarget !== el) {
          {
            el.className = "about-blocks__element";
            active = ind;
          }
        } else {
          el.className = "about-blocks__element active";
        }
      });

      [...decs].map((el, ind) => {
        el.className = `description ${ind === index ? "active" : ""}`;
      });
    });
  });
})();
