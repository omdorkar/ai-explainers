// Checks every post before it goes online.
// Run from the project folder:  osascript -l JavaScript tools/check_posts.js
//
// Refuses: dates before SITE.seriesStart or in the future, published posts
// without Om's own note or a language review, unfinished "Om writes" outlines,
// duplicate ids or weeks, and missing Gujarati/Marathi text.
ObjC.import('Foundation');

function run() {
  var cwd = $.NSFileManager.defaultManager.currentDirectoryPath.js;
  function read(rel) {
    var s = $.NSString.stringWithContentsOfFileEncodingError(cwd + '/' + rel, $.NSUTF8StringEncoding, null);
    if (!s.js) throw new Error('Cannot read ' + rel);
    return s.js;
  }
  var window = {};
  function load(rel) { new Function('window', read(rel))(window); }
  load('data/site.js');
  load('data/manifest.js');
  window.POSTS = [];
  var fileErrors = [];
  window.POST_FILES.forEach(function (f) {
    try { load(f); } catch (e) { fileErrors.push(f + ': ' + e.message); }
  });
  var SITE = window.SITE, POSTS = window.POSTS;

  var fmt = $.NSDateFormatter.alloc.init;
  fmt.dateFormat = 'yyyy-MM-dd';
  var today = fmt.stringFromDate($.NSDate.date).js;

  var errors = fileErrors.slice(), warnings = [], ids = {}, weeks = {};
  var published = [], drafts = [], guide = [];
  var g = SITE.guideReleased, guideLive = false;
  if (g != null) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(g)) errors.push('SITE.guideReleased must be YYYY-MM-DD or null');
    else if (g < SITE.seriesStart) errors.push('SITE.guideReleased ' + g + ' is before the series started (' + SITE.seriesStart + '). Backdating is not allowed.');
    else if (g > today) errors.push('SITE.guideReleased ' + g + ' is in the future.');
    else guideLive = true;
  }

  POSTS.forEach(function (p) {
    var name = 'week ' + p.week + ' (' + p.id + ')';
    if (ids[p.id]) errors.push(name + ': duplicate id');
    if (weeks[p.week]) errors.push(name + ': duplicate week, also ' + weeks[p.week]);
    ids[p.id] = true; weeks[p.week] = p.id;

    ['en', 'gu', 'mr'].forEach(function (l) {
      if (!p[l] || !p[l].title) errors.push(name + ': missing ' + l + ' title');
    });

    // Guide posts carry no date of their own: they all went online on SITE.guideReleased.
    if (!p.template) {
      if (p.published !== null) errors.push(name + ': guide posts take their date from SITE.guideReleased; keep published: null');
      ['gu', 'mr'].forEach(function (l) {
        if (!p[l].body || !p[l].body.length) errors.push(name + ': missing ' + l + ' body');
        if (!p[l].wa) warnings.push(name + ': no ' + l + ' WhatsApp message');
      });
      if (guideLive) guide.push(p); else drafts.push(p);
      return;
    }
    if (p.published === null) { drafts.push(p); return; }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(p.published)) { errors.push(name + ': published must be YYYY-MM-DD or null'); return; }
    if (p.published < SITE.seriesStart) errors.push(name + ': dated ' + p.published + ', before the series started (' + SITE.seriesStart + '). Backdating is not allowed.');
    if (p.published > today) errors.push(name + ': dated ' + p.published + ', which is in the future. Set it on the day you send it.');
    var t = p.om_note && p.om_note.text;
    if (!t || !t.gu || !t.mr) errors.push(name + ': published without Om\'s own note in Gujarati and Marathi');
    if (!p.review || !p.review.gu || !p.review.mr) errors.push(name + ': published without a language review (review.gu / review.mr)');
    if (p.template) ['gu', 'mr'].forEach(function (l) {
      if (!p[l].body || !p[l].body.length) errors.push(name + ': "Om writes" post published but ' + l + ' body is empty');
    });
    published.push(p);
  });

  published.sort(function (a, b) { return a.week - b.week; });
  for (var i = 1; i < published.length; i++) {
    if (published[i].published < published[i - 1].published)
      warnings.push('week ' + published[i].week + ' is dated before week ' + published[i - 1].week);
  }

  var next = drafts.sort(function (a, b) { return a.week - b.week; })[0];
  var out = [];
  out.push(POSTS.length + ' posts: ' + guide.length + ' in the guide' + (guideLive ? ' (released ' + g + ')' : '') + ', ' + published.length + ' dated, ' + drafts.length + ' drafts (' +
    drafts.filter(function (p) { return p.template; }).length + ' are "Om writes" outlines).');
  if (next) out.push('Next to send: week ' + next.week + ', ' + next.en.title + (next.template ? ' (Om writes this one)' : ''));
  warnings.forEach(function (w) { out.push('WARNING ' + w); });
  errors.forEach(function (e) { out.push('ERROR ' + e); });
  out.push(errors.length ? 'NOT OK: fix the errors above before pushing.' : 'OK');
  return out.join('\n');
}
