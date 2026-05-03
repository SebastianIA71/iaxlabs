(async () => {
  // ── Slug desde la URL del PADRE (no del iframe) ───────────────────────
  const parentPath = window.parent.location.pathname;
  const parts = parentPath.split('/').filter(Boolean);
  const labsIdx = parts.indexOf('labs');
  const currentSlug = labsIdx !== -1 ? parts[labsIdx + 1] : null;
  if (!currentSlug) return;

  // ── Cargar labs.json ──────────────────────────────────────────────────
  let labs;
  try {
    const res = await fetch('/experiments/labs.json');
    labs = await res.json();
  } catch (e) { return; }

  // ── Navegación ────────────────────────────────────────────────────────
  const current = labs.find(l => l.slug === currentSlug);
  if (!current || !current.topic) return;

  const topicLabs = labs
    .filter(l => l.topic === current.topic && l.order >= 1)
    .sort((a, b) => a.order - b.order);

  const topicMeta = labs.find(l => l.topic === current.topic && l.topicTitle);
  const topicTitle = topicMeta ? topicMeta.topicTitle : current.topic;    
    
  const idx = topicLabs.findIndex(l => l.slug === currentSlug);
  if (idx === -1) return;

  const prev = current.order === 1  ? null : topicLabs[idx - 1] || null;
  const next = current.order === 10 ? null : topicLabs[idx + 1] || null;

  // ── Enganchar al lab-tag ──────────────────────────────────────────────
  const tag = document.querySelector('.lab-tag');
  if (!tag) return;

  tag.style.cssText += 'display:inline-flex; align-items:center; gap:12px;';

  // ── Estilos ───────────────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    .iax-nav-btns {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .iax-nav-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 24px;
      border: 1px solid rgba(0,0,0,0.15);
      border-radius: 4px;
      background: transparent;
      color: #999;
      font-family: 'Space Mono', monospace;
      font-size: 11px;
      cursor: pointer;
      transition: background 0.15s, color 0.15s, border-color 0.15s;
      text-decoration: none;
    }
    .iax-nav-btn:hover {
      background: rgba(0,0,0,0.05);
      color: #111;
      border-color: rgba(0,0,0,0.3);
    }
    .iax-nav-btn.disabled {
      opacity: 0.2;
      pointer-events: none;
    }
    .iax-nav-btn.topic {
      width: auto;
      padding: 0 8px;
      font-size: 9px;
      letter-spacing: 0.06em;
    }
    @media (prefers-color-scheme: dark) {
      .iax-nav-btn { border-color: rgba(255,255,255,0.15); color: #666; }
      .iax-nav-btn:hover { background: rgba(255,255,255,0.05); color: #fff; border-color: rgba(255,255,255,0.3); }
    }
  `;
  document.head.appendChild(style);

  // ── Botones ───────────────────────────────────────────────────────────
  const wrap = document.createElement('div');
  wrap.className = 'iax-nav-btns';

  // ← Anterior
  const btnPrev = document.createElement('button');
  btnPrev.className = 'iax-nav-btn' + (prev ? '' : ' disabled');
  btnPrev.title = prev ? prev.name : '';
  btnPrev.innerHTML = '←';
  if (prev) btnPrev.addEventListener('click', () => {
    window.parent.location.href = `/labs/${prev.slug}`;
  });

  // TOPIC
  const btnTopic = document.createElement('button');
  btnTopic.className = 'iax-nav-btn topic';
  btnTopic.title = `Volver a ${topicTitle}`;
  btnTopic.textContent = 'TOPIC';
  btnTopic.addEventListener('click', () => {
     window.parent.location.href = `/#${current.topic}`;
  });

  // → Siguiente
  const btnNext = document.createElement('button');
  btnNext.className = 'iax-nav-btn' + (next ? '' : ' disabled');
  btnNext.title = next ? next.name : '';
  btnNext.innerHTML = '→';
  if (next) btnNext.addEventListener('click', () => {
    window.parent.location.href = `/labs/${next.slug}`;
  });

  wrap.appendChild(btnPrev);
  wrap.appendChild(btnTopic);
  wrap.appendChild(btnNext);
  tag.appendChild(wrap);
})();