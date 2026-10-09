// About page (about-us.html): language switch, reveal animations.

// ---------- Translations (copied from about-us.html) ----------
const translations = {
  en: {
    nav_home: "Home",
    nav_tours: "Tours",
    nav_stories: "Stories",
    nav_youtube: "Youtube",
    nav_about: "About",
    nav_visa: "Visa",
    nav_lang_label: "EN / 中文",
    hero_badge: "Bek & Ruby • Kyrgyz storytellers",
    hero_title: "Journeys designed by filmmakers who grew up here",
    hero_body:
      "We film, host, and guide across Kyrgyzstan. Every route is crafted with locals we trust—so you travel like family, not a tourist.",
    hero_cta: "Plan with us",
    hero_kicker: "go2mountains",
    hero_timeline_title: "Why we started go2mountains",
    hero_timeline_meta1: "2022 · Returned to Kyrgyzstan to get married",
    hero_timeline_p1:
      "It was one of the hardest yet most honest moments of our lives. In the countryside, in front of the mountains, we held a wedding that challenged tradition.",
    hero_timeline_meta2: "Two years in the pandemic",
    hero_timeline_p2:
      "Stranded in Thailand for two years, filming and editing with almost no income—we kept sharing Kyrgyzstan because that was our channel’s original purpose.",
    hero_timeline_meta3: "Between mountains and family",
    hero_timeline_p3:
      "No pomp, just mountains, family, and the ground under our feet—a memory that made us sure we should keep telling this place honestly.",
    hero_timeline_meta4: "No business plan, only heart",
    hero_timeline_p4:
      "We had no blueprint for a travel company, no business model—only a desire to show the Kyrgyzstan we love in the most genuine, unpolished way.",
    hero_timeline_meta5: "How go2mountains grew",
    hero_timeline_p5:
      "After uncertainty and lows, we realized this path is about sharing a way of life, values, and trust. That’s how go2mountains slowly took shape.",
    story_eyebrow: "Ruby's story",
    story_title: "Our story began between two worlds.",
    story_p1:
      "Drawn to mountains, traditional cultures, and slow living, we found a shared curiosity for places beyond big cities.",
    story_p2:
      "For ten years I worked while traveling—drawn to books, mountains, old adventurers’ stories, and distant peaks. When Bek said “Kyrgyzstan,” I knew nothing about it, only that I had to see it. The first time I arrived—meeting his family, riding horses, reaching a 3,000m alpine lake, drinking hot tea in a nomad home—I felt the world become real and finally stopped rushing to the next place.",
    story_p3:
      "We stayed because Kyrgyzstan helped us find ourselves again. Bek returned to the high mountains and horseback; Ruby found a rhythm and a place her spirit belongs; together we found the strength to keep going. This land offered no standard answers—only a direction: inward, toward the heart, toward something more real.",
    story_p4:
      "Thank you, Kyrgyzstan. You didn’t rush us or demand we become anyone else—you simply let us breathe again. We chose to stay, to film, and to share this warmth, hoping that one day, on a journey of your own, the world will gently catch you too.",
    story_p5: "Today, we share Kyrgyzstan with the world.",
    story_alt_eyebrow: "Bek’s story",
    story_alt_title: "It began by leaving the mountains",
    story_alt_p1:
      "When I was ten, a riding accident kept me in the hospital for nearly a year. While the mountain horses ran free, I lay still—learning patience and resilience, and realizing how precious it is simply to walk, move, and feel alive.",
    story_alt_p2:
      "After I recovered, life changed. I was no longer as free as before, and I began to wonder if I could ever return to that fearless kid. So I chose the hardest path—learning Chinese and leaving Kyrgyzstan.",
    story_alt_p3:
      "I earned a scholarship and lived in Shanghai, Bangkok, and Taiwan for nearly ten years. Those years helped me grow, but they were also a kind of escape. Eventually I found the confidence to come home and saw clearly that most people know little about Kyrgyzstan—and places where horses can roam vast mountain valleys are becoming rare.",
    story_alt_p4:
      "This journey is what brought us to where we are today.",
    team_title: "Our team",
    team_intro:
      "Our six-member team is spread across the world,\nso your Kyrgyzstan story can be\nmore real, safe, and unforgettable.",
    team_bek_role:
      "Co-founder | A web developer accidentally sidetracked by a travel agency.",
    team_bek_desc:
      "Bek loves sharing authentic Kyrgyzstan through video and real-life experiences. Passionate about horse riding, nomadic life, and local music, he creates journeys that connect people with the land, culture, and everyday rhythm of the mountains.",
    team_ruby_role: "Co-founder | Journey Designer",
    team_ruby_desc:
      "I began planning trips for people around me at 18, always loving to bring loved ones together to see the world. After traveling widely, I now create journeys in Kyrgyzstan with Bek — designing routes and shaping the rhythm of travel so every experience unfolds at just the right pace.To me, travel is not a product, but a way of life.",
    team_aizada_role: "Translator of Culture & Nature",
    team_aizada_desc:
      "I am your local guide and trip coordinator in Kyrgyzstan. Traveling is not just my job- it is my passion. I love exploring new places, reading, dancing, and organizing unique travel experiences.",
    team_timur_role: "Lead driver",
    team_timur_desc:
      "Specializes in mountain roads and keeps long drives smooth and safe.",
    team_aidar_role: "Camp & film logistics",
    team_aidar_desc:
      "Sets up sunrise shoots, bonfires, and ensures gear is ready in the wild.",
    cta_title: "Travel with us",
    cta_body:
      "Tell us your dates and travel style—we’ll craft a Kyrgyzstan journey made for you.",
    cta_btn: "Start my trip plan",
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
    nav_home: "首頁",
    nav_tours: "行程",
    nav_stories: "故事",
    nav_youtube: "YouTube",
    nav_about: "關於我們",
    nav_visa: "簽證",
    nav_lang_label: "中文 / EN",
    hero_badge: "Bek & Ruby • 吉爾吉斯故事人",
    hero_title: "在地影像創作者為你設計的旅程",
    hero_body:
      "我們在吉爾吉斯拍攝、接待、帶團。每條路線都由信任的在地夥伴協作，讓你像家人而非遊客。",
    hero_cta: "和我們規劃",
    hero_kicker: "go2mountains",
    hero_timeline_title: "我們為什麼開始 go2mountains",
    hero_timeline_meta1: "2022 · 回到吉爾吉斯結婚",
    hero_timeline_p1:
      "那段時間，是我們人生中最辛苦、也最誠實的時刻。回到鄉下，在大山前完成婚禮，挑戰傳統。",
    hero_timeline_meta2: "疫情的兩年",
    hero_timeline_p2:
      "被卡在泰國整整兩年，拍影片、剪影片、幾乎沒有收入；即使如此，我們仍然選擇繼續分享吉爾吉斯，因為那是頻道的初衷。",
    hero_timeline_meta3: "在山與家人之間",
    hero_timeline_p3:
      "沒有排場，只有山、家人、腳下的土地，卻留下了深刻的記憶，也讓我們更確信要真誠記錄這片土地。",
    hero_timeline_meta4: "沒有商業計畫，只有真心",
    hero_timeline_p4:
      "那時沒有旅行社的藍圖，沒有商業模式；只想用最真實、不修飾的方式，把我們熱愛的吉爾吉斯介紹給世界。",
    hero_timeline_meta5: "go2mountains 的成長",
    hero_timeline_p5:
      "走過不確定與低潮，我們明白這條路是在傳遞生活方式、價值與信任。go2mountains 就這樣慢慢長出來。",
    story_eyebrow: "Ruby 的故事",
    story_title: "從靠近世界開始",
    story_p1:
      "十年來她邊工作邊旅行，喜歡閱讀、登山、古老冒險家的故事與遙遠的大山。當 Bek 說出吉爾吉斯時，她其實一無所知，卻清楚地知道自己想去看看。第一次走進那片土地，見家人、上山騎馬、走到三千米的高山湖、在遊牧人家喝熱茶，她第一次感到世界如此真實，也第一次不再急著奔向下一站。",
    story_p2:
      "十年來，我一邊工作、一邊旅行，喜歡閱讀、登山、古老冒險家的故事，以及遙遠的大山。當 Bek 說出「吉爾吉斯」時，其實我一無所知，卻很清楚地知道——我想去看看。第一次走進那片土地，見家人、上山騎馬、走到三千米的高山湖、在遊牧人家喝一杯熱茶，我第一次感到世界如此真實，也第一次不再急著奔向下一站。",
    story_p3:
      "我們之所以留下，是因為吉爾吉斯讓我們找回了自己。Bek 回到大山與馬背上，而我找到了屬於自己的節奏與內心的歸屬；我們一起，也重新找到了繼續前進的力量。這片土地沒有給我們標準答案，只給了一個方向——往內走、往心走、往更真實的地方走。",
    story_p4:
      "謝謝吉爾吉斯。它沒有催促我們，也沒有要求我們成為誰，只是靜靜地，讓我們重新呼吸。我們選擇留下、記錄，並分享這裡的溫度，只希望有一天，你也能在旅途的某一刻，被這個世界溫柔地接住。",
    story_p5: "今天，我們把吉爾吉斯分享給世界。",
    story_alt_eyebrow: "Bek 的故事",
    story_alt_title: "從離開大山開始",
    story_alt_p1:
      "我十歲那年，一場騎馬意外讓我在醫院住了將近一年。當山裡的馬群依然自由奔跑時，我只能靜靜躺著，學會耐心與韌性，也真正理解了能夠行走、活動、單純感受活著本身的珍貴。",
    story_alt_p2:
      "康復之後，生活改變了。我不再像從前那樣自由，也開始懷疑，自己是否還能回到那個無所畏懼的自己。於是，我選擇了最困難的路——學習中文，離開吉爾吉斯。",
    story_alt_p3:
      "我獲得獎學金，在上海、曼谷與台灣生活，前後將近十年。那段日子讓我成長，也是一種逃離。最終，我找回了回到家鄉的信心，也逐漸明白：世界上多數人，幾乎不了解吉爾吉斯；而能讓馬群在遼闊山野中自由奔跑的地方，正變得越來越少。",
    story_alt_p4: "正是這段旅程，把我們帶到了今天。",

    team_title: "我們的團隊",
    team_intro:
      "我們的六人團隊，分散在世界各地，\n只為讓你的吉爾吉斯故事，\n更真實、更安心、更難忘。",
    team_bek_role: "Co-founder | 一位被旅行社耽誤的網站編碼工程師",
    team_bek_desc:
      "Bek 熱愛透過影像與真實體驗，分享最真實的吉爾吉斯。他對騎馬、遊牧生活與在地音樂。 充滿熱情，所設計的每一段旅程，都讓人與土地、文化，以及群山中日常流動的節奏產生連結。",
    team_ruby_role: "Co-founder｜旅行節奏設計師",
    team_ruby_desc:
      "我 18 歲就開始幫身邊的人規劃旅行，最喜歡揪團，把重要的人帶出去看看世界。慢慢走、走得深的旅行，一直都是我心中最好的家人陪伴。繞了半圈世界後，和貝殼用影像記錄吉爾吉斯的山與生活。我負責創作與路線設計，調整旅行的節奏，讓每一段旅程，都剛剛好地發生。對我來說，旅行不是商品，而是一種對生活的提案。",
    team_aizada_role: "文化與風景的翻譯者",
    team_aizada_desc:
      "我是您在吉爾吉斯斯坦的在地嚮導與行程協調員。旅行不只是我的工作，更是我的熱情所在。我熱愛探索新的地方、閱讀、跳舞，並且擅長規劃獨特而難忘的旅遊體驗。",
    team_timur_role: "首席司機",
    team_timur_desc: "專長山路，讓長途駕車平穩安全。",
    team_aidar_role: "營地與拍攝後勤",
    team_aidar_desc: "佈置日出拍攝、營火，確保野外器材就緒。",
    cta_title: "和我們同行",
    cta_body: "告訴我們你的日期與旅遊風格，我們為你打造吉爾吉斯旅程。",
    cta_btn: "開始規劃旅程",
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
    footer_legal:
      "吉爾吉斯旅行社 · Reg No. 11708197200956 · OKPO 34155903",
    footer_copy: "© Bek & Ruby 2023 — 版權所有。",
  },
};

let lang = "en";
const t = (key) => translations[lang][key] ?? translations.en[key] ?? "";

document.addEventListener("DOMContentLoaded", () => {
  // (Site header and menu: JS/site-chrome.js)

  // ---------- Language ----------
  function setLanguage(next) {
    lang = next === "zh" ? "zh" : "en";
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    document.title =
      lang === "zh"
        ? "關於 Bek & Ruby — 我們的故事 | Go2Mountains"
        : "About Bek & Ruby — Our Story | Go2Mountains";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = t(el.dataset.i18n);
      if (!value) return;
      if (value.includes("<")) el.innerHTML = value;
      else el.textContent = value;
    });
    try {
      localStorage.setItem("siteLang", lang);
    } catch (e) {
      /* storage blocked: language still switches for this visit */
    }
  }

  document.getElementById("langBtn").addEventListener("click", () => setLanguage(lang === "zh" ? "en" : "zh"));

  // Same rule as index.html: saved choice, otherwise the browser language
  let saved = null;
  try {
    saved = localStorage.getItem("siteLang");
  } catch (e) {}
  setLanguage(saved || ((navigator.language || "en").toLowerCase().startsWith("zh") ? "zh" : "en"));

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
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));
});
