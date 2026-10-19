/* ════════════════════════════════════════════════════════════════════
   Análise da sessão (debrief S1) — 4 variações VISUAIS
   Mesmo conteúdo/funcionalidade, tratamentos distintos de layout,
   paleta, tipografia e componentes. Todas responsivas (desktop+mobile).
   V1 Relatório editorial · V2 Painel de métricas · V3 Cascata vertical
   · V4 Imersivo (hero escuro).
   ════════════════════════════════════════════════════════════════════ */

const AV_PHOTO = window.__resources && window.__resources.sofiaPhoto || 'avatars/sofia.webp';
const AV_NAME = typeof SOFIA !== 'undefined' && SOFIA.nome || 'Sofia';
const AV_AGE = typeof SOFIA !== 'undefined' && SOFIA.idade || 27;

/* ── Dados da análise (S1) ────────────────────────────────────────── */
const AV_DATA = {
  sessionTag: 'Sessão 1',
  sessionNum: 1,
  nextNum: 2,
  elapsed: '47:20',
  turnsCount: 9,
  patientSub: 'Primeira sessão · ID 89429-A',
  sintese: /*#__PURE__*/React.createElement(React.Fragment, null, "Sofia chegou com queixa estruturada \u2014 s\xEDndrome do p\xE2nico h\xE1 quatro meses, doze crises, abandono progressivo de espa\xE7os. O dado biogr\xE1fico central emergiu na sess\xE3o: a separa\xE7\xE3o em fevereiro, tr\xEAs dias antes da primeira crise. Ela trouxe um marcador de risco \u2014 ", /*#__PURE__*/React.createElement("span", {
    className: "av-risk"
  }, "\u201Cj\xE1 pensei que seria mais f\xE1cil n\xE3o estar aqui\u201D"), " \u2014 e encerrou com \u201Cme sinto um pouco vista\u201D."),
  dims: [{
    label: 'Construção de aliança',
    value: 'consistente',
    nota: 'Aliança consolidada',
    texto: 'A aliança se construiu de forma sólida. Sofia encerrou com a postura mais aberta do que entrou. O que sustentou isso foi a qualidade das intervenções: abertas, conectadas ao que ela acabou de dizer, sem saltos para conselhos prematuros.'
  }, {
    label: 'Cobertura dos eixos',
    value: 'regular',
    nota: 'Cobertura parcial',
    texto: 'Precipitantes e predisponentes foram cobertos com boa profundidade. Os mantenedores ficaram parciais: a dinâmica de evitação foi levantada no turno 6, mas o mecanismo de hipervigilância não foi explorado. Vale retomar no início de S2.'
  }, {
    label: 'Investigação de risco',
    value: 'consistente',
    nota: 'Risco investigado',
    texto: 'No turno 8, você identificou e investigou diretamente o dado de risco. Sofia respondeu com alívio: “ninguém nunca havia perguntado diretamente.” A resposta confirmou ideação passiva, sem risco ativo neste momento.'
  }],
  nota: {
    label: 'Momento de aliança',
    text: 'Ninguém nunca havia me perguntado isso diretamente. Me sinto um pouco vista.'
  },
  focusTxt: 'Retome os mantenedores em S2 — a hipervigilância ainda não foi mapeada.',
  nextSteps: [{
    step: 'Abertura',
    tag: 'aliança',
    text: /*#__PURE__*/React.createElement(React.Fragment, null, "Pergunte o que ficou com Sofia antes de retomar qualquer coleta de dados.")
  }, {
    step: 'Aprofundamento',
    tag: 'lacuna identificada',
    text: /*#__PURE__*/React.createElement(React.Fragment, null, "Mapeie os mantenedores \u2014 ", /*#__PURE__*/React.createElement("strong", null, "a hipervigil\xE2ncia ainda n\xE3o foi explorada."))
  }, {
    step: 'Vínculo',
    tag: 'dado de sessão',
    text: /*#__PURE__*/React.createElement(React.Fragment, null, "Nomeie que Sofia disse que se sentiu \u201Cvista\u201D. Use esse dado de alian\xE7a.")
  }, {
    step: 'Transição',
    tag: 'próxima fase',
    text: /*#__PURE__*/React.createElement(React.Fragment, null, "Com os eixos cobertos, iniciar a transi\xE7\xE3o para formula\xE7\xE3o de caso (M2).")
  }],
  metrics: [{
    lbl: 'Duração',
    val: '47:20',
    sub: '9 turnos'
  }, {
    lbl: 'Progresso',
    val: '1/3',
    sub: 'sessões'
  }, {
    lbl: 'Risco',
    val: 'Passiva',
    sub: 'sem risco ativo'
  }, {
    lbl: 'Dimensões',
    val: '2/3',
    sub: 'consistentes'
  }],
  transcript: [{
    who: 'p',
    ts: '00:12',
    nv: 'Fala rápido, mãos entrelaçadas no colo',
    text: 'Faz uns quatro meses que começou. A primeira crise veio do nada, eu achei que estava enfartando, fui parar no pronto-socorro.'
  }, {
    who: 't',
    turn: 1,
    ts: '00:51',
    text: 'Que susto. E desde essa primeira vez, como têm sido as crises?'
  }, {
    who: 'p',
    ts: '01:20',
    text: 'Já foram umas doze. O coração dispara, falta ar, tudo fica meio irreal. Agora vivo com medo de que venha outra.'
  }, {
    who: 't',
    turn: 2,
    ts: '02:05',
    text: 'Esse medo de que venha outra, ele tem mudado alguma coisa no seu dia a dia?'
  }, {
    who: 'p',
    ts: '02:30',
    text: 'Mudou tudo. Parei de pegar metrô, evito shopping, lugar cheio. Semana passada deixei de ir num aniversário que eu queria muito.'
  }, {
    who: 't',
    turn: 3,
    ts: '03:18',
    text: 'Então os espaços foram encolhendo aos poucos.'
  }, {
    who: 'p',
    ts: '03:40',
    text: 'Exatamente. Minha vida foi ficando pequena. E eu tenho vergonha disso.'
  }, {
    who: 't',
    turn: 4,
    ts: '04:25',
    text: 'Você falou que a primeira crise foi em fevereiro. O que estava acontecendo na sua vida naquela época?',
    mark: 'Dado biográfico central'
  }, {
    who: 'p',
    ts: '05:02',
    nv: 'Pausa longa, olhar baixo',
    text: 'Eu tinha acabado de terminar um relacionamento. Três dias antes da primeira crise, na verdade. Nunca tinha ligado uma coisa à outra.'
  }, {
    who: 't',
    turn: 5,
    ts: '05:55',
    text: 'Três dias antes. O que esse término significou pra você?'
  }, {
    who: 'p',
    ts: '06:30',
    text: 'A gente estava junto há seis anos. Eu me sinto culpada, porque no fundo fui eu que empurrei ele pra ir embora.'
  }, {
    who: 't',
    turn: 6,
    ts: '07:40',
    text: 'E hoje, quando você evita esses lugares, o que passa pela sua cabeça antes?'
  }, {
    who: 'p',
    ts: '08:10',
    text: 'Que, se eu passar mal ali sozinha, ninguém vai me ajudar. Aí nem chego perto.'
  }, {
    who: 't',
    turn: 7,
    ts: '09:05',
    text: 'Quem está por perto de você nesse período?'
  }, {
    who: 'p',
    ts: '09:28',
    text: 'Minha irmã, mas mora longe. No dia a dia eu tenho ficado bastante sozinha.'
  }, {
    who: 't',
    turn: 8,
    ts: '10:15',
    text: 'Sofia, preciso te perguntar algo diretamente. Nesses momentos mais difíceis, você chegou a pensar em não querer mais estar aqui?',
    mark: 'Investigação de risco',
    markRisk: 'risk'
  }, {
    who: 'p',
    ts: '10:50',
    nv: 'Voz baixa, depois alívio',
    text: 'Já pensei que seria mais fácil não estar aqui. Mas eu nunca faria nada. Ninguém nunca tinha me perguntado isso diretamente.'
  }, {
    who: 't',
    turn: 9,
    ts: '11:48',
    text: 'Obrigada por confiar isso a mim. A gente vai cuidar disso junto.'
  }, {
    who: 'p',
    ts: '12:10',
    text: 'Me sinto um pouco vista agora. Faz tempo que eu não falava disso em voz alta.'
  }],
  pront: [{
    h: 'Queixa principal',
    body: 'Crises de pânico recorrentes há quatro meses (≈ doze episódios), com esquiva progressiva de espaços públicos, transporte, locais cheios e eventos sociais.'
  }, {
    h: 'Histórico da sessão',
    body: 'Primeira consulta. Sofia, 27 anos. Chega com quadro estruturado, início súbito em fevereiro e impacto funcional crescente, com retração da vida social e vergonha associada.'
  }, {
    h: 'Fatores precipitantes e mantenedores',
    body: 'Precipitante identificado: término de relacionamento de seis anos, três dias antes da primeira crise. Mantenedor central: esquiva fóbica reforçada por antecipação catastrófica. Hipervigilância ainda a investigar em S2.'
  }, {
    h: 'Hipótese diagnóstica',
    body: 'Transtorno de pânico com esquiva agorafóbica (a confirmar). Componente de luto e culpa relacionado ao término do relacionamento.'
  }, {
    h: 'Avaliação de risco',
    risco: true,
    nivel: 'Ideação passiva, sem risco ativo',
    body: 'Relata pensamento passivo de morte (“seria mais fácil não estar aqui”), sem plano, método ou intenção. Nega tentativas. Fatores de proteção: vínculo com a irmã, busca de ajuda e aliança terapêutica.'
  }, {
    h: 'Plano terapêutico',
    body: 'Retomar os mantenedores no início da S2, mapeando a hipervigilância. Iniciar transição para a formulação de caso (M2). Monitorar risco a cada sessão.'
  }]
};
const avState = v => ({
  consistente: {
    label: 'Consistente',
    clr: '#00734a',
    bg: 'rgba(0,135,83,.10)',
    bd: 'rgba(0,135,83,.30)',
    bar: '#008753',
    ico: 'check_circle'
  },
  regular: {
    label: 'Regular',
    clr: '#8a5a00',
    bg: 'rgba(185,130,30,.12)',
    bd: 'rgba(185,130,30,.34)',
    bar: '#C97D00',
    ico: 'warning_amber'
  },
  'frágil': {
    label: 'Frágil',
    clr: '#a3071f',
    bg: 'rgba(171,2,31,.09)',
    bd: 'rgba(171,2,31,.28)',
    bar: '#ab021f',
    ico: 'error_outline'
  }
})[v];

