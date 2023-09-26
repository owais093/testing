const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    wrapper.classList.add('active');
}

loginLink.onclick = () => {
    wrapper.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.querySelector(".sign-up-form");
    const signInForm = document.querySelector(".sign-in-form");
    const signUpButton = document.getElementById("sign-up-btn");
    const signInButton = document.getElementById("sign-in-btn");

    let signUpData = null;

    signUpButton.addEventListener("click", function (e) {
        e.preventDefault();

        // Show the sign-up form
        signUpForm.style.visibility = "visible";
        signInForm.style.visibility = "hidden";
    });

    signInButton.addEventListener("click", function (e) {
        e.preventDefault();

        signInForm.style.visibility = "visible";
        signUpForm.style.visibility = "hidden";
    });

    signUpForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const signUpUsername = signUpForm.querySelector('input[type="text"]').value;
        const signUpEmail = signUpForm.querySelector('input[type="email"]').value;
        const signUpPassword = signUpForm.querySelector('input[type="password"]').value;

        signUpData = {
            username: signUpUsername,
            email: signUpEmail,
            password: signUpPassword,
        };

        Swal.fire({
            icon: 'success',
            title: 'Sign Up Successful',
            text: 'You can now sign in!',
            confirmButtonText: 'OK',
        }).then(() => {
            // Clear the form fields
            signUpForm.reset();
            signInButton.click();
        });
    });

    signInForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const signInUsername = signInForm.querySelector('input[type="text"]').value;
        const signInPassword = signInForm.querySelector('input[type="password"]').value;

        if (signUpData && signInUsername === signUpData.username && signInPassword === signUpData.password) {
            // Show a SweetAlert for sign-in success
            Swal.fire({
                icon: 'success',
                title: 'Sign In Successful',
                text: 'Welcome back!',
                confirmButtonText: 'OK',
            }).then(() => {
                // Clear the form fields
                signInForm.reset();
            });
            localStorage.setItem("user", "true");
            location.href = "./index.html";
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Sign In Failed',
                text: 'Invalid credentials. Please try again OR You need to SignUp First!',
                confirmButtonText: 'OK',
            }).then(() => {
                // Clear the form fields
                signInForm.reset();
            });
        }
    });
});