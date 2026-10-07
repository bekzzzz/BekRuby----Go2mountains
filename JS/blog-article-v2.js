// Blog article pages (blog-article-N-v2.html): reading progress bar.
// Header, menu and language are handled by JS/site-chrome.js.

document.addEventListener("DOMContentLoaded", () => {
  const bar = document.getElementById("readProgress");
  const post = document.querySelector(".post");
  if (!bar || !post) return;

  function update() {
    const start = post.offsetTop;
    const end = start + post.offsetHeight - window.innerHeight;
    const pct = end > start ? (window.scrollY - start) / (end - start) : 1;
    bar.style.width = Math.min(100, Math.max(0, pct * 100)) + "%";
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
});
