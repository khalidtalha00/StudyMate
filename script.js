// Get the hamburger menu button and nav elements

  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav');

  // Toggle navigation when hamburger is clicked
  menuButton.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Close menu when clicking a nav link (optional but good UX)
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });