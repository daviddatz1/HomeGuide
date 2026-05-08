const revealElements = document.querySelectorAll(".reveal");
const yearEl = document.getElementById("year");
const waitlistForm = document.getElementById("waitlist-form");
const feedback = document.getElementById("form-feedback");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => observer.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add("visible"));
}

if (waitlistForm && feedback) {
  waitlistForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(waitlistForm);
    const email = String(formData.get("email") || "").trim();

    if (!email || !email.includes("@")) {
      feedback.textContent = "Please enter a valid email address.";
      feedback.style.color = "#b91c1c";
      return;
    }

    feedback.textContent = "Thanks! You're on the HomeGuide early access list.";
    feedback.style.color = "#0f766e";
    waitlistForm.reset();
  });
}
