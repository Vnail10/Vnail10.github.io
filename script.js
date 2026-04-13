// ── PAGE SWITCHING ──
function switchPage(pageName) {
  // hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // deactivate all nav buttons
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  // show the target page
  document.getElementById(pageName).classList.add('active');
  // activate the matching nav button
  const btn = document.querySelector(`.nav-btn[data-page="${pageName}"]`);
  if (btn) btn.classList.add('active');

  // scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// hook up nav buttons
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => switchPage(btn.dataset.page));
});

// ── ARTICLE EXPAND/COLLAPSE ──
function toggleArticle(btn) {
  const full = btn.nextElementSibling;
  const isOpen = full.style.display !== 'none';
  full.style.display = isOpen ? 'none' : 'block';
  btn.textContent = isOpen ? 'Read more ↓' : 'Read less ↑';
}
