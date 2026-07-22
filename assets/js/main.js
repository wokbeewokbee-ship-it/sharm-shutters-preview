(() => {
  const menuButton = document.querySelector('[data-menu-button]');
  const navigation = document.querySelector('[data-navigation]');
  const submenuButton = document.querySelector('[data-submenu-button]');
  const submenu = document.querySelector('[data-submenu]');
  const mobileQuery = window.matchMedia('(max-width: 900px)');

  if (menuButton && navigation) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open main menu');
    navigation.hidden = mobileQuery.matches;
  }

  const closeSubmenu = () => {
    if (!submenuButton || !submenu) return;
    submenuButton.setAttribute('aria-expanded', 'false');
    submenu.hidden = true;
  };
  const closeMenu = (restoreFocus = false) => {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open main menu');
    navigation.hidden = mobileQuery.matches;
    document.body.classList.remove('nav-open');
    closeSubmenu();
    if (restoreFocus) menuButton.focus();
  };

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      menuButton.setAttribute('aria-label', open ? 'Open main menu' : 'Close main menu');
      navigation.hidden = open;
      document.body.classList.toggle('nav-open', !open);
    });
    navigation.addEventListener('click', event => {
      if (event.target.closest('a') && mobileQuery.matches) closeMenu();
    });
  }
  if (submenuButton && submenu) {
    submenuButton.addEventListener('click', () => {
      const open = submenuButton.getAttribute('aria-expanded') === 'true';
      submenuButton.setAttribute('aria-expanded', String(!open));
      submenu.hidden = open;
    });
  }
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (submenu && !event.target.closest('.site-nav__item--has-submenu')) closeSubmenu();
  });
  const syncNavigation = () => {
    if (!navigation || !menuButton) return;
    navigation.hidden = mobileQuery.matches;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open main menu');
    document.body.classList.remove('nav-open');
    closeSubmenu();
  };
  mobileQuery.addEventListener('change', syncNavigation);

  const footer = document.querySelector('.site-footer');
  if (footer && 'IntersectionObserver' in window) {
    const footerObserver = new IntersectionObserver(entries => {
      document.body.classList.toggle('footer-visible', entries[0].isIntersecting);
    }, { threshold: 0.05 });
    footerObserver.observe(footer);
  }

  document.querySelectorAll('[data-demo-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const status = form.querySelector('[data-form-status]');
      if (status) {
        status.hidden = false;
        status.textContent = form.dataset.demoMessage || 'Demonstration only: your request has not been sent. Form delivery will be connected during WordPress integration.';
        status.focus();
      }
    });
  });

  const filterButtons = [...document.querySelectorAll('[data-project-filter]')];
  const projectCards = [...document.querySelectorAll('[data-project-category]')];
  const filterEmpty = document.querySelector('[data-filter-empty]');
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.projectFilter;
    filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    let visible = 0;
    projectCards.forEach(card => {
      const categories = card.dataset.projectCategory.split(/\s+/);
      const show = filter === 'all' || categories.includes(filter);
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (filterEmpty) filterEmpty.hidden = visible !== 0;
  }));

  document.querySelectorAll('[data-project-toggle]').forEach(button => {
    button.addEventListener('click', () => {
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      if (!panel) return;
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      button.textContent = open ? 'View project details' : 'Close project details';
      panel.hidden = open;
    });
  });
})();
