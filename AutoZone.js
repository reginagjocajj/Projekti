let emailRegex= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2.4}$/;
let passwordRexex= /^(?.[A-Aa-Z0-9])(?=.\d)[A-Za-z\d]{8,}$/;

var email= document.forms['form']['email'];
var passsword= document.forms['form']['password'];

var email_error= document.getElementById('email_error');
var password_error= document.getElementById('password_error');

function box(){
    if(email.value.length<9){
        email.style.border="1px solid red";
        email.focus();
        return false;
    }
}
