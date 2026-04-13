function switchPage(pageName) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(pageName).classList.add('active');
  const btn = document.querySelector(`.nav-btn[data-page="${pageName}"]`);
  if (btn) btn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => switchPage(btn.dataset.page));
});

function toggleArticle(btn) {
  const full = btn.nextElementSibling;
  const isOpen = full.style.display !== 'none';
  full.style.display = isOpen ? 'none' : 'block';
  btn.textContent = isOpen ? 'Read more ↓' : 'Read less ↑';
}
