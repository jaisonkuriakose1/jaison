
    var divs = ["login", "signup", "contact"];
    var visibleDivId = null;
    function toggleVisibility(divId) {
      if(visibleDivId === divId) {
        visibleDivId = null;
      } else {
        visibleDivId = divId;
      }
      hideNonVisibleDivs();
    }
    function hideNonVisibleDivs() {
      var i, divId, div;
      for(i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if(visibleDivId === divId) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      }
    }





function SignupValidation()
 {

        var semail= document.getElementById("semail"); 
    var sname = document.getElementById("sname");
    var spassword = document.getElementById("spassword");
        var emailFormat = (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);

    
/*--------------------------------------------------email validation------------------------------------------------------------*/
           
            if (emailFormat.test(semail.value) == false)                                 
                {
                    document.getElementById("error5").innerHTML=("Please enter valid email id");
               
                }
              else{
                document.getElementById("error5").innerHTML=("");
              }
/*--------------------------------------------------name validation------------------------------------------------------------*/

      if (sname.value == "" || sname.value.length>20)                          
          {
              document.getElementById("error6").innerHTML=("Please enter valid name");
          
                    sname.focus();
                
               }
      
      
      else{
        document.getElementById("error6").innerHTML=("");
      }
/*--------------------------------------------------password validation-----------------------------------------------------*/
        if (spassword.value == "" || spassword.value.length<6 || spassword.value.length>15)                  
          {
                    
                    document.getElementById("error7").innerHTML=("Please enter valid password");
             
              spassword.focus();
             
          }
      else{
        document.getElementById("error7").innerHTML=("");
        signupSave(sname.value,semail.value,spassword.value);
      }
              
}           
/*---------------------------------------------return text from API----------------------------------------------------------*/ 
function signupSave(sname,semail,spassword)
{
  var usersjson=localStorage.getItem("users");
  var users=[];
  if(usersjson!=null)
  {
    users=JSON.parse(usersjson);
  }
  
  users.push({
    name:sname,
    email:semail,
    password:spassword
  })

  localStorage.setItem("users",JSON.stringify(users));
  document.getElementById("sreply").innerHTML=("success");
}
  




function validation()

 {

    var name = document.getElementById("username");
    var password = document.getElementById("password");
    
      if (name.value == "")                                 
          {
              document.getElementById("error8").innerHTML=("Please enter your username");
            
                   
          }
        else{
          document.getElementById("error8").innerHTML=("");
        }  
/*---------------------------------------------------------------------------------------------------------------------------*/    

        if (password.value == "")                       
          {
              document.getElementById("error9").innerHTML=("Please enter password");

              password.focus();
                   
          }

          else{
            document.getElementById("error9").innerHTML=("");
              SigninGet(name.value,password.value)
          }    
     
  }  


// /*-----------------------------------------------return text from API------------------------------------------------*/



function SigninGet(name,password)
{
  var usersjson=localStorage.getItem("users");
  if(usersjson==null)
  {
    document.getElementById("lreply").innerHTML=("no users");
    return;
  }
  var users=JSON.parse(usersjson);
  for(const user of users)
  {
    if(user.name===name){
      if(user.password===password){
        document.getElementById("lreply").innerHTML=("login success");
        return
      }
      else{
        document.getElementById("lreply").innerHTML=("wrong password");
        return
      }   }
  }
          document.getElementById("lreply").innerHTML=("wrong user");


}



 /*-------------------------------------------Contact form--------------------------------------------*/

/*--------------------------------------validate inputs in form------------------------------------------------*/
 function ContactValidation()
{
        var cemail = document.getElementById("cemail");
        var cname = document.getElementById("cname");
        var phone = document.getElementById("phone");
        var question =document.getElementById("question");
        var emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 

    
// /*---------------------------------------------name validation-----------------------------------------------------------*/             
       if (cname.value.trim() == "" || cname.value.length>20)                          
          {
              document.getElementById("error1").innerHTML=("Please enter valid name");
             
                    cname.focus();
                   
               }

         else{

           document.getElementById("error1").innerHTML=("");
         }      

            
 /*---------------------------------------------email validation-----------------------------------------------------------*/              
            if (emailFormat.test(cemail.value) == false)       
                {                        
                   
                    document.getElementById("error2").innerHTML=("Please enter valid email id");
                                     
                  
               }

               else{

                 document.getElementById("error2").innerHTML=("");
               }

// // /*--------------------------------------------------phone validation-----------------------------------------------------------*/            
            
                   
      if (phoneFormat.test(phone.value) == false)                    
          {
                   
              document.getElementById("error3").innerHTML=("Please enter valid phone number");
              phone.focus();
          
          }

          else{

             document.getElementById("error3").innerHTML=("");
          }
// /*-----------------------------------------------question-------------------------------------------------------------------*/
               if (question.value == "" || question.value.length>200)                       
                {
                   
                    document.getElementById("error4").innerHTML=("Please enter valid question");
                  
                    question.focus();

                   
                }

                else{

                    document.getElementById("error4").innerHTML=("");
                  
                   
               alert("Success");
                }
  
    
}          
/*---------------------------------------------return text from API-----------------------------------------------------------*/ 
