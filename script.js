const users = [
  { username: "user@gmail.com", password: "password123" },
  { username: "test@gmail.com", password: "test123" },
];

const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-box");
const messageDiv = document.getElementById("message");

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

emailInput.addEventListener("input", function () {
  var emailValue = emailInput.value;

  try {
    if (isValidEmail(emailValue) && emailValue.endsWith("@gmail.com")) {
      messageDiv.innerHTML = "Email is entered correctly.";
      messageDiv.className = "success";
    } else {
      throw new Error("Please enter the correct email.");
    }
  } catch (error) {
    messageDiv.innerHTML = error.message;
    messageDiv.className = "error";
  }
});

document.getElementById("login-btn").addEventListener("click", function () {
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  try {
      
      const user = users.find(
          (user) => user.username === emailValue && user.password === passwordValue
      );

      if (user) {
          Swal.fire({
              icon: "success",
              title: "LOGIN...",
              text: "Your login was successful",
              customClass: {
                  popup: "success1",
              },
          });
      } else {
          throw new Error("The email or password is incorrect");
      }
  } catch (error) {
      Swal.fire({
          icon: "error",
          title: "ERROR...",
          text: error.message, 
          customClass: {
              popup: "error1",
          },
      });
  }
});
