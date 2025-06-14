document.addEventListener("DOMContentLoaded", function () {
     // Add animation delay to fade-in elements
    document.querySelectorAll(".fade-in").forEach(el => {
        el.style.animationDelay = "0.5s";
    });
    // Close the menu when clicking outside
    document.addEventListener("click", function (event) {
        const nav = document.querySelector(".nav-links");
        const toggle = document.querySelector(".menu-toggle");
        if (!nav.contains(event.target) && !toggle.contains(event.target)) {
            nav.classList.remove("active");
        }
    });

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    // Function to update active navbar link based on scroll position
    function changeActiveNav() {
        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 50) {
                currentSection = section.getAttribute("id");
            }
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    }
    // Attach scroll event to update active link
    window.addEventListener("scroll", changeActiveNav);
});
 // Function to toggle the menu visibility
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const titles = ["Python", "Machine Learning", "Model Building", "Model Deployment", "Prompt Engineering"];
    const textElement = document.getElementById("dynamic-text");
    let index = 0;
    const colors = ["#ff007f", "#00e5ff", "#b5179e", "#ffcc00", "#ff0000"]; // Cyberpunk colors
    
    function glitchEffect(title) {
        let glitchText = title.split("");
        let glitchInterval = setInterval(() => {
            for (let i = 0; i < glitchText.length; i++) {
                if (Math.random() < 0.2) {
                    glitchText[i] = String.fromCharCode(33 + Math.random() * 94);
                } else {
                    glitchText[i] = title[i];
                }
            }
            textElement.textContent = glitchText.join("");
        }, 100);
        
        setTimeout(() => {
            clearInterval(glitchInterval);
            textElement.textContent = title;
            textElement.style.color = colors[index % colors.length]; // Apply neon color
            textElement.style.textShadow = `0 0 5px ${colors[index % colors.length]}, 0 0 10px ${colors[index % colors.length]}`;
            
            setTimeout(() => {
                index = (index + 1) % titles.length;
                glitchEffect(titles[index]);
            }, 2000);
        }, 1000);
    }
    
    glitchEffect(titles[index]);
});

// about-me.js
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about-section");

    function checkScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const sectionPosition = aboutSection.offsetTop + aboutSection.clientHeight / 3;

        if (scrollPosition >= sectionPosition) {
            aboutSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run on load in case it's already in view
});