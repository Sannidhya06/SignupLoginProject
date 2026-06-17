document.getElementById("loginForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    const storedUser =
        JSON.parse(localStorage.getItem("employee"));

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;

    if(!storedUser){
        alert("No account found. Please sign up first.");
        return;
    }

    if(email !== storedUser.email){
        alert("Email address not found.");
        return;
    }

    if(password !== storedUser.password){
        alert("Incorrect password. Please enter the same password used during sign up.");
        return;
    }

    alert("Login Successful!");


});