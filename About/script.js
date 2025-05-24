

document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("nav-links");

    burger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        burger.classList.toggle("active");

      
        if (!navLinks.classList.contains("active")) {
            let items = navLinks.querySelectorAll("li");
            items.forEach((item) => {
                item.style.transitionDelay = "0s"; 
            });
        }
    });
}); 


document.querySelectorAll(".arrow").forEach(arrow => {
    arrow.addEventListener("click", function() {
        let content = this.parentElement;
        content.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const titleLines = document.querySelectorAll(".title-line");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.5 });

    titleLines.forEach(line => observer.observe(line));
});
document.addEventListener("DOMContentLoaded", function () {
    const titleLines = document.querySelectorAll(".nav-line");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.5 });

    titleLines.forEach(line => observer.observe(line));
});