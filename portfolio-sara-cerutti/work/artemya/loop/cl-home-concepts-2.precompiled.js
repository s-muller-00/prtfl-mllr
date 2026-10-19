/* ════════════════════════════════════════════════════════════════════
   Home · Dr. Rodrigues orquestrador — conceitos E, F, G, H
   Reusa o modelo de segmentos (DH_SEG, DhSegBar, hooks…) de
   cl-home-concepts.jsx. Espectro: E (conservador) → H (ousado).
   ════════════════════════════════════════════════════════════════════ */

/* Campos extras por segmento usados só pelos conceitos E–H */
const DH_SEG2 = {
  primeiro: {
    lastNote: 'Ainda não conversamos antes desta — então hoje é o nosso ponto de partida.',
    question: 'O que é escutar de verdade, antes de querer responder?',
    journeyPos: 'Início da jornada',
    journeyPct: 5,
    journeyNext: 'Nomear emoções',
    enter: 'É um prazer começar essa jornada com você.'
  },
  recorrente: {
    lastNote: 'Na última sessão eu disse que sua escuta estava ganhando ritmo — e estava mesmo.',
    question: 'O que separa escutar de apenas esperar a sua vez de falar?',
    journeyPos: 'Escuta · em consolidação',
    journeyPct: 38,
    journeyNext: 'Devolutiva precisa',
    enter: 'Bom ver você de volta para mais um passo.'
  },
  alto: {
    lastNote: 'Da última vez, comentei que as peças isoladas já estavam no ponto.',
    question: 'Você consegue sustentar uma relação inteira — não só os bons momentos?',
    journeyPos: 'Pronta para integrar',
    journeyPct: 72,
    journeyNext: 'Casos complexos',
    enter: 'Hoje eu trouxe um desafio à sua altura.'
  },
  dificuldade: {
    lastNote: 'Na última, a devolutiva pesou — e eu fiquei de pensar num passo mais leve para você.',
    question: 'E se, por hoje, a meta fosse apenas escutar com calma?',
    journeyPos: 'Reforçando a base',
    journeyPct: 22,
    journeyNext: 'Retomar a devolutiva',
    enter: 'Vamos com calma — estou aqui com você.'
  },
  desengajado: {
    lastNote: 'Faz um tempo que não nos falamos. Guardei o seu progresso direitinho.',
    question: 'Quanto tempo leva para reencontrar o gosto pela prática?',
    journeyPos: 'Retomando o fio',
    journeyPct: 30,
    journeyNext: 'Voltar à escuta',
    enter: 'Que bom ver você de novo por aqui.'
  }
};
const Dh2Styles = () => /*#__PURE__*/React.createElement("style", null, `
  /* E — continuidade */
  .dh-callback{display:flex;gap:13px;align-items:flex-start;padding:15px 17px;background:var(--surface);border-left:3px solid rgba(0,172,180,.42);border-radius:0 12px 12px 0}
  .dh-callback-av{width:34px;height:34px;border-radius:50%;overflow:hidden;flex-shrink:0;border:1px solid var(--border)}
  .dh-callback-av img{width:100%;height:100%;object-fit:cover;object-position:52% 20%}
  .dh-callback-lbl{font-family:var(--f-interface);font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--text-3);margin-bottom:5px}
  .dh-callback-txt{font-family:var(--f-editorial);font-style:italic;font-size:15px;color:var(--text-2);line-height:1.55}
  .dh-today-lbl{display:flex;align-items:center;gap:8px;font-family:var(--f-interface);font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--teal-text);margin-bottom:14px}
  .dh-today-lbl .material-icons{font-size:15px}

  /* F — pergunta do mentor */
  .dh-q-pre{font-family:var(--f-interface);font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--teal-text);display:block;margin-bottom:12px}
  .dh-q{font-family:var(--f-editorial);font-style:italic;font-size:27px;line-height:1.42;color:var(--text-1);margin:0;max-width:17em}
  .dh-answer-pre{font-family:var(--f-interface);font-size:13px;color:var(--text-3);margin:0 0 16px;display:flex;align-items:center;gap:8px}
  .dh-answer-pre .material-icons{font-size:17px;color:var(--teal-text)}

  /* G — mapa de progresso vivo */
  .dh-journey{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:22px 24px;margin-top:8px}
  .dh-journey-hd{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:18px;flex-wrap:wrap;gap:8px}
  .dh-journey-pos{font-family:var(--f-interface);font-size:15px;font-weight:700;color:var(--text-1)}
  .dh-journey-pct{font-family:var(--f-interface);font-size:13px;color:var(--teal-text);font-weight:700}
  .dh-track{position:relative;height:8px;border-radius:999px;background:var(--border);margin:20px 0 0}
  .dh-track-fill{position:absolute;left:0;top:0;bottom:0;border-radius:999px;background:linear-gradient(90deg,var(--teal),var(--indigo));transition:width .6s cubic-bezier(.2,.7,.2,1)}
  .dh-track-marker{position:absolute;top:50%;width:16px;height:16px;border-radius:50%;background:var(--indigo);border:3px solid var(--surface);transform:translate(-50%,-50%);transition:left .6s cubic-bezier(.2,.7,.2,1)}
  .dh-journey-foot{display:flex;justify-content:space-between;margin-top:12px;font-family:var(--f-interface);font-size:11.5px;color:var(--text-3);gap:12px}
  .dh-journey-here{color:var(--indigo);font-weight:700;display:inline-flex;align-items:center;gap:5px}
  .dh-journey-next{display:inline-flex;align-items:center;gap:5px}
  .dh-journey-next .material-icons{font-size:14px}
  @media (prefers-reduced-motion: no-preference){
    .dh-track-marker{animation:dhPulseM 2.2s infinite}
  }
  @keyframes dhPulseM{0%,100%{box-shadow:0 0 0 3px rgba(0,172,180,.32)}50%{box-shadow:0 0 0 8px rgba(0,172,180,.10)}}

  /* H — mentor presente */
  .dh-presence{position:relative;background:var(--indigo);border-radius:22px;overflow:hidden}
  .dh-presence-grid{display:grid;grid-template-columns:240px 1fr}
  @media(max-width:760px){.dh-presence-grid{grid-template-columns:1fr}}
  .dh-presence-portrait{position:relative;min-height:320px;overflow:hidden}
  .dh-presence-portrait img{width:100%;height:100%;object-fit:cover;object-position:50% 16%}
  .dh-presence-portrait::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent 50%,var(--indigo) 98%)}
  @media(max-width:760px){.dh-presence-portrait{min-height:210px}.dh-presence-portrait::after{background:linear-gradient(180deg,transparent 35%,var(--indigo))}}
  .dh-presence-glow{position:absolute;top:-70px;right:-50px;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(0,172,180,.20),transparent 68%);pointer-events:none;z-index:0}
  .dh-presence-body{padding:40px 42px 38px;position:relative;z-index:1;display:flex;flex-direction:column;justify-content:center}
  .dh-presence-name{font-family:var(--f-interface);font-size:13px;font-weight:700;letter-spacing:.03em;color:#fff;display:flex;align-items:center;gap:9px}
  .dh-presence-role{font-family:var(--f-interface);font-size:11px;color:rgba(255,255,255,.55);font-weight:400;letter-spacing:.02em}
  .dh-presence-enter{font-family:var(--f-editorial);font-style:italic;font-size:15px;color:var(--teal);margin:18px 0 0}
  .dh-presence-msg{font-family:var(--f-editorial);font-style:italic;font-size:25px;line-height:1.5;color:#fff;margin:8px 0 0;max-width:24em}
  .dh-presence-rec{font-family:var(--f-interface);font-size:13px;color:rgba(255,255,255,.7);margin:22px 0 0;display:flex;align-items:center;gap:8px}
  .dh-presence-rec b{color:#fff;font-weight:700}
  .dh-presence-cta{margin-top:22px;align-self:flex-start}
  @media (prefers-reduced-motion: no-preference){
    .dh-presence-portrait img{animation:dhPortrait .8s cubic-bezier(.2,.7,.2,1) both}
  }
  @keyframes dhPortrait{from{opacity:0;transform:scale(1.06)}to{opacity:1;transform:none}}
`);

