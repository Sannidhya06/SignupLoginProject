document.getElementById("signupForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact").value.trim();

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

    // Get existing users
    let users =
        JSON.parse(localStorage.getItem("users")) || [];

    // Duplicate Email Check
    const emailExists = users.some(
        user =>
        user.email.toLowerCase() ===
        email.toLowerCase()
    );

    if(emailExists){
        alert(
            "An account with this email already exists."
        );
        return;
    }

    // Duplicate Contact Number Check
    const contactExists = users.some(
        user => user.contact === contact
    );

    if(contactExists){
        alert(
            "This contact number is already registered."
        );
        return;
    }

    const user = {
        name,
        email,
        contact,
        password
    };

    users.push(user);

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    alert("Account created successfully!");

    window.location.href = "login.html";
});