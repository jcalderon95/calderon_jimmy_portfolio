<?php 
    if(empty($_POST)){
        echo 'No...';
        exit;
    }

    $name = '';
    $email = '';
    $subject = '';
    $message = '';

    //TODO:replace the following email by yours
    $recipient = 'jimmyalexcalderon@gmail.com';

    //Some validations
    if(isset($_POST['name'])){
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    }

    if(isset($_POST['email'])){
        $email = str_replace(array("\r","\n","%0a","%0d"),'',$_POST['email']);
        $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    if(isset($_POST['subject'])){
        $subject = filter_var($_POST['subject'],FILTER_SANITIZE_STRING);
    }

    if(isset($_POST['message'])){
        $message = $_POST['message'];
    }
    
    //TODO:set up your own noreplay email on your domain
    // and then replace the following email by yours noreply email
    $headers = [
        'From'=>'jimmy@jimmycalderon.com',
        'Reply-To'=>$name.'<'.$email.'>'
    ];

    if(mail($recipient, $subject, $message, $headers)){
        echo '<p>Thank you for contacting me, '.$name.'. You will get a reply within 24 hours</p>';
    }else{
        echo '<p>We are sorry but the email did not go through</p>';
    }
?>