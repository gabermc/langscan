// ─── Language data ────────────────────────────────────────────────────────────

const LANG_MAP = {
  'pt':'Português','pt-br':'Português (BR)','pt-pt':'Português (PT)',
  'en':'English','en-us':'English (US)','en-gb':'English (UK)',
  'es':'Español','fr':'Français','de':'Deutsch','it':'Italiano',
  'nl':'Nederlands','pl':'Polski','ru':'Русский','uk':'Українська',
  'ar':'العربية','zh':'中文','zh-cn':'中文 (简体)','zh-tw':'中文 (繁體)',
  'ja':'日本語','ko':'한국어','hi':'हिन्दी','th':'ภาษาไทย',
  'tr':'Türkçe','sv':'Svenska','da':'Dansk','fi':'Suomi','nb':'Norsk',
  'he':'עברית','el':'Ελληνικά','cs':'Čeština','ro':'Română',
  'hu':'Magyar','sk':'Slovenčina','bg':'Български','hr':'Hrvatski',
  'ca':'Català','id':'Bahasa Indonesia','ms':'Bahasa Melayu','vi':'Tiếng Việt',
};

const SCRIPT_COLORS = { latin:'#7B6EF6',cyrillic:'#FF5E5E',arabic:'#FFB547',cjk:'#3FFFA2',hangul:'#5EC4FF',hebrew:'#FF8C69',devanagari:'#FF6B9D',thai:'#A8E6CF',greek:'#DDA0DD' };
const SCRIPT_LABELS = { latin:'Latino',cyrillic:'Cirílico',arabic:'Árabe',cjk:'CJK (Chin/Jap)',hangul:'Hangul (Cor)',hebrew:'Hebraico',devanagari:'Devanagari',thai:'Tailandês',greek:'Grego' };

// Common word lists per language
const COMMON_WORDS = {
  pt: new Set(['de','a','o','que','e','do','da','em','um','para','com','uma','os','no','se','na','por','mais','as','dos','como','mas','ao','ele','das','seu','sua','ou','ser','quando','muito','há','nos','já','está','também','só','pelo','pela','até','isso','ela','entre','era','depois','sem','mesmo','aos','ter','seus','quem','nas','me','esse','eles','estão','você','tinha','foram','essa','num','nem','suas','meu','às','minha','têm','numa','pelos','pelas','este','fosse','dele','tu','te','vocês','nós','vos','lhe','lhes','meus','teu','tua','teus','tuas','nosso','nossa','nossos','nossas','deste','desta','neste','nesta','nesse','nessa','desse','dessa','isto','aqui','tudo','todos','todo','toda','todas']),
  en: new Set(['the','be','to','of','and','a','in','that','have','it','for','not','on','with','he','as','you','do','at','this','but','his','by','from','they','we','say','her','she','or','an','will','my','one','all','would','there','their','what','so','up','out','if','about','who','get','which','go','me','when','make','can','like','time','no','just','him','know','take','people','into','year','your','good','some','could','them','see','other','than','then','now','look','only','come','its','over','think','also','back','after','use','two','how','our','work','first','well','way','even','new','want','because','any','these','give','most','us']),
  es: new Set(['de','la','que','el','en','y','a','los','del','se','las','un','por','con','no','una','su','para','es','al','lo','como','más','pero','sus','le','ya','o','fue','este','ha','sí','porque','esta','entre','cuando','muy','sin','sobre','ser','tiene','también','me','hasta','hay','donde','han','quien','están','estado','desde','todo','nos','durante','estados','todos','uno','les','ni','contra','otros','ese','eso','ante','ellos','e','esto','mí','antes','algunos','qué','unos','yo','otro','otras','otra','él','tanto','esa','estos','mucho','quienes','nada','muchos','cual','poco','ella','estar','estas','algunas','algo','nosotros']),
  fr: new Set(['le','la','les','de','du','des','un','une','et','en','au','aux','je','tu','il','elle','nous','vous','ils','elles','ce','qui','que','quoi','dont','où','ne','pas','plus','par','sur','dans','avec','sans','sous','entre','vers','chez','est','sont','être','avoir','faire','pouvoir','vouloir','aller','voir','savoir','prendre','venir','tout','tous','toute','toutes','mon','ma','mes','ton','ta','tes','son','sa','ses','notre','votre','leur','leurs','cet','cette','ces','même','comme','mais','ou','donc','or','ni','car','si','bien','très','aussi','alors','encore','déjà','toujours','jamais','souvent','parfois']),
  de: new Set(['der','die','das','des','dem','den','ein','eine','einer','einem','einen','und','in','ist','von','zu','mit','sich','auf','für','im','nicht','an','als','auch','es','an','bei','nach','noch','war','so','aus','durch','wird','aber','wird','haben','ihre','seiner','seine','nur','um','über','man','sie','zwei','kann','doch','vor','dieser','mich','ihn','uns','mir','wir','ihn','sie','ja','eine','sein','haben','dieser','oder','habe','ihre','wir','dort','wo','wenn','dann','mehr','was','wer','wie','alle','schon','beim','zum']),
  it: new Set(['di','il','la','che','e','in','un','è','non','del','una','per','con','dei','le','si','da','lo','dei','nel','ha','ho','mi','su','al','sono','ci','più','se','ma','questo','anche','delle','nella','agli','alla','come','quella','quello','tra','gli','quando','lui','lei','noi','voi','loro','mio','mia','miei','mie','tuo','tua','tuoi','tue','suo','sua','suoi','sue','nostro','nostra','nostri','nostre','vostro','vostra','vostri','vostre']),
};

const LANG_SCRIPT = {
  ru:'cyrillic',uk:'cyrillic',bg:'cyrillic',
  ar:'arabic',he:'hebrew',hi:'devanagari',
  th:'thai',el:'greek',zh:'cjk',ja:'cjk',ko:'hangul',
};

