// Extra detail and pictures for Parts 1–6, merged into the posts by id (see withExtras in app.js).
// fig: a picture from data/figures.js, shown after the first paragraph. cap: its caption.
// more: extra sections added at the end of the post, per language.
Object.assign(window.EXTRAS, {
  'what-is-ai': {
    fig: 'learn-predict',
    cap: {
      en: 'AI learns patterns from huge amounts of text and pictures, then predicts a likely answer. The last step is always yours.',
      gu: 'AI ખૂબ બધાં લખાણ અને ચિત્રોમાંથી પેટર્ન શીખે છે, પછી સંભવિત જવાબનું અનુમાન કરે છે. છેલ્લું પગલું હંમેશાં તમારું છે.',
      mr: 'AI प्रचंड मजकूर आणि चित्रांमधून नमुने शिकतो, मग संभाव्य उत्तराचा अंदाज बांधतो. शेवटची पायरी नेहमी तुमची असते.',
    },
    more: {
      en: [
        { h: 'An example, step by step' },
        { steps: [
          'You type: “When is wheat usually sown in Gujarat?”',
          'AI uses patterns from everything it has read about wheat, seasons and Gujarat',
          'It writes a likely answer, for example: “Usually in November, after the monsoon, when nights turn cool”',
          'Before you act, you check with your agriculture officer or an official .gov.in website',
        ] },
        'Step 4 is the important one. AI gave you a sensible starting point, not a guarantee.',
        { h: 'Common misunderstandings' },
        { list: [
          '“AI searches the internet every time.” Some apps can search, but many answers come from patterns learned earlier, and these can be out of date',
          '“AI understands things like a person.” It is very good with language, but it has never lived your life or seen your shop',
          '“If it sounds confident, it must be right.” Confidence is just its writing style',
        ] },
        { h: 'Quick check' },
        { list: [
          'Can AI know today’s onion price by itself? Usually not. Check a mandi app',
          'Is it fine to ask AI to explain a difficult word in a letter? Yes',
          'Should AI decide a medicine dose? No. Ask a doctor',
        ] },
      ],
      gu: [
        { h: 'એક ઉદાહરણ, પગલે પગલે' },
        { steps: [
          'તમે લખો: “ગુજરાતમાં ઘઉં સામાન્ય રીતે ક્યારે વવાય છે?”',
          'ઘઉં, ઋતુઓ અને ગુજરાત વિશે તેણે જે વાંચ્યું છે તેની પેટર્ન AI વાપરે છે',
          'તે સંભવિત જવાબ લખે છે, દા.ત.: “સામાન્ય રીતે નવેમ્બરમાં, ચોમાસા પછી, જ્યારે રાતો ઠંડી થવા લાગે”',
          'કંઈ કરતાં પહેલાં તમે ખેતીવાડી અધિકારી કે .gov.in વાળી સરકારી વેબસાઇટ પર તપાસો',
        ] },
        'ચોથું પગલું સૌથી મહત્ત્વનું છે. AI એ તમને સમજદારીભરી શરૂઆત આપી, ગૅરંટી નહીં.',
        { h: 'સામાન્ય ગેરસમજો' },
        { list: [
          '“AI દર વખતે ઇન્ટરનેટ પર શોધે છે.” કેટલીક એપ્સ શોધી શકે છે, પણ ઘણા જવાબ અગાઉ શીખેલી પેટર્નમાંથી આવે છે, જે જૂના હોઈ શકે',
          '“AI માણસની જેમ સમજે છે.” ભાષામાં તે ખૂબ સારું છે, પણ તેણે તમારું જીવન જીવ્યું નથી કે તમારી દુકાન જોઈ નથી',
          '“ખાતરીથી બોલે છે, એટલે સાચું જ હશે.” ખાતરી તો ફક્ત તેની લખવાની શૈલી છે',
        ] },
        { h: 'ઝડપી કસોટી' },
        { list: [
          'શું AI ને પોતાની મેળે આજનો ડુંગળીનો ભાવ ખબર હોય? સામાન્ય રીતે નહીં. મંડીની એપ તપાસો',
          'પત્રમાંનો અઘરો શબ્દ AI પાસે સમજાવવો બરાબર છે? હા',
          'દવાનું પ્રમાણ AI નક્કી કરે? ના. ડૉક્ટરને પૂછો',
        ] },
      ],
      mr: [
        { h: 'एक उदाहरण, एकेक पायरी' },
        { steps: [
          'तुम्ही लिहिता: “महाराष्ट्रात गहू साधारणपणे केव्हा पेरला जातो?”',
          'गहू, ऋतू आणि महाराष्ट्र याबद्दल त्याने जे वाचले आहे त्यातील नमुने AI वापरतो',
          'तो संभाव्य उत्तर लिहितो, उदा.: “साधारणपणे नोव्हेंबरमध्ये, पावसाळ्यानंतर, रात्री थंड होऊ लागल्यावर”',
          'काहीही करण्यापूर्वी तुम्ही कृषी अधिकारी किंवा .gov.in असलेल्या सरकारी वेबसाइटवर तपासता',
        ] },
        'चौथी पायरी सर्वात महत्त्वाची आहे. AI ने तुम्हाला समजूतदार सुरुवात दिली, हमी नाही.',
        { h: 'नेहमीचे गैरसमज' },
        { list: [
          '“AI प्रत्येक वेळी इंटरनेटवर शोधतो.” काही ॲप्स शोधू शकतात, पण अनेक उत्तरे आधी शिकलेल्या नमुन्यांमधून येतात, जी जुनी असू शकतात',
          '“AI माणसासारखे समजतो.” भाषेत तो खूप चांगला आहे, पण त्याने तुमचे आयुष्य जगलेले नाही किंवा तुमचे दुकान पाहिलेले नाही',
          '“खात्रीने बोलतो म्हणजे बरोबरच असणार.” खात्री ही फक्त त्याची लिहिण्याची शैली आहे',
        ] },
        { h: 'झटपट कसोटी' },
        { list: [
          'AI ला स्वतःहून आजचा कांद्याचा भाव माहीत असतो का? साधारणपणे नाही. बाजारभावाचे ॲप तपासा',
          'पत्रातील अवघड शब्द AI कडून समजून घेणे ठीक आहे का? हो',
          'औषधाचे प्रमाण AI ने ठरवावे का? नाही. डॉक्टरांना विचारा',
        ] },
      ],
    },
  },

  'ai-for-your-shop': {
    fig: 'four-things',
    cap: {
      en: 'Give AI these four things and the first reply is usually close to ready.',
      gu: 'AI ને આ ચાર વાત આપો, તો પહેલો જવાબ મોટેભાગે લગભગ તૈયાર હોય છે.',
      mr: 'AI ला या चार गोष्टी द्या, म्हणजे पहिले उत्तर बहुतेक वेळा जवळजवळ तयार असते.',
    },
    more: {
      en: [
        { h: 'An example, step by step' },
        { steps: [
          'You type all four things: “I run a kirana shop in Manjalpur. Write a WhatsApp reply to a customer asking if we deliver. Free delivery within 2 km; orders before 6 pm arrive the same day. Polite, short, simple Gujarati.”',
          'AI gives a draft, for example: “Namaste! Yes, we deliver free within 2 km. Orders placed before 6 pm reach you the same day. Thank you!”',
          'You check the facts (2 km, 6 pm) and change any words so it sounds like you',
          'In WhatsApp Business, save it as a Quick reply. Next time, type “/” and pick it',
        ] },
        { h: 'Common mistakes' },
        { list: [
          'Leaving out the facts, so AI makes them up (“Free delivery anywhere in Vadodara!”)',
          'Sending the first draft without reading it',
          'Too many emojis and exclamation marks, which looks like spam',
          'Copying a customer’s full message, with their number, into the AI app',
        ] },
        { h: 'Make it sound like you' },
        'Ask for three versions: formal, friendly and very short. Choose the one that sounds like your shop, or mix lines from each.',
      ],
      gu: [
        { h: 'એક ઉદાહરણ, પગલે પગલે' },
        { steps: [
          'તમે ચારેય વાત લખો: “માંજલપુરમાં મારી કરિયાણાની દુકાન છે. ડિલિવરી કરો છો કે નહીં એવું પૂછતા ગ્રાહક માટે WhatsApp જવાબ લખો. 2 કિમી સુધી મફત ડિલિવરી; સાંજે 6 પહેલાંના ઓર્ડર એ જ દિવસે પહોંચે. નમ્ર, ટૂંકો, સરળ ગુજરાતીમાં.”',
          'AI મુસદ્દો આપે, દા.ત.: “નમસ્તે! હા, 2 કિમી સુધી અમે મફત ડિલિવરી કરીએ છીએ. સાંજે 6 પહેલાં આપેલો ઓર્ડર એ જ દિવસે પહોંચી જાય છે. આભાર!”',
          'તમે હકીકતો (2 કિમી, સાંજે 6) તપાસો અને શબ્દો બદલો, જેથી તે તમારા જેવું લાગે',
          'WhatsApp Business માં તેને ક્વિક રિપ્લાય તરીકે સાચવો. આગલી વાર “/” ટાઇપ કરીને પસંદ કરો',
        ] },
        { h: 'સામાન્ય ભૂલો' },
        { list: [
          'હકીકતો ન લખવી, એટલે AI પોતે ઘડી કાઢે (“આખા વડોદરામાં મફત ડિલિવરી!”)',
          'વાંચ્યા વગર પહેલો મુસદ્દો મોકલી દેવો',
          'વધુ પડતાં ઇમોજી અને ઉદ્ગારચિહ્નો, જે સ્પૅમ જેવું લાગે',
          'ગ્રાહકનો આખો મેસેજ, તેના નંબર સાથે, AI એપમાં કૉપી કરવો',
        ] },
        { h: 'તમારા જેવું લાગે તેવું બનાવો' },
        'ત્રણ વર્ઝન માગો: ઔપચારિક, મૈત્રીભર્યું અને ખૂબ ટૂંકું. તમારી દુકાન જેવું લાગે તે પસંદ કરો, અથવા દરેકમાંથી લાઇનો ભેગી કરો.',
      ],
      mr: [
        { h: 'एक उदाहरण, एकेक पायरी' },
        { steps: [
          'तुम्ही चारही गोष्टी लिहा: “माझे मांजलपूरमध्ये किराणा दुकान आहे. घरपोच देता का असे विचारणाऱ्या ग्राहकासाठी WhatsApp उत्तर लिहा. 2 किमीपर्यंत मोफत घरपोच; संध्याकाळी 6 पूर्वीच्या ऑर्डर त्याच दिवशी पोहोचतात. नम्र, छोटे, सोप्या मराठीत.”',
          'AI मसुदा देतो, उदा.: “नमस्कार! हो, 2 किमीपर्यंत आम्ही मोफत घरपोच देतो. संध्याकाळी 6 पूर्वी दिलेली ऑर्डर त्याच दिवशी पोहोचते. धन्यवाद!”',
          'तुम्ही तथ्ये (2 किमी, संध्याकाळी 6) तपासा आणि शब्द बदला, म्हणजे ते तुमच्यासारखे वाटेल',
          'WhatsApp Business मध्ये ते क्विक रिप्लाय म्हणून सेव्ह करा. पुढच्या वेळी “/” टाइप करून निवडा',
        ] },
        { h: 'नेहमीच्या चुका' },
        { list: [
          'तथ्ये न लिहिणे, म्हणजे AI स्वतःच बनवतो (“संपूर्ण वडोदऱ्यात मोफत घरपोच!”)',
          'न वाचता पहिला मसुदा पाठवणे',
          'खूप जास्त इमोजी आणि उद्गारचिन्हे, जे स्पॅमसारखे दिसते',
          'ग्राहकाचा संपूर्ण मेसेज, त्याच्या नंबरसह, AI ॲपमध्ये कॉपी करणे',
        ] },
        { h: 'तुमच्यासारखे वाटेल असे करा' },
        'तीन आवृत्त्या मागा: औपचारिक, मैत्रीपूर्ण आणि अगदी छोटी. तुमच्या दुकानासारखी वाटते ती निवडा, किंवा प्रत्येकातील ओळी एकत्र करा.',
      ],
    },
  },

  'ai-voice-scams': {
    fig: 'scam-pause',
    cap: {
      en: 'The scam only works if you act fast. Every step here slows it down.',
      gu: 'છેતરપિંડી ત્યારે જ સફળ થાય જ્યારે તમે ઉતાવળ કરો. અહીંનું દરેક પગલું તેને ધીમી પાડે છે.',
      mr: 'फसवणूक तेव्हाच यशस्वी होते जेव्हा तुम्ही घाई करता. इथली प्रत्येक पायरी तिचा वेग कमी करते.',
    },
    more: {
      en: [
        { h: 'What a scam call can sound like' },
        'The phone rings late at night. A voice that sounds exactly like your nephew says: “Kaka, I’ve had an accident. Please don’t tell Mummy. Send ₹20,000 to this number right now.”',
        { steps: [
          'Say calmly: “I’ll call you back in two minutes.” Then hang up',
          'Call your nephew, or his parents, on the number already saved in your phone',
          'If nobody answers, ask the caller the family code word',
          'If it was fake, report the number on Sanchar Saathi (Chakshu). If money went, call 1930 at once',
        ] },
        { h: 'Why it works on good people' },
        { list: [
          'It uses love and fear at the same time',
          'It stops you from checking: “don’t tell anyone”',
          'It gives a very short deadline',
          'The voice really can sound right: AI can copy a voice from a short video',
        ] },
        { h: 'Set up your family code word today' },
        'Pick a word nobody would guess (not a pet’s name that is on Instagram). Tell it only to close family, in person. Practise once.',
      ],
      gu: [
        { h: 'છેતરપિંડીનો કૉલ કેવો લાગી શકે' },
        'મોડી રાત્રે ફોન વાગે છે. બરાબર તમારા ભત્રીજા જેવો અવાજ કહે છે: “કાકા, મારો અકસ્માત થયો છે. મમ્મીને ન કહેતા. આ નંબર પર હમણાં જ ₹20,000 મોકલો.”',
        { steps: [
          'શાંતિથી કહો: “હું બે મિનિટમાં પાછો ફોન કરું છું.” પછી ફોન મૂકી દો',
          'ભત્રીજાને, કે તેનાં માતા-પિતાને, ફોનમાં પહેલેથી સાચવેલા નંબર પર ફોન કરો',
          'કોઈ ન ઉપાડે તો, ફોન કરનારને કુટુંબનો કોડ વર્ડ પૂછો',
          'નકલી હોય તો, સંચાર સાથી (ચક્ષુ) પર નંબરની ફરિયાદ કરો. પૈસા ગયા હોય તો તરત 1930 પર ફોન કરો',
        ] },
        { h: 'સારા લોકો પર પણ કેમ કામ કરે છે' },
        { list: [
          'તે પ્રેમ અને ડર બંને એક સાથે વાપરે છે',
          'તે તમને તપાસતાં રોકે છે: “કોઈને ન કહેતા”',
          'તે ખૂબ ટૂંકી સમયમર્યાદા આપે છે',
          'અવાજ ખરેખર સાચો લાગી શકે: AI નાના વીડિયો પરથી અવાજની નકલ કરી શકે છે',
        ] },
        { h: 'આજે જ કુટુંબનો કોડ વર્ડ નક્કી કરો' },
        'કોઈ ધારી ન શકે તેવો શબ્દ પસંદ કરો (Instagram પર હોય તેવું પાળતુ પ્રાણીનું નામ નહીં). ફક્ત નજીકના પરિવારને, રૂબરૂ કહો. એક વાર પ્રૅક્ટિસ કરો.',
      ],
      mr: [
        { h: 'फसवणुकीचा कॉल कसा वाटू शकतो' },
        'रात्री उशिरा फोन वाजतो. अगदी तुमच्या पुतण्यासारखा आवाज म्हणतो: “काका, माझा अपघात झाला आहे. आईला सांगू नका. या नंबरवर आत्ताच ₹20,000 पाठवा.”',
        { steps: [
          'शांतपणे म्हणा: “मी दोन मिनिटांत परत फोन करतो.” मग फोन ठेवा',
          'पुतण्याला, किंवा त्याच्या आई-वडिलांना, फोनमध्ये आधीच सेव्ह असलेल्या नंबरवर फोन करा',
          'कोणी उचलले नाही तर, फोन करणाऱ्याला कुटुंबाचा कोड वर्ड विचारा',
          'बनावट असेल तर, संचार साथी (चक्षू) वर नंबरची तक्रार करा. पैसे गेले असतील तर लगेच 1930 वर फोन करा',
        ] },
        { h: 'चांगल्या लोकांवरही का चालते' },
        { list: [
          'ती प्रेम आणि भीती दोन्ही एकाच वेळी वापरते',
          'ती तुम्हाला तपासण्यापासून रोखते: “कोणाला सांगू नका”',
          'ती खूप कमी वेळ देते',
          'आवाज खरोखर बरोबर वाटू शकतो: AI छोट्या व्हिडिओवरून आवाजाची नक्कल करू शकतो',
        ] },
        { h: 'आजच कुटुंबाचा कोड वर्ड ठरवा' },
        'कोणी अंदाज लावू शकणार नाही असा शब्द निवडा (Instagram वर असलेले पाळीव प्राण्याचे नाव नको). फक्त जवळच्या कुटुंबाला, प्रत्यक्ष सांगा. एकदा सराव करा.',
      ],
    },
  },

  'talk-in-your-language': {
    fig: 'voice-keyboard',
    cap: {
      en: 'Switch the keyboard to your language with 🌐, then hold the 🎤 and speak.',
      gu: '🌐 થી કીબોર્ડ તમારી ભાષામાં ફેરવો, પછી 🎤 દબાવી રાખીને બોલો.',
      mr: '🌐 ने कीबोर्ड तुमच्या भाषेत बदला, मग 🎤 दाबून धरून बोला.',
    },
    more: {
      en: [
        { h: 'Set up voice typing, step by step (Android, Gboard)' },
        { steps: [
          'Open Settings, then System, then Languages & input, then On-screen keyboard, then Gboard',
          'Tap Languages, then Add keyboard, and choose ગુજરાતી or मराठी',
          'Open WhatsApp and tap the message box. Press the 🌐 key until your language shows',
          'Press the 🎤, speak a sentence, and watch the words appear',
        ] },
        'Menu names can be slightly different on your phone. If you can’t find them, search “languages” in Settings.',
        { h: 'Common problems and fixes' },
        { list: [
          'Wrong language typed: check the keyboard shows your language before you press 🎤',
          'Words missing: speak a little slower and pause between sentences',
          'Noise: move away from traffic, a fan or the TV',
          'English words in between are fine. Say them clearly',
        ] },
        { h: 'Talking to ChatGPT or Gemini by voice' },
        'Tap the voice or headphone icon in the app. Start with: “Please reply in simple Gujarati and speak slowly.” You can interrupt it any time, like a normal conversation.',
      ],
      gu: [
        { h: 'બોલીને ટાઇપિંગ ચાલુ કરો, પગલે પગલે (Android, Gboard)' },
        { steps: [
          'Settings ખોલો, પછી System, પછી Languages & input, પછી On-screen keyboard, પછી Gboard',
          'Languages પર ટૅપ કરો, પછી Add keyboard, અને ગુજરાતી પસંદ કરો',
          'WhatsApp ખોલીને મેસેજના ખાનામાં ટૅપ કરો. તમારી ભાષા દેખાય ત્યાં સુધી 🌐 બટન દબાવો',
          '🎤 દબાવો, એક વાક્ય બોલો, અને શબ્દો લખાતા જુઓ',
        ] },
        'તમારા ફોનમાં મેનુનાં નામ થોડાં જુદાં હોઈ શકે. ન મળે તો Settings માં “languages” શોધો.',
        { h: 'સામાન્ય તકલીફો અને ઉપાય' },
        { list: [
          'ખોટી ભાષામાં લખાય: 🎤 દબાવતાં પહેલાં તપાસો કે કીબોર્ડ પર તમારી ભાષા છે',
          'શબ્દો છૂટી જાય: થોડું ધીમે બોલો અને વાક્યો વચ્ચે થોભો',
          'ઘોંઘાટ: ટ્રાફિક, પંખા કે TV થી દૂર જાઓ',
          'વચ્ચે અંગ્રેજી શબ્દો ચાલે. તે સ્પષ્ટ બોલો',
        ] },
        { h: 'ChatGPT કે Gemini સાથે બોલીને વાત' },
        'એપમાં અવાજ કે હેડફોનના આઇકન પર ટૅપ કરો. શરૂઆતમાં કહો: “કૃપા કરી સરળ ગુજરાતીમાં જવાબ આપો અને ધીમે બોલો.” સામાન્ય વાતચીતની જેમ તમે ગમે ત્યારે તેને વચ્ચે રોકી શકો.',
      ],
      mr: [
        { h: 'बोलून टायपिंग चालू करा, एकेक पायरी (Android, Gboard)' },
        { steps: [
          'Settings उघडा, मग System, मग Languages & input, मग On-screen keyboard, मग Gboard',
          'Languages वर टॅप करा, मग Add keyboard, आणि मराठी निवडा',
          'WhatsApp उघडून मेसेजच्या जागेत टॅप करा. तुमची भाषा दिसेपर्यंत 🌐 बटण दाबा',
          '🎤 दाबा, एक वाक्य बोला, आणि शब्द लिहिले जाताना पाहा',
        ] },
        'तुमच्या फोनमध्ये मेनूंची नावे थोडी वेगळी असू शकतात. सापडली नाहीत तर Settings मध्ये “languages” शोधा.',
        { h: 'नेहमीच्या अडचणी आणि उपाय' },
        { list: [
          'चुकीच्या भाषेत लिहिले जाते: 🎤 दाबण्यापूर्वी कीबोर्डवर तुमची भाषा आहे का ते तपासा',
          'शब्द सुटतात: थोडे हळू बोला आणि वाक्यांमध्ये थांबा',
          'आवाज-गोंगाट: रहदारी, पंखा किंवा TV पासून दूर जा',
          'मध्ये इंग्रजी शब्द चालतात. ते स्पष्ट बोला',
        ] },
        { h: 'ChatGPT किंवा Gemini शी बोलून गप्पा' },
        'ॲपमध्ये आवाजाच्या किंवा हेडफोनच्या आयकॉनवर टॅप करा. सुरुवातीला सांगा: “कृपया सोप्या मराठीत उत्तर द्या आणि हळू बोला.” नेहमीच्या गप्पांसारखे तुम्ही त्याला केव्हाही मध्येच थांबवू शकता.',
      ],
    },
  },

  'menu-poster-price-list': {
    fig: 'paper-to-poster',
    cap: {
      en: 'AI handles the words, you handle the facts and the final check.',
      gu: 'શબ્દો AI સંભાળે, હકીકતો અને છેલ્લી તપાસ તમે.',
      mr: 'शब्द AI सांभाळतो, तथ्ये आणि शेवटची तपासणी तुम्ही.',
    },
    more: {
      en: [
        { h: 'An example, from paper to poster' },
        { steps: [
          'Paper list: tea ₹15, coffee ₹20, vada pav ₹20, poha ₹25, samosa ₹15',
          'AI arranges it: “Hot drinks: Tea ₹15 · Coffee ₹20. Snacks: Vada pav ₹20 · Poha ₹25 · Samosa ₹15”, and suggests a heading such as “Morning Chai Corner”',
          'In Canva, search “menu”, choose a design with big, clear text, and type in your two sections',
          'Download as PNG for WhatsApp status, or as PDF for printing at a local print shop',
        ] },
        { h: 'Design rules that always work' },
        { list: [
          'One heading and at most two fonts',
          'Prices lined up on the right, so the eye finds them fast',
          'Dark text on a light background (or the opposite), never on a busy photo',
          'Shop name, phone number and timings at the bottom',
          'Leave empty space. A crowded poster is read by nobody',
        ] },
        { h: 'Common mistakes' },
        { list: [
          'Letting AI make the whole poster as an image, with wrong Gujarati or Marathi letters',
          'Forgetting to update the poster when prices change',
          'Tiny text that can’t be read from 2 metres away',
        ] },
      ],
      gu: [
        { h: 'એક ઉદાહરણ, કાગળથી પોસ્ટર સુધી' },
        { steps: [
          'કાગળની યાદી: ચા ₹15, કૉફી ₹20, વડાપાંઉ ₹20, પૌંઆ ₹25, સમોસા ₹15',
          'AI ગોઠવે: “ગરમ પીણાં: ચા ₹15 · કૉફી ₹20. નાસ્તો: વડાપાંઉ ₹20 · પૌંઆ ₹25 · સમોસા ₹15”, અને “સવારની ચા કૉર્નર” જેવું શીર્ષક સૂચવે',
          'Canva માં “menu” શોધો, મોટા અને સ્પષ્ટ અક્ષરોવાળી ડિઝાઇન પસંદ કરો, અને તમારા બે વિભાગ ટાઇપ કરો',
          'WhatsApp સ્ટેટસ માટે PNG તરીકે, અથવા સ્થાનિક પ્રિન્ટની દુકાને છપાવવા PDF તરીકે ડાઉનલોડ કરો',
        ] },
        { h: 'હંમેશાં કામ કરતા ડિઝાઇનના નિયમો' },
        { list: [
          'એક શીર્ષક અને વધુમાં વધુ બે ફૉન્ટ',
          'ભાવ જમણી બાજુ એક લાઇનમાં, જેથી આંખ ઝડપથી શોધી શકે',
          'આછી પાછળની જગ્યા પર ઘેરા અક્ષર (અથવા ઊલટું), ભરચક ફોટા પર ક્યારેય નહીં',
          'નીચે દુકાનનું નામ, ફોન નંબર અને સમય',
          'ખાલી જગ્યા રાખો. ભરચક પોસ્ટર કોઈ વાંચતું નથી',
        ] },
        { h: 'સામાન્ય ભૂલો' },
        { list: [
          'આખું પોસ્ટર AI પાસે ફોટા તરીકે બનાવડાવવું, જેમાં ગુજરાતી અક્ષરો ખોટા આવે',
          'ભાવ બદલાય ત્યારે પોસ્ટર બદલવાનું ભૂલી જવું',
          '2 મીટર દૂરથી ન વંચાય તેવા નાના અક્ષર',
        ] },
      ],
      mr: [
        { h: 'एक उदाहरण, कागदापासून पोस्टरपर्यंत' },
        { steps: [
          'कागदी यादी: चहा ₹15, कॉफी ₹20, वडापाव ₹20, पोहे ₹25, सामोसा ₹15',
          'AI मांडतो: “गरम पेये: चहा ₹15 · कॉफी ₹20. नाश्ता: वडापाव ₹20 · पोहे ₹25 · सामोसा ₹15”, आणि “सकाळचा चहा कट्टा” असे शीर्षक सुचवतो',
          'Canva मध्ये “menu” शोधा, मोठ्या आणि स्पष्ट अक्षरांचे डिझाइन निवडा, आणि तुमचे दोन विभाग टाइप करा',
          'WhatsApp स्टेटससाठी PNG म्हणून, किंवा स्थानिक प्रिंटच्या दुकानात छापण्यासाठी PDF म्हणून डाउनलोड करा',
        ] },
        { h: 'नेहमी काम करणारे डिझाइनचे नियम' },
        { list: [
          'एक शीर्षक आणि जास्तीत जास्त दोन फॉन्ट',
          'दर उजव्या बाजूला एका रेषेत, म्हणजे डोळ्यांना पटकन सापडतील',
          'फिकट पार्श्वभूमीवर गडद अक्षरे (किंवा उलट), गर्दीच्या फोटोवर कधीही नाही',
          'खाली दुकानाचे नाव, फोन नंबर आणि वेळा',
          'मोकळी जागा ठेवा. गर्दीचे पोस्टर कोणीच वाचत नाही',
        ] },
        { h: 'नेहमीच्या चुका' },
        { list: [
          'संपूर्ण पोस्टर AI कडून चित्र म्हणून बनवून घेणे, ज्यात मराठी अक्षरे चुकतात',
          'दर बदलल्यावर पोस्टर बदलायला विसरणे',
          '2 मीटर दुरून वाचता येणार नाहीत अशी लहान अक्षरे',
        ] },
      ],
    },
  },

  'privacy-what-not-to-paste': {
    fig: 'paste-or-not',
    cap: {
      en: 'Left: never paste these. Right: what to do instead.',
      gu: 'ડાબે: આ ક્યારેય ન નાખો. જમણે: તેના બદલે શું કરવું.',
      mr: 'डावीकडे: हे कधीही टाकू नका. उजवीकडे: त्याऐवजी काय करायचे.',
    },
    more: {
      en: [
        { h: 'Turning a risky question into a safe one' },
        { list: [
          'Risky: a photo of your bank statement and “Why was ₹590 deducted?” Safe: “My savings account shows a ₹590 deduction called ‘SMS charges + GST’. What does that usually mean?”',
          'Risky: pasting a customer’s complaint with her name and number. Safe: “A customer says her order was 2 days late. Write a polite reply.”',
          'Risky: “My Aadhaar number is …, is it linked to my bank?” Safe: check on the official UIDAI website or the mAadhaar app',
        ] },
        { h: 'Stop your chats being used for training' },
        { steps: [
          'ChatGPT: tap your profile, then Settings, then Data controls, and turn off “Improve the model for everyone”',
          'Gemini: open Gemini Apps Activity in your Google account and turn it off',
          'In both, delete old chats you don’t need',
        ] },
        'Menu names change from time to time. If you can’t find these, ask the app itself: “How do I stop my chats being used for training?”',
        { h: 'If you already pasted something private' },
        'Delete that chat. If it was a password or PIN, change it now. If it was a card or bank detail, call your bank on its official number.',
      ],
      gu: [
        { h: 'જોખમી પ્રશ્નને સલામત બનાવો' },
        { list: [
          'જોખમી: બેંક સ્ટેટમેન્ટનો ફોટો અને “₹590 કેમ કપાયા?” સલામત: “મારા બચત ખાતામાં ‘SMS charges + GST’ નામે ₹590 કપાયા છે. સામાન્ય રીતે તેનો અર્થ શું હોય?”',
          'જોખમી: ગ્રાહકની ફરિયાદ તેના નામ અને નંબર સાથે પેસ્ટ કરવી. સલામત: “એક ગ્રાહક કહે છે કે તેનો ઓર્ડર 2 દિવસ મોડો આવ્યો. નમ્ર જવાબ લખો.”',
          'જોખમી: “મારો આધાર નંબર … છે, શું બેંક સાથે જોડાયેલો છે?” સલામત: સત્તાવાર UIDAI વેબસાઇટ કે mAadhaar એપ પર તપાસો',
        ] },
        { h: 'તમારી ચૅટ તાલીમમાં ન વપરાય તેવું કરો' },
        { steps: [
          'ChatGPT: પ્રોફાઇલ પર ટૅપ કરો, પછી Settings, પછી Data controls, અને “Improve the model for everyone” બંધ કરો',
          'Gemini: તમારા Google એકાઉન્ટમાં Gemini Apps Activity ખોલીને બંધ કરો',
          'બંનેમાં, જરૂર ન હોય તેવી જૂની ચૅટ ડિલીટ કરો',
        ] },
        'મેનુનાં નામ સમયે સમયે બદલાય છે. ન મળે તો એપને જ પૂછો: “મારી ચૅટ તાલીમમાં ન વપરાય તે કેવી રીતે કરવું?”',
        { h: 'જો કંઈ અંગત પહેલેથી નાખી દીધું હોય' },
        'એ ચૅટ ડિલીટ કરો. પાસવર્ડ કે PIN હોય તો તરત બદલો. કાર્ડ કે બેંકની વિગત હોય તો બેંકના સત્તાવાર નંબર પર ફોન કરો.',
      ],
      mr: [
        { h: 'धोकादायक प्रश्न सुरक्षित करा' },
        { list: [
          'धोकादायक: बँक स्टेटमेंटचा फोटो आणि “₹590 का कापले?” सुरक्षित: “माझ्या बचत खात्यात ‘SMS charges + GST’ नावाने ₹590 कापले आहेत. साधारणपणे याचा अर्थ काय असतो?”',
          'धोकादायक: ग्राहकाची तक्रार तिच्या नावासह आणि नंबरसह पेस्ट करणे. सुरक्षित: “एक ग्राहक म्हणते की तिची ऑर्डर 2 दिवस उशिरा आली. नम्र उत्तर लिहा.”',
          'धोकादायक: “माझा आधार नंबर … आहे, तो बँकेशी जोडलेला आहे का?” सुरक्षित: अधिकृत UIDAI वेबसाइट किंवा mAadhaar ॲपवर तपासा',
        ] },
        { h: 'तुमच्या चॅट प्रशिक्षणासाठी वापरल्या जाऊ नयेत असे करा' },
        { steps: [
          'ChatGPT: प्रोफाइलवर टॅप करा, मग Settings, मग Data controls, आणि “Improve the model for everyone” बंद करा',
          'Gemini: तुमच्या Google अकाउंटमध्ये Gemini Apps Activity उघडून बंद करा',
          'दोन्हींमध्ये, गरज नसलेल्या जुन्या चॅट डिलीट करा',
        ] },
        'मेनूंची नावे वेळोवेळी बदलतात. सापडली नाहीत तर ॲपलाच विचारा: “माझ्या चॅट प्रशिक्षणासाठी वापरल्या जाऊ नयेत यासाठी काय करायचे?”',
        { h: 'आधीच काही वैयक्तिक टाकले असेल तर' },
        'ती चॅट डिलीट करा. पासवर्ड किंवा PIN असेल तर लगेच बदला. कार्ड किंवा बँकेचा तपशील असेल तर बँकेच्या अधिकृत नंबरवर फोन करा.',
      ],
    },
  },
});
