// "Is this tour right for you?" (survey.html)
// Each tour has its own short questions, taken from its "Before you book" section.
// Answers: yes / unsure / no.  must = "no" means not a fit;  soft = "no" only adds a note.
// The answers and the result are emailed to us through Web3Forms (same key as contact.html).
// Open with ?tour=NML | IKC | SKC | DNL | TLH | RGL to start straight with that tour.

(function () {
  const WEB3FORMS_KEY = "9af2499b-65f9-4804-ae49-a23a568ca84d";
  // Registration form, shown when the result is a fit
  const REGISTER_URL = "https://www.surveycake.com/s/yQpxD";

  // ---------- Tours ----------
  // ok: months (1–12) in season;  edge: months at the edge of the season.
  // high: high altitude;  riding: several long riding days;  family: not for older travelers or children.
  const TOURS = {
    // stars: intensity out of 5 (same as the homepage cards)
    NML: { link: "7days-nomad-life.html", stars: 2, ok: [6, 7, 8, 9], edge: [5] }, // mid-May – end of Sep
    IKC: { link: "8days-Issyk-kul.html", stars: 2, ok: [5, 6, 7, 8, 9, 10, 11] }, // May – Nov
    SKC: { link: "8days-classic.html", stars: 3, ok: [6, 7, 8], edge: [5, 9], high: true }, // late May – mid-Sep
    DNL: { link: "9days-toktogul.html", stars: 5, ok: [7, 8, 9], edge: [6], high: true, riding: true, family: true }, // mid-Jun – end of Sep
    TLH: { link: "10days-off-road-v2.html", stars: 4, ok: [7, 8], edge: [6, 9], high: true, riding: true, family: true }, // mid-Jun – mid-Sep
    RGL: { link: "14days-grand-tour.html", stars: 3, ok: [7, 8, 9], edge: [6], high: true }, // mid-Jun – end of Sep
  };
  const ORDER = ["NML", "IKC", "SKC", "TLH", "RGL"]; // same order as the homepage (DNL: coming soon, not open for registration)
  const EASY = ["IKC", "NML"];

  // ---------- Questions for each tour ----------
  // [question, short phrase used in the result]
  const QUESTIONS = {
    NML: [
      { must: true, en: ["Are you happy to live with a nomad family for 3 nights, in their yurt or wooden house in the mountains?", "living with a nomad family for 3 nights"], zh: ["你願意和遊牧家庭同住 3 晚，住在他們山上的氈房或木屋嗎？", "與遊牧家庭同住 3 晚"] },
      { must: true, en: ["Can you go 3 nights without a shower (you wash in a natural hot spring) and use a shared outdoor toilet?", "3 nights without a shower and a shared outdoor toilet"], zh: ["你可以接受 3 晚無法洗澡（在附近的天然溫泉梳洗），並使用共用的戶外廁所嗎？", "3 晚無法洗澡、共用戶外廁所"] },
      { must: true, en: ["Are you OK with no Wi-Fi and little or no phone signal for 3 days?", "3 days without Wi-Fi or signal"], zh: ["你可以接受 3 天沒有 Wi-Fi、幾乎沒有手機訊號嗎？", "3 天沒有網路與訊號"] },
      { must: true, en: ["Are you comfortable with flexible plans that follow the animals and the weather?", "flexible plans that follow the animals and the weather"], zh: ["你可以接受行程隨著牲畜與天氣彈性調整嗎？", "隨牲畜與天氣調整的彈性行程"] },
      { must: false, en: ["Are you happy to eat what the family eats: bread, dairy, meat, noodles and lots of tea?", "Eating the family's simple home food"], zh: ["你願意和家人吃一樣的食物：麵包、乳製品、肉、麵條和很多茶嗎？", "吃家庭的簡單家常菜"] },
      { must: false, en: ["Would you ride a horse for about half a day at a calm pace, plus an optional ride or hike in Karakol Gorge? (No experience needed.)", "Half a day on horseback"], zh: ["你願意以輕鬆的步調騎馬約半天，另外在卡拉科爾峽谷選擇騎馬或健行嗎？（不需要經驗）", "騎馬約半天"] },
      { must: false, en: ["Are you ready for cold mountain nights, even in summer?", "Cold mountain nights"], zh: ["你準備好面對山上寒冷的夜晚了嗎？即使在夏天也是。", "山上寒冷的夜晚"] },
    ],
    IKC: [
      { must: true, en: ["Do you enjoy a slow pace, with time to rest and enjoy nature, rather than a packed sightseeing schedule?", "a slow pace instead of packed sightseeing"], zh: ["你喜歡慢步調、有時間休息和享受大自然，而不是排滿景點的行程嗎？", "慢步調，而不是排滿景點"] },
      { must: true, en: ["Are you OK with a bumpy 4x4 (or old Soviet truck) ride of about 2 hours up to Altyn-Arashan, and a night in a yurt at about 2,500 m?", "the bumpy 4x4 ride and a yurt night at 2,500 m"], zh: ["你可以接受搭越野車（或蘇聯軍卡）顛簸約 2 小時上到 Altyn-Arashan，並在海拔約 2,500 公尺的氈房住一晚嗎？", "顛簸的越野車與 2,500 公尺的氈房夜"] },
      { must: false, en: ["Are you OK with a few driving days of 4–5 hours, with stops every 2–3 hours?", "Driving days of 4–5 hours"], zh: ["你可以接受幾天 4–5 小時的車程（每 2–3 小時停車休息）嗎？", "4–5 小時的車程"] },
      { must: false, en: ["Are you happy with comfortable local guesthouses and yurt stays, rather than luxury hotels?", "Local guesthouses instead of luxury hotels"], zh: ["你可以接受舒適的在地民宿與氈房，而不是豪華飯店嗎？", "在地民宿，而不是豪華飯店"] },
      { must: false, en: ["Can you walk 1–2 hours on easy trails (waterfall, forest, canyon)?", "Easy walks of 1–2 hours"], zh: ["你可以在輕鬆的步道（瀑布、森林、峽谷）走 1–2 小時嗎？", "1–2 小時的輕鬆步行"] },
      { must: false, en: ["Would you join a calm horse ride of about 2 hours on Day 1?", "The 2-hour horse ride"], zh: ["你願意在第 1 天參加約 2 小時的輕鬆騎馬嗎？", "約 2 小時的騎馬"] },
    ],
    SKC: [
      { must: true, en: ["Are you OK with 2 nights in a shared yurt at Song-Kul (about 3,000 m), with no shower on those nights?", "2 nights in a shared yurt at 3,000 m without a shower"], zh: ["你可以接受在頌湖（海拔約 3,000 公尺）住 2 晚共用氈房，而且這 2 晚無法洗澡嗎？", "3,000 公尺共用氈房 2 晚、無法洗澡"] },
      { must: true, en: ["Are you OK with simple, shared, often outdoor toilets in the mountains?", "simple shared outdoor toilets"], zh: ["你可以接受山上簡單、共用、常在戶外的廁所嗎？", "簡單的共用戶外廁所"] },
      { must: true, en: ["Can you handle three days of 6.5–7.5 hours of travel, including a rough mountain track in an old Soviet truck?", "three long travel days and a rough truck ride"], zh: ["你可以接受三天 6.5–7.5 小時的移動，包括搭蘇聯老卡車走顛簸山路嗎？", "三天長時間移動與顛簸卡車"] },
      { must: true, en: ["Can you hike 3–3.5 hours at a comfortable pace?", "hikes of 3–3.5 hours"], zh: ["你可以用舒服的步調健行 3–3.5 小時嗎？", "3–3.5 小時的健行"] },
      { must: false, en: ["Are you OK with no phone signal at Altyn-Arashan and Song-Kul (3 days)?", "Three days without signal"], zh: ["你可以接受在 Altyn-Arashan 和頌湖（共 3 天）沒有手機訊號嗎？", "3 天沒有訊號"] },
      { must: false, en: ["Would you ride a horse about 1.5 hours each way on Day 7? (A car option is available.)", "The horse ride on Day 7"], zh: ["你願意在第 7 天騎馬單程約 1.5 小時嗎？（也可以改搭車）", "第 7 天騎馬"] },
      { must: false, en: ["Are you OK if the guide changes plans because of mountain weather (rain, wind, even summer snow)?", "Plan changes because of the weather"], zh: ["你可以接受導遊因山上天氣（雨、風，甚至夏天下雪）調整行程嗎？", "因天氣調整行程"] },
    ],
    DNL: [
      { must: true, en: ["Are you comfortable going up to 5 days without a proper shower (washing with warm water the families prepare)?", "up to 5 days without a proper shower"], zh: ["你可以接受最多 5 天沒有正式淋浴（用家庭準備的溫水梳洗）嗎？", "最多 5 天沒有淋浴"] },
      { must: true, en: ["Are you comfortable using simple outdoor toilets, shared with the families?", "simple outdoor toilets shared with the families"], zh: ["你可以使用和家庭共用的簡單戶外廁所嗎？", "與家庭共用的戶外廁所"] },
      { must: true, en: ["Are you happy sleeping in yurts and a traditional mud-brick house, shared with your travel companions?", "shared yurts and a mud-brick house"], zh: ["你願意和旅伴一起睡在氈房和傳統土磚屋嗎？", "共用的氈房與土磚屋"] },
      { must: true, en: ["Can you ride a horse for 2–4 hours a day on 4 days, or are you ready to learn? (Good health needed.)", "riding 2–4 hours a day on 4 days"], zh: ["你可以在 4 天裡每天騎馬 2–4 小時，或願意學習嗎？（需要身體健康）", "4 天每天騎馬 2–4 小時"] },
      { must: true, en: ["Are you OK with no phone signal or internet for most of the trip?", "no signal or internet for most of the trip"], zh: ["你可以接受大部分行程沒有手機訊號和網路嗎？", "大部分行程沒有網路"] },
      { must: false, en: ["Would you like to help with real daily work, like milking and herding?", "Helping with daily work"], zh: ["你願意幫忙真實的日常工作，例如擠奶和放牧嗎？", "幫忙日常工作"] },
      { must: false, en: ["Are you comfortable around horses, cows and sheep, and with dust and mud?", "Animals, dust and mud"], zh: ["你可以自在地和馬、牛、羊相處，也不介意灰塵和泥巴嗎？", "動物、灰塵與泥巴"] },
    ],
    TLH: [
      { must: true, en: ["Can you ride about 4 hours a day on Days 2 and 3, plus about 4 hours round trip on Day 7? (No experience needed.)", "about 4 hours a day on horseback"], zh: ["你可以在第 2、3 天每天騎馬約 4 小時，第 7 天再往返騎約 4 小時嗎？（不需要經驗）", "每天騎馬約 4 小時"] },
      { must: true, en: ["Are you OK spending most of the trip at 2,500–3,500 m, crossing a 3,400 m pass, with very cold nights?", "high altitude (up to 3,500 m) and cold nights"], zh: ["你可以接受大部分時間在海拔 2,500–3,500 公尺、翻越 3,400 公尺山口，以及非常寒冷的夜晚嗎？", "高海拔（最高 3,500 公尺）與寒冷夜晚"] },
      { must: true, en: ["Can you go 2 days in a row without a shower, and 2 more nights with only a sauna, which may not always be available?", "days without a shower"], zh: ["你可以接受連續 2 天無法洗澡，另有 2 晚只有桑拿，而且視當地狀況有時可能無法使用嗎？", "幾天無法洗澡"] },
      { must: true, en: ["Are you OK with simple, shared, often outdoor toilets in the mountain camps?", "shared outdoor toilets in camps"], zh: ["你可以接受山區營地簡單、共用、常在戶外的廁所嗎？", "營地共用戶外廁所"] },
      { must: true, en: ["Can you send us your passport details in advance for the Kel-Suu border permit?", "sending passport details for the border permit"], zh: ["你可以事先提供護照資料，申請克蘇湖的邊境通行證嗎？", "提供護照資料申請邊境通行證"] },
      { must: false, en: ["Are you OK with some days of 4–5.5 hours of driving, partly on bumpy off-road tracks?", "Long off-road driving days"], zh: ["你可以接受幾天 4–5.5 小時的車程，部分是顛簸的越野路段嗎？", "長時間越野車程"] },
      { must: false, en: ["Are you OK with no Wi-Fi or signal on some days, and weak signal elsewhere?", "Days without Wi-Fi or signal"], zh: ["你可以接受有幾天沒有 Wi-Fi 或訊號，其他地方訊號也很弱嗎？", "幾天沒有網路與訊號"] },
    ],
    RGL: [
      { must: true, en: ["Are you happy moving on most days for two weeks, including four long drives (4–6.5 hours) and rough 4WD tracks?", "two weeks on the move with long 4WD drives"], zh: ["你可以接受兩週大多數日子都在移動，包括四天長車程（4–6.5 小時）與顛簸的越野路段嗎？", "兩週移動與長時間越野車程"] },
      { must: true, en: ["Are you OK with 2 nights at Song-Kul (3,016 m), high passes and cold nights?", "2 nights at 3,016 m and cold nights"], zh: ["你可以接受在頌湖（海拔 3,016 公尺）住 2 晚、翻越高山山口和寒冷的夜晚嗎？", "3,016 公尺住 2 晚與寒冷夜晚"] },
      { must: true, en: ["Are you OK with yurt camps and family homestays, with simple and often shared bathrooms?", "yurt camps with simple shared bathrooms"], zh: ["你可以接受氈房營地和家庭民宿，衛浴簡單且常常共用嗎？", "氈房營地與共用衛浴"] },
      { must: true, en: ["Are you OK with 2 nights in a simple wooden cottage in Kok-Kiya, with no shower (only a sauna, which may not always be available) and a shared outdoor toilet?", "2 nights in Kok-Kiya without a shower"], zh: ["你可以接受在 Kok-Kiya 住 2 晚簡易木屋，沒有淋浴（只有桑拿，視狀況有時可能無法使用），並使用共用戶外廁所嗎？", "Kok-Kiya 2 晚無法洗澡"] },
      { must: true, en: ["Can you send us your passport details in advance for the border permit (Kok-Kiya, Kel-Suu)?", "sending passport details for the border permit"], zh: ["你可以事先提供護照資料，申請邊境通行證（Kok-Kiya、克蘇湖）嗎？", "提供護照資料申請邊境通行證"] },
      { must: false, en: ["Can you hike 1.5–3 hours? (Horse riding is optional on most days.)", "Hikes of 1.5–3 hours"], zh: ["你可以健行 1.5–3 小時嗎？（大部分日子騎馬為選擇性）", "1.5–3 小時的健行"] },
      { must: false, en: ["Can you book a night flight home on Day 14 (or stay longer)?", "A night flight on Day 14"], zh: ["你可以在第 14 天預訂夜間航班回家（或多留幾天）嗎？", "第 14 天的夜間航班"] },
    ],
  };

  // ---------- Texts ----------
  const T = {
    en: {
      hero_badge: "Step 1 before registering",
      hero_title: "Is this tour right for you?",
      hero_lead: "A few honest questions about the real conditions of the trip. It takes about 2 minutes. If the tour fits you, you can register right away.",
      steps: ["Choose a tour", "This tour", "Your group", "Contact"],
      step_of: "Step {n} of {total}",
      next: "Next",
      back: "Back",
      submit: "See my result",
      sending: "Sending your answers…",
      required: "Please answer this question.",
      required_email: "Please enter a valid email address.",
      optional: "optional",
      yes: "Yes",
      unsure: "Not sure",
      no: "No",

      pick_title: "Which tour are you interested in?",
      pick_lead: "Each tour has its own questions, based on its real conditions.",
      tour_view: "See itinerary",
      intensity: "Intensity",
      season: "Season",
      tours: {
        NML: ["NML · 8 days of nomad life + slow days in Karakol", "Life with nomads in the mountains, and slow days and hikes in a Tien Shan town", "Mid-May – end of September"],
        IKC: ["IKC · 8 days · Issyk-Kul classic: slow travel in the valleys", "Slow days in the valleys and by the lake, easy mountain and lake trips, hiking. Comfortable stays.", "May – November"],
        SKC: ["SKC · 8 days · Song-Kul classic: the heart of nomad life", "Up to the 3,000 m grasslands, traditional yurt stays and real high-pasture herding", "Late May – mid-September"],
        TLH: ["TLH · 10 days · Three lakes: highland off-road horse adventure", "Mountain passes, changing weather and simple stays: a shared mountain adventure", "Mid-June – mid-September"],
        RGL: ["RGL · 14 days · The grand loop of Kyrgyzstan", "All of Kyrgyzstan's highlights and its most spectacular mountain scenery in one trip", "Mid-June – end of September"],
        DNL: ["Special tour · 9 days · Deep Nomad Life", "For return visitors: several days on horseback into the wild, in Bek's home mountains", "Mid-June – end of September"],
      },

      q_lead: "These questions come straight from this tour's conditions. Please answer honestly: there are no wrong answers, only the right trip for you.",
      q_must: "Important",

      group_title: "About your group",
      month_q: "When would you like to travel?",
      month_unsure: "Not sure yet",
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      size_q: "How many people are traveling?",
      who_q: "Who is in your group?",
      who: { adults: "Adults only", elders: "With older travelers (65+)", kids: "With children (under 12)" },
      health_q: "Does anyone have any of these? (tick all that apply)",
      health_hint: "Only used to check the trip is safe for you. Medical help is far away in the mountains.",
      health: {
        heart: "Heart disease or high blood pressure",
        lungs: "Asthma or other breathing problems",
        joints: "Knee, back or joint problems",
        ams: "Serious altitude sickness in the past",
        pregnant: "Pregnancy",
        none: "None of these",
      },

      contact_title: "Your contact details",
      contact_lead: "We'll send you the details and answer your questions.",
      name_q: "Name",
      email_q: "Email",
      phone_q: "Phone / WhatsApp / LINE",
      notes_q: "Anything else we should know?",

      res_fit: "Great match!",
      res_fit_text: "From your answers, <b>{tour}</b> looks like a good fit for you.",
      res_maybe: "A good match, with a few things to talk about",
      res_maybe_text: "<b>{tour}</b> can work for you. We'll go through these points together:",
      res_no: "This tour may not be the right fit",
      res_no_text: "Thank you for your honest answers. <b>{tour}</b> may not suit you because of:",
      res_notes: "Also to talk about:",
      res_suggest: "These trips may suit you better:",
      res_sent: "We've received your answers and will get back to you by email soon.",
      res_failed: "We couldn't send your answers. Please try again, or email us at <a href=\"mailto:bekruby.kg@gmail.com\">bekruby.kg@gmail.com</a>.",
      res_retry: "Try again",
      res_view: "See the itinerary",
      res_reg_title: "You can now register for this tour",
      res_reg_text: "You passed the check. Fill in our registration form, and we'll contact you to confirm the details.",
      res_reg_btn: "Register now",
      res_other: "Check another tour",

      r_no: "You answered \"no\" to {issue}.",
      r_unsure: "You're not sure about {issue}.",
      r_soft: "{issue}: we'll find a way that works for you.",
      r_season_out: "{month} is outside this tour's season.",
      r_season_edge: "{month} is at the edge of the season: colder weather, and some roads may still be closed.",
      r_health_high: "Heart, breathing, pregnancy or past altitude sickness: risky at the high altitude of this tour.",
      r_health_note: "Heart, breathing, pregnancy or past altitude sickness: we'll check the plan together for your safety.",
      r_joints_riding: "Knee, back or joint problems: hard with several long riding days.",
      r_joints: "Knee, back or joint problems: we'll adapt the walks and riding.",
      r_elders_no: "This tour is too demanding for older travelers.",
      r_kids_no: "This tour is too demanding for children.",
      r_elders: "With older travelers, we'll check altitude, driving times and stays.",
      r_kids: "With children, we'll check riding, altitude and driving times.",
    },

    zh: {
      hero_badge: "報名第一步",
      hero_title: "這趟行程適合你嗎？",
      hero_lead: "幾個關於行程真實狀況的問題，大約 2 分鐘。通過評估後，就可以直接報名。",
      steps: ["選擇行程", "行程問題", "你的團隊", "聯絡資料"],
      step_of: "第 {n} 步，共 {total} 步",
      next: "下一步",
      back: "上一步",
      submit: "查看結果",
      sending: "正在送出你的回答…",
      required: "請回答這一題。",
      required_email: "請填入正確的電子信箱。",
      optional: "選填",
      yes: "可以",
      unsure: "不確定",
      no: "不行",

      pick_title: "你對哪一趟行程有興趣？",
      pick_lead: "每趟行程都有自己的問題，根據它真實的狀況設計。",
      tour_view: "查看行程",
      intensity: "強度",
      season: "適合季節",
      tours: {
        NML: ["NML 8天 遊牧生活＋Karakol 定點慢遊", "山上和遊牧人生活，天山小鎮慢活健行", "5月中 - 9月底"],
        IKC: ["IKC 8天 Issyk-Kul 經典山谷慢旅行", "留在山谷與湖邊慢遊、舒服玩山玩水、健行。住宿相對舒適。", "5月 - 11月"],
        SKC: ["SKC 8天 Song-Kul 經典遊牧之心", "深入海拔 3000m 草原、住傳統 yurt 氈房、看見真實高山放牧", "5月底 - 9月中"],
        TLH: ["TLH 10天 三湖高山越野騎馬冒險", "翻越山口、天氣變化、住宿簡約，共患難高山冒險體驗。", "6月中 - 9月中"],
        RGL: ["RGL 14天 全境經典大環線", "一次收集吉爾吉斯精華景點與極致高山大美風光", "6月中 - 9月底"],
        DNL: ["Special Tour 二訪限定 / 私房路線（9天）", "適合去過吉爾吉斯，想探索更獨家、高階的行程。多日騎馬進入荒野。", "6月中 - 9月底"],
      },

      q_lead: "這些問題直接來自這趟行程的真實狀況。請誠實回答：沒有錯的答案，只有最適合你的行程。",
      q_must: "重要",

      group_title: "關於你的團隊",
      month_q: "你想什麼時候出發？",
      month_unsure: "還不確定",
      months: ["1 月", "2 月", "3 月", "4 月", "5 月", "6 月", "7 月", "8 月", "9 月", "10 月", "11 月", "12 月"],
      size_q: "同行人數",
      who_q: "團員組成",
      who: { adults: "全部是成人", elders: "有長輩（65 歲以上）", kids: "有小孩（12 歲以下）" },
      health_q: "是否有人有以下狀況？（可複選）",
      health_hint: "僅用於確認行程對你是否安全。山上離醫療資源很遠。",
      health: {
        heart: "心臟病或高血壓",
        lungs: "氣喘或其他呼吸道問題",
        joints: "膝蓋、背部或關節問題",
        ams: "曾有嚴重高山症",
        pregnant: "懷孕中",
        none: "以上皆無",
      },

      contact_title: "聯絡資料",
      contact_lead: "我們會寄給你詳細資訊，並回答你的問題。",
      name_q: "姓名",
      email_q: "電子郵件 Email",
      phone_q: "電話 / WhatsApp / LINE",
      notes_q: "還有什麼想讓我們知道的嗎？",

      res_fit: "非常適合！",
      res_fit_text: "根據你的回答，<b>{tour}</b> 很適合你。",
      res_maybe: "適合，但有幾點要一起討論",
      res_maybe_text: "<b>{tour}</b> 可以適合你，以下幾點我們會一起確認：",
      res_no: "這趟行程可能不太適合",
      res_no_text: "謝謝你誠實的回答。<b>{tour}</b> 可能不太適合你，因為：",
      res_notes: "另外要討論的：",
      res_suggest: "這些行程可能更適合你：",
      res_sent: "我們已收到你的回答，會盡快以 Email 回覆你。",
      res_failed: "你的回答沒有成功送出。請再試一次，或寄信到 <a href=\"mailto:bekruby.kg@gmail.com\">bekruby.kg@gmail.com</a>。",
      res_retry: "重新送出",
      res_view: "查看行程",
      res_reg_title: "恭喜通過評估，現在就可以報名！",
      res_reg_text: "請填寫報名表單，我們會再與你聯繫，確認所有細節。",
      res_reg_btn: "立即報名",
      res_other: "看看其他行程",

      r_no: "你對「{issue}」回答了「不行」。",
      r_unsure: "你對「{issue}」還不確定。",
      r_soft: "{issue}：我們會找到適合你的方式。",
      r_season_out: "{month}不在這趟行程的季節內。",
      r_season_edge: "{month}在季節邊緣：天氣較冷，部分山路可能尚未開放。",
      r_health_high: "心臟、呼吸、懷孕或高山症經歷：在這趟行程的高海拔地區風險較高。",
      r_health_note: "心臟、呼吸、懷孕或高山症經歷：我們會一起確認行程，確保安全。",
      r_joints_riding: "膝蓋、背部或關節問題：多天長時間騎馬負擔很大。",
      r_joints: "膝蓋、背部或關節問題：我們會調整步行與騎馬的安排。",
      r_elders_no: "這趟行程對長輩來說體力負擔太大。",
      r_kids_no: "這趟行程對小孩來說體力負擔太大。",
      r_elders: "有長輩同行，我們會一起確認海拔、車程與住宿。",
      r_kids: "有小孩同行，我們會一起確認騎馬、海拔與車程。",
    },
  };

  // ---------- State ----------
  const A = { tour: "", q: [], month: "", size: "", who: "", health: [], name: "", email: "", phone: "", notes: "" };
  const preset = (new URLSearchParams(location.search).get("tour") || "").toUpperCase();
  const fixedTour = ORDER.includes(preset) ? preset : "";
  if (fixedTour) A.tour = fixedTour;

  // Steps: 0 choose tour (skipped when the link names the tour), 1 tour questions, 2 group, 3 contact, 4 result
  let step = fixedTour ? 1 : 0;
  const RESULT = 4;
  let sendState = "idle";

  const card = document.getElementById("surveyCard");
  const bar = document.querySelector("#surveyProgress span");
  const stepLabel = document.getElementById("surveyStepLabel");

  function lang() {
    try {
      const saved = localStorage.getItem("siteLang");
      if (saved === "zh" || saved === "en") return saved;
    } catch (e) {}
    return document.documentElement.lang.startsWith("zh") ? "zh" : "en";
  }
  const t = () => T[lang()];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const fill = (s, v) => s.replace(/\{(\w+)\}/g, (_, k) => (v[k] ?? ""));
  const tourName = (code, l = lang()) => T[l].tours[code][0];
  const starIcons = (n) =>
    '<i class="fa-solid fa-star"></i>'.repeat(Math.floor(n)) +
    (n % 1 ? '<i class="fa-solid fa-star-half-stroke"></i>' : "") +
    '<i class="fa-regular fa-star"></i>'.repeat(5 - Math.ceil(n));
  // Intensity stars and season, the same as on the homepage cards
  function tourFacts(code) {
    const x = t();
    return `<span class="sv-facts">
      <span><b>${x.intensity}</b> <span class="sv-stars" aria-label="${TOURS[code].stars}/5">${starIcons(TOURS[code].stars)}</span></span>
      <span><i class="fa-regular fa-calendar"></i> <b>${x.season}</b> ${x.tours[code][2]}</span>
    </span>`;
  }

  // ---------- Building blocks ----------
  function field(id, label, input, hint = "", optional = false) {
    return `<div class="sv-field" id="f-${id}">
      ${label ? `<p class="sv-q">${label}${optional ? ` <small>(${t().optional})</small>` : ""}</p>` : ""}
      ${hint ? `<p class="sv-hint">${hint}</p>` : ""}
      ${input}
      <p class="sv-error" hidden>${t().required}</p>
    </div>`;
  }
  function choice(type, name, value, label, checked, extra = "") {
    return `<label class="sv-choice"><input type="${type}" name="${name}" value="${value}" ${checked ? "checked" : ""} ${extra}/><span>${label}</span></label>`;
  }
  function nav(label) {
    const canBack = step > (fixedTour ? 1 : 0);
    return `<div class="sv-nav">
      ${canBack ? `<button type="button" class="btn btn-outline" data-act="back"><i class="fa-solid fa-arrow-left"></i> ${t().back}</button>` : "<span></span>"}
      <button type="submit" class="btn btn-primary">${label} <i class="fa-solid fa-arrow-right"></i></button>
    </div>`;
  }

  // ---------- Steps ----------
  function stepPick() {
    const x = t();
    const opts = ORDER.map((c) => `<label class="sv-tour"><input type="radio" name="tour" value="${c}" ${A.tour === c ? "checked" : ""}/>
      <span class="sv-tour-body"><span class="sv-tour-name">${x.tours[c][0]}</span>${tourFacts(c)}<span class="sv-tour-note">${x.tours[c][1]}</span>
      <a class="sv-tour-link" href="${TOURS[c].link}" target="_blank" rel="noopener">${x.tour_view} <i class="fa-solid fa-arrow-up-right-from-square"></i></a></span></label>`).join("");
    return `<h2 class="sv-title">${x.pick_title}</h2><p class="sv-text">${x.pick_lead}</p>
      ${field("tour", "", `<div class="sv-tours">${opts}</div>`)}${nav(x.next)}`;
  }

  function stepQuestions() {
    const x = t(), l = lang();
    const qs = QUESTIONS[A.tour].map((q, i) => {
      const val = A.q[i] || "";
      const opts = ["yes", "unsure", "no"].map((v) => choice("radio", "q" + i, v, x[v], val === v)).join("");
      const tag = q.must ? ` <span class="sv-must">${x.q_must}</span>` : "";
      return field("q" + i, `<span class="sv-qnum">${i + 1}</span>${q[l][0]}${tag}`, `<div class="sv-choices sv-yesno">${opts}</div>`);
    }).join("");
    return `<h2 class="sv-title">${tourName(A.tour)}</h2>
      ${tourFacts(A.tour)}
      <p class="sv-kicker"><a href="${TOURS[A.tour].link}" target="_blank" rel="noopener">${x.tour_view} <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>
      <p class="sv-text">${x.q_lead}</p>${qs}${nav(x.next)}`;
  }

  function stepGroup() {
    const x = t();
    const months = `<option value="">—</option>` + x.months.map((m, i) => `<option value="${i + 1}" ${A.month == i + 1 ? "selected" : ""}>${m}</option>`).join("") +
      `<option value="unsure" ${A.month === "unsure" ? "selected" : ""}>${x.month_unsure}</option>`;
    return `<h2 class="sv-title">${x.group_title}</h2>
      ${field("month", x.month_q, `<select name="month">${months}</select>`)}
      ${field("size", x.size_q, `<input type="number" name="size" min="1" max="60" inputmode="numeric" value="${esc(A.size)}" class="sv-num" />`)}
      ${field("who", x.who_q, `<div class="sv-choices">${Object.entries(x.who).map(([k, v]) => choice("radio", "who", k, v, A.who === k)).join("")}</div>`)}
      ${field("health", x.health_q, `<div class="sv-choices">${Object.entries(x.health).map(([k, v]) => choice("checkbox", "health", k, v, A.health.includes(k), k === "none" ? 'data-only="1"' : "")).join("")}</div>`, x.health_hint)}
      ${nav(x.next)}`;
  }

  function stepContact() {
    const x = t();
    return `<h2 class="sv-title">${x.contact_title}</h2><p class="sv-text">${x.contact_lead}</p>
      ${field("name", x.name_q, `<input type="text" name="name" autocomplete="name" value="${esc(A.name)}" />`)}
      ${field("email", x.email_q, `<input type="email" name="email" autocomplete="email" value="${esc(A.email)}" />`)}
      ${field("phone", x.phone_q, `<input type="tel" name="phone" autocomplete="tel" value="${esc(A.phone)}" />`, "", true)}
      ${field("notes", x.notes_q, `<textarea name="notes" rows="3">${esc(A.notes)}</textarea>`, "", true)}
      ${nav(x.submit)}`;
  }

  // ---------- Fit check ----------
  function evaluate(l) {
    const x = T[l], tour = TOURS[A.tour];
    const no = [], notes = [];
    QUESTIONS[A.tour].forEach((q, i) => {
      const a = A.q[i], issue = q[l][1];
      if (a === "no") (q.must ? no : notes).push(fill(q.must ? x.r_no : x.r_soft, { issue }));
      if (a === "unsure" && q.must) notes.push(fill(x.r_unsure, { issue }));
    });
    const m = Number(A.month);
    if (m && tour.edge && tour.edge.includes(m)) notes.push(fill(x.r_season_edge, { month: x.months[m - 1] }));
    else if (m && !tour.ok.includes(m)) no.push(fill(x.r_season_out, { month: x.months[m - 1] }));
    const h = A.health;
    if (["heart", "lungs", "ams", "pregnant"].some((k) => h.includes(k))) (tour.high ? no : notes).push(tour.high ? x.r_health_high : x.r_health_note);
    if (h.includes("joints")) (tour.riding ? no : notes).push(tour.riding ? x.r_joints_riding : x.r_joints);
    if (A.who === "elders" && (tour.family || tour.high)) (tour.family ? no : notes).push(tour.family ? x.r_elders_no : x.r_elders);
    if (A.who === "kids" && (tour.family || tour.high)) (tour.family ? no : notes).push(tour.family ? x.r_kids_no : x.r_kids);
    const level = no.length ? "no" : notes.length ? "maybe" : "fit";
    const suggest = level === "no" ? EASY.filter((c) => c !== A.tour) : [];
    return { level, no, notes, suggest };
  }

  function stepResult() {
    const x = t(), r = evaluate(lang());
    const icon = { fit: "fa-circle-check", maybe: "fa-circle-exclamation", no: "fa-circle-xmark" }[r.level];
    const title = { fit: x.res_fit, maybe: x.res_maybe, no: x.res_no }[r.level];
    const text = { fit: x.res_fit_text, maybe: x.res_maybe_text, no: x.res_no_text }[r.level];
    const list = (items) => (items.length ? `<ul class="sv-reasons">${items.map((i) => `<li>${i}</li>`).join("")}</ul>` : "");
    const status =
      sendState === "sent" ? `<p class="sv-status ok"><i class="fa-solid fa-paper-plane"></i> ${x.res_sent}</p>`
      : sendState === "failed" ? `<p class="sv-status err">${x.res_failed}</p><button type="button" class="btn btn-outline" data-act="retry">${x.res_retry}</button>`
      : `<p class="sv-status">${x.sending}</p>`;
    return `<div class="sv-result sv-result-${r.level}">
        <i class="fa-solid ${icon} sv-result-icon"></i>
        <h2 class="sv-title">${title}</h2>
        <p class="sv-text">${fill(text, { tour: tourName(A.tour) })}</p>
        ${r.level === "no" ? list(r.no) : list(r.notes)}
        ${r.level === "no" && r.notes.length ? `<h3 class="sv-sub">${x.res_notes}</h3>${list(r.notes)}` : ""}
        ${r.suggest.length ? `<div class="sv-suggest"><h3>${x.res_suggest}</h3>${r.suggest.map((c) => `<a href="${TOURS[c].link}">${x.tours[c][0]} · ${x.tours[c][1]} <i class="fa-solid fa-arrow-right"></i></a>`).join("")}</div>` : ""}
      </div>
      ${r.level !== "no" ? `<div class="sv-register">
        <div><h3><i class="fa-solid fa-flag-checkered"></i> ${x.res_reg_title}</h3><p>${x.res_reg_text}</p></div>
        <a class="btn btn-primary sv-register-btn" href="${REGISTER_URL}" target="_blank" rel="noopener">${x.res_reg_btn} <i class="fa-solid fa-arrow-right"></i></a>
      </div>` : ""}
      ${status}
      <div class="sv-nav sv-nav-end">
        ${r.level !== "no" ? `<a class="btn btn-outline" href="${TOURS[A.tour].link}">${x.res_view}</a>` : ""}
        <a class="btn btn-outline" href="survey.html">${x.res_other}</a>
      </div>`;
  }

  const STEPS = [stepPick, stepQuestions, stepGroup, stepContact, stepResult];

  // ---------- Read & check ----------
  function read() {
    const fd = new FormData(card);
    if (card.querySelector('[name="tour"]')) {
      const tour = (fd.get("tour") || "").toString();
      if (tour !== A.tour) A.q = [];
      A.tour = tour;
    }
    if (card.querySelector('[name="q0"]')) A.q = QUESTIONS[A.tour].map((_, i) => (fd.get("q" + i) || "").toString());
    ["month", "size", "who", "name", "email", "phone", "notes"].forEach((k) => {
      if (card.querySelector(`[name="${k}"]`)) A[k] = (fd.get(k) || "").toString().trim();
    });
    if (card.querySelector('[name="health"]')) A.health = fd.getAll("health").map(String);
  }

  function validate() {
    const x = t();
    let need = [];
    if (step === 0) need = ["tour"];
    if (step === 1) need = QUESTIONS[A.tour].map((_, i) => "q" + i);
    if (step === 2) need = ["month", "size", "who", "health"];
    if (step === 3) need = ["name", "email"];
    let firstBad = null;
    need.forEach((k) => {
      const v = /^q\d+$/.test(k) ? A.q[Number(k.slice(1))] : A[k];
      let ok = Array.isArray(v) ? v.length > 0 : !!v;
      if (k === "size") ok = Number(v) >= 1;
      if (k === "email") ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || "");
      const box = document.getElementById("f-" + k);
      if (!box) return;
      const err = box.querySelector(".sv-error");
      err.textContent = k === "email" && v ? x.required_email : x.required;
      err.hidden = ok;
      box.classList.toggle("sv-invalid", !ok);
      if (!ok && !firstBad) firstBad = box;
    });
    if (firstBad) firstBad.scrollIntoView({ behavior: "smooth", block: "center" });
    return !firstBad;
  }

  // ---------- Email to us (in English and Chinese) ----------
  function emailBody() {
    const en = T.en, zh = T.zh, r = evaluate("en");
    const level = { fit: "FIT ✅", maybe: "FIT WITH NOTES ⚠️", no: "NOT A FIT ❌" }[r.level];
    const ans = { yes: "YES 可以", unsure: "NOT SURE 不確定", no: "NO 不行" };
    const reasons = r.no.concat(r.notes);
    const qa = QUESTIONS[A.tour].map((q, i) => `${i + 1}. ${ans[A.q[i]]}${q.must ? " (important)" : ""}\n   ${q.en[0]}\n   ${q.zh[0]}`).join("\n");
    return {
      "Result 結果": level + (reasons.length ? "\n- " + reasons.join("\n- ") : ""),
      "Tour 行程": `${tourName(A.tour, "en")} / ${tourName(A.tour, "zh")}`,
      "Answers 回答": "\n" + qa,
      "Month 月份": A.month === "unsure" ? "Not sure 還不確定" : en.months[Number(A.month) - 1],
      "People 人數": A.size,
      "Group 團員": `${en.who[A.who]} / ${zh.who[A.who]}`,
      "Health 健康": A.health.map((k) => `${en.health[k]} / ${zh.health[k]}`).join("; "),
      "Notes 備註": A.notes || "-",
      "Language 語言": lang() === "zh" ? "中文" : "English",
    };
  }

  async function send() {
    sendState = "sending";
    render();
    const body = Object.assign(
      {
        access_key: WEB3FORMS_KEY,
        subject: `Tour survey: ${A.name} – ${A.tour} (${evaluate("en").level})`,
        from_name: "Go2Mountains tour survey",
        name: A.name,
        email: A.email,
        phone: A.phone || "-",
      },
      emailBody()
    );
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));
      sendState = res.ok && data.success !== false ? "sent" : "failed";
    } catch (e) {
      sendState = "failed";
    }
    render();
  }

  // ---------- Render ----------
  function render() {
    const x = t();
    const first = fixedTour ? 1 : 0;
    const total = RESULT - first;
    bar.style.width = Math.round(((step - first) / total) * 100) + "%";
    stepLabel.textContent = step === RESULT ? "" : fill(x.step_of, { n: step - first + 1, total }) + " · " + x.steps[step];
    card.innerHTML = STEPS[step]();
    document.querySelectorAll("[data-s]").forEach((el) => {
      if (x[el.dataset.s]) el.textContent = x[el.dataset.s];
    });
    document.title = (lang() === "zh" ? "這趟行程適合你嗎？" : "Is This Tour Right for You?") + " | Go2Mountains";
  }

  function go(n) {
    step = n;
    render();
    document.querySelector(".survey-wrap").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  card.addEventListener("submit", (e) => {
    e.preventDefault();
    read();
    if (!validate()) return;
    if (step === 3) {
      go(RESULT);
      send();
      return;
    }
    go(step + 1);
  });

  card.addEventListener("click", (e) => {
    const act = e.target.closest("[data-act]")?.dataset.act;
    if (act === "back") { read(); go(step - 1); }
    if (act === "retry") send();
  });

  // "None of these" can't be combined with other answers; clear the error once answered
  card.addEventListener("change", (e) => {
    const el = e.target;
    if (el.type === "checkbox") {
      const group = card.querySelectorAll(`input[name="${el.name}"]`);
      if (el.checked && el.dataset.only) group.forEach((g) => { if (g !== el) g.checked = false; });
      else if (el.checked) group.forEach((g) => { if (g.dataset.only) g.checked = false; });
    }
    const box = el.closest(".sv-field");
    if (box) { box.classList.remove("sv-invalid"); box.querySelector(".sv-error").hidden = true; }
  });

  // Re-draw in the other language when the header button is pressed (site-chrome.js saves the choice)
  const langBtn = document.getElementById("langBtn");
  if (langBtn) langBtn.addEventListener("click", () => setTimeout(() => { read(); render(); }, 0));

  render();
})();
