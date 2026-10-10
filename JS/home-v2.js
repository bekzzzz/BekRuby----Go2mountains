// Homepage (index.html): language switch, hero slideshow, tours, seasons,
// reviews, rails and reveal animations.

// ---------- Translations ----------
// Copied from index.html; keys added for this layout are merged in below.
const translations = {
  en: {
    hero_slide1: "Where Tradition Still Lives",
    hero_slide2: "Nomadic Life",
    hero_slide3: "Epic landscape",
    hero_slide4: "Where Horses Roam Free",
    hero_slide5: "Life, Food, and Local Stories",
    nav_home: "Home",
    nav_tours: "Tours",
    nav_stories: "Stories",
    nav_youtube: "Youtube",
    nav_about: "About",
    nav_visa: "Visa",
    nav_lang_label: "EN / 中文",
    quick_title: "Discover the Heart of Kyrgyzstan",
    quick_body:
      "Kyrgyzstan is a land of breathtaking mountains, crystal-clear lakes, and timeless nomadic traditions. From high-altitude adventures to quiet moments in nature, this is a journey that stays with you long after you return home.",
    tours_title: "Kyrgyzstan 2027: which travel style is right for you?",
    tours_btn: "Special Tours",
    tours_subtitle:
      "Curated journeys across Kyrgyzstan — culture, mountains, and authentic local experiences.",
    tours_filter_all: "All",
    tours_filter_culture: "Culture",
    tours_filter_adventure: "Adventure",
    tours_filter_nature: "Nature",
    tours_filter_winter: "Winter",
    tours_load_more: "Load more",
    weather_kicker: "Seasons at a Glance",
    weather_title: "Kyrgyzstan Through the Year",
    weather_subtitle:
      "Pick a season to see what it feels like in the mountains, valleys, and lakes.",
    weather_spring_title: "Spring (March - May)",
    weather_spring_body:
      "The countryside comes alive with wildflowers, poppy fields, and fresh greenery, perfect for low-elevation hikes and enjoying nature's awakening.",
    weather_summer_title: "Summer (June - August)",
    weather_summer_body:
      "It's the perfect season for outdoor adventures: trek open mountain trails, visit sunlit alpine lakes like Issyk-Kul, and stay in yurt camps for a nomadic experience.",
    weather_autumn_title: "Autumn (September - November)",
    weather_autumn_body:
      "Golden and crimson landscapes, cooler weather, and stunning valleys make it ideal for exploring and photography.",
    weather_winter_title: "Winter (December - February)",
    weather_winter_body:
      "A snowy wonderland awaits with skiing, snowboarding, hot springs, and peaceful mountain serenity.",
    about_title: "Our Story",
    about_body:
      "A boy who left the mountains, a girl who roamed the world, and a land waiting to be seen. <br> Kyrgyzstan didn’t hand us answers, but it gave us a direction—to turn inward, toward the heart, toward what’s real.",
    about_read_more: "Read More",
    testimonials_title: "Guest Stories",
    testimonials_subtitle: "Client Feedback",
    google_title: "What travelers say",
    google_subtitle: "Based on real reviews from Google",
    blog_latest: "Latest articles",
    blog_playlist1_tag: "Travel Guides",
    blog_playlist1_title: "Travel Guides",
    blog_playlist1_desc:
      "Practical routes, seasonal tips, and budgets to help you plan Kyrgyzstan your way.",
    blog_playlist1_item1: "Issyk-Kul vs. Song-Kol: Where should you go?",
    blog_playlist1_item2:
      "Mongolian Altai vs. Kyrgyzstan: High grasslands compared",
    blog_playlist1_item3: "Kyrgyzstan: DIY or guided tour?",
    blog_playlist2_tag: "Travel Stories",
    blog_playlist2_title: "Travel Stories",
    blog_playlist2_desc:
      "People and places from the Tien Shan to the lakes—real slices of our daily life.",
    blog_playlist2_item1: "From office to Tien Shan: my journey to freedom",
    blog_playlist2_item2: "Five must-do experiences in Kyrgyzstan",
    blog_playlist2_item3: "Autumn horseback adventure in mountain forests",
    blog_playlist3_tag: "Guest Voices",
    blog_playlist3_title: "Guest Voices",
    blog_playlist3_desc:
      "Travelers, writers, and friends share their favorite moments and cultural insights.",
    blog_playlist3_item1: "Riding the 'Swiss Alps of Central Asia'",
    blog_playlist3_item2: "Do steppe nomads also live in yurts?",
    blog_playlist3_item3: "Exploring eagle hunter culture",
    why_kicker: "Why travel with us",
    why_title: "Curated, local-first journeys",
    why_lede:
      "Small groups, expert local guides, and experiences you won’t find on a generic itinerary.",
    why_item1_title: "Local insight",
    why_item1_body:
      "Born-and-raised guides who open doors to real Kyrgyz culture.",
    why_item2_title: "Guest care",
    why_item2_body:
      "From visas to dietary needs, we handle the details before you land.",
    why_item3_title: "Slow travel",
    why_item3_body:
      "Fewer stops, more time to breathe in mountains, lakes, and yurt life.",
    why_item4_title: "Safe & flexible",
    why_item4_body:
      "Well-vetted partners, modern vehicles, and backup plans for weather days.",
    gallery_title: "Moments from Kyrgyzstan",
    youtube_title: "More videos",
    youtube_subtitle:
      "Pick a video and jump to YouTube to dive deeper into our journeys.",
    youtube_card1_meta: "18:22",
    youtube_card1_title:
      "Taiwanese wife’s first Central Asian winter—three prep tips and wow moments",
    youtube_card2_meta: "09:58",
    youtube_card2_title:
      "From Taiwan to Kyrgyzstan to meet the in-laws: home tour + mom’s beef beshbarmak",
    youtube_card3_meta: "16:41",
    youtube_card3_title:
      "Real Central Asia life: Taiwanese wife and Kyrgyz mom hosting a 12-person group",
    insta_kicker: "Follow our journeys",
    insta_title: "Instagram Reels",
    insta_subtitle:
      "Watch our latest trip clips, behind-the-scenes, and daily life here.",
    insta_cta: "Visit Instagram",

    insta_card1_title: "What our guests say",

    insta_card2_title:
      "With the most authentic Kyrgyz culture, we warmly welcome every traveler who comes from afar.",

    insta_card3_title: "Have you heard of Kyrgyzstan 🇰🇬?",

    custom_kicker: "Custom trips",
    custom_title: "We’ll design your Kyrgyzstan tour for you",
    custom_desc:
      "Tell us your time, interests, and budget—we’ll tailor the route, stays, and local experiences.",
    custom_btn: "Start my trip plan",
    footer_about:
      "Kyrgyzstan journeys with real locals. Films, stories, and bespoke trips designed for curious travelers.",
    footer_nav_home: "Home",
    footer_nav_tours: "Tours",
    footer_nav_stories: "Stories",
    footer_nav_about: "About us",
    footer_nav_visa: "Visa",
    footer_nav_faq: "Q&A",
    footer_nav_contact: "Contact",
    footer_cta: "Send email",
    footer_legal:
      "Kyrgyz travel agency · Reg No. 11708197200956 · OKPO 34155903",
    footer_copy: "© Bek & Ruby 2023 — All Rights Reserved.",
  },
  zh: {
    hero_slide1: "傳統仍在此延續",
    hero_slide2: "遊牧生活",
    hero_slide3: "史詩般的山景",
    hero_slide4: "駿馬自在奔馳之地",
    hero_slide5: "生活、美食與在地故事",
    nav_home: "首頁",
    nav_tours: "行程",
    nav_stories: "故事",
    nav_youtube: "YouTube",
    nav_about: "關於我們",
    nav_visa: "簽證",
    nav_lang_label: "中文 / EN",
    quick_title: "探索吉爾吉斯的心臟地帶",
    quick_body:
      "吉爾吉斯擁有壯麗的群山、清澈的湖泊，以及延續至今的遊牧傳統。無論是高海拔冒險或靜謐的自然時光，這趟旅程都會在你心中留下長久的餘韻。",
    tours_title: "2027 吉爾吉斯旅行，您想選擇的「旅行風格」？",
    tours_btn: "精選行程",
    tours_subtitle: "精心策劃的吉爾吉斯旅程——文化、山脈與在地體驗。",
    tours_filter_all: "全部",
    tours_filter_culture: "文化",
    tours_filter_adventure: "冒險",
    tours_filter_nature: "自然",
    tours_filter_winter: "冬季",
    tours_load_more: "載入更多",
    weather_kicker: "四季概覽",
    weather_title: "一年四季的吉爾吉斯",
    weather_subtitle: "選一個季節，看看山谷、湖泊在不同時節的模樣。",
    weather_spring_title: "春季（3-5月）",
    weather_spring_body:
      "野花、罌粟田與新綠點亮山野，適合低海拔健行與享受自然甦醒。",
    weather_summer_title: "夏季（6-8月）",
    weather_summer_body: "山徑開放、陽光湖泊、毡房體驗，是戶外冒險的最佳季節。",
    weather_autumn_title: "秋季（9-11月）",
    weather_autumn_body: "金紅色的山谷與涼爽天氣，適合探索與拍攝絕美景色。",
    weather_winter_title: "冬季（12-2月）",
    weather_winter_body: "滑雪、溫泉與靜謐雪原，體驗銀白世界的寧靜。",
    about_title: "我們的故事",
    about_body:
      "一個離開大山的男孩，一個走遍世界的女孩，一片等待被看見的土地。 <br> 吉爾吉斯沒有給我們答案，但它給了我們方向——往內走、往心走、往更真實的地方走。",
    about_read_more: "閱讀更多",
    testimonials_title: "客人分享",
    testimonials_subtitle: "旅客回饋",
    google_title: "旅人怎麼說",
    google_subtitle: "來自 Google 的真實評價",
    blog_latest: "最新文章",
    blog_playlist1_tag: "行程攻略",
    blog_playlist1_title: " 品牌故事",
    blog_playlist1_desc:
      "實用路線、季節建議與預算提示，幫你決定怎麼玩吉爾吉斯。",
    blog_playlist1_item1: "伊塞克湖 vs. 頌湖：到底該去哪裡玩？",
    blog_playlist1_item2: "蒙古阿爾泰 vs. 吉爾吉斯：高山草原比較",
    blog_playlist1_item3: "來吉爾吉斯，自助還是跟團？",
    blog_playlist2_tag: "吉爾吉斯世界觀",
    blog_playlist2_title: " 吉爾吉斯世界觀 ",
    blog_playlist2_desc: "旅途中的人與景，帶你走進我們的真實日常。",
    blog_playlist2_item1: "從辦公室到天山：我的自由人生旅程",
    blog_playlist2_item2: "來吉爾吉斯一定要體驗的五件事",
    blog_playlist2_item3: "馬背上的秋色探險——高山森林騎行",
    blog_playlist3_tag: "客座分享",
    blog_playlist3_title: "旅遊指南",
    blog_playlist3_desc: "旅伴、作家與朋友的視角，記錄心動瞬間與文化觀察。",
    blog_playlist3_item1: "在「中亞瑞士」體驗人生最美好的騎行",
    blog_playlist3_item2: "草原遊牧民族也住「蒙古包」？",
    blog_playlist3_item3: "鷹獵人文化探索之旅",
    why_kicker: "為什麼跟我們旅行",
    why_title: "在地、精選的旅程",
    why_lede: "小團、在地專家、非一般行程的獨特體驗。",
    why_item1_title: "在地洞察",
    why_item1_body: "土生土長的嚮導，帶你走進真正的吉爾吉斯文化。",
    why_item2_title: "貼心服務",
    why_item2_body: "從簽證到飲食需求，在你抵達前就準備妥當。",
    why_item3_title: "慢旅行",
    why_item3_body: "少一點奔波，多一點山湖與毡房生活的體驗。",
    why_item4_title: "安全與彈性",
    why_item4_body: "可靠夥伴、現代車輛，並為天氣預備備案。",
    gallery_title: "吉爾吉斯的瞬間",
    youtube_title: "更多影片",
    youtube_subtitle:
      "挑一支你想看的影片，直接跳到 YouTube 深入了解我們的旅程。",
    youtube_card1_meta: "18:22",
    youtube_card1_title: "台灣媳婦第一次過中亞冬天，三樣準備就搞定，超震撼！",
    youtube_card2_meta: "09:58",
    youtube_card2_title:
      "台灣人飛到吉爾吉斯🇰🇬見未來公婆，開箱首都的家＋媽媽的牛肉五指麵",
    youtube_card3_meta: "16:41",
    youtube_card3_title:
      "中亞真實生活：台灣媳婦 × 吉爾吉斯婆婆接待12人團的瘋狂日常",
    insta_kicker: "追蹤我們的旅程",
    insta_title: "Instagram Reels",
    insta_subtitle: "看看我們最新的旅途短片、幕后花絮與在地生活記錄。",
    insta_cta: "前往 Instagram",

    insta_card1_title: "客人的真心話",

    insta_card2_title: "以最道地的吉爾吉斯文化，款待每一位遠道而來的旅人。",

    insta_card3_title: "你聽過吉爾吉斯🇰🇬這個國家嗎？不是馬爾濟斯🐶喔！",

    custom_kicker: "客製行程",
    custom_title: "為你設計專屬的吉爾吉斯旅行",
    custom_desc:
      "告訴我們你的時間、興趣與預算，我們量身打造路線，安排在地體驗、住宿與交通。",
    custom_btn: "開始規劃行程",
    footer_about:
      "與在地人一起走進吉爾吉斯。影片、故事與客製旅程，為好奇的旅人而生。",
    footer_nav_home: "首頁",
    footer_nav_tours: "行程",
    footer_nav_stories: "故事",
    footer_nav_about: "關於我們",
    footer_nav_visa: "簽證",
    footer_nav_faq: "常見問題",
    footer_nav_contact: "聯絡",
    footer_cta: "寄送 Email",
    footer_legal: "吉爾吉斯旅行社 · Reg No. 11708197200956 · OKPO 34155903",
    footer_copy: "© Bek & Ruby 2023 — 版權所有。",
  },
};

