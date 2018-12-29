<?php if (isset($_POST["yourname"])) {
$to =  "sevenhotelnn@gmail.com";
$from = 'otkogomail@mail.ru';
$charset = "utf-8";
$subject = '=?'.$charset.'?B?'.base64_encode("Сообщение с сайта").'?=';
$headerss ="Content-type: text/html; charset=$charset\r\n";
$name = '=?'.$charset.'?B?'.base64_encode("От пользователя").'?=';  //Имя_отправителя   c//
$headerss.="From: $name <$from>\r\n";
$headerss.="MIME-Version: 1.0\r\n";
$headerss.="Date: ".date('D, d M Y h:i:s')."\r\n";
$msg = "ФОРМА ОТПРАВКИ: ".$_POST["form_name"]." <br>ИМЯ: ".$_POST["yourname"].'<br>ТЕЛЕФОН: '.$_POST["yourphone"].'<br>ДАТА ЗАЕЗДА: '.$_POST["date_arrival"].'<br>ДАТА ВЫЕЗДА: '.$_POST["date_departure"].'<br>КОЛИЧЕСТВО ЧЕЛОВЕК: '.$_POST["people"];
mail($to, $subject, $msg, $headerss);
echo 'СООБЩЕНИЕ УСПЕШНО ОТПРАВЛЕНО!';
}
?>