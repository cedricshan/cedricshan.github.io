/* =========================================================
   Yuan Shan — Personal Website · interactions
   ========================================================= */
(() => {
  'use strict';

  /* ---------- Year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Theme toggle (dark-default) ---------- */
  const root = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  const STORAGE_KEY = 'ys-theme';

  const getInitialTheme = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
    // dark by default — only switch to light if the user explicitly prefers it
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  };

  const applyTheme = (t) => {
    if (t === 'dark') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', 'light');
    }
    localStorage.setItem(STORAGE_KEY, t);
  };

  applyTheme(getInitialTheme());

  themeBtn?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    applyTheme(current === 'light' ? 'dark' : 'light');
  });

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuBtn?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuBtn?.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Sticky nav shadow ---------- */
  const navWrap = document.querySelector('.nav-wrap');
  const onScroll = () => {
    if (!navWrap) return;
    navWrap.classList.toggle('scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  /* ---------- Project filter ---------- */
  const filterBtns = document.querySelectorAll('.filter');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterBtns.forEach((b) => b.classList.toggle('active', b === btn));

      projectCards.forEach((card) => {
        if (filter === 'all') {
          card.classList.remove('hidden');
          return;
        }
        const tags = (card.dataset.tags || '').split(/\s+/);
        card.classList.toggle('hidden', !tags.includes(filter));
      });
    });
  });

  /* ---------- Project card spotlight ---------- */
  const supportsHover = window.matchMedia('(hover: hover)').matches;
  if (supportsHover) {
    projectCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mx', `${x}%`);
        card.style.setProperty('--my', `${y}%`);
      });
    });
  }

  /* ---------- Hero portrait subtle parallax ---------- */
  const portrait = document.querySelector('[data-tilt]');
  if (portrait && supportsHover && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const parent = portrait.parentElement;
    parent.addEventListener('mousemove', (e) => {
      const rect = parent.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      portrait.style.transform = `rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg)`;
    });
    parent.addEventListener('mouseleave', () => {
      portrait.style.transform = '';
    });
  }
})();
