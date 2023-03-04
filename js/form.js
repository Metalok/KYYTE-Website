// Set Error Message
function setError(input, errormsg) {
	const formGroup = input.parentElement;
	const inputAlert = formGroup.querySelector(".input-alert");
	formGroup.className = "form-group error";
	inputAlert.innerText = errormsg;
}

// Set Success Message
function setSuccess(input) {
	const formGroup = input.parentElement;
	formGroup.className = "form-group success";
}

// Check Valid Email
function validEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

// Form Validation Check
function validateForm(form) {
    
	if (form.fullname.value.trim() === "") {
		setError(form.fullname, "Fullname cannot be blank");
		return false;
	} else {
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