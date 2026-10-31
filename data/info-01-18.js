// Infographics for Parts 1–18. Every text is [en, gu, mr]. Columns: [icon, heading, en points, gu points, mr points].
// Icons are in data/infographic.js (window.ICONS). Keep points under about 22 characters.
Object.assign(window.INFO, {
  'what-is-ai': {
    t: ['How AI works', 'AI કેવી રીતે કામ કરે છે', 'AI कसे काम करते'],
    lead: ['ai', ['Inputs', 'ઇનપુટ', 'इनपुट']],
    steps: [['Learn patterns', 'પેટર્ન શીખે', 'नमुने शिकतो'], ['Make predictions', 'અનુમાન કરે', 'अंदाज बांधतो'], ['Help with tasks', 'કામમાં મદદ', 'कामात मदत']],
    cols: [
      ['book', ['It has read a lot', 'ઘણું વાંચ્યું છે', 'खूप वाचले आहे'], ['Books and websites', 'Photos and voices', 'Many languages'], ['પુસ્તકો, વેબસાઇટો', 'ફોટા અને અવાજ', 'ઘણી ભાષાઓ'], ['पुस्तके, वेबसाइट', 'फोटो आणि आवाज', 'अनेक भाषा']],
      ['network', ['It guesses well', 'સારું અનુમાન', 'चांगला अंदाज'], ['Next likely word', 'A likely answer', 'Can be wrong'], ['આગળનો સંભવિત શબ્દ', 'સંભવિત જવાબ', 'ખોટું પણ હોઈ શકે'], ['पुढचा संभाव्य शब्द', 'संभाव्य उत्तर', 'चुकीचेही असू शकते']],
      ['gears', ['It helps you', 'તમને મદદ કરે', 'तुम्हाला मदत'], ['Write and translate', 'Explain simply', 'Give ideas'], ['લખવું, ભાષાંતર', 'સરળ સમજૂતી', 'નવા વિચારો'], ['लिहिणे, भाषांतर', 'सोपे स्पष्टीकरण', 'नव्या कल्पना']],
    ],
  },
  'ai-for-your-shop': {
    t: ['AI for your shop', 'તમારી દુકાન માટે AI', 'तुमच्या दुकानासाठी AI'],
    lead: ['shop', ['Your shop', 'તમારી દુકાન', 'तुमचे दुकान']],
    steps: [['Give the facts', 'હકીકતો આપો', 'तथ्ये द्या'], ['Get a draft', 'મુસદ્દો મેળવો', 'मसुदा मिळवा'], ['Check and send', 'તપાસો, મોકલો', 'तपासा, पाठवा']],
    cols: [
      ['list', ['Tell 4 things', '4 વાત કહો', '4 गोष्टी सांगा'], ['Who you are', 'What you want', 'Facts and language'], ['તમે કોણ છો', 'શું જોઈએ છે', 'હકીકત અને ભાષા'], ['तुम्ही कोण', 'काय हवे', 'तथ्ये आणि भाषा']],
      ['chat', ['AI writes', 'AI લખે', 'AI लिहितो'], ['WhatsApp replies', 'Product details', 'Festival offers'], ['WhatsApp જવાબ', 'વસ્તુનું વર્ણન', 'તહેવારની ઑફર'], ['WhatsApp उत्तरे', 'वस्तूचे वर्णन', 'सणाच्या ऑफर']],
      ['check', ['You decide', 'નિર્ણય તમારો', 'निर्णय तुमचा'], ['Check prices', 'Make it sound like you', 'Save quick replies'], ['ભાવ તપાસો', 'તમારા જેવું બનાવો', 'ક્વિક રિપ્લાય સાચવો'], ['दर तपासा', 'तुमच्यासारखे करा', 'क्विक रिप्लाय ठेवा']],
    ],
  },
  'ai-voice-scams': {
    t: ['Stop an AI voice scam', 'AI અવાજની છેતરપિંડી રોકો', 'AI आवाजाची फसवणूक थांबवा'],
    lead: ['phone', ['Strange call', 'અજાણ્યો કૉલ', 'संशयित कॉल']],
    steps: [['Spot the trick', 'યુક્તિ ઓળખો', 'युक्ती ओळखा'], ['Pause and check', 'થોભો, તપાસો', 'थांबा, तपासा'], ['Report it', 'ફરિયાદ કરો', 'तक्रार करा']],
    cols: [
      ['warning', ['Warning signs', 'ચેતવણી ચિહ્નો', 'धोक्याची चिन्हे'], ['“Send money now”', '“Don’t tell anyone”', 'Asks for OTP/PIN'], ['“હમણાં પૈસા મોકલો”', '“કોઈને ન કહેતા”', 'OTP/PIN માગે'], ['“आत्ता पैसे पाठवा”', '“कोणाला सांगू नका”', 'OTP/PIN मागतात']],
      ['hand', ['Stop', 'થોભો', 'थांबा'], ['Hang up calmly', 'Call saved number', 'Ask the code word'], ['શાંતિથી ફોન મૂકો', 'સાચવેલા નંબરે ફોન', 'કોડ વર્ડ પૂછો'], ['शांतपणे फोन ठेवा', 'सेव्ह नंबरवर फोन', 'कोड वर्ड विचारा']],
      ['shield', ['Get help', 'મદદ લો', 'मदत घ्या'], ['Call 1930', 'cybercrime.gov.in', 'Tell your family'], ['1930 પર ફોન', 'cybercrime.gov.in', 'પરિવારને કહો'], ['1930 वर फोन', 'cybercrime.gov.in', 'कुटुंबाला सांगा']],
    ],
  },
  'talk-in-your-language': {
    t: ['Speak to AI in your language', 'તમારી ભાષામાં AI સાથે બોલો', 'तुमच्या भाषेत AI शी बोला'],
    lead: ['mic', ['Your voice', 'તમારો અવાજ', 'तुमचा आवाज']],
    steps: [['Choose language', 'ભાષા પસંદ કરો', 'भाषा निवडा'], ['Speak', 'બોલો', 'बोला'], ['Read and send', 'વાંચો, મોકલો', 'वाचा, पाठवा']],
    cols: [
      ['globe', ['Keyboard setup', 'કીબોર્ડ સેટિંગ', 'कीबोर्ड सेटिंग'], ['Add Gujarati/Marathi', 'Use the 🌐 key', 'Once only'], ['ગુજરાતી ઉમેરો', '🌐 બટન વાપરો', 'ફક્ત એક વાર'], ['मराठी जोडा', '🌐 बटण वापरा', 'फक्त एकदाच']],
      ['phone', ['Voice typing', 'બોલીને ટાઇપ', 'बोलून टायपिंग'], ['Hold the 🎤', 'Speak slowly', 'Quiet place'], ['🎤 દબાવી રાખો', 'ધીમે બોલો', 'શાંત જગ્યા'], ['🎤 दाबून धरा', 'हळू बोला', 'शांत जागा']],
      ['chat', ['AI voice mode', 'AI વોઇસ મોડ', 'AI व्हॉइस मोड'], ['ChatGPT, Gemini', '“Reply in Gujarati”', 'Bhashini app'], ['ChatGPT, Gemini', '“ગુજરાતીમાં જવાબ”', 'ભાષિણી એપ'], ['ChatGPT, Gemini', '“मराठीत उत्तर द्या”', 'भाषिणी ॲप']],
    ],
  },
  'menu-poster-price-list': {
    t: ['A poster in five minutes', 'પાંચ મિનિટમાં પોસ્ટર', 'पाच मिनिटांत पोस्टर'],
    lead: ['doc', ['Your list', 'તમારી યાદી', 'तुमची यादी']],
    steps: [['Write the words', 'શબ્દો લખાવો', 'शब्द लिहून घ्या'], ['Design it', 'ડિઝાઇન કરો', 'डिझाइन करा'], ['Check and print', 'તપાસો, છાપો', 'तपासा, छापा']],
    cols: [
      ['spark', ['AI arranges', 'AI ગોઠવે', 'AI मांडतो'], ['Sections', 'A heading', 'One short line'], ['વિભાગો', 'શીર્ષક', 'એક ટૂંકી લાઇન'], ['विभाग', 'शीर्षक', 'एक छोटी ओळ']],
      ['picture', ['Canva (free)', 'Canva (મફત)', 'Canva (मोफत)'], ['Pick a template', 'Type text yourself', 'Big letters'], ['ટેમ્પ્લેટ પસંદ કરો', 'લખાણ જાતે ટાઇપ', 'મોટા અક્ષર'], ['टेम्पलेट निवडा', 'मजकूर स्वतः टाइप', 'मोठी अक्षरे']],
      ['search', ['Final check', 'છેલ્લી તપાસ', 'शेवटची तपासणी'], ['Every price', 'Spelling', 'Phone and timings'], ['દરેક ભાવ', 'જોડણી', 'ફોન અને સમય'], ['प्रत्येक दर', 'शुद्धलेखन', 'फोन आणि वेळा']],
    ],
  },
  'privacy-what-not-to-paste': {
    t: ['Keep your data safe with AI', 'AI સાથે તમારી માહિતી સુરક્ષિત', 'AI सोबत तुमची माहिती सुरक्षित'],
    lead: ['lock', ['Private data', 'અંગત માહિતી', 'खासगी माहिती']],
    steps: [['Spot it', 'ઓળખો', 'ओळखा'], ['Remove it', 'કાઢી નાખો', 'काढून टाका'], ['Ask safely', 'સલામત પૂછો', 'सुरक्षित विचारा']],
    cols: [
      ['cross', ['Never paste', 'ક્યારેય ન નાખો', 'कधीही टाकू नका'], ['OTP, PIN', 'Aadhaar, PAN', 'Customer numbers'], ['OTP, PIN', 'આધાર, PAN', 'ગ્રાહકના નંબર'], ['OTP, PIN', 'आधार, PAN', 'ग्राहकांचे नंबर']],
      ['pencil', ['Describe instead', 'વર્ણન કરો', 'वर्णन करा'], ['“Customer A”', 'Keep the numbers', 'Drop the names'], ['“ગ્રાહક A”', 'આંકડા રાખો', 'નામ કાઢો'], ['“ग्राहक A”', 'आकडे ठेवा', 'नावे काढा']],
      ['gears', ['Settings', 'સેટિંગ', 'सेटिंग'], ['Data controls', 'Training off', 'Delete old chats'], ['Data controls', 'તાલીમ બંધ', 'જૂની ચૅટ ડિલીટ'], ['Data controls', 'प्रशिक्षण बंद', 'जुन्या चॅट डिलीट']],
    ],
  },
  'asking-good-questions': {
    t: ['Ask AI a good question', 'AI ને સારો પ્રશ્ન પૂછો', 'AI ला चांगला प्रश्न विचारा'],
    lead: ['question', ['Your need', 'તમારી જરૂર', 'तुमची गरज']],
    steps: [['Explain', 'સમજાવો', 'समजावा'], ['Get a draft', 'મુસદ્દો મેળવો', 'मसुदा मिळवा'], ['Improve it', 'સુધારો', 'सुधारा']],
    cols: [
      ['list', ['Include', 'આ લખો', 'हे लिहा'], ['Who it’s for', 'The facts', 'Shape and tone'], ['કોના માટે', 'હકીકતો', 'રૂપ અને સૂર'], ['कोणासाठी', 'तथ्ये', 'स्वरूप आणि सूर']],
      ['chat', ['First answer', 'પહેલો જવાબ', 'पहिले उत्तर'], ['It’s a draft', 'Read it fully', 'Note what’s off'], ['એ મુસદ્દો છે', 'પૂરો વાંચો', 'ખામી નોંધો'], ['तो मसुदा आहे', 'पूर्ण वाचा', 'चुका नोंदवा']],
      ['tool', ['Keep talking', 'વાત ચાલુ રાખો', 'बोलत राहा'], ['“Shorter”', '“More polite”', '“Ask me 3 questions”'], ['“ટૂંકું કરો”', '“વધુ નમ્ર”', '“મને 3 પ્રશ્ન પૂછો”'], ['“छोटे करा”', '“अधिक नम्र”', '“मला 3 प्रश्न विचारा”']],
    ],
  },
  'ai-makes-mistakes': {
    t: ['Check before you trust', 'ભરોસો કરતાં પહેલાં તપાસો', 'विश्वास ठेवण्यापूर्वी तपासा'],
    lead: ['ai', ['AI answer', 'AI નો જવાબ', 'AI चे उत्तर']],
    steps: [['Spot the risk', 'જોખમ ઓળખો', 'धोका ओळखा'], ['Verify', 'ખાતરી કરો', 'खात्री करा'], ['Decide', 'નક્કી કરો', 'ठरवा']],
    cols: [
      ['warning', ['Extra care', 'ખાસ કાળજી', 'विशेष काळजी'], ['Money and tax', 'Health and law', 'Recent news'], ['પૈસા અને ટૅક્સ', 'આરોગ્ય, કાયદો', 'તાજા સમાચાર'], ['पैसे आणि कर', 'आरोग्य, कायदा', 'ताज्या बातम्या']],
      ['search', ['How to check', 'કેવી રીતે તપાસવું', 'कसे तपासायचे'], ['.gov.in sites', 'A calculator', 'Ask an expert'], ['.gov.in સાઇટ', 'કૅલ્ક્યુલેટર', 'જાણકારને પૂછો'], ['.gov.in साइट', 'कॅल्क्युलेटर', 'जाणकाराला विचारा']],
      ['check', ['Then act', 'પછી કરો', 'मग करा'], ['AI to understand', 'Sources to decide', 'You are the judge'], ['સમજવા AI', 'નિર્ણય માટે સ્રોત', 'નિર્ણાયક તમે'], ['समजण्यासाठी AI', 'निर्णयासाठी स्रोत', 'निर्णायक तुम्ही']],
    ],
  },
  'fake-upi-messages': {
    t: ['Fake payment tricks', 'નકલી પેમેન્ટની યુક્તિઓ', 'बनावट पेमेंटच्या युक्त्या'],
    lead: ['upi', ['Payment', 'પેમેન્ટ', 'पेमेंट']],
    steps: [['Spot the fake', 'નકલી ઓળખો', 'बनावट ओळखा'], ['Verify in app', 'એપમાં તપાસો', 'ॲपमध्ये तपासा'], ['Protect the shop', 'દુકાન સાચવો', 'दुकान जपा']],
    cols: [
      ['picture', ['Fake proof', 'નકલી પુરાવો', 'बनावट पुरावा'], ['Edited screenshot', 'SMS from a mobile', '“Return extra money”'], ['એડિટ કરેલો સ્ક્રીનશૉટ', 'મોબાઇલથી SMS', '“વધારાના પાછા આપો”'], ['एडिट केलेला स्क्रीनशॉट', 'मोबाइलवरून SMS', '“जास्तीचे परत करा”']],
      ['phone', ['Real check', 'સાચી તપાસ', 'खरी तपासणी'], ['Your bank app', 'Soundbox amount', 'No PIN to receive'], ['તમારી બેંક એપ', 'સાઉન્ડબૉક્સની રકમ', 'મેળવવા PIN નહીં'], ['तुमचे बँक ॲप', 'साउंडबॉक्सची रक्कम', 'घेण्यासाठी PIN नाही']],
      ['qr', ['Daily habits', 'રોજની ટેવ', 'रोजच्या सवयी'], ['Check QR sticker', 'Train your staff', 'Put up a sign'], ['QR સ્ટીકર તપાસો', 'સ્ટાફને શીખવો', 'બોર્ડ લગાવો'], ['QR स्टिकर तपासा', 'कर्मचाऱ्यांना शिकवा', 'फलक लावा']],
    ],
  },
  'google-lens': {
    t: ['Google Lens: point and know', 'Google Lens: તાકો અને જાણો', 'Google Lens: रोखा आणि जाणा'],
    lead: ['camera', ['Camera', 'કૅમેરા', 'कॅमेरा']],
    steps: [['Point', 'તાકો', 'रोखा'], ['Tap Lens', 'Lens ટૅપ કરો', 'Lens टॅप करा'], ['Use the result', 'પરિણામ વાપરો', 'निकाल वापरा']],
    cols: [
      ['globe', ['Translate', 'ભાષાંતર', 'भाषांतर'], ['Notices, labels', 'Forms, letters', 'Read aloud'], ['નોટિસ, લેબલ', 'ફોર્મ, પત્ર', 'મોટેથી વાંચે'], ['सूचना, लेबल', 'फॉर्म, पत्रे', 'मोठ्याने वाचतो']],
      ['search', ['Identify', 'ઓળખો', 'ओळखा'], ['Plants, insects', 'Spare parts', 'Similar products'], ['છોડ, જીવડાં', 'સ્પેરપાર્ટ', 'મળતી વસ્તુઓ'], ['झाडे, कीटक', 'सुटे भाग', 'मिळत्या वस्तू']],
      ['warning', ['Be careful', 'સાવધાન', 'काळजी घ्या'], ['Medicine: ask chemist', 'Don’t eat on its word', 'No ID card scans'], ['દવા: કેમિસ્ટને પૂછો', 'તેના કહેવાથી ન ખાવ', 'ઓળખપત્ર સ્કૅન નહીં'], ['औषध: केमिस्टला विचारा', 'त्यावरून खाऊ नका', 'ओळखपत्र स्कॅन नको']],
    ],
  },
  'translate-anything': {
    t: ['Translate between languages', 'ભાષાઓ વચ્ચે ભાષાંતર', 'भाषांमध्ये भाषांतर'],
    lead: ['globe', ['Any language', 'કોઈ પણ ભાષા', 'कोणतीही भाषा']],
    steps: [['Pick a tool', 'સાધન પસંદ કરો', 'साधन निवडा'], ['Translate', 'ભાષાંતર કરો', 'भाषांतर करा'], ['Check back', 'પાછું તપાસો', 'उलट तपासा']],
    cols: [
      ['tool', ['Tools', 'સાધનો', 'साधने'], ['Google Translate', 'ChatGPT, Gemini', 'Bhashini (voice)'], ['Google Translate', 'ChatGPT, Gemini', 'ભાષિણી (અવાજ)'], ['Google Translate', 'ChatGPT, Gemini', 'भाषिणी (आवाज)']],
      ['chat', ['Ask well', 'સારી રીતે પૂછો', 'नीट विचारा'], ['“Not word-for-word”', '“Polite, natural”', 'Name the language'], ['“શબ્દશઃ નહીં”', '“નમ્ર, સ્વાભાવિક”', 'ભાષાનું નામ આપો'], ['“शब्दशः नको”', '“नम्र, नैसर्गिक”', 'भाषेचे नाव सांगा']],
      ['check', ['Back-translate', 'પાછું ભાષાંતર', 'उलट भाषांतर'], ['Same meaning?', 'Fix and resend', 'Legal: ask a person'], ['અર્થ એ જ છે?', 'સુધારો, ફરી મોકલો', 'કાનૂની: માણસને પૂછો'], ['अर्थ तोच आहे?', 'दुरुस्त करा', 'कायदेशीर: माणसाला विचारा']],
    ],
  },
  'bills-gst-accounts': {
    t: ['AI for bills and GST', 'બિલ અને GST માટે AI', 'बिले आणि GST साठी AI'],
    lead: ['doc', ['Your bills', 'તમારાં બિલ', 'तुमची बिले']],
    steps: [['Understand', 'સમજો', 'समजून घ्या'], ['Organise', 'ગોઠવો', 'मांडा'], ['Verify', 'ચકાસો', 'पडताळा']],
    cols: [
      ['book', ['Explain terms', 'શબ્દો સમજો', 'संज्ञा समजा'], ['CGST, SGST, IGST', 'Input tax credit', 'HSN codes'], ['CGST, SGST, IGST', 'ઇનપુટ ટૅક્સ ક્રેડિટ', 'HSN કોડ'], ['CGST, SGST, IGST', 'इनपुट टॅक्स क्रेडिट', 'HSN कोड']],
      ['chart', ['Simple sheet', 'સાદી શીટ', 'साधी शीट'], ['Daily sales', 'Expenses', 'Payment reminders'], ['રોજનું વેચાણ', 'ખર્ચ', 'પેમેન્ટ રિમાઇન્ડર'], ['रोजची विक्री', 'खर्च', 'पेमेंट स्मरणपत्रे']],
      ['rupee', ['You check', 'તમે તપાસો', 'तुम्ही तपासा'], ['Totals: calculator', 'Rates: GST portal', 'Filing: your CA'], ['ટોટલ: કૅલ્ક્યુલેટર', 'દર: GST પોર્ટલ', 'રિટર્ન: તમારા CA'], ['बेरीज: कॅल्क्युलेटर', 'दर: GST पोर्टल', 'रिटर्न: तुमचे CA']],
    ],
  },
  'phishing-messages': {
    t: ['Spot a scam message', 'છેતરપિંડીનો મેસેજ ઓળખો', 'फसवणुकीचा मेसेज ओळखा'],
    lead: ['chat', ['New message', 'નવો મેસેજ', 'नवा मेसेज']],
    steps: [['Read the ask', 'માગણી વાંચો', 'मागणी वाचा'], ['Find red flags', 'ચેતવણી શોધો', 'धोका शोधा'], ['Act safely', 'સલામત પગલું', 'सुरक्षित पाऊल']],
    cols: [
      ['doc', ['Common lies', 'સામાન્ય જૂઠાણાં', 'नेहमीच्या थापा'], ['“Power cut tonight”', '“KYC expired”', '“Parcel held”'], ['“આજે વીજળી કપાશે”', '“KYC પૂરું થયું”', '“પાર્સલ અટક્યું”'], ['“आज वीज कापणार”', '“KYC संपले”', '“पार्सल अडकले”']],
      ['warning', ['Red flags', 'ચેતવણી ચિહ્નો', 'धोक्याची चिन्हे'], ['Hurry and fear', 'A link or number', 'Asks OTP or app'], ['ઉતાવળ અને ડર', 'લિંક કે નંબર', 'OTP કે એપ માગે'], ['घाई आणि भीती', 'लिंक किंवा नंबर', 'OTP किंवा ॲप मागणे']],
      ['shield', ['Safe steps', 'સલામત પગલાં', 'सुरक्षित पावले'], ['Don’t tap links', 'Open official app', 'Report: Chakshu'], ['લિંક ન દબાવો', 'સત્તાવાર એપ ખોલો', 'ફરિયાદ: ચક્ષુ'], ['लिंक दाबू नका', 'अधिकृत ॲप उघडा', 'तक्रार: चक्षू']],
    ],
  },
  'farmers-weather-prices': {
    t: ['Weather and prices for farmers', 'ખેડૂતો માટે હવામાન અને ભાવ', 'शेतकऱ्यांसाठी हवामान आणि भाव'],
    lead: ['leaf', ['Your crop', 'તમારો પાક', 'तुमचे पीक']],
    steps: [['Get the facts', 'હકીકત મેળવો', 'तथ्ये मिळवा'], ['Ask AI', 'AI ને પૂછો', 'AI ला विचारा'], ['Confirm', 'ખાતરી કરો', 'खात्री करा']],
    cols: [
      ['rain', ['Weather', 'હવામાન', 'हवामान'], ['Mausam (IMD)', 'Meghdoot', 'Damini'], ['મૌસમ (IMD)', 'મેઘદૂત', 'દામિની'], ['मौसम (IMD)', 'मेघदूत', 'दामिनी']],
      ['chart', ['Prices', 'ભાવ', 'भाव'], ['eNAM', 'Agmarknet', 'Kisan: 1800-180-1551'], ['eNAM', 'Agmarknet', 'કિસાન: 1800-180-1551'], ['eNAM', 'Agmarknet', 'किसान: 1800-180-1551']],
      ['users', ['Before deciding', 'નિર્ણય પહેલાં', 'निर्णयापूर्वी'], ['AI explains', 'Ask the KVK', 'Ask the officer'], ['AI સમજાવે', 'KVK ને પૂછો', 'અધિકારીને પૂછો'], ['AI समजावतो', 'KVK ला विचारा', 'अधिकाऱ्यांना विचारा']],
    ],
  },
  'crop-photos': {
    t: ['Crop photo check', 'પાકના ફોટાની તપાસ', 'पिकाच्या फोटोची तपासणी'],
    lead: ['leaf', ['Sick plant', 'બીમાર છોડ', 'आजारी झाड']],
    steps: [['Take photos', 'ફોટા લો', 'फोटो काढा'], ['First guess', 'પહેલું અનુમાન', 'पहिला अंदाज'], ['Confirm', 'ખાતરી કરો', 'खात्री करा']],
    cols: [
      ['camera', ['Good photo', 'સારો ફોટો', 'चांगला फोटो'], ['Daylight, no flash', 'Leaf front and back', 'Whole plant'], ['દિવસ, ફ્લૅશ વગર', 'પાન આગળ-પાછળ', 'આખો છોડ'], ['दिवसा, फ्लॅशशिवाय', 'पान पुढे-मागे', 'संपूर्ण झाड']],
      ['ai', ['App or AI', 'એપ કે AI', 'ॲप किंवा AI'], ['Plantix', 'ChatGPT, Gemini', 'Lists possibilities'], ['Plantix', 'ChatGPT, Gemini', 'શક્યતાઓ બતાવે'], ['Plantix', 'ChatGPT, Gemini', 'शक्यता सांगतो']],
      ['users', ['Before spraying', 'છાંટતાં પહેલાં', 'फवारणीपूर्वी'], ['Ask the KVK', 'Read the label', 'No dose from AI'], ['KVK ને પૂછો', 'લેબલ વાંચો', 'AI થી ડોઝ નહીં'], ['KVK ला विचारा', 'लेबल वाचा', 'AI कडून डोस नको']],
    ],
  },
  'government-schemes': {
    t: ['Find schemes for you', 'તમારા માટેની યોજનાઓ', 'तुमच्यासाठीच्या योजना'],
    lead: ['user', ['You', 'તમે', 'तुम्ही']],
    steps: [['Search', 'શોધો', 'शोधा'], ['Understand', 'સમજો', 'समजून घ्या'], ['Apply', 'અરજી કરો', 'अर्ज करा']],
    cols: [
      ['search', ['Where to look', 'ક્યાં શોધવું', 'कुठे शोधायचे'], ['myScheme.gov.in', 'Digital Gujarat', 'Aaple Sarkar'], ['myScheme.gov.in', 'ડિજિટલ ગુજરાત', 'આપલે સરકાર'], ['myScheme.gov.in', 'आपले सरकार', 'डिजिटल गुजरात']],
      ['book', ['AI explains', 'AI સમજાવે', 'AI समजावतो'], ['Paste official rules', 'Who can apply', 'Documents needed'], ['સરકારી નિયમો પેસ્ટ', 'કોણ અરજી કરી શકે', 'જરૂરી દસ્તાવેજ'], ['अधिकृत नियम पेस्ट', 'कोण अर्ज करू शकतो', 'लागणारी कागदपत्रे']],
      ['bank', ['Apply safely', 'સલામત અરજી', 'सुरक्षित अर्ज'], ['Official site', 'Or a CSC centre', 'Never pay agents'], ['સત્તાવાર સાઇટ', 'અથવા CSC કેન્દ્ર', 'એજન્ટને પૈસા નહીં'], ['अधिकृत साइट', 'किंवा CSC केंद्र', 'एजंटला पैसे नको']],
    ],
  },
  'filling-forms': {
    t: ['Forms made easy', 'ફોર્મ સહેલાં', 'फॉर्म सोपे'],
    lead: ['doc', ['A form', 'ફોર્મ', 'फॉर्म']],
    steps: [['Photo a blank', 'કોરા ફોર્મનો ફોટો', 'कोऱ्या फॉर्मचा फोटो'], ['Understand', 'સમજો', 'समजून घ्या'], ['Fill it yourself', 'જાતે ભરો', 'स्वतः भरा']],
    cols: [
      ['camera', ['Blank form only', 'ફક્ત કોરું ફોર્મ', 'फक्त कोरा फॉर्म'], ['No Aadhaar on it', 'No signature', 'No photo'], ['આધાર નંબર નહીં', 'સહી નહીં', 'ફોટો નહીં'], ['आधार नंबर नको', 'सही नको', 'फोटो नको']],
      ['book', ['AI explains', 'AI સમજાવે', 'AI समजावतो'], ['Nominee = heir', 'Domicile = residence', 'Proof of address'], ['નૉમિની = વારસદાર', 'ડોમિસાઇલ = રહેઠાણ', 'સરનામાનો પુરાવો'], ['नॉमिनी = वारसदार', 'डोमिसाइल = अधिवास', 'पत्त्याचा पुरावा']],
      ['pencil', ['You fill it', 'તમે ભરો', 'तुम्ही भरा'], ['On paper or site', 'DigiLocker ready', 'Check, then submit'], ['કાગળ કે સાઇટ પર', 'ડિજિલૉકર તૈયાર', 'તપાસો, પછી જમા'], ['कागद किंवा साइटवर', 'डिजिलॉकर तयार', 'तपासा, मग जमा']],
    ],
  },
  'whatsapp-catalogue': {
    t: ['WhatsApp Business in an afternoon', 'એક બપોરમાં WhatsApp Business', 'एका दुपारीत WhatsApp Business'],
    lead: ['phone', ['Your number', 'તમારો નંબર', 'तुमचा नंबर']],
    steps: [['Set up', 'સેટઅપ', 'सेटअप'], ['Add products', 'વસ્તુઓ ઉમેરો', 'वस्तू जोडा'], ['Reply faster', 'ઝડપી જવાબ', 'जलद उत्तर']],
    cols: [
      ['shop', ['Profile', 'પ્રોફાઇલ', 'प्रोफाइल'], ['Address', 'Hours', 'Category'], ['સરનામું', 'સમય', 'પ્રકાર'], ['पत्ता', 'वेळा', 'प्रकार']],
      ['box', ['Catalogue', 'કૅટલૉગ', 'कॅटलॉग'], ['10 main products', 'Photo and price', 'AI descriptions'], ['10 મુખ્ય વસ્તુઓ', 'ફોટો અને ભાવ', 'AI વર્ણન'], ['10 मुख्य वस्तू', 'फोटो आणि दर', 'AI वर्णन']],
      ['chat', ['Messages', 'મેસેજ', 'मेसेज'], ['Greeting', 'Away message', 'Quick replies “/”'], ['સ્વાગત મેસેજ', 'બંધ સમયનો મેસેજ', 'ક્વિક રિપ્લાય “/”'], ['स्वागत मेसेज', 'बंद वेळेचा मेसेज', 'क्विक रिप्लाय “/”']],
    ],
  },
});