/* ── Estilos compartilhados (chrome de variações + abas + transcrição + prontuário) ── */
const AvSharedStyles = () => /*#__PURE__*/React.createElement("style", null, `
  .av-root{height:100%;overflow-y:auto;background:var(--av-bg);color:var(--av-text);font-family:var(--f-interface)}
  .av-wrap{max-width:var(--av-max,1080px);margin:0 auto;padding:var(--av-pad,32px 36px 72px);box-sizing:border-box}
  .av-risk{background:rgba(171,2,31,.09);color:#a3071f;border-radius:4px;padding:0 6px;font-weight:600}
  /* abas */
  .av-tabs{display:flex;gap:4px;flex-wrap:wrap}
  .av-tab{background:none;border:none;cursor:pointer;font-family:var(--f-interface);font-size:13.5px;font-weight:600;color:var(--av-text-3);padding:8px 14px;border-radius:8px;transition:background .12s,color .12s}
  .av-tab:hover{color:var(--av-text)}
  .av-tab.on{color:#fff;background:var(--av-accent)}
  /* transcrição (temática) */
  .avt{display:flex;flex-direction:column;gap:16px;max-width:760px}
  .avt-meta{font-size:12.5px;color:var(--av-text-3);display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:4px}
  .avt-meta .sep{width:3px;height:3px;border-radius:50%;background:var(--av-border)}
  .avt-msg{display:flex;flex-direction:column;gap:4px;max-width:84%}
  .avt-msg.p{align-self:flex-start}
  .avt-msg.t{align-self:flex-end;align-items:flex-end}
  .avt-mhd{display:flex;align-items:center;gap:8px;font-size:11.5px;color:var(--av-text-3)}
  .avt-mhd b{color:var(--av-text-2)}
  .avt-msg.t .avt-mhd b{color:var(--av-accent)}
  .avt-turn{background:var(--av-accent-bg);color:var(--av-accent);border-radius:4px;padding:1px 7px;font-weight:700;font-size:10.5px}
  .avt-nv{font-size:12.5px;color:var(--av-text-3);font-style:italic}
  .avt-bub{padding:11px 15px;border-radius:16px;font-size:14px;line-height:1.6;color:var(--av-text)}
  .avt-msg.p .avt-bub{background:var(--av-surface);border:1px solid var(--av-border);border-top-left-radius:4px}
  .avt-msg.t .avt-bub{background:var(--av-accent-bg);border:1px solid var(--av-border);border-top-right-radius:4px}
  .avt-mark{display:inline-flex;align-items:center;gap:5px;font-size:10.5px;font-weight:700;color:var(--av-accent);background:var(--av-accent-bg);border:1px solid var(--av-border);border-radius:999px;padding:2px 9px}
  .avt-mark.risk{color:#a3071f;background:rgba(171,2,31,.09);border-color:rgba(171,2,31,.28)}
  /* prontuário (temático) */
  .avp{max-width:780px;background:var(--av-surface);border:1px solid var(--av-border);border-radius:14px;overflow:hidden}
  .avp-field{display:grid;grid-template-columns:160px 1fr;gap:0 20px;padding:16px 24px;border-bottom:1px solid var(--av-border);align-items:baseline}
  .avp-field:last-child{border-bottom:none}
  .avp-lbl{font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--av-text-3)}
  .avp-val{font-size:14px;color:var(--av-text);line-height:1.65}
  .avp-field.risk{background:rgba(171,2,31,.045)}
  .avp-badge{display:inline-flex;font-size:11px;font-weight:700;color:#fff;background:#a06200;border-radius:999px;padding:3px 11px;margin-bottom:8px}
  @media(max-width:680px){ .avp-field,.avp-field.risk{grid-template-columns:1fr;gap:6px} }
`);

/* ── Abas + painéis compartilhados ────────────────────────────────── */
const AvTabs = ({
  tab,
  setTab
}) => /*#__PURE__*/React.createElement("div", {
  className: "av-tabs",
  role: "tablist",
  "aria-label": "Vis\xF5es da sess\xE3o"
}, [['analise', 'Análise'], ['transcricao', 'Transcrição'], ['prontuario', 'Prontuário']].map(([id, l]) => /*#__PURE__*/React.createElement("button", {
  key: id,
  role: "tab",
  "aria-selected": tab === id,
  className: 'av-tab' + (tab === id ? ' on' : ''),
  onClick: () => setTab(id)
}, l)));
const AvTranscript = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "avt-meta"
}, /*#__PURE__*/React.createElement("span", null, AV_DATA.turnsCount, " turnos"), /*#__PURE__*/React.createElement("span", {
  className: "sep"
}), /*#__PURE__*/React.createElement("span", null, AV_DATA.elapsed, " de dura\xE7\xE3o"), /*#__PURE__*/React.createElement("span", {
  className: "sep"
}), /*#__PURE__*/React.createElement("span", null, "registrada pela Condu\xE7\xE3o de caso")), /*#__PURE__*/React.createElement("div", {
  className: "avt"
}, AV_DATA.transcript.map((m, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  className: 'avt-msg ' + (m.who === 't' ? 't' : 'p')
}, /*#__PURE__*/React.createElement("div", {
  className: "avt-mhd"
}, /*#__PURE__*/React.createElement("b", null, m.who === 't' ? 'Você' : AV_NAME), m.turn && /*#__PURE__*/React.createElement("span", {
  className: "avt-turn"
}, "Turno ", m.turn), /*#__PURE__*/React.createElement("span", {
  style: {
    fontVariantNumeric: 'tabular-nums'
  }
}, m.ts)), m.nv && /*#__PURE__*/React.createElement("div", {
  className: "avt-nv"
}, m.nv), /*#__PURE__*/React.createElement("div", {
  className: "avt-bub"
}, m.text), m.mark && /*#__PURE__*/React.createElement("span", {
  className: 'avt-mark' + (m.markRisk === 'risk' ? ' risk' : '')
}, m.mark)))));
const AvPront = () => /*#__PURE__*/React.createElement("div", {
  className: "avp"
}, AV_DATA.pront.map((s, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  className: 'avp-field' + (s.risco ? ' risk' : '')
}, /*#__PURE__*/React.createElement("div", {
  className: "avp-lbl"
}, s.h), /*#__PURE__*/React.createElement("div", {
  className: "avp-val"
}, s.risco && /*#__PURE__*/React.createElement("span", {
  className: "avp-badge"
}, s.nivel), s.risco && /*#__PURE__*/React.createElement("br", null), s.body))));

/* Rodapé de ações compartilhado (temático) */
const AvFooterActions = ({
  setScreen,
  cls
}) => /*#__PURE__*/React.createElement("div", {
  className: cls
}, /*#__PURE__*/React.createElement("span", {
  className: "av-foot-prog"
}, "Sess\xE3o ", /*#__PURE__*/React.createElement("b", null, "1"), " de 3 consultas"), /*#__PURE__*/React.createElement("button", {
  className: "cl-btn-outline sm",
  onClick: () => setScreen('s1')
}, "Rever sess\xE3o"), /*#__PURE__*/React.createElement("button", {
  className: "cl-btn-primary sm",
  onClick: () => setScreen('editor_m2')
}, "Preparar Sess\xE3o 2", /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    marginLeft: 6
  }
}, /*#__PURE__*/React.createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 5 19 12 12 19"
}))));

/* ════════════ VARIAÇÃO 1 — Relatório editorial (conservador) ══════════
   Coluna única estreita, Fraunces nos títulos, divisórias finas em vez
   de cards, métricas como linha de estatística. Papel quente, calmo. */
