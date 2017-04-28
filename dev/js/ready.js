'use strict';

$(function(){
	$('.partners__list').slick({
		dots: true,
		slidesToShow: 6,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: true,
		        slidesToShow: 4,
		        slidesToScroll: 1
		      }
		    },{
		      breakpoint: 480,
		      settings: {
		        arrows: true,
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },{
		      breakpoint: 380,
		      settings: {
		        arrows: true,
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    }
		]
	});

	baguetteBox.run('.baguetteBox');

	
});


$.fn.datepicker.dates['ru'] = {
    days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб", "Вос"],
    daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    today: "Сегодня"
};


$(function(){
	$('.datepicker').datepicker({
	    format: 'dd/mm/yyyy',
	    startDate: '-3d',
	    weekStart: 1,
	    language: 'ru'
	});
})









