const form = document.querySelector("#waitlist-form");
const emailInput = document.querySelector("#email");
const formMessage = document.querySelector("#form-message");
const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

const setFormMessage = (message, tone) => {
  if (!formMessage) {
    return;
  }

  formMessage.textContent = message;
  formMessage.classList.remove("is-success", "is-error");

  if (tone === "success") {
    formMessage.classList.add("is-success");
  }

  if (tone === "error") {
    formMessage.classList.add("is-error");
  }
};

if (form && emailInput) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setFormMessage("Please enter your email to join the waitlist.", "error");
      emailInput.focus();
      return;
    }

    if (!emailPattern.test(email)) {
      setFormMessage("Please enter a valid email address.", "error");
      emailInput.focus();
      return;
    }

    try {
      const storageKey = "homeguide-waitlist-email";
      window.localStorage.setItem(storageKey, email);
    } catch (error) {
      // Ignore storage failures so the signup confirmation still works.
    }

    setFormMessage("Thanks. You're on the early access list.", "success");
    form.reset();
  });
}