const ScreenAnaliseV1 = ({
  setScreen
}) => {
  const [tab, setTab] = React.useState('analise');
  const d = AV_DATA;
  return /*#__PURE__*/React.createElement("div", {
    className: "av-root",
    "data-av": "1",
    style: {
      '--av-bg': '#faf8f4',
      '--av-surface': '#fff',
      '--av-border': '#e7e1d6',
      '--av-text': '#2b2a26',
      '--av-text-2': '#4a463d',
      '--av-text-3': '#8a8474',
      '--av-accent': '#15193a',
      '--av-accent-bg': 'rgba(21,25,58,.06)',
      '--av-accent-2': '#007880',
      '--av-max': '760px'
    }
  }, /*#__PURE__*/React.createElement(AvSharedStyles, null), /*#__PURE__*/React.createElement("style", null, `
        [data-av="1"] .v1-eyebrow{font-family:var(--f-interface);font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--av-accent-2)}
        [data-av="1"] .v1-title{font-family:var(--f-editorial);font-style:italic;font-size:34px;font-weight:400;color:var(--av-text);margin:8px 0 0;line-height:1.1}
        [data-av="1"] .v1-statusrow{display:flex;align-items:center;gap:12px;margin:14px 0 22px;flex-wrap:wrap}
        [data-av="1"] .v1-status{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:700;color:#00734a}
        [data-av="1"] .v1-stats{display:flex;gap:0;border-top:1px solid var(--av-border);border-bottom:1px solid var(--av-border);margin:0 0 30px}
        [data-av="1"] .v1-stat{flex:1;padding:14px 16px;border-left:1px solid var(--av-border)}
        [data-av="1"] .v1-stat:first-child{border-left:none}
        [data-av="1"] .v1-stat-v{font-family:var(--f-editorial);font-size:24px;color:var(--av-text);line-height:1;font-variant-numeric:tabular-nums}
        [data-av="1"] .v1-stat-l{font-size:10.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--av-text-3);margin-top:7px}
        [data-av="1"] .v1-patient{display:flex;align-items:center;gap:13px;margin:0 0 26px}
        [data-av="1"] .v1-patient img{width:44px;height:44px;border-radius:50%;object-fit:cover;flex-shrink:0}
        [data-av="1"] .v1-pname{font-size:15px;font-weight:700;color:var(--av-text)}
        [data-av="1"] .v1-psub{font-size:12.5px;color:var(--av-text-3)}
        [data-av="1"] .v1-sec{font-family:var(--f-interface);font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--av-text-3);margin:34px 0 12px;display:flex;align-items:center;gap:10px}
        [data-av="1"] .v1-sec::after{content:'';flex:1;height:1px;background:var(--av-border)}
        [data-av="1"] .v1-sintese{font-family:var(--f-editorial);font-size:19px;line-height:1.7;color:var(--av-text);margin:0;text-wrap:pretty}
        [data-av="1"] .v1-dim{padding:18px 0;border-bottom:1px solid var(--av-border)}
        [data-av="1"] .v1-dim:last-child{border-bottom:none}
        [data-av="1"] .v1-dim-hd{display:flex;align-items:baseline;justify-content:space-between;gap:12px}
        [data-av="1"] .v1-dim-t{font-family:var(--f-editorial);font-size:19px;font-style:italic;color:var(--av-text)}
        [data-av="1"] .v1-dim-st{font-size:11px;font-weight:700;display:inline-flex;align-items:center;gap:5px;white-space:nowrap}
        [data-av="1"] .v1-dim-b{font-size:14px;line-height:1.65;color:var(--av-text-2);margin:9px 0 0;text-wrap:pretty}
        [data-av="1"] .v1-nota{margin:6px 0 0;padding:16px 18px;background:var(--av-surface);border:1px solid var(--av-border);border-radius:10px}
        [data-av="1"] .v1-nota-l{font-size:10.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--av-accent-2);margin-bottom:6px}
        [data-av="1"] .v1-nota-q{font-family:var(--f-editorial);font-style:italic;font-size:17px;line-height:1.55;color:var(--av-text)}
        [data-av="1"] .v1-prep{margin-top:8px}
        [data-av="1"] .v1-focus{font-family:var(--f-editorial);font-style:italic;font-size:16px;color:var(--av-accent);border-left:2px solid var(--av-accent);padding-left:14px;margin:0 0 18px;line-height:1.55}
        [data-av="1"] .v1-step{display:flex;gap:14px;padding:12px 0;border-top:1px solid var(--av-border)}
        [data-av="1"] .v1-step-n{font-family:var(--f-editorial);font-size:18px;color:var(--av-text-3);flex-shrink:0;width:22px}
        [data-av="1"] .v1-step-s{font-size:10.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--av-text-3)}
        [data-av="1"] .v1-step-t{font-size:13.5px;line-height:1.55;color:var(--av-text-2);margin-top:3px}
        [data-av="1"] .v1-step-t strong{color:var(--av-accent)}
        [data-av="1"] .v1-tag{display:inline-block;margin-top:6px;font-size:10px;font-weight:700;color:var(--av-accent-2)}
        [data-av="1"] .v1-foot{display:flex;align-items:center;gap:12px;margin-top:36px;padding-top:20px;border-top:1px solid var(--av-border);flex-wrap:wrap}
        [data-av="1"] .av-foot-prog{flex:1;font-size:12.5px;color:var(--av-text-3)}
        [data-av="1"] .av-foot-prog b{color:var(--av-text-2)}
        @media(max-width:600px){[data-av="1"] .v1-title{font-size:27px}[data-av="1"] .v1-stats{flex-wrap:wrap}[data-av="1"] .v1-stat{flex:1 0 50%;border-left:none;border-top:1px solid var(--av-border)}[data-av="1"] .v1-stat:nth-child(-n+2){border-top:none}}
      `), /*#__PURE__*/React.createElement("div", {
    className: "av-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v1-eyebrow"
  }, "An\xE1lise da sess\xE3o \xB7 Condu\xE7\xE3o de caso"), /*#__PURE__*/React.createElement("h1", {
    className: "v1-title"
  }, "An\xE1lise, ", d.sessionTag), /*#__PURE__*/React.createElement("div", {
    className: "v1-statusrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v1-status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons",
    style: {
      fontSize: 15
    }
  }, "check_circle"), "Avalia\xE7\xE3o conclu\xEDda")), /*#__PURE__*/React.createElement(AvTabs, {
    tab: tab,
    setTab: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  }), tab === 'analise' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "v1-patient"
  }, /*#__PURE__*/React.createElement("img", {
    src: AV_PHOTO,
    alt: AV_NAME
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v1-pname"
  }, AV_NAME, ", ", AV_AGE, " anos"), /*#__PURE__*/React.createElement("div", {
    className: "v1-psub"
  }, d.patientSub, " \xB7 Caso longitudinal"))), /*#__PURE__*/React.createElement("div", {
    className: "v1-stats"
  }, d.metrics.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "v1-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v1-stat-v"
  }, m.val), /*#__PURE__*/React.createElement("div", {
    className: "v1-stat-l"
  }, m.lbl)))), /*#__PURE__*/React.createElement("p", {
    className: "v1-sintese"
  }, d.sintese), /*#__PURE__*/React.createElement("div", {
    className: "v1-sec"
  }, "Dimens\xF5es avaliadas"), d.dims.map((dim, i) => {
    const c = avState(dim.value);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "v1-dim",
      "data-screen-label": dim.label
    }, /*#__PURE__*/React.createElement("div", {
      className: "v1-dim-hd"
    }, /*#__PURE__*/React.createElement("span", {
      className: "v1-dim-t"
    }, dim.label), /*#__PURE__*/React.createElement("span", {
      className: "v1-dim-st",
      style: {
        color: c.clr
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-icons",
      style: {
        fontSize: 14
      }
    }, c.ico), c.label)), /*#__PURE__*/React.createElement("p", {
      className: "v1-dim-b"
    }, dim.texto));
  }), /*#__PURE__*/React.createElement("div", {
    className: "v1-sec"
  }, "Nota da sess\xE3o"), /*#__PURE__*/React.createElement("div", {
    className: "v1-nota"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v1-nota-l"
  }, d.nota.label), /*#__PURE__*/React.createElement("div", {
    className: "v1-nota-q"
  }, "\u201C", d.nota.text, "\u201D")), /*#__PURE__*/React.createElement("div", {
    className: "v1-sec"
  }, "Prepara\xE7\xE3o para sess\xE3o ", d.nextNum), /*#__PURE__*/React.createElement("div", {
    className: "v1-prep"
  }, /*#__PURE__*/React.createElement("p", {
    className: "v1-focus"
  }, d.focusTxt), d.nextSteps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "v1-step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v1-step-n"
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v1-step-s"
  }, s.step), /*#__PURE__*/React.createElement("div", {
    className: "v1-step-t"
  }, s.text), /*#__PURE__*/React.createElement("span", {
    className: "v1-tag"
  }, s.tag))))), /*#__PURE__*/React.createElement(AvFooterActions, {
    setScreen: setScreen,
    cls: "v1-foot"
  })), tab === 'transcricao' && /*#__PURE__*/React.createElement(AvTranscript, null), tab === 'prontuario' && /*#__PURE__*/React.createElement(AvPront, null)));
};
window.ScreenAnaliseV1 = ScreenAnaliseV1;

