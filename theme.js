// --------------------------
// Theme toggle (works + persists)
// --------------------------
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Set initial theme (on page load)
(function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    setLightTheme(false);
  } else if (saved === 'dark') {
    setDarkTheme(false);
  } else {
    const prefersLight = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches;
    prefersLight ? setLightTheme(false) : setDarkTheme(false);
  }
})();

// Show popup
function showThemePopup(isLight) {
  Swal.fire({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 1500,
    background: isLight ? '#fff7ed' : '#071026',
    color: isLight ? '#111827' : '#FFD700',
    icon: 'info',
    title: isLight ? '☀️ Light Mode Enabled' : '🌙 Dark Mode Enabled'
  });
}

// Light theme
function setLightTheme(showPopup = true) {
  document.documentElement.classList.add('light');
  document.documentElement.classList.remove('dark');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun');
  try { localStorage.setItem('theme', 'light'); } catch (e) {}
  if (showPopup) showThemePopup(true);
}

// Dark theme
function setDarkTheme(showPopup = true) {
  document.documentElement.classList.add('dark');
  document.documentElement.classList.remove('light');
  themeIcon.classList.remove('fa-sun');
  themeIcon.classList.add('fa-moon');
  try { localStorage.setItem('theme', 'dark'); } catch (e) {}
  if (showPopup) showThemePopup(false);
}
themeToggle.addEventListener('click', () => {
  if (document.documentElement.classList.contains('light')) {
    setDarkTheme();
  } else {
    setLightTheme();
  }

  // Icon animation
  gsap.fromTo(themeIcon,
    { rotation: 0, scale: 0.7 },
    { rotation: 360, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
  );
});

// Keyboard accessibility
themeToggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') themeToggle.click();
});
