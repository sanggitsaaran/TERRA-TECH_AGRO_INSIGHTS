document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.querySelector('.sign-up form');
    const signInForm = document.getElementById('login-form');
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = signUpForm.querySelector('input[type="text"]').value.trim();
        const email = signUpForm.querySelector('input[type="email"]').value.trim();
        const password = signUpForm.querySelector('input[type="password"]').value.trim();

        function validateName(name) {
            const nameRegex = /^[a-zA-Z\s]+$/;
            return nameRegex.test(name);
        }
        
        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    
        function validatePassword(password) {
            return password.length >= 6; 
        }
    
        function displayError(element, message) {
            const errorElement = document.getElementById(element);
            errorElement.textContent = message;
            errorElement.style.color = 'red';
        }
    
        function clearError(element) {
            const errorElement = document.getElementById(element);
            errorElement.textContent = '';
        }
    
        clearError('name-error');
        clearError('email-error');
        clearError('password-error');
        clearError('form-error');
    
        let isValid = true;
    
        if (name === '') {
            displayError('name-error', 'Please enter your name.');
            isValid = false;
        } else if (!validateName(name)) {
            displayError('name-error', 'Name should contain only characters.');
            isValid = false;
        }
    
        if (email === '') {
            displayError('email-error', 'Please enter your email.');
            isValid = false;
        } else if (!validateEmail(email)) {
            displayError('email-error', 'Please enter a valid email address.');
            isValid = false;
        }
    
        if (password === '') {
            displayError('password-error', 'Please enter your password.');
            isValid = false;
        } else if (!validatePassword(password)) {
            displayError('password-error', 'Password must be at least 6 characters long.');
            isValid = false;
        }
    
        if (isValid) {
            
            localStorage.setItem('username', name);
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password);
            window.location.href = 'home.html'; 
        }
    });

    signInForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value.trim();

        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function displayError(element, message) {
            const errorElement = document.getElementById(element);
            errorElement.textContent = message;
            errorElement.style.color = 'red';
        }
    
        function clearError(element) {
            const errorElement = document.getElementById(element);
            errorElement.textContent = '';
        }

        clearError('login-email-error');
        clearError('login-password-error');
        clearError('login-form-error');

        let isValid = true;

        if (email === '') {
            displayError('login-email-error', 'Please enter your email.');
            isValid = false;
        } else if (!validateEmail(email)) {
            displayError('login-email-error', 'Please enter a valid email address.');
            isValid = false;
        }

        if (password === '') {
            displayError('login-password-error', 'Please enter your password.');
            isValid = false;
        }

        if (isValid) {
            
            const storedEmail = localStorage.getItem('userEmail');
            const storedPassword = localStorage.getItem('userPassword');

            if (email === storedEmail && password === storedPassword) {
                localStorage.setItem('username', email);
                window.location.href = 'home.html'; 
            } else {
                alert('Incorrect email or password. Please try again.');
                if (email !== storedEmail) {
                    displayError('login-email-error', 'Incorrect email.');
                } else {
                    displayError('login-password-error', 'Incorrect password.');
                }
            }
        }
    });
});
