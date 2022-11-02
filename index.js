// Login Form
let signup = document.getElementById("outer").innerHTML = `
    <form class="form-container" id="signup-form" name="mySignUp" role="form" onsubmit="validateSignUp()">
        <div class="form-group">
            <i class="fas fa-user-circle user-image"></i>
        </div>
        <div class="form-group">
            <input method="POST" id="sign-up-email" placeholder="Email..." name="email-input" required>
            <p id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</p>
        </div class="form-group">
        <div class="form-group">
            <input type="password" method="POST" id="signup-password" placeholder="Password Must Be 8 Characters In Length" required>
        </div class="form-group">
        <div class="form-group">
            <input type="password" method="POST" id="signup-password-confirm" placeholder="Confirm password" required>
        </div class="form-group">
        <div class="form-group">
            <input class="form-check-input" type="checkbox" onclick="showHidePasswordSignup()">Show Password
        </div class="form-group">
        <div class="form-group">
            <input class="button"  type="button" value="&#x2190 Login" onclick="pageSwitchBack()">
            <input class="button" type="submit" value="Submit">
        </div class="form-group">
        <div class="form-group">
            <a class="forgot-password">Forgot your password?</a>
        </div class="form-group">
    </form>`;

//SignUp Form
let login = document.getElementById("outer").innerHTML = `
    <form class="form-container"  id="login-form" name="myForm" role="form" onsubmit="validateLogin()">
        <div class="form-group">
            <i class="fas fa-user-circle user-image"></i>
        </div>
        <div class="form-group">
            <input type="text" method="POST" id="login-email" placeholder="Email..." name="email-input" required>
            <p id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</p>
        </div>
        <div class="form-group">
            <input type="password" method="POST" id="login-password" placeholder="Password..." required>
        </div>
        <div class="form-group">
            <input class="form-check-input" type="checkbox" onclick="showHidePasswordLogin()">
            Show password
        </div>
        <div class="form-group">
            <input class="button" type="button" value="Sign Up" onclick="pageSwitch()">
            <input class="button" type="submit" value="Login">
        </div>
        <div class="form-group">
            <p class="testing-message">For Testing Purposes use "username" & "password"</p>
        </div>
        <div class="form-group">
            <a class="forgot-password">Forgot your password?</a>
        </div>
    </form>`;


function showHidePasswordLogin() {
    let x = document.getElementById("login-password");
   
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function showHidePasswordSignup() {
    let x = document.getElementById("signup-password");
    let y = document.getElementById("signup-password-confirm");
   
    if (x.type === "password" || y.type === "password") {
        x.type = "text";
        y.type = "text";
    } else {
        x.type = "password";
        y.type = "password";
    }
}


function validateLogin() {
    let attempts = 3
    let emailInfo = document.getElementById("login-email").value;
    let passwordInfo = document.getElementById('login-password').value;

    if (emailInfo == 'username' && passwordInfo == 'password') {
        alert('Welcome Back!')
        location = '/main.html'; /** Page Redirect Location */
        return false;
    } else if (emailInfo == '' || passwordInfo == '') {
        alert('Uh oh! Some fields are still blank!')
        return false;

    } else {
        attempts --;
        alert("Ahhh try that again..." +attempts+ " attempts left!");
        if ( attempts === 0){
            document.getElementById("login-email").disabled = true;
            document.getElementById("login-password").disabled = true;
            return false;
        }
    }
}

function validateSignUp(){
    let signUpEmail =  document.getElementById("sign-up-email").value;
    let signUpPassword = document.getElementById("signup-password").value;
    let pwConfirm = document.getElementById("signup-password-confirm").value;
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   
    if (validRegex.test(signUpEmail) != true){
        alert('Invalid email')
        return false;
    } 
    else if (signUpPassword.length < 8) {
        alert('Password needs to be longer')
        return false; 
    }
    else if (signUpPassword != pwConfirm) {
        alert('\nPasswords did not match!')
        return false;
    }
    else {
        alert('Welcome to the party!!!')
        return false;
    }

}

function pageSwitch(){
    if(login === login){
        document.getElementById("outer").innerHTML = signup
        return true
    } else  {
        document.getElementById("outer").innerHTML = login
        return false
    }
    
}
function pageSwitchBack(){
    if(signup === signup){
        document.getElementById("outer").innerHTML = login
        return true
    } else  {
        document.getElementById("outer").innerHTML = signup
        return false
    }
    
}
