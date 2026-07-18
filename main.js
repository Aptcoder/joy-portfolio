// Lightbox for recognition photos: click to view full-size with caption.
(function () {
  var groups = document.querySelectorAll(".row-photos");
  if (!groups.length) return;

  var overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.innerHTML =
    '<button class="lightbox-close" aria-label="Close">&times;</button>' +
    '<button class="lightbox-prev" aria-label="Previous photo">&larr;</button>' +
    '<figure><img alt=""><figcaption></figcaption></figure>' +
    '<button class="lightbox-next" aria-label="Next photo">&rarr;</button>';
  document.body.appendChild(overlay);

  var img = overlay.querySelector("img");
  var caption = overlay.querySelector("figcaption");
  var prevBtn = overlay.querySelector(".lightbox-prev");
  var nextBtn = overlay.querySelector(".lightbox-next");
  var current = [], index = 0, lastFocus = null;

  function show(i) {
    index = (i + current.length) % current.length;
    img.src = current[index].src;
    img.alt = current[index].alt;
    caption.textContent = current[index].alt;
    var multi = current.length > 1;
    prevBtn.style.display = multi ? "" : "none";
    nextBtn.style.display = multi ? "" : "none";
  }

  function open(group, i) {
    current = Array.prototype.slice.call(group.querySelectorAll("img"));
    lastFocus = document.activeElement;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    show(i);
    overlay.querySelector(".lightbox-close").focus();
  }

  function close() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  groups.forEach(function (group) {
    group.querySelectorAll("img").forEach(function (thumb, i) {
      thumb.setAttribute("tabindex", "0");
      thumb.setAttribute("role", "button");
      thumb.addEventListener("click", function () { open(group, i); });
      thumb.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(group, i); }
      });
    });
  });

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay || e.target.tagName === "FIGURE") close();
  });
  overlay.querySelector(".lightbox-close").addEventListener("click", close);
  prevBtn.addEventListener("click", function () { show(index - 1); });
  nextBtn.addEventListener("click", function () { show(index + 1); });

  document.addEventListener("keydown", function (e) {
    if (!overlay.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });
})();

// Theme toggle — light is the default; a saved choice wins.
document.querySelectorAll(".theme-toggle").forEach(function (button) {
  button.addEventListener("click", function () {
    var next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  });
});
