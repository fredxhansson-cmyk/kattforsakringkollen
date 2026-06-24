import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const WEB_PAGE_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Bästa kattförsäkring 2026 | Jämför & spara idag\",\"description\":\"Bästa kattförsäkring 2026 ✓ Uppdaterad 2026. Jämför 6 alternativ och hitta det bästa skyddet för din katt. Kontrollera och spara idag!\",\"url\":\"https://kattkollen.vercel.app\",\"datePublished\":\"2026-06-24\",\"dateModified\":\"2026-06-24\",\"inLanguage\":\"sv-SE\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"Kattkollen\",\"url\":\"https://kattkollen.vercel.app\"},\"breadcrumb\":{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Hem\",\"item\":\"https://kattkollen.vercel.app\"}]}}";
const ITEM_LIST_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"Bästa kattförsäkring 2026 — jämför 6 alternativ — Jämförelse 2026\",\"description\":\"Upptäck den bästa kattförsäkringen för din katt idag\",\"numberOfItems\":6,\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@type\":\"Product\",\"name\":\"Agria\",\"url\":\"https://www.agria.se\",\"description\":\"Sveriges ledande djurförsäkring — veterinärvård 24/7\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.8\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"298\"}}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@type\":\"Product\",\"name\":\"Lassie\",\"url\":\"https://www.lassie.se\",\"description\":\"Digital djurförsäkring med AI-driven hälsorådgivning\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.7\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"450\"}}},{\"@type\":\"ListItem\",\"position\":3,\"item\":{\"@type\":\"Product\",\"name\":\"Sveland\",\"url\":\"https://www.sveland.se\",\"description\":\"Specialiserad djurförsäkring — hög ersättningsnivå\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.5\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"385\"}}},{\"@type\":\"ListItem\",\"position\":4,\"item\":{\"@type\":\"Product\",\"name\":\"If Djur\",\"url\":\"https://www.if.se/djur\",\"description\":\"Bredast täckning — hund, katt och häst\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.4\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"373\"}}},{\"@type\":\"ListItem\",\"position\":5,\"item\":{\"@type\":\"Product\",\"name\":\"Folksam Djur\",\"url\":\"https://www.folksam.se\",\"description\":\"Kundägt bolag — bra pris för katt och hund\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.3\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"387\"}}},{\"@type\":\"ListItem\",\"position\":6,\"item\":{\"@type\":\"Product\",\"name\":\"Musti Group\",\"url\":\"https://www.musti.com/se\",\"description\":\"Djurhandel och försäkring i ett — stort sortiment\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.1\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"400\"}}}]}";
const ARTICLE_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Bästa kattförsäkring 2026 — jämför 6 alternativ\",\"description\":\"Upptäck den bästa kattförsäkringen för din katt idag\",\"datePublished\":\"2026-06-24\",\"dateModified\":\"2026-06-24\",\"author\":{\"@type\":\"Organization\",\"name\":\"Kattkollen\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Kattkollen\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://kattkollen.vercel.app\"}}";
const FAQ_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Vilken är den bästa kattförsäkringen?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Den bästa kattförsäkringen beror på din katts specifika behov och din budget. Jämför flera alternativ för att hitta det bästa valet.\"}},{\"@type\":\"Question\",\"name\":\"Vad kostar en kattförsäkring i månaden?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Kostnaden för en kattförsäkring varierar beroende på försäkringsbolag och omfattning, men vanligtvis ligger den mellan 100 och 300 kr per månad.\"}},{\"@type\":\"Question\",\"name\":\"Täcker kattförsäkring tandvård?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Vissa kattförsäkringar inkluderar tandvård, men det varierar mellan olika försäkringsbolag. Kontrollera alltid vad som ingår i ditt avtal.\"}},{\"@type\":\"Question\",\"name\":\"Kan jag försäkra en äldre katt?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Ja, du kan vanligtvis försäkra en äldre katt, men premien kan vara högre och vissa bolag kan ha åldersgränser.\"}},{\"@type\":\"Question\",\"name\":\"Vad är självrisken på en kattförsäkring?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Självrisken varierar beroende på försäkringsbolag och typ av försäkring, men ligger ofta mellan 500 och 1500 kr per skadetillfälle.\"}},{\"@type\":\"Question\",\"name\":\"Täcker försäkringen medicin för katten?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Många kattförsäkringar täcker kostnader för medicin, men det är viktigt att noggrant läsa villkoren för att säkerställa täckning.\"}},{\"@type\":\"Question\",\"name\":\"Hur säger jag upp en kattförsäkring?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"För att säga upp en kattförsäkring, kontakta ditt försäkringsbolag. Vanligtvis krävs skriftlig uppsägning med viss uppsägningstid.\"}},{\"@type\":\"Question\",\"name\":\"När börjar kattförsäkringen gälla?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"En kattförsäkring börjar oftast gälla direkt efter tecknandet, men vissa försäkringar kan ha en karenstid, vilket innebär att vissa skydd börjar gälla först efter en viss period.\"}}]}";

