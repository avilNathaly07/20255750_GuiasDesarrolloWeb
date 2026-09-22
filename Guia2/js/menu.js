/* ==========================================================
   LA PANETIÈRE — js/menu.js
   Motor genérico para las 5 páginas de menú
   (menu-comidas, menu-bebidas, menu-postres, menu-cakes,
   menu-panaderia). Lee MENU_DATA (js/menu-data.js) y arma:
     1) Los botones de pestañas
     2) Las tarjetas de producto de la pestaña activa
     3) El cambio entre pestañas con una animación suave

   CÓMO SE USA EN CADA PÁGINA:
   <section class="menu-page" data-menu-key="bebidas">
     <div class="menu-tabs" id="menuTabs"></div>
     <div class="menu-panels" id="menuPanels"></div>
   </section>
   <script src="js/menu-data.js"></script>
   <script src="js/menu.js"></script>
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('[data-menu-key]');
  if (!page || typeof MENU_DATA === 'undefined') return;

  const key = page.getAttribute('data-menu-key');
  const data = MENU_DATA[key];
  if (!data) return;

  const tabsEl = document.getElementById('menuTabs');
  const panelsEl = document.getElementById('menuPanels');

  // Si la URL trae #clave-de-pestaña (ej. menu-comidas.html#ejecutivo),
  // esa pestaña abre activa en vez de la primera.
  const hashKey = window.location.hash.replace('#', '');
  const initialKey = data.tabs.some((t) => t.key === hashKey) ? hashKey : data.tabs[0].key;

  /* ---------- Construir botones de pestaña ---------- */
  data.tabs.forEach((tab) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    const active = tab.key === initialKey;
    btn.className = 'menu-tab-btn' + (active ? ' is-active' : '');
    btn.textContent = tab.label;
    btn.dataset.tabKey = tab.key;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', active ? 'true' : 'false');
    tabsEl.appendChild(btn);
  });

  /* ---------- Construir el HTML de una tarjeta de producto ---------- */
  function priceHTML(prices) {
    if (!prices || !prices.length) return '';
    if (prices.length === 1) {
      return `<span class="menu-price">${prices[0]}</span>`;
    }
    return `<span class="menu-price menu-price--multi">${prices.join(' &nbsp;/&nbsp; ')}</span>`;
  }

  function cardHTML(item) {
    const imgBlock = item.img
      ? `<div class="menu-card-thumb">
           <img src="img/menu/${item.img}" alt="${item.name}" loading="lazy"
                onerror="this.parentElement.classList.add('menu-card-thumb--empty'); this.remove();">
         </div>`
      : `<div class="menu-card-thumb menu-card-thumb--empty"></div>`;

    const descBlock = item.desc ? `<p class="menu-card-desc">${item.desc}</p>` : '';

    return `
      <article class="menu-card reveal">
        ${imgBlock}
        <div class="menu-card-body">
          <div class="menu-card-top">
            <h3 class="menu-card-name">${item.name}</h3>
            ${priceHTML(item.prices)}
          </div>
          ${descBlock}
        </div>
      </article>`;
  }

  /* ---------- Construir el HTML de un panel completo (una pestaña) ---------- */
  function panelHTML(tab) {
    const groupsHTML = tab.groups.map((group) => {
      const heading = group.heading
        ? `<h3 class="menu-subheading reveal">${group.heading}</h3>`
        : '';
      const cards = group.items.map(cardHTML).join('');
      return `<div class="menu-group">${heading}<div class="menu-grid">${cards}</div></div>`;
    }).join('');

    const active = tab.key === initialKey;
    return `<div class="menu-panel${active ? ' is-active' : ''}" data-panel-key="${tab.key}" role="tabpanel">${groupsHTML}</div>`;
  }

  panelsEl.innerHTML = data.tabs.map(panelHTML).join('');

  /* ---------- Scroll-reveal para las tarjetas recién insertadas ---------- */
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  function observeRevealIn(container) {
    container.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
  }

  observeRevealIn(panelsEl.querySelector('.menu-panel.is-active'));

  /* ---------- Cambiar de pestaña ---------- */
  tabsEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.menu-tab-btn');
    if (!btn) return;

    const tabKey = btn.dataset.tabKey;

    tabsEl.querySelectorAll('.menu-tab-btn').forEach((b) => {
      b.classList.toggle('is-active', b === btn);
      b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
    });

    panelsEl.querySelectorAll('.menu-panel').forEach((panel) => {
      const active = panel.dataset.panelKey === tabKey;
      panel.classList.toggle('is-active', active);
      if (active) observeRevealIn(panel);
    });

    // Llevar la vista suavemente al inicio de las pestañas
    tabsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
