alert(JS )
 const form = document.getElementById("enquiryForm");
const messageBox = document.getElementById("message-Box");

//the code will run as soon as user submits
form.addEventListener("submit",function(event){
    event.preventDefault();

    // 1. Get all values first
    const  name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const age = document.getElementById("age").value;
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
    const colour = document.getElementById("colour").value; // HTML id must be "colour" no spaces
    const address = document.getElementById("address").value; 
    const message = document.getElementById("message").value;
})
    // 2. Then validate
    if (name === "") {
        messageBox.textContent = "please enter your name";
        messageBox.style.color = "red";
        return;
    }
    if (email === "") {
        messageBox.textContent = "please enter your email";
        messageBox.style.color = "red";
        return;
    }
    if (!email.includes("@")) {
        messageBox.textContent = "please enter valid email";
        messageBox.style.color = "red";
        return;
    }
    if (number === "") {
        messageBox.textContent = "please enter your number";
        messageBox.style.color = "red";
        return;
    }
    if (age === "") {
        messageBox.textContent = "please enter your age";
        messageBox.style.color = "red";
        return;
    }
    if (quantity === "") {
        messageBox.textContent = "how many would you like to order";
        messageBox.style.color = "red";
        return;
    }
    if (product === "") {
        messageBox.textContent = "please enter what you would like to order";
        messageBox.style.color = "red";
        return;
    }
    if (colour === "") {
        messageBox.textContent = "please enter the colour you would like to order";
        messageBox.style.color = "red";
        return;
    }
    if (address === "") {
        messageBox.textContent = "please enter where i should send it to";
        messageBox.style.color = "red";
        return;
    }
    if (message === "") {
        messageBox.textContent = "please state your enquiry";
        messageBox.style.color = "red";
        return;
    }



    // CONTACT FORM VALIDATION
const contactForm = document.getElementById("contactForm");
const contactError = document.getElementById("contact-error");

if (contactForm) {
  contactForm.addEventListener("submit", function (event){
    event.preventDefault();
    contactError.textContent = "";

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const number = document.getElementById("contact-number").value.trim();
    const age = document.getElementById("contact-age").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    if (name === "") {
        contactError.textContent = "please enter your name";
        return;
    }
    if (email === "" || !email.includes("@")) {
        contactError.textContent = "please enter valid email";
        return;
    }
    if (number === "") {
        contactError.textContent = "please enter your number";
        return;
    }
    if (age === "") {
        contactError.textContent = "please enter your age";
        return;
    }
    if (!gender) {
        contactError.textContent = "please select gender";
        return;
    }

    contactForm.submit();
  });
}