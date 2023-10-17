<?php


$nome = $_POST['Nome'];
  $email = $_POST['Email'];
  $number = $_POST['Celular'];
  $empresa = $_POST['Empresa'];
  $mensagem = $_POST['Mensagem'];
  $data_envio = date('d/m/Y');
  $hora_envio = date('H:i:s');
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

if (isset($_POST['submit'])){
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'casarim.dev@gmail.com';                     //SMTP username
        $mail->Password   = 'Porta369';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('casarim.dev@gmail.com', 'Mailer');
        $mail->addAddress('casarim.dev@gmail.com', 'Joe User');     //Add a recipient
        // $mail->addAddress('ellen@example.com');               //Name is optional
        $mail->addReplyTo('casarim.dev@gmail.com', 'Information');

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Contato pelo site';
        $mail->Body    = '<p><b>Nome: </b>$nome</p>
        <p><b>E-mail: </b>$email</p>
        <p><b>Empresa: </b>$empresa</p>
        <p><b>Numero: </b>$number</p>
        <p><b>Mensagem: </b>$mensagem</p>
        <p>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>';
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail-'E-mail enviado com sucesso!';
    } catch (Exception $e) {
        echo "Erro ao enviar o e-mail: {$mail->ErrorInfo}";
    }
}