/* CTA branca reutilizável (sobre indigo) */
const Dh2WhiteCta = ({
  label,
  onClick,
  className
}) => /*#__PURE__*/React.createElement("button", {
  className: 'dh-c-cta ' + (className || ''),
  onClick: onClick
}, label, /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.4",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("polyline", {
  points: "9 18 15 12 9 6"
})));

/* ════════════════════ CONCEITO E — Continuidade (conservador) ═════════
   A home retoma o fio da relação: o Dr. relembra o que disse da última
   vez e encadeia a recomendação de hoje como sequência natural. */
const ScreenDrE = ({
  setScreen
}) => {
  const [seg, setSeg] = useDhSegment();
  const d = DH_SEG[seg];
  const e = DH_SEG2[seg];
  return /*#__PURE__*/React.createElement("div", {
    className: "dh"
  }, /*#__PURE__*/React.createElement(DhStyles, null), /*#__PURE__*/React.createElement(Dh2Styles, null), /*#__PURE__*/React.createElement(DhSegBar, {
    seg: seg,
    onChange: setSeg
  }), /*#__PURE__*/React.createElement("div", {
    key: seg
  }, /*#__PURE__*/React.createElement("div", {
    className: "dh-anim"
  }, /*#__PURE__*/React.createElement(DhDrId, {
    photo: DR_HOME_PHOTO
  })), /*#__PURE__*/React.createElement("div", {
    className: "dh-callback dh-anim dh-anim-d1",
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dh-callback-av"
  }, /*#__PURE__*/React.createElement("img", {
    src: DR_HOME_PHOTO,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dh-callback-lbl"
  }, "Da \xFAltima vez"), /*#__PURE__*/React.createElement("div", {
    className: "dh-callback-txt"
  }, "\u201C", e.lastNote, "\u201D"))), /*#__PURE__*/React.createElement("p", {
    className: "dh-msg dh-anim dh-anim-d2"
  }, d.msg), /*#__PURE__*/React.createElement("div", {
    className: "dh-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dh-today-lbl dh-anim dh-anim-d2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons"
  }, "wb_sunny"), "Por isso, hoje"), /*#__PURE__*/React.createElement("div", {
    className: "dh-card dh-anim dh-anim-d3",
    role: "button",
    tabIndex: 0,
    onClick: () => dhGoPractice(d.type, setScreen),
    onKeyDown: ev => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        dhGoPractice(d.type, setScreen);
      }
    }
  }, /*#__PURE__*/React.createElement(DhTypeChip, {
    type: d.type
  }), /*#__PURE__*/React.createElement("h2", {
    className: "dh-card-title"
  }, d.recTitle), /*#__PURE__*/React.createElement("p", {
    className: "dh-card-why"
  }, "\u201C", d.why, "\u201D"), d.progress && /*#__PURE__*/React.createElement(DhProgress, d.progress), /*#__PURE__*/React.createElement("div", {
    className: "dh-card-foot"
  }, /*#__PURE__*/React.createElement(DhMeta, {
    items: d.meta
  }), /*#__PURE__*/React.createElement("span", {
    className: "cl-btn-primary"
  }, d.cta, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      marginLeft: 6
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })))))));
};
window.ScreenDrE = ScreenDrE;

