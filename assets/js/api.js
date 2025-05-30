const API_BASE_URL = "https://trinity-server.onrender.com/api";

// Toast Notification
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">
      ${
        type === "success"
          ? '<i class="fa-solid fa-circle-check"></i>'
          : type === "error"
          ? '<i class="fa-solid fa-circle-xmark"></i>'
          : '<i class="fa-solid fa-circle-info"></i>'
      }
    </span>
    <span class="toast-message">${message}</span>
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}

// Contact Form Handler
async function handleContactFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;

  const payload = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    message: form.message.value,
  };

  submitBtn.disabled = true;
  submitBtn.innerHTML = `<span class="loading-spinner"></span> Sending...`;
  showToast("Sending your message...", "info");

  try {
    const res = await fetch(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    showToast(
      res.ok
        ? data.message || "Message sent successfully!"
        : data.error || "Failed to send message.",
      res.ok ? "success" : "error"
    );
    if (res.ok) form.reset();
  } catch {
    showToast("An error occurred. Please try again.", "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }
}

// Newsletter Form Handler
async function handleNewsletterSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  const email = form.querySelector('input[type="email"]').value;

  submitBtn.disabled = true;
  submitBtn.innerHTML = `<span class="loading-spinner"></span> Subscribing...`;
  showToast("Processing your subscription...", "info");

  try {
    const res = await fetch(`${API_BASE_URL}/newsletter`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    showToast(
      res.ok
        ? data.message || "Subscribed successfully!"
        : data.error || "Subscription failed.",
      res.ok ? "success" : "error"
    );
    if (res.ok) form.reset();
  } catch {
    showToast("An error occurred. Please try again.", "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }
}

// Toast + Spinner Style
const style = document.createElement("style");
style.textContent = `
  .loading-spinner {
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top: 3px solid #fff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  .toast {
    position: fixed;
    top: 20px; right: 20px;
    background: #333;
    color: white;
    padding: 14px 20px;
    border-radius: 6px;
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.3s ease;
    display: flex; align-items: center;
    gap: 10px; min-width: 280px;
    z-index: 9999;
  }
  .toast-success { background-color: #4CAF50; }
  .toast-error { background-color: #f44336; }
  .toast-info { background-color: #2196F3; }
  .toast.show {
    opacity: 1;
    transform: translateY(0);
  }
  .toast-icon { font-size: 20px; }
`;


document.head.appendChild(style);


document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactFormSubmit);
  }

  const newsletterForms = [
    document.getElementById("newsletterForm"),
    document.getElementById("footerNewsletterForm"),
  ];

  newsletterForms.forEach((form) => {
    if (!form) return;

    const input = form.querySelector('input[type="email"]');
    const btn = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = input.value.trim();
      if (!email) {
        showToast("Please enter your email", "error");
        return;
      }

      // Show loading
      btn.disabled = true;
      const originalHTML = btn.innerHTML;
      btn.innerHTML = `<span class="spinner"></span> Subscribing...`;

      try {
        const res = await fetch(`${API_BASE_URL}/newsletter`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        const data = await res.json();

        if (res.ok) {
          showToast("You've successfully subscribed! 🎉", "success");
          input.value = "";
        } else {
          showToast(data.message || "Something went wrong", "error");
        }
      } catch (err) {
        showToast("Network error. Try again.", "error");
      }

      btn.disabled = false;
      btn.innerHTML = originalHTML;
    });

    // Optional: prevent double submit on button click
    btn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
  });
});
