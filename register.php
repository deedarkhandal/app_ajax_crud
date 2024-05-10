<?php include( './constant.php' );
?>
<!DOCTYPE html>
<html lang = 'en'>
<head>
<?php include( './partial/register_head.php' );
?>
<style>
.suggestion-container ul li {
    background:#ccc;
}
</style>
</head>
<body>

<div class = 'container'>
<form id = 'registerForm'>
<h2>REGISTER</h2>
<p class = 'success'></p>
<div class = 'form-group'>
<label for = 'fname'>First Name</label>
<input type = 'text' class = 'form-control f_name' id = 'f_name'  name = 'f_name' aria-describedby = 'fname' placeholder = 'Enter First Name'>
<p class = 'error error-f_name'></p>
<div class = 'suggestion-container'>
</div>
</div>
<div class = 'form-group'>
<label for = 'lname'>Last Name</label>
<input type = 'text' class = 'form-control l_name' id = 'l_name'  name = 'l_name'aria-describedby = 'lname' placeholder = 'Enter Last Name'>
<p class = 'error error-l_name'></p>
</div>
<div class = 'form-group'>
<label for = 'exampleInputEmail1'>Email address</label>
<input type = 'email' class = 'form-control email' id = 'email'  name = 'email' aria-describedby = 'emailHelp' placeholder = 'Enter email'>
<p class = 'error error-email'></p>
<p class = 'email_success'></p>
</div>
<div class = 'form-group'>
<label for = 'exampleInputPassword1'>Password</label>
<input type = 'password' class = 'form-control pass' id = 'pass' name = 'pass' placeholder = 'Password'>
<p class = 'error error-pass'></p>
</div>
<div class = 'form-group'>
<label for = 'phone'>Phone</label>
<input type = 'text' class = 'form-control phone' id = 'phone' name = 'phone' aria-describedby = 'phone' placeholder = 'Enter Phone'>
<p class = 'error error-phone'></p>
</div>
<div class = 'form-group'>
<label for = 'address'>address</label>
<textarea type = 'text' class = 'form-control address' id = 'address'  name = 'address' aria-describedby = 'address' placeholder = 'Enter address'></textarea>
<p class = 'error error-address'></p>
</div>
<div class = 'form-check'>
<input type = 'checkbox' class = 'form-check-input' id = 'exampleCheck1'>
<label class = 'form-check-label' for = 'exampleCheck1'>Check me out</label>
</div>
<input type ="hidden" name='id' class='id' value=''>
<button type = 'submit' class = 'btn btn-primary'>Submit</button>
</form>
</div>
<footer>
<?php include( './partial/footer_script.php' );
?>
</footer>
</body>
</html>