/* ════════════ VARIAÇÃO 2 — Painel de métricas (dashboard) ═════════════
   Faixa de KPIs no topo, dimensões em grade de cards com borda superior
   colorida, síntese em destaque, preparação em painel lateral. */
const ScreenAnaliseV2 = ({
  setScreen
}) => {
  const [tab, setTab] = React.useState('analise');
  const d = AV_DATA;
  return /*#__PURE__*/React.createElement("div", {
    className: "av-root",
    "data-av": "2",
    style: {
      '--av-bg': '#eef1f5',
      '--av-surface': '#fff',
      '--av-border': '#dce3ea',
      '--av-text': '#1c2733',
      '--av-text-2': '#3e5264',
      '--av-text-3': '#6e8396',
      '--av-accent': '#15193a',
      '--av-accent-bg': 'rgba(21,25,58,.06)',
      '--av-accent-2': '#007880',
      '--av-max': '1080px'
    }
  }, /*#__PURE__*/React.createElement(AvSharedStyles, null), /*#__PURE__*/React.createElement("style", null, `
        [data-av="2"] .v2-head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:20px}
        [data-av="2"] .v2-eyebrow{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--av-text-3)}
        [data-av="2"] .v2-title{font-family:var(--f-interface);font-size:26px;font-weight:700;color:var(--av-text);margin:6px 0 0;letter-spacing:-.4px}
        [data-av="2"] .v2-status{display:inline-flex;align-items:center;gap:6px;font-size:11.5px;font-weight:700;color:#00734a;background:rgba(0,135,83,.10);border:1px solid rgba(0,135,83,.28);border-radius:999px;padding:5px 12px}
        [data-av="2"] .v2-kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:22px}
        [data-av="2"] .v2-kpi{background:var(--av-surface);border:1px solid var(--av-border);border-radius:14px;padding:16px 18px;box-shadow:0 1px 3px rgba(27,39,49,.05)}
        [data-av="2"] .v2-kpi-l{font-size:10.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--av-text-3);display:flex;align-items:center;gap:6px}
        [data-av="2"] .v2-kpi-v{font-size:28px;font-weight:700;color:var(--av-text);line-height:1;margin-top:10px;letter-spacing:-.5px;font-variant-numeric:tabular-nums}
        [data-av="2"] .v2-kpi-s{font-size:11.5px;color:var(--av-text-3);margin-top:5px}
        [data-av="2"] .v2-grid{display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:22px;align-items:start}
        [data-av="2"] .v2-patient{display:flex;align-items:center;gap:13px;background:var(--av-accent);border-radius:14px;padding:14px 18px;margin-bottom:18px}
        [data-av="2"] .v2-patient img{width:42px;height:42px;border-radius:50%;object-fit:cover;border:1px solid rgba(255,255,255,.2)}
        [data-av="2"] .v2-pname{font-size:15px;font-weight:700;color:#fff}
        [data-av="2"] .v2-psub{font-size:12px;color:rgba(255,255,255,.6)}
        [data-av="2"] .v2-pengine{margin-left:auto;font-size:11px;font-weight:600;color:rgba(255,255,255,.85);background:rgba(255,255,255,.12);border-radius:8px;padding:4px 10px}
        [data-av="2"] .v2-callout{background:var(--av-surface);border:1px solid var(--av-border);border-left:4px solid var(--av-accent-2);border-radius:0 12px 12px 0;padding:18px 20px;margin-bottom:22px}
        [data-av="2"] .v2-callout-l{font-size:10.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--av-accent-2);margin-bottom:8px}
        [data-av="2"] .v2-callout-t{font-size:15px;line-height:1.65;color:var(--av-text);margin:0;text-wrap:pretty}
        [data-av="2"] .v2-sec{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--av-text-3);margin-bottom:12px}
        [data-av="2"] .v2-dims{display:grid;grid-template-columns:1fr 1fr;gap:14px}
        [data-av="2"] .v2-dim{background:var(--av-surface);border:1px solid var(--av-border);border-top:3px solid var(--dim-bar);border-radius:12px;padding:16px 18px;box-shadow:0 1px 3px rgba(27,39,49,.05)}
        [data-av="2"] .v2-dim-hd{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:9px}
        [data-av="2"] .v2-dim-t{font-size:14px;font-weight:700;color:var(--av-text)}
        [data-av="2"] .v2-chip{display:inline-flex;align-items:center;gap:5px;font-size:10.5px;font-weight:700;border-radius:999px;padding:3px 9px;white-space:nowrap}
        [data-av="2"] .v2-dim-b{font-size:13px;line-height:1.58;color:var(--av-text-2);text-wrap:pretty}
        [data-av="2"] .v2-side{display:flex;flex-direction:column;gap:16px;position:sticky;top:0}
        [data-av="2"] .v2-panel{background:var(--av-surface);border:1px solid var(--av-border);border-radius:14px;padding:18px 18px}
        [data-av="2"] .v2-nota-l{font-size:10.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--av-accent-2);margin-bottom:8px;display:flex;align-items:center;gap:6px}
        [data-av="2"] .v2-nota-q{font-family:var(--f-editorial);font-style:italic;font-size:16px;line-height:1.55;color:var(--av-text)}
        [data-av="2"] .v2-focus{background:var(--av-accent-bg);border-radius:8px;padding:11px 13px;font-size:13px;color:var(--av-accent);line-height:1.5;margin-bottom:14px;font-weight:600}
        [data-av="2"] .v2-step{display:flex;gap:11px;padding:11px 0;border-top:1px solid var(--av-border)}
        [data-av="2"] .v2-step:first-of-type{border-top:none}
        [data-av="2"] .v2-step-n{width:22px;height:22px;border-radius:50%;background:var(--av-accent-bg);color:var(--av-accent);font-size:11px;font-weight:700;display:grid;place-items:center;flex-shrink:0}
        [data-av="2"] .v2-step-s{font-size:10px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--av-text-3)}
        [data-av="2"] .v2-step-t{font-size:12.5px;line-height:1.5;color:var(--av-text-2);margin-top:2px}
        [data-av="2"] .v2-step-t strong{color:var(--av-accent)}
        [data-av="2"] .v2-tag{display:inline-block;margin-top:5px;font-size:9.5px;font-weight:700;color:var(--av-accent);background:var(--av-accent-bg);border-radius:6px;padding:2px 7px}
        [data-av="2"] .v2-foot{display:flex;align-items:center;gap:12px;margin-top:26px;flex-wrap:wrap}
        [data-av="2"] .av-foot-prog{flex:1;font-size:12.5px;color:var(--av-text-3)}
        [data-av="2"] .av-foot-prog b{color:var(--av-text-2)}
        @media(max-width:920px){[data-av="2"] .v2-grid{grid-template-columns:1fr}[data-av="2"] .v2-side{position:static}}
        @media(max-width:680px){[data-av="2"] .v2-kpis{grid-template-columns:1fr 1fr}[data-av="2"] .v2-dims{grid-template-columns:1fr}}
      `), /*#__PURE__*/React.createElement("div", {
    className: "av-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "v2-eyebrow"
  }, "An\xE1lise da sess\xE3o \xB7 Condu\xE7\xE3o de caso"), /*#__PURE__*/React.createElement("h1", {
    className: "v2-title"
  }, "An\xE1lise, ", d.sessionTag)), /*#__PURE__*/React.createElement("span", {
    className: "v2-status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons",
    style: {
      fontSize: 14
    }
  }, "check_circle"), "Avalia\xE7\xE3o conclu\xEDda")), /*#__PURE__*/React.createElement(AvTabs, {
    tab: tab,
    setTab: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 20
    }
  }), tab === 'analise' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "v2-patient"
  }, /*#__PURE__*/React.createElement("img", {
    src: AV_PHOTO,
    alt: AV_NAME
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v2-pname"
  }, AV_NAME, ", ", AV_AGE, " anos"), /*#__PURE__*/React.createElement("div", {
    className: "v2-psub"
  }, d.patientSub)), /*#__PURE__*/React.createElement("span", {
    className: "v2-pengine"
  }, "Caso longitudinal")), /*#__PURE__*/React.createElement("div", {
    className: "v2-kpis"
  }, d.metrics.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "v2-kpi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-kpi-l"
  }, m.lbl), /*#__PURE__*/React.createElement("div", {
    className: "v2-kpi-v"
  }, m.val), /*#__PURE__*/React.createElement("div", {
    className: "v2-kpi-s"
  }, m.sub)))), /*#__PURE__*/React.createElement("div", {
    className: "v2-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v2-callout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-callout-l"
  }, "S\xEDntese da sess\xE3o"), /*#__PURE__*/React.createElement("p", {
    className: "v2-callout-t"
  }, d.sintese)), /*#__PURE__*/React.createElement("div", {
    className: "v2-sec"
  }, "Dimens\xF5es avaliadas"), /*#__PURE__*/React.createElement("div", {
    className: "v2-dims"
  }, d.dims.map((dim, i) => {
    const c = avState(dim.value);
    return /*#__PURE__*/React.createElement("article", {
      key: i,
      className: "v2-dim",
      style: {
        '--dim-bar': c.bar
      },
      "data-screen-label": dim.label
    }, /*#__PURE__*/React.createElement("div", {
      className: "v2-dim-hd"
    }, /*#__PURE__*/React.createElement("span", {
      className: "v2-dim-t"
    }, dim.label), /*#__PURE__*/React.createElement("span", {
      className: "v2-chip",
      style: {
        color: c.clr,
        background: c.bg,
        border: '1px solid ' + c.bd
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-icons",
      style: {
        fontSize: 13
      }
    }, c.ico), c.label)), /*#__PURE__*/React.createElement("p", {
      className: "v2-dim-b"
    }, dim.texto));
  }))), /*#__PURE__*/React.createElement("aside", {
    className: "v2-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-nota-l"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons",
    style: {
      fontSize: 14
    }
  }, "format_quote"), d.nota.label), /*#__PURE__*/React.createElement("div", {
    className: "v2-nota-q"
  }, "\u201C", d.nota.text, "\u201D")), /*#__PURE__*/React.createElement("div", {
    className: "v2-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v2-sec",
    style: {
      marginBottom: 10
    }
  }, "Prepara\xE7\xE3o para sess\xE3o ", d.nextNum), /*#__PURE__*/React.createElement("div", {
    className: "v2-focus"
  }, d.focusTxt), d.nextSteps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "v2-step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v2-step-n"
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v2-step-s"
  }, s.step), /*#__PURE__*/React.createElement("div", {
    className: "v2-step-t"
  }, s.text), /*#__PURE__*/React.createElement("span", {
    className: "v2-tag"
  }, s.tag))))))), /*#__PURE__*/React.createElement(AvFooterActions, {
    setScreen: setScreen,
    cls: "v2-foot"
  })), tab === 'transcricao' && /*#__PURE__*/React.createElement(AvTranscript, null), tab === 'prontuario' && /*#__PURE__*/React.createElement(AvPront, null)));
};
window.ScreenAnaliseV2 = ScreenAnaliseV2;

