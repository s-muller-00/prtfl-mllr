/* ════════════════════════════════════════════════════════════════════
   Home · Dr. Rodrigues como ORQUESTRADOR — 4 conceitos exploratórios
   Cada conceito é uma tela própria, com um seletor de SEGMENTO de aluno
   que mostra, ao vivo, como o Dr. adapta tom, urgência e recomendação.
   Espectro: A (conservador) → D (ousado).
   ════════════════════════════════════════════════════════════════════ */

const DR_HOME_PHOTO = window.__resources && window.__resources.drPhoto || 'avatars/avatar-dr.png';

/* ── Segmentos de aluno ───────────────────────────────────────────── */
const DH_SEGMENTS = [{
  id: 'primeiro',
  label: 'Primeiro acesso'
}, {
  id: 'recorrente',
  label: 'Recorrente'
}, {
  id: 'alto',
  label: 'Alto desempenho'
}, {
  id: 'dificuldade',
  label: 'Em dificuldade'
}, {
  id: 'desengajado',
  label: 'Desengajado'
}];

/* ── Conteúdo por segmento (compartilhado; cada conceito o enquadra) ── */
const DH_SEG = {
  primeiro: {
    state: 'Boas-vindas',
    analise: 'Preparando suas boas-vindas',
    msg: /*#__PURE__*/React.createElement(React.Fragment, null, "Ol\xE1, ", /*#__PURE__*/React.createElement("b", null, "Maria"), " \u2014 que bom ter voc\xEA aqui. Vamos sem pressa: hoje quero s\xF3 que voc\xEA sinta como \xE9 escutar com aten\xE7\xE3o. Sem nota, sem certo ou errado."),
    type: 'habilidade',
    recTitle: 'Reconhecer antes de devolver',
    why: 'Tudo começa pela escuta. É por aqui que quero ver você dar o primeiro passo.',
    meta: ['15 min', 'introdução guiada', 'sem avaliação'],
    cta: 'Começar minha primeira prática',
    progress: null,
    signals: [{
      kind: 'meta',
      text: 'Você acabou de chegar — começamos do princípio.'
    }, {
      kind: 'meta',
      text: 'Meta de hoje: sentir o ritmo de uma escuta atenta.'
    }],
    next: 'Depois desta, mostro como nomear o que o paciente sente.',
    plan: [{
      title: 'Reconhecer antes de devolver',
      note: 'Seu primeiro contato com a escuta — guiado, no seu tempo.',
      state: 'agora'
    }, {
      title: 'Nomear o que o paciente sente',
      note: 'Abro quando você se sentir à vontade.',
      state: 'depois'
    }]
  },
  recorrente: {
    state: 'Continuando',
    analise: 'Revendo onde você parou',
    msg: /*#__PURE__*/React.createElement(React.Fragment, null, "Ol\xE1 de novo, ", /*#__PURE__*/React.createElement("b", null, "Maria"), ". Voc\xEA parou na escuta na \xFAltima sess\xE3o e foi bem. Vamos retomar de onde paramos e fechar essa etapa hoje."),
    type: 'habilidade',
    recTitle: 'Reconhecer antes de devolver',
    why: 'Você vinha num bom ritmo aqui. Faltam poucas etapas para consolidar.',
    meta: ['40 min', '8 exercícios curtos', 'paciente novo a cada etapa'],
    cta: 'Continuar de onde parei',
    progress: {
      step: 3,
      total: 8
    },
    signals: [{
      kind: 'forca',
      text: 'Escuta: evoluiu em 3 das últimas 4 práticas.'
    }, {
      kind: 'lacuna',
      text: 'Devolutiva ainda hesitante em casos ambíguos.'
    }],
    next: 'Concluindo as 8 etapas, abro a devolutiva precisa para você.',
    plan: [{
      title: 'Reconhecer antes de devolver',
      note: 'Retome — etapa 3 de 8.',
      state: 'agora'
    }, {
      title: 'Devolver com precisão',
      note: 'Libera assim que você concluir esta.',
      state: 'depois'
    }]
  },
  alto: {
    state: 'Pronta para mais',
    analise: 'Calibrando um desafio à sua altura',
    msg: /*#__PURE__*/React.createElement(React.Fragment, null, "Maria, suas \xFAltimas pr\xE1ticas foram s\xF3lidas \u2014 escuta e devolutiva j\xE1 est\xE3o maduras. Acho que chegou a hora de juntar tudo: separei um caso completo para voc\xEA conduzir."),
    type: 'caso',
    recTitle: 'Conduza uma sessão completa',
    why: 'Você já domina as peças isoladas. O desafio agora é sustentar a relação do início ao fim.',
    meta: ['60 min', 'sessão completa', 'resposta livre'],
    cta: 'Aceitar o desafio',
    progress: null,
    signals: [{
      kind: 'forca',
      text: 'Escuta e devolutiva: acima da média da turma.'
    }, {
      kind: 'forca',
      text: 'Consistência: 9 práticas seguidas concluídas.'
    }],
    next: 'Se for bem, tenho um caso mais desafiador esperando.',
    plan: [{
      title: 'Conduzir sessão completa',
      note: 'Seu próximo salto — do acolhimento ao fechamento.',
      state: 'agora'
    }, {
      title: 'Caso com paciente resistente',
      note: 'Se quiser ir além ainda hoje.',
      state: 'depois'
    }]
  },
  dificuldade: {
    state: 'Vamos com calma',
    analise: 'Ajustando o passo de hoje',
    msg: /*#__PURE__*/React.createElement(React.Fragment, null, "Maria, percebi que as \xFAltimas devolutivas pesaram \u2014 e tudo bem. Vamos voltar um passo e refor\xE7ar a base, no seu tempo. Escolhi algo mais curto para hoje."),
    type: 'habilidade',
    recTitle: 'Escutar sem interromper',
    why: 'Antes de devolver, vamos firmar a escuta. É a base que destrava o resto.',
    meta: ['20 min', '3 exercícios', 'ritmo tranquilo'],
    cta: 'Praticar no meu tempo',
    progress: {
      step: 1,
      total: 3
    },
    signals: [{
      kind: 'lacuna',
      text: 'Devolutiva: 2 práticas abaixo do esperado.'
    }, {
      kind: 'forca',
      text: 'Persistência: você voltou mesmo após erros.'
    }],
    next: 'Com a escuta firme, voltamos juntos à devolutiva.',
    plan: [{
      title: 'Escutar sem interromper',
      note: 'Base reforçada, sem pressa e sem nota.',
      state: 'agora'
    }, {
      title: 'Voltar à devolutiva',
      note: 'Quando a base estiver firme.',
      state: 'depois'
    }]
  },
  desengajado: {
    state: 'Que bom ver você',
    analise: 'Preparando um reencontro leve',
    msg: /*#__PURE__*/React.createElement(React.Fragment, null, "Maria, senti sua falta por aqui. Sem cobran\xE7a \u2014 preparei algo curtinho para reaquecer. Cinco minutos e voc\xEA j\xE1 mata a saudade da pr\xE1tica."),
    type: 'habilidade',
    recTitle: 'Um aquecimento rápido',
    why: 'Não precisa ser grande. Um exercício curto para retomar o fio.',
    meta: ['5 min', '1 exercício', 'sem compromisso'],
    cta: 'Fazer um rápido agora',
    progress: null,
    signals: [{
      kind: 'lacuna',
      text: 'Última prática há 12 dias.'
    }, {
      kind: 'forca',
      text: 'Você já concluiu 14 práticas — não começa do zero.'
    }],
    next: 'Quando quiser, retomamos a escuta de onde você parou.',
    plan: [{
      title: 'Aquecimento rápido',
      note: '5 minutos só para retomar o fio.',
      state: 'agora'
    }, {
      title: 'Retomar a escuta',
      note: 'No seu ritmo, logo depois.',
      state: 'depois'
    }]
  }
};

