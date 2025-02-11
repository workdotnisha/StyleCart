// scroll button functionality
window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                document.getElementById("scrollBtn").style.display = "block";
            } else {
                document.getElementById("scrollBtn").style.display = "none";
            }
        }

        function scrollToTop() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }


        function signup() {
            let username = document.getElementById("signup-username").value;
            let password = document.getElementById("signup-password").value;
            let message = document.getElementById("signup-message");
        
            if (localStorage.getItem(username)) {
                message.style.color = "red";
                message.innerText = "User already exists!";
            } else {
                localStorage.setItem(username, password);
                message.style.color = "green";
                message.innerText = "Signup successful! Redirecting to Home...";
                setTimeout(() => window.location.href = "index.html", 2000);
            }
        }
        
        function login() {
            let username = document.getElementById("login-username").value;
            let password = document.getElementById("login-password").value;
            let message = document.getElementById("login-message");
        
            let storedPassword = localStorage.getItem(username);
            if (storedPassword === password) {
                localStorage.setItem("loggedInUser", username);
                message.style.color = "green";
                message.innerText = "Login successful! Redirecting...";
                setTimeout(() => window.location.href = "index.html", 2000);
            } else {
                message.style.color = "red";
                message.innerText = "Invalid credentials!";
            }
        }
        