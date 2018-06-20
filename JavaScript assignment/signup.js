/*--------------------------------------validate inputs in form------------------------------------------------*/
function SignupValidation()
 {
        var email = document.forms["signupForm"]["email"]; 
 		var name = document.forms["signupForm"]["name"];
 		var password = document.forms["signupForm"]["password"];
        var emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

 		{
/*--------------------------------------------------email validation------------------------------------------------------------*/
           
            if (emailFormat.test(email.value) == false)                                 
                {
                    document.getElementById("error1").innerHTML=("Please enter valid email id");
                    return false;
                    
                  
                }

/*--------------------------------------------------name validation------------------------------------------------------------*/

 			if (name.value == "" || name.value.length>20)                          
    			{
                    document.getElementById("error2").innerHTML=("Please enter valid name");
        			document.getElementById("error1").innerHTML=("");
                    name.focus();
                    return false;
               }
/*--------------------------------------------------password validation-----------------------------------------------------*/
    		if (password.value == "" || password.value.length<6 || password.value.length>15)                  
    			{
                    document.getElementById("error2").innerHTML=("");
                    document.getElementById("error3").innerHTML=("Please enter valid password");
       				document.getElementById("error1").innerHTML=("");
        			password.focus();
        			return false;
    			}
/*---------------------------------------------------------------------------------------------------------------------------------*/            
            else
                {
                    document.getElementById("error2").innerHTML=("");
                    document.getElementById("error1").innerHTML=("");
                    document.getElementById("error3").innerHTML=("");
                    sendApi(name,email,password)
                }    	
 		}
}           
/*---------------------------------------------return text from API----------------------------------------------------------*/ 
const sendApi = (name,email,password)=>{
                                    const params = {
                                    name:name,
                                    email:email,
                                    password:password
                                    }
                                    var http = new XMLHttpRequest()
                                    http.open('POST','http://demo6835492.mockable.io/sendEmail');
                                    http.setRequestHeader('Content-type', 'application/json')
                                    http.send(JSON.stringify(params))
                                    //document.getElementById("responds").innerHTML=(http.responseText);

                                    http.onload = function() {
        
                                        document.getElementById("reply").innerHTML=http.responseText;
                                    }
                                }