// Map of country ISO 2-letter codes to full country names (for abbreviation detection)
const COUNTRY_ABBR_MAP = {
  'BR': 'Brasil', 'CO': 'Colombia', 'MX': 'México', 'AR': 'Argentina',
  'CL': 'Chile', 'PE': 'Peru', 'VE': 'Venezuela', 'EC': 'Ecuador',
  'BO': 'Bolivia', 'PY': 'Paraguay', 'UY': 'Uruguay', 'CR': 'Costa Rica',
  'PA': 'Panamá', 'GT': 'Guatemala', 'SV': 'El Salvador', 'HN': 'Honduras',
  'NI': 'Nicaragua', 'DO': 'República Dominicana', 'CU': 'Cuba', 'PR': 'Puerto Rico',
  'US': 'Estados Unidos', 'CA': 'Canadá', 'GB': 'Reino Unido', 'DE': 'Alemanha',
  'FR': 'França', 'ES': 'Espanha', 'IT': 'Itália', 'PT': 'Portugal',
  'NL': 'Países Baixos', 'BE': 'Bélgica', 'CH': 'Suíça', 'AT': 'Áustria',
  'PL': 'Polônia', 'RU': 'Rússia', 'CN': 'China', 'JP': 'Japão',
  'KR': 'Coreia do Sul', 'IN': 'Índia', 'AU': 'Austrália', 'NZ': 'Nova Zelândia',
  'ZA': 'África do Sul', 'NG': 'Nigéria', 'EG': 'Egito', 'SA': 'Arábia Saudita',
  'AE': 'Emirados Árabes', 'TR': 'Turquia', 'ID': 'Indonésia', 'TH': 'Tailândia',
  'VN': 'Vietnã', 'MY': 'Malásia', 'SG': 'Singapura', 'PH': 'Filipinas',
};

// ─── Page scan function (injected into tab) ───────────────────────────────────

function pageScanFn() {
  function pct(n,total){ return Math.round((n/total)*100); }
  function analyzeCharacters(text){
    const s=text.slice(0,2000);
    let latin=0,cyrillic=0,arabic=0,cjk=0,hangul=0,hebrew=0,devanagari=0,thai=0,greek=0,other=0;
    for(const ch of s){
      const cp=ch.codePointAt(0);
      if((cp>=0x41&&cp<=0x7A)||(cp>=0xC0&&cp<=0x24F))latin++;
      else if(cp>=0x400&&cp<=0x4FF)cyrillic++;
      else if(cp>=0x600&&cp<=0x6FF)arabic++;
      else if((cp>=0x4E00&&cp<=0x9FFF)||(cp>=0x3040&&cp<=0x30FF))cjk++;
      else if(cp>=0xAC00&&cp<=0xD7AF)hangul++;
      else if(cp>=0x590&&cp<=0x5FF)hebrew++;
      else if(cp>=0x900&&cp<=0x97F)devanagari++;
      else if(cp>=0xE00&&cp<=0xE7F)thai++;
      else if(cp>=0x370&&cp<=0x3FF)greek++;
      else if(ch.trim().length>0)other++;
    }
    const total=latin+cyrillic+arabic+cjk+hangul+hebrew+devanagari+thai+greek+other||1;
    return{latin:pct(latin,total),cyrillic:pct(cyrillic,total),arabic:pct(arabic,total),cjk:pct(cjk,total),hangul:pct(hangul,total),hebrew:pct(hebrew,total),devanagari:pct(devanagari,total),thai:pct(thai,total),greek:pct(greek,total)};
  }
  function extractMainText(){
    const skip=new Set(['script','style','noscript','svg','head','nav','footer','iframe']);
    const walker=document.createTreeWalker(document.body||document.documentElement,NodeFilter.SHOW_TEXT,{acceptNode(node){let el=node.parentElement;while(el){if(skip.has(el.tagName.toLowerCase()))return NodeFilter.FILTER_REJECT;el=el.parentElement;}return node.textContent.trim().length>3?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP;}});
    let text='',node;
    while((node=walker.nextNode())&&text.length<5000)text+=' '+node.textContent.trim();
    return text.trim();
  }
  const bodyText=extractMainText();
  const charStats=analyzeCharacters(bodyText);
  const entries=Object.entries(charStats).sort((a,b)=>b[1]-a[1]);
  const detectedScript=entries[0][1]>5?entries[0][0]:'latin';

  // Extra meta fields
  const metaDescription = document.querySelector('meta[name="description"]')?.content
    || document.querySelector('meta[property="og:description"]')?.content || null;
  const metaKeywords = document.querySelector('meta[name="keywords"]')?.content || null;
  const canonical = document.querySelector('link[rel="canonical"]')?.href || null;

  return{
    htmlLang:document.documentElement.lang||null,
    metaLang:document.querySelector('meta[http-equiv="content-language"]')?.content||null,
    ogLocale:document.querySelector('meta[property="og:locale"]')?.content||null,
    detectedScript,charStats,
    wordCount:bodyText.trim().split(/\s+/).filter(w=>w.length>0).length,
    charCount:bodyText.replace(/\s/g,'').length,
    selectedText:window.getSelection()?.toString().trim()||null,
    pageTitle:document.title,
    pageUrl:window.location.href,
    metaDescription,
    metaKeywords,
    canonical,
    bodyText:bodyText.slice(0,8000)
  };
}

// ─── Highlight inject/clear functions ─────────────────────────────────────────

function injectHighlightsFn(foreignWords) {
  const MARKER = 'langscan-hl';
  document.querySelectorAll('.' + MARKER).forEach(el => {
    el.replaceWith(document.createTextNode(el.textContent));
  });
  if (!foreignWords || foreignWords.length === 0) return 0;
  const wordSet = new Set(foreignWords.map(w => w.toLowerCase()));
  const skip = new Set(['script','style','noscript','svg','head','nav','footer','iframe','input','textarea']);
  let count = 0;
  function walkAndHighlight(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        let el = node.parentElement;
        if (el && el.classList.contains(MARKER)) return NodeFilter.FILTER_REJECT;
        while (el) {
          if (skip.has(el.tagName.toLowerCase())) return NodeFilter.FILTER_REJECT;
          el = el.parentElement;
        }
        return node.textContent.trim().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) nodes.push(node);
    for (const textNode of nodes) {
      const text = textNode.textContent;
      const regex = new RegExp('\\b(' + foreignWords.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')\\b', 'gi');
      if (!regex.test(text)) continue;
      regex.lastIndex = 0;
      const frag = document.createDocumentFragment();
      let last = 0, match;
      while ((match = regex.exec(text)) !== null) {
        if (match.index > last) frag.appendChild(document.createTextNode(text.slice(last, match.index)));
        const span = document.createElement('span');
        span.className = MARKER;
        span.textContent = match[0];
        span.style.cssText = 'background:#FFB547 !important;color:#1A1000 !important;border-radius:3px !important;padding:0 2px !important;font-weight:600 !important;outline:2px solid rgba(255,181,71,0.5) !important;';
        span.title = 'Palavra estrangeira detectada pelo LangScan';
        frag.appendChild(span);
        count++;
        last = match.index + match[0].length;
      }
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      textNode.parentNode.replaceChild(frag, textNode);
    }
  }
  walkAndHighlight(document.body || document.documentElement);
  return count;
}

