/* ════════════════════════════════════════════════════════════════════
   Tela de pausa "Por hoje, é suficiente" — 4 variações visuais
   Mesma estrutura: ícone circular com anéis concêntricos animados,
   título, corpo, faixa de horário com relógio, dois CTAs.
   Cada variação explora paleta, animação do ícone, tipografia e botões.
   Todas responsivas (desktop + mobile) via media queries.
   ════════════════════════════════════════════════════════════════════ */

const PAUSE_COPY = {
  title: 'Por hoje, é suficiente',
  body: 'Você completou bastante prática hoje. Os exercícios voltam amanhã — o descanso faz parte da formação.',
  timing: 'Novos exercícios disponíveis amanhã, às 8h',
  primary: 'Ir para o início',
  secondary: 'Ver meu repertório',
  foot: /*#__PURE__*/React.createElement(React.Fragment, null, "Seu ", /*#__PURE__*/React.createElement("b", null, "repert\xF3rio"), " e suas ", /*#__PURE__*/React.createElement("b", null, "compet\xEAncias"), " continuam dispon\xEDveis a qualquer momento.")
};
const PauseFoot = ({
  setScreen,
  cls
}) => /*#__PURE__*/React.createElement("p", {
  className: cls
}, "Seu", ' ', /*#__PURE__*/React.createElement("button", {
  onClick: () => setScreen('repertorio')
}, "repert\xF3rio"), ' ', "e", ' ', /*#__PURE__*/React.createElement("button", {
  onClick: () => setScreen('micro')
}, "compet\xEAncias"), ' ', "continuam dispon\xEDveis a qualquer momento.");

/* ═══════════════ VARIAÇÃO 1 — Glow suave (refinamento claro) ══════════
   Paleta clara atual, mas anéis com brilho/halo pulsante (glow), título
   em peso médio, botões sólido + contorno. Calmo e arejado. */
const ScreenPausaV1 = ({
  setScreen
}) => /*#__PURE__*/React.createElement("div", {
  className: "cl-screen pz1",
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px 24px'
  }
}, /*#__PURE__*/React.createElement("style", null, `
      .pz1{--pz-bg:var(--bg)}
      .pz1 .pz-box{max-width:480px;width:100%;text-align:center}
      @keyframes pz1-glow{0%,100%{opacity:.9;filter:drop-shadow(0 0 0 rgba(0,172,180,0))}50%{opacity:1;filter:drop-shadow(0 0 10px rgba(0,172,180,.5))}}
      @keyframes pz1-breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
      .pz1 .pz-icon{margin:0 auto 30px;display:block}
      .pz1 .pz-ring{transform-box:fill-box;transform-origin:center}
      .pz1 .pz-core{animation:pz1-breathe 4s ease-in-out infinite}
      .pz1 .pz-glow{animation:pz1-glow 4s ease-in-out infinite}
      .pz1 .pz-title{font-family:var(--f-editorial);font-size:28px;font-weight:500;color:var(--text-1);line-height:1.2;letter-spacing:-.01em;margin-bottom:14px}
      .pz1 .pz-body{font-size:15px;line-height:1.65;color:var(--text-2);font-family:var(--f-interface);max-width:380px;margin:0 auto 20px;text-wrap:pretty}
      .pz1 .pz-timing{display:inline-flex;align-items:center;gap:8px;font-size:12px;color:var(--text-3);background:var(--surface);border:1px solid var(--border-soft);border-radius:var(--r-full);padding:7px 14px;margin-bottom:28px;font-family:var(--f-interface)}
      .pz1 .pz-timing .material-icons{font-size:15px;color:var(--teal-text)}
      .pz1 .pz-actions{display:flex;gap:12px;justify-content:center;max-width:360px;margin:0 auto 22px}
      .pz1 .pz-foot{font-size:12px;color:var(--text-3);line-height:1.55;font-family:var(--f-interface)}
      .pz1 .pz-foot button{background:none;border:none;cursor:pointer;color:var(--indigo);font-weight:700;font-size:12px;padding:0;font-family:var(--f-interface)}
      @media(max-width:768px){.pz1 .pz-title{font-size:22px}.pz1 .pz-actions{flex-direction:column}.pz1 .pz-actions>button{width:100%}}
    `), /*#__PURE__*/React.createElement("div", {
  className: "pz-box"
}, /*#__PURE__*/React.createElement("svg", {
  className: "pz-icon",
  width: "72",
  height: "72",
  viewBox: "0 0 72 72",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("circle", {
  className: "pz-ring pz-glow",
  cx: "36",
  cy: "36",
  r: "34",
  stroke: "var(--cedar)",
  strokeWidth: "1.2",
  strokeOpacity: "0.3"
}), /*#__PURE__*/React.createElement("circle", {
  className: "pz-ring pz-glow",
  cx: "36",
  cy: "36",
  r: "24",
  stroke: "var(--cedar)",
  strokeWidth: "1.4",
  strokeOpacity: "0.5",
  style: {
    animationDelay: '.3s'
  }
}), /*#__PURE__*/React.createElement("circle", {
  className: "pz-ring pz-core",
  cx: "36",
  cy: "36",
  r: "14",
  stroke: "var(--cedar)",
  strokeWidth: "1.8"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "36",
  cy: "36",
  r: "3.6",
  fill: "var(--indigo)"
})), /*#__PURE__*/React.createElement("h2", {
  className: "pz-title"
}, PAUSE_COPY.title), /*#__PURE__*/React.createElement("p", {
  className: "pz-body"
}, PAUSE_COPY.body), /*#__PURE__*/React.createElement("div", {
  className: "pz-timing"
}, /*#__PURE__*/React.createElement("span", {
  className: "material-icons"
}, "schedule"), PAUSE_COPY.timing), /*#__PURE__*/React.createElement("div", {
  className: "pz-actions"
}, /*#__PURE__*/React.createElement("button", {
  className: "cl-btn-primary",
  onClick: () => setScreen('inicio')
}, PAUSE_COPY.primary), /*#__PURE__*/React.createElement("button", {
  className: "cl-btn-outline",
  onClick: () => setScreen('repertorio')
}, PAUSE_COPY.secondary)), /*#__PURE__*/React.createElement(PauseFoot, {
  setScreen: setScreen,
  cls: "pz-foot"
})));
window.ScreenPausaV1 = ScreenPausaV1;

