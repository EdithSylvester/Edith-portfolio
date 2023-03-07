
//GET DATA

const nameInput = document.querySelector("#name"); 
const email = document.querySelector("#email"); 
const message = document.querySelector("#message"); 
const success = document.querySelector("#success"); 
const errorNodes = document.querySelectorAll(".error"); 


// VALIDATE DATA

function validateForm(){
   
    clearMessages();

    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText="Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText="Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }
    if(message.value.length < 1){
        errorNodes[2].innerText="Please enter message";
        message.classList.add("error-border");
        errorFlag = true;
   }

   if (!errorFlag){
        success.innerText = "Your message was sent. Thank you!";
         
   }
}


// CLEAR ERROR/SUCCESS MESSAGES

function clearMessages (){
    for (let i = 0; i < errorNodes.length; i++){
        errorNodes[i].inerText = "";
    }
     
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");


} 


// CHECK EMAIL VALIDATION

function emailIsValid(email){
    let  pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}