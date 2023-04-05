
// const messageEl = document.getElementById("message");
const form = document.querySelector('#form');
const email = document.querySelector("#email");
const fullNameEl = document.getElementById("fullname")
const phoneNbrEl = document.getElementById("phoneNumber");
const fileInput = document.querySelector('#uploadFile');

const encodedEmail = encodeURIComponent(email);





// Set Error Message
//  

// Set Error Message
function setError(input, errormsg) {
  const formGroup = input.parentElement;
  const inputAlert = formGroup.querySelector(".input-alert");
  formGroup.className = "form-group error";
  inputAlert.innerText = errormsg;
}

const statusText = document.getElementById("success-text")



fullNameEl.addEventListener("change", () => {
  validateForm(form)
})
phoneNbrEl.addEventListener("change", () => {
  validateForm(form)
})
fileInput.addEventListener("change", () => {
  validateForm(form)
})
email.addEventListener("change", () => {
  validateForm(form)
})




// Set Success Message
function setSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";


}

// Check Valid Email
function validEmail(email) {
  const re = /^[a-zA-Z]([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

  return re.test(String(email).toLowerCase());
}

// Form Validation Check
function validateForm(form) {
  console.log("formFullnameLength....", form.fullname.value.trim().length)
  var phoneno = /^\d{10,}$/;
  const phoneNbrValidate = form.phoneNumber.value.match(phoneno)

  // var nameValidateDigits = /^(?=[a-zA-Z\s]*[a-zA-Z\s])[a-zA-Z\s]{6,}$/
  var nameValidateDigits = /^(?=[a-zA-Z\s]*[a-zA-Z\s])[a-zA-Z\s]{6,}$/
  
  var onlyDigits = /^[a-zA-Z\s]+$/;
  const validateDigits = form.fullname.value.match(onlyDigits)
  const validateName = form.fullname.value.match(nameValidateDigits)

  if ((form.fullname.value.trim() === "") & (form.email.value.trim() === "") & (form.uploadFile.value.trim() === "") & (form.phoneNumber.value.trim() === "")) {
    setError(form.fullname, "Fullname cannot be blank");
    setError(form.email, "Email canot be blank")
    setError(form.phoneNumber, "Phone number canot be blank")
    setError(form.uploadFile, "File canot be blank")
    return false

  }
  if (validateDigits == null) {
    setError(form.fullname, "Enter only characters");
    return false
  }

  if (validateName == null) {
    setError(form.fullname, "Enter valid Fullname which contains minimum 6 characters");
    return false;
  }
  else {
    setSuccess(form.fullname);
  }

  if (form.email.value.trim() === "") {
    setError(form.email, "Email cannot be blank");
    return false;
  } else if (!validEmail(form.email.value.trim())) {
    setError(form.email, "Email is not valid");
    return false;
  } else {
    setSuccess(form.email);
  }


  if (phoneNbrValidate == null) {
    setError(form.phoneNumber, "Enter minimum 10 digit phone number")
    return false;
  }
  else {
    setSuccess(form.phoneNumber)
  }

  if (form.uploadFile.value === "") {
    setError(form.uploadFile, "upload file canot be empty")
    return false

  }
  else {
    setSuccess(form.uploadFile)
  }





  return true;

}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log("submit calling..........")

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

  if (validateForm(form)) {





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
      fileInput.value = "",



    )
    setTimeout(() => {
      fullNameEl.style.border = "1px solid rgba(0, 0, 0, 0.2)",
        email.style.border = "1px solid rgba(0, 0, 0, 0.2)",
        phoneNbrEl.style.border = "1px solid rgba(0, 0, 0, 0.2)",
        document.getElementById("fa-check-circle1").style.display = "none",
        document.getElementById("fa-check-circle2").style.display = "none"

      document.getElementById("fa-check-circle3").style.display = "none"

      document.getElementById("fa-check-circle4").style.display = "none"





    }, 5000)


      .catch(error => alert(error))



  }


});





