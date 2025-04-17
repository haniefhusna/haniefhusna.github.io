document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach((item) => {
    item.addEventListener('click', function () {
      navLinks.classList.remove('active');
    });
  });

  // menuToggle.addEventListener('click', function () {
  //   console.log('Menu clicked');
  //   navLinks.classList.toggle('active');
  // });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for header height
        behavior: 'smooth',
      });
    }
  });
});

// Form validation
const contactForm = document.querySelector('.contact form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    let isValid = true;

    // Simple validation
    if (nameInput.value.trim() === '') {
      alert('Please enter your name');
      isValid = false;
    } else if (
      emailInput.value.trim() === '' ||
      !isValidEmail(emailInput.value)
    ) {
      alert('Please enter a valid email address');
      isValid = false;
    } else if (messageInput.value.trim() === '') {
      alert('Please enter a message');
      isValid = false;
    }

    if (isValid) {
      alert(
        'Thank you for your message! This is a demo form - in a real website, this would be sent to a server.'
      );
      contactForm.reset();
    }
  });
}

// Helper function to validate email format
function isValidEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Typing animation
document.addEventListener('DOMContentLoaded', function () {
  // Typing animation
  const typedTextSpan = document.querySelector('.typed-text');
  const cursor = document.querySelector('.cursor');

  const textArray = [
    'Web Developer',
    'Web Designer',
    'Web Consultant',
    'Frontend Developer',
  ];
  const typingDelay = 50;
  const erasingDelay = 40;
  const newTextDelay = 2000; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursor.classList.contains('typing')) cursor.classList.add('typing');
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      cursor.classList.remove('typing');
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if (!cursor.classList.contains('typing')) cursor.classList.add('typing');
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      cursor.classList.remove('typing');
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