Object.assign(translations.en, {
  tours_filter_short: "7–8 days",
  tours_filter_long: "9+ days",
  tour_view: "View itinerary",
  tour_days: "{n} days",
  tour_intensity: "Intensity",
  tour_season: "Season",
  tour_highlight: "Highlights",
  review_read_more: "Read more",
  weather_spring_name: "Spring",
  weather_spring_months: "March – May",
  weather_summer_name: "Summer",
  weather_summer_months: "June – August",
  weather_autumn_name: "Autumn",
  weather_autumn_months: "September – November",
  weather_winter_name: "Winter",
  weather_winter_months: "December – February",
  insta_card4_title: "Lakeside camping · Morning sunrise",
  youtube_channel_text:
    "Besides our tours, we run our own YouTube channel, Bek & Ruby, where we film real life in Kyrgyzstan: our family, nomad traditions, food and the journeys we share with our guests.",
  youtube_cta: "Visit our channel",
});

Object.assign(translations.zh, {
  tours_filter_short: "7–8 天",
  tours_filter_long: "9 天以上",
  tour_view: "查看行程",
  tour_days: "{n} 天",
  tour_intensity: "強度",
  tour_season: "適合季節",
  tour_highlight: "亮點",
  review_read_more: "閱讀更多",
  weather_spring_name: "春季",
  weather_spring_months: "3 – 5 月",
  weather_summer_name: "夏季",
  weather_summer_months: "6 – 8 月",
  weather_autumn_name: "秋季",
  weather_autumn_months: "9 – 11 月",
  weather_winter_name: "冬季",
  weather_winter_months: "12 – 2 月",
  insta_card4_title: "湖畔露營 · 早晨日出",
  youtube_channel_text:
    "除了帶團旅行，我們也經營 YouTube 頻道「貝殼嚕比 Bek & Ruby」，記錄吉爾吉斯的真實生活：我們的家人、遊牧傳統、在地美食，以及和旅人們一起走過的旅程。",
  youtube_cta: "前往我們的頻道",
});

