// script.js

document.addEventListener("DOMContentLoaded", function() {

  // ===== Hamburger Menu Toggle =====
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector("nav ul");

  if(menuBtn) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("open"); // toggles open/close menu
    });
  }

  // ===== Contact Form Validation =====
  const form = document.querySelector("form");
  if(form) {
    form.addEventListener("submit", function(e) {
      const email = document.querySelector("#email").value;
      const name = document.querySelector("#name").value;
      const message = document.querySelector("#message").value;

      let errors = [];

      if(name.trim() === "") errors.push("Name is required.");
      if(email.trim() === "" || !email.includes("@")) errors.push("Valid email is required.");
      if(message.trim() === "") errors.push("Message cannot be empty.");

      if(errors.length > 0) {
        alert(errors.join("\n"));
        e.preventDefault(); // stops form from submitting
      }
    });
  }

});