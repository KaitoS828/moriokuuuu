import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '森の奥 | 食べられる森へ、短く深く加わる',
  description: '憧れは、森の奥に眠る。その香りを運ぶ人がいる、その森を愛する人がいる。食べられる森へ、短く深く加わる。',
}

const C = {
  green:  '#183326',
  sage:   '#8FA46A',
  teal:   '#4B8B8A',
  earth:  '#B26342',
  gold:   '#C9A66B',
  cream:  '#F4F0E7',
  white:  '#FFFFFF',
}

const SERIF = "'Hiragino Mincho ProN','Yu Mincho','Georgia',serif"
const SANS  = "'Hiragino Kaku Gothic ProN','Yu Gothic','system-ui',sans-serif"

const listings = [
  {
    id: 1,
    prefecture: '長野県',
    village: '小谷村',
    title: '森のハーブ収穫と蒸留を手伝う5日間',
    duration: '5日間', stay: '宿あり', meals: '食事つき',
    date: '6/12(木)〜6/16(日)',
    img: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=160&h=120&fit=crop&q=80',
  },
  {
    id: 2,
    prefecture: '高知県',
    village: '馬路村',
    title: '山の柑橘を収穫して、加工場で仕込む週末',
    duration: '2泊', stay: '宿暮らし', meals: '食事つき',
    date: '6/8(土)〜6/9(日)',
    img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=160&h=120&fit=crop&q=80',
  },
  {
    id: 3,
    prefecture: '北海道',
    village: '下川町',
    title: '白樺の森で薪づくりと山の食材を整える10日間',
    duration: '10日間', stay: '宿あり', meals: '自炊',
    date: '6/20(木)〜6/29(日)',
    img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=160&h=120&fit=crop&q=80',
  },
]

const promises = [
  {
    num: '01', title: '森へ行く',
    desc: '海の森、都市の森、川の森、なりわいの森。全国にある「食べられる森」を、季節と役割から探す。',
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=320&fit=crop&q=80',
  },
  {
    num: '02', title: '手を動かす',
    desc: '収穫、加工、発酵、運搬、記録。AIに任せる時代だからこそ、身体を通した「生活生産」を体験する。',
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=320&fit=crop&q=80',
  },
  {
    num: '03', title: '香りを運ぶ',
    desc: '参加者は森の魅力を外へ運ぶフロントランナー。帰ったあとも、買う・伝える・再訪する関係が続く。',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=320&fit=crop&q=80',
  },
]

