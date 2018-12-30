<?php if (isset($_POST["yourname"])) {
$to =  'sevenhotelnn@gmail.com';
$from = 'otkogomail@mail.ru';
$charset = "utf-8";
$subject = '=?'.$charset.'?B?'.base64_encode("Сообщение с сайта").'?=';
$headerss ="Content-type: text/html; charset=$charset\r\n";
$name = '=?'.$charset.'?B?'.base64_encode("От пользователя").'?=';  //Имя_отправителя   c//
$headerss.="From: $name <$from>\r\n";
$headerss.="MIME-Version: 1.0\r\n";
$headerss.="Date: ".date('D, d M Y h:i:s')."\r\n";
$msg = "<h1>Бронирование номера: ".$_POST["form_name"]." </h1><br>Имя: ".$_POST["yourname"].'<br>Телефон: '.$_POST["yourphone"].'<br>Дата заезда: '.$_POST["date_arrival"].'<br>Дата выезда: '.$_POST["date_departure"].'<br>Номер: '.$_POST["room_booking"];
mail($to, $subject, $msg, $headerss);
echo '<div class="good_send_echo"><p><span>ВАША ЗАЯВКА ОТПРАВЛЕНА</span> НАШИ СТРУДНИКИ СКОРО СВЯЖУТСЯ С ВАМИ!</p></div>';
}
?>