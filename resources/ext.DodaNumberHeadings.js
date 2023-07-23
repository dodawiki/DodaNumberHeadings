mw.hook('wikipage.content').add(function () {
  // https://phabricator.wikimedia.org/T284921
  document.querySelectorAll('.mw-headline').forEach(function (headline) {
    var num = document.querySelector('#toc a[href="#' + CSS.escape(headline.id) + '"] .tocnumber');
    if (num) headline.prepend(Object.assign(document.createElement('a'), {
      className: 'mw-headline-number',
      href: '#toc',
      textContent: num.textContent + '. '
    }));
  });
});