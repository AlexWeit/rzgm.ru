$(document).ready(function(){
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скролинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICQoJy5nb190bycpLmNsaWNrKCBmdW5jdGlvbigpeyAvLyDQu9C+0LLQuNC8INC60LvQuNC6INC/0L4g0YHRgdGL0LvQutC1INGBINC60LvQsNGB0YHQvtC8IGdvX3RvXHJcblx0dmFyIHNjcm9sbF9lbCA9ICQodGhpcykuYXR0cignaHJlZicpOyAvLyDQstC+0LfRjNC80LXQvCDRgdC+0LTQtdGA0LbQuNC80L7QtSDQsNGC0YDQuNCx0YPRgtCwIGhyZWYsINC00L7Qu9C20LXQvSDQsdGL0YLRjCDRgdC10LvQtdC60YLQvtGA0L7QvCwg0YIu0LUuINC90LDQv9GA0LjQvNC10YAg0L3QsNGH0LjQvdCw0YLRjNGB0Y8g0YEgIyDQuNC70LggLlxyXG4gICAgICAgIGlmICgkKHNjcm9sbF9lbCkubGVuZ3RoICE9IDApIHsgLy8g0L/RgNC+0LLQtdGA0LjQvCDRgdGD0YnQtdGB0YLQstC+0LLQsNC90LjQtSDRjdC70LXQvNC10L3RgtCwINGH0YLQvtCx0Ysg0LjQt9Cx0LXQttCw0YLRjCDQvtGI0LjQsdC60LhcclxuXHQgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoc2Nyb2xsX2VsKS5vZmZzZXQoKS50b3AgfSwgNTAwKTsgLy8g0LDQvdC40LzQuNGA0YPQtdC8INGB0LrRgNC+0LvQuNC90LMg0Log0Y3Qu9C10LzQtdC90YLRgyBzY3JvbGxfZWxcclxuICAgICAgICB9XHJcblx0ICAgIHJldHVybiBmYWxzZTsgLy8g0LLRi9C60LvRjtGH0LDQtdC8INGB0YLQsNC90LTQsNGA0YLQvdC+0LUg0LTQtdC50YHRgtCy0LjQtVxyXG4gICAgfSk7XHJcbn0pOyJdfQ==
