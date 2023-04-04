
// const messageEl = document.getElementById("message");
const email = document.querySelector("#email");
const fullNameEl = document.getElementById("fullname")
const phoneNbrEl = document.getElementById("phoneNumber");
const fileInput = document.querySelector('#uploadFile');

const encodedEmail = encodeURIComponent(email);
const form = document.querySelector('#form');


form.addEventListener('submit', (event) => {
  event.preventDefault();

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


  if (fullNameEl.value !== "" && fullNameEl.value.trim().length >= 6 && email.value !== "" && phoneNbrEl.value !== "" && fileInput.value !== "") {



    Email.send({

      SecureToken: "bc9c0a17-dbd1-49d3-80f1-c56e429d32b2",

      To: 'vidyavathi@metalok.io',
      From: "deviumadevi@gmail.com",
      Subject: "Demo Subject For Kyyte Contact Form",
      Body: "",
      Attachments: [
        {
          name: "list.pdf",
          path: `https://metalok-testbucket.s3.ap-south-1.amazonaws.com/${encodedEmail}.pdf`

        }]


    }).then(
      message => alert("Thank you, Your application has been submitted successfully"),
      fullNameEl.value = "",
      email.value = "",
      phoneNbrEl.value = "",
      fileInput.value = ""


    )

    setTimeout(() => {
      fullNameEl.style.border = "1px solid rgba(0, 0, 0, 0.2)",
        email.style.border = "1px solid rgba(0, 0, 0, 0.2)",
        phoneNbrEl.style.border = "1px solid rgba(0, 0, 0, 0.2)"
        document.getElementById("fa-check-circle1").style.display = "none",
        document.getElementById("fa-check-circle2").style.display = "none"

        document.getElementById("fa-check-circle3").style.display = "none"

        document.getElementById("fa-check-circle4").style.display = "none"




    }, 5000)
      .catch(error => alert(error))



  }


});





