// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user theme preference on page load
const savedTheme = localStorage.getItem('portfolio_theme');
if (savedTheme === 'light') {
  body.classList.add('light-theme');
  themeToggle.textContent = '☀️';
} else {
  themeToggle.textContent = '🌙';
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  
  if (body.classList.contains('light-theme')) {
    themeToggle.textContent = '☀️';
    localStorage.setItem('portfolio_theme', 'light');
  } else {
    themeToggle.textContent = '🌙';
    localStorage.setItem('portfolio_theme', 'dark');
  }
});

// Active Link Toggle on Navigation Click
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
  });
});

// PDF Preview Modal Functions
const pdfModal = document.getElementById('pdfModal');
const pdfViewer = document.getElementById('pdfViewer');

function openPdfModal(pdfPath) {
  pdfViewer.src = pdfPath;
  pdfModal.style.display = 'flex';
}

function closePdfModal() {
  pdfModal.style.display = 'none';
  pdfViewer.src = ''; // Clear source to stop background loading
}

// Close Modal when clicking outside the PDF container
window.addEventListener('click', (event) => {
  if (event.target === pdfModal) {
    closePdfModal();
  }
});

// Close Modal when pressing the Escape key (ESC)
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closePdfModal();
  }
});

// Contact Form Mailto Handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create direct mailto string
    const mailtoUrl = `mailto:amanumd041@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open email app
    window.location.href = mailtoUrl;
  });
}

// Scroll to Top Arrow Logic
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  // Show arrow button after scrolling down 300px
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'flex';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  // Smooth scroll back to top of page
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});