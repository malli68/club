function hasWhiteSpace(s) {
    return /\s/g.test(s);
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
