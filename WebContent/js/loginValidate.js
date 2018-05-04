    function loginvalidate(){
 
       var userid=document.getElementById("iuid").value;
  
       
      
        var password=document.getElementById("ipassword").value;
        if(userid.length==0)
        {
        alert("User Name Field Cannot be Left Blank");
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
       /* alert(" User Login Successfully...");*/
        return true;
        }
        }
    
    /**
 * 
 *//**
 * 
 */