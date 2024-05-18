function clearErrors() {
  var errors = document.getElementsByClassName('formerror');
  for (var i = 0; i < errors.length; i++) {
    errors[i].innerHTML = "";
  }
}

function seterror(id, error) {
  // sets error inside the tag of ID
  var element = document.getElementById(id);
  element.nextElementSibling.innerHTML = error;
}

function validation() {
  var returnval = true;
  clearErrors();

  // Name
  var name = document.forms['myForm']["fname"].value;
  if (name.length < 5) {
    seterror("fname", "*name is too short");
    returnval = false;
  }
  if (name.length === 0) {
    seterror("fname", "Please enter your name");
    returnval = false;
  }

  // Email
  var email = document.forms['myForm']["email"].value;
  if (email.length > 30) {
    seterror("email", "*enter valid mail");
    returnval = false;
  }

  // Phone number
  var phnnumber = document.forms['myForm']["phnnum"].value;
  if (phnnumber.length !== 10) {
    seterror("phnnum", "*enter valid phone number");
    returnval = false;
  }

  if (phnnumber == "1234567890") {
    seterror("phnnum", "*enter Valid phone number");
    returnval = false;
  }

  // password
  var password1 = document.forms['myForm']["password"].value;
  if (password1 == name) {
    seterror("password", "*password should not be your name");
    returnval = false;
  }
  var password1 = document.forms['myForm']["password"].value;
  if (password1 == password) {
    seterror("password", "*Enter Strong Password");
    returnval = false;
  }
  var password1 = document.forms['myForm']["password"].value;
  if (password1.length < 8) {
    seterror("password", "*password should be atleast 8 characters");
    returnval = false;
  }
  // confirm password
  var password2 = document.forms['myForm']["cpassword"].value;
  if (password2 != password1) {
    seterror("cpassword", "*password and confirm password should match");
    returnval = false;
  }
  // display message login successful
  if (returnval) {
    alert("LOGIN SUCCESSFUL")
  }
  return returnval;
}
