function validateForm() {
  var name = document.forms["signUpForm"]["name"].value;
  var uname = document.forms["signUpForm"]["uname"].value;
  var pnum = document.forms["signUpForm"]["pnum"].value;
  var email = document.forms["signUpForm"]["email"].value;

  if (name == "") {
    alert("Name must be filled");
    document.signUpForm.name.focus();
    return false;
  }
  if (uname == "") {
    document.signUpForm.uname.focus();
    alert("Username must be filled");
    return false;
  }

  if (pnum == "") {
    document.signUpForm.pnum.focus();
    alert("Phone Number must be filled");
    return false;
  }

  if (/^[0-9]+$/.test(signUpForm.pnum.value) == false) {
    alert("Phone Number invalid");
    document.signUpForm.pnum.focus();
    return false;
  }

  if (email == "") {
    document.signUpForm.email.focus();
    alert("Email must be filled");
    return false;
  }

  if (
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      signUpForm.email.value
    ) == false
  ) {
    alert("Email Id invalid");
    document.signUpForm.email.focus();
    return false;
  }
}