if (window.location.pathname.indexOf('{{ "/pt/" | relative_url }}') === 0) {
  jtd.onReady(function () {
    // the site title links to the Portuguese home
    var title = document.querySelector('.site-title');
    if (title) title.setAttribute('href', '{{ "/pt/" | relative_url }}');

    // the theme's "no results" text is hardcoded in English
    var results = document.getElementById('search-results');
    if (results) {
      new MutationObserver(function () {
        var empty = results.querySelector('.search-no-result');
        if (empty && empty.innerText === 'No results found') empty.innerText = 'Nenhum resultado encontrado';
      }).observe(results, { childList: true });
    }
  });
}
