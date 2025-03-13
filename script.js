document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "Project 1",
            description: "This is the first project description.",
            image: "project1.jpg"
        },
        {
            title: "Project 2",
            description: "This is the second project description.",
            image: "project2.jpg"
        },
        {
            title: "Project 3",
            description: "This is the third project description.",
            image: "project3.jpg"
        }
    ];

    const projectGallery = document.getElementById("projectGallery");

    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");

        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <button onclick="showDetails('${project.title}', '${project.description}')">Show Details</button>
        `;

        projectGallery.appendChild(projectElement);
    });
});


function showDetails(title, description) {
    alert(`${title}\n\n${description}`);
}

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