/* ── Estilos (namespace .dh) ──────────────────────────────────────── */
const DhStyles = () => /*#__PURE__*/React.createElement("style", null, `
  .dh{max-width:760px;margin:0 auto;padding:28px 24px 72px;width:100%;box-sizing:border-box}
  .dh-wide{max-width:920px}
  .dh-recbar-wrap{position:sticky;top:0;z-index:5;background:var(--bg);padding-top:4px}
  .dh-segbar{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:26px;padding:10px 14px;background:var(--surface);border:1px dashed var(--border);border-radius:10px}
  .dh-segbar-lbl{font-family:var(--f-interface);font-size:10px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--text-3);display:flex;align-items:center;gap:6px}
  .dh-segbar-lbl .material-icons{font-size:14px;color:var(--teal-text)}
  .dh-segs{display:flex;gap:6px;flex-wrap:wrap}
  .dh-seg{font-family:var(--f-interface);font-size:12.5px;font-weight:600;padding:6px 12px;border-radius:999px;border:1px solid var(--border);background:var(--surface-raised);color:var(--text-2);cursor:pointer;transition:background .12s ease,border-color .12s ease,color .12s ease}
  .dh-seg:hover{border-color:var(--teal);color:var(--teal-text)}
  .dh-seg.on{background:var(--indigo);border-color:var(--indigo);color:#fff}

  .dh-dr{display:flex;align-items:center;gap:12px}
  .dh-dr-av{width:46px;height:46px;border-radius:50%;overflow:hidden;border:2px solid var(--border);flex-shrink:0}
  .dh-dr-av img{width:100%;height:100%;object-fit:cover;object-position:52% 20%}
  .dh-dr-name{font-family:var(--f-interface);font-size:15px;font-weight:700;color:var(--text-1);display:block;line-height:1.2}
  .dh-dr-role{font-family:var(--f-interface);font-size:12px;color:var(--text-3);letter-spacing:.03em}

  .dh-msg{font-family:var(--f-editorial);font-style:italic;font-size:18px;line-height:1.62;color:var(--text-1);margin:18px 0 0}
  .dh-msg b{font-style:normal;font-weight:600}

  .dh-card{background:var(--surface-raised);border:1px solid var(--border);border-radius:16px;padding:22px 24px;cursor:pointer;transition:border-color .12s ease,box-shadow .12s ease;text-align:left;width:100%;display:block;box-sizing:border-box;font:inherit}
  .dh-card:hover{border-color:var(--teal);box-shadow:0 2px 4px rgba(27,39,49,.10)}
  .dh-recby{display:flex;align-items:center;gap:8px;font-family:var(--f-interface);font-size:12.5px;font-weight:600;color:var(--text-2);margin-bottom:14px}
  .dh-recby-av{width:24px;height:24px;border-radius:50%;overflow:hidden;flex-shrink:0;border:1px solid var(--border)}
  .dh-recby-av img{width:100%;height:100%;object-fit:cover;object-position:52% 20%}
  .dh-card-tag{display:inline-flex;align-items:center;gap:6px;font-family:var(--f-interface);font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--teal-text)}
  .dh-card-tag .material-icons{font-size:14px}
  .dh-card-title{font-family:var(--f-interface);font-size:22px;font-weight:600;color:var(--text-1);margin:8px 0 0;line-height:1.25}
  .dh-card-why{font-family:var(--f-editorial);font-style:italic;font-size:15px;color:var(--text-2);line-height:1.55;margin:12px 0 0;padding-left:13px;border-left:2px solid rgba(0,172,180,.30)}
  .dh-card-meta{display:flex;align-items:center;gap:9px;flex-wrap:wrap;font-family:var(--f-interface);font-size:13px;color:var(--text-3);margin-top:16px}
  .dh-meta-dot{width:3px;height:3px;border-radius:50%;background:var(--text-3);opacity:.5}
  .dh-card-foot{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:20px;flex-wrap:wrap}

  .dh-prog{display:flex;align-items:center;gap:10px;margin-top:16px}
  .dh-dots{display:flex;gap:5px}
  .dh-dot{width:7px;height:7px;border-radius:50%;background:var(--border)}
  .dh-dot.on{background:var(--teal)}
  .dh-dot.cur{background:var(--indigo);box-shadow:0 0 0 3px rgba(0,172,180,.18)}
  .dh-prog-txt{font-family:var(--f-interface);font-size:12px;color:var(--text-3)}

  .dh-next{display:flex;align-items:flex-start;gap:8px;margin-top:20px;font-family:var(--f-interface);font-size:13px;color:var(--text-3);line-height:1.5}
  .dh-next .material-icons{font-size:16px;color:var(--teal-text);flex-shrink:0;margin-top:1px}

  .dh-divider{height:1px;background:var(--border-soft);margin:26px 0}

  /* Conceito B — leitura do mentor */
  .dh-b-grid{display:grid;grid-template-columns:1fr 296px;gap:26px;align-items:start}
  @media(max-width:840px){.dh-b-grid{grid-template-columns:1fr}}
  .dh-signals{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:18px 18px 8px}
  .dh-signals-hd{font-family:var(--f-interface);font-size:10.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--text-3);margin-bottom:6px;display:flex;align-items:center;gap:6px}
  .dh-signals-hd .material-icons{font-size:15px;color:var(--teal-text)}
  .dh-sig{display:flex;gap:11px;padding:13px 0;border-top:1px solid var(--border-soft)}
  .dh-sig:first-of-type{border-top:none}
  .dh-sig-ic{width:24px;height:24px;border-radius:7px;display:grid;place-items:center;flex-shrink:0}
  .dh-sig-ic .material-icons{font-size:15px}
  .dh-sig.forca .dh-sig-ic{background:var(--success-bg);color:var(--success)}
  .dh-sig.lacuna .dh-sig-ic{background:rgba(189,81,0,.09);color:var(--warning)}
  .dh-sig.meta .dh-sig-ic{background:rgba(0,172,180,.10);color:var(--teal-text)}
  .dh-sig-txt{font-family:var(--f-interface);font-size:13px;color:var(--text-2);line-height:1.45}

  /* Conceito C — sessão de orientação (imersivo) */
  .dh-c-hero{background:var(--indigo);border-radius:20px;padding:38px 40px 34px;position:relative;overflow:hidden}
  .dh-c-glow{position:absolute;top:-80px;right:-60px;width:280px;height:280px;border-radius:50%;background:radial-gradient(circle,rgba(0,172,180,.22),transparent 68%);pointer-events:none}
  .dh-c-top{display:flex;align-items:center;gap:14px;position:relative}
  .dh-c-av{width:60px;height:60px;border-radius:50%;overflow:hidden;border:2px solid rgba(255,255,255,.22);flex-shrink:0}
  .dh-c-av img{width:100%;height:100%;object-fit:cover;object-position:52% 20%}
  .dh-c-name{font-family:var(--f-interface);font-size:16px;font-weight:700;color:#fff;line-height:1.2}
  .dh-c-role{font-family:var(--f-interface);font-size:12px;color:rgba(255,255,255,.6);letter-spacing:.03em}
  .dh-c-state{margin-left:auto;display:inline-flex;align-items:center;gap:7px;font-family:var(--f-interface);font-size:11.5px;font-weight:600;letter-spacing:.03em;color:rgba(255,255,255,.82);background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:999px;padding:5px 12px;white-space:nowrap}
  .dh-c-state-dot{width:6px;height:6px;border-radius:50%;background:var(--teal);box-shadow:0 0 0 3px rgba(0,172,180,.3)}
  .dh-c-msg{font-family:var(--f-editorial);font-style:italic;font-size:24px;line-height:1.55;color:#fff;margin:24px 0 0;max-width:30em;position:relative}
  .dh-c-rec{display:flex;align-items:center;justify-content:space-between;gap:22px;margin-top:26px;padding-top:24px;border-top:1px solid rgba(255,255,255,.15);flex-wrap:wrap;position:relative}
  .dh-c-rec-tag{display:inline-flex;align-items:center;gap:6px;font-family:var(--f-interface);font-size:10.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--teal)}
  .dh-c-rec-title{font-family:var(--f-interface);font-size:19px;font-weight:600;color:#fff;margin-top:6px}
  .dh-c-rec-meta{font-family:var(--f-interface);font-size:12.5px;color:rgba(255,255,255,.6);margin-top:7px;display:flex;gap:9px;align-items:center;flex-wrap:wrap}
  .dh-c-rec-meta .dh-meta-dot{background:rgba(255,255,255,.6)}
  .dh-c-cta{display:inline-flex;align-items:center;gap:7px;background:#fff;color:var(--indigo);border:none;border-radius:8px;font-family:var(--f-interface);font-size:14px;font-weight:700;padding:12px 20px;cursor:pointer;transition:background .12s ease;white-space:nowrap}
  .dh-c-cta:hover{background:#eef1f4}
  .dh-c-foot{display:flex;align-items:flex-start;gap:8px;margin-top:22px;font-family:var(--f-interface);font-size:13px;color:var(--text-3);line-height:1.5}
  .dh-c-foot .material-icons{font-size:16px;color:var(--teal-text);flex-shrink:0;margin-top:1px}

  /* Conceito D — plano guiado */
  .dh-d-intro{display:flex;align-items:center;gap:13px;margin-bottom:6px}
  .dh-d-plan{margin-top:22px}
  .dh-d-step{display:flex;gap:16px}
  .dh-d-rail{display:flex;flex-direction:column;align-items:center;flex-shrink:0;width:30px}
  .dh-d-node{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;flex-shrink:0}
  .dh-d-node .material-icons{font-size:16px}
  .dh-d-node.agora{background:var(--indigo);color:#fff}
  .dh-d-node.depois{background:var(--surface);border:2px solid var(--border);color:var(--text-3)}
  .dh-d-line{flex:1;width:2px;background:var(--border);margin:4px 0}
  .dh-d-body{flex:1;min-width:0;padding-bottom:24px}
  .dh-d-card{border-radius:14px;padding:18px 20px;box-sizing:border-box;text-align:left;width:100%;font:inherit}
  .dh-d-card.agora{background:var(--surface-raised);border:1px solid var(--indigo);cursor:pointer;transition:box-shadow .12s ease}
  .dh-d-card.agora:hover{box-shadow:0 2px 8px rgba(21,25,58,.12)}
  .dh-d-card.depois{background:var(--surface);border:1px dashed var(--border)}
  .dh-d-eyebrow{font-family:var(--f-interface);font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--teal-text)}
  .dh-d-card.depois .dh-d-eyebrow{color:var(--text-3)}
  .dh-d-title{font-family:var(--f-interface);font-size:18px;font-weight:600;color:var(--text-1);margin:6px 0 0;line-height:1.25}
  .dh-d-card.depois .dh-d-title{color:var(--text-2)}
  .dh-d-annot{display:flex;align-items:flex-start;gap:9px;margin-top:12px}
  .dh-d-annot-av{width:22px;height:22px;border-radius:50%;overflow:hidden;flex-shrink:0;border:1px solid var(--border);margin-top:1px}
  .dh-d-annot-av img{width:100%;height:100%;object-fit:cover;object-position:52% 20%}
  .dh-d-annot-txt{font-family:var(--f-editorial);font-style:italic;font-size:14px;color:var(--text-2);line-height:1.5}
  .dh-d-foot{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-top:16px;flex-wrap:wrap}
  .dh-d-meta{font-family:var(--f-interface);font-size:12.5px;color:var(--text-3);display:flex;gap:9px;align-items:center;flex-wrap:wrap}

  /* Reveal / entrada — calmo, sem bounce */
  .dh-typing{display:inline-flex;gap:5px;align-items:center;padding:6px 0}
  .dh-typing span{width:7px;height:7px;border-radius:50%;background:var(--neutral);opacity:.65}
  @keyframes dhRise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
  @keyframes dhFade{from{opacity:0}to{opacity:1}}
  @keyframes dhDot{0%,80%,100%{opacity:.3;transform:translateY(0)}40%{opacity:.9;transform:translateY(-3px)}}
  @media (prefers-reduced-motion: no-preference){
    .dh-anim{animation:dhRise .5s cubic-bezier(.2,.7,.2,1) both}
    .dh-anim-d1{animation-delay:.07s}
    .dh-anim-d2{animation-delay:.15s}
    .dh-anim-d3{animation-delay:.24s}
    .dh-anim-d4{animation-delay:.33s}
    .dh-typing span{animation:dhDot 1.1s infinite ease-in-out}
    .dh-typing span:nth-child(2){animation-delay:.16s}
    .dh-typing span:nth-child(3){animation-delay:.32s}
  }
`);