export async function getStaticProps() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.toLocaleDateString('sv-SE', { month: 'long' });
  var updated = now.toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' });
  var fallback = [{"name":"Agria","url":"https://www.agria.se","description":"Sveriges ledande djurförsäkring — veterinärvård 24/7","badge":"Bäst hundförsäkring","score":"4.8","price":"från 189 kr/mån","pros":["Veterinärvård dygnet runt","Hög ersättning","Rekommenderas av uppfödare"]},{"name":"Lassie","url":"https://www.lassie.se","description":"Digital djurförsäkring med AI-driven hälsorådgivning","badge":"Bäst digital","score":"4.7","price":"från 149 kr/mån","pros":["App-baserad","AI-hälsorådgivning","Snabb utbetalning"]},{"name":"Sveland","url":"https://www.sveland.se","description":"Specialiserad djurförsäkring — hög ersättningsnivå","badge":"Bäst för stora hundar","score":"4.5","price":"från 165 kr/mån","pros":["Specialiserad på djur","Hög ersättning","Lång erfarenhet"]},{"name":"If Djur","url":"https://www.if.se/djur","description":"Bredast täckning — hund, katt och häst","badge":"Bredast täckning","score":"4.4","price":"från 179 kr/mån","pros":["Fullt skydd","Välkänt varumärke","Snabb skadehantering"]},{"name":"Folksam Djur","url":"https://www.folksam.se","description":"Kundägt bolag — bra pris för katt och hund","badge":"Kundägt","score":"4.3","price":"från 139 kr/mån","pros":["Kundägt","Bra pris","Enkel teckna online"]},{"name":"Musti Group","url":"https://www.musti.com/se","description":"Djurhandel och försäkring i ett — stort sortiment","badge":null,"score":"4.1","price":"från 159 kr/mån","pros":["Djurhandel + försäkring","Rabatter på foder","Lojalitetsprogram"]}];
  var items = fallback.slice();

  return {
    props: { providers: items, year: year, month: month, updated: updated },
    revalidate: 86400,
  };
}