const gallery = [
  { src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=280&fit=crop&q=80', label: '森の奥の道' },
  { src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=280&fit=crop&q=80', label: 'ハーブの収穫' },
  { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=280&fit=crop&q=80', label: '山の柑橘' },
  { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=280&fit=crop&q=80', label: '土の手ざわり' },
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=280&fit=crop&q=80', label: 'きのこ採り' },
  { src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=280&fit=crop&q=80', label: '道具と暮らし' },
]

const features = [
  { icon: '🌿', label: '生活生産\nに活きる' },
  { icon: '👥', label: 'コミュニティ\nを育む' },
  { icon: '🌸', label: '香り・食・森\nをつなぐ' },
  { icon: '📍', label: '全国の\n森へ' },
]

const footerCols = [
  { title: '参加する',  links: ['森の仕事を探す', '地域から探す', '季節から探す', 'できることから探す'] },
  { title: '森をひらく', links: ['森主として登録', '活動を掲載する', 'パートナーシップ'] },
  { title: 'について',  links: ['森の奥とは', '参加の流れ', 'よくある質問', 'お問い合わせ'] },
]

export default function MoriNoOkuPage() {
  return (
    <div style={{ fontFamily: SANS, backgroundColor: C.cream, minHeight: '100vh' }}>

      {/* ── Header ── */}
      <header style={{ backgroundColor: C.green, position: 'sticky', top: 0, zIndex: 50 }}>
        <nav style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <a href="/mori-no-oku" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <div style={{ width: 40, height: 40, backgroundColor: C.cream, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L7 10h3L5 19h6v3h2v-3h6l-5-9h3L12 2z" fill={C.green}/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: SERIF, color: C.cream, fontWeight: 700, fontSize: 17, lineHeight: 1.2 }}>森の奥</div>
              <div style={{ color: C.sage, fontSize: 9, letterSpacing: '0.25em' }}>MORI NO OKU</div>
            </div>
          </a>

          {/* Nav links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ display: 'flex', gap: 28 }}>
              {[
                { label: '森を探す', href: '/mori-no-oku/events' },
                { label: '参加の流れ', href: '#flow' },
                { label: '森をひらく', href: '#open-forest' },
              ].map(item => (
                <a key={item.label} href={item.href} style={{ color: 'rgba(244,240,231,0.82)', fontSize: 14, textDecoration: 'none' }}>
                  {item.label}
                </a>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <a href="#" style={{ color: 'rgba(244,240,231,0.82)', fontSize: 14, textDecoration: 'none' }}>ログイン</a>
              <a href="#" style={{ backgroundColor: C.sage, color: C.white, fontSize: 13, fontWeight: 600, padding: '8px 22px', borderRadius: 24, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                新規登録
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* ── Hero + Listings ── */}
      <section style={{ display: 'flex', minHeight: 'calc(100vh - 64px)' }}>

        {/* Hero (left, 60%) */}
        <div style={{ flex: '0 0 60%', position: 'relative', minHeight: 600 }}>
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1400&q=85&fit=crop"
            alt="森の奥"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* Dark overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(24,51,38,0.78) 0%, rgba(24,51,38,0.52) 60%, rgba(24,51,38,0.35) 100%)' }} />

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '64px 56px' }}>
            <p style={{ color: C.sage, fontSize: 12, letterSpacing: '0.3em', fontWeight: 600, marginBottom: 20 }}>MORI NO OKU</p>

            <h1 style={{ fontFamily: SERIF, color: C.cream, fontSize: 'clamp(36px,4vw,58px)', fontWeight: 700, lineHeight: 1.4, letterSpacing: '0.03em', marginBottom: 24 }}>
              憧れは、<br />森の奥に眠る。
            </h1>

            <p style={{ color: 'rgba(244,240,231,0.8)', fontSize: 15, lineHeight: 2, marginBottom: 40 }}>
              その香りを運ぶ人がいる、その森を愛する人がいる<br />
              食べられる森へ、短く深く加わる。
            </p>

            {/* Filter buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
              {[
                { icon: '🌲', label: '地域から', href: '/mori-no-oku/events' },
                { icon: '🍂', label: '季節から', href: '/mori-no-oku/events' },
                { icon: '💡', label: 'できることから', href: '/mori-no-oku/events' },
              ].map(({ icon, label, href }) => (
                <a key={label} href={href}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 7, backgroundColor: 'rgba(244,240,231,0.13)', border: '1px solid rgba(244,240,231,0.3)', color: C.cream, fontSize: 14, fontWeight: 500, padding: '10px 22px', borderRadius: 28, textDecoration: 'none', backdropFilter: 'blur(6px)' }}>
                  <span>{icon}</span>{label}
                </a>
              ))}
            </div>

            {/* Beginner banner */}
            <a href="#philosophy"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(244,240,231,0.1)', border: '1px solid rgba(244,240,231,0.22)', borderRadius: 14, padding: '16px 22px', maxWidth: 420, textDecoration: 'none', backdropFilter: 'blur(6px)' }}>
              <div>
                <div style={{ color: C.cream, fontSize: 14, fontWeight: 600, marginBottom: 4 }}>はじめての方へ</div>
                <div style={{ color: 'rgba(244,240,231,0.65)', fontSize: 12 }}>森の奥の考え方や、参加の流れを紹介します。</div>
              </div>
              <span style={{ color: C.sage, fontSize: 22, marginLeft: 16 }}>→</span>
            </a>
          </div>
        </div>

        {/* Listings (right, 40%) */}
        <div style={{ flex: '0 0 40%', backgroundColor: C.cream, display: 'flex', flexDirection: 'column', padding: '40px 32px', borderLeft: `1px solid rgba(24,51,38,0.08)` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
            <h2 style={{ fontFamily: SERIF, fontSize: 15, fontWeight: 700, color: C.green }}>おすすめの森仕事・イベント</h2>
            <a href="/mori-no-oku/events" style={{ color: C.sage, fontSize: 13, textDecoration: 'none', fontWeight: 500 }}>すべて見る →</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
            {listings.map(item => (
              <a key={item.id} href={`/mori-no-oku/events#event-${item.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ backgroundColor: C.white, borderRadius: 14, overflow: 'hidden', display: 'flex', gap: 14, padding: 14, boxShadow: '0 1px 6px rgba(24,51,38,0.07)', transition: 'box-shadow 0.2s' }}>
                  <img src={item.img} alt={item.title}
                    style={{ width: 88, height: 76, objectFit: 'cover', borderRadius: 10, flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 11, color: C.sage, fontWeight: 700, marginBottom: 5, letterSpacing: '0.05em' }}>
                      {item.prefecture}　{item.village}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: C.green, lineHeight: 1.5, marginBottom: 7 }}>
                      {item.title}
                    </div>
                    <div style={{ display: 'flex', gap: 8, fontSize: 11, color: '#6b7280', flexWrap: 'wrap' }}>
                      <span>⏱ {item.duration}</span>
                      <span>🏠 {item.stay}</span>
                      <span>🍚 {item.meals}</span>
                    </div>
                    <div style={{ fontSize: 11, color: C.earth, marginTop: 5, fontWeight: 500 }}>📅 {item.date}</div>
                  </div>
                  <span style={{ color: C.gold, fontSize: 18, alignSelf: 'center', flexShrink: 0 }}>›</span>
                </div>
              </a>
            ))}
          </div>

          <a href="/mori-no-oku/events"
            style={{ display: 'block', marginTop: 20, border: `1.5px solid ${C.green}`, color: C.green, textAlign: 'center', fontWeight: 600, fontSize: 14, padding: '13px', borderRadius: 10, textDecoration: 'none', letterSpacing: '0.03em' }}>
            森の仕事をもっと見る →
          </a>
        </div>
      </section>

      {/* ── Brand positioning / features ── */}
      <section style={{ backgroundColor: C.white, padding: '80px 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <p style={{ fontSize: 11, letterSpacing: '0.35em', color: C.sage, fontWeight: 700, marginBottom: 14 }}>BRAND POSITIONING</p>
            <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(22px,2.5vw,34px)', color: C.green, lineHeight: 1.6, fontWeight: 700, marginBottom: 20 }}>
              "仕事を探す"より、<br />"森の住まい手になる道を探す"。
            </h2>
            <p style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.9, maxWidth: 560, margin: '0 auto' }}>
              おてつたびの親しみやすさは活かしつつ、観光やアルバイト感を弱め、地域の生活生産に混ざる体験を前面に出す。入口は軽く、余韻は深く。
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32 }}>
            {features.map(({ icon, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '28px 16px', backgroundColor: C.cream, borderRadius: 16 }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{icon}</div>
                <div style={{ fontSize: 13, color: C.green, fontWeight: 600, lineHeight: 1.7, whiteSpace: 'pre-line' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 森の奥の想い ── */}
      <section id="philosophy" style={{ backgroundColor: C.green, padding: '96px 40px', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle grain overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(143,164,106,0.12) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(75,139,138,0.08) 0%, transparent 60%)' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <p style={{ fontSize: 11, letterSpacing: '0.35em', color: C.sage, fontWeight: 700, marginBottom: 14 }}>PHILOSOPHY</p>
          <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(28px,3vw,44px)', color: C.cream, fontWeight: 700, marginBottom: 64, lineHeight: 1.4 }}>
            森の奥の想い
          </h2>

          {/* Story + Quote */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, marginBottom: 72, alignItems: 'start' }}>
            <div>
              <p style={{ color: 'rgba(244,240,231,0.78)', fontSize: 16, lineHeight: 2.1, marginBottom: 28 }}>
                かつて、豊かな社会を作ろうとした「森の奥」というコミュニティが存在していた。そのコミュニティの代表者が生活体験を軸にして、新たな価値を生んでいる。
              </p>
              <p style={{ color: 'rgba(244,240,231,0.65)', fontSize: 15, lineHeight: 2, marginBottom: 26 }}>
                加わってみよう！アンサンブル（＝生活生産イベント）に。<br />
                探してみよう！地球の住まい手になる道を。
              </p>
              <a href="/mori-no-oku/events" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: C.green, backgroundColor: C.cream, fontSize: 14, fontWeight: 700, padding: '12px 24px', borderRadius: 28, textDecoration: 'none' }}>
                生活生産イベントを探す <span style={{ color: C.sage }}>→</span>
              </a>
            </div>

            <div style={{ borderLeft: `1px solid rgba(143,164,106,0.35)`, paddingLeft: 52 }}>
              <blockquote style={{ fontFamily: SERIF, fontSize: 'clamp(18px,2vw,24px)', color: C.cream, lineHeight: 1.85, marginBottom: 28, fontWeight: 600 }}>
                「森の奥」のメンバーが織りなす<br />
                一期一会の調和。
              </blockquote>
              <p style={{ color: 'rgba(244,240,231,0.65)', fontSize: 15, lineHeight: 2 }}>
                全国各地から集まった唯一無二の表現者たちが、この場所で共鳴し合います。それぞれの暮らしと、心地よい体験。感性がゆっくりと開いていく贅沢で、とくべつな時間が流れています。
              </p>
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: '100%', height: 1, backgroundColor: 'rgba(143,164,106,0.2)', marginBottom: 60 }} />

          {/* Three pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {[
              {
                en: 'WHY', ja: '思想',
                title: '食べられる森・Exergy Foresters',
                desc: 'レシプロ経済と森と人の循環。閉じたコミュニティの中で、共感を軸にした新しい価値を創出する。ガバナンス不要度の高い、深いところの薄い層のコミュニティ。',
                color: C.sage,
              },
              {
                en: 'HOW', ja: '関係性',
                title: '森の奥・会員構造',
                desc: 'コアビジョン、拡張ビジョン、感化エリア。隣のヒエラルキーとの間でレシプロすることで、責任分担と安全性を確保する。選ばれる場、共感ベースのコミュニティ。',
                color: C.teal,
              },
              {
                en: 'WHAT', ja: '体験',
                title: 'イベント・宿泊',
                desc: '感性がゆっくりと開いていく贅沢な時間。生活生産体験を通じて、地球の住まい手になる道を探す。体験→関係→参加という段階設計で、思想優先の世界観へ誘う。',
                color: C.gold,
              },
            ].map(({ en, ja, title, desc, color }) => (
              <div key={en} style={{ backgroundColor: 'rgba(244,240,231,0.06)', border: '1px solid rgba(244,240,231,0.1)', borderRadius: 18, padding: '32px 28px', transition: 'background 0.2s' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 16 }}>
                  <span style={{ fontSize: 11, letterSpacing: '0.25em', color, fontWeight: 700 }}>{en}</span>
                  <span style={{ fontSize: 13, color: 'rgba(244,240,231,0.5)' }}>/ {ja}</span>
                </div>
                <h3 style={{ fontFamily: SERIF, fontSize: 17, color: C.cream, fontWeight: 700, marginBottom: 14, lineHeight: 1.6 }}>{title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(244,240,231,0.6)', lineHeight: 1.95 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3つの約束 ── */}
      <section id="flow" style={{ backgroundColor: C.cream, padding: '88px 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 28, alignItems: 'start' }}>

            {/* Concept label */}
            <div>
              <p style={{ fontSize: 11, letterSpacing: '0.3em', color: C.sage, fontWeight: 700, marginBottom: 10 }}>CONCEPT</p>
              <h2 style={{ fontFamily: SERIF, fontSize: 30, color: C.green, fontWeight: 700, marginBottom: 18, lineHeight: 1.3 }}>3つの<br />約束</h2>
              <div style={{ width: 32, height: 2, backgroundColor: C.sage, marginBottom: 18 }} />
              <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.9 }}>
                森の奥での時間が、あなたの人生のもうひとつの軸になりますように。
              </p>
            </div>

            {/* 3 promise cards */}
            {promises.map(p => (
              <div key={p.num} style={{ backgroundColor: C.white, borderRadius: 18, overflow: 'hidden', boxShadow: '0 2px 16px rgba(24,51,38,0.09)' }}>
                <div style={{ position: 'relative', height: 190 }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(24,51,38,0.45) 0%, transparent 60%)' }} />
                  <span style={{ position: 'absolute', top: 14, left: 14, backgroundColor: 'rgba(24,51,38,0.88)', color: C.cream, fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 20, letterSpacing: '0.1em' }}>
                    {p.num}
                  </span>
                </div>
                <div style={{ padding: '20px 20px 22px' }}>
                  <h3 style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 700, color: C.green, marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.85 }}>{p.desc}</p>
                  <a href="/mori-no-oku/events" style={{ display: 'inline-block', marginTop: 14, color: C.sage, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>イベントを見る →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo gallery strip ── */}
      <section style={{ backgroundColor: C.green, overflow: 'hidden' }}>
        <div style={{ display: 'flex' }}>
          {gallery.map((photo, i) => (
            <div key={i} style={{ flex: '0 0 auto', width: `${100 / gallery.length}%`, position: 'relative' }}>
              <img src={photo.src} alt={photo.label} style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(24,51,38,0.25)', transition: 'background 0.2s' }} />
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', padding: '12px 0 14px' }}>
          {gallery.map(photo => (
            <div key={photo.label} style={{ flex: '0 0 auto', width: `${100 / gallery.length}%`, textAlign: 'center', color: 'rgba(244,240,231,0.55)', fontSize: 11 }}>
              {photo.label}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA section ── */}
      <section id="open-forest" style={{ backgroundColor: C.sage, padding: '72px 40px', textAlign: 'center' }}>
        <p style={{ fontSize: 12, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.8)', fontWeight: 600, marginBottom: 16 }}>JOIN US</p>
        <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(24px,3vw,38px)', color: C.white, fontWeight: 700, marginBottom: 16, lineHeight: 1.5 }}>
          あなたの森仕事を、<br />はじめてみませんか。
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.9, marginBottom: 36, maxWidth: 480, margin: '0 auto 36px' }}>
          全国の食べられる森で、短く深く加わる体験が待っています。
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/mori-no-oku/events" style={{ backgroundColor: C.white, color: C.green, fontWeight: 700, fontSize: 15, padding: '14px 36px', borderRadius: 30, textDecoration: 'none' }}>
            生活生産イベントを探す
          </a>
          <a href="#philosophy" style={{ backgroundColor: 'transparent', color: C.white, fontWeight: 600, fontSize: 15, padding: '14px 36px', borderRadius: 30, border: `2px solid rgba(255,255,255,0.7)`, textDecoration: 'none' }}>
            はじめての方へ
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.green }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 40px 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>

            {/* Brand column */}
            <div>
              <div style={{ fontFamily: SERIF, color: C.cream, fontSize: 24, fontWeight: 700, marginBottom: 4 }}>森の奥</div>
              <div style={{ color: C.sage, fontSize: 10, letterSpacing: '0.25em', marginBottom: 20 }}>MORI NO OKU</div>
              <p style={{ color: 'rgba(244,240,231,0.55)', fontSize: 13, lineHeight: 1.9 }}>
                食べられる森へ、短く深く加わる。<br />
                森の住まい手になる道を探す。
              </p>
            </div>

            {footerCols.map(col => (
              <div key={col.title}>
                <div style={{ color: C.sage, fontSize: 12, fontWeight: 700, marginBottom: 16, letterSpacing: '0.1em' }}>{col.title}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                  {col.links.map(link => (
                    <a key={link} href="#" style={{ color: 'rgba(244,240,231,0.6)', fontSize: 13, textDecoration: 'none' }}>{link}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid rgba(244,240,231,0.1)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ color: 'rgba(244,240,231,0.35)', fontSize: 12 }}>© 2026 森の奥 All rights reserved.</p>
            <div style={{ display: 'flex', gap: 24 }}>
              {['プライバシーポリシー', '利用規約'].map(link => (
                <a key={link} href="#" style={{ color: 'rgba(244,240,231,0.35)', fontSize: 12, textDecoration: 'none' }}>{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
