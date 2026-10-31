// Infographics: one per post, in the style "title, a banner of three stages,
// three columns with an icon, a heading and short points".
// Each is drawn twice from the same data: a wide layout (desktop, print) and
// a stacked layout for phones. CSS shows the right one.
//
// Spec (window.INFO[postId]), every text is [en, gu, mr]:
//   t: title, lead: [icon, label] (optional), steps: three stage labels,
//   cols: three [icon, heading, [points en], [points gu], [points mr]]
window.INFO = window.INFO || {};
window.ICONS = (function () {
  var S = 'class="ic-s"', F = 'class="ic-f"', A = 'class="ic-a"', W = 'class="ic-w"';
  return {
    ai: '<rect x="14" y="14" width="36" height="36" rx="7" ' + F + '/><path d="M22 14V6M32 14V6M42 14V6M22 58V50M32 58V50M42 58V50M14 22H6M14 32H6M14 42H6M58 22H50M58 32H50M58 42H50" ' + S + '/><text x="32" y="38" text-anchor="middle" font-size="15" font-weight="700" ' + W + '>AI</text>',
    bulb: '<circle cx="32" cy="26" r="15" ' + F + '/><path d="M25 40v8h14v-8M27 54h10M32 4v-1M12 26H8M56 26h-4M17 11l-3-3M47 11l3-3" ' + S + '/><path d="M25 26l5 5 9-10" ' + S + ' style="stroke:var(--surface)"/>',
    network: '<path d="M16 14L32 32 16 50M32 32L48 16M32 32L48 48M16 14v36" ' + S + '/><circle cx="16" cy="14" r="6" ' + F + '/><circle cx="16" cy="50" r="6" ' + S + ' style="fill:var(--surface)"/><circle cx="32" cy="32" r="6" ' + F + '/><circle cx="48" cy="16" r="6" ' + S + ' style="fill:var(--surface)"/><circle cx="48" cy="48" r="6" ' + S + ' style="fill:var(--surface)"/>',
    gears: '<circle cx="26" cy="28" r="15" class="ic-teeth"/><circle cx="26" cy="28" r="10" ' + F + '/><circle cx="26" cy="28" r="4" style="fill:var(--surface)"/><circle cx="46" cy="46" r="9" class="ic-teeth2"/><circle cx="46" cy="46" r="5" ' + S + ' style="fill:var(--surface)"/>',
    chat: '<path d="M8 12h40a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H24l-10 9v-9H8a6 6 0 0 1-6-6V18a6 6 0 0 1 6-6z" ' + F + '/><circle cx="18" cy="28" r="3" style="fill:var(--surface)"/><circle cx="28" cy="28" r="3" style="fill:var(--surface)"/><circle cx="38" cy="28" r="3" style="fill:var(--surface)"/>',
    phone: '<rect x="18" y="4" width="28" height="56" rx="6" ' + S + '/><rect x="22" y="12" width="20" height="36" rx="2" ' + F + '/><circle cx="32" cy="54" r="2" class="ic-dot"/>',
    mic: '<rect x="25" y="6" width="14" height="30" rx="7" ' + F + '/><path d="M16 28a16 16 0 0 0 32 0M32 44v12M24 58h16" ' + S + '/>',
    shield: '<path d="M32 4l22 8v18c0 15-10 25-22 30C20 55 10 45 10 30V12z" ' + F + '/><path d="M22 31l7 7 13-14" ' + S + ' style="stroke:var(--surface)"/>',
    warning: '<path d="M32 6L60 56H4z" ' + F + '/><path d="M32 24v16M32 46v2" ' + S + ' style="stroke:var(--surface)"/>',
    lock: '<path d="M20 28v-8a12 12 0 0 1 24 0v8" ' + S + '/><rect x="12" y="28" width="40" height="30" rx="5" ' + F + '/><circle cx="32" cy="42" r="4" style="fill:var(--surface)"/>',
    rupee: '<circle cx="32" cy="32" r="26" ' + F + '/><text x="32" y="42" text-anchor="middle" font-size="30" font-weight="700" ' + W + '>₹</text>',
    shop: '<path d="M8 24h48v32H8z" ' + S + '/><path d="M6 10h52l2 14H4z" ' + F + '/><path d="M14 10v14M24 10v14M34 10v14M44 10v14" ' + S + '/><rect x="26" y="36" width="12" height="20" ' + F + '/>',
    doc: '<path d="M14 4h26l12 12v44H14z" ' + S + '/><path d="M40 4v12h12" ' + S + '/><path d="M20 28h24M20 36h24M20 44h16" ' + S + ' style="stroke:var(--accent)"/>',
    camera: '<rect x="6" y="16" width="52" height="38" rx="6" ' + S + '/><path d="M22 16l4-8h12l4 8" ' + S + '/><circle cx="32" cy="35" r="11" ' + F + '/><circle cx="32" cy="35" r="4" style="fill:var(--surface)"/>',
    globe: '<circle cx="32" cy="32" r="26" ' + F + '/><ellipse cx="32" cy="32" rx="11" ry="26" ' + S + ' style="stroke:var(--surface)"/><path d="M6 32h52M10 20h44M10 44h44" ' + S + ' style="stroke:var(--surface)"/>',
    check: '<circle cx="32" cy="32" r="26" class="ic-ok"/><path d="M20 33l8 8 16-17" ' + S + ' style="stroke:#fff"/>',
    cross: '<circle cx="32" cy="32" r="26" class="ic-bad"/><path d="M22 22l20 20M42 22L22 42" ' + S + ' style="stroke:#fff"/>',
    user: '<circle cx="32" cy="20" r="11" ' + F + '/><path d="M10 58c0-13 10-22 22-22s22 9 22 22" ' + S + '/>',
    users: '<circle cx="22" cy="20" r="9" ' + F + '/><circle cx="44" cy="22" r="8" ' + S + ' style="fill:var(--surface)"/><path d="M4 56c0-11 8-19 18-19s18 8 18 19M40 38c11 0 20 7 20 18" ' + S + '/>',
    calendar: '<rect x="6" y="10" width="52" height="46" rx="5" ' + S + '/><path d="M6 10h52v12H6z" ' + F + '/><path d="M18 4v12M46 4v12" ' + S + '/><circle cx="18" cy="34" r="3" class="ic-dot"/><circle cx="32" cy="34" r="3" class="ic-dot"/><circle cx="46" cy="34" r="3" class="ic-dot"/><circle cx="18" cy="46" r="3" class="ic-dot"/><circle cx="32" cy="46" r="3" class="ic-dot"/>',
    chart: '<path d="M8 6v50h50" ' + S + '/><rect x="16" y="34" width="8" height="20" ' + F + '/><rect x="30" y="22" width="8" height="32" ' + F + '/><rect x="44" y="12" width="8" height="42" ' + F + '/>',
    leaf: '<path d="M10 54C10 24 30 8 56 8c0 28-18 46-46 46z" ' + F + '/><path d="M10 54L40 24" ' + S + ' style="stroke:var(--surface)"/>',
    rain: '<path d="M16 38a10 10 0 0 1 2-20 14 14 0 0 1 27-2 11 11 0 0 1 3 22z" ' + F + '/><path d="M20 46l-3 8M32 46l-3 8M44 46l-3 8" ' + S + '/>',
    heart: '<path d="M32 56S6 40 6 22a13 13 0 0 1 26-5 13 13 0 0 1 26 5c0 18-26 34-26 34z" ' + F + '/><path d="M12 30h12l4-8 6 14 4-6h14" ' + S + ' style="stroke:var(--surface)"/>',
    book: '<path d="M32 14C24 8 14 8 6 10v42c8-2 18-2 26 4 8-6 18-6 26-4V10c-8-2-18-2-26 4z" ' + S + '/><path d="M32 14v42" ' + S + '/><path d="M10 16c6-1 13 0 18 3v6c-5-3-12-4-18-3z" ' + A + '/>',
    pencil: '<path d="M44 6l14 14-34 34H10V40z" ' + F + '/><path d="M38 12l14 14M10 54l8-8" ' + S + '/>',
    star: '<path d="M32 4l8 18 20 2-15 13 5 20-18-11-18 11 5-20L4 24l20-2z" ' + F + '/>',
    pin: '<path d="M32 60S12 38 12 24a20 20 0 0 1 40 0c0 14-20 36-20 36z" ' + F + '/><circle cx="32" cy="24" r="7" style="fill:var(--surface)"/>',
    megaphone: '<path d="M8 26h10l30-16v44L18 38H8z" ' + F + '/><path d="M18 38l4 16h8l-3-14M54 24c3 2 3 14 0 16" ' + S + '/>',
    picture: '<rect x="4" y="10" width="56" height="44" rx="5" ' + S + '/><path d="M8 50l16-18 12 12 8-8 12 14z" ' + F + '/><circle cx="46" cy="22" r="5" ' + F + '/>',
    search: '<circle cx="26" cy="26" r="17" ' + S + ' style="fill:var(--accent-soft)"/><path d="M38 38l18 18" ' + S + ' style="stroke-width:6"/>',
    clock: '<circle cx="32" cy="32" r="26" ' + F + '/><path d="M32 16v16l11 7" ' + S + ' style="stroke:var(--surface)"/>',
    bank: '<path d="M4 22L32 6l28 16z" ' + F + '/><path d="M12 26v22M24 26v22M40 26v22M52 26v22M4 54h56" ' + S + '/>',
    eye: '<path d="M2 32s12-20 30-20 30 20 30 20-12 20-30 20S2 32 2 32z" ' + S + '/><circle cx="32" cy="32" r="10" ' + F + '/><circle cx="32" cy="32" r="4" class="ic-dot"/>',
    captions: '<rect x="4" y="12" width="56" height="40" rx="6" ' + F + '/><path d="M12 30h14M30 30h22M12 40h22M38 40h14" ' + S + ' style="stroke:var(--surface)"/>',
    home: '<path d="M6 30L32 8l26 22" ' + S + '/><path d="M12 26v30h40V26" ' + S + '/><rect x="26" y="38" width="12" height="18" ' + F + '/>',
    briefcase: '<rect x="4" y="18" width="56" height="38" rx="5" ' + F + '/><path d="M22 18v-6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6M4 34h56" ' + S + '/>',
    scissors: '<circle cx="16" cy="46" r="9" ' + F + '/><circle cx="16" cy="18" r="9" ' + F + '/><path d="M23 41L58 12M23 23l35 29" ' + S + '/>',
    cart: '<path d="M2 8h10l8 34h32l6-24H16" ' + S + '/><path d="M18 18h40l-6 22H22z" ' + A + '/><circle cx="24" cy="52" r="5" ' + F + '/><circle cx="48" cy="52" r="5" ' + F + '/>',
    box: '<path d="M6 18L32 6l26 12v30L32 60 6 48z" ' + S + '/><path d="M6 18l26 12 26-12M32 30v30" ' + S + '/><path d="M6 18l26 12v30L6 48z" ' + A + '/>',
    diya: '<path d="M4 36h56c-4 12-14 18-28 18S8 48 4 36z" ' + F + '/><path d="M32 30c-6-6-4-14 0-22 4 8 6 16 0 22z" class="ic-flame"/>',
    key: '<circle cx="20" cy="32" r="13" ' + F + '/><circle cx="20" cy="32" r="5" style="fill:var(--surface)"/><path d="M33 32h26M50 32v10M58 32v8" ' + S + '/>',
    video: '<rect x="4" y="12" width="56" height="40" rx="6" ' + S + '/><path d="M26 22l16 10-16 10z" ' + F + '/>',
    qr: '<rect x="6" y="6" width="20" height="20" ' + F + '/><rect x="38" y="6" width="20" height="20" ' + F + '/><rect x="6" y="38" width="20" height="20" ' + F + '/><path d="M38 38h8v8h-8zM50 50h8v8h-8zM38 52h6M52 38h6" ' + S + '/>',
    spark: '<path d="M32 4c2 14 8 20 22 22-14 2-20 8-22 22-2-14-8-20-22-22 14-2 20-8 22-22z" ' + F + '/><path d="M52 44c1 5 3 7 8 8-5 1-7 3-8 8-1-5-3-7-8-8 5-1 7-3 8-8z" ' + A + '/>',
    list: '<rect x="8" y="4" width="48" height="56" rx="5" ' + S + '/><path d="M16 18l3 3 6-6M16 32l3 3 6-6M16 46l3 3 6-6" ' + S + ' style="stroke:var(--accent)"/><path d="M30 18h18M30 32h18M30 46h18" ' + S + '/>',
    question: '<circle cx="32" cy="32" r="26" ' + F + '/><path d="M24 24a8 8 0 1 1 11 7c-2 1-3 3-3 5v3M32 46v2" ' + S + ' style="stroke:var(--surface)"/>',
    hand: '<path d="M20 58V30l-6-8c-2-3 2-6 5-3l5 6V10a3 3 0 0 1 6 0v16-20a3 3 0 0 1 6 0v20-16a3 3 0 0 1 6 0v18-12a3 3 0 0 1 6 0v22c0 12-6 20-14 20z" ' + F + '/>',
    school: '<path d="M2 24L32 10l30 14-30 14z" ' + F + '/><path d="M14 30v14c10 8 26 8 36 0V30M58 26v18" ' + S + '/>',
    tool: '<path d="M40 6a14 14 0 0 0-14 18L6 44l14 14 20-20a14 14 0 0 0 18-14l-8 6-10-4-4-10z" ' + F + '/>',
    upi: '<rect x="10" y="4" width="44" height="56" rx="6" ' + S + '/><rect x="18" y="14" width="28" height="28" ' + A + '/><path d="M22 18h8v8h-8zM34 30h8v8h-8zM34 18h8M22 34h6" ' + S + '/><path d="M22 52h20" ' + S + '/>',
  };
})();

