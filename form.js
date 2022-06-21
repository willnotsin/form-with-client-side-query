const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // getting values of all inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "UserName cannot be empty");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "E-mail cannot be empty");
  } else if (!isEmail(emailValue)) {
    // something should be here
    setErrorFor(email, "This is not an E-mail");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Enter new password");
  } else {
    setSuccessFor(password);
  }

  if (password2 === "") {
    setErrorFor(password2, "Enter password");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords do not match");
  }else{
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //.input in the HTML file
  const small = formControl.querySelector("small");

  // add error text inside the small  tag
  small.innerText = message;

  // add error class
  formControl.className = "input error";
}
function setSuccessFor(input) {
  const formControl = input.parentElement; //.input in the HTML file
  formControl.className = "input success";
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
