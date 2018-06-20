/*--------------------------------------validate inputs in form------------------------------------------------*/
function validation()

 {

 		var name = document.forms["loginForm"]["username"];
 		var password = document.forms["loginForm"]["password"]; 
 		{
 			if (name.value == "")                                 
    			{
        			document.getElementById("error1").innerHTML=("Please enter your username");
        			name.focus();
                    return false;
    			}
/*---------------------------------------------------------------------------------------------------------------------------*/    

    		if (password.value == "")                       
    			{
       				document.getElementById("error2").innerHTML=("Please enter password");
                    document.getElementById("error1").innerHTML=("");
        			password.focus();
                    return false;
    			}
/*----------------------------------------------------------------------------------------------------------------------------*/                
            else
                {
                    document.getElementById("error2").innerHTML=("");
                    document.getElementById("error1").innerHTML=("");
                    //document.forms["loginForm"].action="http://demo6835492.mockable.io/sendEmail";
                    sendApi(name,password)
                    
                }    	
 		 }
 	}  
/*-----------------------------------------------return text from API------------------------------------------------*/

const sendApi = (name,password)=>{
                                    const params = {
                                    name:name,
                                    password:password
                                    }
                                    var http = new XMLHttpRequest()
                                    http.open('POST','http://demo6835492.mockable.io/sendEmail');
                                    http.setRequestHeader('Content-type', 'application/json');
                                    http.send(JSON.stringify(params));
                                    //document.getElementById("reply").innerHTML=this.responseText;
                                       
                                    http.onload = function() {
        
                                       // form.insertAdjacentHTML('afterend','<span class="res">Response : '+http.responseText+'</span>')
                                        
                                        document.getElementById("reply").innerHTML=http.responseText;
                                    }
                                }

