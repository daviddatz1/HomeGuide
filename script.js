const revealItems = document.querySelectorAll(".reveal");
const faqButtons = document.querySelectorAll(".faq-question");
const waitlistForm = document.querySelector("#waitlist-form");
const successMessage = document.querySelector("#form-success");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -32px 0px",
    },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const parent = button.closest(".faq-item");
    const isOpen = parent.classList.contains("is-open");

    faqButtons.forEach((otherButton) => {
      otherButton.setAttribute("aria-expanded", "false");
      otherButton.closest(".faq-item").classList.remove("is-open");
    });

    if (!isOpen) {
      button.setAttribute("aria-expanded", "true");
      parent.classList.add("is-open");
    }
  });
});

if (waitlistForm) {
  waitlistForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(waitlistForm);
    const email = String(formData.get("email") || "").trim();

    if (!email) {
      successMessage.textContent = "Please enter an email address.";
      return;
    }

    try {
      localStorage.setItem("homeguide-waitlist-email", email);
    } catch (error) {
      // Ignore storage failures and still show success feedback.
    }

    successMessage.textContent =
      "You're on the list. We'll share early access details as soon as HomeGuide is ready.";
    waitlistForm.reset();
  });
}
