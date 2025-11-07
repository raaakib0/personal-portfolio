function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  // Change icon
  const icon = document.getElementById('dark-icon');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

