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

    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Jimmy Calderon | Contact</title>
    <link rel="icon" type="image/png" sizes="16x16" href="../../images/favicon.ico">
    <link href="../../css/reset.css" rel="stylesheet" type="text/css">
    <link href="../../css/main.css" rel="stylesheet" type="text/css">
</head>
<body>
    <h1 class="hidden">Thank You For Contacting Me Page</h1>
      
    <div class="mainCon">

    <?php 
    if(mail($recipient, $subject, $message, $headers)){
        echo '<p class="thankYou">Thank you for contacting me, '.$name.'. <br>You will receive a reply within the next 48 hours</p>';
    }else{
        echo '<p class="thankYou>We are sorry but the email did not go through</p>';
    }
    ?>

    <a href="../../index.html" class="goBack">Go back</a>

    </div>
    
</body>
</html>