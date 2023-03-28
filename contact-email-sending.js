// Set Error Message

const submit = document.getElementsByClassName('form')[0];
console.log("sumit........", submit)
const statusEl =document.getElementById("career-submit-status");
const submittedInput = document.getElementById('input-submit')
// const contactEmail =document.getElementById("email").value
// const contactName = document.getElementById("fullname").value
// const contactMsg = document.getElementById("message").value



// const validateCondition= contactName.value.length >= 6 && contactEmail.value.toLowerCase().test(re) && contactMsg.value.length >= 10 
// console.log("form.............", submit)
// console.log("name..", contactName.length)
// console.log("emaillength", contactEmail.toLowerCase().text(re))
// console.log("contactmsggg...", contactMsg.length)



submit.addEventListener('submit', (e) => {
   
    e.preventDefault();
  



    Email.send({
        SecureToken : "bc9c0a17-dbd1-49d3-80f1-c56e429d32b2",
        To : 'vidyavathi@metalok.io',
        From : "deviumadevi@gmail.com",
        Subject : "Demo Subject For Kyyte Contact Form",
        Body:"this is a body",
        
     
    }).then(
    message =>statusEl.style.display="block",
    submittedInput.value = "Submitted",
    submittedInput.style.backgroundColor = "green"
    
    
    )
    .catch(error => alert(error))





   


})