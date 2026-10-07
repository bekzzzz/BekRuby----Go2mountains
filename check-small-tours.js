// ===== Tours Data =====
// tag: culture / adventure / nature (matches the filter buttons in index.html)
const TOURS = [
  {
    tag: "culture",
    days_en: "7 days",
    days_zh: "7 天",
    title_en: "7 Days of Nomad Life | Three Nights With a Nomad Family",
    title_zh: "7日 遊牧生活｜與遊牧家庭同住三晚",
    img: "assets/images/gallery-optimized/g-son-kol-3.jpg",
    link: "7days-nomad-life.html",
    label_en: "Nomad homestay",
    label_zh: "遊牧家庭寄宿",
    desc_en:
      "Milk the cows, make kaimak and boorsok, ride with the herders and soak in a natural hot spring, with an eagle hunter, Skazka Canyon and Karakol around it.",
    desc_zh:
      "擠牛奶、做奶油與炸麵球、跟著牧民騎馬、泡天然溫泉，再串連獵鷹人、童話峽谷與 Karakol。",
  },
  {
    tag: "nature",
    days_en: "8 days",
    days_zh: "8 天",
    title_en: "Classic Kyrgyzstan | Lakes, Mountains & Nomad Encounters",
    title_zh: "8日 經典吉爾吉斯｜湖泊、高山與遊牧相遇",
    img: "assets/images-7-day-tour-section/son-kol.jpg",
    link: "8days-classic.html",
    label_en: "Classic loop",
    label_zh: "經典環線",
    desc_en:
      "Burana Tower, Karakol Gorge, Altyn-Arashan hot springs, Skazka Canyon, an eagle hunter and two nights at Song-Kul with nomad families.",
    desc_zh:
      "布拉納塔、卡拉科爾峽谷、阿爾金阿拉善溫泉、童話峽谷、獵鷹人，以及在頌湖與遊牧家庭度過兩晚。",
  },
  {
    tag: "nature",
    days_en: "8 days",
    days_zh: "8 天",
    title_en: "Slow Travel at the Foot of the Tien Shan | Around Issyk-Kul",
    title_zh: "8日 天山腳下的慢旅行｜伊塞克湖環湖",
    img: "assets/images-7-day-tour-section/canion.jpg",
    link: "8days-Issyk-kul.html",
    label_en: "Slow travel · Families",
    label_zh: "慢旅行・親子長輩首選",
    desc_en:
      "A relaxed loop of Issyk-Kul with Chon Kemin valley, Altyn-Arashan hot springs and eagle hunting culture: ideal for families and senior travellers.",
    desc_zh:
      "伊塞克湖環湖、Chon Kemin 秋日山谷、Altyn-Arashan 高山溫泉與獵鷹文化。精緻小團，親子與長輩首選。",
  },
  {
    tag: "culture",
    days_en: "9 days",
    days_zh: "9 天",
    title_en: "Deep Nomad Life | 9 Days in Bek's Home Mountains",
    title_zh: "9日 貝克的故鄉｜深度遊牧生活之旅",
    img: "assets/8-days-migration/migration.jpg",
    link: "9days-toktogul.html",
    label_en: "Signature · Horseback",
    label_zh: "招牌行程・騎馬",
    desc_en:
      "Ride into the mountains near Toktogul where Bek grew up, live with his family and relatives, and spend three nights with nomads in the high summer pastures.",
    desc_zh:
      "騎馬走進貝克在托克托古爾的故鄉，與他的家人親戚同住，並在高山夏牧場與遊牧家庭度過三晚。",
  },
  {
    tag: "adventure",
    days_en: "10 days",
    days_zh: "10 天",
    title_en: "Son-Kol, Kel-Suu & Issyk-Kul | Highland Horse Trek",
    title_zh: "10日 頌湖、克蘇湖與伊塞克湖｜高山騎馬遠征",
    img: "assets/image-itinerary/10d-kel-suu.png",
    link: "10days-off-road-v2.html",
    label_en: "Horse trek · Off-road",
    label_zh: "騎馬・越野",
    desc_en:
      "Ride over a 3,400 m pass to Son-Kol, travel deep into the border highlands to hidden Kel-Suu Lake, and finish with nomad culture on Issyk-Kul.",
    desc_zh:
      "騎馬翻越 3,400 公尺山口前往頌湖，深入邊境高原探訪秘境克蘇湖，最後在伊塞克湖體驗遊牧文化。",
  },
  {
    tag: "adventure",
    days_en: "14 days",
    days_zh: "14 天",
    title_en: "The Grand Kyrgyzstan Journey | Two Weeks Around the Tien Shan",
    title_zh: "14日 吉爾吉斯深度大環線｜天山兩週之旅",
    img: "assets/hero-page-img/hero-visa.jpg",
    link: "14days-grand-tour.html",
    label_en: "Grand tour",
    label_zh: "深度大環線",
    desc_en:
      "Song-Kul, hidden Kel-Suu, the canyons and shores of Issyk-Kul, Altyn-Arashan hot springs and Chon-Kemin, with nomad families along the way.",
    desc_zh:
      "頌湖、秘境克蘇湖、伊塞克湖的峽谷與湖岸、阿爾金阿拉善溫泉與 Chon-Kemin，一路與遊牧家庭相遇。",
  },
];

