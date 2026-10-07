// Tour itinerary pages (10days-off-road-v2.html, 8days-classic.html):
// scroll progress, active links, day toggles, reveal animations

document.addEventListener("DOMContentLoaded", () => {
  // (Site header menu is handled by JS/site-chrome.js)

  // ---------- Scroll progress bar ----------
  const progressBar = document.getElementById("progressBar");

  function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = max > 0 ? (window.scrollY / max) * 100 + "%" : "0";
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  // ---------- Sticky day switcher ----------
  // Sits right below the sticky section nav, so it needs that nav's height.
  const sectionNav = document.querySelector(".section-nav");
  const chipsBar = document.querySelector(".day-chips-bar");
  const chipsRow = chipsBar.querySelector(".day-chips");

  function updateNavHeight() {
    document.documentElement.style.setProperty("--section-nav-height", sectionNav.offsetHeight + "px");
  }
  updateNavHeight();
  window.addEventListener("resize", updateNavHeight);

  // Shadow under the bar only while it is stuck to the top
  function updateStuck() {
    const stuckTop = sectionNav.offsetHeight;
    chipsBar.classList.toggle("stuck", Math.round(chipsBar.getBoundingClientRect().top) <= stuckTop);
  }
  window.addEventListener("scroll", updateStuck, { passive: true });
  updateStuck();

  function setActiveDay(link) {
    chipsRow.querySelectorAll("a").forEach((a) => a.classList.toggle("active", a === link));
    // On phones the row scrolls sideways: keep the active day visible
    const left = link.offsetLeft - (chipsRow.clientWidth - link.offsetWidth) / 2;
    chipsRow.scrollTo({ left, behavior: "smooth" });
  }

  // ---------- Day toggles ----------
  const dayCards = [...document.querySelectorAll(".day-card")];
  const toggleAllBtn = document.getElementById("toggleAllDays");

  function openDay(id) {
    const card = document.querySelector(`#${id} .day-card`);
    if (card) card.open = true;
  }

  function updateToggleAll() {
    const allOpen = dayCards.every((card) => card.open);
    // labels can be set per page with data-open-label / data-close-label
    toggleAllBtn.textContent = allOpen
      ? toggleAllBtn.dataset.closeLabel || "Close all"
      : toggleAllBtn.dataset.openLabel || "Open all";
  }

  dayCards.forEach((card) => card.addEventListener("toggle", updateToggleAll));

  toggleAllBtn.addEventListener("click", () => {
    const open = !dayCards.every((card) => card.open);
    dayCards.forEach((card) => (card.open = open));
  });

  // Tapping a day button opens that day before the page jumps to it
  chipsRow.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      openDay(link.getAttribute("href").slice(1));
      setActiveDay(link);
    });
  });

  // A shared link like ...#day-7 opens that day
  if (/^#day-\d+$/.test(location.hash)) {
    openDay(location.hash.slice(1));
    document.querySelector(location.hash).scrollIntoView();
  }
  updateToggleAll();

  // Without IntersectionObserver, just show everything
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    return;
  }

  // ---------- Reveal on scroll ----------
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  // ---------- Active link highlighting ----------
  // Marks the link whose target is in the middle band of the screen.
  function highlightOnScroll(targets, links) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          links.forEach((link) =>
            link.classList.toggle("active", link.getAttribute("href") === "#" + id)
          );
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    targets.forEach((t) => observer.observe(t));
  }

  const sectionLinks = document.querySelectorAll(".section-nav a[href^='#']");
  const sections = [...sectionLinks].map((a) => document.querySelector(a.getAttribute("href")));
  highlightOnScroll(sections, sectionLinks);

  const days = document.querySelectorAll(".day");
  const dayObserverBand = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const link = chipsRow.querySelector(`a[href="#${entry.target.id}"]`);
        if (link && !link.classList.contains("active")) setActiveDay(link);
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  days.forEach((day) => dayObserverBand.observe(day));

  // Fill the day number circle once the day has been reached
  const dayObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in-view");
      });
    },
    { rootMargin: "0px 0px -40% 0px" }
  );
  days.forEach((day) => dayObserver.observe(day));
});
