document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const statusMessage = document.getElementById('form-status');
  
  // Guard clause: Exit early if the elements don't exist on the page
  if (!form || !statusMessage) return;

  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
      // 1. Initialize Loading State
      statusMessage.textContent = 'Sending...';
      statusMessage.classList.remove('hidden');
      if (submitButton) submitButton.disabled = true;

      // 2. Simulate Network Request
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // 3. Handle Success State
      form.reset();
      statusMessage.textContent = 'Thank you! Your message has been sent.';

    } catch (error) {
      // Handle potential errors (useful when you swap in a real API)
      statusMessage.textContent = 'Something went wrong. Please try again.';
      console.error('Form submission error:', error);

    } finally {
      // 4. Cleanup (runs whether it succeeds or fails)
      if (submitButton) submitButton.disabled = false;
      
      setTimeout(() => {
        statusMessage.classList.add('hidden');
        statusMessage.textContent = ''; 
      }, 3000);
    }
  });
});
