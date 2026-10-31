// Shared page code. Loads the post files, then renders index or post page.
(function () {
  var LANGS = { gu: 'ગુજરાતી', mr: 'मराठी', en: 'English' };
  var UI = {
    series:   { gu: 'તમારી ભાષામાં AI', mr: 'तुमच्या भाषेत AI', en: 'AI in your language' },
    lede:     { gu: 'દુકાનદારો, પરિવારો અને સૌ માટે સરળ ગુજરાતીમાં AI ની સમજ. દરેક પોસ્ટમાં એક નાની વાત.',
                mr: 'दुकानदार, कुटुंबे आणि सर्वांसाठी सोप्या मराठीत AI ची ओळख. प्रत्येक पोस्टमध्ये एक छोटी गोष्ट.',
                en: 'Plain-language explainers on AI for shop owners, families and anyone curious, in Gujarati and Marathi. One small idea in each post.' },
    part:     { gu: 'ભાગ', mr: 'भाग', en: 'Part' },
    released: { gu: 'ઓમ દોરકરની {n} ભાગની માર્ગદર્શિકા, {d} ના રોજ પ્રકાશિત', mr: 'ओम दोरकर यांची {n} भागांची मार्गदर्शिका, {d} रोजी प्रकाशित', en: 'A {n}-part guide by Om Dorkar, published {d}' },
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

  function validDate(d) {
    return typeof d === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(d) && d >= SITE.seriesStart && d <= today;
  }
  // Guide posts (everything except "Om writes" posts) went online together on
  // SITE.guideReleased. "Om writes" posts need their own real date: not before
  // the series started and not in the future. Anything else is a draft.
  function inGuide(p) { return !p.template && validDate(SITE.guideReleased); }
  function isPublished(p) { return inGuide(p) || validDate(p.published); }

  // Part numbers count guide posts only, so they stay the same whatever is published later.
  var partNo = {};
  function numberParts() {
    POSTS.filter(function (p) { return !p.template; })
      .sort(function (a, b) { return a.week - b.week; })
      .forEach(function (p, i) { partNo[p.id] = i + 1; });
  }
  function label(p) {
    if (inGuide(p)) return UI.part[lang] + ' ' + partNo[p.id];
    if (validDate(p.published)) return fmtDate(p.published);
    return (partNo[p.id] ? UI.part[lang] + ' ' + partNo[p.id] : '') + '<span class="badge">draft</span>';
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
      if (b.info) return window.infographic ? '<figure class="fig info">' + infographic(INFO[b.info], lang) + '</figure>' : '';
      if (b.fig) return window.FIGS && FIGS[b.fig]
        ? '<figure class="fig">' + FIGS[b.fig](lang) + (b.cap ? '<figcaption>' + esc(b.cap) + '</figcaption>' : '') + '</figure>' : '';
      if (b.ask) return '<div class="ask"><p class="meta">' + esc(UI.tryThis[lang]) + '</p><p data-ask>' + esc(b.ask) + '</p><button type="button" data-copy>' + esc(UI.copy[lang]) + '</button></div>';
      return '';
    }).join('');
  }

  // Extra detail and pictures live in data/extras-*.js, keyed by post id:
  // the picture goes after the first paragraph, the extra sections at the end.
  // The infographic (data/info-*.js) opens the post; a step diagram, if any,
  // opens the extra sections.
  function withExtras(p, body) {
    var out = body.slice();
    if (window.INFO && INFO[p.id]) out.unshift({ info: p.id });
    var x = window.EXTRAS && EXTRAS[p.id];
    if (!x) return out;
    if (x.fig) out.push({ fig: x.fig, cap: x.cap ? (x.cap[lang] || x.cap.en) : '' });
    return out.concat((x.more && (x.more[lang] || x.more.en)) || []);
  }

  function postUrl(p) { return SITE.baseUrl + 'post.html?id=' + p.id + '&lang=' + lang; }

  function renderIndex() {
    var main = document.querySelector('main');
    var list = POSTS.slice().sort(function (a, b) { return a.week - b.week; })
      .filter(function (p) { return preview || isPublished(p); });
    var intro = SITE.intro[lang];
    var guideCount = POSTS.filter(inGuide).length;
    var released = guideCount ? '<p class="meta">' + esc(UI.released[lang].replace('{n}', guideCount).replace('{d}', fmtDate(SITE.guideReleased))) + '</p>' : '';
    main.innerHTML =
      '<h1>' + esc(UI.series[lang]) + '</h1><p class="lede">' + esc(UI.lede[lang]) + '</p>' + released +
      '<div class="intro">' + intro.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') + '</div>' +
      (list.length ? '<ul class="posts"></ul>' : '<p class="empty">' + esc(UI.none[lang]) + '</p>');
    var ul = main.querySelector('.posts');
    list.forEach(function (p) {
      var t = p[lang];
      ul.appendChild(el('<li><div class="meta">' + label(p) + '</div>' +
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
      '<p class="meta">' + label(p) + (pub ? ' · ' + esc(SITE.author) : '') + '</p>' +
      '<h1>' + esc(t.title || p.en.title) + '</h1>' +
      '<p class="lede">' + esc(t.summary || '') + '</p>' + noteHtml +
      renderBlocks(withExtras(p, t.body && t.body.length ? t.body : p.en.body)) +
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
    window.POSTS = []; window.EXTRAS = {};
    (function next(k) {
      if (k >= files.length) return done();
      var s = document.createElement('script');
      s.src = files[k];
      s.onload = s.onerror = function () { next(k + 1); };
      document.head.appendChild(s);
    })(0);
  }

  loadAll(POST_FILES, function () {
    numberParts(); header(); footer();
    if (document.body.dataset.page === 'post') renderPost(); else renderIndex();
  });
})();
