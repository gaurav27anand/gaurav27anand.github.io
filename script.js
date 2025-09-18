// Dark/light theme toggle with persistence and system preference fallback
const toggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(mode) {
  if (mode === 'dark') {
    document.documentElement.classList.add('dark');
    toggle.textContent = '☀️';
  } else {
    document.documentElement.classList.remove('dark');
    toggle.textContent = '🌙';
  }
}

toggle.addEventListener('click', () => {
  const dark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
  toggle.textContent = dark ? '☀️' : '🌙';
});

if (!localStorage.getItem('theme')) {
  setTheme(prefersDark.matches ? 'dark' : 'light');
} else {
  setTheme(localStorage.getItem('theme'));
}

prefersDark.addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    setTheme(e.matches ? 'dark' : 'light');
  }
});

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();