/* ════════════════════ CONCEITO F — Pergunta do mentor (médio) ═════════
   O Dr. abre com a pergunta-foco do dia (enquadramento socrático) e, em
   seguida, oferece a recomendação como o caminho para respondê-la. */
const ScreenDrF = ({
  setScreen
}) => {
  const [seg, setSeg] = useDhSegment();
  const d = DH_SEG[seg];
  const e = DH_SEG2[seg];
  const revealed = useDhReveal(1100, seg);
  return /*#__PURE__*/React.createElement("div", {
    className: "dh"
  }, /*#__PURE__*/React.createElement(DhStyles, null), /*#__PURE__*/React.createElement(Dh2Styles, null), /*#__PURE__*/React.createElement(DhSegBar, {
    seg: seg,
    onChange: setSeg
  }), /*#__PURE__*/React.createElement("div", {
    key: seg
  }, /*#__PURE__*/React.createElement("div", {
    className: "dh-anim"
  }, /*#__PURE__*/React.createElement(DhDrId, {
    photo: DR_HOME_PHOTO
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dh-q-pre"
  }, "A pergunta de hoje"), /*#__PURE__*/React.createElement("p", {
    className: "dh-q"
  }, e.question)), revealed ? /*#__PURE__*/React.createElement("div", {
    style: {
      animation: 'dhFade .5s ease both',
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "dh-answer-pre"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons"
  }, "subdirectory_arrow_right"), "Para investigar isso, eu recomendo:"), /*#__PURE__*/React.createElement("div", {
    className: "dh-card",
    role: "button",
    tabIndex: 0,
    onClick: () => dhGoPractice(d.type, setScreen),
    onKeyDown: ev => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        dhGoPractice(d.type, setScreen);
      }
    }
  }, /*#__PURE__*/React.createElement(DhTypeChip, {
    type: d.type
  }), /*#__PURE__*/React.createElement("h2", {
    className: "dh-card-title"
  }, d.recTitle), /*#__PURE__*/React.createElement("p", {
    className: "dh-card-why"
  }, "\u201C", d.why, "\u201D"), d.progress && /*#__PURE__*/React.createElement(DhProgress, d.progress), /*#__PURE__*/React.createElement("div", {
    className: "dh-card-foot"
  }, /*#__PURE__*/React.createElement(DhMeta, {
    items: d.meta
  }), /*#__PURE__*/React.createElement("span", {
    className: "cl-btn-primary"
  }, d.cta, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      marginLeft: 6
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })))))) : /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dh-typing",
    "aria-label": "Dr. Rodrigues est\xE1 pensando"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)))));
};
window.ScreenDrF = ScreenDrF;

