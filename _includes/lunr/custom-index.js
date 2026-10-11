// index only the pages of the language being read (/pt/... or not)
if ((docs[i].relUrl.indexOf('{{ "/pt/" | relative_url }}') === 0) !== (window.location.pathname.indexOf('{{ "/pt/" | relative_url }}') === 0)) {
  continue;
}