window.infographic = (function () {
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var LI = { en: 0, gu: 1, mr: 2 };
  function tx(arr, lang) { return Array.isArray(arr) ? (arr[LI[lang]] || arr[0]) : arr; }
  function icon(name, x, y, size) {
    var body = window.ICONS[name] || window.ICONS.spark;
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + (size / 64) + ')">' + body + '</g>';
  }
  function text(x, y, str, o) {
    o = o || {};
    var parts = String(str).split('\n'), size = o.size || 16, lh = size * 1.25;
    return '<text x="' + x + '" y="' + y + '" font-size="' + size + '" text-anchor="' + (o.anchor || 'middle') + '" class="' + (o.cls || 'fg-t') + '"' + (o.bold ? ' font-weight="700"' : '') + '>' +
      parts.map(function (p, i) { return '<tspan x="' + x + '" dy="' + (i ? lh : 0) + '">' + esc(p) + '</tspan>'; }).join('') + '</text>';
  }
  // Greedy word wrap by character count, for the phone layout's title.
  function wrap(str, max) {
    var lines = [], cur = '';
    String(str).split(' ').forEach(function (w) {
      if (cur && (cur + ' ' + w).length > max) { lines.push(cur); cur = w; } else cur = cur ? cur + ' ' + w : w;
    });
    if (cur) lines.push(cur);
    return lines.join('\n');
  }
  function points(col, lang) { return col[2 + LI[lang]] || col[2]; }

  function wide(s, lang) {
    var lead = s.lead, cx = lead ? [300, 520, 740] : [150, 430, 710], o = '';
    var maxPts = Math.max.apply(null, s.cols.map(function (c) { return points(c, lang).length; }));
    var H = 360 + maxPts * 24;
    o += text(430, 46, tx(s.t, lang), { size: 30, bold: true, cls: 'fg-title' });
    var bx = lead ? 190 : 40;
    o += '<path d="M' + bx + ' 84H808L840 112 808 140H' + bx + 'z" class="fg-banner"/>';
    s.steps.forEach(function (st, i) {
      o += text(cx[i], 118, tx(st, lang), { size: 18 });
      if (i < 2) {
        var ax = (cx[i] + cx[i + 1]) / 2;
        o += '<path d="M' + (ax - 16) + ' 112H' + (ax + 10) + '" class="fg-arrow-ink"/><path d="M' + (ax + 8) + ' 106L' + (ax + 18) + ' 112 ' + (ax + 8) + ' 118z" class="fg-ah-ink"/>';
      }
    });
    if (lead) {
      o += text(95, 118, tx(lead[1], lang), { size: 18 });
      o += '<path d="M95 132V176" class="fg-arrow-ink"/><path d="M89 172L95 184 101 172z" class="fg-ah-ink"/>';
      o += icon(lead[0], 40, 196, 110);
      o += '<path d="M156 251H' + (cx[0] - 52) + '" class="fg-line"/>';
    }
    s.cols.forEach(function (c, i) {
      o += text(cx[i], 192, tx(c[1], lang), { size: 19, bold: true, cls: 'fg-accent' });
      o += icon(c[0], cx[i] - 40, 211, 80);
      if (i < 2) o += '<path d="M' + (cx[i] + 52) + ' 251H' + (cx[i + 1] - 52) + '" class="fg-line"/>';
      points(c, lang).forEach(function (p, k) {
        o += text(cx[i] - 92, 330 + k * 24, p, { size: 16, anchor: 'start' });
      });
    });
    return '<svg class="info-wide" viewBox="0 0 860 ' + H + '" role="img" aria-label="' + esc(tx(s.t, lang)) + '">' + o + '</svg>';
  }

  function narrow(s, lang) {
    var o = '', y = 10;
    var title = wrap(tx(s.t, lang), 24);
    o += text(180, y + 24, title, { size: 22, bold: true, cls: 'fg-title' });
    y += 24 + (title.split('\n').length - 1) * 27 + 18;
    if (s.lead) {
      o += '<rect x="10" y="' + y + '" width="340" height="64" rx="12" class="fg-box"/>';
      o += icon(s.lead[0], 22, y + 8, 48);
      o += text(84, y + 38, tx(s.lead[1], lang), { size: 16, anchor: 'start', bold: true });
      y += 64;
      o += '<path d="M180 ' + (y + 4) + 'V' + (y + 18) + '" class="fg-arrow-ink"/><path d="M174 ' + (y + 15) + 'L180 ' + (y + 24) + ' 186 ' + (y + 15) + 'z" class="fg-ah-ink"/>';
      y += 28;
    }
    s.cols.forEach(function (c, i) {
      var pts = points(c, lang), ch = 46 + pts.length * 22;
      o += '<path d="M10 ' + y + 'H330L350 ' + (y + 17) + ' 330 ' + (y + 34) + 'H10z" class="fg-banner"/>';
      o += text(22, y + 23, (i + 1) + ' · ' + tx(s.steps[i], lang), { size: 15, anchor: 'start' });
      y += 40;
      o += '<rect x="10" y="' + y + '" width="340" height="' + ch + '" rx="12" class="fg-box"/>';
      o += icon(c[0], 22, y + 12, 52);
      o += text(88, y + 28, tx(c[1], lang), { size: 16, anchor: 'start', bold: true, cls: 'fg-accent' });
      pts.forEach(function (p, k) { o += text(88, y + 52 + k * 22, '• ' + p, { size: 14, anchor: 'start' }); });
      y += ch;
      if (i < s.cols.length - 1) {
        o += '<path d="M180 ' + (y + 4) + 'V' + (y + 14) + '" class="fg-arrow-ink"/><path d="M174 ' + (y + 11) + 'L180 ' + (y + 20) + ' 186 ' + (y + 11) + 'z" class="fg-ah-ink"/>';
        y += 26;
      }
    });
    return '<svg class="info-narrow" viewBox="0 0 360 ' + (y + 8) + '" role="img" aria-label="' + esc(title) + '">' + o + '</svg>';
  }

  return function (spec, lang) { return wide(spec, lang) + narrow(spec, lang); };
})();
