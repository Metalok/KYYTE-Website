
const form = document.querySelector('#form');
const messageEl = document.getElementById("message");
const emailEl = document.getElementById("email")
const fullNameEl = document.getElementById("fullname")
console.log("contactForm........", form)
const statusEl =document.getElementById("career-submit-status");
const submittedInput = document.getElementById('input-submit')

form.addEventListener('submit', (e) => {
   
    e.preventDefault();
    console.log("fullnameValueContect,+....", fullNameEl.value)
  

    if (fullNameEl.value !== "" && fullNameEl.value.trim().length >=6 && emailEl.value !== "" && messageEl.value !== "" ){

    Email.send({
        SecureToken : "bc9c0a17-dbd1-49d3-80f1-c56e429d32b2",
        To : 'vidyavathi@metalok.io',
        From : "deviumadevi@gmail.com",
        Subject : "Demo Subject For Kyyte Contact Form",
        Body:"this is a body",
        
     
    }).then(
    message =>statusEl.style.display="block",
    submittedInput.value = "Submitted",
    submittedInput.style.backgroundColor = "#4CAF50",
    fullNameEl.value ="",
    emailEl.value = "",
    messageEl.value=""

    
    
    )
    .catch(error => alert(error))

    }





   


})