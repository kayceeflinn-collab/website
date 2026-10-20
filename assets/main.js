/* ==========================================================================
   SITE SETTINGS — change these in one place
   ========================================================================== */
const SITE = {
  // Paste Kaycee's booking link here (Calendly, Acuity, etc.).
  // While it's empty, every "Book a call" button goes to the contact page.
  bookingUrl: "",
};

/* ========================================================================== */
document.documentElement.classList.remove("no-js");

// Booking buttons
document.querySelectorAll("[data-book]").forEach((a) => {
  if (SITE.bookingUrl) {
    a.href = SITE.bookingUrl;
    a.target = "_blank";
    a.rel = "noopener";
  } else {
    a.href = "contact.html#book";
  }
});
// On the contact page: the main button opens the booking page, or scrolls to the form until there is one
document.querySelectorAll("[data-book-primary]").forEach((a) => {
  if (SITE.bookingUrl) {
    a.href = SITE.bookingUrl;
    a.target = "_blank";
    a.rel = "noopener";
  }
});

// Header background on scroll
const header = document.querySelector(".site-header");
const onScroll = () => header && header.classList.toggle("scrolled", window.scrollY > 40);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobile menu
const toggle = document.querySelector(".menu-toggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", open);
  });
  document.querySelectorAll(".nav a").forEach((a) =>
    a.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}


// Reveal on scroll
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal, .card-fan").forEach((el) => io.observe(el));

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

// Enquiry form: works out of the box on Netlify (data-netlify). Elsewhere, set the form's action.
const form = document.querySelector("form[data-enquiry]");
if (form) {
  const params = new URLSearchParams(location.search);
  const topic = params.get("topic");
  if (topic && form.topic) form.topic.value = topic;

  form.addEventListener("submit", async (e) => {
    if (form.getAttribute("action")) return; // a custom action is set — let the browser submit
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    btn.textContent = "Sending…";
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      if (!res.ok) throw new Error(res.status);
      form.innerHTML =
        '<p class="pull" style="font-size:32px">Thank you — your note is on its way.</p><p class="lead">Kaycee will be in touch personally, usually within two business days.</p>';
    } catch {
      btn.disabled = false;
      btn.textContent = "Send enquiry";
      alert("Sorry — the form couldn't be sent from here. Please try again once the site is live.");
    }
  });
}
