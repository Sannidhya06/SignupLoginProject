document.getElementById("loginForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    const email =
        document.getElementById("loginEmail")
        .value
        .trim();

    const password =
        document.getElementById("loginPassword")
        .value;

    const users =
        JSON.parse(localStorage.getItem("users"))
        || [];

    const user = users.find(
        user =>
        user.email.toLowerCase() ===
        email.toLowerCase()
    );

    if(!user){
        alert(
            "Email address not found. Please sign up first."
        );
        return;
    }

    if(password !== user.password){
        alert(
            "Incorrect password. Please enter the same password used during sign up."
        );
        return;
    }

    alert("Login Successful!");

});