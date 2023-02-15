(function menu() {
  let first = console.log(document.querySelector(".checkbox-label").value);
  document.querySelector("#burgerButton").addEventListener("click", (e) => {
    document
      .querySelector(".burger-menu__screen--first")
      .classList.toggle("is-visible");

    // if (e.currentTarget.checked) {
    //   document
    //     .querySelector(".burger-menu__screen--first")
    //     .classList.add("disable");
    //   document
    //     .querySelector(".burger-menu__screen--second")
    //     .classList.add("active");
    // } else {
    //   document
    //     .querySelector(".burger-menu__screen--first")
    //     .classList.remove("disable");
    //   document
    //     .querySelector(".burger-menu__screen--second")
    //     .classList.remove("active");
    // }
  });
})();
