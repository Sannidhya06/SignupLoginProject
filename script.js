document.getElementById("signupForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    // Strong Password Validation
    const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(!passwordPattern.test(password)){
        alert(
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number."
        );
        return;
    }

    // Confirm Password Validation
    if(password !== confirmPassword){
        alert(
            "Password and Confirm Password do not match!"
        );
        return;
    }

    const user = {
        name: name,
        email: email,
        contact: contact,
        password: password
    };

    localStorage.setItem(
        "employee",
        JSON.stringify(user)
    );

    alert("Account created successfully!");

    window.location.href = "login.html";

});