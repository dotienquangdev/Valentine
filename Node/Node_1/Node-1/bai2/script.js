function submit() {
    var fullname = document.getElementById("fullname");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var fullnameError = document.getElementById("fullnameError");
    var passwordError = document.getElementById("passwordError");
    var emailError = document.getElementById("emailError");

    //// password
    if (password.value.trim() == "" || password.value == null) {
        // password.focus();
        password.classList.add("error");
        passwordError.style.display = "block";
    } else {
        password.classList.remove("error");
        passwordError.style.display = "none";
    }

    if (password.value.length < 6 && password.value.trim() != "") {
        password.classList.add("error");
        password.focus();
        document.getElementById("passwordError1").style.display = "block";
    } else {
        password.classList.remove('error');
        document.getElementById("passwordError1").style.display = "none";
    }

    var check = true;
    for (var i = 0; i < 3; i++) {
        if (isNaN(password.value[i]) && password.value.length > 3) {
            password.classList.add("error");
            password.focus();
            document.getElementById("passwordError2").style.display = "block";
            check = false;
        }
        // 
    }
    if (check) {
        document.getElementById("passwordError2").style.display = "none";

    }




    //// email 
    if (email.value.trim() == "" || email.value == null) {
        email.classList.add("error");
        emailError.style.display = "block";
    } else {
        email.classList.remove("error");
        emailError.style.display = "none";
    }
    const emailPattern1 = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    email.classList.add('error');
    if (!emailPattern.test((email.value.trim()) || email.value.trim().length <= 10) && email.value.trim() != "") {
        document.getElementById('emailError1').style.display = 'block';
        ok = false;
    } else {
        email.classList.remove('error');
        document.getElementById('emailError1').style.display = 'none';
    }



    //// fullName
    // if ((fullname.value.trim() == "" || fullname.value == null) || (fullname.value.trim().length < 6 && fullname.value.trim() != "")) {
    if (fullname.value.trim() == "" || fullname.value == null) {
        fullname.classList.add("error");
        fullnameError.style.display = "block";
        document.getElementById("fullname").focus();

    } else {
        fullname.classList.remove("error");
        fullnameError.style.display = "none";
    }

    if (fullname.value.trim().length < 6 && fullname.value.trim() != "") {
        fullname.classList.add("error");
        document.getElementById("fullname").focus();
        document.getElementById("fullnameError2").style.display = "block";
    } else {
        fullname.classList.remove("error");
        document.getElementById("fullnameError2").style.display = "none";

    }
    var checkFullname = fullname.value;
    var Capitalization = /[A-Z]/.test(checkFullname);
    if (!Capitalization && fullname.value.trim() != "") {
        fullname.classList.add("error");
        document.getElementById("fullname").focus();
        document.getElementById("fullnameError3").style.display = "block";

    } else {
        fullname.classList.remove("error");
        document.getElementById("fullnameError3").style.display = "none";

    }
    // }
}


