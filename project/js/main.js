;(function ($) {
    $(function(){

        $('.slider-menu').slick({
            dots: false,//Отображение навигационных точек
            infinite: true, //Бесконечное прокручивание (зацикливание)
            slidesToShow: 1, //Количество прокручиваемых слайдов за раз
            adaptiveHeight: true, //Включает адаптирование высоты для одиночкного слайда горизонтальной карусели
            autoplay: true, //Автоматическая прокрутка
            arrows: false, //Показ/скрытие навигационных кнопок
            pauseOnHover: true, //Пауза автопроигрывания при наведении мыши
            autoplaySpeed: 1500 //Скорость автопрокрутки в милисекундах
        });


    });


})(jQuery);

function ToggleMenu() {
    $(".main-nav").toggleClass("main-nav--closed main-nav--opened");

}

$(document).ready(function () {
    $(".site__item").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).find("a[href]").attr('href')).offset().top }, 500);
    });
});

$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});