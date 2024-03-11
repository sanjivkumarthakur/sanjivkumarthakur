        // Your existing scripts

        // Function to show the login modal
        function showLoginModal() {
            document.getElementById("loginModal").style.display = "block";
        }

        // Function to check login credentials
        function checkLogin() {
            var enteredUsernameOrEmail = document.getElementById("loginUsernameOrEmail").value;
            var enteredPassword = document.getElementById("loginPassword").value;

            // Check credentials (replace with your authentication logic)
            if (enteredUsernameOrEmail === "Sanjiv" && enteredPassword === "Jaimatadi1@#") {
                alert("Login successful! Welcome, Sanjiv Kumar Thakur!");
                document.getElementById("loginModal").style.display = "none";
            } else {
                alert("Invalid credentials. Please try again.");
            }
        }

        function changeBackgroundColor() {
            const colors = ['#ffcc00', '#66ccff', '#ff99cc', '#99ff99', '#ccccff'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
        }
		function Facebook()
		{
		  window.open("https://www.facebook.com/profile.php?id=100055642376948&mibextid=LQQJ4d");
		}
		function whatsapp()
		{
		 alert("Whatsapp Number: 9746297764");
		}
        function game(){
            window.open("C:\Users\sharm\OneDrive\Documents\myvscode\sss\game.html");
        }