<?php
if ($_SERVER["REQUEST_METHOD"] == "post") {
    $to_email = "mauridiazgimenez12@gmail.com"; 
    $from_email = $_POST["email"]; // Agrega la variable $from_email
    $name = $_POST["name"];
    $message = $_POST["message"];

    // Verifica el contenido de las variables
    var_dump($to_email, $from_email, $name, $message);

    $subject = "Nuevo mensaje de contacto de $name";
    $body = "Nombre: $name\n";
    $body .= "Correo electrónico: $from_email\n"; // Utiliza la variable $from_email
    $body .= "Mensaje:\n$message";

    // Envía el correo electrónico
    if (mail($to_email, $subject, $body, "From: $from_email")) {
        echo "Correo enviado con éxito.";
    } else {
        echo "Error al enviar el correo.";
    }

    // Redirige a la página de agradecimiento
    header("Location: agradecimiento/index.html");
    exit(); 
} else {
    die("hola");
}
?>
