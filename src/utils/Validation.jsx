function hasWhiteSpace(s) {
    return /\s/g.test(s);
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function mobilenumbervalidation(number) {
    const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    return re.test(number);
}


function validateUsername (username){
    
}

export function validate_Form(state) {
    var error = '';
    
 if (!validateUsername(state.username)) {
    error = "Enter valid Username.";
} else if (state.username_validate_msg.includes('exists')) {
    error = "Username already exist.";
}
 else {
    error = "";
}
return error
}

////////////////////////////////////////////////////////////////

export function validate_ClubsForm(state) {
    var error = '';
    if (state.firstname.trim() == "") {
        error = "Please Enter First Name";
    } else if (!state.lastname) {
        error = "Please Enter Last Name";
    }  else if (!state.email) {
        error = "Please Enter Email ";
    } else if (!validateEmail(state.email)) {
        error = "Enter valid Email.";
    } else if (!state.mobile) {
        error = "Please Enter Mobile Number";
    } else if (!mobilenumbervalidation(state.mobile)) {
        error = "Please Enter valid Mobile Number";
    } else if (state.email_validate_msg.includes('exists')) {
        error = "Email already exist.";
    } else if (state.phone_validate_msg.includes('exists')) {
        error = "Phone number already exists";
    }  else {
        error = "";
    }
    return error

}



///////////////////////////////////////////////////////////////////



