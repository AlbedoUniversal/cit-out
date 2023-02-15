function doPost() {
  let required = document.querySelectorAll(".required");
  let error = document.querySelectorAll(".error");
  let checkbox = document.querySelector(".custom-checkbox__input");
  required.forEach((item, index) => {
    console.log(index);
    if (item.value.length !== 0) {
      error[index].style.opacity = 0;
    } else {
      error[index].style.opacity = 1;
    }
  });
  if (!checkbox.checked) {
    document.querySelector(".checkbox-error").style.opacity = 1;
  }
}
