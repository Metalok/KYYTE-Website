const submit = document.getElementsByClassName('form')[0];
const messageEl = document.getElementById("message");
const email = document.getElementById("email");

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    Email.send({
        SecureToken : "bc9c0a17-dbd1-49d3-80f1-c56e429d32b2",
        To : 'vidyavathi@metalok.io',
        From : "deviumadevi@gmail.com",
        Subject : "Demo Subject For Kyyte Contact Form",
        Body :message, email 
     
    }).then(
    message => alert(message)
    )
    .catch(error => alert(error))

})