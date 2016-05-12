<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$from=$_REQUEST['from'];
$headers .= 'FROM: ' . $from . "\r\n";
$to=$_REQUEST['to'];
$subject=$_REQUEST['sub'];
$body=nl2br(urldecode($_REQUEST['msg']));
if(mail($to, $subject, $body, $headers)){
echo "success";
}
else{
echo "fail";
}
?>
