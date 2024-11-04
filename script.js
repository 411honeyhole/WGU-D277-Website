const emailField1 = document.getElementById('email');
const emailField2 = document.getElementById('confirmEmail');
const submitButton = document.getElementById('subButton');

// Validate the email fields
function validateEmails() {
  const email = emailField1.value;
  const confirmEmail = emailField2.value;

  if (email !== confirmEmail) {
    // Emails are not a match
    emailField2.setCustomValidity("Emails do not match");
  } else {
    // Emails are a match
    emailField2.setCustomValidity('');
  }
}

emailField1.addEventListener('input', validateEmails);
emailField2.addEventListener('input', validateEmails);
submitButton.addEventListener('click', validateEmails);