(function ($) {
    function aboutBlocksClick() {
        let section = $('section.about-blocks'),
            descriptions = $('div.description', section),
            links = $('div.list-menu a', section);
        $('.list-menu>a', section).on('click', function (el) {
            let element = $(el.target);
            if (element.prop("tagName") === 'DIV') {
                element = element.parent();
            }
            descriptions.removeClass('active');
            links.removeClass('active');

            $('div.description[data-id="' + element.data('id') + '"]').addClass('active');
            element.addClass('active');
        });
    }

    function effectiveItDecisionsInfoBoxClick() {
        let section = $('section.effective-it-decisions'),
            infoBlocks = $('div.info-blocks', section),
            links = $('div.info-block', infoBlocks),
            infoBlockRight = $('.info-block-right', section),
            img = $('div.img>img', infoBlockRight),
            h3 = $('div.content>div.h3', infoBlockRight),
            description = $('div.content>div.description', infoBlockRight);
        $(links).on('click', function (el) {
            el = $(el.target);
            if (el.attr('class') === 'text') {
                el = el.parent();
            }

            function cleanClasses() {
                infoBlocks.removeClass('active-first')
                infoBlocks.removeClass('active-second')
                infoBlocks.removeClass('active-third')
            }

            let infoBlockClass = ''
            if (el.data('id') == 1) {
                infoBlockClass = 'active-first';
                img.prop('src', '/img/effective-it-decisions_img1.png');
                h3.html('Интеллектуальный офис');
                description.html('Для нас интеллектуальное здание — это не просто технологии, а их правильное использование и объединение в полноценной экосистеме, эргономичное и комфортное пространство, гибкость и безопасность, экологичность. Мы создаем сервисы, которыми сотрудник может управлять со своего телефона.');
            }
            if (el.data('id') == 2) {
                infoBlockClass = 'active-second';
                img.prop('src', '/img/effective-it-decisions_img2.png');
                h3.html('Мультимедиа');
                description.html('Проектируем и внедряем уникальные мультимедийные решения, которые становятся точками притяжения делового пространства.' +
                    '<ul>' +
                    '<li>Системы отображения</li>' +
                    '<li>Системы звукоусиления</li>' +
                    '<li>Конференц-системы и системы синхронного перевода</li>' +
                    '<li>Коммутация и обработка видео</li>' +
                    '<li>Системы видео-конференц-связи</li>' +
                    '<li>Интерактивные и презентационные системы</li>' +
                    '<li>Системы Digital Signage</li>' +
                    '<li>Системы технологического телевидения</li>' +
                    '<li>Интегрированное управление мультимедиа</li></ul>');
            }
            if (el.data('id') == 3) {
                infoBlockClass = 'active-third';
                img.prop('src', '/img/effective-it-decisions_img3.png');
                h3.html('Сетевые решения');
                description.html('У нас есть опыт построения сетевой инфраструктуры в крупнейших Fit-Out-проектах на рынке – для банков, нефтегазовых компаний, операторов коммерческой недвижимости.\n' +
                    '<ul>' +
                    '<li>Корпоративные сети передачи данных</li>' +
                    '<li>Беспроводная связь</li>' +
                    '<li>Решения для унифицированных коммуникаций</li></ul>');
            }

            if (infoBlockClass !== '') {
                cleanClasses();
                infoBlocks.addClass(infoBlockClass);
            }
        });
    }

    // start
    aboutBlocksClick();
    effectiveItDecisionsInfoBoxClick();


})(jQuery)