/* ═══════════════ VARIAÇÃO 2 — Pulso de escala (indigo profundo) ═══════
   Fundo indigo profundo, anéis com pulso de escala suave, tipografia
   clara contrastante, botões: 1 sólido teal + 1 texto minimal. */
const ScreenPausaV2 = ({
  setScreen
}) => /*#__PURE__*/React.createElement("div", {
  className: "cl-screen pz2",
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px 24px',
    background: '#10142e'
  }
}, /*#__PURE__*/React.createElement("style", null, `
      @keyframes pz2-pulse{0%,100%{transform:scale(.92);opacity:.5}50%{transform:scale(1.06);opacity:1}}
      .pz2 .pz-box{max-width:480px;width:100%;text-align:center}
      .pz2 .pz-icon{margin:0 auto 32px;display:block}
      .pz2 .pz-ring{transform-box:fill-box;transform-origin:center;animation:pz2-pulse 3.4s cubic-bezier(.4,0,.3,1) infinite}
      .pz2 .pz-title{font-family:var(--f-editorial);font-size:30px;font-weight:400;color:#fff;line-height:1.2;letter-spacing:-.01em;margin-bottom:16px}
      .pz2 .pz-body{font-size:15px;line-height:1.7;color:rgba(255,255,255,.68);font-family:var(--f-interface);max-width:380px;margin:0 auto 22px;text-wrap:pretty}
      .pz2 .pz-timing{display:inline-flex;align-items:center;gap:8px;font-size:12px;color:rgba(255,255,255,.7);background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:var(--r-full);padding:7px 15px;margin-bottom:32px;font-family:var(--f-interface)}
      .pz2 .pz-timing .material-icons{font-size:15px;color:var(--cedar)}
      .pz2 .pz-actions{display:flex;flex-direction:column;align-items:center;gap:6px;margin:0 auto 24px}
      .pz2 .pz-cta{background:var(--cedar);color:#06243a;border:none;border-radius:10px;font-family:var(--f-interface);font-size:14px;font-weight:700;padding:13px 30px;cursor:pointer;transition:background .15s ease;min-width:220px}
      .pz2 .pz-cta:hover{background:var(--cedar-hover)}
      .pz2 .pz-link{background:none;border:none;color:rgba(255,255,255,.7);font-family:var(--f-interface);font-size:13.5px;font-weight:600;padding:10px 16px;cursor:pointer;transition:color .15s ease}
      .pz2 .pz-link:hover{color:#fff}
      .pz2 .pz-foot{font-size:12px;color:rgba(255,255,255,.45);line-height:1.55;font-family:var(--f-interface)}
      .pz2 .pz-foot button{background:none;border:none;cursor:pointer;color:var(--cedar);font-weight:700;font-size:12px;padding:0;font-family:var(--f-interface)}
      @media(max-width:768px){.pz2 .pz-title{font-size:24px}}
    `), /*#__PURE__*/React.createElement("div", {
  className: "pz-box"
}, /*#__PURE__*/React.createElement("svg", {
  className: "pz-icon",
  width: "76",
  height: "76",
  viewBox: "0 0 72 72",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("circle", {
  className: "pz-ring",
  cx: "36",
  cy: "36",
  r: "33",
  stroke: "var(--cedar)",
  strokeWidth: "1.2",
  strokeOpacity: "0.35",
  style: {
    animationDelay: '.5s'
  }
}), /*#__PURE__*/React.createElement("circle", {
  className: "pz-ring",
  cx: "36",
  cy: "36",
  r: "23",
  stroke: "var(--cedar)",
  strokeWidth: "1.4",
  strokeOpacity: "0.6",
  style: {
    animationDelay: '.25s'
  }
}), /*#__PURE__*/React.createElement("circle", {
  className: "pz-ring",
  cx: "36",
  cy: "36",
  r: "13",
  stroke: "var(--cedar)",
  strokeWidth: "1.8"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "36",
  cy: "36",
  r: "3.6",
  fill: "var(--cedar)"
})), /*#__PURE__*/React.createElement("h2", {
  className: "pz-title"
}, PAUSE_COPY.title), /*#__PURE__*/React.createElement("p", {
  className: "pz-body"
}, PAUSE_COPY.body), /*#__PURE__*/React.createElement("div", {
  className: "pz-timing"
}, /*#__PURE__*/React.createElement("span", {
  className: "material-icons"
}, "schedule"), PAUSE_COPY.timing), /*#__PURE__*/React.createElement("div", {
  className: "pz-actions"
}, /*#__PURE__*/React.createElement("button", {
  className: "pz-cta",
  onClick: () => setScreen('inicio')
}, PAUSE_COPY.primary), /*#__PURE__*/React.createElement("button", {
  className: "pz-link",
  onClick: () => setScreen('repertorio')
}, PAUSE_COPY.secondary)), /*#__PURE__*/React.createElement(PauseFoot, {
  setScreen: setScreen,
  cls: "pz-foot"
})));
window.ScreenPausaV2 = ScreenPausaV2;

