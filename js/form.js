// Set Error Message
function setError(input, errormsg) {
	const formGroup = input.parentElement;
	const inputAlert = formGroup.querySelector(".input-alert");
	formGroup.className = "form-group error";
	inputAlert.innerText = errormsg;
}

const statusText = document.getElementById("success-text")

// Set Success Message
function setSuccess(input) {
	const formGroup = input.parentElement;
	formGroup.className = "form-group success";


}

// Check Valid Email
function validEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
	return re.test(String(email).toLowerCase());
}

// Form Validation Check
function validateForm(form) {
	console.log("formFullnameLength....", form.fullname.value.trim().length)
<<<<<<< HEAD
	var nameValidateDigits = /^(?=[a-zA-Z\s]*[a-zA-Z\s])[a-zA-Z\s]{6,}$/
=======
	var nameValidateDigits = /^(?=[a-z\s]*[a-z\s])[a-z\s]{6,}$/
>>>>>>> e5f79b9793b3fe726a98abe1f819db551223ce12
	var onlyDigits = /^[A-Za-z\s]*$/;
	const validateDigits = form.fullname.value.match(onlyDigits)
	const validateName = form.fullname.value.match(nameValidateDigits)
	if (form.fullname.value.trim() === "") {
		setError(form.fullname, "Fullname cannot be blank");
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


