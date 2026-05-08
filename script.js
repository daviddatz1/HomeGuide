const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const waitlistForms = document.querySelectorAll(".waitlist-form");
const statusMessage = document.querySelector(".form-status");

waitlistForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailField = form.querySelector("input[type='email']");
    const emailValue = emailField?.value?.trim() ?? "";

    if (!statusMessage) return;

    if (!emailValue || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      statusMessage.textContent = "Please enter a valid email address.";
      statusMessage.classList.remove("success");
      statusMessage.classList.add("error");
      return;
    }

    statusMessage.textContent =
      "Thanks! You're on the list. We'll notify you when HomeGuide opens early access.";
    statusMessage.classList.remove("error");
    statusMessage.classList.add("success");
    form.reset();
  });
});

const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}
