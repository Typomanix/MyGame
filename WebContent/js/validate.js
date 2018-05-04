    function validate(){
 
       var userid=document.getElementById("iuid").value;
        //var userid=document.getElementsByName("uid").value;
       
        var firstname=document.getElementById("ifname").value;
        var lastname=document.getElementById("ilname").value;
        var email=document.getElementById("iemail").value;
        var password=document.getElementById("ipassword").value;
        if(userid.length==0)
        {
        alert("User Name Field Cannot be Left Blank");
        focus();
        return false;
        }
        
        else if(firstname.length==0)
        {
        alert("FirstName Field Cannot be Left Blank");
        focus();
        return false;
        }
        else if(lastname.length==0)
        {
        alert("Last Name Field Cannot be Left Blank");
        focus();
        return false;
        }
       else if(email.length==0)
        {
        alert("Email Field Cannot be Left Blank");
        focus();
        return false;
        }
        else if(email.indexOf(".")==-1 || email.indexOf("@")==-1)
        {
        alert("Please Enter a Valid Email Address");
        focus();
        return false;
        }
        else if(email.indexOf(".") < email.indexOf("@"))
        {
        alert("Please Enter a Valid Email Address");
        focus();
        return false;
        }
        else if(password.length==0)
        {
        alert("password Field Cannot be Left Blank");
        focus();
        return false;
        }
        else if(password.length < 6 || password.length > 10)
        {
        alert("Password length Should be \n Between 6 to 10 characters");
        focus();
        return false;
        }
       else
        {
        alert("Updating User Details...");
        return true;
        }
        }
    
    /**
 * 
 */