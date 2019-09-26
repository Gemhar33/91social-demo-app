export function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export function validatePassword(password) {
	var passwExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	return passwExp.test(password);
}

export function validatePhone(number) {
	var phonenoExp = /^\d{10}$/;
	return phonenoExp.test(String(number));
}

export function validateText(text) {
	var letters = /^[a-zA-Z ]*$/;
	return letters.test(text);
}

export function validateNumber(number) {
	var NumExp = /^\d*$/;
	return NumExp.test(String(number)) && String(number).length < 11;
}