/* ════════════ VARIAÇÃO 3 — Cascata vertical (timeline narrativa) ══════
   Tudo num fluxo vertical conectado por uma trilha à esquerda: síntese →
   cada dimensão como nó → nota → preparação. Tints suaves de lavanda. */
const ScreenAnaliseV3 = ({
  setScreen
}) => {
  const [tab, setTab] = React.useState('analise');
  const d = AV_DATA;
  return /*#__PURE__*/React.createElement("div", {
    className: "av-root",
    "data-av": "3",
    style: {
      '--av-bg': '#f4f3fb',
      '--av-surface': '#fff',
      '--av-border': '#e2e0f0',
      '--av-text': '#222035',
      '--av-text-2': '#46435f',
      '--av-text-3': '#7c7898',
      '--av-accent': '#2e3866',
      '--av-accent-bg': 'rgba(46,56,102,.07)',
      '--av-accent-2': '#007880',
      '--av-max': '780px'
    }
  }, /*#__PURE__*/React.createElement(AvSharedStyles, null), /*#__PURE__*/React.createElement("style", null, `
        [data-av="3"] .v3-eyebrow{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--av-accent)}
        [data-av="3"] .v3-title{font-family:var(--f-interface);font-size:27px;font-weight:700;color:var(--av-text);margin:6px 0 0;letter-spacing:-.3px}
        [data-av="3"] .v3-status{display:inline-flex;align-items:center;gap:6px;font-size:11.5px;font-weight:700;color:#00734a;margin:12px 0 18px}
        [data-av="3"] .v3-patient{display:flex;align-items:center;gap:13px;background:var(--av-surface);border:1px solid var(--av-border);border-radius:14px;padding:13px 16px;margin-bottom:8px}
        [data-av="3"] .v3-patient img{width:42px;height:42px;border-radius:50%;object-fit:cover}
        [data-av="3"] .v3-pname{font-size:15px;font-weight:700;color:var(--av-text)}
        [data-av="3"] .v3-psub{font-size:12px;color:var(--av-text-3)}
        [data-av="3"] .v3-pmetrics{margin-left:auto;display:flex;gap:16px;text-align:right}
        [data-av="3"] .v3-pm-v{font-size:18px;font-weight:700;color:var(--av-text);font-variant-numeric:tabular-nums}
        [data-av="3"] .v3-pm-l{font-size:10px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--av-text-3)}
        [data-av="3"] .v3-flow{position:relative;padding-left:34px;margin-top:24px}
        [data-av="3"] .v3-flow::before{content:'';position:absolute;left:11px;top:6px;bottom:6px;width:2px;background:var(--av-border)}
        [data-av="3"] .v3-node{position:relative;margin-bottom:22px}
        [data-av="3"] .v3-node::before{content:'';position:absolute;left:-29px;top:2px;width:14px;height:14px;border-radius:50%;background:var(--node-c,var(--av-accent));border:3px solid var(--av-bg);box-shadow:0 0 0 1px var(--node-c,var(--av-accent))}
        [data-av="3"] .v3-kicker{font-size:10.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--av-text-3);margin-bottom:8px}
        [data-av="3"] .v3-sintese{font-family:var(--f-editorial);font-size:18px;line-height:1.68;color:var(--av-text);margin:0;text-wrap:pretty}
        [data-av="3"] .v3-card{background:var(--av-surface);border:1px solid var(--av-border);border-left:3px solid var(--node-c);border-radius:0 12px 12px 0;padding:15px 18px}
        [data-av="3"] .v3-card-hd{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:8px}
        [data-av="3"] .v3-card-t{font-size:15px;font-weight:700;color:var(--av-text)}
        [data-av="3"] .v3-chip{display:inline-flex;align-items:center;gap:5px;font-size:10.5px;font-weight:700;border-radius:999px;padding:3px 9px;white-space:nowrap}
        [data-av="3"] .v3-card-b{font-size:13.5px;line-height:1.6;color:var(--av-text-2);text-wrap:pretty}
        [data-av="3"] .v3-nota{background:var(--av-accent-bg);border-radius:12px;padding:15px 18px}
        [data-av="3"] .v3-nota-l{font-size:10.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--av-accent);margin-bottom:6px;display:flex;align-items:center;gap:6px}
        [data-av="3"] .v3-nota-q{font-family:var(--f-editorial);font-style:italic;font-size:16px;line-height:1.55;color:var(--av-text)}
        [data-av="3"] .v3-focus{font-size:14px;color:var(--av-accent);font-weight:600;line-height:1.55;margin:0 0 14px}
        [data-av="3"] .v3-steps{display:flex;flex-direction:column;gap:10px}
        [data-av="3"] .v3-step{background:var(--av-surface);border:1px solid var(--av-border);border-radius:10px;padding:12px 14px;display:flex;gap:12px}
        [data-av="3"] .v3-step-n{width:24px;height:24px;border-radius:8px;background:var(--av-accent);color:#fff;font-size:12px;font-weight:700;display:grid;place-items:center;flex-shrink:0}
        [data-av="3"] .v3-step-s{font-size:10px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--av-text-3)}
        [data-av="3"] .v3-step-t{font-size:13px;line-height:1.5;color:var(--av-text-2);margin-top:2px}
        [data-av="3"] .v3-step-t strong{color:var(--av-accent)}
        [data-av="3"] .v3-tag{display:inline-block;margin-top:5px;font-size:9.5px;font-weight:700;color:var(--av-accent-2)}
        [data-av="3"] .v3-foot{display:flex;align-items:center;gap:12px;margin-top:30px;padding-top:18px;border-top:1px solid var(--av-border);flex-wrap:wrap}
        [data-av="3"] .av-foot-prog{flex:1;font-size:12.5px;color:var(--av-text-3)}
        [data-av="3"] .av-foot-prog b{color:var(--av-text-2)}
        @media(max-width:560px){[data-av="3"] .v3-pmetrics{display:none}}
      `), /*#__PURE__*/React.createElement("div", {
    className: "av-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v3-eyebrow"
  }, "An\xE1lise da sess\xE3o \xB7 Condu\xE7\xE3o de caso"), /*#__PURE__*/React.createElement("h1", {
    className: "v3-title"
  }, "An\xE1lise, ", d.sessionTag), /*#__PURE__*/React.createElement("div", {
    className: "v3-status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons",
    style: {
      fontSize: 15
    }
  }, "check_circle"), "Avalia\xE7\xE3o conclu\xEDda"), /*#__PURE__*/React.createElement(AvTabs, {
    tab: tab,
    setTab: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 20
    }
  }), tab === 'analise' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "v3-patient"
  }, /*#__PURE__*/React.createElement("img", {
    src: AV_PHOTO,
    alt: AV_NAME
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v3-pname"
  }, AV_NAME, ", ", AV_AGE, " anos"), /*#__PURE__*/React.createElement("div", {
    className: "v3-psub"
  }, d.patientSub)), /*#__PURE__*/React.createElement("div", {
    className: "v3-pmetrics"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v3-pm-v"
  }, d.elapsed), /*#__PURE__*/React.createElement("div", {
    className: "v3-pm-l"
  }, "dura\xE7\xE3o")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v3-pm-v"
  }, "1/3"), /*#__PURE__*/React.createElement("div", {
    className: "v3-pm-l"
  }, "sess\xF5es")))), /*#__PURE__*/React.createElement("div", {
    className: "v3-flow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-node",
    style: {
      '--node-c': 'var(--av-accent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-kicker"
  }, "S\xEDntese da sess\xE3o"), /*#__PURE__*/React.createElement("p", {
    className: "v3-sintese"
  }, d.sintese)), d.dims.map((dim, i) => {
    const c = avState(dim.value);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "v3-node",
      style: {
        '--node-c': c.bar
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "v3-kicker"
    }, "Dimens\xE3o \xB7 ", dim.nota), /*#__PURE__*/React.createElement("div", {
      className: "v3-card",
      "data-screen-label": dim.label
    }, /*#__PURE__*/React.createElement("div", {
      className: "v3-card-hd"
    }, /*#__PURE__*/React.createElement("span", {
      className: "v3-card-t"
    }, dim.label), /*#__PURE__*/React.createElement("span", {
      className: "v3-chip",
      style: {
        color: c.clr,
        background: c.bg,
        border: '1px solid ' + c.bd
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-icons",
      style: {
        fontSize: 13
      }
    }, c.ico), c.label)), /*#__PURE__*/React.createElement("p", {
      className: "v3-card-b"
    }, dim.texto)));
  }), /*#__PURE__*/React.createElement("div", {
    className: "v3-node",
    style: {
      '--node-c': 'var(--av-accent-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-kicker"
  }, "Nota da sess\xE3o"), /*#__PURE__*/React.createElement("div", {
    className: "v3-nota"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-nota-l"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons",
    style: {
      fontSize: 14
    }
  }, "format_quote"), d.nota.label), /*#__PURE__*/React.createElement("div", {
    className: "v3-nota-q"
  }, "\u201C", d.nota.text, "\u201D"))), /*#__PURE__*/React.createElement("div", {
    className: "v3-node",
    style: {
      '--node-c': 'var(--av-accent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "v3-kicker"
  }, "Prepara\xE7\xE3o para sess\xE3o ", d.nextNum), /*#__PURE__*/React.createElement("p", {
    className: "v3-focus"
  }, d.focusTxt), /*#__PURE__*/React.createElement("div", {
    className: "v3-steps"
  }, d.nextSteps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "v3-step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v3-step-n"
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v3-step-s"
  }, s.step), /*#__PURE__*/React.createElement("div", {
    className: "v3-step-t"
  }, s.text), /*#__PURE__*/React.createElement("span", {
    className: "v3-tag"
  }, s.tag))))))), /*#__PURE__*/React.createElement(AvFooterActions, {
    setScreen: setScreen,
    cls: "v3-foot"
  })), tab === 'transcricao' && /*#__PURE__*/React.createElement(AvTranscript, null), tab === 'prontuario' && /*#__PURE__*/React.createElement(AvPront, null)));
};
window.ScreenAnaliseV3 = ScreenAnaliseV3;

