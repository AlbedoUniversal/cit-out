(function rotate() {
  let cards = document
    .querySelector(".projects")
    .querySelectorAll(".projects__card");

  [...cards].map((card) => {
    card.querySelector(".front-side").addEventListener("click", (e) => {
      card.querySelector(".front-side").classList.add("rotate-front");
      card.querySelector(".back-side").classList.add("rotate-back");
    });
    card.querySelector(".back-side").addEventListener("click", (e) => {
      card.querySelector(".front-side").classList.remove("rotate-front");
      card.querySelector(".back-side").classList.remove("rotate-back");
    });
  });
})();
