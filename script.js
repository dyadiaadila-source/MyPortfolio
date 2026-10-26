/* 1. Dark mode */
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});

/* 2. Filter projects */
const filterButtons = document.querySelectorAll(".filterBtn");
const projects = document.querySelectorAll(".project");
const projectCount = document.getElementById("projectCount");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const filter = button.dataset.filter;
        let visibleCount = 0;

        filterButtons.forEach(function (item) {
            item.classList.remove("active");
            item.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        projects.forEach(function (project) {
            const show = filter === "all" ||
                         project.dataset.category === filter;

            project.hidden = !show;

            if (show) {
                visibleCount++;
            }
        });

        projectCount.textContent =
            "Showing " + visibleCount + " projects.";
    });
});

/* 3. Mobile navigation menu */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.textContent = isOpen ? "Close Menu" : "Menu";
    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});

navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "Menu";
        menuBtn.setAttribute("aria-label", "Open navigation");
    });
});

/* 4. Personalized greeting */
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent =
        "Good morning! Welcome to my personal portfolio.";
} else if (hour < 18) {
    greeting.textContent =
        "Good afternoon! Welcome to my personal portfolio.";
} else {
    greeting.textContent =
        "Good evening! Welcome to my personal portfolio.";
}

/* 5. Contact form and character counter */
const contactForm = document.getElementById("contactForm");
const email = document.getElementById("email");
const message = document.getElementById("message");
const formResult = document.getElementById("formResult");
const charCount = document.getElementById("charCount");

message.addEventListener("input", function () {
    charCount.textContent =
        message.value.length + "/500 characters";
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    formResult.textContent =
        "Thank you! Your form passed validation. " +
        "This demo does not send or save messages.";

    contactForm.reset();
    charCount.textContent = "0/500 characters";
});

/* 6. Back-to-top button */
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    topBtn.hidden = window.scrollY < 200;
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
