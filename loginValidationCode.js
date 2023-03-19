function validateForm() {

    var getUname = document.getElementById("un");
    var getPw = document.getElementById("pw");

    // Validation - Name cannot be empty.
    if(getUname.value.trim() == "" ) {
        alert("The field 'Username' cannot be blank.");

        return false;   
    }


    /* Validation - Password must be eight characters or longer, must
       contain at least one lowercase alpahbet, one uppercase alphabet and
       at least one numeric character.
    */
    //Regular expression for Password.
    var pwRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/ ;
    
    if(!pwRegExp.test(getPw.value)) {    
        alert("Password must be eight characters or longer, must contain at least one lowercase alpahbet, one uppercase alphabet and at least one numeric character.");

        return false;

    }



} //End of Function.
