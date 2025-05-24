
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


const projects = [
      {
        title: "Trash to Coin Bin",
        category: "arduino",
        image: "/images/Featured/Badminton.png",
        description: "Arduino-based system that gives ₱5 for 5 bottles.",
        link: "#"
      },
      {
        title: "Personal Portfolio Website",
        category: "web",
        image: "/images/Featured/Badminton.png",
        description: "A responsive personal portfolio with project showcase.",
        link: "#"
      },
      {
        title: "School Enrollment System",
        category: "school",
        image: "/images/Featured/Badminton.png",
        description: "Simple PHP-MySQL system for handling student enrollment.",
        link: "#"
      }
    ];

    const projectsGrid = document.getElementById("projectsGrid");
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");

    function renderProjects() {
      const search = searchInput.value.toLowerCase();
      const category = categoryFilter.value;
      projectsGrid.innerHTML = "";

      const filtered = projects.filter(project => {
        const matchesCategory = category ? project.category === category : true;
        const matchesSearch = project.title.toLowerCase().includes(search);
        return matchesCategory && matchesSearch;
      });

      if (filtered.length === 0) {
        projectsGrid.innerHTML = "<p>No projects found.</p>";
        return;
      }

      filtered.forEach(project => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${project.image}" alt="${project.title}">
          <div class="card-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <span class="tag">${project.category}</span><br>
            <a href="${project.link}">View Details</a>
          </div>
        `;
        projectsGrid.appendChild(card);
      });
    }

    searchInput.addEventListener("input", renderProjects);
    categoryFilter.addEventListener("change", renderProjects);

    renderProjects();
                

