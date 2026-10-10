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
    google_subtitle: "Real words from our guests, from the feedback form they fill in after the trip",
    reviews_eyebrow: "Guest feedback",
    review_source: "Our guest",
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
    gallery_title: "Moments from all our journeys",
    gallery_eyebrow: "Guest gallery",
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
    footer_legal: "Go2Mountains LLC (ОсОО «Гоу ту Маунтинс») · Reg. No. 332596-3302-ООО · OKPO 35166636 · INN 01108202610020",
    footer_address: "Issyk-Kul Region, Kyrgyz Republic",
    footer_copy: "© 2023–2026 Bek & Ruby — All Rights Reserved.",
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
    google_subtitle: "旅客在行程結束後填寫回饋問卷，直接寫給我們的真實心得",
    reviews_eyebrow: "旅客回饋",
    review_source: "我們的旅客",
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
    gallery_title: "每一趟旅程的瞬間",
    gallery_eyebrow: "旅人相簿",
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
    footer_legal: "Go2Mountains 有限責任公司（ОсОО «Гоу ту Маунтинс»）· 登記號 332596-3302-ООО · OKPO 35166636 · 稅號 INN 01108202610020",
    footer_address: "吉爾吉斯共和國 伊塞克湖州",
    footer_copy: "© 2023–2026 Bek & Ruby — 版權所有。",
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
  auth_badge: "Coming soon",
  auth_kicker: "Authentic journey · With Bek's family",
  auth_title: "Deep Nomad Life",
  auth_sub: "9 days in Bek's home mountains",
  auth_lead:
    "This isn't a sightseeing tour. You travel to the village near Toktogul where Bek grew up, live with his family and relatives, and ride with them into the mountains, all the way up to the nomads' summer camps.",
  auth_fact1: "9 days",
  auth_fact2: "4 days on horseback",
  auth_fact3: "Family homes & yurts",
  auth_cta: "Coming soon",
  auth_img_main: "Herders riding up to the summer pastures",
});

