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
    { threshold: 0.16 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const waitlistForm = document.querySelector(".waitlist-form");

waitlistForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = waitlistForm.querySelector("input[type='email']");
  const message = waitlistForm.querySelector(".form-message");
  const email = emailInput.value.trim();

  if (!email || !emailInput.checkValidity()) {
    message.textContent = "Please enter a valid email to join early access.";
    emailInput.focus();
    return;
  }

  message.textContent = "You are on the list. We will be in touch soon.";
  waitlistForm.reset();
});
