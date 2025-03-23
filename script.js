// Toggle menu icon and navbar
let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Highlight active navigation link on scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Adjust offset for better accuracy
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Scroll-up button functionality
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // All page sections
    const navLinks = document.querySelectorAll(".navbar a"); // Navbar links

    function activateLink() {
        let scrollY = window.scrollY;

        sections.forEach(section => {
            let sectionTop = section.offsetTop - 100;
            let sectionHeight = section.offsetHeight;
            let sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", activateLink);
});

function toggleSkills(id, event) {
    event.stopPropagation(); // Prevents parent div click from triggering

    var content = document.getElementById(id);
    var readMore = content.parentElement.querySelector('.read-more');
    var backButton = content.querySelector('.back');

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        readMore.style.display = "none";
        backButton.style.display = "inline-block";
    } else {
        content.style.display = "none";
        readMore.style.display = "inline-block";
        backButton.style.display = "none";
    }
}