function clearHighlightsFn() {
  const MARKER = 'langscan-hl';
  document.querySelectorAll('.' + MARKER).forEach(el => {
    el.replaceWith(document.createTextNode(el.textContent));
  });
}

// ─── In-page search (inject/navigate) ────────────────────────────────────────

function injectSearchHighlightsFn(query) {
  const MARKER = 'langscan-search';
  // Clear previous
  document.querySelectorAll('.' + MARKER).forEach(el => {
    el.replaceWith(document.createTextNode(el.textContent));
  });
  if (!query || query.trim().length === 0) return 0;

  const skip = new Set(['script','style','noscript','svg','head','nav','footer','iframe','input','textarea']);
  let count = 0;
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(escapedQuery, 'gi');

  const walker = document.createTreeWalker(document.body || document.documentElement, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      let el = node.parentElement;
      if (el && el.classList.contains(MARKER)) return NodeFilter.FILTER_REJECT;
      while (el) {
        if (skip.has(el.tagName.toLowerCase())) return NodeFilter.FILTER_REJECT;
        el = el.parentElement;
      }
      return node.textContent.trim().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  const nodes = [];
  let node;
  while ((node = walker.nextNode())) nodes.push(node);

  for (const textNode of nodes) {
    const text = textNode.textContent;
    if (!regex.test(text)) { regex.lastIndex = 0; continue; }
    regex.lastIndex = 0;
    const frag = document.createDocumentFragment();
    let last = 0, match;
    while ((match = regex.exec(text)) !== null) {
      if (match.index > last) frag.appendChild(document.createTextNode(text.slice(last, match.index)));
      const span = document.createElement('span');
      span.className = MARKER;
      span.dataset.idx = count;
      span.textContent = match[0];
      span.style.cssText = 'background:rgba(168,155,255,0.35) !important;color:#F0EFF8 !important;border-radius:3px !important;padding:0 2px !important;outline:2px solid rgba(123,110,246,0.7) !important;';
      frag.appendChild(span);
      count++;
      last = match.index + match[0].length;
    }
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    textNode.parentNode.replaceChild(frag, textNode);
  }
  return count;
}

function scrollToSearchHitFn(idx) {
  const MARKER = 'langscan-search';
  const all = document.querySelectorAll('.' + MARKER);
  all.forEach((el, i) => {
    if (i === idx) {
      el.style.cssText = 'background:#A89BFF !important;color:#0A0A0F !important;border-radius:3px !important;padding:0 2px !important;outline:2px solid #7B6EF6 !important;font-weight:700 !important;';
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      el.style.cssText = 'background:rgba(168,155,255,0.35) !important;color:#F0EFF8 !important;border-radius:3px !important;padding:0 2px !important;outline:2px solid rgba(123,110,246,0.7) !important;';
    }
  });
}

function clearSearchHighlightsFn() {
  const MARKER = 'langscan-search';
  document.querySelectorAll('.' + MARKER).forEach(el => {
    el.replaceWith(document.createTextNode(el.textContent));
  });
}

// ─── Language resolution ──────────────────────────────────────────────────────

function resolveLanguage(data, selectedLang) {
  if (selectedLang && selectedLang !== 'auto') {
    const name = LANG_MAP[selectedLang] || selectedLang.toUpperCase();
    return { name, code: selectedLang, confidence: 95, sources: [{ source: 'selecionado', confidence: 95 }] };
  }
  const candidates = [];
  const declared = [data.htmlLang, data.metaLang, data.ogLocale]
    .filter(Boolean).map(l => l.toLowerCase().replace('_','-').trim());
  for (const lang of declared) {
    const base = lang.split('-')[0];
    if (LANG_MAP[lang] || LANG_MAP[base]) candidates.push({ lang, source: 'html/meta', confidence: 88 });
  }
  const script = data.detectedScript;
  const scriptLangMap = { cyrillic:'ru', arabic:'ar', hebrew:'he', devanagari:'hi', thai:'th', greek:'el', cjk:'zh', hangul:'ko' };
  if (scriptLangMap[script] && !candidates.some(c => c.lang.startsWith(scriptLangMap[script]))) {
    candidates.push({ lang: scriptLangMap[script], source: 'escrita', confidence: 72 });
  }
  if (candidates.length === 0) candidates.push({ lang:'en', source:'padrão', confidence: 40 });
  const best = candidates[0];
  const shortLang = best.lang.split('-')[0];
  const name = LANG_MAP[best.lang] || LANG_MAP[shortLang] || best.lang.toUpperCase();
  let conf = best.confidence;
  if (data.htmlLang && data.detectedScript) conf = Math.min(conf + 5, 97);
  return { name, code: shortLang, confidence: conf, sources: candidates };
}

// ─── Foreign word detection ───────────────────────────────────────────────────

function detectForeignWords(bodyText, baseLang) {
  if (LANG_SCRIPT[baseLang]) return [];
  const knownWords = COMMON_WORDS[baseLang];
  if (!knownWords) return [];
  const allWords = bodyText.match(/\b[a-zA-ZÀ-ÿ]{3,}\b/g) || [];
  const freq = {};
  for (const w of allWords) {
    const lw = w.toLowerCase();
    freq[lw] = (freq[lw] || 0) + 1;
  }
  const otherLangs = Object.keys(COMMON_WORDS).filter(l => l !== baseLang);
  const foreignWords = [];
  for (const [word, count] of Object.entries(freq)) {
    if (knownWords.has(word)) continue;
    if (word.length < 3) continue;
    if (/^\d+$/.test(word)) continue;
    const foundIn = otherLangs.filter(l => COMMON_WORDS[l].has(word));
    if (foundIn.length > 0) {
      foreignWords.push({ word, count, langs: foundIn });
    }
  }
  return foreignWords.sort((a,b) => b.count - a.count).slice(0, 40);
}

// ─── Country abbreviation checker ────────────────────────────────────────────

function checkCountryAbbreviations(texts) {
  // Regex: matches "Word ABBR" where ABBR is 2 uppercase letters not followed by more uppercase
  // e.g. "Samsung BR" or "Samsung CO"
  const abbrevPattern = /\b([A-ZÁÀÂÃÉÈÊÍÌÎÓÒÔÕÚÙÛÇ][a-záàâãéèêíìîóòôõúùûç]+(?:\s+[A-ZÁÀÂÃÉÈÊÍÌÎÓÒÔÕÚÙÛÇ][a-záàâãéèêíìîóòôõúùûç]+)*)\s+([A-Z]{2})\b/g;
  const alerts = [];
  for (const text of texts) {
    if (!text) continue;
    let match;
    while ((match = abbrevPattern.exec(text)) !== null) {
      const brand = match[1];
      const code = match[2];
      if (COUNTRY_ABBR_MAP[code]) {
        alerts.push({ brand, code, country: COUNTRY_ABBR_MAP[code] });
      }
    }
  }
  return alerts;
}

// ─── UI helpers ───────────────────────────────────────────────────────────────

function showState(state) {
  document.getElementById('idleState').style.display = state === 'idle' ? 'block' : 'none';
  document.getElementById('loadingState').style.display = state === 'loading' ? 'block' : 'none';
  document.getElementById('errorState').style.display = state === 'error' ? 'block' : 'none';
  const res = document.getElementById('resultState');
  state === 'result' ? res.classList.add('show') : res.classList.remove('show');
}

function renderSources(sources) {
  const row = document.getElementById('sourcesRow');
  row.innerHTML = '';
  const seen = new Set();
  for (const s of sources) {
    if (seen.has(s.source)) continue;
    seen.add(s.source);
    const tag = document.createElement('span');
    tag.className = 'source-tag ' + (s.confidence >= 80 ? 'match' : 'neutral');
    tag.textContent = s.source;
    row.appendChild(tag);
  }
}

function renderScripts(stats) {
  const container = document.getElementById('scriptBars');
  container.innerHTML = '';
  const entries = Object.entries(stats).filter(([,v]) => v > 0).sort((a,b) => b[1]-a[1]);
  if (!entries.length) { container.innerHTML = '<p style="font-size:11px;color:var(--muted)">Sem dados.</p>'; return; }
  for (const [key, pct] of entries) {
    const row = document.createElement('div');
    row.className = 'script-row';
    row.innerHTML = `<span class="script-name">${SCRIPT_LABELS[key]||key}</span><div class="script-bar-wrap"><div class="script-bar" data-pct="${pct}" style="background:${SCRIPT_COLORS[key]||'#7B6EF6'}"></div></div><span class="script-pct">${pct}%</span>`;
    container.appendChild(row);
  }
  requestAnimationFrame(() => {
    document.querySelectorAll('.script-bar').forEach(b => { b.style.width = b.dataset.pct + '%'; });
  });
}

function renderHighlightSection(foreignWords, baseLang) {
  const section = document.getElementById('highlightSection');
  const summary = document.getElementById('highlightSummary');
  const list = document.getElementById('foreignWordsList');
  const clearBtn = document.getElementById('clearBtn');
  const gotoBar = document.getElementById('foreignGotoBar');
  const gotoBtn = document.getElementById('foreignGotoBtn');

  section.style.display = 'block';
  list.innerHTML = '';
  gotoBar.style.display = 'none';

  if (LANG_SCRIPT[baseLang]) {
    summary.innerHTML = `<div class="hl-dot" style="background:var(--muted)"></div><p style="color:var(--muted)">Detecção de palavras estrangeiras disponível apenas para idiomas latinos.</p>`;
    document.getElementById('highlightToggle').disabled = true;
    return;
  }

  if (!COMMON_WORDS[baseLang]) {
    summary.innerHTML = `<div class="hl-dot" style="background:var(--muted)"></div><p style="color:var(--muted)">Banco de palavras não disponível para este idioma ainda.</p>`;
    document.getElementById('highlightToggle').disabled = true;
    return;
  }

  document.getElementById('highlightToggle').disabled = false;

  if (foreignWords.length === 0) {
    summary.innerHTML = `<div class="hl-dot" style="background:var(--green)"></div><p><strong class="color-green">Nenhuma palavra estrangeira</strong> detectada. O texto parece uniforme.</p>`;
    clearBtn.style.display = 'none';
  } else {
    summary.innerHTML = `<div class="hl-dot" style="background:var(--amber)"></div><p><strong class="color-amber">${foreignWords.length} palavras</strong> em outro idioma encontradas na página.</p>`;

    let selectedTag = null;

    for (const { word } of foreignWords) {
      const tag = document.createElement('span');
      tag.className = 'word-tag';
      tag.textContent = word;
      tag.title = `Clique para buscar "${word}" na página`;
      tag.addEventListener('click', () => {
        // Deselect previous
        if (selectedTag) selectedTag.style.outline = '';
        selectedTag = tag;
        tag.style.outline = '2px solid var(--amber)';

        // Fill search and run
        const input = document.getElementById('searchInput');
        input.value = word;
        input.dispatchEvent(new Event('input'));
        doSearch(word);

        // Show goto bar
        gotoBar.style.display = 'flex';
        gotoBtn.dataset.word = word;
      });
      list.appendChild(tag);
    }

    // Goto btn click: scroll to current search hit
    gotoBtn.onclick = async () => {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (!tab?.id) return;
      if (searchTotalHits > 0) {
        await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: scrollToSearchHitFn,
          args: [searchCurrentIdx >= 0 ? searchCurrentIdx : 0]
        });
      }
    };
  }
}

