<?php
    $data = $_POST;
    $text = $data['text'];
    $name = $data['name'];
    $phone = $data['phone'];
    $email = $data['email'];
    $cheese = $data['cheese'];
    $form_name = $data['form-name'];
    
    $selectedTechnologies = '';
    
    foreach($technologies as $item) {
        echo "$item<br />";
        
    $selectedTechnologies .= $item . "\n";
    }
    
    $textile = $data['textile'];
    $procedures = $data['procedures'];
    $fasting = $data['fasting'];
 
    $to = "info@unt-ufa.ru"; 
    $date = date ("d.m.Y"); 
    $time = date ("h:i");
    $subject = "Заявки с Лид Формы";

    $msg="
    Форма: $form_name;
    Имя: $name;
    Телефон: $phone;
    Почта: $email;
    Сообщение: $text;
    Соглачие на обработку данных: $cheese";

    mail($to, $subject, $msg, "From: $to ");
?>