// ---------- Authentic journey section (9 days in Bek's home mountains) ----------
Object.assign(translations.en, {
  auth_badge: "Signature journey",
  auth_kicker: "Authentic journey · With Bek's family",
  auth_title: "Deep Nomad Life",
  auth_sub: "9 days in Bek's home mountains",
  auth_lead:
    "This isn't a sightseeing tour. You travel to the village near Toktogul where Bek grew up, live with his family and relatives, and ride with them into the mountains, all the way up to the nomads' summer camps.",
  auth_fact1: "9 days",
  auth_fact2: "4 days on horseback",
  auth_fact3: "Family homes & yurts",
  auth_cta: "Discover the journey",
  auth_img_main: "Herders riding up to the summer pastures",
});

Object.assign(translations.zh, {
  auth_badge: "招牌行程",
  auth_kicker: "道地之旅 · 與貝克的家人同行",
  auth_title: "Special Tour 二訪限定 / 私房路線",
  auth_sub: "適合：去過吉爾吉斯，想探索更獨家、高階的行程。",
  auth_lead:
    "這不是一趟觀光行程。你將前往貝克在托克托古爾附近長大的村莊，與他的家人和親戚同住，再和他們一起騎馬進山，一路走到遊牧民族的夏季營地。",
  auth_fact1: "9 天",
  auth_fact2: "騎馬 4 天",
  auth_fact3: "住家庭與氈房",
  auth_cta: "探索這趟旅程",
  auth_img_main: "牧民騎馬前往夏牧場",
});