function renderPageInfo(data) {
  // Title
  document.getElementById('pageTitle').textContent = data.pageTitle || '(sem título)';

  // Description
  const rowDesc = document.getElementById('rowDescription');
  if (data.metaDescription) {
    rowDesc.style.display = 'flex';
    document.getElementById('pageDescription').textContent = data.metaDescription;
  } else {
    rowDesc.style.display = 'none';
  }

  // Keywords
  const rowKw = document.getElementById('rowKeywords');
  if (data.metaKeywords) {
    rowKw.style.display = 'flex';
    document.getElementById('pageKeywords').textContent = data.metaKeywords;
  } else {
    rowKw.style.display = 'none';
  }

  // URL (clickable)
  const urlEl = document.getElementById('pageUrl');
  if (data.pageUrl) {
    urlEl.innerHTML = '';
    const a = document.createElement('a');
    a.href = data.pageUrl;
    a.textContent = data.pageUrl;
    a.target = '_blank';
    a.rel = 'noopener';
    urlEl.appendChild(a);
  } else {
    urlEl.textContent = '—';
  }

  // Canonical (clickable)
  const rowCan = document.getElementById('rowCanonical');
  const canEl = document.getElementById('pageCanonical');
  if (data.canonical && data.canonical !== data.pageUrl) {
    rowCan.style.display = 'flex';
    canEl.innerHTML = '';
    const a = document.createElement('a');
    a.href = data.canonical;
    a.textContent = data.canonical;
    a.target = '_blank';
    a.rel = 'noopener';
    canEl.appendChild(a);
  } else if (data.canonical) {
    rowCan.style.display = 'flex';
    canEl.innerHTML = '';
    const a = document.createElement('a');
    a.href = data.canonical;
    a.textContent = data.canonical;
    a.target = '_blank';
    a.rel = 'noopener';
    canEl.appendChild(a);
  } else {
    rowCan.style.display = 'none';
  }

  // Abbreviation alert
  const textsToCheck = [
    data.pageTitle,
    data.metaDescription,
    data.metaKeywords,
    data.canonical,
    data.pageUrl,
  ];
  const abbrAlerts = checkCountryAbbreviations(textsToCheck);
  const alertEl = document.getElementById('abbrAlert');
  const alertMsg = document.getElementById('abbrAlertMsg');
  if (abbrAlerts.length > 0) {
    alertEl.style.display = 'flex';
    const msgs = abbrAlerts.map(a =>
      `"${a.brand} ${a.code}" — use o nome completo: "${a.brand} ${a.country}"`
    );
    alertMsg.textContent = '⚠ País abreviado: ' + msgs.join('; ');
  } else {
    alertEl.style.display = 'none';
  }
}

