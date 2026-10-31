// Explainer pictures, drawn as SVG so they stay sharp on phones, follow dark
// mode and print cleanly. Each figure is a function of the page language.
// Labels use \n for a second line. Keep them short: the figure is 360 wide.
window.FIGS = (function () {
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }
  function text(x, y, str, o) {
    o = o || {};
    var parts = String(str).split('\n');
    var size = o.size || 15, lh = size * 1.3;
    var y0 = o.middle ? y - (parts.length - 1) * lh / 2 + size * 0.35 : y;
    return '<text x="' + x + '" y="' + y0 + '" font-size="' + size + '" text-anchor="' + (o.anchor || 'start') + '" class="' + (o.cls || 'fg-t') + '"' + (o.bold ? ' font-weight="700"' : '') + '>' +
      parts.map(function (p, i) { return '<tspan x="' + x + '" dy="' + (i ? lh : 0) + '">' + esc(p) + '</tspan>'; }).join('') + '</text>';
  }
  function rect(x, y, w, h, kind) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="12" class="fg-' + (kind || 'box') + '"/>';
  }
  function arrowDown(x, y1, y2) {
    return '<path d="M' + x + ' ' + y1 + ' V' + (y2 - 7) + '" class="fg-arrow"/><path d="M' + (x - 6) + ' ' + (y2 - 9) + ' L' + x + ' ' + y2 + ' L' + (x + 6) + ' ' + (y2 - 9) + ' z" class="fg-ah"/>';
  }
  function svg(h, inner, label) {
    return '<svg viewBox="0 0 360 ' + h + '" role="img" aria-label="' + esc(label) + '">' + inner + '</svg>';
  }
  function pick(v, lang) { return typeof v === 'string' ? v : (v[lang] || v.en); }

  // A vertical chain of steps: [{i: emoji, t: {gu, mr, en}, k: 'box'|'soft'|'ok'|'bad'}]
  function flow(steps, lang, title) {
    var y = 6, bh = 60, gap = 26, out = '';
    steps.forEach(function (s, n) {
      out += rect(14, y, 332, bh, s.k);
      out += text(46, y + bh / 2, s.i, { size: 24, anchor: 'middle', middle: true });
      out += text(78, y + bh / 2, pick(s.t, lang), { middle: true });
      if (n < steps.length - 1) out += arrowDown(180, y + bh + 2, y + bh + gap - 2);
      y += bh + gap;
    });
    return svg(y - gap + 6, out, pick(title, lang));
  }

  // Two columns, e.g. "never paste" vs "do this instead".
  function compare(left, right, lang, title) {
    var rows = Math.max(left.items.length, right.items.length), rh = 54, top = 48;
    var h = top + rows * (rh + 8) + 6, out = '';
    [[left, 8], [right, 184]].forEach(function (c) {
      var col = c[0], x = c[1];
      out += rect(x, 4, 168, 36, col.k);
      out += text(x + 84, 22, pick(col.h, lang), { anchor: 'middle', middle: true, bold: true });
      col.items.forEach(function (it, n) {
        var y = top + n * (rh + 8);
        out += rect(x, y, 168, rh, 'box');
        out += text(x + 22, y + rh / 2, it.i, { size: 18, anchor: 'middle', middle: true });
        out += text(x + 40, y + rh / 2, pick(it.t, lang), { size: 13, middle: true });
      });
    });
    return svg(h, out, pick(title, lang));
  }

  // Four ingredients in a 2×2 grid that combine into one result.
  function recipe(cards, result, lang, title) {
    var out = '';
    cards.forEach(function (c, n) {
      var x = 8 + (n % 2) * 176, y = 6 + Math.floor(n / 2) * 84;
      out += rect(x, y, 168, 74, 'soft');
      out += text(x + 84, y + 24, c.i, { size: 22, anchor: 'middle', middle: true });
      out += text(x + 84, y + 54, pick(c.t, lang), { size: 13, anchor: 'middle', middle: true });
    });
    out += arrowDown(180, 176, 204);
    out += rect(14, 206, 332, 64, 'ok');
    out += text(46, 238, result.i, { size: 24, anchor: 'middle', middle: true });
    out += text(78, 238, pick(result.t, lang), { middle: true });
    return svg(276, out, pick(title, lang));
  }

  var L = {
    // Part 1
    learn: [
      { i: '📚', t: { en: 'Huge amounts of text,\npictures and speech', gu: 'ખૂબ બધું લખાણ,\nચિત્રો અને અવાજ', mr: 'प्रचंड मजकूर,\nचित्रे आणि आवाज' } },
      { i: '🧠', k: 'soft', t: { en: 'AI learns the patterns', gu: 'AI પેટર્ન શીખે છે', mr: 'AI नमुने शिकतो' } },
      { i: '❓', t: { en: 'You ask a question', gu: 'તમે પ્રશ્ન પૂછો છો', mr: 'तुम्ही प्रश्न विचारता' } },
      { i: '💬', t: { en: 'It writes a likely answer', gu: 'તે સંભવિત જવાબ લખે છે', mr: 'तो संभाव्य उत्तर लिहितो' } },
      { i: '✅', k: 'ok', t: { en: 'You check it, then decide', gu: 'તમે તપાસો, પછી નક્કી કરો', mr: 'तुम्ही तपासा, मग ठरवा' } },
    ],
  };

  return {
    'learn-predict': function (lang) {
      return flow(L.learn, lang, { en: 'How AI produces an answer', gu: 'AI જવાબ કેવી રીતે બનાવે છે', mr: 'AI उत्तर कसे तयार करतो' });
    },

    'four-things': function (lang) {
      return recipe([
        { i: '🏪', t: { en: 'Who you are', gu: 'તમે કોણ છો', mr: 'तुम्ही कोण आहात' } },
        { i: '✍️', t: { en: 'What you want', gu: 'શું જોઈએ છે', mr: 'काय हवे आहे' } },
        { i: '📋', t: { en: 'The facts', gu: 'હકીકતો', mr: 'तथ्ये' } },
        { i: '🗣️', t: { en: 'Language and tone', gu: 'ભાષા અને સૂર', mr: 'भाषा आणि सूर' } },
      ], { i: '💬', t: { en: 'A reply that is\nready to send', gu: 'મોકલવા તૈયાર\nજવાબ', mr: 'पाठवायला तयार\nउत्तर' } }, lang,
      { en: 'Four things to tell AI', gu: 'AI ને કહેવાની ચાર વાત', mr: 'AI ला सांगायच्या चार गोष्टी' });
    },

    'scam-pause': function (lang) {
      return flow([
        { i: '📞', k: 'bad', t: { en: '“It’s me! Send money now.\nDon’t tell anyone.”', gu: '“હું છું! હમણાં પૈસા મોકલો.\nકોઈને કહેતા નહીં.”', mr: '“मीच आहे! आत्ता पैसे पाठव.\nकोणाला सांगू नकोस.”' } },
        { i: '✋', k: 'soft', t: { en: 'Pause. “I’ll call you back.”', gu: 'થોભો. “હું પાછો ફોન કરું.”', mr: 'थांबा. “मी परत फोन करतो.”' } },
        { i: '📱', t: { en: 'Call the number\nyou already saved', gu: 'પહેલેથી સાચવેલા\nનંબર પર ફોન કરો', mr: 'आधी सेव्ह केलेल्या\nनंबरवर फोन करा' } },
        { i: '🔑', t: { en: 'Can’t reach them?\nAsk the family code word', gu: 'સંપર્ક ન થાય?\nકુટુંબનો કોડ વર્ડ પૂછો', mr: 'संपर्क होत नाही?\nकुटुंबाचा कोड वर्ड विचारा' } },
        { i: '🛡️', k: 'ok', t: { en: 'Fake? Report it.\nCheated? Call 1930.', gu: 'નકલી? ફરિયાદ કરો.\nછેતરાયા? 1930.', mr: 'बनावट? तक्रार करा.\nफसलात? 1930.' } },
      ], lang, { en: 'What to do when a call asks for money', gu: 'કૉલમાં પૈસા માગે ત્યારે શું કરવું', mr: 'कॉलवर पैसे मागितले तर काय करायचे' });
    },

    'voice-keyboard': function (lang) {
      var t = {
        say: { en: '“How can I save\nelectricity at home?”', gu: '“ઘરમાં વીજળી કેવી\nરીતે બચાવવી?”', mr: '“घरात वीज कशी\nवाचवायची?”' },
        hold: { en: 'Press 🎤 and speak', gu: '🎤 દબાવીને બોલો', mr: '🎤 दाबून बोला' },
        lang: { en: '🌐 switch language', gu: '🌐 ભાષા બદલો', mr: '🌐 भाषा बदला' },
      };
      var out = '';
      out += '<rect x="90" y="6" width="180" height="300" rx="22" class="fg-box"/>';
      out += '<rect x="104" y="30" width="152" height="70" rx="12" class="fg-soft"/>';
      out += text(180, 65, pick(t.say, lang), { size: 13, anchor: 'middle', middle: true });
      for (var r = 0; r < 3; r++) for (var c = 0; c < 6; c++)
        out += '<rect x="' + (106 + c * 25) + '" y="' + (150 + r * 30) + '" width="20" height="24" rx="4" class="fg-key"/>';
      out += '<rect x="106" y="240" width="40" height="26" rx="5" class="fg-key"/>' + text(126, 253, '🌐', { size: 14, anchor: 'middle', middle: true });
      out += '<rect x="152" y="240" width="56" height="26" rx="5" class="fg-key"/>';
      out += '<circle cx="232" cy="253" r="17" class="fg-mic"/>' + text(232, 253, '🎤', { size: 16, anchor: 'middle', middle: true });
      out += '<path d="M276 238 q14 15 0 30 M288 230 q24 23 0 46" class="fg-arrow"/>';
      out += text(180, 330, pick(t.hold, lang), { anchor: 'middle', bold: true });
      out += text(180, 352, pick(t.lang, lang), { size: 13, anchor: 'middle', cls: 'fg-m' });
      return svg(362, out, pick(t.hold, lang));
    },

    'paper-to-poster': function (lang) {
      return flow([
        { i: '📝', t: { en: 'Write items and prices\non paper (your facts)', gu: 'વસ્તુઓ અને ભાવ કાગળ\nપર લખો (તમારી હકીકત)', mr: 'वस्तू आणि दर कागदावर\nलिहा (तुमची तथ्ये)' } },
        { i: '🤖', k: 'soft', t: { en: 'AI arranges them and\nsuggests a heading', gu: 'AI ગોઠવે અને\nશીર્ષક સૂચવે', mr: 'AI मांडतो आणि\nशीर्षक सुचवतो' } },
        { i: '🎨', t: { en: 'Type the text yourself\ninto a Canva design', gu: 'Canva ડિઝાઇનમાં લખાણ\nજાતે ટાઇપ કરો', mr: 'Canva डिझाइनमध्ये मजकूर\nस्वतः टाइप करा' } },
        { i: '🔍', t: { en: 'Check every price\nand spelling', gu: 'દરેક ભાવ અને\nજોડણી તપાસો', mr: 'प्रत्येक दर आणि\nशुद्धलेखन तपासा' } },
        { i: '🖨️', k: 'ok', t: { en: 'Print it, or share\nas WhatsApp status', gu: 'છાપો, અથવા WhatsApp\nસ્ટેટસ પર મૂકો', mr: 'छापा, किंवा WhatsApp\nस्टेटसवर ठेवा' } },
      ], lang, { en: 'From paper list to poster', gu: 'કાગળની યાદીથી પોસ્ટર સુધી', mr: 'कागदी यादीपासून पोस्टरपर्यंत' });
    },

    'paste-or-not': function (lang) {
      return compare(
        { k: 'bad', h: { en: '✗ Never paste', gu: '✗ ક્યારેય નહીં', mr: '✗ कधीही नाही' }, items: [
          { i: '🔢', t: { en: 'OTP, PIN,\npasswords', gu: 'OTP, PIN,\nપાસવર્ડ', mr: 'OTP, PIN,\nपासवर्ड' } },
          { i: '🪪', t: { en: 'Aadhaar, PAN,\nbank numbers', gu: 'આધાર, PAN,\nબેંક નંબર', mr: 'आधार, PAN,\nबँक नंबर' } },
          { i: '👤', t: { en: 'Customer names\nand phones', gu: 'ગ્રાહકનાં નામ\nઅને ફોન', mr: 'ग्राहकांची नावे\nआणि फोन' } },
          { i: '🩺', t: { en: 'Reports with\nsomeone’s name', gu: 'નામવાળા\nરિપોર્ટ', mr: 'नाव असलेले\nरिपोर्ट' } },
        ] },
        { k: 'ok', h: { en: '✓ Do this instead', gu: '✓ આ કરો', mr: '✓ हे करा' }, items: [
          { i: '🙅', t: { en: 'Share them\nwith no one', gu: 'કોઈને પણ\nન આપો', mr: 'कोणालाच\nदेऊ नका' } },
          { i: '🏛️', t: { en: 'Use the official\napp or site', gu: 'સત્તાવાર એપ\nકે સાઇટ', mr: 'अधिकृत ॲप\nकिंवा साइट' } },
          { i: '🅰️', t: { en: 'Write\n“Customer A”', gu: '“ગ્રાહક A”\nલખો', mr: '“ग्राहक A”\nलिहा' } },
          { i: '✂️', t: { en: 'Keep the numbers,\nremove the name', gu: 'આંકડા રાખો,\nનામ કાઢો', mr: 'आकडे ठेवा,\nनाव काढा' } },
        ] }, lang, { en: 'What never to paste into AI', gu: 'AI માં શું ક્યારેય ન નાખવું', mr: 'AI मध्ये काय कधीही टाकू नये' });
    },
  };
})();