/* ════════════════════ CONCEITO G — Mapa de progresso vivo (ousado) ════
   O Dr. situa a recomendação dentro da trajetória de competências:
   "você está aqui → próximo". Marcador pulsante, leitura de dados. */
const ScreenDrG = ({
  setScreen
}) => {
  const [seg, setSeg] = useDhSegment();
  const d = DH_SEG[seg];
  const e = DH_SEG2[seg];
  const [pct, setPct] = React.useState(0);
  React.useEffect(() => {
    setPct(0);
    const t = setTimeout(() => setPct(e.journeyPct), 60);
    return () => clearTimeout(t);
  }, [seg]);
  return /*#__PURE__*/React.createElement("div", {
    className: "dh dh-wide"
  }, /*#__PURE__*/React.createElement(DhStyles, null), /*#__PURE__*/React.createElement(Dh2Styles, null), /*#__PURE__*/React.createElement(DhSegBar, {
    seg: seg,
    onChange: setSeg
  }), /*#__PURE__*/React.createElement("div", {
    key: seg
  }, /*#__PURE__*/React.createElement("div", {
    className: "dh-anim"
  }, /*#__PURE__*/React.createElement(DhDrId, {
    photo: DR_HOME_PHOTO
  })), /*#__PURE__*/React.createElement("p", {
    className: "dh-msg dh-anim dh-anim-d1"
  }, d.msg), /*#__PURE__*/React.createElement("div", {
    className: "dh-journey dh-anim dh-anim-d2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dh-journey-hd"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dh-journey-pos"
  }, e.journeyPos), /*#__PURE__*/React.createElement("span", {
    className: "dh-journey-pct"
  }, e.journeyPct, "% da jornada")), /*#__PURE__*/React.createElement("div", {
    className: "dh-track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dh-track-fill",
    style: {
      width: pct + '%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "dh-track-marker",
    style: {
      left: pct + '%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "dh-journey-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dh-journey-here"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons",
    style: {
      fontSize: 14
    }
  }, "place"), "Voc\xEA est\xE1 aqui"), /*#__PURE__*/React.createElement("span", {
    className: "dh-journey-next"
  }, "Pr\xF3ximo: ", e.journeyNext, /*#__PURE__*/React.createElement("span", {
    className: "material-icons"
  }, "arrow_forward")))), /*#__PURE__*/React.createElement("div", {
    className: "dh-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dh-card dh-anim dh-anim-d3",
    role: "button",
    tabIndex: 0,
    onClick: () => dhGoPractice(d.type, setScreen),
    onKeyDown: ev => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        dhGoPractice(d.type, setScreen);
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dh-recby"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dh-recby-av"
  }, /*#__PURE__*/React.createElement("img", {
    src: DR_HOME_PHOTO,
    alt: ""
  })), "Seu pr\xF3ximo passo, escolhido pelo Dr. Rodrigues"), /*#__PURE__*/React.createElement(DhTypeChip, {
    type: d.type
  }), /*#__PURE__*/React.createElement("h2", {
    className: "dh-card-title"
  }, d.recTitle), /*#__PURE__*/React.createElement("p", {
    className: "dh-card-why"
  }, "\u201C", d.why, "\u201D"), d.progress && /*#__PURE__*/React.createElement(DhProgress, d.progress), /*#__PURE__*/React.createElement("div", {
    className: "dh-card-foot"
  }, /*#__PURE__*/React.createElement(DhMeta, {
    items: d.meta
  }), /*#__PURE__*/React.createElement("span", {
    className: "cl-btn-primary"
  }, d.cta, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      marginLeft: 6
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })))))));
};
window.ScreenDrG = ScreenDrG;