/* ════════════ VARIAÇÃO 4 — Imersivo (hero escuro) ════════════════════
   Hero indigo escuro com paciente + KPIs em alto contraste, corpo claro
   com dimensões em cards de 2 colunas. Tipografia grande, dramático. */
const ScreenAnaliseV4 = ({
  setScreen
}) => {
  const [tab, setTab] = React.useState('analise');
  const d = AV_DATA;
  return /*#__PURE__*/React.createElement("div", {
    className: "av-root",
    "data-av": "4",
    style: {
      '--av-bg': '#f6f7f9',
      '--av-surface': '#fff',
      '--av-border': '#e4e9ed',
      '--av-text': '#1b2733',
      '--av-text-2': '#3e5264',
      '--av-text-3': '#6e8396',
      '--av-accent': '#15193a',
      '--av-accent-bg': 'rgba(21,25,58,.06)',
      '--av-accent-2': '#00acb4',
      '--av-max': '1040px',
      '--av-pad': '0 0 72px'
    }
  }, /*#__PURE__*/React.createElement(AvSharedStyles, null), /*#__PURE__*/React.createElement("style", null, `
        [data-av="4"] .v4-hero{background:var(--av-accent);position:relative;overflow:hidden;padding:30px 40px 26px}
        [data-av="4"] .v4-hero-glow{position:absolute;top:-90px;right:-40px;width:320px;height:320px;border-radius:50%;background:radial-gradient(circle,rgba(0,172,180,.22),transparent 68%);pointer-events:none}
        [data-av="4"] .v4-hero-in{max-width:1040px;margin:0 auto;position:relative}
        [data-av="4"] .v4-eyebrow{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.55)}
        [data-av="4"] .v4-titlerow{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:8px}
        [data-av="4"] .v4-title{font-family:var(--f-editorial);font-size:32px;font-weight:400;color:#fff;margin:0;line-height:1.1}
        [data-av="4"] .v4-status{display:inline-flex;align-items:center;gap:6px;font-size:11.5px;font-weight:700;color:#7fe3c4;background:rgba(0,135,83,.18);border:1px solid rgba(0,135,83,.4);border-radius:999px;padding:4px 11px}
        [data-av="4"] .v4-hero-patient{display:flex;align-items:center;gap:13px;margin-top:20px}
        [data-av="4"] .v4-hero-patient img{width:48px;height:48px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,.2)}
        [data-av="4"] .v4-pname{font-size:16px;font-weight:700;color:#fff}
        [data-av="4"] .v4-psub{font-size:12.5px;color:rgba(255,255,255,.6)}
        [data-av="4"] .v4-kpis{display:flex;gap:28px;margin-top:22px;flex-wrap:wrap}
        [data-av="4"] .v4-kpi-v{font-size:26px;font-weight:700;color:#fff;line-height:1;font-variant-numeric:tabular-nums}
        [data-av="4"] .v4-kpi-l{font-size:10.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-top:7px}
        [data-av="4"] .v4-tabsbar{background:var(--av-accent);padding:0 40px}
        [data-av="4"] .v4-tabsbar-in{max-width:1040px;margin:0 auto;display:flex;gap:4px;padding-bottom:14px}
        [data-av="4"] .v4-tabsbar .av-tab{color:rgba(255,255,255,.6)}
        [data-av="4"] .v4-tabsbar .av-tab:hover{color:#fff}
        [data-av="4"] .v4-tabsbar .av-tab.on{color:var(--av-accent);background:#fff}
        [data-av="4"] .v4-body{max-width:1040px;margin:0 auto;padding:30px 40px 0}
        [data-av="4"] .v4-sec{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--av-text-3);margin:0 0 14px}
        [data-av="4"] .v4-sintese{font-family:var(--f-editorial);font-size:21px;line-height:1.65;color:var(--av-text);margin:0 0 32px;text-wrap:pretty;max-width:780px}
        [data-av="4"] .v4-dims{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:34px}
        [data-av="4"] .v4-dim{background:var(--av-surface);border:1px solid var(--av-border);border-radius:14px;padding:20px 22px;box-shadow:0 2px 8px rgba(27,39,49,.06)}
        [data-av="4"] .v4-dim-hd{display:flex;align-items:center;gap:10px;margin-bottom:11px}
        [data-av="4"] .v4-dim-ic{width:30px;height:30px;border-radius:9px;display:grid;place-items:center;flex-shrink:0}
        [data-av="4"] .v4-dim-ic .material-icons{font-size:17px}
        [data-av="4"] .v4-dim-t{font-size:15px;font-weight:700;color:var(--av-text)}
        [data-av="4"] .v4-dim-st{font-size:11px;font-weight:700;margin-top:1px}
        [data-av="4"] .v4-dim-b{font-size:13.5px;line-height:1.6;color:var(--av-text-2);text-wrap:pretty}
        [data-av="4"] .v4-split{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-bottom:10px}
        [data-av="4"] .v4-nota{background:var(--av-accent);border-radius:14px;padding:22px 24px}
        [data-av="4"] .v4-nota-l{font-size:10.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--av-accent-2);margin-bottom:10px;display:flex;align-items:center;gap:6px}
        [data-av="4"] .v4-nota-q{font-family:var(--f-editorial);font-style:italic;font-size:19px;line-height:1.55;color:#fff}
        [data-av="4"] .v4-prep{}
        [data-av="4"] .v4-focus{font-size:14px;color:var(--av-accent);font-weight:700;line-height:1.55;margin:0 0 14px;background:var(--av-accent-bg);border-radius:8px;padding:12px 14px}
        [data-av="4"] .v4-step{display:flex;gap:12px;padding:11px 0;border-top:1px solid var(--av-border)}
        [data-av="4"] .v4-step:first-of-type{border-top:none}
        [data-av="4"] .v4-step-n{width:24px;height:24px;border-radius:50%;background:var(--av-accent);color:#fff;font-size:11px;font-weight:700;display:grid;place-items:center;flex-shrink:0}
        [data-av="4"] .v4-step-s{font-size:10px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--av-text-3)}
        [data-av="4"] .v4-step-t{font-size:13px;line-height:1.5;color:var(--av-text-2);margin-top:2px}
        [data-av="4"] .v4-step-t strong{color:var(--av-accent)}
        [data-av="4"] .v4-tag{display:inline-block;margin-top:5px;font-size:9.5px;font-weight:700;color:var(--av-accent-2)}
        [data-av="4"] .v4-foot{max-width:1040px;margin:0 auto;display:flex;align-items:center;gap:12px;padding:24px 40px 0;flex-wrap:wrap}
        [data-av="4"] .av-foot-prog{flex:1;font-size:12.5px;color:var(--av-text-3)}
        [data-av="4"] .av-foot-prog b{color:var(--av-text-2)}
        @media(max-width:860px){[data-av="4"] .v4-dims,[data-av="4"] .v4-split{grid-template-columns:1fr}}
        @media(max-width:680px){
          [data-av="4"] .v4-hero{padding:24px 20px 22px}[data-av="4"] .v4-tabsbar{padding:0 20px}[data-av="4"] .v4-body{padding:24px 20px 0}[data-av="4"] .v4-foot{padding:20px 20px 0}
          [data-av="4"] .v4-title{font-size:25px}[data-av="4"] .v4-kpis{gap:20px}[data-av="4"] .v4-sintese{font-size:18px}
        }
      `), /*#__PURE__*/React.createElement("div", {
    className: "v4-hero"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v4-hero-glow",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "v4-hero-in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v4-eyebrow"
  }, "An\xE1lise da sess\xE3o \xB7 Condu\xE7\xE3o de caso"), /*#__PURE__*/React.createElement("div", {
    className: "v4-titlerow"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "v4-title"
  }, "An\xE1lise, ", d.sessionTag), /*#__PURE__*/React.createElement("span", {
    className: "v4-status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons",
    style: {
      fontSize: 14
    }
  }, "check_circle"), "Avalia\xE7\xE3o conclu\xEDda")), tab === 'analise' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "v4-hero-patient"
  }, /*#__PURE__*/React.createElement("img", {
    src: AV_PHOTO,
    alt: AV_NAME
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v4-pname"
  }, AV_NAME, ", ", AV_AGE, " anos"), /*#__PURE__*/React.createElement("div", {
    className: "v4-psub"
  }, d.patientSub, " \xB7 Caso longitudinal"))), /*#__PURE__*/React.createElement("div", {
    className: "v4-kpis"
  }, d.metrics.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "v4-kpi-v"
  }, m.val), /*#__PURE__*/React.createElement("div", {
    className: "v4-kpi-l"
  }, m.lbl))))))), /*#__PURE__*/React.createElement("div", {
    className: "v4-tabsbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v4-tabsbar-in"
  }, /*#__PURE__*/React.createElement(AvTabs, {
    tab: tab,
    setTab: setTab
  }))), /*#__PURE__*/React.createElement("div", {
    className: "av-root",
    "data-av": "4",
    style: {
      height: 'auto',
      overflow: 'visible',
      background: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "v4-body"
  }, tab === 'analise' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "v4-sec"
  }, "S\xEDntese da sess\xE3o"), /*#__PURE__*/React.createElement("p", {
    className: "v4-sintese"
  }, d.sintese), /*#__PURE__*/React.createElement("div", {
    className: "v4-sec"
  }, "Dimens\xF5es avaliadas"), /*#__PURE__*/React.createElement("div", {
    className: "v4-dims"
  }, d.dims.map((dim, i) => {
    const c = avState(dim.value);
    return /*#__PURE__*/React.createElement("article", {
      key: i,
      className: "v4-dim",
      "data-screen-label": dim.label
    }, /*#__PURE__*/React.createElement("div", {
      className: "v4-dim-hd"
    }, /*#__PURE__*/React.createElement("span", {
      className: "v4-dim-ic",
      style: {
        background: c.bg,
        color: c.clr
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-icons"
    }, c.ico)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "v4-dim-t"
    }, dim.label), /*#__PURE__*/React.createElement("div", {
      className: "v4-dim-st",
      style: {
        color: c.clr
      }
    }, c.label))), /*#__PURE__*/React.createElement("p", {
      className: "v4-dim-b"
    }, dim.texto));
  })), /*#__PURE__*/React.createElement("div", {
    className: "v4-split"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v4-sec"
  }, "Nota da sess\xE3o"), /*#__PURE__*/React.createElement("div", {
    className: "v4-nota"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v4-nota-l"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons",
    style: {
      fontSize: 14
    }
  }, "format_quote"), d.nota.label), /*#__PURE__*/React.createElement("div", {
    className: "v4-nota-q"
  }, "\u201C", d.nota.text, "\u201D"))), /*#__PURE__*/React.createElement("div", {
    className: "v4-prep"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v4-sec"
  }, "Prepara\xE7\xE3o para sess\xE3o ", d.nextNum), /*#__PURE__*/React.createElement("div", {
    className: "v4-focus"
  }, d.focusTxt), d.nextSteps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "v4-step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v4-step-n"
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v4-step-s"
  }, s.step), /*#__PURE__*/React.createElement("div", {
    className: "v4-step-t"
  }, s.text), /*#__PURE__*/React.createElement("span", {
    className: "v4-tag"
  }, s.tag))))))), tab === 'transcricao' && /*#__PURE__*/React.createElement(AvTranscript, null), tab === 'prontuario' && /*#__PURE__*/React.createElement(AvPront, null)), tab === 'analise' && /*#__PURE__*/React.createElement(AvFooterActions, {
    setScreen: setScreen,
    cls: "v4-foot"
  })));
};
window.ScreenAnaliseV4 = ScreenAnaliseV4;

