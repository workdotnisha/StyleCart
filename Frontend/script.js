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
        
        // searchbar function
        document.addEventListener("DOMContentLoaded", function () {
            const searchInput = document.getElementById("searchInput");
            const clearSearch = document.getElementById("clearSearch");
            const techCards = document.querySelectorAll(".tech-card");
            const noResultsMessage = document.createElement("p");
          
            // "No Results Found" message
            noResultsMessage.classList.add("no-results");
            noResultsMessage.textContent = "No tech stack found";
            noResultsMessage.style.display = "none";
            document.querySelector(".tech-container").appendChild(noResultsMessage);
          
            searchInput.addEventListener("input", function () {
              const query = searchInput.value.toLowerCase().trim();
              let hasResults = false;
          
              clearSearch.style.display = query ? "block" : "none"; // Show clear button if text exists
          
              techCards.forEach(card => {
                const techName = card.querySelector("h2")?.textContent.toLowerCase() || "";
                const techDescription = card.querySelector("p")?.textContent.toLowerCase() || "";
                const techAdditionalInfo = card.querySelector("span")?.textContent.toLowerCase() || "";
          
                // Check if any of the elements match the search query
                if (
                  techName.includes(query) || 
                  techDescription.includes(query) || 
                  techAdditionalInfo.includes(query)
                ) {
                  card.style.display = "block";
                  hasResults = true;
                } else {
                  card.style.display = "none";
                }
              });
          
              noResultsMessage.style.display = hasResults ? "none" : "block";
            });
          
            // Clear input when the ✖ button is clicked
            clearSearch.addEventListener("click", function () {
              searchInput.value = "";
              clearSearch.style.display = "none";
              noResultsMessage.style.display = "none";
              techCards.forEach(card => card.style.display = "block");
            });
          });
          
        