
  // Dark Mode Toggle
  const themeButton = document.getElementById("themeToggle");


const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  // Animated sending text
  let dots = 0;
  status.textContent = "💬 Sending";
  status.style.color = "#00eaff";
  const loadingInterval = setInterval(() => {
    dots = (dots + 1) % 4; // cycle between 0-3 dots
    status.textContent = "📤 Sending" + ".".repeat(dots);
  }, 400);

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    clearInterval(loadingInterval);

    if (response.ok) {
      status.textContent = "✅ Your message has been sent!";
      status.style.color = "limegreen";
      form.reset();
    } else {
      throw new Error("Form submission failed");
    }
  } catch (error) {
    clearInterval(loadingInterval);
    status.textContent = "❌ Oops! Something went wrong. Please try again.";
    status.style.color = "red";
  }
});






