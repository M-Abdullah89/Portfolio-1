//! Script for dark and light theme toogle
const toggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  toggle.checked = savedTheme === 'dark';
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});

// Toggle theme immediately on slider click
document.querySelector('.slider').addEventListener('click', () => {
  toggle.checked = !toggle.checked;
  toggle.dispatchEvent(new Event('change'));
});
