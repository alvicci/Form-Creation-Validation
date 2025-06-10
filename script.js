"use script";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    const messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push("");
    }

    if (!email.includes("@") && !email.includes(".")) {
      isValid = false;
      messages.push("");
    }

    if (!(password.length >= 8)) {
      isValid = false;
      messages.push("");
    }
  });
});
