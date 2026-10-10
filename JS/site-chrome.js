// Shared site header + footer (css/site-chrome.css):
// mobile menu, white header on scroll, and EN / 中文 for the header and footer.
//
// Pages with their own full translation (index, about-us) set
// <html data-page-i18n> and switch the language themselves; on those pages this
// script only handles the menu and the header background.

(function () {
  // Header + footer texts, copied from the translations in index.html
  const CHROME = {
    en: {
      "nav_home": "Home",
      "nav_tours": "Tours",
      "nav_stories": "Stories",
      "nav_youtube": "Youtube",
      "nav_visa": "Visa",
      "nav_about": "About",
      "nav_lang_label": "EN / 中文",
      "footer_nav_faq": "Q&A",
      "custom_btn": "Start my trip plan",
      "footer_about": "Kyrgyzstan journeys with real locals. Films, stories, and bespoke trips designed for curious travelers.",
      "footer_nav_home": "Home",
      "footer_nav_tours": "Tours",
      "footer_nav_stories": "Stories",
      "footer_nav_about": "About us",
      "footer_nav_contact": "Contact",
      "footer_cta": "Send email",
      "footer_legal": "Go2Mountains LLC (ОсОО «Гоу ту Маунтинс») · Reg. No. 332596-3302-ООО · OKPO 35166636 · INN 01108202610020",
      "footer_address": "Issyk-Kul Region, Kyrgyz Republic",
      "footer_copy": "© 2023–2026 Bek & Ruby — All Rights Reserved."
  },
    zh: {
      "nav_home": "首頁",
      "nav_tours": "行程",
      "nav_stories": "故事",
      "nav_youtube": "YouTube",
      "nav_visa": "簽證",
      "nav_about": "關於我們",
      "nav_lang_label": "中文 / EN",
      "footer_nav_faq": "常見問題",
      "custom_btn": "開始規劃行程",
      "footer_about": "與在地人一起走進吉爾吉斯。影片、故事與客製旅程，為好奇的旅人而生。",
      "footer_nav_home": "首頁",
      "footer_nav_tours": "行程",
      "footer_nav_stories": "故事",
      "footer_nav_about": "關於我們",
      "footer_nav_contact": "聯絡",
      "footer_cta": "寄送 Email",
      "footer_legal": "Go2Mountains 有限責任公司（ОсОО «Гоу ту Маунтинс»）· 登記號 332596-3302-ООО · OKPO 35166636 · 稅號 INN 01108202610020",
      "footer_address": "吉爾吉斯共和國 伊塞克湖州",
      "footer_copy": "© 2023–2026 Bek & Ruby — 版權所有。"
  },
  };

  // ---------- English / Chinese page pairs ----------
  // Pages that exist as separate English and Chinese files. When a visitor picks
  // 中文 (saved as siteLang), links and visits go to the Chinese file, and back.
  const ZH_PAGE = {
    "7days-nomad-life.html": "7days-nomad-life-zh.html",
    "8days-classic.html": "8days-classic-zh.html",
    "9days-toktogul.html": "9days-toktogul-zh.html",
    "10days-off-road-v2.html": "10days-off-road-v2-zh.html",
    "14days-grand-tour.html": "14days-grand-tour-zh.html",
    "stories-1.html": "stories-1-zh.html",
    "stories-2.html": "stories-2-zh.html",
    "stories-3.html": "stories-3-zh.html",
    "stories-4.html": "stories-4-zh.html",
    "stories-5.html": "stories-5-zh.html",
    "stories-6.html": "stories-6-zh.html",
    "blog-article-12-v2.html": "blog-article-12-v2-zh.html",
    "blog.html": "blog-zh.html",
    // Pages first written in Chinese, with an English version
    "8days-Issyk-kul-en.html": "8days-Issyk-kul.html",
    "blog-article-1-v2-en.html": "blog-article-1-v2.html",
    "blog-article-2-v2-en.html": "blog-article-2-v2.html",
    "blog-article-3-v2-en.html": "blog-article-3-v2.html",
    "blog-article-4-v2-en.html": "blog-article-4-v2.html",
    "blog-article-5-v2-en.html": "blog-article-5-v2.html",
    "blog-article-6-v2-en.html": "blog-article-6-v2.html",
    "blog-article-7-v2-en.html": "blog-article-7-v2.html",
    "blog-article-8-v2-en.html": "blog-article-8-v2.html",
    "blog-article-9-v2-en.html": "blog-article-9-v2.html",
    "blog-article-10-v2-en.html": "blog-article-10-v2.html",
    "blog-article-11-v2-en.html": "blog-article-11-v2.html",
  };
  // Lookups are by lower-case file name; links keep the real file name
  const ZH_OF = Object.fromEntries(Object.entries(ZH_PAGE).map(([en, zh]) => [en.toLowerCase(), zh]));
  const EN_OF = Object.fromEntries(Object.entries(ZH_PAGE).map(([en, zh]) => [zh.toLowerCase(), en]));

  function savedLang() {
    try {
      return localStorage.getItem("siteLang");
    } catch (e) {
      return null;
    }
  }
  function fileOf(url) {
    return (url.pathname.split("/").pop() || "index.html").toLowerCase();
  }
  function pairFor(name, lang) {
    return lang === "zh" ? ZH_OF[name] : lang === "en" ? EN_OF[name] : undefined;
  }

  // Open the page in the saved language straight away
  const here = fileOf(location);
  const target = pairFor(here, savedLang());
  if (target) {
    location.replace(target + location.search + location.hash);
    return;
  }

  // Links to paired pages follow the current language (also works for links added later)
  document.addEventListener(
    "click",
    (e) => {
      const a = e.target.closest && e.target.closest("a[href]");
      if (!a || a.target === "_blank") return;
      const url = new URL(a.getAttribute("href"), location.href);
      if (url.origin !== location.origin) return;
      const swap = pairFor(fileOf(url), savedLang());
      if (swap) a.setAttribute("href", swap + url.search + url.hash);
    },
    true
  );

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(() => {
    const header = document.getElementById("g2mHeader");
    const footer = document.querySelector(".g2m-footer");
    if (!header) return;

    // ---------- Skip link (keyboard users jump past the header) ----------
    const main = document.querySelector("main") || header.nextElementSibling;
    if (main) {
      if (!main.id) main.id = "main";
      if (!main.hasAttribute("tabindex")) main.setAttribute("tabindex", "-1");
      const skip = document.createElement("a");
      skip.className = "g2m-skip";
      skip.href = "#" + main.id;
      const zh = (document.documentElement.lang || "").toLowerCase().startsWith("zh");
      skip.textContent = zh ? "跳到主要內容" : "Skip to main content";
      document.body.prepend(skip);
    }

    // ---------- Mobile menu ----------
    const menuBtn = document.getElementById("g2mMenu");
    const links = document.getElementById("g2mLinks");

    function setMenu(open) {
      links.classList.toggle("open", open);
      menuBtn.setAttribute("aria-expanded", open);
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      menuBtn.innerHTML = open ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>' : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
      // move keyboard focus into the menu when it opens, and back to the button when it closes
      if (open) links.querySelector("a, button")?.focus({ preventScroll: true });
    }
    menuBtn.addEventListener("click", () => setMenu(!links.classList.contains("open")));
    links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && links.classList.contains("open")) {
        setMenu(false);
        menuBtn.focus();
      }
    });

    // ---------- White header after scrolling (fixed header only) ----------
    if (!header.classList.contains("g2m-header--overlay") && !header.classList.contains("g2m-header--solid")) {
      const onScroll = () => header.classList.toggle("solid", window.scrollY > 40);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    // ---------- Language for header + footer ----------
    if (document.documentElement.hasAttribute("data-page-i18n")) return;

    const parts = [header, footer].filter(Boolean);
    function setChromeLanguage(lang) {
      const bundle = CHROME[lang] || CHROME.en;
      parts.forEach((part) => {
        part.lang = lang === "zh" ? "zh-Hant" : "en";
        part.querySelectorAll("[data-i18n]").forEach((el) => {
          const value = bundle[el.dataset.i18n];
          if (value) el.textContent = value;
        });
      });
      try {
        localStorage.setItem("siteLang", lang);
      } catch (e) {
        /* storage blocked: switch for this visit only */
      }
      current = lang;
    }

    let current = "en";
    let saved = null;
    try {
      saved = localStorage.getItem("siteLang");
    } catch (e) {}
    // Saved choice; otherwise the page's own language (e.g. a Chinese tour page)
    const pageLang = (document.documentElement.lang || "en").toLowerCase().startsWith("zh") ? "zh" : "en";
    setChromeLanguage(saved === "zh" || saved === "en" ? saved : pageLang);

    const langBtn = document.getElementById("langBtn");
    if (langBtn)
      langBtn.addEventListener("click", () => {
        const next = current === "zh" ? "en" : "zh";
        setChromeLanguage(next);
        const other = pairFor(here, next);
        if (other) location.href = other + location.search + location.hash;
      });
  });
})();
