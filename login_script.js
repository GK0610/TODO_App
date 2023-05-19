var us1=document.getElementById("username1");
var passw=document.getElementById("password1");
var error1=document.getElementById("err1");
var error2=document.getElementById("err2");
function verify(){
    if(us1.value==''|| passw.value=='')
    {
       alert("Fields cannot be empty");
       return false;
    }
   
}


    let regex1='admin';

function validate1(){
    if(regex1==us1.value){
        error1.innerText='Username is valid'
        error1.style.color='green'

        return true;


        
    }
    else{
        error1.innerText='Username is invalid'
        error1.style.color='red';
    
        // error2.style.backgroundColor = 'red';
        // error2.textContent = 'Email is invalid'
    
        return false;
    }
    }

    let strongPassword = '12345'
    
    function validate2() {
        if(strongPassword==passw.value) {
            error2.style.backgroundColor = "green";
            error2.textContent = 'Correct password';
            return true;
            // error2.innerText='Strong'
            // error2.style.color='green';
    
        } 
        // else if(mediumPassword.test(passw.value)) {
        //     error2.style.backgroundColor = 'orange';
        //     error2.textContent = 'Medium';
        //     // error2.innerText='Medium'
        //     // error2.style.color='Blue';
    
        // } 
        else {
            error2.style.backgroundColor = 'red';
            error2.textContent = 'Incorrect Password';
            return false;
            // error2.innerText='Week'
            // error2.style.color='Red';
        }    
    }