// ─── Search functionality ─────────────────────────────────────────────────────

let searchTabId = null;
let searchCurrentIdx = 0;
let searchTotalHits = 0;

async function doSearch(query) {
  const q = query || document.getElementById('searchInput').value;
  if (!q.trim()) {
    await clearSearch();
    return;
  }

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) return;
  searchTabId = tab.id;

  const results = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: injectSearchHighlightsFn,
    args: [q]
  });

  const count = results?.[0]?.result || 0;
  searchTotalHits = count;
  searchCurrentIdx = count > 0 ? 0 : -1;

  const navBar = document.getElementById('searchNavBar');
  const totalEl = document.getElementById('searchTotalHits');
  const currEl = document.getElementById('searchCurrentIdx');

  if (count > 0) {
    navBar.classList.add('visible');
    totalEl.textContent = count;
    currEl.textContent = 1;
    document.getElementById('searchPrevBtn').disabled = count <= 1;
    document.getElementById('searchNextBtn').disabled = count <= 1;
    // Scroll to first hit
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: scrollToSearchHitFn,
      args: [0]
    });
  } else {
    navBar.classList.add('visible');
    totalEl.textContent = '0';
    currEl.textContent = '0';
    document.getElementById('searchPrevBtn').disabled = true;
    document.getElementById('searchNextBtn').disabled = true;
  }
}

async function navigateSearch(direction) {
  if (!searchTabId || searchTotalHits === 0) return;
  searchCurrentIdx = (searchCurrentIdx + direction + searchTotalHits) % searchTotalHits;
  document.getElementById('searchCurrentIdx').textContent = searchCurrentIdx + 1;
  await chrome.scripting.executeScript({
    target: { tabId: searchTabId },
    func: scrollToSearchHitFn,
    args: [searchCurrentIdx]
  });
}

async function clearSearch() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab?.id) {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: clearSearchHighlightsFn
    });
  }
  document.getElementById('searchInput').value = '';
  document.getElementById('searchNavBar').classList.remove('visible');
  searchTotalHits = 0;
  searchCurrentIdx = -1;
}

// ─── Main scan ────────────────────────────────────────────────────────────────

let lastTabId = null;
let lastForeignWords = [];
let lastBaseLang = 'en';

async function scan() {
  const btn = document.getElementById('scanBtn');
  btn.disabled = true;
  btn.textContent = '…';
  document.getElementById('highlightToggle').checked = false;
  document.getElementById('clearBtn').style.display = 'none';
  showState('loading');

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab?.id) throw new Error('Aba não acessível.');
    lastTabId = tab.id;

    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: pageScanFn
    });

    const data = results?.[0]?.result;
    if (!data) throw new Error('Não foi possível escanear esta página.');

    const selectedLang = document.getElementById('langSelect').value;
    const lang = resolveLanguage(data, selectedLang);
    lastBaseLang = lang.code;

    const foreignWords = detectForeignWords(data.bodyText || '', lang.code);
    lastForeignWords = foreignWords.map(fw => fw.word);

    // Render page info (expanded)
    renderPageInfo(data);

    document.getElementById('langName').textContent = lang.name;
    document.getElementById('langCode').textContent = lang.code;

    const confBar = document.getElementById('confBar');
    confBar.style.width = '0%';
    document.getElementById('confPct').textContent = lang.confidence + '%';
    setTimeout(() => { confBar.style.width = lang.confidence + '%'; }, 80);

    renderSources(lang.sources);
    document.getElementById('wordCount').textContent = (data.wordCount || 0).toLocaleString('pt-BR');
    document.getElementById('charCount').textContent = (data.charCount || 0).toLocaleString('pt-BR');
    renderHighlightSection(foreignWords, lang.code);
    renderScripts(data.charStats);

    showState('result');

  } catch (err) {
    let msg = err.message || 'Erro desconhecido.';
    if (msg.includes('Cannot access') || msg.includes('chrome://')) {
      msg = 'Esta página não pode ser acessada.\nTente em um site normal (ex: wikipedia.org).';
    }
    document.getElementById('errorMsg').textContent = msg;
    showState('error');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Escanear';
  }
}

// ─── Highlight toggle ─────────────────────────────────────────────────────────

document.getElementById('highlightToggle').addEventListener('change', async (e) => {
  const clearBtn = document.getElementById('clearBtn');
  if (!lastTabId) return;
  if (e.target.checked) {
    if (lastForeignWords.length === 0) return;
    await chrome.scripting.executeScript({
      target: { tabId: lastTabId },
      func: injectHighlightsFn,
      args: [lastForeignWords]
    });
    clearBtn.style.display = 'block';
  } else {
    await chrome.scripting.executeScript({
      target: { tabId: lastTabId },
      func: clearHighlightsFn
    });
    clearBtn.style.display = 'none';
  }
});

document.getElementById('clearBtn').addEventListener('click', async () => {
  if (!lastTabId) return;
  await chrome.scripting.executeScript({ target: { tabId: lastTabId }, func: clearHighlightsFn });
  document.getElementById('highlightToggle').checked = false;
  document.getElementById('clearBtn').style.display = 'none';
});

// ─── Search event listeners ───────────────────────────────────────────────────

document.getElementById('searchGoBtn').addEventListener('click', () => doSearch());

