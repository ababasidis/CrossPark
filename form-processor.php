<?php

// grab the data being passed from the method="post" in the HTML form
// and hold it in a variable
$firstname = Trim(stripslashes($_POST['firstname'])); 
$lastname = Trim(stripslashes($_POST['lastname'])); 
$email = Trim(stripslashes($_POST['email'])); 
$phone = Trim(stripslashes($_POST['phone'])); 
$address1 = Trim(stripslashes($_POST['address1'])); 
$address2 = Trim(stripslashes($_POST['address2'])); 
$city = Trim(stripslashes($_POST['city'])); 
$state = Trim(stripslashes($_POST['state']));
$zip = Trim(stripslashes($_POST['zip'])); 
$citizenship = Trim(stripslashes($_POST['citizenship']));
$age = Trim(stripslashes($_POST['age']));
$position = Trim(stripslashes($_POST['position']));
$comment1 = Trim(stripslashes($_POST['newInput']));
$comment2 = Trim(stripslashes($_POST['newInput2']));

// set some variables
$emailFrom = $email;
$emailTo = "axb4898@g.rit.edu";
$subject = "CrossPark Application Form ";

// prepare email body text
$message = "";
$message .= "First Name: ";
$message .= "\t\t";
$message .= $firstname;
$message .= "\n";

$message .= "Last Name: ";
$message .= "\t\t";
$message .= $lastname;
$message .= "\n";

$message .= "E-mail: ";
$message .= "\t\t";
$message .= $email;
$message .= "\n";

$message .= "Phone: ";
$message .= "\t\t\t";
$message .= $phone;
$message .= "\n";

$message .= "Address: ";
$message .= "\t\t";
$message .= $address1;
$message .= "\n\t\t\t\t";
$message .= $address2;
$message .= "\n\t\t\t\t";
$message .= $city;
$message .= "\t";
$message .= $state;
$message .= "\t";
$message .= $zip;
$message .= "\n";

$message .= "Citizenship: ";
$message .= "\t\t";
$message .= $citizenship;
$message .= "\n";

$message .= "Age: ";
$message .= "\t\t\t";
$message .= $age;
$message .= "\n";

$message .= "Position: ";
$message .= "\t\t";
$message .= $position;
$message .= "\n";

$message .= "Experience: ";
$message .= "\t\t";
$message .= $comment1;
$message .= "\n";

$message .= "Comment: ";
$message .= "\t\t";
$message .= $comment2;
$message .= "\n";

// send email 
mail($emailTo, $subject, $message, "From: <$emailFrom>");

// send the user to the thank you webpage
header("Location: redirect.html");

?>