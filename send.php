<?php
//считываем данные из формы
$message = $_POST['message'];
$name = $_POST['name'];
$email = $_POST['email'];
// кодируем для безопасности
$message = htmlspecialchars($message);
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$message = urldecode($message);
$name = urldecode($name);
$email = urldecode($email);
//удаляем пробелы с начала и конца строки, если таковые имеются
$message = trim($message);
$name = trim($name);
$email = trim($email);
if (mail("sweetlieei@gmail.com", "Тестирование", "Имя:".$name.". E-mail: ".$email.".$message", "From: info@pnevmokod.ru \r\n"))
{
//     echo "сообщение успешно отправлено";
//     $redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.html';
// header("Location: $redirect");?>
<head>
    <style>
        div {
            width: 500px; 
            height: 100px; 
            background-color: #121723; 
            border: 2px solid #ffffff;
            border-radius: 25px; 
            color: #AA9DFA; 
            margin: 108px auto 0;
            position: relative; 
            padding: 35px 49px;
        }
        
        p {
            font-weight: 700;
            font-size: 25px;
            margin: 0;
        }

        span {
            font-size: 25px;
        }

        @media (max-width:670px) {
            div {
                width: 400px;
                height: 75px;
                padding: 27px 55px;
            }

            p {
                font-size: 18px;
            }

            span {
                font-size: 18px;
            }
        }

        @media (max-width: 480px) {
            div {
                width: 260px;
                height: 75px;
                padding: 25px 9px;
            }

            p {
                font-size: 15px;
            }

            span {
                font-size: 15px;
            }
        }
    </style>

</head>
<body>
    <div class="modal_window">
        <p class="modal_window__text">Сообщение успешно отправлено</p>
        <p> Через <span id="time"></span> секунд вы будете перенаправлены на главную страницу.</p>
    </div>
    <script>
    var i = 5;//время в сек.
    function time(){
        document.getElementById("time").innerHTML = i;//визуальный счетчик
        i--;//уменьшение счетчика
        if (i < 0) location.href = "index.html";//редирект
    }
    time();
    setInterval(time, 1000);    
</script>
</body>
<?php 
// exit();
} else {
    echo "при отправке сообщения возникли ошибки";
}
?>