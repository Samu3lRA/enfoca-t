(() => {
  const input = document.querySelector('#buscador');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const items = [...document.querySelectorAll('.blog-item')];
  const empty = document.querySelector('#empty-state');
  let filter = 'all';
  const render = () => {
    const query = (input?.value || '').trim().toLowerCase();
    let visible = 0;
    items.forEach(item => {
      const matchesFilter = filter === 'all' || item.dataset.category === filter;
      const matchesQuery = !query || item.dataset.search.includes(query);
      const show = matchesFilter && matchesQuery;
      item.hidden = !show;
      if (show) visible++;
    });
    if (empty) empty.hidden = visible !== 0;
  };
  input?.addEventListener('input', render);
  buttons.forEach(button => button.addEventListener('click', () => {
    filter = button.dataset.filter;
    buttons.forEach(item => item.classList.toggle('active', item === button));
    render();
  }));
})();
