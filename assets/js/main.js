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
// Check for saved user preference, if any, on load of the website
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  htmlElement.classList.remove("light-mode");
  updateToggleIcon(false);
} else {
  // Default to light mode (either explicit 'light' or null)
  htmlElement.classList.add("light-mode");
  updateToggleIcon(true);
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

// Tab Switching Logic for About Page
const tabConference = document.getElementById("tab-conference");
const tabUniversity = document.getElementById("tab-university");
const contentConference = document.getElementById("content-conference");
const contentUniversity = document.getElementById("content-university");

function switchToConference() {
  if (
    tabConference &&
    tabUniversity &&
    contentConference &&
    contentUniversity
  ) {
    // Update tab buttons
    tabConference.classList.add("active", "bg-primary", "text-white");
    tabConference.classList.remove(
      "bg-transparent",
      "text-textMuted",
      "border",
      "border-border"
    );

    tabUniversity.classList.remove("active", "bg-primary", "text-white");
    tabUniversity.classList.add(
      "bg-transparent",
      "text-textMuted",
      "border",
      "border-border"
    );

    // Update content visibility
    contentConference.classList.remove("hidden");
    contentUniversity.classList.add("hidden");
  }
}

function switchToUniversity() {
  if (
    tabConference &&
    tabUniversity &&
    contentConference &&
    contentUniversity
  ) {
    // Update tab buttons
    tabUniversity.classList.add("active", "bg-primary", "text-white");
    tabUniversity.classList.remove(
      "bg-transparent",
      "text-textMuted",
      "border",
      "border-border"
    );

    tabConference.classList.remove("active", "bg-primary", "text-white");
    tabConference.classList.add(
      "bg-transparent",
      "text-textMuted",
      "border",
      "border-border"
    );

    // Update content visibility
    contentUniversity.classList.remove("hidden");
    contentConference.classList.add("hidden");
  }
}

// Add event listeners
if (tabConference) {
  tabConference.addEventListener("click", switchToConference);
}

if (tabUniversity) {
  tabUniversity.addEventListener("click", switchToUniversity);
}

// Countdown Timer
function updateCountdown() {
  const targetDate = new Date("March 12, 2026 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (daysEl) daysEl.innerText = days.toString().padStart(2, "0");
    if (hoursEl) hoursEl.innerText = hours.toString().padStart(2, "0");
    if (minutesEl) minutesEl.innerText = minutes.toString().padStart(2, "0");
    if (secondsEl) secondsEl.innerText = seconds.toString().padStart(2, "0");
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();
