const error_message = document.querySelector(".error-message");
const email_error = document.getElementById("email-error");
const fname = document.getElementById("form").fname;
const lname = document.getElementById("form").lname;
const email = document.getElementById("form").email;
const password = document.getElementById("form").password;

email.oninput = "this.setCustomValidity('')";

function validateForm() {
  if (
    validateInput(fname) === false ||
    validateInput(lname) === false ||
    validateEmail(email) === false ||
    validateInput(password) === false
  ) {
    if (validateInput(lname) === false) {
      if (validateEmail(email) === false) {
        if (validateInput(password) === false) {
          return false;
        }
        return false;
      }
      return false;
    }
    return false;
  }
}

function validateInput(input) {
  if (!input.value) {
    input.classList.add("error-icon");
    input.nextElementSibling.classList.add("display");

    return false;
  } else {
    input.classList.remove("error-icon");
    input.nextElementSibling.classList.remove("display");

    return true;
  }
}

function validateEmail(email) {
  if (validateInput(email) === true) {
    const regexText =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regexText.test(String(email.value).toLowerCase())) {
      email.classList.remove("error-icon");
      email_error.classList.remove("display");
      return true;
    } else {
      email.classList.add("error-icon");
      email_error.classList.add("display");
      return false;
    }
  } else {
    return validateInput(email);
  }
}