/* ── Hooks utilitários ────────────────────────────────────────────── */
const dhPrefersMotion = () => {
  try {
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (e) {
    return true;
  }
};
function useDhSegment() {
  const [seg, setSeg] = React.useState(() => {
    try {
      return localStorage.getItem('cl_dr_segment') || 'recorrente';
    } catch (e) {
      return 'recorrente';
    }
  });
  const change = id => {
    setSeg(id);
    try {
      localStorage.setItem('cl_dr_segment', id);
    } catch (e) {}
  };
  return [seg, change];
}
/* Revela após `delay` ms; pula direto se reduced-motion. Reinicia quando `dep` muda. */
function useDhReveal(delay, dep) {
  const [on, setOn] = React.useState(() => !dhPrefersMotion());
  React.useEffect(() => {
    if (!dhPrefersMotion()) {
      setOn(true);
      return;
    }
    setOn(false);
    const t = setTimeout(() => setOn(true), delay);
    return () => clearTimeout(t);
  }, [dep]);
  return on;
}

/* ── Barra de seleção de segmento (controle de pesquisa) ──────────── */
const DhSegBar = ({
  seg,
  onChange
}) => /*#__PURE__*/React.createElement("div", {
  className: "dh-segbar",
  role: "group",
  "aria-label": "Segmento de aluno (controle de pesquisa)"
}, /*#__PURE__*/React.createElement("span", {
  className: "dh-segbar-lbl"
}, /*#__PURE__*/React.createElement("span", {
  className: "material-icons"
}, "science"), "Segmento do aluno"), /*#__PURE__*/React.createElement("div", {
  className: "dh-segs"
}, DH_SEGMENTS.map(s => /*#__PURE__*/React.createElement("button", {
  key: s.id,
  className: 'dh-seg' + (seg === s.id ? ' on' : ''),
  "aria-pressed": seg === s.id,
  onClick: () => onChange(s.id)
}, s.label))));
const DhDrId = ({
  photo
}) => /*#__PURE__*/React.createElement("div", {
  className: "dh-dr"
}, /*#__PURE__*/React.createElement("span", {
  className: "dh-dr-av"
}, /*#__PURE__*/React.createElement("img", {
  src: photo,
  alt: "Dr. Rodrigues"
})), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
  className: "dh-dr-name"
}, "Dr. Rodrigues"), /*#__PURE__*/React.createElement("span", {
  className: "dh-dr-role"
}, "orientador \xB7 supervis\xE3o")));
const DhMeta = ({
  items,
  cls
}) => /*#__PURE__*/React.createElement("span", {
  className: cls || 'dh-card-meta'
}, items.map((m, i) => /*#__PURE__*/React.createElement(React.Fragment, {
  key: i
}, i > 0 && /*#__PURE__*/React.createElement("span", {
  className: "dh-meta-dot"
}), /*#__PURE__*/React.createElement("span", null, m))));
const DhProgress = ({
  step,
  total
}) => /*#__PURE__*/React.createElement("div", {
  className: "dh-prog"
}, /*#__PURE__*/React.createElement("div", {
  className: "dh-dots"
}, Array.from({
  length: total
}).map((_, i) => {
  const n = i + 1;
  return /*#__PURE__*/React.createElement("span", {
    key: n,
    className: 'dh-dot' + (n < step ? ' on' : n === step ? ' cur' : '')
  });
})), /*#__PURE__*/React.createElement("span", {
  className: "dh-prog-txt"
}, "etapa ", step, " de ", total));
const DhTypeChip = ({
  type
}) => /*#__PURE__*/React.createElement("span", {
  className: "dh-card-tag"
}, /*#__PURE__*/React.createElement("span", {
  className: "material-icons"
}, type === 'caso' ? 'forum' : 'hearing'), type === 'caso' ? 'Condução de caso' : 'Prática · habilidade');