// ---------- What's included (all tours) ----------
Object.assign(translations.en, {
  inc_kicker: "Price",
  inc_title: "What's included in our tours",
  inc_yes_title: "Included",
  inc_y1: "Accommodation and meals for the whole itinerary",
  inc_y2: "Accommodation on Day 0 and the last night",
  inc_y3: "Guide",
  inc_y4: "Private transport for the itinerary (incl. airport transfers)",
  inc_y5: "All entrance fees on the itinerary",
  inc_y6: "Every 8-day tour includes one 2–3 hour horse ride",
  inc_no_title: "Not included",
  inc_n1: "International flights",
  inc_n2: "Visa fees",
  inc_n3: "Personal travel insurance",
  inc_n4: "Tips",
  inc_n5: "Other personal expenses",
});

Object.assign(translations.zh, {
  inc_kicker: "費用說明",
  inc_title: "行程費用包含與不包含",
  inc_yes_title: "費用包含",
  inc_y1: "全行程的住宿與餐食",
  inc_y2: "Day 0 與最後一晚住宿",
  inc_y3: "導遊",
  inc_y4: "行程內專車交通（含機場接送）",
  inc_y5: "所有行程門票",
  inc_y6: "所有八天的行程皆包含 1 次 2–3 小時的騎馬體驗",
  inc_no_title: "費用不包含",
  inc_n1: "國際來回機票（可請台灣旅行社代訂）",
  inc_n2: "簽證費用",
  inc_n3: "個人旅遊保險",
  inc_n4: "小費",
  inc_n5: "其他個人開銷",
});

