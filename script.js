
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




let currentIndex = 0;

  function showSlide(index) {
    const container = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Loop back if out of bounds
    if (index < 0) {
      currentIndex = totalItems - 1;
    } else if (index >= totalItems) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    // Move the carousel
    const offset = -currentIndex * 100;
    container.style.transform = `translateX(${offset}%)`;
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  // Optional: auto slide every 5 seconds
  setInterval(() => nextSlide(), 2000);




  const eventsData = {
        "2024-2025": [
            { img: "../images/events/aquaintance.jpg", title: "Aquaintance Party", desc: "A lively event filled with music, dancing, and delicious food! It’s a night where students come together to socialize, enjoy performances, and have fun on the dance floor, making it a memorable start to the school year." },
            { img: "../images/events/it week.jpg", title: "Compfest", desc: "A week-long celebration of technology and innovation, featuring coding competitions, tech talks, workshops, and exhibitions that showcase the latest advancements in the IT field." },
            { img: "../images/events/nstp.jpg", title: "Voluntary Program", desc: "A community outreach program under the National Service Training Program (NSTP), where students engage in volunteer activities such as environmental cleanups, educational outreach, and social services to promote civic responsibility." },
            { img: "../images/events/foundation.jpeg", title: "Foundation Day", desc: "A grand celebration honoring the school’s history and achievements, filled with parades, performances, academic competitions, and various activities that strengthen school spirit and tradition.." }
        ],
        "2025-2026": [
            { img: "event3.jpg", title: "Science Fair", desc: "Students showcase their innovative science projects and experiments." },
            { img: "event4.jpg", title: "Art Exhibit", desc: "A display of creative artworks and masterpieces by students." }
        ],
        "2026-2027": [
            { img: "event5.jpg", title: "Cultural Festival", desc: "A celebration of diversity with cultural performances and exhibits." },
            { img: "event6.jpg", title: "Sports Meet", desc: "Inter-school sports competition among students." }
        ],
        "2027-2028": [
            { img: "event5.jpg", title: "Cultural Festival", desc: "A celebration of diversity with cultural performances and exhibits." },
            { img: "event6.jpg", title: "Sports Meet", desc: "Inter-school sports competition among students." }
        ]
    };

    // Initialize Swiper
    // Existing Swiper for Events (Keep this as is)
let swiperEvents = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Function to Load Events Dynamically
function loadEvents(year) {
    const eventContainer = document.getElementById("event-container");
    eventContainer.innerHTML = ""; // Clear existing slides

    eventsData[year].forEach(event => {
        let slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        slide.innerHTML = `
            <img src="${event.img}" alt="${event.title}">
            <div class="event-info">
                <h3 class ="events-title">${event.title}</h3>
                <p>${event.desc}</p>
            </div>
        `;
        eventContainer.appendChild(slide);
    });

    swiperEvents.update(); // Update Swiper after adding slides
}

// Year Selection Buttons
document.querySelectorAll(".year-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".year-btn").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        loadEvents(this.dataset.year);
    });
});

// Load default year on page load
loadEvents("2024-2025");


// ----------------About School------------------

document.querySelectorAll(".arrow").forEach(arrow => {
    arrow.addEventListener("click", function() {
        let content = this.parentElement;
        content.classList.toggle("active");
    });
});