/* Navegação para a prática */
const dhGoPractice = (type, setScreen) => {
  if (window.__enterRoom) window.__enterRoom('Entrando na sala…');
  setScreen(type === 'caso' ? 'briefing' : 'sessao');
};

/* ════════════════════ CONCEITO A — Próximo passo (conservador) ════════
   Refinamento do padrão atual: saudação compacta + UM card recomendado.
   Lógica push: o Dr. fala em 1ª pessoa e já entrega a recomendação. */
const ScreenDrA = ({
  setScreen
}) => {
  const [seg, setSeg] = useDhSegment();
  const d = DH_SEG[seg];
  return /*#__PURE__*/React.createElement("div", {
    className: "dh"
  }, /*#__PURE__*/React.createElement(DhStyles, null), /*#__PURE__*/React.createElement(DhSegBar, {
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
    className: "dh-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dh-card dh-anim dh-anim-d2",
    role: "button",
    tabIndex: 0,
    onClick: () => dhGoPractice(d.type, setScreen),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
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
  })), "Escolhido pelo Dr. Rodrigues para voc\xEA"), /*#__PURE__*/React.createElement(DhTypeChip, {
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
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "dh-next dh-anim dh-anim-d3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons"
  }, "arrow_forward"), /*#__PURE__*/React.createElement("span", null, d.next))));
};
window.ScreenDrA = ScreenDrA;

