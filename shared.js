// shared.js — injects nav and footer, sets active link
(function() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const pages = [
    { href: 'index.html',     label: 'Home' },
    { href: 'books.html',     label: 'Books' },
    { href: 'technology.html',label: 'Technology' },
    { href: 'impact.html',    label: 'Experience + Impact' },
    { href: 'about.html',     label: 'About' },
    { href: 'contact.html',   label: 'Contact' },
  ];
  const navHTML = `
    <nav>
      <a href="index.html" class="nav-logo">Kristi Lyn Eaton</a>
      <ul class="nav-links">
        ${pages.map(p => `<li><a href="${p.href}"${path === p.href ? ' class="active"' : ''}>${p.label}</a></li>`).join('')}
      </ul>
      <button class="hamburger" aria-label="Menu" id="hamburger-btn">☰</button>
    </nav>`;
  const footerHTML = `
    <footer>
      <div class="footer-inner">
        <a href="index.html" class="footer-logo">Kristi Lyn Eaton</a>
        <ul class="footer-links">
          ${pages.map(p => `<li><a href="${p.href}">${p.label}</a></li>`).join('')}
        </ul>
        <p class="footer-copy">© 2026 Kristi Lyn Eaton</p>
      </div>
    </footer>`;
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Mobile nav toggle
  const btn = document.getElementById('hamburger-btn');
  const navLinks = document.querySelector('.nav-links');
  btn.addEventListener('click', function() {
    const isOpen = navLinks.classList.toggle('open');
    btn.textContent = isOpen ? '✕' : '☰';
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.classList.remove('open');
      btn.textContent = '☰';
    });
  });

  // Mobile nav open style
  const style = document.createElement('style');
  style.textContent = `
    .nav-links.open {
      display: block !important;
      position: fixed;
      top: 4rem;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--cream);
      z-index: 99;
      overflow-y: auto;
      padding: 2rem 2rem;
    }
    .nav-links.open li {
      display: block;
      width: 100%;
      padding: 1.25rem 0;
      border-bottom: 1px solid var(--border);
    }
    .nav-links.open li:first-child { border-top: 1px solid var(--border); }
    .nav-links.open a {
      font-size: 1.1rem;
      font-weight: 500;
      color: var(--forest);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      display: block;
      width: 100%;
    }
    #hamburger-btn { position: relative; z-index: 200; }
  `;
  document.head.appendChild(style);
})();