// ---------- Tours (same tours as check-small-tours.js) ----------
// type: "group" = group dates or private, "private" = private & custom-made only
// ---------- Tours (pages built in this redesign) ----------
const TOURS = [
  {
    days: 8,
    length: "short",
    style: "culture",
    title_en: "8 Days of Nomad Life | Three Nights With a Nomad Family",
    title_zh: "8天 遊牧生活＋Karakol 定點慢遊",
    img: "assets/image-itinerary/7d-milking-cow.jpg",
    link: "7days-nomad-life.html",
    label_en: "Nomad homestay",
    label_zh: "遊牧家庭寄宿",
    desc_en:
      "Milk the cows, make kaimak and boorsok, ride with the herders and soak in a natural hot spring, with an eagle hunter, Skazka Canyon and Karakol around it.",
    desc_zh: "",
    // Details from the registration form (shown only in this language)
    info_zh: {
      code: "NML",
      intensity: 2,
      season: "5月中-9月底",
      highlight: "山上和遊牧人生活，天山小鎮慢活健行",
    },
  },
  {
    days: 8,
    length: "short",
    style: "slow",
    title_en: "Slow Travel at the Foot of the Tien Shan | Around Issyk-Kul",
    title_zh: "8天 Issyk-Kul 經典山谷慢旅行",
    img: "assets/image-itinerary/8d-issyk-kul-boat.jpg",
    link: "8days-Issyk-kul.html",
    label_en: "Slow travel · Families",
    label_zh: "慢旅行・親子長輩",
    desc_en:
      "A relaxed loop of Issyk-Kul with Chon Kemin valley, Altyn-Arashan hot springs and eagle hunting culture: ideal for families and senior travellers.",
    desc_zh:
      "伊塞克湖環湖、Chon Kemin 秋日山谷、Altyn-Arashan 高山溫泉與獵鷹文化。精緻小團，親子與長輩首選。",
    // Details from the registration form (shown only in this language)
    info_zh: {
      code: "IKC",
      intensity: 2,
      season: "5月 - 11月",
      highlight: "留在山谷與湖邊慢遊、舒服玩山玩水、健行。住宿相對舒適。",
    },
  },
  {
    days: 8,
    length: "short",
    style: "classic",
    title_en: "Classic Kyrgyzstan | Lakes, Mountains & Nomad Encounters",
    title_zh: "8天 Song-Kul 經典遊牧之心",
    img: "assets/images-7-day-tour-section/son-kol.jpg",
    link: "8days-classic.html",
    label_en: "Classic loop",
    label_zh: "經典環線",
    desc_en:
      "Burana Tower, Karakol Gorge, Altyn-Arashan hot springs, Skazka Canyon, an eagle hunter and two nights at Song-Kul with nomad families.",
    desc_zh:
      "布拉納塔、卡拉科爾峽谷、阿爾金阿拉善溫泉、童話峽谷、獵鷹人，以及在頌湖與遊牧家庭度過兩晚。",
    // Details from the registration form (shown only in this language)
    info_zh: {
      code: "SKC",
      intensity: 3,
      season: "5月底 - 9月中",
      highlight: "深入海拔 3000m 草原、住傳統 yurt 氈房、看見真實高山放牧",
    },
  },
  {
    days: 10,
    length: "long",
    style: "adventure",
    title_en: "Son-Kol, Kel-Suu & Issyk-Kul | Highland Horse Trek",
    title_zh: "10天 三湖高山越野騎馬冒險",
    img: "assets/image-itinerary/10d-kel-suu-lake.jpg",
    link: "10days-off-road-v2.html",
    label_en: "Horse trek · Off-road",
    label_zh: "騎馬・越野",
    desc_en:
      "Ride over a 3,400 m pass to Son-Kol, travel deep into the border highlands to hidden Kel-Suu Lake, and finish with nomad culture on Issyk-Kul.",
    desc_zh:
      "騎馬翻越 3,400 公尺山口前往頌湖，深入邊境高原探訪秘境克蘇湖，最後在伊塞克湖體驗遊牧文化。",
    // Details from the registration form (shown only in this language)
    info_zh: {
      code: "TLH",
      intensity: 4,
      season: "6月中 - 9月中",
      highlight: "翻越山口、天氣變化、住宿簡約，共患難高山冒險體驗。",
    },
  },
  {
    days: 14,
    length: "long",
    style: "adventure",
    title_en: "The Grand Kyrgyzstan Journey | Two Weeks Around the Tien Shan",
    title_zh: "14天 全境經典大環線",
    img: "assets/image-itinerary/14d-song-kul-4wd.jpg",
    link: "14days-grand-tour.html",
    label_en: "Grand tour",
    label_zh: "深度大環線",
    desc_en:
      "Song-Kul, hidden Kel-Suu, the canyons and shores of Issyk-Kul, Altyn-Arashan hot springs and Chon-Kemin, with nomad families along the way.",
    desc_zh:
      "頌湖、秘境克蘇湖、伊塞克湖的峽谷與湖岸、阿爾金阿拉善溫泉與 Chon-Kemin，一路與遊牧家庭相遇。",
    // Details from the registration form (shown only in this language)
    info_zh: {
      code: "RGL",
      intensity: 3,
      season: "6月中 - 9月底",
      highlight: "一次收集吉爾吉斯精華景點與極致高山大美風光",
    },
  },
];