/* ════════════════════ CONCEITO B — Leitura do mentor (médio) ══════════
   O Dr. mostra que LÊ os dados do aluno: a recomendação vem acompanhada
   de "o que eu observei" (forças/lacunas) que a justificam. */
const ScreenDrB = ({
  setScreen
}) => {
  const [seg, setSeg] = useDhSegment();
  const d = DH_SEG[seg];
  const revealed = useDhReveal(850, seg);
  return /*#__PURE__*/React.createElement("div", {
    className: "dh dh-wide"
  }, /*#__PURE__*/React.createElement(DhStyles, null), /*#__PURE__*/React.createElement(DhSegBar, {
    seg: seg,
    onChange: setSeg
  }), /*#__PURE__*/React.createElement("div", {
    key: seg,
    className: "dh-b-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dh-anim"
  }, /*#__PURE__*/React.createElement(DhDrId, {
    photo: DR_HOME_PHOTO
  })), revealed ? /*#__PURE__*/React.createElement("p", {
    className: "dh-msg",
    style: {
      animation: 'dhFade .4s ease both'
    }
  }, d.msg) : /*#__PURE__*/React.createElement("div", {
    className: "dh-msg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dh-typing",
    "aria-label": d.analise
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))), /*#__PURE__*/React.createElement("div", {
    className: "dh-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dh-card dh-anim dh-anim-d1",
    role: "button",
    tabIndex: 0,
    onClick: () => dhGoPractice(d.type, setScreen),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
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
  })))))), /*#__PURE__*/React.createElement("aside", {
    className: "dh-signals dh-anim dh-anim-d2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dh-signals-hd"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons"
  }, "insights"), "O que eu observei"), d.signals.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: 'dh-sig ' + s.kind
  }, /*#__PURE__*/React.createElement("span", {
    className: "dh-sig-ic"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons"
  }, s.kind === 'forca' ? 'trending_up' : s.kind === 'lacuna' ? 'priority_high' : 'flag')), /*#__PURE__*/React.createElement("span", {
    className: "dh-sig-txt"
  }, s.text))))));
};
window.ScreenDrB = ScreenDrB;

