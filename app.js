// Shared page code. Loads the post files, then renders index or post page.
(function () {
  var LANGS = { gu: 'ગુજરાતી', mr: 'मराठी', en: 'English' };
  var UI = {
    series:   { gu: 'તમારી ભાષામાં AI', mr: 'तुमच्या भाषेत AI', en: 'AI in your language' },
    lede:     { gu: 'દુકાનદારો, પરિવારો અને સૌ માટે સરળ ગુજરાતીમાં AI ની સમજ. દર અઠવાડિયે એક નાની વાત.',
                mr: 'दुकानदार, कुटुंबे आणि सर्वांसाठी सोप्या मराठीत AI ची ओळख. दर आठवड्याला एक छोटी गोष्ट.',
                en: 'Plain-language explainers on AI for shop owners, families and anyone curious, in Gujarati and Marathi. One small idea a week.' },
    week:     { gu: 'અઠવાડિયું', mr: 'आठवडा', en: 'Week' },
    from:     { gu: 'ઓમ તરફથી', mr: 'ओमकडून', en: 'From Om' },
    copy:     { gu: 'કૉપી કરો', mr: 'कॉपी करा', en: 'Copy' },
    copied:   { gu: 'કૉપી થયું ✓', mr: 'कॉपी झाले ✓', en: 'Copied ✓' },
    share:    { gu: 'WhatsApp પર મોકલો', mr: 'WhatsApp वर पाठवा', en: 'Send on WhatsApp' },
    print:    { gu: 'પોસ્ટર તરીકે છાપો', mr: 'पोस्टर म्हणून छापा', en: 'Print as a poster' },
    all:      { gu: 'બધી પોસ્ટ', mr: 'सर्व पोस्ट', en: 'All posts' },
    none:     { gu: 'પહેલી પોસ્ટ ટૂંક સમયમાં.', mr: 'पहिली पोस्ट लवकरच.', en: 'The first post is coming soon.' },
    tryThis:  { gu: 'AI ને આ લખો:', mr: 'AI ला हे लिहा:', en: 'Type this to AI:' },
  };

  var params = new URLSearchParams(location.search);
  var preview = params.get('preview') === '1';
  var today = new Date().toISOString().slice(0, 10);

  function getLang() {
    var l = params.get('lang');
    if (!l) { try { l = localStorage.getItem('lang'); } catch (e) {} }
    return LANGS[l] ? l : 'gu';
  }
  var lang = getLang();
  function setLang(l) {
    try { localStorage.setItem('lang', l); } catch (e) {}
    params.set('lang', l);
    location.search = params.toString();
  }

  // A post counts as published only with a real date: not before the series
  // started and not in the future. Anything else is shown as a draft.
  function isPublished(p) {
    return typeof p.published === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(p.published) &&
      p.published >= SITE.seriesStart && p.published <= today;
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }
  function el(html) { var d = document.createElement('div'); d.innerHTML = html; return d.firstElementChild; }

  function fmtDate(iso) {
    var d = new Date(iso + 'T00:00:00');
    var loc = { gu: 'gu-IN', mr: 'mr-IN', en: 'en-IN' }[lang];
    return d.toLocaleDateString(loc, { day: 'numeric', month: 'long', year: 'numeric' });
  }

  function header() {
    var h = document.querySelector('header.site .wrap');
    h.innerHTML = '<a class="home" href="./?lang=' + lang + (preview ? '&preview=1' : '') + '">' + esc(UI.series[lang]) + '</a><div class="langs"></div>';
    var box = h.querySelector('.langs');
    Object.keys(LANGS).forEach(function (k) {
      var b = el('<button type="button" lang="' + k + '" aria-pressed="' + (k === lang) + '">' + LANGS[k] + '</button>');
      b.onclick = function () { setLang(k); };
      box.appendChild(b);
    });
    document.documentElement.lang = lang;
  }

  function renderBlocks(blocks) {
    return blocks.map(function (b) {
      if (typeof b === 'string') return '<p>' + esc(b) + '</p>';
      if (b.h) return '<h2>' + esc(b.h) + '</h2>';
      if (b.list) return '<ul>' + b.list.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>';
      if (b.steps) return '<ol>' + b.steps.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ol>';
      if (b.tip) return '<div class="tip">' + esc(b.tip) + '</div>';
      if (b.ask) return '<div class="ask"><p class="meta">' + esc(UI.tryThis[lang]) + '</p><p data-ask>' + esc(b.ask) + '</p><button type="button" data-copy>' + esc(UI.copy[lang]) + '</button></div>';
      return '';
    }).join('');
  }

  function postUrl(p) { return SITE.baseUrl + 'post.html?id=' + p.id + '&lang=' + lang; }

  function renderIndex() {
    var main = document.querySelector('main');
    var list = POSTS.slice().sort(function (a, b) { return a.week - b.week; })
      .filter(function (p) { return preview || isPublished(p); });
    var intro = SITE.intro[lang];
    main.innerHTML =
      '<h1>' + esc(UI.series[lang]) + '</h1><p class="lede">' + esc(UI.lede[lang]) + '</p>' +
      '<div class="intro">' + intro.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') + '</div>' +
      (list.length ? '<ul class="posts"></ul>' : '<p class="empty">' + esc(UI.none[lang]) + '</p>');
    var ul = main.querySelector('.posts');
    list.forEach(function (p) {
      var t = p[lang];
      var pub = isPublished(p);
      ul.appendChild(el('<li><div class="meta">' + esc(UI.week[lang]) + ' ' + p.week +
        (pub ? ' · ' + esc(fmtDate(p.published)) : '<span class="badge">draft</span>') + '</div>' +
        '<a class="title" href="post.html?id=' + p.id + '&lang=' + lang + (preview ? '&preview=1' : '') + '">' + esc(t.title || p.en.title) + '</a>' +
        '<div>' + esc(t.summary || '') + '</div></li>'));
    });
  }

  function renderPost() {
    var main = document.querySelector('main');
    var sorted = POSTS.slice().sort(function (a, b) { return a.week - b.week; })
      .filter(function (p) { return preview || isPublished(p); });
    var i = sorted.findIndex(function (p) { return p.id === params.get('id'); });
    if (i < 0) { location.replace('./?lang=' + lang); return; }
    var p = sorted[i], t = p[lang], pub = isPublished(p);
    document.title = (t.title || p.en.title) + ' · ' + UI.series[lang];
    if (!pub) document.body.insertBefore(el('<div class="draftbar">Draft preview: not published. Only visible with ?preview=1.</div>'), document.body.firstChild);

    var note = p.om_note && p.om_note.text && p.om_note.text[lang];
    var noteHtml = note ? '<div class="note"><strong>' + esc(UI.from[lang]) + '</strong>' + esc(note) + '</div>'
      : (pub ? '' : '<div class="note missing"><strong>Om writes this</strong>' + esc(p.om_note ? p.om_note.prompt : '') + '</div>');

    var wa = (t.wa || p.en.wa || '').replace('{link}', postUrl(p));
    main.innerHTML =
      '<p class="meta">' + esc(UI.week[lang]) + ' ' + p.week + (pub ? ' · ' + esc(fmtDate(p.published)) + ' · ' + esc(SITE.author) : '') + '</p>' +
      '<h1>' + esc(t.title || p.en.title) + '</h1>' +
      '<p class="lede">' + esc(t.summary || '') + '</p>' + noteHtml +
      renderBlocks(t.body && t.body.length ? t.body : p.en.body) +
      '<div class="actions"><a class="wa" target="_blank" rel="noopener" href="https://wa.me/?text=' + encodeURIComponent(wa) + '">' + esc(UI.share[lang]) + '</a>' +
      '<button type="button" data-print>' + esc(UI.print[lang]) + '</button></div>' +
      '<nav class="pn"><span>' + (sorted[i - 1] ? link(sorted[i - 1], '← ') : '') + '</span><span>' + (sorted[i + 1] ? link(sorted[i + 1], '', ' →') : '') + '</span></nav>';

    function link(q, pre, post) {
      return '<a href="post.html?id=' + q.id + '&lang=' + lang + (preview ? '&preview=1' : '') + '">' + (pre || '') + esc(q[lang].title || q.en.title) + (post || '') + '</a>';
    }
    main.querySelector('[data-print]').onclick = function () { window.print(); };
    main.querySelectorAll('[data-copy]').forEach(function (b) {
      b.onclick = function () {
        var txt = b.parentNode.querySelector('[data-ask]').textContent;
        navigator.clipboard.writeText(txt).then(function () { b.textContent = UI.copied[lang]; });
      };
    });
  }

  function footer() {
    var f = document.querySelector('footer .wrap');
    f.innerHTML = esc(SITE.author) + ' · Vadodara · <a href="' + SITE.accessMap + '">Vadodara Access Map</a>' +
      (SITE.whatsappChannel ? ' · <a href="' + SITE.whatsappChannel + '">WhatsApp</a>' : '');
  }

  function loadAll(files, done) {
    window.POSTS = [];
    (function next(k) {
      if (k >= files.length) return done();
      var s = document.createElement('script');
      s.src = files[k];
      s.onload = s.onerror = function () { next(k + 1); };
      document.head.appendChild(s);
    })(0);
  }

  loadAll(POST_FILES, function () {
    header(); footer();
    if (document.body.dataset.page === 'post') renderPost(); else renderIndex();
  });
})();