// ---------- Google reviews (copied from index.html) ----------
const REVIEWS = [
  {
    name: "龔小鈞",
    country: "Taiwan",
    en: "Before this trip, I honestly knew almost nothing about Kyrgyzstan (basically did no research at all).\nI joined mainly because of a simple thought: “If I don’t go with my friends this time, I’ll probably never come to this place in my lifetime.”\nBefore departure, I kept imagining I was heading to a very underdeveloped and even scary country. I worried about altitude sickness, getting sick, and all kinds of unknowns. I joined the trip completely out of courage, pushing myself forward despite the fear.\nAfter arriving, there were indeed many unexpected situations — a teammate’s suitcase was damaged by the airline, there was no hot water for showers, and some of us even got gastroenteritis.\nBut the breathtaking natural scenery of Kyrgyzstan, the kindness and warmth of the local people, and the chance to witness a country in the middle of its development were all incredibly fascinating. These experiences completely broke my stereotypes and made me fall in love with this country.\nA huge thank you to Ruby for her thoughtful planning, to Xiao Wu for his passionate and attentive service, to our driver for his professional skills, and to Bek’s mom for the generous and delicious home-cooked dinner.\nI truly hope we will meet again on this beautiful land. 💛",
    zh: "其實出發之前我完全不了解吉爾吉斯這個國家（俗稱沒有做功課），只是衝著一種「不跟朋友一起去的話，一輩子我都不會去這地方」的想法，出發之前一直覺得會到一個很落後很可怕的地方，擔心高山症擔心生病，完全是硬著頭皮參加這次旅行。\n抵達之後雖然也是發生很多意外（團員的行李箱被航空公司摔壞、洗澡沒熱水、腸胃炎），但吉爾吉斯大自然美麗的風光、當地人民的友善熱情以及見證一個國家發展中的歷程，種種都非常有趣，打破我原本的刻板印象，讓我愛上這個國家！\n非常謝謝Ruby用心的安排，小五熱忱的服務，司機大哥專業的技術，貝殼媽媽家豐盛美味的晚餐，希望還有機會在這片土地上相見\n❤️",
  },
  {
    name: "Klay",
    country: "Taiwan",
    en: "Thank you to BekRuby for arranging such a wonderful journey, and special thanks to our hardworking driver and guide for taking such great care of every member of the group.We are truly grateful for the people we met and the experiences we had along the way. Thank you, Kyrgyzstan, for giving us such beautiful memories. If I have the chance, I would love to visit this amazing country again—and share it properly with friends back in Taiwan. 🇰🇬",
    zh: "謝謝BekRuby安排這麼棒的旅程，還有謝謝辛苦的司機以及導遊，都很照顧我們每個團員。旅途中遇見的人事物，感謝吉爾吉斯帶給我們最美好的回憶，有機會我還會想再拜訪這美麗的國家！並且好好的介紹給台灣朋友🇰🇬",
  },
  {
    name: "David Chi",
    country: "Taiwan",
    en: "The first thing that left the deepest impression on me was how incredibly skilled the horses are at climbing mountains. Then there were the landscapes—endless deep blue skies paired with mountain ranges and golden-brown fields, truly breathtaking.At Song-Kol, I felt the profound silence of the open wilderness. At the 32 Parrots Bend, I witnessed a scene that felt straight out of a movie. The Kyrgyz bread was also unforgettable.Staying at a Japanese-style guesthouse, I experienced a comfortable and fascinating blend of different cultures. And of course, every meal and every cup of tea was wonderful.I’m truly grateful for such thoughtful planning and a beautifully designed itinerary. 🙏",
    zh: "第一個最難忘的是這邊的馬太會爬山了，再來是風景，永遠的湛藍搭配上群山和黃土色的田，真的很漂亮。在頌湖感受到荒原寂靜的感受，在32鸚鵡彎看到了電影般的場景；吉爾吉斯包也令人難忘。也在日式民宿看到了不同文化融合的感覺和舒適。當然每餐的食物和茶真的都很棒，很感謝有這樣的規劃和行程～！",
  },
  {
    name: "Li",
    country: "Taiwan",
    en: "Kyrgyzstan is truly beautiful, with breathtaking and awe-inspiring landscapes. Throughout the journey, we experienced a wide variety of natural terrains and witnessed traditional skills passed down through generations—it was absolutely unforgettable. This trip has become one of the most special memories of my life.With the help of BekRuby Travel in planning everything, we were able to overcome challenges such as transportation, route planning, and language barriers with ease. As a result, the entire journey was smooth, enriching, and truly enjoyable.",
    zh: "吉爾吉斯真的很美，景色壯觀震撼！旅途中見證了吉爾吉斯的多種自然地形風貌、代代相傳的傳統技藝⋯ 實在令人難忘，這趟旅程是一生中很特別回憶之一。透過貝殼嚕比旅行社協助安排，幫我們直接克服了交通、行程路線、語言翻譯等等難題，使旅途一路順利進行且充實愉快！",
  },
  {
    name: "林宥萱",
    country: "Taiwan",
    en: "I loved Central Asia’s “Little Switzerland,” the Japanese-style wooden houses, and the food (probably my ten-year quota of cilantro and sweet green peppers 😄).\nI loved the eagle show, horseback riding, staying in a Kyrgyz yurt, Son-Kul, and boating on Issyk-Kul — honestly, too many favorites to count.\n\nBek’s mom’s dinner was absolutely my favorite. I especially loved connecting with local people and experiencing this kind of cultural exchange. ❤️",
    zh: "中亞小瑞士喜歡，日本人的木屋喜歡，食物也喜歡（這大概是我10年分的香菜和甜椒青椒）。\n老鷹表演喜歡，騎馬喜歡，住吉爾吉斯包喜歡，頌湖喜歡，伊賽克湖遊湖喜歡……太多了～\nBek媽媽的晚宴超級超級超級喜歡（最喜歡跟當地人交流，也很喜歡這樣的表演和文化交流），手比愛心～",
  },
  {
    name: "吳蕙如",
    country: "Taiwan",
    en: "The horseback riding and staying in a Kyrgyz yurt were truly unforgettable. The scenery changed constantly within just two hours, making it a very rich experience. There were also many places without internet — which was surprisingly satisfying 🤭",
    zh: "騎馬與吉爾吉斯包的體驗令人永生難忘，兩小時內的景致就有不同的變化，是個很豐富的體驗。另沒有網路的地方很多，也令人滿意🤭",
  },
  {
    name: "Carina",
    country: "Taiwan",
    en: "Ever since I saw a photographer share videos of Kyrgyzstan on Instagram, this country has held a special place in my heart. After visiting in person, I realized that it’s not only beautiful, but the people are also incredibly friendly and warm. Being here, I felt a deep sense of happiness.",
    zh: "自從在IG上看到一位攝影師分享的吉爾吉斯影片，這個國家在我心裡就有著特別的印象，實際走訪當地，這裡不只風景美麗，人也很友善熱情，在這裡感受到滿滿的幸福感",
  },
  {
    name: "LI PEI LIN",
    country: "Taiwan",
    en: "It was a very special trip — the scenery in Kyrgyzstan is truly beautiful.",
    zh: "很特別的一趟旅遊，吉爾吉斯景色真的很美",
  },
];

