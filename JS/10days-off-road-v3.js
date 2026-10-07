// 10-day highland horse trek — storytelling page: day tracker, reveal animations

document.addEventListener("DOMContentLoaded", () => {
  // (Site header is handled by JS/site-chrome.js)

  // Without IntersectionObserver, show everything and skip the tracker
  if (!("IntersectionObserver" in window)) {
    document
      .querySelectorAll(".reveal, .reveal-chapter")
      .forEach((el) => el.classList.add("visible"));
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
    { threshold: 0.15 }
  );
  document
    .querySelectorAll(".reveal, .reveal-chapter")
    .forEach((el) => revealObserver.observe(el));

  // ---------- Day tracker ----------
  const days = [...document.querySelectorAll(".story-day")];
  const tracker = document.getElementById("tracker");
  const trackerDay = document.getElementById("trackerDay");
  const trackerChapter = document.getElementById("trackerChapter");
  const trackerPlace = document.getElementById("trackerPlace");
  const trackerAlt = document.getElementById("trackerAlt");
  const trackerDots = document.getElementById("trackerDots");

  trackerDots.innerHTML = days.map(() => "<i></i>").join("");
  const dots = [...trackerDots.children];

  function showDay(day) {
    const index = days.indexOf(day);
    trackerDay.textContent = day.dataset.day;
    trackerChapter.textContent = day.dataset.chapter;
    trackerPlace.textContent = day.dataset.place;
    trackerAlt.textContent = day.dataset.alt || "";
    trackerAlt.hidden = !day.dataset.alt;
    dots.forEach((dot, i) => {
      dot.classList.toggle("done", i < index);
      dot.classList.toggle("now", i === index);
    });
  }

  // Work out the current day from the scroll position: the last day whose
  // top has passed the middle of the screen.
  let currentDay = null;

  function updateTracker() {
    const middle = window.innerHeight / 2;
    let active = null;
    days.forEach((day) => {
      if (day.getBoundingClientRect().top < middle) active = day;
    });

    const last = days[days.length - 1].getBoundingClientRect();
    tracker.classList.toggle("show", active !== null && last.bottom > middle);

    if (active && active !== currentDay) {
      currentDay = active;
      showDay(active);
    }
  }

  // Start the slow photo zoom when a day comes on screen
  const dayObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in-view");
      });
    },
    { threshold: 0.2 }
  );
  days.forEach((day) => dayObserver.observe(day));

  window.addEventListener("scroll", updateTracker, { passive: true });
  window.addEventListener("resize", updateTracker);
  updateTracker();
});
