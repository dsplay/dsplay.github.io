// index only the pages of the language being read (/pt/... or not)
if ((docs[i].relUrl.indexOf('{{ "/pt/" | relative_url }}') === 0) !== (window.location.pathname.indexOf('{{ "/pt/" | relative_url }}') === 0)) {
  continue;
}

// accent-insensitive search: strip accents from the indexed words and from the query
if (!this.foldAccents) {
  this.foldAccents = function (token) {
    return token.update(function (word) {
      return word.normalize('NFD').replace(/[̀-ͯ]/g, '');
    });
  };
  lunr.Pipeline.registerFunction(this.foldAccents, 'foldAccents');
  this.pipeline.before(lunr.stemmer, this.foldAccents);
  this.searchPipeline.before(lunr.stemmer, this.foldAccents);
}
