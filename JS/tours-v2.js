// Tours page (tours-v2.html): language switch, reveal animations.

// ---------- Translations ----------
// nav_/footer_/custom_ keys are copied from index.html. Tour texts: Chinese is
// the original wording from tours.html; English is a new translation.
const translations = {
  en: {
      "nav_home": "Home",
      "nav_tours": "Tours",
      "nav_stories": "Stories",
      "nav_youtube": "Youtube",
      "nav_about": "About",
      "nav_visa": "Visa",
      "nav_lang_label": "EN / 中文",
      "custom_kicker": "Custom trips",
      "custom_title": "We’ll design your Kyrgyzstan tour for you",
      "custom_desc": "Tell us your time, interests, and budget—we’ll tailor the route, stays, and local experiences.",
      "custom_btn": "Start my trip plan",
      "footer_about": "Kyrgyzstan journeys with real locals. Films, stories, and bespoke trips designed for curious travelers.",
      "footer_nav_home": "Home",
      "footer_nav_tours": "Tours",
      "footer_nav_stories": "Stories",
      "footer_nav_about": "About us",
      "footer_nav_visa": "Visa",
      "footer_nav_faq": "Q&A",
      "footer_nav_contact": "Contact",
      "footer_cta": "Send email",
      "footer_legal": "Kyrgyz travel agency · Reg No. 11708197200956 · OKPO 34155903",
      "footer_copy": "© Bek & Ruby 2023 — All Rights Reserved.",
      "tours_kicker": "Top Destinations",
      "tours_hero_title": "Classic Kyrgyzstan Tours",
      "tours_hero_sub": "Focused on hidden landscapes and real local life.",
      "classic_title": "Classic tours",
      "classic_lead": "Tried-and-loved routes through Kyrgyzstan's mountains, lakes and nomad culture.",
      "view_itinerary": "View itinerary",
      "days_5": "5 days",
      "days_7": "7 days",
      "days_8": "8 days",
      "classic1_title": "Classic 7 Days · Poppy Fields",
      "classic1_note": "Poppy blossom",
      "classic2_title": "Classic 8 Days · Song-Kul",
      "classic2_note": "Song-Kul",
      "classic3_title": "Classic 8 Days + Animal Migration (Day 3)",
      "classic3_note": "Once a year",
      "special_kicker": "Seasonal & off the beaten path",
      "special_title": "Special Tours",
      "highlights": "Highlights",
      "special1_title": "Nooruz New Year Festival",
      "special1_h1": "Nooruz is the Kyrgyz New Year, rooted in shamanic culture and nomadic traditions.",
      "special1_h2": "Sumolok making: a special traditional dish, carefully cooked for three days and three nights.",
      "special1_h3": "Horse racing, with teams from Kyrgyzstan's seven regions.",
      "special2_title": "Off-Road Journey",
      "special2_h1": "Reach mountain pastures and remote lakes by off-road vehicle and experience real nomadic life.",
      "special2_h2": "Explore the magnificent Ak-Sai Valley and ride on horseback to Kel-Suu Lake at 3,500 m.",
      "special3_title": "Pamir Highlands",
      "special3_h1": "The unique charm of southern Kyrgyzstan, where nomadic and settled cultures meet.",
      "special3_h2": "A challenging hike of about 6.5 hours on the Traveler's Pass.",
      "special3_h3": "A yurt stay by Tulpar Lake with stunning views of Lenin Peak (7,134 m)."
  },
  zh: {
      "nav_home": "首頁",
      "nav_tours": "行程",
      "nav_stories": "故事",
      "nav_youtube": "YouTube",
      "nav_about": "關於我們",
      "nav_visa": "簽證",
      "nav_lang_label": "中文 / EN",
      "custom_kicker": "客製行程",
      "custom_title": "為你設計專屬的吉爾吉斯旅行",
      "custom_desc": "告訴我們你的時間、興趣與預算，我們量身打造路線，安排在地體驗、住宿與交通。",
      "custom_btn": "開始規劃行程",
      "footer_about": "與在地人一起走進吉爾吉斯。影片、故事與客製旅程，為好奇的旅人而生。",
      "footer_nav_home": "首頁",
      "footer_nav_tours": "行程",
      "footer_nav_stories": "故事",
      "footer_nav_about": "關於我們",
      "footer_nav_visa": "簽證",
      "footer_nav_faq": "常見問題",
      "footer_nav_contact": "聯絡",
      "footer_cta": "寄送 Email",
      "footer_legal": "吉爾吉斯旅行社 · Reg No. 11708197200956 · OKPO 34155903",
      "footer_copy": "© Bek & Ruby 2023 — 版權所有。",
      "tours_kicker": "熱門目的地",
      "tours_hero_title": "吉爾吉斯經典行程",
      "tours_hero_sub": "專注在秘境風景和當地生活的體驗",
      "classic_title": "經典行程",
      "classic_lead": "走進吉爾吉斯的高山、湖泊與遊牧文化。",
      "view_itinerary": "點入看行程",
      "days_5": "五天",
      "days_7": "七天",
      "days_8": "八天",
      "classic1_title": "經典七天 罌粟花海",
      "classic1_note": "Poppy Blossom",
      "classic2_title": "經典八天 頌湖",
      "classic2_note": "Song-Kul",
      "classic3_title": "經典八天＋動物大遷移(第三天)",
      "classic3_note": "一年一團",
      "special_kicker": "季節限定與秘境路線",
      "special_title": "Special Tours",
      "highlights": "特色",
      "special1_title": "諾魯茲新年慶典",
      "special1_h1": "諾魯茲節是吉爾吉斯的新年，根植於薩滿文化與游牧傳統。",
      "special1_h2": "蘇姆洛克Sumolok 製作：一道特別的傳統料理，三天三夜的精心烹煮。",
      "special1_h3": "騎馬比賽，來自吉爾吉斯七個地區隊伍的比賽。",
      "special2_title": "越野之旅",
      "special2_h1": "通過越野車抵達前往山區牧場和偏遠湖泊，深入體驗真正的游牧生活。",
      "special2_h2": "探索壯麗的阿克賽山谷（Ak Sai Valley），騎馬前往位於海拔3500米的克蘇湖（Kel-Suu Lake）。",
      "special3_title": "帕米爾高原",
      "special3_h1": "吉爾吉斯南部的獨特魅力，融合了游牧與定居文化的精彩面貌。",
      "special3_h2": "具挑戰性約6.5小時的徒步旅行者之路（Traveler’s Pass）。",
      "special3_h3": "在圖帕湖（Tulpar Lake）旁的蒙古包內，欣賞壯麗的列寧峰（海拔7,134米）的迷人景色。"
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
        ? "吉爾吉斯經典行程 | Go2Mountains"
        : "Kyrgyzstan Tours & Packages | Go2Mountains";
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