/* ════════════════════ CONCEITO H — Mentor presente (mais ousado) ══════
   O mais imersivo: o Dr. "entra em cena" com retrato grande, indigo
   cinematográfico e uma saudação pessoal. Presença e relação acima de tudo. */
const ScreenDrH = ({
  setScreen
}) => {
  const [seg, setSeg] = useDhSegment();
  const d = DH_SEG[seg];
  const e = DH_SEG2[seg];
  return /*#__PURE__*/React.createElement("div", {
    className: "dh dh-wide"
  }, /*#__PURE__*/React.createElement(DhStyles, null), /*#__PURE__*/React.createElement(Dh2Styles, null), /*#__PURE__*/React.createElement(DhSegBar, {
    seg: seg,
    onChange: setSeg
  }), /*#__PURE__*/React.createElement("div", {
    key: seg,
    className: "dh-presence dh-anim"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dh-presence-glow",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dh-presence-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dh-presence-portrait"
  }, /*#__PURE__*/React.createElement("img", {
    src: DR_HOME_PHOTO,
    alt: "Dr. Rodrigues"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dh-presence-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dh-presence-name"
  }, "Dr. Rodrigues", /*#__PURE__*/React.createElement("span", {
    className: "dh-presence-role"
  }, "orientador \xB7 supervis\xE3o")), /*#__PURE__*/React.createElement("p", {
    className: "dh-presence-enter"
  }, e.enter), /*#__PURE__*/React.createElement("p", {
    className: "dh-presence-msg"
  }, d.msg), /*#__PURE__*/React.createElement("p", {
    className: "dh-presence-rec"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons",
    style: {
      fontSize: 17,
      color: 'var(--teal)'
    }
  }, d.type === 'caso' ? 'forum' : 'hearing'), "Hoje: ", /*#__PURE__*/React.createElement("b", null, d.recTitle), " \xB7 ", d.meta[0]), /*#__PURE__*/React.createElement(Dh2WhiteCta, {
    className: "dh-presence-cta",
    label: d.cta,
    onClick: () => dhGoPractice(d.type, setScreen)
  })))));
};
window.ScreenDrH = ScreenDrH;