// ===== Render / Filter / Load More =====
const grid = document.getElementById("toursGrid");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const chips = document.querySelectorAll(".chip");

let activeFilter = "all";
let visibleCount = 6; // show 6 first (matches your request)

function cardHTML(tour, labelText) {
  const lang =
    (window.currentLang || localStorage.getItem("siteLang") || "zh") === "zh"
      ? "zh"
      : "en";
  const title = tour[`title_${lang}`] || tour.title_en || tour.title || "";
  const desc = tour[`desc_${lang}`] || tour.desc_en || tour.desc || "";
  const btnText = lang === "zh" ? "查看行程" : "View itinerary";
  const tag = tour.tag || "";
  const badge = tour.badge || "";
  const days = tour[`days_${lang}`] || tour.days || "";
  const badgeText =
    badge || days
      ? `<span class="tour-card__badge">${[badge, days]
          .filter(Boolean)
          .join(" • ")}</span>`
      : "";
  const daysMeta = days ? `<span>⏳ ${days}</span><span>•</span>` : "";

  return `
    <article class="tour-card" data-tag="${tag}">
      <div class="tour-card__media">
        ${badgeText}
        <img loading="lazy" src="${tour.img}" alt="${title}">
      </div>

      <div class="tour-card__body">
        <h3 class="tour-card__title">${title}</h3>

        <div class="tour-card__meta">
          ${daysMeta}
          <span>${labelText}</span>
        </div>

        <p class="tour-card__desc">${desc}</p>

        <div class="tour-card__actions">
          <a class="btn btn--primary" href="${tour.link}"${tour.link.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>
            ${btnText}
          </a>
        </div>
      </div>
    </article>
  `;
}

function getFilteredTours() {
  if (activeFilter === "all") return TOURS;
  return TOURS.filter((t) => t.tag === activeFilter);
}

function render() {
  const list = getFilteredTours();
  const slice = list.slice(0, visibleCount);

  grid.innerHTML = slice
    .map((card, idx) => {
      const lang =
        (window.currentLang || localStorage.getItem("siteLang") || "zh") ===
        "zh"
          ? "zh"
          : "en";
      const defaultLabel = lang === "zh" ? "拼團日期" : "Group date";
      const label =
        card[`label_${lang}`] ||
        card.label ||
        card.country ||
        defaultLabel ||
        idx + 1;
      return cardHTML(card, label);
    })
    .join("");

  // Load more button
  if (list.length <= visibleCount) {
    loadMoreBtn.classList.add("is-hidden");
  } else {
    loadMoreBtn.classList.remove("is-hidden");
  }
}

chips.forEach((btn) => {
  btn.addEventListener("click", () => {
    chips.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    activeFilter = btn.dataset.filter;
    visibleCount = 6; // reset when filter changes
    render();
  });
});

loadMoreBtn.addEventListener("click", () => {
  visibleCount += 6; // add another 6 each click
  render();
});

// initial render
render();

// re-render when language changes
window.renderTours = render;
