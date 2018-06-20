/*--------------------------------------validate inputs in form------------------------------------------------*/
function ContactValidation()
{
        var email = document.forms["contactForm"]["email"]; 
 		var name = document.forms["contactForm"]["name"];
        var phone = document.forms["contactForm"]["phone"];
        var question = document.forms["contactForm"]["question"];
        var emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
 		var phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 

 		{
/*---------------------------------------------name validation-----------------------------------------------------------*/             
 			if (name.value == ""|| name.value.length>20 || name.value.length<3)  /*name validation*/                               
    			{

                    document.getElementById("error1").innerHTML=("Please enter a valid name");
        			
                    name.focus();
                   return false;
               }
 /*---------------------------------------------email validation-----------------------------------------------------------*/              
            if (emailFormat.test(email.value) == false)       
                {                        
                    document.getElementById("error1").innerHTML=("");
                    document.getElementById("error2").innerHTML=("Please enter valid email id");
                    return false;
                    
                  
                }

/*--------------------------------------------------phone validation-----------------------------------------------------------*/            
            
                   
    	if (phoneFormat.test(phone.value) == false)                    
    			{
                    document.getElementById("error2").innerHTML=("");
                    document.getElementById("error1").innerHTML=("");
       				document.getElementById("error4").innerHTML=("Please enter valid phone number");
        			phone.focus();
        			return false;
    			}
/*-----------------------------------------------question-------------------------------------------------------------------*/
               if (question.value == ""|| question.value.length>200)                       
                {
                    document.getElementById("error2").innerHTML=("");
                    document.getElementById("error1").innerHTML=("");
                    document.getElementById("error4").innerHTML=("");
                    document.getElementById("error3").innerHTML=("Please enter valid question");
                  
                    question.focus();
                    return false;
                }
/*------------------------------------------------------------------------------------------------------------------------*/                
            else
                {
                    document.getElementById("error3").innerHTML=("");
                    document.getElementById("error2").innerHTML=("");
                    document.getElementById("error1").innerHTML=("");
                    sendApi(name,email,phone,question)
                    
                }    	
 		}
}          
/*---------------------------------------------return text from API-----------------------------------------------------------*/ 
const sendApi = (name,email,phone,question)=>{
                                    const params = {
                                    name:name,
                                    email:email,
                                    phone:phone,
                                    question:question
                                    }
                                    var http = new XMLHttpRequest()
                                    http.open('POST','http://demo6835492.mockable.io/sendEmail');
                                    http.setRequestHeader('Content-type', 'application/json')
                                    http.send(JSON.stringify(params))
                

                                    http.onload = function() {
        
                                        document.getElementById("reply").innerHTML=http.responseText;
                                    }
                                }
