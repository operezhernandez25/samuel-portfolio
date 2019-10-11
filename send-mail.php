<?php

include("php-mailjet-v3-simple.class.php");
$mj = new Mailjet( 'b8cc47ac4f167c8d610b12539f405fce', '3e95eb8a82e839d267a6653043978462');
  $email;$comment;$captcha;$name;
  $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
  $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
  
 
    $params = array(
        "method" => "POST",
        "from" => "samuel.quintanilla1002@gmail.com",
        "to" => 'samuel.quintanilla1002@gmail.com',
        "subject" => "Contacto Samuel Quintanilla",
        "html" => "</html><br><b>Mensaje de:</b> ".$name.",<a href='mailto:".$email."'>".$email."</a><br> <b></b> </html>"
    );
    
    $result = $mj->sendEmail($params);
    
  
?>