document.getElementById('gotoPageBtn').addEventListener('click', async () => {
  if (!searchTabId || searchTotalHits === 0) return;
  await chrome.scripting.executeScript({
    target: { tabId: searchTabId },
    func: scrollToSearchHitFn,
    args: [searchCurrentIdx >= 0 ? searchCurrentIdx : 0]
  });
});

document.getElementById('searchInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && (e.ctrlKey || e.metaKey || !e.shiftKey)) {
    e.preventDefault();
    if (e.shiftKey) {
      navigateSearch(-1);
    } else if (searchTotalHits > 0 && document.getElementById('searchInput').value === document.getElementById('searchInput').dataset.lastQuery) {
      navigateSearch(1);
    } else {
      doSearch();
    }
  }
});

// Auto-resize textarea
document.getElementById('searchInput').addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = Math.min(this.scrollHeight, 120) + 'px';
});

document.getElementById('searchPrevBtn').addEventListener('click', () => navigateSearch(-1));
document.getElementById('searchNextBtn').addEventListener('click', () => navigateSearch(1));
document.getElementById('clearSearchBtn').addEventListener('click', clearSearch);

// ─── Init ─────────────────────────────────────────────────────────────────────

document.getElementById('scanBtn').addEventListener('click', scan);
document.addEventListener('DOMContentLoaded', scan);

// ─── QA Accordion ─────────────────────────────────────────────────────────────

document.getElementById('qaAccordionHeader').addEventListener('click', () => {
  document.getElementById('qaAccordion').classList.toggle('open');
});

document.getElementById('imgAuditBtn').addEventListener('click', runImageAudit);
document.getElementById('altRunBtn').addEventListener('click', runAltChecker);

// ─── QA: Country code map ──────────────────────────────────────────────────────

const COUNTRY_PATH_MAP = {
  'mx':'México','br':'Brasil','co':'Colombia','ar':'Argentina',
  'cl':'Chile','pe':'Peru','uy':'Uruguay','py':'Paraguai',
  'latin':'Latin','latin_en':'Latin EN',
};

