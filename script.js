console.log("JS is connected!")   // check to make sure script.js is being referenced properly in signup.html
                                  // it does work in chrome F12 and prints "JS is connected!"

const customers = [];

const signupForm = document.getElementById("signupForm");
const signupButton = document.getElementById("signupButton");
const signupMessage = document.getElementById("signupMessage");

signupButton.addEventListener("click", function (event) {
   event.preventDefault();

   if (!signupForm.reportValidity()) {
      alert("Missing fields!");   // check to make sure all the fields are completed by the user and throws an alert in the browser if not
      return;
   }

   const customer = {
      name: document.getElementById("name").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,   // probably not good to store this here since it'll show the password in the console log
      email: document.getElementById("email").value,
      heardAboutUs: document.getElementById("hearAboutUs").value
   };

   customers.push(customer);

   console.clear();
   console.log(customers);

   signupMessage.textContent = "Sign up successful!";

   signupForm.reset();
});
