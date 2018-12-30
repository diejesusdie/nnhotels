$(document).ready(function() {
$('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
      enabled: true
    },
  zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
  // other options
});
  $('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});
});
function AjaxFormRequest(result_id,form_id,url) {
//проверка заполненности обязательных полей - можно удалить
var yourlinks = $("#"+form_id+" [yourbest='true']"); var yourdostup = '';
for(var i_yourlinks=0; i_yourlinks<yourlinks.length; i_yourlinks++) {
if ($(yourlinks[i_yourlinks]).val().length == 0) {
$(yourlinks[i_yourlinks]).css("outline","1px solid rgba(255,0,0,1)");
yourdostup = "off"; }
else $(yourlinks[i_yourlinks]).css("outline","1px solid rgba(255,0,0,0)"); } if (yourdostup == "off" || !$("div").hasClass("blavtors")) return false;
//end проверка заполненности обязательных полей
jQuery.ajax({
url:      url,    //Адрес подгружаемой страницы
type:     "POST", //Тип запроса
dataType: "html", //Тип данных
data: jQuery("#"+form_id).serialize(),
success: function(response) { //Если все нормально
document.getElementById(result_id).innerHTML = response;  //ответ формы берется с обработчика php, например: echo 'Сообщение успешно отправлено!';
$("#"+result_id).show('medium', function() {setTimeout(function() {$("#"+result_id).hide('slow');}, 5000);});},
error: function(response)   { //Если ошибка
document.getElementById(result_id).innerHTML = "Ошибка при отправке формы";
$("#"+result_id).show('medium', function() {setTimeout(function() {$("#"+result_id).hide('slow');}, 5000);});}});
}
function calc() {
            //получаем ссылку на чекбокс (Требуется верстка?)
            var room1 = document.getElementById("room1");
            var room2 = document.getElementById("room2");
            //получаем ссылку на элемент input (Кол-во вариантов)
            var count = document.getElementById("count");
            //получаем ссылку на элемент span, в него будем писать стоимость дизайна
            var result = document.getElementById("result"); 
 
            var price = 0;            
            price = parseInt(count.value) * 100;
            price += (room1.checked == true) ? parseInt(room1.value) : 0;
            price += (room2.checked == true) ? parseInt(room2.value) : 0;
 
            result.innerHTML = price;
        }

// Календарь
var months=new Array();
months[1]="января";
months[2]="февраля";
months[3]="марта";
months[4]="апреля";
months[5]="мая";
months[6]="июня";
months[7]="июля";
months[8]="августа";
months[9]="сентября";
months[10]="октября";
months[11]="ноября";
months[12]="декабря";

    $('.from-date').each(function() {
      var date = new Date();
      var day = date.getDate();
      var month = date.getMonth() + 1;
      $(this).children('.date').text(day);
      $(this).children('.month').text(months[month]);
      $('.from-field').val(day + ' ' + months[month])
    });
    
    $('.dest-date').each(function() {
      var date = new Date();
      date.setDate(date.getDate() + 1);
      var day = date.getDate();
      var month = date.getMonth() + 1;
      
      $(this).children('.date').text(day);
      $(this).children('.month').text(months[month]);
      $('.dest-field').val(day + ' ' + months[month])
    });

    $('.from-input').datetimepicker({
      lang: 'ru',
      timepicker: false,
      format: 'd-m-Y',
      closeOnDateSelect:true,
      minDate: 0,
      scrollMonth: false,
      onSelectDate:function(ct,$i){
        var day = ct.dateFormat('d');
        var month = ct.dateFormat('m');
        $('.from-date .date').text(day);
        if (month < 10) {
          month = month % 10;
        }
        $('.from-date .month').text(months[month]);
        $('.from-field').val(day + ' ' + months[month])
      }
    });
    $('.dest-input').datetimepicker({
      lang: 'ru',
      timepicker: false,
      format: 'd-m-Y',
      closeOnDateSelect:true,
      minDate: 0,
      scrollMonth: false,
      onSelectDate:function(ct,$i){
        var day = ct.dateFormat('d');
        var month = ct.dateFormat('m');
        $('.dest-date .date').text(day);
        if (month < 10) {
          month = month % 10;
        }
        $('.dest-date .month').text(months[month]);
        $('.dest-field').val(day + ' ' + months[month])
      }
    });;
      
$('.single-item').slick();
$('.carousel-items').slick({
centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
});

