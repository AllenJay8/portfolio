// Portfolio Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initContactForm();
  initSmoothScroll();
});

// ============================
// Navbar Functionality
// ============================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const navIndicators = document.querySelectorAll('.nav-indicator');

  // Add background on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('backdrop-blur-md', 'bg-background/80', 'shadow-lg');
    } else {
      navbar.classList.remove('backdrop-blur-md', 'bg-background/80', 'shadow-lg');
    }

    // Update active section
    updateActiveSection();
  });

  // Initial check
  updateActiveSection();

  function updateActiveSection() {
    const sections = ['home', 'about', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 150;

    sections.forEach((sectionId, index) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Update nav indicators
          navIndicators.forEach((indicator, i) => {
            if (i === index) {
              indicator.classList.remove('scale-x-0');
              indicator.classList.add('scale-x-100');
            } else {
              indicator.classList.add('scale-x-0');
              indicator.classList.remove('scale-x-100');
            }
          });

          // Update link colors
          navLinks.forEach((link, i) => {
            if (i === index) {
              link.classList.remove('text-muted-foreground');
              link.classList.add('text-foreground');
            } else {
              link.classList.add('text-muted-foreground');
              link.classList.remove('text-foreground');
            }
          });
        }
      }
    });
  }
}

// ============================
// Mobile Menu Functionality
// ============================
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuIcon = mobileMenuBtn.querySelector('i');
  const mobileLinks = document.querySelectorAll('.nav-link-mobile');

  // Toggle menu
  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenuIcon.classList.remove('fa-times');
      mobileMenuIcon.classList.add('fa-bars');
    } else {
      mobileMenuIcon.classList.remove('fa-bars');
      mobileMenuIcon.classList.add('fa-times');
    }
  });

  // Close menu when clicking a link
  mobileLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      mobileMenuIcon.classList.remove('fa-times');
      mobileMenuIcon.classList.add('fa-bars');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
      mobileMenu.classList.add('hidden');
      mobileMenuIcon.classList.remove('fa-times');
      mobileMenuIcon.classList.add('fa-bars');
    }
  });
}

// ============================
// Scroll Animations
// ============================
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  fadeElements.forEach(function(element) {
    observer.observe(element);
  });
}

// ============================
// Contact Form Handler
// ============================
function initContactForm() {
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('form-success');
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerHTML;

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    // Basic validation
    if (formData.name.length < 2) {
      showNotification('Name must be at least 2 characters', 'error');
      return;
    }

    if (!isValidEmail(formData.email)) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }

    if (formData.message.length < 10) {
      showNotification('Message must be at least 10 characters', 'error');
      return;
    }

    // Simulate form submission
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';

    // Simulate API call delay
    setTimeout(function() {
      // Reset form
      form.reset();

      // Show success message
      successMessage.classList.remove('hidden');

      // Reset button
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      // Hide success message after 5 seconds
      setTimeout(function() {
        successMessage.classList.add('hidden');
      }, 5000);

    }, 1500);
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 p-4 rounded-lg text-white transition-all duration-300 transform translate-y-full opacity-0 z-50';
    
    if (type === 'error') {
      notification.classList.add('bg-red-500');
    } else {
      notification.classList.add('bg-green-500');
    }

    notification.innerHTML = '<i class="fas fa-info-circle mr-2"></i>' + message;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(function() {
      notification.classList.remove('translate-y-full', 'opacity-0');
    }, 10);

    // Remove after 3 seconds
    setTimeout(function() {
      notification.classList.add('translate-y-full', 'opacity-0');
      setTimeout(function() {
        notification.remove();
      }, 300);
    }, 3000);
  }
}

// ============================
// Smooth Scroll
// ============================
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        event.preventDefault();
        
        const navHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ============================
// Utility Functions
// ============================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction() {
    const args = arguments;
    const context = this;
    
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      func.apply(context, args);
    }, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(function() {
        inThrottle = false;
      }, limit);
    }
  };
}