/* ═══════════════ VARIAÇÃO 3 — Rotação + pulso (teal em destaque) ══════
   Paleta clara levemente esverdeada, ícone com anel pontilhado girando
   devagar + pulso central, tipografia mais espaçada, botões pílula. */
const ScreenPausaV3 = ({
  setScreen
}) => /*#__PURE__*/React.createElement("div", {
  className: "cl-screen pz3",
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px 24px',
    background: 'linear-gradient(180deg,#f3faf9,#eef4f3)'
  }
}, /*#__PURE__*/React.createElement("style", null, `
      @keyframes pz3-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
      @keyframes pz3-spin-r{from{transform:rotate(0)}to{transform:rotate(-360deg)}}
      @keyframes pz3-pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.12);opacity:.7}}
      .pz3 .pz-box{max-width:480px;width:100%;text-align:center}
      .pz3 .pz-icon{margin:0 auto 30px;display:block}
      .pz3 .pz-ring{transform-box:fill-box;transform-origin:center}
      .pz3 .pz-spin{animation:pz3-spin 22s linear infinite}
      .pz3 .pz-spin-r{animation:pz3-spin-r 16s linear infinite}
      .pz3 .pz-core{animation:pz3-pulse 3.6s ease-in-out infinite}
      .pz3 .pz-title{font-family:var(--f-editorial);font-size:28px;font-weight:400;color:#173d3a;line-height:1.25;letter-spacing:.01em;margin-bottom:16px}
      .pz3 .pz-body{font-size:15px;line-height:1.7;color:#41615d;font-family:var(--f-interface);max-width:370px;margin:0 auto 22px;text-wrap:pretty}
      .pz3 .pz-timing{display:inline-flex;align-items:center;gap:8px;font-size:12px;color:#2c6b66;background:#fff;border:1px solid #cfe6e2;border-radius:var(--r-full);padding:8px 16px;margin-bottom:30px;font-family:var(--f-interface);box-shadow:0 1px 2px rgba(23,61,58,.05)}
      .pz3 .pz-timing .material-icons{font-size:15px;color:var(--teal-text)}
      .pz3 .pz-actions{display:flex;gap:12px;justify-content:center;max-width:380px;margin:0 auto 22px}
      .pz3 .pz-pill{border-radius:var(--r-full);font-family:var(--f-interface);font-size:14px;font-weight:600;padding:12px 26px;cursor:pointer;transition:all .15s ease}
      .pz3 .pz-pill.solid{background:var(--teal-text);color:#fff;border:1px solid var(--teal-text)}
      .pz3 .pz-pill.solid:hover{background:#006269}
      .pz3 .pz-pill.ghost{background:transparent;color:var(--teal-text);border:1px solid #b9ddd8}
      .pz3 .pz-pill.ghost:hover{background:#fff;border-color:var(--teal-text)}
      .pz3 .pz-foot{font-size:12px;color:#6b8b86;line-height:1.55;font-family:var(--f-interface)}
      .pz3 .pz-foot button{background:none;border:none;cursor:pointer;color:var(--teal-text);font-weight:700;font-size:12px;padding:0;font-family:var(--f-interface)}
      @media(max-width:768px){.pz3 .pz-title{font-size:23px}.pz3 .pz-actions{flex-direction:column}.pz3 .pz-pill{width:100%}}
    `), /*#__PURE__*/React.createElement("div", {
  className: "pz-box"
}, /*#__PURE__*/React.createElement("svg", {
  className: "pz-icon",
  width: "74",
  height: "74",
  viewBox: "0 0 72 72",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("circle", {
  className: "pz-ring pz-spin",
  cx: "36",
  cy: "36",
  r: "34",
  stroke: "var(--teal-text)",
  strokeWidth: "1.3",
  strokeOpacity: "0.4",
  strokeDasharray: "3 7",
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("circle", {
  className: "pz-ring pz-spin-r",
  cx: "36",
  cy: "36",
  r: "24",
  stroke: "var(--teal-text)",
  strokeWidth: "1.4",
  strokeOpacity: "0.55",
  strokeDasharray: "2 6",
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("circle", {
  className: "pz-ring pz-core",
  cx: "36",
  cy: "36",
  r: "13",
  stroke: "var(--teal-text)",
  strokeWidth: "1.8"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "36",
  cy: "36",
  r: "3.6",
  fill: "#173d3a"
})), /*#__PURE__*/React.createElement("h2", {
  className: "pz-title"
}, PAUSE_COPY.title), /*#__PURE__*/React.createElement("p", {
  className: "pz-body"
}, PAUSE_COPY.body), /*#__PURE__*/React.createElement("div", {
  className: "pz-timing"
}, /*#__PURE__*/React.createElement("span", {
  className: "material-icons"
}, "schedule"), PAUSE_COPY.timing), /*#__PURE__*/React.createElement("div", {
  className: "pz-actions"
}, /*#__PURE__*/React.createElement("button", {
  className: "pz-pill solid",
  onClick: () => setScreen('inicio')
}, PAUSE_COPY.primary), /*#__PURE__*/React.createElement("button", {
  className: "pz-pill ghost",
  onClick: () => setScreen('repertorio')
}, PAUSE_COPY.secondary)), /*#__PURE__*/React.createElement(PauseFoot, {
  setScreen: setScreen,
  cls: "pz-foot"
})));
window.ScreenPausaV3 = ScreenPausaV3;

/* ═══════════════ VARIAÇÃO 4 — Ondas (ripple imersivo) ═════════════════
   O mais dramático: anéis que expandem como ondas (ripple) a partir do
   centro, fundo indigo-violeta, título grande editorial, botão sólido +
   contorno claro. Sensação de respiração/onda calma. */
const ScreenPausaV4 = ({
  setScreen
}) => /*#__PURE__*/React.createElement("div", {
  className: "cl-screen pz4",
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px 24px',
    background: 'radial-gradient(circle at 50% 38%,#23244f,#14152f 70%)'
  }
}, /*#__PURE__*/React.createElement("style", null, `
      @keyframes pz4-ripple{0%{transform:scale(.45);opacity:0}25%{opacity:.85}100%{transform:scale(1.5);opacity:0}}
      @keyframes pz4-core{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.18);opacity:.85}}
      .pz4 .pz-box{max-width:500px;width:100%;text-align:center}
      .pz4 .pz-icon{margin:0 auto 34px;display:block}
      .pz4 .pz-ring{transform-box:fill-box;transform-origin:center;animation:pz4-ripple 4s ease-out infinite}
      .pz4 .pz-core{transform-box:fill-box;transform-origin:center;animation:pz4-core 4s ease-in-out infinite}
      .pz4 .pz-title{font-family:var(--f-editorial);font-size:34px;font-weight:400;color:#fff;line-height:1.15;letter-spacing:-.015em;margin-bottom:16px}
      .pz4 .pz-body{font-size:15.5px;line-height:1.7;color:rgba(255,255,255,.66);font-family:var(--f-interface);max-width:400px;margin:0 auto 24px;text-wrap:pretty}
      .pz4 .pz-timing{display:inline-flex;align-items:center;gap:8px;font-size:12px;color:rgba(255,255,255,.72);background:rgba(0,172,180,.10);border:1px solid rgba(0,172,180,.30);border-radius:var(--r-full);padding:8px 16px;margin-bottom:34px;font-family:var(--f-interface)}
      .pz4 .pz-timing .material-icons{font-size:15px;color:var(--cedar)}
      .pz4 .pz-actions{display:flex;gap:13px;justify-content:center;max-width:380px;margin:0 auto 24px}
      .pz4 .pz-btn{border-radius:11px;font-family:var(--f-interface);font-size:14px;font-weight:700;padding:13px 26px;cursor:pointer;transition:all .15s ease}
      .pz4 .pz-btn.solid{background:var(--cedar);color:#06243a;border:none}
      .pz4 .pz-btn.solid:hover{background:var(--cedar-hover)}
      .pz4 .pz-btn.line{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.32)}
      .pz4 .pz-btn.line:hover{border-color:#fff;background:rgba(255,255,255,.06)}
      .pz4 .pz-foot{font-size:12px;color:rgba(255,255,255,.42);line-height:1.55;font-family:var(--f-interface)}
      .pz4 .pz-foot button{background:none;border:none;cursor:pointer;color:var(--cedar);font-weight:700;font-size:12px;padding:0;font-family:var(--f-interface)}
      @media(max-width:768px){.pz4 .pz-title{font-size:26px}.pz4 .pz-actions{flex-direction:column}.pz4 .pz-btn{width:100%}}
    `), /*#__PURE__*/React.createElement("div", {
  className: "pz-box"
}, /*#__PURE__*/React.createElement("svg", {
  className: "pz-icon",
  width: "84",
  height: "84",
  viewBox: "0 0 84 84",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("circle", {
  className: "pz-ring",
  cx: "42",
  cy: "42",
  r: "38",
  stroke: "var(--cedar)",
  strokeWidth: "1.4"
}), /*#__PURE__*/React.createElement("circle", {
  className: "pz-ring",
  cx: "42",
  cy: "42",
  r: "38",
  stroke: "var(--cedar)",
  strokeWidth: "1.4",
  style: {
    animationDelay: '1.33s'
  }
}), /*#__PURE__*/React.createElement("circle", {
  className: "pz-ring",
  cx: "42",
  cy: "42",
  r: "38",
  stroke: "var(--cedar)",
  strokeWidth: "1.4",
  style: {
    animationDelay: '2.66s'
  }
}), /*#__PURE__*/React.createElement("circle", {
  className: "pz-core",
  cx: "42",
  cy: "42",
  r: "11",
  stroke: "var(--cedar)",
  strokeWidth: "1.8"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "42",
  cy: "42",
  r: "3.8",
  fill: "var(--cedar)"
})), /*#__PURE__*/React.createElement("h2", {
  className: "pz-title"
}, PAUSE_COPY.title), /*#__PURE__*/React.createElement("p", {
  className: "pz-body"
}, PAUSE_COPY.body), /*#__PURE__*/React.createElement("div", {
  className: "pz-timing"
}, /*#__PURE__*/React.createElement("span", {
  className: "material-icons"
}, "schedule"), PAUSE_COPY.timing), /*#__PURE__*/React.createElement("div", {
  className: "pz-actions"
}, /*#__PURE__*/React.createElement("button", {
  className: "pz-btn solid",
  onClick: () => setScreen('inicio')
}, PAUSE_COPY.primary), /*#__PURE__*/React.createElement("button", {
  className: "pz-btn line",
  onClick: () => setScreen('repertorio')
}, PAUSE_COPY.secondary)), /*#__PURE__*/React.createElement(PauseFoot, {
  setScreen: setScreen,
  cls: "pz-foot"
})));
window.ScreenPausaV4 = ScreenPausaV4;