(function () {
  "use strict";

  var COMMON = {
    en: {
      dockWork: "Work",
      dockExperiments: "Experiments",
      dockAbout: "About",
      resume: "CV",
      back: "Work"
    },
    pt: {
      dockWork: "Trabalho",
      dockExperiments: "Experimentos",
      dockAbout: "Sobre",
      resume: "CV",
      back: "Trabalho"
    }
  };

  var STORE_KEY = "sc-lang";

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
        apply();
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
})();
