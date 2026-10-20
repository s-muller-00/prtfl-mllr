(function () {
  "use strict";

  var COMMON = {
    en: {
      dockWork: "Work",
      dockExperiments: "Experiments",
      dockAbout: "About",
      resume: "CV",
      back: "Work",
      skip: "Skip to content",
      langSwitch: "Switch to Portuguese"
    },
    pt: {
      dockWork: "Trabalho",
      dockExperiments: "Experimentos",
      dockAbout: "Sobre",
      resume: "CV",
      back: "Trabalho",
      skip: "Pular para o conteúdo",
      langSwitch: "Mudar para inglês"
    }
  };

  var STORE_KEY = "sc-lang";

  function reduceMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  // Header: show its background once the page has scrolled
  function markScrolled() {
    document.documentElement.classList.toggle("is-scrolled", window.scrollY > 4);
  }
  window.addEventListener("scroll", markScrolled, { passive: true });
  markScrolled();

  function readLang() {
    try {
      var saved = window.localStorage.getItem(STORE_KEY);
      if (saved === "en" || saved === "pt") return saved;
    } catch (e) {}
    return document.documentElement.getAttribute("data-lang") || "en";
  }

  function saveLang(lang) {
    try {
      window.localStorage.setItem(STORE_KEY, lang);
    } catch (e) {}
  }

  window.initV2 = function (pageDict) {
    var dicts = {
      en: Object.assign({}, COMMON.en, (pageDict && pageDict.en) || {}),
      pt: Object.assign({}, COMMON.pt, (pageDict && pageDict.pt) || {})
    };
    var lang = readLang();

    var caseLinks = Array.prototype.slice.call(document.querySelectorAll(".case-link"));
    var previewCase = document.querySelector("[data-preview-case]");
    var previewCover = document.querySelector("[data-preview-cover]");
    var previewMeta = document.querySelector("[data-preview-meta]");
    var previewResult = document.querySelector("[data-preview-result]");
    var previewCta = document.querySelector("[data-preview-cta]");
    var narrow = window.matchMedia("(max-width: 760px)");

    function apply() {
      var dict = dicts[lang];
      document.documentElement.setAttribute("data-lang", lang);
      document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
      document.querySelectorAll("[data-i18n]").forEach(function (node) {
        var key = node.getAttribute("data-i18n");
        if (dict[key] != null) node.textContent = dict[key];
      });
      document.querySelectorAll("[data-i18n-alt]").forEach(function (node) {
        var key = node.getAttribute("data-i18n-alt");
        if (dict[key] != null) node.setAttribute("alt", dict[key]);
      });
      document.querySelectorAll("[data-i18n-title]").forEach(function (node) {
        var key = node.getAttribute("data-i18n-title");
        if (dict[key] != null) node.setAttribute("title", dict[key]);
      });
      document.querySelectorAll("[data-i18n-label]").forEach(function (node) {
        var key = node.getAttribute("data-i18n-label");
        if (dict[key] != null) node.setAttribute("aria-label", dict[key]);
      });
      document.querySelectorAll("[data-href-pt]").forEach(function (node) {
        var href = node.getAttribute(lang === "pt" ? "data-href-pt" : "data-href-en");
        var file = node.getAttribute(lang === "pt" ? "data-download-pt" : "data-download-en");
        if (href) node.setAttribute("href", href);
        if (file) node.setAttribute("download", file);
      });
      document.querySelectorAll("[data-i18n-case-title]").forEach(function (node) {
        var title = node.getAttribute(lang === "pt" ? "data-title-pt" : "data-title-en");
        if (title) node.textContent = title;
      });
      document.querySelectorAll("[data-lang-code]").forEach(function (node) {
        node.classList.toggle("is-active", node.getAttribute("data-lang-code") === lang);
      });
      var active = document.querySelector(".case-link.is-active");
      if (active) showPreview(active);
      var open = document.querySelector(".case-accordion.is-open");
      if (open) {
        var link = document.getElementById(open.getAttribute("aria-labelledby"));
        if (link) fillAccordion(link, open);
      }
    }

    function metaLine(link) {
      return link.getAttribute("data-year") + " · " +
        link.getAttribute(lang === "pt" ? "data-role-pt" : "data-role-en");
    }

    function resultLine(link) {
      return link.getAttribute(lang === "pt" ? "data-result-pt" : "data-result-en");
    }

    function showPreview(link) {
      if (!previewCase) return;
      previewMeta.textContent = metaLine(link);
      previewResult.textContent = resultLine(link);
      previewCta.href = link.getAttribute("href");
      var cover = link.getAttribute("data-cover");
      if (previewCover) {
        previewCover.style.backgroundImage = cover ? "url('" + cover + "')" : "";
        previewCover.classList.toggle("has-image", !!cover);
      }
      previewCase.classList.add("is-visible");
    }

    function hidePreview() {
      if (previewCase) previewCase.classList.remove("is-visible");
    }

    function fillAccordion(link, accordion) {
      accordion.querySelector(".accordion-meta").textContent = metaLine(link);
      accordion.querySelector(".accordion-result").textContent = resultLine(link);
      accordion.setAttribute("aria-labelledby", link.id);
    }

    caseLinks.forEach(function (link) {
      var accordion = link.closest(".case-item").querySelector("[data-case-accordion]");

      link.addEventListener("click", function (event) {
        if (!narrow.matches || !accordion) return;
        event.preventDefault();
        var isOpen = accordion.classList.contains("is-open");
        document.querySelectorAll(".case-accordion.is-open").forEach(function (el) {
          el.classList.remove("is-open");
        });
        caseLinks.forEach(function (l) { l.setAttribute("aria-expanded", "false"); });
        if (!isOpen) {
          fillAccordion(link, accordion);
          accordion.classList.add("is-open");
          link.setAttribute("aria-expanded", "true");
        }
      });

      function activate() {
        if (narrow.matches) return;
        caseLinks.forEach(function (l) { l.classList.remove("is-active"); });
        link.classList.add("is-active");
        showPreview(link);
      }

      function deactivate() {
        if (narrow.matches) return;
        if (document.activeElement === link) return;
        link.classList.remove("is-active");
        hidePreview();
      }

      link.addEventListener("mouseenter", activate);
      link.addEventListener("focus", activate);
      link.addEventListener("mouseleave", deactivate);
      link.addEventListener("blur", function () {
        if (narrow.matches) return;
        link.classList.remove("is-active");
        hidePreview();
      });
    });

    var toggle = document.querySelector("[data-lang-toggle]");
    if (toggle) {
      toggle.addEventListener("click", function () {
        lang = lang === "en" ? "pt" : "en";
        saveLang(lang);
        // Fade the content out, swap the language, fade it back in
        if (reduceMotion()) { apply(); document.dispatchEvent(new Event("v2:lang")); return; }
        var root = document.documentElement;
        root.classList.add("is-lang-switching");
        setTimeout(function () {
          apply();
          root.classList.remove("is-lang-switching");
          document.dispatchEvent(new Event("v2:lang"));
        }, 140);
      });
    }

    var thumbTargets = document.querySelectorAll("[data-thumb-src], [data-thumb-label-en]");
    if (thumbTargets.length && window.matchMedia("(hover: hover)").matches) {
      var float = document.createElement("div");
      float.className = "h-float";
      float.setAttribute("aria-hidden", "true");
      document.body.appendChild(float);

      var place = function (e) {
        var w = float.offsetWidth || 280;
        var h = float.offsetHeight || 210;
        var x = e.clientX + 24;
        var y = e.clientY + 24;
        if (x + w > window.innerWidth - 16) x = e.clientX - w - 24;
        if (y + h > window.innerHeight - 16) y = window.innerHeight - h - 16;
        float.style.transform = "translate(" + x + "px," + y + "px)";
      };

      thumbTargets.forEach(function (el) {
        el.addEventListener("mouseenter", function (e) {
          var src = el.getAttribute("data-thumb-src");
          var tone = el.getAttribute("data-thumb-tone");
          float.innerHTML = "";
          if (tone) {
            var shot = document.createElement("div");
            shot.className = "shot tone-" + tone;
            var frame = document.createElement("div");
            frame.className = "shot-frame";
            if (src) {
              var shotImg = document.createElement("img");
              shotImg.src = src;
              shotImg.alt = "";
              frame.appendChild(shotImg);
            } else {
              var shotPh = document.createElement("div");
              shotPh.className = "shot-ph";
              shotPh.textContent = el.getAttribute(lang === "pt" ? "data-thumb-label-pt" : "data-thumb-label-en");
              frame.appendChild(shotPh);
            }
            shot.appendChild(frame);
            float.appendChild(shot);
          } else if (src) {
            var img = document.createElement("img");
            img.src = src;
            img.alt = "";
            float.appendChild(img);
          } else {
            var ph = document.createElement("div");
            ph.className = "ph";
            var label = document.createElement("span");
            label.textContent = el.getAttribute(lang === "pt" ? "data-thumb-label-pt" : "data-thumb-label-en");
            ph.appendChild(label);
            float.appendChild(ph);
          }
          place(e);
          float.classList.add("is-on");
        });
        el.addEventListener("mousemove", place);
        el.addEventListener("mouseleave", function () {
          float.classList.remove("is-on");
        });
      });
    }

    var chips = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
    if (chips.length) {
      var rows = document.querySelectorAll("[data-type]");
      chips.forEach(function (chip) {
        chip.addEventListener("click", function () {
          var f = chip.getAttribute("data-filter");
          chips.forEach(function (c) { c.setAttribute("aria-pressed", c === chip ? "true" : "false"); });
          rows.forEach(function (r) {
            r.hidden = !(f === "all" || r.getAttribute("data-type") === f);
          });
        });
      });
    }

    document.querySelectorAll("[data-copy]").forEach(function (btn) {
      var tip = btn.querySelector(".h-copy-tip");
      var timer = null;
      var fallback = function (text) {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        var ok = false;
        try { ok = document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(ta);
        return ok;
      };
      btn.addEventListener("click", function () {
        var text = btn.getAttribute("data-copy");
        var done = function () {
          if (tip) tip.textContent = dicts[lang].copied || "Copied";
          btn.classList.add("is-copied");
          clearTimeout(timer);
          timer = setTimeout(function () {
            btn.classList.remove("is-copied");
            if (tip) tip.textContent = "";
          }, 2000);
        };
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(done, function () { if (fallback(text)) done(); });
        } else if (fallback(text)) {
          done();
        }
      });
    });

    var year = document.querySelector("[data-year-now]");
    if (year) year.textContent = new Date().getFullYear();

    apply();
  };

  // ---------- Microinteractions (all pages) ----------
  function initMotion() {
    var pt = function () { return document.documentElement.getAttribute("data-lang") === "pt"; };

    // 1 and 7. Enlarge screenshots and photos
    var openZoom = null;
    var zoomables = document.querySelectorAll(".v2-shot, .v2-photos.is-real img");
    if (zoomables.length && window.HTMLDialogElement) {
      var box = document.createElement("dialog");
      box.className = "v2-lightbox";
      box.innerHTML = '<button class="v2-lightbox-close" type="button"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button><figure><img alt="" /><figcaption></figcaption></figure>';
      document.body.appendChild(box);
      var bigImg = box.querySelector("img");
      var bigCap = box.querySelector("figcaption");
      var closeBtn = box.querySelector(".v2-lightbox-close");
      var opener = null;

      var close = function () {
        if (!box.open) return;
        box.classList.remove("is-open");
        setTimeout(function () {
          box.close();
          if (opener) opener.focus({ preventScroll: true });
        }, reduceMotion() ? 0 : 180);
      };

      var open = function (img, from) {
        opener = from || img;
        bigImg.src = img.currentSrc || img.src;
        bigImg.alt = img.alt;
        var fig = img.closest("figure");
        var cap = fig && fig.querySelector("figcaption");
        bigCap.textContent = cap ? cap.textContent : "";
        bigCap.hidden = !cap;
        closeBtn.setAttribute("aria-label", pt() ? "Fechar imagem" : "Close image");
        box.showModal();
        void box.offsetWidth; // start the transition from the closed state
        box.classList.add("is-open");
      };

      zoomables.forEach(function (img) {
        img.classList.add("is-zoomable");
        img.setAttribute("tabindex", "0");
        img.setAttribute("role", "button");
        var label = function () { img.setAttribute("aria-label", (pt() ? "Ampliar imagem: " : "Enlarge image: ") + img.alt); };
        label();
        document.addEventListener("v2:lang", label);
        img.addEventListener("click", function () { open(img); });
        img.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(img); }
        });
      });

      openZoom = open;
      closeBtn.addEventListener("click", close);
      box.addEventListener("click", function (e) { if (e.target === box) close(); });
      box.addEventListener("cancel", function (e) { e.preventDefault(); close(); });
    }

    // Before / after comparator: the two cards are tabs that swap the screen below
    document.querySelectorAll("[data-compare]").forEach(function (box) {
      var tabs = Array.prototype.slice.call(box.querySelectorAll('[role="tab"]'));
      var select = function (tab, focus) {
        tabs.forEach(function (t) {
          var on = t === tab;
          t.setAttribute("aria-selected", on ? "true" : "false");
          t.tabIndex = on ? 0 : -1;
          document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
        });
        if (focus) tab.focus();
      };
      tabs.forEach(function (tab, i) {
        tab.addEventListener("click", function () { select(tab, false); });
        tab.addEventListener("keydown", function (e) {
          if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            e.preventDefault();
            select(tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length], true);
          }
        });
      });
    });

    // "After" cards that have a screen in the same change open it enlarged
    if (openZoom) {
      document.querySelectorAll(".v2-change").forEach(function (change) {
        var card = change.querySelector(".v2-ba > .after");
        var img = change.querySelector("img.is-zoomable");
        if (!card || !img) return;
        card.classList.add("is-linked");
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        var label = function () { card.setAttribute("aria-label", (pt() ? "Ver a tela: " : "See the screen: ") + card.textContent.trim()); };
        label();
        document.addEventListener("v2:lang", label);
        card.addEventListener("click", function () { openZoom(img, card); });
        card.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openZoom(img, card); }
        });
      });
    }

    // Skip link: move focus to the content without changing the URL (the home reads the hash)
    var skip = document.querySelector(".skip-link");
    var mainEl = document.getElementById("main");
    if (skip && mainEl) {
      skip.addEventListener("click", function (e) {
        e.preventDefault();
        mainEl.focus({ preventScroll: true });
        mainEl.scrollIntoView({ block: "start", behavior: reduceMotion() ? "auto" : "smooth" });
      });
    }

    // Product loop: a pause control (WCAG 2.2.2), paused from the start for reduced motion
    var demo = document.querySelector(".v2-demo");
    var loopBtn = document.querySelector("[data-loop-toggle]");
    var frame = demo && demo.querySelector("iframe");
    if (demo && loopBtn && frame) {
      var loopSrc = frame.getAttribute("src");
      var still = null;
      var stillSrc = demo.getAttribute("data-still");
      var paused = false;
      var loopLabel = loopBtn.querySelector("[data-loop-label]");
      var setLabel = function () {
        loopLabel.textContent = paused
          ? (pt() ? "Continuar animação" : "Play animation")
          : (pt() ? "Pausar animação" : "Pause animation");
      };
      var setPaused = function (value) {
        paused = value;
        demo.classList.toggle("is-paused", paused);
        loopBtn.setAttribute("aria-pressed", paused ? "true" : "false");
        if (paused) {
          if (!still && stillSrc) {
            still = document.createElement("img");
            still.className = "v2-demo-still";
            still.src = stillSrc;
            still.alt = "";
            frame.parentNode.appendChild(still);
          }
          frame.setAttribute("src", "about:blank");
        } else {
          frame.setAttribute("src", loopSrc);
        }
        setLabel();
      };
      loopBtn.addEventListener("click", function () { setPaused(!paused); });
      document.addEventListener("v2:lang", setLabel);
      if (reduceMotion()) setPaused(true);
      else setLabel();
    }

    // 2. Count numbers up once they come into view
    var stats = document.querySelectorAll(".v2-stat-value");
    if (stats.length && "IntersectionObserver" in window && !reduceMotion()) {
      var countUp = function (el) {
        var final = el.textContent;
        var parts = final.split(/(\d+)/);
        if (parts.length < 2) return;
        var start = performance.now();
        var written = final;
        var step = function (now) {
          if (el.textContent !== written) return; // language changed mid-way: keep the new text
          var t = Math.min(1, (now - start) / 900);
          var ease = 1 - Math.pow(1 - t, 3);
          written = parts.map(function (part, i) {
            return i % 2 ? String(Math.round(Number(part) * ease)) : part;
          }).join("");
          el.textContent = written;
          if (t < 1) requestAnimationFrame(step);
          else el.textContent = final;
        };
        requestAnimationFrame(step);
      };
      var seen = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          seen.unobserve(entry.target);
          countUp(entry.target);
        });
      }, { threshold: 0.6 });
      stats.forEach(function (el) { seen.observe(el); });
    }

    // 3. Reading progress on case pages
    var top = document.querySelector(".v2-top");
    if (top && document.querySelector(".v2-hero")) {
      var bar = document.createElement("div");
      bar.className = "v2-progress";
      bar.setAttribute("aria-hidden", "true");
      top.appendChild(bar);
      var ticking = false;
      var update = function () {
        var max = document.documentElement.scrollHeight - window.innerHeight;
        var p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
        bar.style.transform = "scaleX(" + p + ")";
        ticking = false;
      };
      window.addEventListener("scroll", function () {
        if (!ticking) { ticking = true; requestAnimationFrame(update); }
      }, { passive: true });
      window.addEventListener("resize", update);
      update();
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initMotion);
  else initMotion();
})();
