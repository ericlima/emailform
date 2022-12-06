document.getElementById('form').onsubmit = () => {

	// ---------------------------user name regex-------------------------------------------------------


	let name = document.getElementById('name');
	let namePattern = /\w+\s\w+/;
	let result1 = namePattern.test(name.value);
	if (result1) {
		name.classList.add('success-data');
		name.classList.remove('error-data');
		document.getElementById('sms-1').textContent = ""
	} else {
		name.classList.remove('success-data');
		name.classList.add('error-data');
		document.getElementById('sms-1').textContent = "Your name must be have a space between !"
	}

	// ---------------------------end user name regex-------------------------------------------------------


	// ---------------------------------start email regex--------------------------------------------------
	let email = document.getElementById('email');
	let emailPattern = /^[A-Za-z0-9_-]+@\w+\.(org|net|com)$/;
	let result2 = emailPattern.test(email.value);
	if (result2) {
		email.classList.add('success-data');
		email.classList.remove('error-data');
		document.getElementById('sms-2').textContent = ""
	} else {
		email.classList.remove('success-data');
		email.classList.add('error-data');
		document.getElementById('sms-2').textContent = "Email is not valid !"
	}

	// -------------------------------end email regex-----------------------------------------------


	// ---------------------------phone number regex-------------------------------------------------------
	let number = document.getElementById('phone');
	let phonePattern = /\d{4}\s\d{3}-\d{4}/     //1234 567-8910
	let result3 = phonePattern.test(number.value);
	if (result3) {
		number.classList.add('success-data');
		number.classList.remove('error-data');
		document.getElementById('sms-3').textContent = ""
	} else {
		number.classList.remove('success-data');
		number.classList.add('error-data');
		document.getElementById('sms-3').textContent = "Follow the instructions and try again !"
	}

	// ---------------------------end phone number regex-------------------------------------------------------


	// ------------------------------password regex validations--------------------------------------------------

	let password = document.getElementById('pass');
	let passPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,12})/;
	let result4 = passPattern.test(password.value);
	if (result4) {
		password.classList.add('success-data');
		password.classList.remove('error-data');
		document.getElementById('sms-4').textContent = "";
	} else {
		password.classList.remove('success-data');
		password.classList.add('error-data');
		document.getElementById('sms-4').textContent = "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character";
	}


	// ------------------------------end password regex validations--------------------------------------------------

	return false;
}




// ----------------------------------------Toggle Password Visibility---------------------------------------------------
let btn = document.getElementById('show');
let password = document.getElementById('pass');
btn.onclick = () => {

	if (btn.dataset.text == "show") {
		password.setAttribute('type', 'text');
		btn.setAttribute('data-text', 'hide');
		btn.innerHTML = "Hide";
	} else {
		password.setAttribute('type', 'password');
		btn.setAttribute('data-text', 'show');
		btn.innerHTML = "Show";
	}
}