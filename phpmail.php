<?php
require 'PHPMailer/PHPMailerAutoload.php';

        $name = $_POST['name'];
        $submittersEmail = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];

$body = "Name : ".$name."<br>Email : ".$submittersEmail."<br>Phone : ".$phone."<br>Message : ".$message;

function sendMail($email,$subject, $bodyContent)
{
    $mail = new PHPMailer;
    $mail->isSMTP();                                   // Set mailer to use SMTP
    $mail->Host = 'mail.uomleos.org';                    // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                            // Enable SMTP authentication
    $mail->Username = 'thilina.personalweb@gmail.com';          // SMTP username
    $mail->Password = '<Password Goes Here>';            // SMTP password
    $mail->SMTPSecure = 'ssl';                         // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                 // TCP port to connect to

    $mail->setFrom('thilina.personalweb@gmail.com', 'Personal Web');
    $mail->addReplyTo('thilina.personalweb@gmail.com', 'Personal web');
    $mail->addAddress($email);   // Add a recipient
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    $mail->isHTML(true);  // Set email format to HTML

    $mail->Subject = $subject;
    $mail->Body = $bodyContent;
    $checker= $mail->send();
    if (!$checker) {
        echo "Done";
    } else {
        echo "Error";
    }

}

sendMail("thilina.prashad25@gmail.com","Personal Website Contact Form Message by ".$name,$body);

?>


		