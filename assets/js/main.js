// Initialize Lucide Icons
lucide.createIcons();

// Navbar Scroll Effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("bg-background/80", "shadow-lg");
    navbar.classList.remove("border-transparent");
  } else {
    navbar.classList.remove("bg-background/80", "shadow-lg");
    navbar.classList.add("border-transparent");
  }
});

// Mobile Menu Logic
const btn = document.getElementById("mobile-btn");
const closeBtn = document.getElementById("mobile-close-btn");
const menu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll("[data-mobile-link]");
let isMenuOpen = false;

// Function to open mobile menu
function openMobileMenu() {
  isMenuOpen = true;
  menu.classList.add("active");
  document.body.classList.add("menu-open");
  btn.innerHTML = '<i data-lucide="x" stroke-width="1.5" class="w-6 h-6"></i>';
  lucide.createIcons();
}

// Function to close mobile menu
function closeMobileMenu() {
  isMenuOpen = false;
  menu.classList.remove("active");
  document.body.classList.remove("menu-open");
  btn.innerHTML =
    '<i data-lucide="menu" stroke-width="1.5" class="w-6 h-6"></i>';
  lucide.createIcons();
}

// Toggle menu on button click
if (btn) {
  btn.addEventListener("click", () => {
    if (isMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
}

// Close menu on close button click
if (closeBtn) {
  closeBtn.addEventListener("click", closeMobileMenu);
}

// Close menu when clicking on any navigation link or CTA
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Add a small delay to allow the page to start scrolling before closing
    setTimeout(closeMobileMenu, 150);
  });
});

// Close menu when clicking outside the menu container
if (menu) {
  menu.addEventListener("click", (e) => {
    if (e.target === menu) {
      closeMobileMenu();
    }
  });
}

// Close menu on Escape key press
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isMenuOpen) {
    closeMobileMenu();
  }
});

// Reveal Animation on Scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Theme Toggle Logic
const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleMobileBtn = document.getElementById("theme-toggle-mobile");
const htmlElement = document.documentElement;

// Check for saved user preference, if any, on load of the website
const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  if (currentTheme === "light") {
    htmlElement.classList.add("light-mode");
    updateToggleIcon(true);
  }
}

// Function to toggle theme
function toggleTheme() {
  htmlElement.classList.toggle("light-mode");

  let theme = "dark";
  if (htmlElement.classList.contains("light-mode")) {
    theme = "light";
    updateToggleIcon(true);
  } else {
    updateToggleIcon(false);
  }
  localStorage.setItem("theme", theme);
}

// Desktop theme toggle
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", toggleTheme);
}

// Mobile theme toggle
if (themeToggleMobileBtn) {
  themeToggleMobileBtn.addEventListener("click", toggleTheme);
}

function updateToggleIcon(isLight) {
  // Update desktop toggle icon
  if (themeToggleBtn) {
    if (isLight) {
      themeToggleBtn.innerHTML = '<i data-lucide="moon" class="w-5 h-5"></i>';
    } else {
      themeToggleBtn.innerHTML = '<i data-lucide="sun" class="w-5 h-5"></i>';
    }
  }

  // Update mobile toggle icon
  if (themeToggleMobileBtn) {
    if (isLight) {
      themeToggleMobileBtn.innerHTML =
        '<i data-lucide="moon" class="w-5 h-5"></i><span class="mobile-theme-text">Toggle Theme</span>';
    } else {
      themeToggleMobileBtn.innerHTML =
        '<i data-lucide="sun" class="w-5 h-5"></i><span class="mobile-theme-text">Toggle Theme</span>';
    }
  }
  lucide.createIcons();
}

// Initialize icon state
if (htmlElement.classList.contains("light-mode")) {
  updateToggleIcon(true);
} else {
  updateToggleIcon(false);
}
