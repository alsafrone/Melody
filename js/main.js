$(document).ready(function($) {
  var currentFloor = 2;// переменная, где хранится текущий этаж
  var floorPath = $('.home-image path'); //каждый отдельный этаж в SVG
  var counterUp = $('.counter-up'); /*кнопака увеличения этажа*/
  var counterDown = $('.counter-down'); /*кнопака уменьшения этажа*/

  //Функция при наведении мышью на этаж
    floorPath.on('mouseover', function (){
    floorPath.removeClass('current-floor');// удаляем активный класс у этажей
    currentFloor = $(this).attr('data-floor');// получаем значение текущего этажа
    $('.counter').text(currentFloor);// записываем значение этажа в счетчик справа
  });
  counterUp.on('click', function () { // отслеживаем клик по кнопке вверх
    if (currentFloor < 18) { // проверяем значение этажа, оно не должно быть больше 18
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
      useGroupping: false}); // форматируем переменную с этажом, чтобы было 01, а не 1
      $('.counter').text(usCurrentFloor); // записываем значение этажа в счетчик справа
      floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');// подсвечиваем текущий этаж
    }
  });

  counterDown.on('click', function () {
    if (currentFloor > 2) { // проверяем значение этажа, оно не должно быть меньше 2
      currentFloor--;// уменьшаем значение при клике
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
      useGroupping: false}); // форматируем переменную с этажом, чтобы было 01, а не 1
      $('.counter').text(usCurrentFloor); // записываем значение этажа в счетчик справа
      floorPath.removeClass('current-floor');// удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');// подсвечиваем текущий этаж
    }
  })
});
