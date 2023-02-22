(function sortCard() {
  if (window.innerWidth < 900) {
    let cardsArray = [];
    let cardBlock = document.querySelector(".projects");
    console.log(cardBlock.querySelector(".right-column").childNodes);
    [...cardBlock.querySelector(".left-column").childNodes].map(
      (card, index) => {
        if ((index + 1) % 2 === 0) {
          console.log(card.style, "22");
          cardsArray[index] = card;
        }
      }
    );
    [...cardBlock.querySelector(".right-column").childNodes].map(
      (card, index) => {
        if ((index + 1) % 2 === 0) cardsArray[index + 1] = card;
      }
    );
    cardsArray = cardsArray.slice(1, cardsArray.length);

    cardBlock.querySelector(".left-column").innerHTML = "";
    cardBlock.querySelector(".right-column").innerHTML = "";

    cardsArray.map((card, index) => {
      console.log(card.querySelector(".front-side"));
      if (index != 0) {
        card.querySelector(
          ".front-side"
        ).style.backgroundImage = `linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.2) 0%,
          #000000 100%
        ),
        url(/img/${index}.png)`;
        console.log(card.querySelector(".front-side").style);
      }

      cardBlock.querySelector(".left-column").append(card);
    });
  }
})();
