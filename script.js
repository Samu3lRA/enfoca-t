(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 24);
  updateHeader(); window.addEventListener('scroll', updateHeader, {passive:true});
  toggle?.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); toggle.setAttribute('aria-label', open ? 'Abrir menú' : 'Cerrar menú'); nav?.classList.toggle('open', !open); document.body.classList.toggle('menu-open', !open); });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { toggle?.setAttribute('aria-expanded','false'); toggle?.setAttribute('aria-label','Abrir menú'); nav.classList.remove('open'); document.body.classList.remove('menu-open'); }));
  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', e => { const target=document.querySelector(link.getAttribute('href')); if(!target)return; e.preventDefault(); target.scrollIntoView({behavior:reduce?'auto':'smooth'}); }));
  const reveals=document.querySelectorAll('.reveal');
  if(reduce || !('IntersectionObserver' in window)){reveals.forEach(el=>el.classList.add('is-visible'));return;}
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.12,rootMargin:'0px 0px -40px'});
  reveals.forEach(el=>observer.observe(el));
})();