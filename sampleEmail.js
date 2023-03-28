
const messageEl = document.getElementById("message");
const email = document.querySelector("#email");
const encodedEmail = encodeURIComponent(email);
const form = document.querySelector('#form');


      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const fileInput = document.querySelector('#fileUpload');
        const file = fileInput.files[0];

        const url = `https://ew3watr9je.execute-api.ap-southeast-2.amazonaws.com/prod/metalok-testbucket/${encodedEmail}.pdf`;

        fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/pdf',
          },
          body: file,
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            console.log(`https://metalok-testbucket.s3.ap-south-1.amazonaws.com/${encodedEmail}.pdf`);
          })
       

          Email.send({
           
            SecureToken : "bc9c0a17-dbd1-49d3-80f1-c56e429d32b2",
            
            To : 'vidyavathi@metalok.io',
            From : "deviumadevi@gmail.com",
            Subject : "Demo Subject For Kyyte Contact Form",
            Body:"",
            Attachments : [
                {
                    name : "list.pdf",
                    path: `https://metalok-testbucket.s3.ap-south-1.amazonaws.com/${encodedEmail}.pdf`
                   
                }]
          
         
        }).then(
        message => alert(message)
        
        
        )
        .catch(error => alert(error))
    
    
      });
    

  
   

