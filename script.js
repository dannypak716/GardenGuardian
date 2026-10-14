console.log("JS is connected!")

const customers = [];

const signupForm = document.getElementById("signupForm");
const signupButton = document.getElementById("signupButton");
const signupMessage = document.getElementById("signupMessage");

signupButton.addEventListener("click", function (event) {
   event.preventDefault();

   if (!signupForm.reportValidity()) {
      alert("Missing fields!");
      return;
   }

   const customer = {
      name: document.getElementById("name").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      email: document.getElementById("email").value,
      heardAboutUs: document.getElementById("hearAboutUs").value
   };

   customers.push(customer);

   console.clear();
   console.log(customers);

   signupMessage.textContent = "Sign up successful!";

   signupForm.reset();
});