/* ════════════════════ CONCEITO C — Sessão de orientação (imersivo) ════
   Hero indigo full-card, Dr. em destaque. Estado do mentor transita de
   "analisando" → "recomendação". Uma mensagem orquestrada, uma ação. */
const ScreenDrC = ({
  setScreen
}) => {
  const [seg, setSeg] = useDhSegment();
  const d = DH_SEG[seg];
  const revealed = useDhReveal(950, seg);
  return /*#__PURE__*/React.createElement("div", {
    className: "dh dh-wide"
  }, /*#__PURE__*/React.createElement(DhStyles, null), /*#__PURE__*/React.createElement(DhSegBar, {
    seg: seg,
    onChange: setSeg
  }), /*#__PURE__*/React.createElement("div", {
    key: seg,
    className: "dh-c-hero dh-anim"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dh-c-glow",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dh-c-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dh-c-av"
  }, /*#__PURE__*/React.createElement("img", {
    src: DR_HOME_PHOTO,
    alt: "Dr. Rodrigues"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dh-c-name"
  }, "Dr. Rodrigues"), /*#__PURE__*/React.createElement("div", {
    className: "dh-c-role"
  }, "orientador \xB7 supervis\xE3o")), /*#__PURE__*/React.createElement("span", {
    className: "dh-c-state"
  }, revealed ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "dh-c-state-dot"
  }), d.state) : /*#__PURE__*/React.createElement("span", {
    className: "dh-typing",
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)))), revealed ? /*#__PURE__*/React.createElement("div", {
    style: {
      animation: 'dhFade .45s ease both'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "dh-c-msg"
  }, d.msg), /*#__PURE__*/React.createElement("div", {
    className: "dh-c-rec"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dh-c-rec-tag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons",
    style: {
      fontSize: 13
    }
  }, d.type === 'caso' ? 'forum' : 'hearing'), d.type === 'caso' ? 'Condução de caso' : 'Prática · habilidade'), /*#__PURE__*/React.createElement("div", {
    className: "dh-c-rec-title"
  }, d.recTitle), /*#__PURE__*/React.createElement(DhMeta, {
    items: d.meta,
    cls: "dh-c-rec-meta"
  })), /*#__PURE__*/React.createElement("button", {
    className: "dh-c-cta",
    onClick: () => dhGoPractice(d.type, setScreen)
  }, d.cta, /*#__PURE__*/React.createElement("svg", {
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
  }))))) : /*#__PURE__*/React.createElement("p", {
    className: "dh-c-msg",
    style: {
      color: 'rgba(255,255,255,.6)'
    }
  }, d.analise, "\u2026")), /*#__PURE__*/React.createElement("div", {
    className: "dh-c-foot dh-anim dh-anim-d2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons"
  }, "arrow_forward"), /*#__PURE__*/React.createElement("span", null, d.next)));
};
window.ScreenDrC = ScreenDrC;