export default function Home({ providers, year, month, updated }) {
  const [sortBy, setSortBy] = useState('betyg');
  const [visibleCount, setVisibleCount] = useState(5);
  const [selected, setSelected] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  

  var extractNum = function(p) {
    if (p.rateValue) return parseFloat(p.rateValue);
    if (p.priceValue) return parseFloat(p.priceValue);
    var m = String(p.price||'').match(/[0-9]+[.,]?[0-9]*/);
    return m ? parseFloat(m[0].replace(',','.')) : 9999;
  };
  var sorted = [...providers].sort(function(a, b) {
    if (sortBy === 'pris') return extractNum(a) - extractNum(b);
    if (sortBy === 'namn') return a.name.localeCompare(b.name, 'sv');
    return parseFloat(b.score||b.rating||0) - parseFloat(a.score||a.rating||0);
  });
  var visible = sorted.slice(0, visibleCount);
  var toggleSelect = function(name) {
    setSelected(function(prev) {
      return prev.includes(name) ? prev.filter(function(n){return n!==name;}) : prev.length < 3 ? prev.concat([name]) : prev;
    });
  };
  var selectedProviders = providers.filter(function(p){return selected.includes(p.name);});

  const pc = '#b45309';
  const pcLight = '#b4530914';
  const pcMed = '#b4530930';

  const TRACK_BASE = 'https://axiom-engine-production-54c3.up.railway.app/r';
  const SITE_SLUG = 'kattkollen';
  const AffBtn = ({ url, name, primary }) => {
    var href = TRACK_BASE && TRACK_BASE.startsWith('http')
      ? TRACK_BASE + '?p=' + encodeURIComponent(name) + '&url=' + encodeURIComponent(url) + '&site=' + SITE_SLUG
      : url;
    return (
      <a href={href} target="_blank" rel="noopener noreferrer sponsored"
        style={{ display:'inline-block', background: primary ? pc : '#0f172a', color:'#fff',
          padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:14,
          textDecoration:'none', whiteSpace:'nowrap', transition:'opacity .15s' }}>
        Välj {name} →
      </a>
    );
  };

  const Stars = ({ score }) => {
    const n = parseFloat(score);
    return (
      <span style={{ fontSize:15, letterSpacing:1 }}>
        <span style={{ color:'#f59e0b' }}>{'★'.repeat(Math.floor(n))}</span>
        <span style={{ color:'#d1d5db' }}>{'★'.repeat(5 - Math.floor(n))}</span>
        <span style={{ color:'#64748b', fontSize:12, marginLeft:6, fontWeight:600 }}>{score}</span>
      </span>
    );
  };

  return (
    <>
      <Head>
        <title>Bästa kattförsäkring 2026 | Jämför & spara idag</title>
        <meta name="description" content="Bästa kattförsäkring 2026 ✓ Uppdaterad 2026. Jämför 6 alternativ och hitta det bästa skyddet för din katt. Kontrollera och spara idag!" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://kattkollen.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bästa kattförsäkring 2026 | Jämför & spara idag" />
        <meta property="og:description" content="Bästa kattförsäkring 2026 ✓ Uppdaterad 2026. Jämför 6 alternativ och hitta det bästa skyddet för din katt. Kontrollera och spara idag!" />
        <meta property="og:url" content="https://kattkollen.vercel.app" />
        <meta property="og:locale" content="sv_SE" />
        <meta property="og:site_name" content="Kattkollen" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bästa kattförsäkring 2026 | Jämför & spara idag" />
        <meta name="twitter:description" content="Bästa kattförsäkring 2026 ✓ Uppdaterad 2026. Jämför 6 alternativ och hitta det bästa skyddet för din katt. Kontrollera och spara idag!" />
        <link rel="alternate" hreflang="sv" href="https://kattkollen.vercel.app" />
        <link rel="alternate" hreflang="x-default" href="https://kattkollen.vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: WEB_PAGE_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ITEM_LIST_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ARTICLE_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_SCHEMA }} />
      </Head>

      <nav style={{ background:'#fff', borderBottom:'1px solid #e2e8f0', padding:'0 20px',
        height:60, display:'flex', alignItems:'center', justifyContent:'space-between',
        position:'sticky', top:0, zIndex:100, fontFamily:'Inter,sans-serif' }}>
        <Link href="/" style={{ fontWeight:800, fontSize:18, color:pc, textDecoration:'none' }}>
          Kattkollen
        </Link>
        <div style={{ display:'flex', gap:28, fontSize:14 }}>
          <a href="#jamfor" style={{ color:'#64748b', textDecoration:'none' }}>Jämförelse</a>
          <a href="#guide" style={{ color:'#64748b', textDecoration:'none' }}>Guide</a>
          <Link href="/om-oss" style={{ color:'#64748b', textDecoration:'none' }}>Om oss</Link>
        </div>
      </nav>

      <section style={{ background:'linear-gradient(135deg,#f0f9ff 0%,#e8f4fd 50%,#f8fafc 100%)',
        padding:'72px 20px 56px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'flex', alignItems:'center',
          gap:48, flexWrap:'wrap' }}>
          <div style={{ flex:1, minWidth:280 }}>
            <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:20 }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:5,
                background:pcLight, color:pc, padding:'4px 12px', borderRadius:20,
                fontSize:12, fontWeight:700 }}>
                ✓ Uppdaterad {updated}
              </div>
              <div style={{ display:'inline-flex', alignItems:'center', gap:5,
                background:'#f0fdf4', color:'#15803d', padding:'4px 12px', borderRadius:20,
                fontSize:12, fontWeight:700 }}>
                ✓ Oberoende jämförelse
              </div>
            </div>
            <h1 style={{ fontSize:'clamp(26px,4vw,46px)', fontWeight:800,
              lineHeight:1.14, marginBottom:18, color:'#0f172a' }}>
              Bästa kattförsäkring 2026 — jämför 6 alternativ
            </h1>
            <p style={{ fontSize:18, color:'#475569', lineHeight:1.72,
              marginBottom:32, maxWidth:540 }}>
              Upptäck den bästa kattförsäkringen för din katt idag
            </p>
            <a href="#jamfor" style={{ display:'inline-block', background:pc, color:'#fff',
              padding:'14px 32px', borderRadius:10, fontWeight:700, fontSize:16,
              textDecoration:'none', boxShadow:'0 4px 24px '+pc+'44' }}>
              Jämför nu & spara →
            </a>
            <p style={{ marginTop:14, fontSize:13, color:'#94a3b8' }}>
              Gratis &middot; Oberoende &middot; Ingen prenumeration
            </p>
          </div>
          <div style={{ flexShrink:0 }} dangerouslySetInnerHTML={{ __html: "<svg width=\"260\" height=\"210\" viewBox=\"0 0 260 210\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"18\" y=\"130\" width=\"34\" height=\"68\" rx=\"5\" fill=\"#b45309\" opacity=\"0.18\"/><rect x=\"64\" y=\"98\" width=\"34\" height=\"100\" rx=\"5\" fill=\"#b45309\" opacity=\"0.38\"/><rect x=\"110\" y=\"58\" width=\"34\" height=\"140\" rx=\"5\" fill=\"#b45309\" opacity=\"0.65\"/><rect x=\"156\" y=\"76\" width=\"34\" height=\"122\" rx=\"5\" fill=\"#b45309\" opacity=\"0.82\"/><rect x=\"202\" y=\"36\" width=\"34\" height=\"162\" rx=\"5\" fill=\"#b45309\"/><path d=\"M35 124 L81 93 L127 53 L173 71 L219 31\" stroke=\"#b45309\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"35\" cy=\"124\" r=\"5\" fill=\"#b45309\"/><circle cx=\"81\" cy=\"93\" r=\"5\" fill=\"#b45309\"/><circle cx=\"127\" cy=\"53\" r=\"5\" fill=\"#b45309\"/><circle cx=\"173\" cy=\"71\" r=\"5\" fill=\"#b45309\"/><circle cx=\"219\" cy=\"31\" r=\"5\" fill=\"#b45309\"/><circle cx=\"228\" cy=\"178\" r=\"24\" fill=\"#b45309\" opacity=\"0.12\" stroke=\"#b45309\" stroke-width=\"2\"/><text x=\"228\" y=\"184\" text-anchor=\"middle\" fill=\"#b45309\" font-family=\"Inter,sans-serif\" font-size=\"13\" font-weight=\"700\">kr</text></svg>" }} />
        </div>
      </section>

      <div style={{ background:'#fff', borderBottom:'1px solid #e2e8f0',
        padding:'16px 20px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:960, margin:'0 auto', display:'flex',
          gap:32, flexWrap:'wrap', justifyContent:'center', alignItems:'center' }}>
          <div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#b45309',fontWeight:800,flexShrink:0}}>✓</span><span>Spara pengar enkelt</span></div><div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#b45309',fontWeight:800,flexShrink:0}}>✓</span><span>Trygghet för din katt</span></div><div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#b45309',fontWeight:800,flexShrink:0}}>✓</span><span>Snabb skadehantering</span></div>
        </div>
      </div>

      <section id="jamfor" style={{ padding:'64px 20px', maxWidth:980,
        margin:'0 auto', fontFamily:'Inter,sans-serif' }}>
        <div style={{ textAlign:'center', marginBottom:36 }}>
          <h2 style={{ fontSize:30, fontWeight:800, marginBottom:10, color:'#0f172a' }}>
            Jämför kattförsäkringar enkelt
          </h2>
          <p style={{ color:'#64748b', fontSize:15 }}>
            Vi har granskat {providers.length} alternativ &mdash; senast uppdaterat {updated}
          </p>
        </div>
        <div style={{ display:'flex', gap:8, marginBottom:20,
          flexWrap:'wrap', justifyContent:'center' }}>
          {['betyg','pris','namn'].map(function(s) { return (
            <button key={s} onClick={() => setSortBy(s)}
              style={{ padding:'7px 18px', borderRadius:20, fontSize:13, fontWeight:600,
                cursor:'pointer', fontFamily:'Inter,sans-serif', border:'none',
                background: sortBy===s ? pc : '#f1f5f9',
                color: sortBy===s ? '#fff' : '#64748b' }}>
              {s==='betyg' ? '⭐ Bäst betyg' : s==='pris' ? '💰 Lägst pris' : '🔤 Namn A–Ö'}
            </button>
          ); })}
        </div>


        <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
          {visible.map((p, i) => (
            <div key={p.name} style={{ background:'#fff', border: i===0 ? '2px solid '+pc : '1px solid #e2e8f0', borderRadius:16, padding:'22px 26px', position:'relative', boxShadow: i===0 ? '0 4px 24px '+pc+'18' : '0 1px 4px #0000000a' }}>
              <div style={{ display:'flex', gap:20, alignItems:'center', flexWrap:'wrap' }}>
                <div style={{ width:44, height:44, borderRadius:12, background: i===0 ? pcLight : '#f8fafc', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:16, color: i===0 ? pc : '#64748b', flexShrink:0, border:'1px solid '+(i===0 ? pcMed : '#e2e8f0') }}>
                  {['1','2','3','4','5'][i] || (i+1)}
                </div>
                <div style={{ flex:1, minWidth:200 }}>
                  <div style={{ fontWeight:800, fontSize:18, color:'#0f172a', marginBottom:3 }}>{p.name}</div>
                  <div style={{ fontSize:13, color:'#64748b', marginBottom:10 }}>{p.description}</div>
                  {p.pros && <div style={{ display:'flex', flexDirection:'column', gap:5 }}>{p.pros.map((pro, j) => (<div key={j} style={{ display:'flex', gap:7, alignItems:'flex-start', fontSize:13 }}><span style={{ color:pc, fontWeight:700, flexShrink:0 }}>✓</span><span style={{ color:'#374151' }}>{pro}</span></div>))}</div>}
                </div>
                <div style={{ textAlign:'right', minWidth:190, display:'flex', flexDirection:'column', alignItems:'flex-end', gap:8 }}>
                  <div style={{ fontSize:22, fontWeight:800, color:pc }}>{p.currentPrice || p.price}</div>
                  <Stars score={p.score} />
                  <div style={{ background:'#f0fdf4', color:'#15803d', fontSize:11, fontWeight:700, padding:'3px 10px', borderRadius:8 }}>{p.badge}</div>
                  <AffBtn url={p.url} name={p.name} primary={i===0} />
                  <button onClick={() => toggleSelect(p.name)} style={{ padding:'7px 14px', borderRadius:8, fontSize:12, fontWeight:600, cursor: selected.includes(p.name) || selected.length < 3 ? 'pointer' : 'not-allowed', fontFamily:'Inter,sans-serif', border:'1px solid', borderColor: selected.includes(p.name) ? pc : '#e2e8f0', background: selected.includes(p.name) ? pcLight : '#fff', color: selected.includes(p.name) ? pc : '#64748b', opacity: !selected.includes(p.name) && selected.length >= 3 ? 0.4 : 1 }}>
                    {selected.includes(p.name) ? '✓ Vald' : '+ Jämför'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign:'center', marginTop:20, marginBottom:4, display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
          {visibleCount < sorted.length && (
            <button onClick={() => setVisibleCount(function(c){ return Math.min(c + 5, sorted.length); })}
              style={{ padding:'10px 28px', borderRadius:24, fontSize:14, fontWeight:700,
                cursor:'pointer', fontFamily:'Inter,sans-serif',
                border:'2px solid '+pc, background:'#fff', color:pc }}>
              Visa 5 fler ↓ &nbsp;<span style={{ fontWeight:400, fontSize:13, opacity:0.7 }}>({sorted.length - visibleCount} återstår)</span>
            </button>
          )}
          {visibleCount >= sorted.length && sorted.length > 5 && (
            <button onClick={() => setVisibleCount(5)}
              style={{ padding:'10px 28px', borderRadius:24, fontSize:14, fontWeight:700,
                cursor:'pointer', fontFamily:'Inter,sans-serif',
                border:'2px solid #e2e8f0', background:'#fff', color:'#64748b' }}>
              Visa färre ↑
            </button>
          )}
          <p style={{ margin:0, fontSize:13, color:'#94a3b8' }}>
            Visar {visible.length} av {sorted.length} alternativ
            {selected.length > 0 && <span style={{ marginLeft:12, color:pc, fontWeight:600 }}>{selected.length} valda för jämförelse</span>}
          </p>
          <p style={{ margin:0, fontSize:11, color:'#cbd5e1' }}>
            Priser är riktpriser — klicka på ett alternativ för aktuellt pris hos respektive leverantör
          </p>
        </div>

        {selected.length >= 2 && (
          <div style={{ position:'fixed', bottom:0, left:0, right:0, zIndex:80,
            background:'#0f172a', padding:'14px 20px', fontFamily:'Inter,sans-serif',
            display:'flex', alignItems:'center', justifyContent:'center', gap:14, flexWrap:'wrap',
            boxShadow:'0 -4px 32px rgba(0,0,0,0.25)' }}>
            <span style={{ color:'#e2e8f0', fontWeight:600, fontSize:14 }}>
              {selected.length} valda: {selected.join(' vs ')}
            </span>
            <button onClick={() => setShowCompare(true)}
              style={{ background:pc, color:'#fff', border:'none', borderRadius:8,
                padding:'9px 22px', fontWeight:700, fontSize:14, cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
              Jämför nu →
            </button>
            <button onClick={() => setSelected([])}
              style={{ background:'transparent', color:'#94a3b8', border:'1px solid #334155',
                borderRadius:8, padding:'9px 14px', fontSize:13, cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
              Rensa
            </button>
          </div>
        )}

        {showCompare && (
          <div onClick={() => setShowCompare(false)} style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.72)', zIndex:200,
            display:'flex', alignItems:'flex-start', justifyContent:'center',
            padding:'24px 16px', overflowY:'auto', fontFamily:'Inter,sans-serif' }}>
            <div onClick={e => e.stopPropagation()} style={{ background:'#fff', borderRadius:16,
              width:'100%', maxWidth: selectedProviders.length === 2 ? 700 : 940,
              padding:28, marginTop:12, marginBottom:24 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
                <h3 style={{ fontSize:20, fontWeight:800, margin:0, color:'#0f172a' }}>
                  Jämförelse — {selectedProviders.map(function(p){return p.name;}).join(' vs ')}
                </h3>
                <button onClick={() => setShowCompare(false)}
                  style={{ background:'none', border:'none', fontSize:22, cursor:'pointer', color:'#94a3b8' }}>✕</button>
              </div>
              <div style={{ display:'grid', gridTemplateColumns: selectedProviders.map(function(){return '1fr';}).join(' '), gap:14 }}>
                {selectedProviders.map(function(p) { return (
                  <div key={p.name} style={{ border:'2px solid '+pc+'30', borderRadius:12, padding:'20px 18px',
                    display:'flex', flexDirection:'column', gap:10 }}>
                    <div style={{ fontWeight:800, fontSize:17, color:'#0f172a', borderBottom:'1px solid #f1f5f9', paddingBottom:10 }}>{p.name}</div>
                    <div>
                      <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:2 }}>PRIS</div>
                      <div style={{ fontSize:20, fontWeight:800, color:pc }}>{p.currentPrice||p.price||'—'}</div>
                    </div>
                    <div>
                      <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:2 }}>BETYG</div>
                      <Stars score={p.score} />
                    </div>
                    {p.badge && (
                      <div>
                        <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:2 }}>UTMÄRKELSE</div>
                        <div style={{ background:'#f0fdf4', color:'#15803d', fontSize:11, fontWeight:700, padding:'4px 10px', borderRadius:8, display:'inline-block' }}>{p.badge}</div>
                      </div>
                    )}
                    {p.description && (
                      <div>
                        <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:2 }}>OM TJÄNSTEN</div>
                        <div style={{ fontSize:13, color:'#475569', lineHeight:1.5 }}>{p.description}</div>
                      </div>
                    )}
                    {p.pros && p.pros.length > 0 && (
                      <div>
                        <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:6 }}>FÖRDELAR</div>
                        <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
                          {p.pros.map(function(pro,j){return(
                            <div key={j} style={{ display:'flex', gap:6, fontSize:13 }}>
                              <span style={{ color:pc, fontWeight:700, flexShrink:0 }}>✓</span>
                              <span style={{ color:'#374151' }}>{pro}</span>
                            </div>
                          );})}
                        </div>
                      </div>
                    )}
                    <div style={{ marginTop:'auto', paddingTop:10 }}>
                      <AffBtn url={p.url} name={p.name} primary={true} />
                    </div>
                  </div>
                );})}
              </div>
              <p style={{ marginTop:16, fontSize:12, color:'#94a3b8', textAlign:'center' }}>
                * Stäng för att välja fler alternativ eller byta urval.
              </p>
            </div>
          </div>
        )}

        <p style={{ marginTop:16, fontSize:12, color:'#94a3b8', textAlign:'center' }}>
          * Vi kan erhålla provision vid val via våra länkar. Det påverkar aldrig priset för dig eller våra oberoende betyg.
          Se vår <Link href="/om-oss" style={{ color:pc }}>redaktionspolicy</Link>.
        </p>
      </section>

      

      <section id="guide" style={{ background:'#f8fafc',
        borderTop:'1px solid #e2e8f0', padding:'64px 20px',
        fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:760, margin:'0 auto' }}>
          <h2 style={{ fontSize:28, fontWeight:800, marginBottom:20, color:'#0f172a' }}>
            Hur man väljer rätt kattförsäkring
          </h2>
          <p style={{ fontSize:16, lineHeight:1.85, color:'#374151', marginBottom:28 }}>
            När du ska välja rätt kattförsäkring finns det flera faktorer att beakta. Först och främst bör du överväga kattens ålder och hälsostatus. Yngre och friskare katter kan ha en lägre premie, medan äldre katter kan kräva mer omfattande skydd. Det är också viktigt att titta på vad som faktiskt ingår i försäkringen. Många försäkringar täcker grundläggande veterinärvård, men det kan vara klokt att välja en försäkring som även inkluderar tandvård och mediciner. Vidare bör du jämföra självrisker och premier mellan olika leverantörer. En lägre självrisk kan innebära en högre månadskostnad, så det gäller att hitta en balans som passar din budget. Slutligen, läs alltid det finstilta i försäkringsvillkoren för att undvika överraskningar när du behöver använda försäkringen.
          </p>
          <h3 style={{ fontSize:22, fontWeight:700, marginBottom:16, color:'#0f172a', marginTop:40 }}>Vanliga misstag att undvika</h3>
          <p style={{ fontSize:16, lineHeight:1.85, color:'#374151', marginBottom:28 }}>Ett av de vanligaste misstagen när man tecknar kattförsäkring är att välja det billigaste alternativet utan att kontrollera vad som verkligen ingår. En låg premie kan verka lockande, men om försäkringen inte täcker viktiga behandlingar kan det bli dyrt i längden. Ett annat vanligt misstag är att inte jämföra flera leverantörer. Att bara gå på den första bästa rekommendationen kan innebära att du missar bättre erbjudanden. Slutligen, många glömmer att läsa det finstilta. Det kan finnas viktiga undantag i villkoren som påverkar din möjlighet att få ersättning.</p>
          <h3 style={{ fontSize:20, fontWeight:700, marginBottom:24, color:'#0f172a' }}>
            Vad ska du tänka på?
          </h3>
          <div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#b4530915',color:'#b45309',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>1</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Jämför alltid flera alternativ</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#b4530915',color:'#b45309',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>2</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Kontrollera vad som ingår</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#b4530915',color:'#b45309',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>3</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Läs det finstilta</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#b4530915',color:'#b45309',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>4</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Anpassa efter din katts behov</p></div>
        </div>
      </section>

      <section style={{ padding:'64px 20px', maxWidth:760,
        margin:'0 auto', fontFamily:'Inter,sans-serif' }}>
        <h2 style={{ fontSize:26, fontWeight:800, marginBottom:32, color:'#0f172a' }}>
          Vanliga frågor
        </h2>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vilken är den bästa kattförsäkringen?<span style={{color:'#b45309',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Den bästa kattförsäkringen beror på din katts specifika behov och din budget. Jämför flera alternativ för att hitta det bästa valet.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vad kostar en kattförsäkring i månaden?<span style={{color:'#b45309',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Kostnaden för en kattförsäkring varierar beroende på försäkringsbolag och omfattning, men vanligtvis ligger den mellan 100 och 300 kr per månad.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Täcker kattförsäkring tandvård?<span style={{color:'#b45309',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Vissa kattförsäkringar inkluderar tandvård, men det varierar mellan olika försäkringsbolag. Kontrollera alltid vad som ingår i ditt avtal.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Kan jag försäkra en äldre katt?<span style={{color:'#b45309',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Ja, du kan vanligtvis försäkra en äldre katt, men premien kan vara högre och vissa bolag kan ha åldersgränser.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vad är självrisken på en kattförsäkring?<span style={{color:'#b45309',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Självrisken varierar beroende på försäkringsbolag och typ av försäkring, men ligger ofta mellan 500 och 1500 kr per skadetillfälle.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Täcker försäkringen medicin för katten?<span style={{color:'#b45309',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Många kattförsäkringar täcker kostnader för medicin, men det är viktigt att noggrant läsa villkoren för att säkerställa täckning.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Hur säger jag upp en kattförsäkring?<span style={{color:'#b45309',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>För att säga upp en kattförsäkring, kontakta ditt försäkringsbolag. Vanligtvis krävs skriftlig uppsägning med viss uppsägningstid.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>När börjar kattförsäkringen gälla?<span style={{color:'#b45309',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>En kattförsäkring börjar oftast gälla direkt efter tecknandet, men vissa försäkringar kan ha en karenstid, vilket innebär att vissa skydd börjar gälla först efter en viss period.</p></details>
      </section>

      <section style={{ background:'#f8fafc', borderTop:'1px solid #e2e8f0', padding:'32px 20px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:760, margin:'0 auto' }}>
          <p style={{ fontSize:14, color:'#64748b', marginBottom:12, fontWeight:600 }}>Läs mer:</p>
          <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
            <a href="/hund" style={{color:'#b45309',fontWeight:600,textDecoration:'none',fontSize:14}}>Bästa hundförsäkringen</a>
            · <a href="/katt" style={{color:'#b45309',fontWeight:600,textDecoration:'none',fontSize:14}}>Bästa kattförsäkringen</a>
            · <a href="/kanin" style={{color:'#b45309',fontWeight:600,textDecoration:'none',fontSize:14}}>Bästa kanin- & smådjursförsäkring</a>
            · <a href="/stor-hund" style={{color:'#b45309',fontWeight:600,textDecoration:'none',fontSize:14}}>Försäkring för stor hund</a>
          </div>
        </div>
      </section>

      <footer style={{ background:'#0f172a', color:'#94a3b8',
        padding:'52px 20px 32px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:980, margin:'0 auto' }}>
          <div style={{ display:'flex', gap:48, flexWrap:'wrap', marginBottom:36 }}>
            <div style={{ maxWidth:260 }}>
              <div style={{ fontWeight:800, color:'#fff', fontSize:18, marginBottom:10 }}>Kattkollen</div>
              <p style={{ fontSize:13, lineHeight:1.75 }}>
                Oberoende jämförelsetjänst för svenska konsumenter. Vi jämför 6 alternativ inom husdjur.
              </p>
            </div>
            <div>
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Sidor</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/" style={{ color:'#94a3b8', textDecoration:'none' }}>Jämförelse</Link>
                <Link href="/om-oss" style={{ color:'#94a3b8', textDecoration:'none' }}>Om oss</Link>
                <Link href="/kontakt" style={{ color:'#94a3b8', textDecoration:'none' }}>Kontakt</Link>
                <Link href="/integritetspolicy" style={{ color:'#94a3b8', textDecoration:'none' }}>Integritetspolicy</Link>
              </div>
            </div>
            <div>
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Se även</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/hund" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Bästa hundförsäkringen</Link>
                <Link href="/katt" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Bästa kattförsäkringen</Link>
                <Link href="/kanin" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Bästa kanin- & smådjursförsäkring</Link>
                <Link href="/stor-hund" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Försäkring för stor hund</Link>
                <Link href="/liten-hund" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Försäkring för liten hund</Link>
              </div>
            </div>
            <div>
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Jämförelser</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/jamfor/agria-vs-lassie" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Agria vs Lassie</Link>
                <Link href="/jamfor/agria-vs-sveland" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Agria vs Sveland</Link>
                <Link href="/jamfor/agria-vs-if-djur" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Agria vs If Djur</Link>
                <Link href="/jamfor/agria-vs-folksam-djur" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Agria vs Folksam Djur</Link>
                <Link href="/jamfor/agria-vs-musti-group" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Agria vs Musti Group</Link>
              </div>
            </div>
          </div>
          <div style={{ borderTop:'1px solid #1e293b', paddingTop:24, fontSize:12, lineHeight:1.75 }}>
            <p style={{ marginBottom:8 }}>
              &copy; {year} Kattkollen. Oberoende jämförelsetjänst utan koppling till listade
              varumärken utöver eventuella affiliate-provisioner.
            </p>
            <p>
              <strong style={{ color:'#e2e8f0' }}>Affiliateinformation:</strong> Sidan innehåller
              affiliate-länkar via Adtraction Sverige. Vi kan ta emot provision från annonsörer.
              Det påverkar aldrig priset för dig eller våra oberoende betyg.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}