// ---------- Helpers ----------
let lang = "en";
const t = (key) => translations[lang][key] ?? translations.en[key] ?? "";
const escapeHTML = (s) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );

document.addEventListener("DOMContentLoaded", () => {
  // ---------- Floating contact button (site header: JS/site-chrome.js) ----------
  const floating = document.getElementById("floatingContact");
  const hero = document.querySelector(".hero");

  function onScroll() {
    floating.classList.toggle("show", window.scrollY > hero.offsetHeight * 0.8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- Hero slideshow ----------
  const slides = [...document.querySelectorAll(".hero-slide")];
  const heroTitle = document.getElementById("heroTitle");
  const titleKeys = [
    ...document.querySelectorAll("#heroTitles [data-i18n]"),
  ].map((el) => el.dataset.i18n);
  const dotsBox = document.getElementById("heroDots");
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  let current = 0;
  let timer = null;

  dotsBox.innerHTML = slides
    .map(
      (_, i) =>
        `<button type="button" role="tab" aria-label="Slide ${i + 1}"></button>`,
    )
    .join("");
  const dots = [...dotsBox.children];

  function showSlide(i) {
    current = (i + slides.length) % slides.length;
    slides.forEach((s, n) => s.classList.toggle("active", n === current));
    dots.forEach((d, n) => {
      d.classList.toggle("active", n === current);
      d.setAttribute("aria-selected", n === current);
    });
    heroTitle.innerHTML = `<span>${escapeHTML(t(titleKeys[current]))}</span>`;
  }

  function startTimer() {
    clearInterval(timer);
    if (reduceMotion) {
      dotsBox.classList.add("paused");
      return;
    }
    timer = setInterval(() => showSlide(current + 1), 6000);
  }

  dots.forEach((dot, i) =>
    dot.addEventListener("click", () => {
      showSlide(i);
      startTimer();
    }),
  );

  // ---------- Tours ----------
  const toursGrid = document.getElementById("toursGrid");
  const filterBtns = [...document.querySelectorAll("#tourFilters .filter")];
  let activeFilter = "all";

  // Stars out of 5, half stars allowed (e.g. 2.5)
  function starIcons(n) {
    const full = Math.floor(n);
    const half = n - full >= 0.5 ? 1 : 0;
    return (
      '<i class="fa-solid fa-star"></i>'.repeat(full) +
      '<i class="fa-solid fa-star-half-stroke"></i>'.repeat(half) +
      '<i class="fa-regular fa-star"></i>'.repeat(5 - full - half)
    );
  }

  // Intensity, season and highlights for tours that have info_<lang>
  function tourInfo(info) {
    const stars = info.intensity
      ? `<p class="tour-intensity"><span>${t("tour_intensity")}</span><b aria-label="${info.intensity}/5">${starIcons(info.intensity)}</b></p>`
      : "";
    return `${stars}
      <ul class="tour-info">
        ${info.season ? `<li><i class="fa-regular fa-calendar"></i><span><b>${t("tour_season")}：</b>${escapeHTML(info.season)}</span></li>` : ""}
        ${info.highlight ? `<li><i class="fa-solid fa-mountain-sun"></i><span><b>${t("tour_highlight")}：</b>${escapeHTML(info.highlight)}</span></li>` : ""}
      </ul>`;
  }

  function renderTours() {
    const list = TOURS.filter(
      (tour) => activeFilter === "all" || tour.length === activeFilter,
    );
    toursGrid.innerHTML = list
      .map((tour) => {
        const title = tour[`title_${lang}`] || tour.title_en;
        const info = tour[`info_${lang}`];
        const isExternal = tour.link.startsWith("http");
        return `
        <article class="tour-card">
          <div class="tour-media">
            <img loading="lazy" src="${tour.img}" alt="${escapeHTML(title)}" />
            <span class="tour-days"><i class="fa-regular fa-clock"></i>${t("tour_days").replace("{n}", tour.days)}</span>
          </div>
          <div class="tour-body">
            <div class="tour-tags">
              ${info && info.code ? `<span class="tour-code">${escapeHTML(info.code)}</span>` : ""}
              <span class="tour-label ${tour.style}">${escapeHTML(tour[`label_${lang}`] || tour.label_en)}</span>
            </div>
            <h3>${escapeHTML(title)}</h3>
            ${info ? tourInfo(info) : `<p>${escapeHTML(tour[`desc_${lang}`] || tour.desc_en)}</p>`}
            <a class="btn btn-primary" href="${tour.link}"${isExternal ? ' target="_blank" rel="noopener"' : ""}>
              ${t("tour_view")} <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </article>`;
      })
      .join("");
  }

  filterBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.toggle("active", b === btn));
      activeFilter = btn.dataset.filter;
      renderTours();
    }),
  );

  // ---------- Seasons ----------
  const seasonTabs = [...document.querySelectorAll(".season-tab")];
  function selectSeason(tab, focus) {
    seasonTabs.forEach((tb) => {
      const on = tb === tab;
      tb.setAttribute("aria-selected", on);
      tb.tabIndex = on ? 0 : -1;
      document.getElementById(tb.getAttribute("aria-controls")).hidden = !on;
    });
    if (focus) tab.focus();
  }
  seasonTabs.forEach((tab, i) => {
    tab.addEventListener("click", () => selectSeason(tab));
    tab.addEventListener("keydown", (e) => {
      const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      if (step) {
        e.preventDefault();
        selectSeason(
          seasonTabs[(i + step + seasonTabs.length) % seasonTabs.length],
          true,
        );
      }
    });
  });

  // ---------- Reviews ----------
  const reviewsRail = document.getElementById("reviewsRail");
  const dialog = document.getElementById("reviewDialog");
  const dialogText = document.getElementById("reviewDialogText");
  const dialogAuthor = document.getElementById("reviewDialogAuthor");

  function renderReviews() {
    reviewsRail.innerHTML = REVIEWS.map((r, i) => {
      const full = r[lang] || r.en;
      const short = full.length > 150 ? full.slice(0, 150).trim() + "…" : full;
      const more =
        full.length > 150
          ? `<button class="review-more" type="button" data-review="${i}">${t("review_read_more")}</button>`
          : "";
      return `
        <article class="review-card">
          <div class="review-top">
            <span class="review-avatar">${escapeHTML([...r.name][0])}</span>
            <span class="review-stars" aria-label="5 stars">★★★★★</span>
          </div>
          <p class="review-text">${escapeHTML(short)}</p>
          <div class="review-foot">
            <div class="review-author">${escapeHTML(r.name)}<small>${escapeHTML(r.country)} · Google</small></div>
            ${more}
          </div>
        </article>`;
    }).join("");
  }

  reviewsRail.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-review]");
    if (!btn) return;
    const r = REVIEWS[Number(btn.dataset.review)];
    dialogText.textContent = r[lang] || r.en;
    dialogAuthor.textContent = `${r.name} · ${r.country}`;
    dialog.showModal();
  });
  document
    .getElementById("reviewClose")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close(); // click on the backdrop
  });

  // ---------- Horizontal rails (reviews, gallery) ----------
  document.querySelectorAll("[data-rail]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const rail = document.getElementById(btn.dataset.rail);
      const item = rail.firstElementChild;
      const gap = parseFloat(getComputedStyle(rail).columnGap) || 20;
      rail.scrollBy({
        left: Number(btn.dataset.dir) * ((item?.clientWidth || 300) + gap),
        behavior: "smooth",
      });
    }),
  );

  // ---------- Language ----------
  function setLanguage(next) {
    lang = next === "zh" ? "zh" : "en";
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    document.title =
      lang === "zh"
        ? "Go2Mountains — 吉爾吉斯深度旅遊體驗"
        : "Go2Mountains — Authentic Kyrgyzstan Tours & Experiences";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = t(el.dataset.i18n);
      if (!value) return;
      if (value.includes("<")) el.innerHTML = value;
      else el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const value = t(el.dataset.i18nAlt);
      if (value) el.alt = value;
    });
    try {
      localStorage.setItem("siteLang", lang);
    } catch (e) {
      /* storage blocked: language still switches for this visit */
    }
    showSlide(current);
    renderTours();
    renderReviews();
  }

  document
    .getElementById("langBtn")
    .addEventListener("click", () => setLanguage(lang === "zh" ? "en" : "zh"));

  // Same rule as the current homepage: saved choice, otherwise the browser language
  let saved = null;
  try {
    saved = localStorage.getItem("siteLang");
  } catch (e) {}
  setLanguage(
    saved ||
      ((navigator.language || "en").toLowerCase().startsWith("zh")
        ? "zh"
        : "en"),
  );
  startTimer();

  // ---------- Reveal on scroll ----------
  const revealEls = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 },
  );
  revealEls.forEach((el) => io.observe(el));
});
