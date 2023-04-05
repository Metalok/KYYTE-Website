
const form = document.querySelector('#form');
const messageEl = document.getElementById("message");
const emailEl = document.getElementById("email")
const fullNameEl = document.getElementById("fullname")
const statusEl = document.getElementById("career-submit-status");
const submittedInput = document.getElementById('input-submit')




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
email.addEventListener("change", () => {
    validateForm(form)
})
message.addEventListener("change", () => {
    validateForm(form)
})

// Set Success Message
function setSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";


}

// Check Valid Email
function validEmail(email) {
    // const re = /^(([^<>()\[\]\\\d.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,3}))$/;
    // const re = /^[a-zA-Z]([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    // const re = /^[a-zA-Z]([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.\-\_]+\.[a-zA-Z]{2,})$/
    const re = /^[a-zA-Z]([a-zA-Z0-9._%+-]+)@([^\-\_][a-zA-Z0-9.-]+[^\-\_]\.[a-zA-Z]{2,})$/




    return re.test(String(email).toLowerCase());
}

// Form Validation Check
function validateForm(form) {
    console.log("formFullnameLength....", form)
    var nameValidateDigits = /^(?=[a-zA-Z\s]*[a-zA-Z\s])[a-zA-Z\s]{6,}$/
    var onlyDigits = /^[A-Za-z\s]*$/;
    const validateDigits = form.fullname.value.match(onlyDigits)
    const validateName = form.fullname.value.match(nameValidateDigits)
    if ((form.fullname.value.trim() === "") & (form.email.value.trim() === "") & (form.message.value === "")) {
        setError(form.fullname, "Fullname cannot be blank");
        setError(form.email, "Email canot be blank")
        setError(form.message, "Message canot be blank")


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

    if (form.message.value.trim() === "") {
        setError(form.message, "Message cannot be blank");
        return false;
    } else {
        setSuccess(form.message);
    }

    return true;

}


form.addEventListener('submit', (e) => {

    e.preventDefault();

    if (validateForm(form)) {

        Email.send({
            SecureToken: "40309061-44c7-478a-ab4f-8e6373f0bc98",
            To: 'vidyavathi@metalok.io',
            From: "kyyte@metalok.io",
            Subject: "Demo Subject For Kyyte Contact Form",
            Body: "this is a body",


        }).then(
            message => statusEl.style.display = "block",
            submittedInput.value = "Submitted",

            fullNameEl.value = "",
            emailEl.value = "",
            messageEl.value = "",
            submittedInput.style.backgroundColor = "#4CAF50"



        )
        setTimeout(() => {
            submittedInput.style.backgroundColor = "#f99400"

            submittedInput.value = "Submit"
            statusEl.style.display = "none",
                fullNameEl.style.border = "1px solid rgba(0, 0, 0, 0.2)",
                emailEl.style.border = "1px solid rgba(0, 0, 0, 0.2)",
                messageEl.style.border = "1px solid rgba(0, 0, 0, 0.2)"
            document.getElementById('facheck-circle1').style.display = "none"
            document.getElementById('facheck-circle2').style.display = "none"
            document.getElementById('facheck-circle3').style.display = "none"


        }, 5000)

            .catch(error => alert(error))

    }


    





})