function updateTime() {
    const timeElement = document.getElementById('current-time');
    if(timeElement) {
        timeElement.textContent = Date.now().toString();
    }
}

updateTime();



document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // 🔒 Prevents page refresh

    // Clear all error messages
    document.querySelectorAll('.error').forEach(el => {
      el.textContent = '';
    });

    // Get and trim field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    // Validate Full Name
    if (!name) {
      document.getElementById('error-name').textContent = 'Full name is required';
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      document.getElementById('error-email').textContent = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById('error-email').textContent = 'Please enter a valid email';
      isValid = false;
    }

    // Validate Subject
    if (!subject) {
      document.getElementById('error-subject').textContent = 'Subject is required';
      isValid = false;
    }

    // Validate Message
    if (!message) {
      document.getElementById('error-message').textContent = 'Message is required';
      isValid = false;
    }

    // If all valid: show success, reset form, auto-hide
    if (isValid) {
      document.getElementById('success-message').style.display = 'block';
      form.reset();

      setTimeout(() => {
        document.getElementById('success-message').style.display = 'none';
      }, 5000);
    }
  });
});



 
          