function extractCountryFromUrl(url) {
  try {
    const u = new URL(url);
    const match = u.pathname.match(/\/([a-z]{2}(?:_[a-z]{2})?)\//i);
    if (match) { const c = match[1].toLowerCase(); if (COUNTRY_PATH_MAP[c]) return c; }
    const sub = u.hostname.match(/^([a-z]{2})\./i);
    if (sub) { const c = sub[1].toLowerCase(); if (COUNTRY_PATH_MAP[c]) return c; }
  } catch(e) {}
  return null;
}

// ─── QA injected functions ────────────────────────────────────────────────────

function scanImageCountryFn() {
  // Samsung uses lazy loading: real src may be in data-src, data-original, currentSrc, or srcset
  function getRealSrc(img) {
    return img.currentSrc ||
      img.getAttribute('data-src') ||
      img.getAttribute('data-original') ||
      img.getAttribute('data-lazy-src') ||
      img.getAttribute('data-delayed-src') ||
      img.src || '';
  }

  const imgs = Array.from(document.querySelectorAll('img'));
  const result = [];

  for (const img of imgs) {
    const src = getRealSrc(img);
    if (!src || src.startsWith('data:') || src.includes('blank.gif') || src.trim() === '') continue;

    // Extract country code from path: /assets/mx/, /cl/, /images/cl/, etc.
    // Pattern: /XX/ where XX is a known 2-letter country or 'latin'/'latin_en'
    const countryPattern = /\/(?:assets\/|content\/dam\/)?([a-z]{2}(?:_[a-z]{2})?)\//gi;
    let imgCountry = null;
    const knownCodes = ['mx','br','co','ar','cl','pe','uy','py','latin_en','latin'];
    let m;
    while ((m = countryPattern.exec(src)) !== null) {
      const code = m[1].toLowerCase();
      if (knownCodes.includes(code)) { imgCountry = code; break; }
    }

    const shortSrc = src.length > 65 ? '…' + src.slice(-62) : src;
    result.push({ src, shortSrc, imgCountry, hasCountryInPath: !!imgCountry });
  }

  return { images: result, pageUrl: window.location.href, total: result.length };
}

function highlightImgByCountryFn(srcs) {
  function getRealSrc(img) {
    return img.currentSrc || img.getAttribute('data-src') || img.getAttribute('data-original') || img.getAttribute('data-lazy-src') || img.src || '';
  }
  document.querySelectorAll('[data-ls-country]').forEach(el => {
    el.style.outline = ''; el.style.boxShadow = ''; el.removeAttribute('data-ls-country');
  });
  document.querySelectorAll('img').forEach(img => {
    const src = getRealSrc(img);
    if (srcs.includes(src)) {
      img.setAttribute('data-ls-country','divergent');
      img.style.outline = '4px solid #FF5E5E';
      img.style.boxShadow = '0 0 0 6px rgba(255,94,94,0.25)';
    }
  });
}

function clearImgCountryHighlightsFn() {
  document.querySelectorAll('[data-ls-country]').forEach(el => {
    el.style.outline = ''; el.style.boxShadow = ''; el.removeAttribute('data-ls-country');
  });
}

function scrollToImgFn(src) {
  function getRealSrc(img) {
    return img.currentSrc || img.getAttribute('data-src') || img.getAttribute('data-original') || img.getAttribute('data-lazy-src') || img.src || '';
  }
  const img = Array.from(document.querySelectorAll('img')).find(i => getRealSrc(i) === src);
  if (img) img.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


// ─── QA: Alt Text Checker ─────────────────────────────────────────────────────

// ─── Alt text injected functions ─────────────────────────────────────────────

function scanAltTextFn() {
  function getRealSrc(img) {
    return img.currentSrc || img.getAttribute('data-src') || img.getAttribute('data-original') || img.getAttribute('data-lazy-src') || img.src || '';
  }
  const imgs = Array.from(document.querySelectorAll('img'));
  const result = [];
  let idx = 0;
  for (const img of imgs) {
    const src = getRealSrc(img);
    if (!src || src.includes('blank.gif') || src.startsWith('data:') || src.trim() === '') continue;
    const alt = img.getAttribute('alt'); // null=missing, ''=empty, string=has alt
    const shortSrc = src.length > 55 ? '…' + src.slice(-52) : src;
    result.push({ index: idx++, src, shortSrc, alt, missing: alt === null, empty: alt === '', altText: alt || '' });
  }
  return result;
}

function highlightAltIssuesFn(indices) {
  document.querySelectorAll('[data-ls-alt]').forEach(el => {
    el.style.outline = ''; el.removeAttribute('data-ls-alt');
  });
  document.getElementById('langscan-alt-style')?.remove();

  const style = document.createElement('style');
  style.id = 'langscan-alt-style';
  style.textContent = `
    @keyframes ls-pulse {
      0%   { box-shadow: 0 0 0 3px rgba(255,94,94,0.9),  0 0 20px rgba(255,94,94,0.5); }
      50%  { box-shadow: 0 0 0 8px rgba(255,94,94,0.25), 0 0 35px rgba(255,94,94,0.2); }
      100% { box-shadow: 0 0 0 3px rgba(255,94,94,0.9),  0 0 20px rgba(255,94,94,0.5); }
    }
    [data-ls-alt="issue"] {
      outline: 4px solid #FF5E5E !important;
      animation: ls-pulse 1.6s ease-in-out infinite !important;
      position: relative !important;
    }
  `;
  document.head.appendChild(style);

  function getRealSrc(img) {
    return img.currentSrc || img.getAttribute('data-src') || img.getAttribute('data-original') || img.getAttribute('data-lazy-src') || img.src || '';
  }

  // Build the same filtered list as scanAltTextFn to match indices
  const allImgs = Array.from(document.querySelectorAll('img')).filter(img => {
    const src = getRealSrc(img);
    return src && !src.includes('blank.gif') && !src.startsWith('data:') && src.trim() !== '';
  });

  indices.forEach(idx => {
    const img = allImgs[idx];
    if (img) {
      img.setAttribute('data-ls-alt', 'issue');
      img.title = '[LangScan QA] Alt text ausente ou não traduzido';
    }
  });
}

function clearAltHighlightsFn() {
  document.querySelectorAll('[data-ls-alt]').forEach(el => {
    el.style.outline = ''; el.removeAttribute('data-ls-alt');
  });
  document.getElementById('langscan-alt-style')?.remove();
}

function scrollToImgByIndexFn(idx) {
  function getRealSrc(img) {
    return img.currentSrc || img.getAttribute('data-src') || img.getAttribute('data-original') || img.getAttribute('data-lazy-src') || img.src || '';
  }
  const all = Array.from(document.querySelectorAll('img')).filter(img => {
    const src = getRealSrc(img);
    return src && !src.includes('blank.gif') && !src.startsWith('data:') && src.trim() !== '';
  });
  all[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ─── QA: Image Country Audit ──────────────────────────────────────────────────

let imgHighlightsActive = false;

async function runImageAudit() {
  const btn = document.getElementById('imgAuditBtn');
  const resultEl = document.getElementById('imgAuditResult');
  btn.textContent = '…'; btn.disabled = true;
  resultEl.style.display = 'none'; resultEl.innerHTML = '';

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab?.id) throw new Error('Aba não acessível.');
    lastTabId = tab.id;

    const res = await chrome.scripting.executeScript({ target: { tabId: tab.id }, func: scanImageCountryFn });
    const data = res?.[0]?.result;
    if (!data) throw new Error('Erro ao varrer imagens.');

    resultEl.style.display = 'flex';
    resultEl.style.flexDirection = 'column';
    resultEl.style.gap = '5px';
    imgHighlightsActive = false;

    if (data.total === 0) {
      resultEl.innerHTML = `<div class="qa-summary-row"><span style="color:var(--muted)">Nenhuma imagem com país no path encontrada.</span></div>`;
      return;
    }

    const expectedCountry = extractCountryFromUrl(data.pageUrl);
    const expectedLabel   = expectedCountry ? (COUNTRY_PATH_MAP[expectedCountry] || expectedCountry.toUpperCase()) : null;
    const withCountry     = data.images.filter(i => i.hasCountryInPath);
    const divergent       = expectedCountry ? withCountry.filter(i => i.imgCountry !== expectedCountry) : [];
    const noCountry       = data.images.filter(i => !i.hasCountryInPath);

    // Summary
    const summaryEl = document.createElement('div');
    summaryEl.className = 'qa-summary-row';
    if (!expectedCountry) {
      summaryEl.innerHTML = `<span style="color:var(--amber)">⚠</span><span style="color:var(--amber)">País da página não detectado na URL.<br><span style="color:var(--muted);font-size:9px;">Total de imagens varridas: ${data.total}</span></span>`;
    } else if (divergent.length === 0) {
      summaryEl.innerHTML = `<span style="color:var(--green)">✓</span><span><strong style="color:var(--green)">Todos os ${withCountry.length} assets</strong> <span style="color:var(--muted)">são do país correto <strong style="color:var(--accent2)">${expectedLabel}</strong></span></span>`;
    } else {
      summaryEl.innerHTML = `<span style="color:var(--red)">⚠</span><span><strong style="color:var(--red)">${divergent.length} asset${divergent.length>1?'s':''} divergente${divergent.length>1?'s':''}</strong> <span style="color:var(--muted)">· esperado: <strong style="color:var(--accent2)">${expectedLabel}</strong></span></span>`;
    }
    resultEl.appendChild(summaryEl);

    if (expectedCountry) {
      const infoEl = document.createElement('div');
      infoEl.style.cssText = 'font-size:9px;color:var(--muted);font-family:"DM Mono",monospace;padding:1px 2px;';
      infoEl.innerHTML = `Página: <span style="color:var(--accent2)">/${expectedCountry}/</span> · com país: ${withCountry.length} · sem país no path: ${noCountry.length} · total varrido: ${data.total}`;
      resultEl.appendChild(infoEl);
    }

    if (divergent.length > 0) {
      const hlBtn = document.createElement('button');
      hlBtn.className = 'qa-run-btn';
      hlBtn.style.cssText = 'border-color:rgba(255,94,94,0.4);color:var(--red);width:100%;margin-top:2px;';
      hlBtn.textContent = '⬤ Destacar divergentes na página';
      hlBtn.addEventListener('click', async () => {
        if (imgHighlightsActive) {
          await chrome.scripting.executeScript({ target: { tabId: lastTabId }, func: clearImgCountryHighlightsFn });
          hlBtn.textContent = '⬤ Destacar divergentes na página'; imgHighlightsActive = false;
        } else {
          await chrome.scripting.executeScript({ target: { tabId: lastTabId }, func: highlightImgByCountryFn, args: [divergent.map(i => i.src)] });
          hlBtn.textContent = '✕ Remover destaques'; imgHighlightsActive = true;
        }
      });
      resultEl.appendChild(hlBtn);

      const listEl = document.createElement('div');
      listEl.className = 'qa-scroll-list';
      divergent.forEach(img => {
        const item = document.createElement('div');
        item.className = 'qa-item bad';
        const cLabel = img.imgCountry ? (COUNTRY_PATH_MAP[img.imgCountry] || img.imgCountry.toUpperCase()) : '?';
        item.innerHTML = `<div class="qa-item-dot" style="background:var(--red)"></div><div class="qa-item-body"><strong style="color:var(--red)">/${img.imgCountry}/</strong> (${cLabel})<br><span class="dim">${img.shortSrc}</span></div>`;
        const gb = document.createElement('button');
        gb.className = 'qa-item-goto'; gb.title = 'Ver na página'; gb.textContent = '↗';
        gb.addEventListener('click', () => chrome.scripting.executeScript({ target: { tabId: lastTabId }, func: scrollToImgFn, args: [img.src] }));
        item.appendChild(gb);
        listEl.appendChild(item);
      });
      resultEl.appendChild(listEl);
    }

  } catch(err) {
    resultEl.style.display = 'flex';
    resultEl.innerHTML = `<div class="qa-summary-row"><span style="color:var(--red)">Erro: ${err.message}</span></div>`;
  } finally { btn.textContent = 'Varrer'; btn.disabled = false; }
}

let altHighlightsActive = false;

async function runAltChecker() {
  const btn = document.getElementById('altRunBtn');
  const resultEl = document.getElementById('altResult');
  btn.textContent = '…'; btn.disabled = true;
  resultEl.style.display = 'none'; resultEl.innerHTML = '';

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab?.id) throw new Error('Aba não acessível.');
    lastTabId = tab.id;

    const res = await chrome.scripting.executeScript({ target: { tabId: tab.id }, func: scanAltTextFn });
    const images = res?.[0]?.result || [];
    resultEl.style.display = 'flex';
    resultEl.style.flexDirection = 'column';
    resultEl.style.gap = '5px';
    altHighlightsActive = false;

    if (images.length === 0) {
      resultEl.innerHTML = `<div class="qa-summary-row"><span style="color:var(--muted)">Nenhuma imagem encontrada.</span></div>`;
      return;
    }

    const expectedLang = lastBaseLang || 'es';
    const knownWords   = COMMON_WORDS[expectedLang];

    const issues = [];
    images.forEach(img => {
      if (img.missing) { issues.push({ ...img, reason: 'Atributo alt ausente', severity: 'bad' }); return; }
      if (img.empty)   { issues.push({ ...img, reason: 'Alt vazio (decorativa?)', severity: 'warn' }); return; }
      const words = img.altText.match(/\b[a-zA-ZÀ-ÿ]{3,}\b/g) || [];
      if (!words.length) return;
      const otherLangs = Object.keys(COMMON_WORDS).filter(l => l !== expectedLang);
      let foreign = 0;
      words.forEach(w => {
        const lw = w.toLowerCase();
        if (knownWords && knownWords.has(lw)) return;
        if (otherLangs.some(l => COMMON_WORDS[l].has(lw))) foreign++;
      });
      if (foreign / words.length > 0.4) {
        issues.push({ ...img, reason: `Alt em outro idioma: "${img.altText.slice(0,35)}"`, severity: 'bad' });
      }
    });

    // Summary
    const summaryEl = document.createElement('div');
    summaryEl.className = 'qa-summary-row';
    const badCount  = issues.filter(i=>i.severity==='bad').length;
    const warnCount = issues.filter(i=>i.severity==='warn').length;
    if (issues.length === 0) {
      summaryEl.innerHTML = `<span style="color:var(--green)">✓</span><span><strong style="color:var(--green)">${images.length} imagens</strong> <span style="color:var(--muted)">com alt text correto.</span></span>`;
    } else {
      summaryEl.innerHTML = `<span style="color:var(--red)">⚠</span><span><strong style="color:var(--red)">${badCount} problema${badCount!==1?'s':''}</strong>${warnCount>0?` <span style="color:var(--amber)">· ${warnCount} aviso${warnCount!==1?'s':''}</span>`:''} <span style="color:var(--muted)">de ${images.length} imgs</span></span>`;
    }
    resultEl.appendChild(summaryEl);

    if (issues.length > 0) {
      const hlBtn = document.createElement('button');
      hlBtn.className = 'qa-run-btn';
      hlBtn.style.cssText = 'border-color:rgba(255,94,94,0.4);color:var(--red);width:100%;';
      hlBtn.textContent = '⬤ Destacar imagens com problema';
      hlBtn.addEventListener('click', async () => {
        if (altHighlightsActive) {
          await chrome.scripting.executeScript({ target: { tabId: lastTabId }, func: clearAltHighlightsFn });
          hlBtn.textContent = '⬤ Destacar imagens com problema'; altHighlightsActive = false;
        } else {
          const badIdx = issues.filter(i=>i.severity==='bad').map(i=>i.index);
          await chrome.scripting.executeScript({ target: { tabId: lastTabId }, func: highlightAltIssuesFn, args: [badIdx] });
          hlBtn.textContent = '✕ Remover destaques'; altHighlightsActive = true;
        }
      });
      resultEl.appendChild(hlBtn);

      const listEl = document.createElement('div');
      listEl.className = 'qa-scroll-list';
      issues.forEach(img => {
        const item = document.createElement('div');
        item.className = `qa-item ${img.severity}`;
        const dot = img.severity === 'bad' ? 'var(--red)' : 'var(--amber)';
        const col = img.severity === 'bad' ? 'var(--red)' : 'var(--amber)';
        item.innerHTML = `<div class="qa-item-dot" style="background:${dot}"></div><div class="qa-item-body"><strong style="color:${col}">${img.reason}</strong><br><span class="dim">${img.shortSrc}</span></div>`;
        const gb = document.createElement('button');
        gb.className = 'qa-item-goto'; gb.title = 'Ver na página'; gb.textContent = '↗';
        gb.addEventListener('click', () => chrome.scripting.executeScript({ target: { tabId: lastTabId }, func: scrollToImgByIndexFn, args: [img.index] }));
        item.appendChild(gb);
        listEl.appendChild(item);
      });
      resultEl.appendChild(listEl);
    }

  } catch(err) {
    resultEl.style.display = 'flex';
    resultEl.innerHTML = `<div class="qa-item bad"><div class="qa-item-dot" style="background:var(--red)"></div><div class="qa-item-body">Erro: ${err.message}</div></div>`;
  } finally { btn.textContent = 'Checar'; btn.disabled = false; }
}
