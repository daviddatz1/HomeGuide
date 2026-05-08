const revealElements = document.querySelectorAll(".reveal");
const waitlistForms = document.querySelectorAll("[data-waitlist-form]");

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
    const scopedMessage = form
      .closest(".hero-copy, .cta-panel")
      ?.querySelector("[data-form-message]");
    const successMessage = "You're on the list. We'll send early access details soon.";

    try {
      window.localStorage.setItem("homeguideWaitlistEmail", email);
    } catch {
      // Some private browsing modes block storage; signup feedback should still work.
    }

    form.reset();

    if (scopedMessage) {
      scopedMessage.textContent = successMessage;
      scopedMessage.classList.add("success");
    }

    form.setAttribute("aria-label", successMessage);
  });
});