/* ════════════ VARIAÇÃO 5 — Mobile-first · header fixo + scroll ════════
   Header indigo fixo com 4 KPIs grandes; área branca abaixo scrollável
   em coluna única: síntese → quote → cards de dimensão → prep. */
const ScreenAnaliseV5 = ({
  setScreen
}) => {
  const [tab, setTab] = React.useState('analise');
  const d = AV_DATA;
  return /*#__PURE__*/React.createElement("div", {
    "data-av": "5",
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: '#fff',
      fontFamily: 'var(--f-interface)',
      color: '#1b2733',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        /* ── header fixo ── */
        [data-av="5"] .v5-header{background:var(--indigo);padding:22px 24px 20px;flex-shrink:0;position:relative;overflow:hidden}
        [data-av="5"] .v5-header-glow{position:absolute;top:-60px;right:-40px;width:220px;height:220px;border-radius:50%;background:radial-gradient(circle,rgba(0,172,180,.20),transparent 68%);pointer-events:none}
        [data-av="5"] .v5-hd-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;position:relative}
        [data-av="5"] .v5-hd-title{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.6)}
        [data-av="5"] .v5-hd-badge{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:700;color:#7fe3c4;background:rgba(0,135,83,.20);border:1px solid rgba(0,135,83,.38);border-radius:999px;padding:4px 11px}
        [data-av="5"] .v5-kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:2px;position:relative}
        [data-av="5"] .v5-kpi{text-align:center;padding:0 6px}
        [data-av="5"] .v5-kpi+.v5-kpi{border-left:1px solid rgba(255,255,255,.12)}
        [data-av="5"] .v5-kpi-v{font-family:var(--f-editorial);font-size:clamp(22px,4vw,30px);font-weight:400;color:#fff;line-height:1;font-variant-numeric:tabular-nums}
        [data-av="5"] .v5-kpi-l{font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,.52);margin-top:7px}
        /* ── abas ── */
        [data-av="5"] .v5-tabbar{background:#fff;border-bottom:1px solid #e8ecef;display:flex;gap:2px;padding:0 20px;flex-shrink:0;position:sticky;top:0;z-index:4}
        [data-av="5"] .v5-tab{background:none;border:none;cursor:pointer;font-family:var(--f-interface);font-size:13px;font-weight:600;color:#6e8396;padding:12px 14px;border-bottom:2px solid transparent;transition:color .12s,border-color .12s}
        [data-av="5"] .v5-tab:hover{color:#1b2733}
        [data-av="5"] .v5-tab.on{color:var(--indigo);border-bottom-color:var(--indigo)}
        /* ── scroll body ── */
        [data-av="5"] .v5-body{flex:1;overflow-y:auto;overscroll-behavior:contain}
        [data-av="5"] .v5-inner{max-width:640px;margin:0 auto;padding:24px 22px 72px}
        /* patient row */
        [data-av="5"] .v5-patient{display:flex;align-items:center;gap:13px;padding:16px 18px;background:#f8fafb;border:1px solid #e8ecef;border-radius:14px;margin-bottom:24px}
        [data-av="5"] .v5-patient img{width:42px;height:42px;border-radius:50%;object-fit:cover;flex-shrink:0;object-position:50% 16%}
        [data-av="5"] .v5-pname{font-size:15px;font-weight:700;color:#1b2733}
        [data-av="5"] .v5-psub{font-size:12px;color:#6e8396;margin-top:2px}
        /* quote highlight */
        [data-av="5"] .v5-quote{margin-bottom:22px;border-left:3px solid var(--cedar);padding:14px 18px;background:#f3faf9;border-radius:0 12px 12px 0}
        [data-av="5"] .v5-quote-lbl{font-size:10.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--teal-text);display:flex;align-items:center;gap:6px;margin-bottom:7px}
        [data-av="5"] .v5-quote-lbl .material-icons{font-size:14px}
        [data-av="5"] .v5-quote-txt{font-family:var(--f-editorial);font-style:italic;font-size:17px;line-height:1.6;color:#1b2733}
        /* sintese */
        [data-av="5"] .v5-sintese{font-size:14.5px;line-height:1.72;color:#3e5264;margin-bottom:28px;text-wrap:pretty}
        /* section header */
        [data-av="5"] .v5-sec{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#6e8396;display:flex;align-items:center;gap:10px;margin-bottom:14px}
        [data-av="5"] .v5-sec::after{content:'';flex:1;height:1px;background:#e8ecef}
        /* dim cards — two columns for ≥480px, single below */
        [data-av="5"] .v5-dims{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:28px}
        [data-av="5"] .v5-dims .v5-dim:last-child:nth-child(odd){grid-column:1/-1}
        [data-av="5"] .v5-dim{background:#fff;border:1px solid #e8ecef;border-radius:14px;padding:16px 17px;box-shadow:0 1px 4px rgba(27,39,49,.05)}
        [data-av="5"] .v5-dim-hd{display:flex;align-items:flex-start;gap:10px;margin-bottom:10px}
        [data-av="5"] .v5-dim-ic{width:28px;height:28px;border-radius:8px;display:grid;place-items:center;flex-shrink:0}
        [data-av="5"] .v5-dim-ic .material-icons{font-size:16px}
        [data-av="5"] .v5-dim-t{font-size:13.5px;font-weight:700;color:#1b2733;line-height:1.25;flex:1}
        [data-av="5"] .v5-dim-chip{display:inline-flex;align-items:center;gap:4px;font-size:10px;font-weight:700;border-radius:999px;padding:3px 8px;white-space:nowrap;margin-bottom:9px}
        [data-av="5"] .v5-dim-b{font-size:12.5px;line-height:1.58;color:#3e5264;text-wrap:pretty}
        /* nota */
        [data-av="5"] .v5-nota{padding:16px 18px;background:var(--indigo);border-radius:14px;margin-bottom:28px}
        [data-av="5"] .v5-nota-lbl{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.6);display:flex;align-items:center;gap:6px;margin-bottom:8px}
        [data-av="5"] .v5-nota-lbl .material-icons{font-size:14px;color:var(--cedar)}
        [data-av="5"] .v5-nota-q{font-family:var(--f-editorial);font-style:italic;font-size:17px;line-height:1.6;color:#fff}
        /* prep steps */
        [data-av="5"] .v5-focus{font-size:13.5px;font-weight:600;color:var(--indigo);background:#eef1f7;border-radius:10px;padding:12px 15px;margin-bottom:16px;line-height:1.55}
        [data-av="5"] .v5-steps{display:flex;flex-direction:column;gap:10px;margin-bottom:28px}
        [data-av="5"] .v5-step{display:flex;gap:13px;background:#fff;border:1px solid #e8ecef;border-radius:12px;padding:14px 15px;box-shadow:0 1px 3px rgba(27,39,49,.04)}
        [data-av="5"] .v5-step-n{width:26px;height:26px;border-radius:50%;background:var(--indigo);color:#fff;font-size:12px;font-weight:700;display:grid;place-items:center;flex-shrink:0;margin-top:1px}
        [data-av="5"] .v5-step-s{font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#6e8396}
        [data-av="5"] .v5-step-t{font-size:13px;line-height:1.52;color:#3e5264;margin-top:3px}
        [data-av="5"] .v5-step-t strong{color:#1b2733}
        [data-av="5"] .v5-tag{display:inline-block;margin-top:6px;font-size:9.5px;font-weight:700;color:var(--teal-text)}
        /* footer actions */
        [data-av="5"] .v5-foot{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
        [data-av="5"] .av-foot-prog{flex:1;font-size:12.5px;color:#6e8396}
        [data-av="5"] .av-foot-prog b{color:#3e5264}
        @media(max-width:480px){
          [data-av="5"] .v5-dims{grid-template-columns:1fr}
          [data-av="5"] .v5-dims .v5-dim:last-child:nth-child(odd){grid-column:auto}
          [data-av="5"] .v5-kpi-v{font-size:20px}
        }
      `), /*#__PURE__*/React.createElement("div", {
    className: "v5-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v5-header-glow",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "v5-hd-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v5-hd-title"
  }, "An\xE1lise da sess\xE3o"), /*#__PURE__*/React.createElement("span", {
    className: "v5-hd-badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons",
    style: {
      fontSize: 13
    }
  }, "check_circle"), "Avaliada")), /*#__PURE__*/React.createElement("div", {
    className: "v5-kpis"
  }, d.metrics.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "v5-kpi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v5-kpi-v"
  }, m.val), /*#__PURE__*/React.createElement("div", {
    className: "v5-kpi-l"
  }, m.lbl))))), /*#__PURE__*/React.createElement("div", {
    className: "v5-tabbar",
    role: "tablist"
  }, [['analise', 'Análise'], ['transcricao', 'Transcrição'], ['prontuario', 'Prontuário']].map(([id, l]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    role: "tab",
    "aria-selected": tab === id,
    className: 'v5-tab' + (tab === id ? ' on' : ''),
    onClick: () => setTab(id)
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "v5-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v5-inner"
  }, tab === 'analise' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "v5-patient"
  }, /*#__PURE__*/React.createElement("img", {
    src: AV_PHOTO,
    alt: AV_NAME
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v5-pname"
  }, AV_NAME, ", ", AV_AGE, " anos"), /*#__PURE__*/React.createElement("div", {
    className: "v5-psub"
  }, d.patientSub, " \xB7 Caso longitudinal"))), /*#__PURE__*/React.createElement("div", {
    className: "v5-quote"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v5-quote-lbl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons"
  }, "format_quote"), d.nota.label), /*#__PURE__*/React.createElement("div", {
    className: "v5-quote-txt"
  }, "\"", d.nota.text, "\"")), /*#__PURE__*/React.createElement("div", {
    className: "v5-sec"
  }, "S\xEDntese da sess\xE3o"), /*#__PURE__*/React.createElement("p", {
    className: "v5-sintese"
  }, d.sintese), /*#__PURE__*/React.createElement("div", {
    className: "v5-sec"
  }, "Dimens\xF5es avaliadas"), /*#__PURE__*/React.createElement("div", {
    className: "v5-dims"
  }, d.dims.map((dim, i) => {
    const c = avState(dim.value);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "v5-dim",
      "data-screen-label": dim.label
    }, /*#__PURE__*/React.createElement("div", {
      className: "v5-dim-hd"
    }, /*#__PURE__*/React.createElement("span", {
      className: "v5-dim-ic",
      style: {
        background: c.bg,
        color: c.clr
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-icons"
    }, c.ico)), /*#__PURE__*/React.createElement("span", {
      className: "v5-dim-t"
    }, dim.label)), /*#__PURE__*/React.createElement("span", {
      className: "v5-dim-chip",
      style: {
        color: c.clr,
        background: c.bg,
        border: '1px solid ' + c.bd
      }
    }, c.label), /*#__PURE__*/React.createElement("p", {
      className: "v5-dim-b"
    }, dim.texto));
  })), /*#__PURE__*/React.createElement("div", {
    className: "v5-nota"
  }, /*#__PURE__*/React.createElement("div", {
    className: "v5-nota-lbl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons"
  }, "star"), "Momento de alian\xE7a"), /*#__PURE__*/React.createElement("div", {
    className: "v5-nota-q"
  }, "\"", d.nota.text, "\"")), /*#__PURE__*/React.createElement("div", {
    className: "v5-sec"
  }, "Prepara\xE7\xE3o sess\xE3o ", d.nextNum), /*#__PURE__*/React.createElement("div", {
    className: "v5-focus"
  }, d.focusTxt), /*#__PURE__*/React.createElement("div", {
    className: "v5-steps"
  }, d.nextSteps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "v5-step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v5-step-n"
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v5-step-s"
  }, s.step), /*#__PURE__*/React.createElement("div", {
    className: "v5-step-t"
  }, s.text), /*#__PURE__*/React.createElement("span", {
    className: "v5-tag"
  }, s.tag))))), /*#__PURE__*/React.createElement(AvFooterActions, {
    setScreen: setScreen,
    cls: "v5-foot"
  })), tab === 'transcricao' && /*#__PURE__*/React.createElement(AvTranscript, null), tab === 'prontuario' && /*#__PURE__*/React.createElement(AvPront, null))));
};
window.ScreenAnaliseV5 = ScreenAnaliseV5;