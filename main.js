const func = () =>{
    const value=document.getElementById("email").value;
    if((validateEmail(value))&&(value.length!=0)){
        document.getElementById("para").style.display="none";
    }
    else{
        document.getElementById("para").style.display = "block";
    }
}

function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField) == false) {
        return false;
    }

    return true;

}