function doPost() {
  let required = document.querySelectorAll(".required");
  let error = document.querySelectorAll(".error");
  let checkbox = document.querySelector(".custom-checkbox__input");
  let isError = false;
  required.forEach((item, index) => {
    console.log(index);
    if (item.value.length !== 0) {
      error[index].style.opacity = 0;
    } else {
      error[index].style.opacity = 1;
      isError = true;
    }
  });
  if (!checkbox.checked) {
    document.querySelector(".checkbox-error").style.opacity = 1;
    isError = true;
  }
  if (!isError) {
    document.querySelector(".form__success").style.display = "flex";
    document.querySelector(".form__title").style.display = "none";
    document.querySelector(".form__content").style.display = "none";
  }
}
