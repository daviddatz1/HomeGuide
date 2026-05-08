const revealElements = document.querySelectorAll(".reveal");
const waitlistForms = document.querySelectorAll("[data-waitlist-form]");
const heroFormMessage = document.querySelector("[data-form-message]");

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
    { threshold: 0.16 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

waitlistForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = form.querySelector('input[type="email"]');

    if (!emailInput || !emailInput.checkValidity()) {
      emailInput?.reportValidity();
      return;
    }

    const email = emailInput.value.trim();
    const successMessage = "You're on the list. We'll send early access details soon.";

    window.localStorage.setItem("homeguideWaitlistEmail", email);
    form.reset();

    if (heroFormMessage) {
      heroFormMessage.textContent = successMessage;
      heroFormMessage.classList.add("success");
    }

    form.setAttribute("aria-label", successMessage);
  });
});
