document.getElementById("myForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phnnum").value;
    var message = document.getElementById("message").value;

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var messageError = document.getElementById("messageError");

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    phoneError.innerHTML = "";
    messageError.innerHTML = "";

    var errors = [];

    if (name.trim() == "") {
        nameError.innerHTML = "Name is required";
        errors.push("name");
    }

    if (email.trim() == "") {
        emailError.innerHTML = "Email is required";
        errors.push("email");
    } else if (!validateEmail(email)) {
        emailError.innerHTML = "Invalid email format";
        errors.push("email");
    }

    if (phone.trim() == "") {
        phoneError.innerHTML = "Phone number is required";
        errors.push("phone");
    } else if (!validatePhone(phone)) {
        phoneError.innerHTML = "Invalid phone number format";
        errors.push("phone");
    }

    if (message.trim() == "") {
        messageError.innerHTML = "Message is required";
        errors.push("message");
    }

    if (errors.length === 0) {
        submitForm(name, email, phone, message);
    } else {
        event.preventDefault();
    }
});

function submitForm(name, email, phone, message) {
    var req = {
        Name: name,
        Email: email,
        MobileNumber: phone,
        Message: message,
    };

    fetch("https://formspree.io/f/xjvnrway", {
        method: "POST",
        body: JSON.stringify(req),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    alert("Thanks for Contacting Seyon...!")
}


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePhone(phone) {
    var re = /^\d{10}$/;
    return re.test(phone);
}
