// 10-day highland horse trek — expedition page:
// header, stage tabs, "time in motion" chart, readiness check, reveal animations

// Approximate hours per day, taken from the itinerary (Day 6 "4–5 h" drive shown as 4.5).
const EFFORT = [
  { day: 1, name: "Kyzart", drive: 5.5, ride: 0, foot: 0, note: "" },
  { day: 2, name: "Kilemche", drive: 0, ride: 4, foot: 0, note: "" },
  { day: 3, name: "The pass", drive: 0, ride: 4, foot: 0, note: "" },
  { day: 4, name: "Nomads", drive: 3, ride: 0, foot: 0, note: "" },
  { day: 5, name: "Naryn", drive: 4, ride: 0, foot: 0, note: "" },
  { day: 6, name: "Kok-Kiya", drive: 4.5, ride: 0, foot: 1.5, note: "Drive 4–5 h · hike ≈ 1.5 h" },
  { day: 7, name: "Kel-Suu", drive: 0, ride: 4, foot: 0.7, note: "Ride 2 h each way · boat ≈ 40 min" },
  { day: 8, name: "Tash-Bashat", drive: 5, ride: 0, foot: 0, note: "" },
  { day: 9, name: "Eagles", drive: 5, ride: 0, foot: 0, note: "" },
  { day: 10, name: "Issyk-Kul", drive: 5.5, ride: 0, foot: 0.8, note: "Walk ≈ 50 min" },
];

const SERIES = [
  { key: "drive", label: "Drive" },
  { key: "ride", label: "Ride" },
  { key: "foot", label: "On foot & boat" },
];

const MAX_HOURS = 7; // axis max

