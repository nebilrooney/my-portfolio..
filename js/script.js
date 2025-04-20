document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        { title: "Project 1", description: "This is the first project description.", details: "More details about Project 1." },
        { title: "Project 2", description: "This is the second project description.", details: "More details about Project 2." },
        { title: "Project 3", description: "This is the third project description.", details: "More details about Project 3." }
    ];

    const gallery = document.getElementById("projectGallery");

    projects.forEach((project, index) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <button class="toggle-btn">Show Details</button>
            <div class="details" style="display: none;">
                <p>${project.details}</p>
            </div>
        `;

        gallery.appendChild(projectDiv);
    });

    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", function() {
            const details = this.nextElementSibling;
            if (details.style.display === "none") {
                details.style.display = "block";
                this.textContent = "Hide Details";
            } else {
                details.style.display = "none";
                this.textContent = "Show Details";
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    
    const contactForm = document.getElementById("contactForm");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }


    contactForm.addEventListener("submit", function (event) {
        let isValid = true;

        
        if (nameField.value.trim() === "") {
            nameError.textContent = "Name is required.";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        
        if (emailField.value.trim() === "") {
            emailError.textContent = "Email is required.";
            isValid = false;
        } else if (!isValidEmail(emailField.value.trim())) {
            emailError.textContent = "Enter a valid email.";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        
        if (messageField.value.trim() === "") {
            messageError.textContent = "Message is required.";
            isValid = false;
        } else {
            messageError.textContent = "";
        }

        
        if (!isValid) {
            event.preventDefault();
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    function getUserLocation() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    document.getElementById("locationDisplay").innerText = 
                        `Latitude: ${latitude}, Longitude: ${longitude}`;
                },
                (error) => {
                    document.getElementById("locationDisplay").innerText = 
                        "Location access denied or unavailable.";
                }
            );
        } else {
            document.getElementById("locationDisplay").innerText = 
                "Geolocation is not supported by this browser.";
        }
    }

    
    function drawCanvas() {
        const canvas = document.getElementById("myCanvas");
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        let x = 10;
        let speed = 2;

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "blue";
            ctx.fillRect(x, 50, 50, 50); 
            x += speed;
            if (x > canvas.width - 50 || x < 0) speed *= -1;
            requestAnimationFrame(animate);
        }

        animate();
    }

    getUserLocation();
    drawCanvas();
});

document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
  