/* ════════════════════ CONCEITO D — Plano do dia (ousado) ══════════════
   O Dr. orquestra uma SEQUÊNCIA: o passo de agora + o que vem depois
   (bloqueado/preview), cada um anotado por ele. Reforça continuidade. */
const ScreenDrD = ({
  setScreen
}) => {
  const [seg, setSeg] = useDhSegment();
  const d = DH_SEG[seg];
  return /*#__PURE__*/React.createElement("div", {
    className: "dh"
  }, /*#__PURE__*/React.createElement(DhStyles, null), /*#__PURE__*/React.createElement(DhSegBar, {
    seg: seg,
    onChange: setSeg
  }), /*#__PURE__*/React.createElement("div", {
    key: seg
  }, /*#__PURE__*/React.createElement("div", {
    className: "dh-d-intro dh-anim"
  }, /*#__PURE__*/React.createElement(DhDrId, {
    photo: DR_HOME_PHOTO
  })), /*#__PURE__*/React.createElement("p", {
    className: "dh-msg dh-anim dh-anim-d1",
    style: {
      marginTop: 14
    }
  }, d.msg), /*#__PURE__*/React.createElement("div", {
    className: "dh-d-plan"
  }, d.plan.map((p, i) => {
    const isNow = p.state === 'agora';
    const isLast = i === d.plan.length - 1;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: 'dh-d-step dh-anim ' + (i === 0 ? 'dh-anim-d2' : 'dh-anim-d3')
    }, /*#__PURE__*/React.createElement("div", {
      className: "dh-d-rail"
    }, /*#__PURE__*/React.createElement("span", {
      className: 'dh-d-node ' + p.state
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-icons"
    }, isNow ? d.type === 'caso' ? 'forum' : 'hearing' : 'lock')), !isLast && /*#__PURE__*/React.createElement("span", {
      className: "dh-d-line"
    })), /*#__PURE__*/React.createElement("div", {
      className: "dh-d-body"
    }, isNow ? /*#__PURE__*/React.createElement("div", {
      className: "dh-d-card agora",
      role: "button",
      tabIndex: 0,
      onClick: () => dhGoPractice(d.type, setScreen),
      onKeyDown: e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          dhGoPractice(d.type, setScreen);
        }
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "dh-d-eyebrow"
    }, "Agora \xB7 recomendado para voc\xEA"), /*#__PURE__*/React.createElement("h3", {
      className: "dh-d-title"
    }, p.title), /*#__PURE__*/React.createElement("div", {
      className: "dh-d-annot"
    }, /*#__PURE__*/React.createElement("span", {
      className: "dh-d-annot-av"
    }, /*#__PURE__*/React.createElement("img", {
      src: DR_HOME_PHOTO,
      alt: ""
    })), /*#__PURE__*/React.createElement("span", {
      className: "dh-d-annot-txt"
    }, "\u201C", p.note, "\u201D")), d.progress && /*#__PURE__*/React.createElement(DhProgress, d.progress), /*#__PURE__*/React.createElement("div", {
      className: "dh-d-foot"
    }, /*#__PURE__*/React.createElement(DhMeta, {
      items: d.meta,
      cls: "dh-d-meta"
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
    }))))) : /*#__PURE__*/React.createElement("div", {
      className: "dh-d-card depois"
    }, /*#__PURE__*/React.createElement("span", {
      className: "dh-d-eyebrow"
    }, "Depois"), /*#__PURE__*/React.createElement("h3", {
      className: "dh-d-title"
    }, p.title), /*#__PURE__*/React.createElement("div", {
      className: "dh-d-annot"
    }, /*#__PURE__*/React.createElement("span", {
      className: "dh-d-annot-av"
    }, /*#__PURE__*/React.createElement("img", {
      src: DR_HOME_PHOTO,
      alt: ""
    })), /*#__PURE__*/React.createElement("span", {
      className: "dh-d-annot-txt"
    }, "\u201C", p.note, "\u201D")))));
  }))));
};
window.ScreenDrD = ScreenDrD;