document.addEventListener("DOMContentLoaded", () => {
  // ---------- Header ----------
  const header = document.getElementById("header");
  const updateHeader = () => header.classList.toggle("solid", window.scrollY > 40);
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  // ---------- Stage tabs ----------
  const tabs = [...document.querySelectorAll(".stage-tab")];
  const stages = [...document.querySelectorAll(".stage")];

  function selectStage(index, { focus = false, scroll = false } = {}) {
    index = Math.max(0, Math.min(stages.length - 1, index));
    tabs.forEach((tab, i) => {
      const selected = i === index;
      tab.setAttribute("aria-selected", selected);
      tab.tabIndex = selected ? 0 : -1;
    });
    stages.forEach((stage, i) => stage.classList.toggle("active", i === index));
    stages[index].querySelectorAll(".stage-nav button").forEach((btn) => {
      const step = Number(btn.dataset.step);
      btn.disabled = index + step < 0 || index + step >= stages.length;
    });
    document.querySelectorAll(".viz-row").forEach((row, i) => row.classList.toggle("active", i === index));
    if (focus) tabs[index].focus();
    if (scroll) document.getElementById("stageTabs").scrollIntoView({ behavior: "smooth", block: "start" });
    // keep the active tab visible in the scrollable mobile strip
    tabs[index].scrollIntoView({ block: "nearest", inline: "nearest" });
    history.replaceState(null, "", "#day-" + (index + 1));
  }

  const currentIndex = () => tabs.findIndex((t) => t.getAttribute("aria-selected") === "true");

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => selectStage(i));
    tab.addEventListener("keydown", (e) => {
      const keys = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
      if (e.key in keys) {
        e.preventDefault();
        selectStage(keys[e.key], { focus: true });
      }
    });
  });

  document.querySelectorAll(".stage-nav button").forEach((btn) => {
    btn.addEventListener("click", () => selectStage(currentIndex() + Number(btn.dataset.step), { scroll: true }));
  });

  // ---------- Effort chart ----------
  const rows = document.getElementById("vizRows");
  const grid = document.getElementById("vizGrid");
  const tip = document.getElementById("vizTip");
  const chart = document.getElementById("effortChart");

  for (let h = 0; h <= MAX_HOURS; h += 1) {
    const pct = (h / MAX_HOURS) * 100;
    grid.insertAdjacentHTML("beforeend", `<span style="left:${pct}%"></span><em style="left:${pct}%">${h}h</em>`);
  }

  EFFORT.forEach((d, i) => {
    const total = d.drive + d.ride + d.foot;
    const segments = SERIES.filter((s) => d[s.key] > 0)
      .map((s) => `<i class="${s.key}" style="width:${(d[s.key] / MAX_HOURS) * 100}%"></i>`)
      .join("");
    const row = document.createElement("div");
    row.className = "viz-row";
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    row.setAttribute("aria-label", `Day ${d.day}, ${d.name}: about ${total.toFixed(1)} hours in motion. Open stage.`);
    row.innerHTML = `<span class="viz-label">D${String(d.day).padStart(2, "0")}<span class="viz-name"> ${d.name}</span></span>
      <div class="viz-bar">${segments}</div>
      <span class="viz-total">${total.toFixed(1)}h</span>`;

    const showTip = () => {
      const lines = SERIES.filter((s) => d[s.key] > 0)
        .map((s) => `<div><i style="background:var(--series-${s.key})"></i>${s.label}<span>≈ ${d[s.key]} h</span></div>`)
        .join("");
      tip.innerHTML = `<b>Day ${d.day} · ${d.name}</b>${lines}${d.note ? `<div style="color:var(--sand-3);margin-top:4px">${d.note}</div>` : ""}`;
      const chartBox = chart.getBoundingClientRect();
      const rowBox = row.getBoundingClientRect();
      let top = rowBox.bottom - chartBox.top + 6;
      if (top + 110 > chartBox.height) top = rowBox.top - chartBox.top - 110;
      tip.style.top = top + "px";
      const barStart = row.querySelector(".viz-bar").getBoundingClientRect().left - chartBox.left;
      tip.style.left = Math.max(8, Math.min(barStart, chartBox.width - 200)) + "px";
      tip.classList.add("show");
    };
    const hideTip = () => tip.classList.remove("show");
    const open = () => {
      selectStage(i);
      document.getElementById("stages").scrollIntoView({ behavior: "smooth" });
    };

    row.addEventListener("mouseenter", showTip);
    row.addEventListener("mouseleave", hideTip);
    row.addEventListener("focus", showTip);
    row.addEventListener("blur", hideTip);
    row.addEventListener("click", open);
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
    rows.appendChild(row);
  });

  // Open the day from the URL (e.g. #day-7), otherwise Day 1
  const fromHash = /^#day-(\d+)$/.exec(location.hash);
  const startIndex = fromHash ? Number(fromHash[1]) - 1 : 0;
  if (fromHash) {
    selectStage(startIndex);
  } else {
    // set button states without touching the URL
    tabs.forEach((tab, i) => (tab.tabIndex = i === 0 ? 0 : -1));
    stages[0].querySelector('[data-step="-1"]').disabled = true;
    document.querySelector(".viz-row").classList.add("active");
  }

  // ---------- Readiness check ----------
  const boxes = [...document.querySelectorAll("#checklist input")];
  const ringFill = document.getElementById("ringFill");
  const readyCount = document.getElementById("readyCount");
  const readyTitle = document.getElementById("readyTitle");
  const readyText = document.getElementById("readyText");
  const readyBtn = document.getElementById("readyBtn");
  const circumference = 2 * Math.PI * 52;
  ringFill.style.strokeDasharray = circumference;

  function updateReady() {
    const n = boxes.filter((b) => b.checked).length;
    ringFill.style.strokeDashoffset = circumference * (1 - n / boxes.length);
    readyCount.textContent = n;
    if (n === boxes.length) {
      readyTitle.textContent = "Expedition ready";
      readyText.textContent = "This journey sounds like a good match for you. Let's find your dates.";
      readyBtn.innerHTML = 'Join the expedition <i class="fa-solid fa-arrow-right"></i>';
    } else if (n >= 6) {
      readyTitle.textContent = "Almost there";
      readyText.textContent = "A few points left. Ask us about them; we'll tell you honestly if this trip fits.";
      readyBtn.textContent = "Ask us a question";
    } else if (n > 0) {
      readyTitle.textContent = "Keep going";
      readyText.textContent = "Read each point carefully. Every traveler should know what to expect.";
      readyBtn.textContent = "Ask us a question";
    } else {
      readyTitle.textContent = "Start the check";
      readyText.textContent = "Tick each point that's true for you. Be honest; the mountains will be.";
      readyBtn.textContent = "Ask us a question";
    }
  }
  boxes.forEach((b) => b.addEventListener("change", updateReady));
  updateReady();

  // ---------- Reveal on scroll ----------
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    return;
  }
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
});