Object.assign(translations.zh, {
  auth_badge: "即將推出",
  auth_kicker: "道地之旅 · 與貝殼的家人同行",
  auth_title: "Special Tour 二訪限定 / 私房路線",
  auth_sub: "適合：去過吉爾吉斯，想探索更獨家、高階的行程。",
  auth_lead:
    "這不是一趟觀光行程。你將前往貝殼在托克托古爾附近長大的村莊，與他的家人和親戚同住，再和他們一起騎馬進山，一路走到遊牧民族的夏季營地。",
  auth_fact1: "9 天",
  auth_fact2: "騎馬 4 天",
  auth_fact3: "住家庭與氈房",
  auth_cta: "即將推出",
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

// ---------- How to choose: private vs. group, Chinese vs. English guide ----------
Object.assign(translations.en, {
  ch_kicker: "How to choose",
  ch_title: "Private tour or group tour?",
  ch_for: "Who it's for",
  ch_priv_title: "Private tour",
  ch_priv_sub: "From 6 people you have your own group, at your own pace",
  ch_priv_1: "You already have 6 or more friends or family coming",
  ch_priv_2: "Family trips with grandparents or children: we can adjust the itinerary to your needs",
  ch_priv_3: "Travelers with special wishes for stays or plans, or who value privacy",
  ch_group_title: "Group tour",
  ch_group_sub: "Better value, and new travel friends from around the world",
  ch_group_1: "1–2 travelers, or a group of friends smaller than 6",
  ch_group_2: "You want a friendlier budget and the best value",
  ch_group_size: "Departs with 10 people, max 12: a small group, never crowded",
  ch_guide_title: "Chinese or English guide?",
  ch_zh_title: "Chinese-speaking guide",
  ch_zh_text: "No language gap: you'll understand every story about Central Asian history and culture. Best for families travelling with grandparents or children.",
  ch_en_title: "English-speaking guide",
  ch_en_text: "A professional, international guide. Great if you're comfortable in English, enjoy meeting travelers from around the world and want to go deeper.",
});

Object.assign(translations.zh, {
  ch_kicker: "怎麼選？",
  ch_title: "私人團 vs. 拼團，我該怎麼選？",
  ch_for: "適合誰",
  ch_priv_title: "私人團",
  ch_priv_sub: "6 人即可獨立成團，享受專屬私密節奏",
  ch_priv_1: "已揪好 6 人以上親朋好友",
  ch_priv_2: "家族旅遊（有長輩、兒童同行，行程可依需求彈性調整）",
  ch_priv_3: "對住宿、行程有特殊需求或重視隱私的旅人",
  ch_group_title: "拼團",
  ch_group_sub: "經濟實惠，結交世界旅伴",
  ch_group_1: "1~2 人出發、好朋友人數不足 6 人",
  ch_group_2: "希望預算更親民、性價比最高",
  ch_group_size: "成團人數：滿 10 人開團，上限 12 人，小團精緻不擁擠",
  ch_guide_title: "中文導遊 vs. 英文導遊怎麼選？",
  ch_zh_title: "中文導遊",
  ch_zh_text: "溝通零時差，聽懂中亞歷史與文化故事，最適合帶長輩、小孩同行的家庭。",
  ch_en_title: "英文導遊",
  ch_en_text: "國際化專業嚮導，適合英文溝通自如、喜歡與全球旅伴交流、追求深度的你。",
});

// ---------- Tours (same tours as check-small-tours.js) ----------
// type: "group" = group dates or private, "private" = private & custom-made only
// ---------- Tours (pages built in this redesign) ----------
const TOURS = [
  {
    days: 8,
    length: "short",
    style: "culture",
    title_en: "8 days · Nomad life + slow days in Karakol",
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
    info_en: {
      code: "NML",
      intensity: 2,
      season: "Mid-May – end of September",
      highlight: "Life with nomads in the mountains, and slow days and hikes in a Tien Shan town",
    },
  },
  {
    days: 8,
    length: "short",
    style: "slow",
    title_en: "8 days · Issyk-Kul classic: slow travel in the valleys",
    title_zh: "8天 Issyk-Kul 經典山谷慢旅行",
    img: "assets/image-itinerary/8d-yurt-valley-autumn.jpg",
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
    info_en: {
      code: "IKC",
      intensity: 2,
      season: "May – November",
      highlight: "Slow days in the valleys and by the lake, easy mountain and lake trips, hiking. Comfortable stays.",
    },
  },
  {
    days: 8,
    length: "short",
    style: "classic",
    title_en: "8 days · Song-Kul classic: the heart of nomad life",
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
    info_en: {
      code: "SKC",
      intensity: 3,
      season: "Late May – mid-September",
      highlight: "Up to the 3,000 m grasslands, traditional yurt stays and real high-pasture herding",
    },
  },
  {
    days: 10,
    length: "long",
    style: "adventure",
    title_en: "10 days · Three lakes: highland off-road horse adventure",
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
    info_en: {
      code: "TLH",
      intensity: 4,
      season: "Mid-June – mid-September",
      highlight: "Mountain passes, changing weather and simple stays: a shared mountain adventure",
    },
  },
  {
    days: 14,
    length: "long",
    style: "adventure",
    title_en: "14 days · The grand loop of Kyrgyzstan",
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
    info_en: {
      code: "RGL",
      intensity: 3,
      season: "Mid-June – end of September",
      highlight: "All of Kyrgyzstan's highlights and its most spectacular mountain scenery in one trip",
    },
  },
];

// ---------- Guest reviews ----------
// From the feedback form guests fill in after their trip (2026 拼團 feedback, "For website" list).
// stars = the guest's overall rating in that form.
const REVIEW_TOURS = {
  TLH: { en: "TLH · 10-day three lakes", zh: "TLH・10天三湖高山越野騎馬" },
  SKC: { en: "SKC · 8-day Song-Kul", zh: "SKC・8天頌湖經典遊牧之心" },
  RGL: { en: "RGL · 14-day grand loop", zh: "RGL・14天全境經典大環線" },
  IKC: { en: "IKC · 8-day Issyk-Kul", zh: "IKC・8天伊塞克湖經典慢旅行" },
  NG: { en: "2026 World Nomad Games", zh: "2026 世界遊牧運動會包團" },
};

const REVIEWS = [
  {
    name: "Li",
    tour: "TLH",
    stars: 5,
    en: "After 10 days together, I could really feel how much care and hard work Bek put in. A trip like this, exploring the wild, is always going to be a little inconvenient when it comes to transport, stays and food. But with clear explanations before the trip and Bek's help along the way, I don't think you need to worry that guests won't be happy with the itinerary. Rest assured.",
    zh: "經過10天的相處，可以感受到Bek的用心和辛苦；這樣偏向荒野探索的旅程，本來就在交通、住宿、食物上會有些不便，經過妥善的事前說明，和旅途當下Bek的協助，我覺得可以不用太擔心顧客會不滿意行程的安排，請放心。",
  },
  {
    name: "Chieh",
    tour: "TLH",
    stars: 5,
    en: "1. The itinerary and the stays were planned with real care, with varied, high-quality activities. For example, they chose rooms with a good view or a quiet spot for us, and adjusted the plan to our needs along the way.\n2. Besides being professional, the guide and driver watched how each of us was doing and looked after us warmly, like checking on how we were feeling at the right moments.\nThank you, Bek, for looking after us like a nanny these past days, and for patiently answering and translating all our questions about Kyrgyzstan. Gentle and steady, Bek made us feel safe and comfortable far from home, as relaxed as travelling with a friend.",
    zh: "1. 行程的規劃及住宿的安排相當用心，能體驗到多元且有品質的活動，如：住宿特意為顧客挑選景觀好或是安靜不被打擾的房間，在旅程當中也能依據顧客需求彈性調整。\n2. 導遊及司機除了提供專業的服務外，也細心的觀察每位顧客的狀況，給予溫暖及貼心的關懷，如：適時的關心顧客的身體狀況。\n感謝Bek這幾天如同保姆般的照顧，不厭其煩的回答及翻譯我們對於吉爾吉斯各種好奇。個性溫和、穩定的Bek讓人在異鄉感到安全與舒適，如同和朋友般自在的相處及玩樂。",
  },
  {
    name: "Belinda",
    tour: "SKC",
    stars: 5,
    en: "In the least convenient conditions, I felt the most sincere and thoughtful planning every single day. Every time I thought I couldn't push myself any further, I made it again, and was rewarded with vast mountains, endless grasslands, a deep-blue jewel of a lake and a sky full of stars on cold nights. Kyrgyzstan was a completely unknown country before I left, and a trip I felt so attached to as I was leaving. Thank you, Go2mountains, for everything!",
    zh: "這是一次在最不方便的客觀條件裡感受到每一天最真誠用心安排的一趟旅行。每一刻都在以為挑戰不了自己的時候，再一次克服成功，收穫壯闊大山、遼闊草原、湛藍的明珠聖湖以及低溫深夜下的滿天星斗。吉爾吉斯，一個出發前完全陌生的國度，一個即將離去卻讓人滿滿依戀的行程。謝謝 Go2mountains，everything！",
  },
  {
    name: "Phyllis",
    tour: "SKC",
    stars: 5,
    en: "I loved everything, what can I do? (Ha)\n1. Horse riding: my first time, so much fun. I'd do it again!\n2. The hike and the riverside barbecue, and the lovely old shepherd we met (what a life)\n3. Riding up and down the mountain in a Soviet army truck: couldn't be cooler\n4. The eagle hunter\n5. The yurt on the first night: a beautiful dining room and a delicious breakfast\n6. Song-Kul: that silent early morning felt cut off from the world's clock, just me, simply me.\n7. The nomad family\n8. The dinner table in a Kyrgyz home\n9. Kyrgyz food (even I, who never ate lamb, gave it a try)\n10. I love history, and our guide Java shared history and culture every day along the way. I learned so much.",
    zh: "每個都喜歡，怎麼辦？（哈）\n1. 騎馬，第一次騎，太有趣了，有機會我還要\n2. 健行／河邊烤肉，看見可愛的老牧羊人（what a life）\n3. 搭蘇聯軍用卡車上下山，最好不要那麼酷\n4. 獵鷹\n5. 第一晚的包子，餐廳好美，早餐好好吃\n6. 頌湖，清晨那段安靜無聲的時光，宛如與整個世界時鐘切割，只剩自己，單純的自己。\n7. 遊牧人家\n8. 吉爾吉斯人家裡的餐桌\n9. 吉爾吉斯的食物（不敢吃羊肉的我都開葷了）\n10. 喜歡歷史，導遊 Java 每天配合行程分享的歷史與文化，收穫滿滿。",
  },
  {
    name: "Yen",
    tour: "SKC",
    stars: 4,
    en: "The whole trip was unforgettable. I was worried my first group tour would feel restrictive, but it actually gave us so many good memories beyond the travelling itself. I was lucky to meet a wonderful group of people: we saw so many admirable qualities, the kind of partnership we hope for, precious parent-and-child bonds… Cheerful, healthy older couples still curious about the world together; a mom who loves her husband and kids and still goes on adventures on her own and keeps learning new things; three nights sharing a yurt with another young couple, swapping travel stories; listening at dinner to a bright young graduate talk about her plans for the future…\nI loved the moments that had nothing to do with sights: the riverside barbecue (my favorite meal of the 8 days! Second was the trout), hiking behind Bek with Omar on his back, everyone stretching together at stops on the long drives, playing volleyball and hot potato on the grass and the beach, shouting as we bounced around in the army truck, passing jam and butter, telling each other where to hang laundry, taking photos for each other…\nThank you, go2mountains, for bringing us together in such a beautiful country.",
    zh: "這整趟旅程都令人非常難忘，原本擔心第一次非自由行會不會很拘束，但其實創造了更多旅行以外的美好回憶。很榮幸認識了一群很棒的人：我們觀察到好多好棒的特質、嚮往的人生伴侶關係、寶貴的父母子女關係～見證開朗健康感情好的長輩夫妻們，無論什麼年紀都可以相伴一起對這個世界充滿好奇；原來愛先生愛小孩的媽媽也可以超級獨立的享受冒險並且不斷學習新的興趣；跟同齡情侶黨一起擠在包子三晚，交流不同的旅行體驗；餐桌上聽著剛畢業的精明可愛小女孩對未來的規劃與期許⋯\n很喜歡一些與景點無關的時刻：溪邊烤肉（8天中最愛的一餐！第二喜歡是鱒魚）、跟在背上有Omar的Bek後面健行、遙遠路途中大家一起下車做伸展運動、草地上沙灘邊一起玩排球hot potato、一起在軍卡上晃得大呼小叫、傳遞果醬奶油、互相告知晾衣地點、互相幫忙拍照留念⋯\n謝謝go2mountains讓我們有機會相遇，在這麼漂亮的國家。",
  },
  {
    name: "Zishen",
    tour: "RGL",
    stars: 4,
    en: "Kyrgyzstan, the richest country in Central Asia: this was a wonderfully rich trip that went beyond everything I thought I knew. Staying in yurts, riding out to visit herders, going up to Kel-Suu Lake and boating on it, and seeing vultures spreading their wings by the lake were once-in-a-lifetime moments. The friendliness of Kyrgyz people (who don't even lock their doors) is the best example of helping one another. The warm host at our guesthouse in Tash-Bashat was great. The yurt stay on the shore of Issyk-Kul was the best (finally, a table!). Skazka Canyon is spectacular, like a film set. The riverside barbecue with Bek, Ruby and Oma's family showed us their warm hospitality, and Ruby even came to see us off the next day. Getting to Altyn-Arashan takes real driving skill and a reliable vehicle: quite a thrill. Boating on the north shore of Issyk-Kul, listening to Teresa Teng and Jay Chou, feeding the seagulls (thanks to Xiao Wu for preparing it all) and afternoon tea was pure bliss. Chon-Kemin Valley in the afternoon was one great view after another. Finally, thank you to Bek's mom and his brother Ali for the family dinner, a perfect ending.",
    zh: "吉爾吉斯，中亞最豐富的國家，這是一次跳脫以往認知的豐富之旅相當精采。吉爾吉斯包（氈房）的住宿體驗及騎馬散步拜訪牧民與上 Kel-Suu Lake，還包含 Kel-Suu Lake 的遊湖，Kel-Suu Lake 邊的禿鷹曬翅都是可遇不可求的。吉爾吉斯人民（不鎖門）的友善是自助互助的最佳體現。Tash-Bashat 的熱情民宿主人很棒。Issyk-Kul 湖畔吉爾吉斯包（氈房）的住宿是最棒的（終於有桌子）。Skazka Canyon 很精彩適合拍電影。Bek/Ruby/Oma 一家人的溪邊烤肉趴讓人感受到助人的熱情，隔天 Ruby 還特地來送行讓人感受到誠意滿滿。Altyn-Arashan 很不容易抵達，需有超高車技及可靠車輛才能在有限時間成行，很刺激。在 Issyk-Kul 北岸搭船遊湖聽鄧麗君及周杰倫的歌曲及餵海鷗（感謝小五的細心準備）還有下午茶，真是心曠神怡。Chon-Kemin Valley 在下午時真是大景不斷。最後感謝 Bek 媽媽與弟弟 Ali 的家宴款待讓此行完美 ending。",
  },
  {
    name: "Yi Chen",
    tour: "IKC",
    stars: 5,
    en: "This kind of trip was a first for me. I never imagined I could use a squat pit toilet, or just find some cover by the roadside! The day at the 'Switzerland of Central Asia' was my most relaxing day: I slept so well, and having no internet was actually a treat! Thank you, Ruby, for planning a trip that gave me a whole new experience of life! Out on the boat, Ruby told us to leave the stress from Taiwan in the lake. It's not easy, but I'm trying. I hope that dream comes true!",
    zh: "這樣的行程是我的初體驗，我從沒有想到，我可以去蹲糞坑，路邊蹲下來有掩護就可以上廁所！到了亞洲小瑞士那個景點是我最放鬆的一天，我睡得很好，沒有網路反而是一種享受！謝謝Ruby規劃的行程，給了我人生另一種體驗！搭船出海，Ruby說把在台灣的壓力遺留在湖裏！雖然很難，但是我盡量，希望美夢成真！",
  },
  {
    name: "Vincent Cheng",
    tour: "SKC",
    stars: 5,
    en: "For me, the most unforgettable memory was our first hike with Bek & Ruby: the wide grasslands, cows and horses grazing at their own pace, a little boy galloping over to us on his horse. So pure and so healing. These are things you never see in everyday life.",
    zh: "對我來說，最難忘的回憶是和 BekRuby 的第一次爬山。看見廣闊的草原，悠哉游哉的牛馬，策馬奔跑過來的小男孩。非常純真，治癒人心。這些都是生活中看不到的。",
  },
  {
    name: "Jackie",
    tour: "SKC",
    stars: 5,
    en: "It took me a long time back in Taiwan before I could slowly look back on those eight days. Kyrgyzstan is a country that lives in peace with nature. It is still developing in many ways, but its simple, unpretentious way of life is so attractive. Especially the different landscapes in each mountain area, so open and so quiet. To get this close to their way of life once in my life felt like such a blessing!\nThank you for starting your travel company and making these eight days possible. Every day was something new and so much fun. I hope you always keep that relaxed, easygoing Kyrgyz style. I'm sure you'll keep getting better!",
    zh: "回來台灣沉澱許久，到現在才能慢慢回顧八天的旅程，吉爾吉斯是一個與自然和平共存共榮的國家，雖然她各方面都還尚在發展中，但就是原有的質樸無華的生活方式非常的吸引人。尤其在各個山間不同的自然風貌，開闊又安靜的氛圍，覺得能夠人生有這麼一次與他們的生活如此靠近，是一件很幸福的事！\n感謝有你們開始旅行社的事務，才能造就我們這八天的緣份，每天都是新體驗、非常的開心，希望你們能夠一直保有吉爾吉斯風格的隨性自在，相信你們會越來越美好！",
  },
  {
    name: "Ching",
    tour: "IKC",
    stars: 4,
    en: "This was my first time spending a whole week with vast grasslands, big mountains and so many cows and horses! An experience I'll never forget. I think I got a horse as untamed as I am, and it got me into a few tight spots. But honestly, that experience gave me the courage to try again. It was so much fun, and I'd love to enjoy nature's mountains and waters again with these animals we rarely meet in city life.",
    zh: "這是我第一次就這樣的與大草原大山及很多的牛馬共同相處了一個星期！是一個永遠忘不掉的經驗！雖然我覺得我騎到了一隻跟我一樣不受控的馬讓我幾次身處危險，但要老實說，透由這次經驗的開啟，反而讓我鼓起了再次嘗試的勇氣，很有趣，也很想能與這些平時在都市裡生活難得接觸的動物們，一起享受大自然的好山好水。",
  },
  {
    name: "Hui",
    tour: "IKC",
    stars: 5,
    en: "I'll never forget Kyrgyzstan's magnificent scenery, the mountains and lakes, and the deep cultural experiences. Thank you!",
    zh: "難忘吉爾吉斯的壯闊美景，有山有水，還有深入的文化體驗。謝謝你們！",
  },
  {
    name: "Chiehyu",
    tour: "SKC",
    stars: 5,
    en: "Thank you to Kyrgyzstan's great mountains for healing me when work had worn me out, body and mind. Thank you to the warmth of Kyrgyz people for letting me take off the mask of always smiling and controlling my expression, and happily be my real self again: the me who can look expressionless without anyone judging. On the last night, I cried because I didn't want to leave Kyrgyzstan and everyone. Thank you, Ruby, for your hug, thank you, Bek's mom, for your kiss and blessing, and thank you for a love as embracing as Kyrgyzstan's mountains. I think Kyrgyzstan's greatest gift to me is courage. I'll carry it bravely as I keep exploring the world, and I hope to have a heart as wide and open as Kyrgyzstan's mountains.",
    zh: "謝謝吉爾吉斯的大山，療癒了因工作而身心俱疲的我；謝謝吉爾吉斯溫暖的人情，讓我能暫時拿下必須時刻微笑做好表情控管的面具，開心地作回真正的我自己——那個即使面無表情也不會有人說話嫌棄的我自己。雖然最後一天晚上要離開吉爾吉斯，要離開溫暖的大家時，因為捨不得哭了，但很謝謝Ruby的擁抱，謝謝貝殼媽媽的親吻與祝福，謝謝吉爾吉斯大山般包容的愛。我想，吉爾吉斯帶給我最大的禮物，就是「勇氣」，我會勇敢的帶著這份禮物，繼續在這世界闖盪，也願自己能像吉爾吉斯的大山般有一顆寬闊包容的心，照耀這世間的美好。",
  },
  {
    name: "Zhu",
    tour: "NG",
    stars: 5,
    en: "Through traffic, security checks and crowds, we finally made it into the stadium of the 2026 World Nomad Games for the long-awaited opening ceremony! It was spectacular and made with so much heart. Not just worth the price, worth far more!",
    zh: "通過重重車陣、安檢、人潮，終於進到2026世界遊牧民族運動會運動場，參加期待已久的開幕式！開幕式無比精彩，誠意滿滿，不是值回票價，是完全超值！",
  },
  {
    name: "Ray",
    tour: "SKC",
    stars: 5,
    en: "Thank you for giving me the chance to visit this perfect country. The group was great and the guide was warm and professional. I love you all!",
    zh: "謝謝您，因為你們讓我有機會來這個完美的國度。團友很棒，導遊很熱情，專業。我愛你們！",
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
        ${info.season ? `<li><i class="fa-regular fa-calendar"></i><span><b>${t("tour_season")}${lang === "zh" ? "：" : ": "}</b>${escapeHTML(info.season)}</span></li>` : ""}
        ${info.highlight ? `<li><i class="fa-solid fa-mountain-sun"></i><span><b>${t("tour_highlight")}${lang === "zh" ? "：" : ": "}</b>${escapeHTML(info.highlight)}</span></li>` : ""}
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
  const dialogStars = document.getElementById("reviewDialogStars");

  function renderReviews() {
    reviewsRail.innerHTML = REVIEWS.map((r, i) => {
      // Every card looks the same: the text is cut to the same number of lines (CSS),
      // and "Read more" always opens the full review
      const short = r[lang] || r.en;
      const more = `<button class="review-more" type="button" data-review="${i}">${t("review_read_more")}</button>`;
      return `
        <article class="review-card">
          <div class="review-top">
            <span class="review-stars" aria-label="${r.stars}/5">${"★".repeat(r.stars)}<span class="review-stars-off">${"★".repeat(5 - r.stars)}</span></span>
            <span class="review-tour">${escapeHTML(REVIEW_TOURS[r.tour][lang] || REVIEW_TOURS[r.tour].en)}</span>
          </div>
          <p class="review-text">${escapeHTML(short)}</p>
          <div class="review-foot">
            <div class="review-person">
              <span class="review-avatar">${escapeHTML([...r.name][0])}</span>
              <div class="review-author">${escapeHTML(r.name)}<small>${escapeHTML(t("review_source"))}</small></div>
            </div>
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
    dialogAuthor.textContent = `${r.name} · ${REVIEW_TOURS[r.tour][lang] || REVIEW_TOURS[r.tour].en}`;
    dialogStars.innerHTML = `${"★".repeat(r.stars)}<span class="review-stars-off">${"★".repeat(5 - r.stars)}</span>`;
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
