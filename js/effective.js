(function effective() {
  console.log(window.innerWidth);

  let infoBlocks = document
    .querySelector(".effective-it-decisions")
    .querySelector(".info-blocks");
  let blocks = infoBlocks.querySelectorAll(".info-block");

  let title = infoBlocks.querySelector(".content").querySelector(".h3");
  let description = infoBlocks
    .querySelector(".content")
    .querySelector(".description");
  let img = infoBlocks.querySelector(".info-block-right").querySelector(".img");

  console.log(img);

  blocks = [...blocks].slice(0, 3);
  blocks.map((el, index) => {
    el.addEventListener("click", (event) => {
      switch (index) {
        case 0:
          img.style.backgroundImage = ``;
          infoBlocks.className = "info-blocks active-first";
          title.innerHTML = `Интеллектуальный офис`;
          description.innerHTML = `Для нас интеллектуальное здание — это не просто технологии, а их правильное использование и объединение в полноценной экосистеме, эргономичное и комфортное пространство, гибкость и безопасность, экологичность. Мы создаем сервисы, которыми сотрудник может управлять со своего телефона.`;
          break;
        case 1:
          img.style.backgroundImage = `linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.2) 0%,
                #000000 100%
              ),
              url(/img/5.png);`;
          infoBlocks.className = "info-blocks active-second";
          title.innerHTML = `Мультимедиа`;
          description.innerHTML =
            "Проектируем и внедряем уникальные мультимедийные решения, которые становятся точками притяжения делового пространства." +
            "<ul>" +
            "<li>Системы отображения</li>" +
            "<li>Системы звукоусиления</li>" +
            "<li>Конференц-системы и системы синхронного перевода</li>" +
            "<li>Коммутация и обработка видео</li>" +
            "<li>Системы видео-конференц-связи</li>" +
            "<li>Интерактивные и презентационные системы</li>" +
            "<li>Системы Digital Signage</li>" +
            "<li>Системы технологического телевидения</li>" +
            "<li>Интегрированное управление мультимедиа</li></ul>";
          break;
        case 2:
          infoBlocks.className = "info-blocks active-third";
          title.innerHTML = `Сетевые решения`;
          description.innerHTML =
            "У нас есть опыт построения сетевой инфраструктуры в крупнейших Fit-Out-проектах на рынке – для банков, нефтегазовых компаний, операторов коммерческой недвижимости.\n" +
            "<ul>" +
            "<li>Корпоративные сети передачи данных</li>" +
            "<li>Беспроводная связь</li>" +
            "<li>Решения для унифицированных коммуникаций</li></ul>";
          break;
      }
    });
  });
})();
