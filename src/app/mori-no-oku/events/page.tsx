'use client'

import { useState, useMemo } from 'react'

const C = {
  green: '#183326', sage: '#8FA46A', teal: '#4B8B8A',
  earth: '#B26342', gold: '#C9A66B', cream: '#F4F0E7', white: '#FFFFFF',
}
const SERIF = "'Hiragino Mincho ProN','Yu Mincho','Georgia',serif"
const SANS  = "'Hiragino Kaku Gothic ProN','Yu Gothic','system-ui',sans-serif"

interface Event {
  id: number
  prefecture: string; village: string; region: string
  title: string; theme: string; duration: number
  stayAvailable: boolean; meals: string
  startDate: string; endDate: string; season: string
  img: string; description: string; tags: string[]
  featured?: boolean
}

const ALL_EVENTS: Event[] = [
  {
    id: 1, prefecture: '長野県', village: '小谷村', region: '中部',
    title: '森のハーブ収穫と蒸留を手伝う5日間',
    theme: 'ハーブ', duration: 5, stayAvailable: true, meals: '食事つき',
    startDate: '2026-06-12', endDate: '2026-06-16', season: '初夏',
    img: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=380&fit=crop&q=80',
    description: 'ハーブの収穫から蒸留まで、森の恵みを体全体で学ぶ5日間。精油と芳香蒸留水を持ち帰れます。',
    tags: ['ハーブ', '蒸留', '加工'], featured: true,
  },
  {
    id: 2, prefecture: '高知県', village: '馬路村', region: '四国',
    title: '山の柑橘を収穫して、加工場で仕込む週末',
    theme: '果実', duration: 2, stayAvailable: true, meals: '食事つき',
    startDate: '2026-06-08', endDate: '2026-06-09', season: '初夏',
    img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=380&fit=crop&q=80',
    description: '馬路村の柑橘農家に入り込み、収穫から加工まで一貫体験。ゆずポン酢の仕込みも体験できます。',
    tags: ['柑橘', '加工', '週末'],
  },
  {
    id: 3, prefecture: '北海道', village: '下川町', region: '北海道',
    title: '白樺の森で薪づくりと山の食材を整える10日間',
    theme: '木材・薪', duration: 10, stayAvailable: true, meals: '自炊',
    startDate: '2026-06-20', endDate: '2026-06-29', season: '初夏',
    img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=380&fit=crop&q=80',
    description: '北海道の白樺林で薪割り・薪積みを体験。山菜採りや保存食作りも。下川町の循環型林業を学ぶ。',
    tags: ['木材', '薪', '山菜'], featured: true,
  },
  {
    id: 4, prefecture: '岐阜県', village: '白川村', region: '中部',
    title: '合掌造りの里で農と木工を学ぶ7日間',
    theme: '木工', duration: 7, stayAvailable: true, meals: '食事つき',
    startDate: '2026-09-15', endDate: '2026-09-21', season: '秋',
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=380&fit=crop&q=80',
    description: '世界遺産の里で農業と伝統木工を体験。合掌造りの修繕に実際に関わりながら、里山の知恵を学ぶ。',
    tags: ['木工', '伝統', '農業'],
  },
  {
    id: 5, prefecture: '島根県', village: '津和野町', region: '中国',
    title: '棚田の稲刈りと藁細工の3日間',
    theme: '稲作', duration: 3, stayAvailable: true, meals: '食事つき',
    startDate: '2026-10-01', endDate: '2026-10-03', season: '秋',
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=380&fit=crop&q=80',
    description: '棚田の稲刈りを手作業で行い、脱穀・藁細工まで体験。日本の原風景の中で秋の実りを収める。',
    tags: ['稲作', '藁', '伝統'],
  },
  {
    id: 6, prefecture: '和歌山県', village: '田辺市', region: '近畿',
    title: '梅の里で梅仕事を学ぶ4日間',
    theme: '発酵', duration: 4, stayAvailable: true, meals: '食事つき',
    startDate: '2026-06-25', endDate: '2026-06-28', season: '初夏',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=380&fit=crop&q=80',
    description: '南高梅の産地で梅の収穫から梅干し・梅酒・梅シロップの仕込みまで。発酵文化を体験する4日間。',
    tags: ['梅', '発酵', '保存食'],
  },
  {
    id: 7, prefecture: '岩手県', village: '遠野市', region: '東北',
    title: 'ホップ収穫とクラフトビール仕込みの5日間',
    theme: '醸造', duration: 5, stayAvailable: true, meals: '一部',
    startDate: '2026-08-10', endDate: '2026-08-14', season: '夏',
    img: 'https://images.unsplash.com/photo-1416864929770-602e81e33c76?w=600&h=380&fit=crop&q=80',
    description: '遠野のホップ畑で収穫し、地元醸造所でクラフトビールを仕込む。発酵の科学と農業の現場を同時に学ぶ。',
    tags: ['醸造', 'ビール', 'ホップ'], featured: true,
  },
  {
    id: 8, prefecture: '京都府', village: '美山町', region: '近畿',
    title: '炭焼きと里山の仕事を知る3日間',
    theme: '木材・薪', duration: 3, stayAvailable: false, meals: 'なし',
    startDate: '2026-12-05', endDate: '2026-12-07', season: '冬',
    img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=380&fit=crop&q=80&brightness=-20',
    description: '美山の炭焼き職人と共に窯の管理・炭の取り出しを体験。里山の冬仕事の深さに触れる3日間。',
    tags: ['炭焼き', '木炭', '里山'],
  },
  {
    id: 9, prefecture: '宮崎県', village: '椎葉村', region: '九州',
    title: '焼畑農業を体験する秘境の7日間',
    theme: '農業', duration: 7, stayAvailable: true, meals: '食事つき',
    startDate: '2026-10-10', endDate: '2026-10-16', season: '秋',
    img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=380&fit=crop&q=80',
    description: '日本に残る焼畑農業の地・椎葉村で、火入れから播種・収穫まで一連の農作業を体験する。',
    tags: ['焼畑', '伝統農業', '秘境'],
  },
  {
    id: 10, prefecture: '山形県', village: '朝日町', region: '東北',
    title: 'リンゴ収穫と発酵食を仕込む4日間',
    theme: '発酵', duration: 4, stayAvailable: true, meals: '食事つき',
    startDate: '2026-10-20', endDate: '2026-10-23', season: '秋',
    img: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=380&fit=crop&q=80',
    description: 'リンゴの収穫から始まり、シードル・リンゴ酢・ドライフルーツ製作まで。発酵と保存の知恵を学ぶ。',
    tags: ['リンゴ', '発酵', 'シードル'],
  },
  {
    id: 11, prefecture: '石川県', village: '珠洲市', region: '中部',
    title: '塩田復興と海辺の食文化を学ぶ5日間',
    theme: '食材収穫', duration: 5, stayAvailable: true, meals: '食事つき',
    startDate: '2026-07-18', endDate: '2026-07-22', season: '夏',
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=380&fit=crop&q=80',
    description: '奥能登の揚げ浜塩田で伝統製塩を体験。海藻・海産物の加工も行い、海の恵みを全身で受け取る5日間。',
    tags: ['塩', '海産', '伝統'],
  },
  {
    id: 12, prefecture: '奈良県', village: '十津川村', region: '近畿',
    title: '深山の山菜採りと木工を楽しむ4日間',
    theme: '食材収穫', duration: 4, stayAvailable: true, meals: '一部',
    startDate: '2026-05-03', endDate: '2026-05-06', season: '春',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=380&fit=crop&q=80',
    description: '日本一広い村・十津川で山菜採りと木工を体験。山の師匠と歩き、食べられる植物の見分け方を学ぶ。',
    tags: ['山菜', '木工', '春'],
  },
]

const REGIONS  = ['北海道', '東北', '関東', '中部', '近畿', '中国', '四国', '九州']
const THEMES   = ['ハーブ', '果実', '木材・薪', '発酵', '醸造', '農業', '食材収穫', '木工', '稲作']
const DURATIONS = ['〜3日', '4〜7日', '8日以上']
const SEASONS  = ['春', '初夏', '夏', '秋', '冬']

function chip(active: boolean, label: string, onClick: () => void, color = C.sage) {
  return (
    <button key={label} onClick={onClick} style={{
      padding: '6px 16px', borderRadius: 20, fontSize: 13, fontWeight: 500, cursor: 'pointer', whiteSpace: 'nowrap',
      backgroundColor: active ? color : 'transparent',
      color: active ? C.white : '#4b5563',
      border: `1.5px solid ${active ? color : '#d1d5db'}`,
      transition: 'all 0.15s',
    }}>
      {label}
    </button>
  )
}

function durationMatch(e: Event, d: string) {
  if (!d) return true
  if (d === '〜3日')  return e.duration <= 3
  if (d === '4〜7日') return e.duration >= 4 && e.duration <= 7
  if (d === '8日以上') return e.duration >= 8
  return true
}

function formatDate(s: string) {
  const d = new Date(s)
  return `${d.getMonth()+1}/${d.getDate()}`
}

export default function EventsPage() {
  const [query,    setQuery]    = useState('')
  const [region,   setRegion]   = useState('')
  const [theme,    setTheme]    = useState('')
  const [duration, setDuration] = useState('')
  const [season,   setSeason]   = useState('')
  const [stayOnly, setStayOnly] = useState(false)

  const filtered = useMemo(() => ALL_EVENTS.filter(e => {
    if (query) {
      const q = query.trim()
      const hit = e.title.includes(q) || e.prefecture.includes(q) || e.village.includes(q) || e.tags.some(t => t.includes(q)) || e.theme.includes(q)
      if (!hit) return false
    }
    if (region   && e.region   !== region)   return false
    if (theme    && e.theme    !== theme)     return false
    if (season   && e.season   !== season)   return false
    if (!durationMatch(e, duration))         return false
    if (stayOnly && !e.stayAvailable)        return false
    return true
  }).sort((a, b) => a.startDate.localeCompare(b.startDate)), [query, region, theme, duration, season, stayOnly])

  const hasFilter = query || region || theme || duration || season || stayOnly

  function clearAll() {
    setQuery(''); setRegion(''); setTheme(''); setDuration(''); setSeason(''); setStayOnly(false)
  }

  return (
    <div style={{ fontFamily: SANS, backgroundColor: C.cream, minHeight: '100vh' }}>

      {/* ── Header ── */}
      <header style={{ backgroundColor: C.green, position: 'sticky', top: 0, zIndex: 50 }}>
        <nav style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/mori-no-oku" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <div style={{ width: 40, height: 40, backgroundColor: C.cream, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L7 10h3L5 19h6v3h2v-3h6l-5-9h3L12 2z" fill={C.green}/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: SERIF, color: C.cream, fontWeight: 700, fontSize: 17, lineHeight: 1.2 }}>森の奥</div>
              <div style={{ color: C.sage, fontSize: 9, letterSpacing: '0.25em' }}>MORI NO OKU</div>
            </div>
          </a>
          <div style={{ display: 'flex', gap: 28 }}>
            {[
              { label: '森を探す', href: '/mori-no-oku/events' },
              { label: '参加の流れ', href: '/mori-no-oku#flow' },
              { label: '森をひらく', href: '/mori-no-oku#open-forest' },
            ].map(item => (
              <a key={item.label} href={item.href} style={{ color: 'rgba(244,240,231,0.82)', fontSize: 14, textDecoration: 'none' }}>{item.label}</a>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href="#" style={{ color: 'rgba(244,240,231,0.82)', fontSize: 14, textDecoration: 'none' }}>ログイン</a>
            <a href="#" style={{ backgroundColor: C.sage, color: C.white, fontSize: 13, fontWeight: 600, padding: '8px 22px', borderRadius: 24, textDecoration: 'none' }}>新規登録</a>
          </div>
        </nav>
      </header>

      {/* ── Search Hero ── */}
      <section style={{ backgroundColor: C.green, padding: '52px 40px 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(143,164,106,0.15) 0%, transparent 60%)' }} />
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <p style={{ fontSize: 11, letterSpacing: '0.35em', color: C.sage, fontWeight: 700, marginBottom: 12 }}>ANSEMBLE / 生活生産イベント</p>
          <h1 style={{ fontFamily: SERIF, color: C.cream, fontSize: 'clamp(24px,3vw,38px)', fontWeight: 700, marginBottom: 10, lineHeight: 1.4 }}>
            森の仕事を、探そう。
          </h1>
          <p style={{ color: 'rgba(244,240,231,0.7)', fontSize: 15, marginBottom: 32 }}>
            全国の「食べられる森」でアンサンブルに加わる
          </p>

          {/* Search bar */}
          <div style={{ position: 'relative', maxWidth: 560, margin: '0 auto' }}>
            <span style={{ position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)', fontSize: 18, color: '#9ca3af', pointerEvents: 'none' }}>🔍</span>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="地域名・テーマ・キーワードで検索"
              style={{
                width: '100%', padding: '16px 20px 16px 48px', borderRadius: 14, border: 'none',
                fontSize: 15, outline: 'none', backgroundColor: C.white,
                boxShadow: '0 4px 24px rgba(0,0,0,0.15)', boxSizing: 'border-box',
                fontFamily: SANS,
              }}
            />
            {query && (
              <button onClick={() => setQuery('')}
                style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, color: '#9ca3af' }}>
                ✕
              </button>
            )}
          </div>

          {/* Quick season pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 20, flexWrap: 'wrap' }}>
            {SEASONS.map(s => (
              <button key={s} onClick={() => setSeason(season === s ? '' : s)}
                style={{ padding: '5px 14px', borderRadius: 16, fontSize: 12, cursor: 'pointer', border: '1px solid rgba(244,240,231,0.3)', backgroundColor: season === s ? 'rgba(244,240,231,0.25)' : 'transparent', color: C.cream, fontFamily: SANS }}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sticky Filter Bar ── */}
      <div style={{ backgroundColor: C.white, borderBottom: '1px solid #e5e7eb', padding: '12px 32px', position: 'sticky', top: 64, zIndex: 40, overflowX: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 'max-content' }}>
          <span style={{ fontSize: 12, color: '#6b7280', fontWeight: 600, marginRight: 4, whiteSpace: 'nowrap' }}>地域</span>
          {REGIONS.map(r => chip(region === r, r, () => setRegion(region === r ? '' : r)))}

          <div style={{ width: 1, height: 24, backgroundColor: '#e5e7eb', margin: '0 8px' }} />
          <span style={{ fontSize: 12, color: '#6b7280', fontWeight: 600, marginRight: 4 }}>テーマ</span>
          {THEMES.map(t => chip(theme === t, t, () => setTheme(theme === t ? '' : t), C.teal))}

          <div style={{ width: 1, height: 24, backgroundColor: '#e5e7eb', margin: '0 8px' }} />
          <span style={{ fontSize: 12, color: '#6b7280', fontWeight: 600, marginRight: 4 }}>期間</span>
          {DURATIONS.map(d => chip(duration === d, d, () => setDuration(duration === d ? '' : d), C.earth))}

          <div style={{ width: 1, height: 24, backgroundColor: '#e5e7eb', margin: '0 8px' }} />
          <button onClick={() => setStayOnly(!stayOnly)}
            style={{ padding: '6px 16px', borderRadius: 20, fontSize: 13, fontWeight: 500, cursor: 'pointer', border: `1.5px solid ${stayOnly ? C.gold : '#d1d5db'}`, backgroundColor: stayOnly ? C.gold : 'transparent', color: stayOnly ? C.white : '#4b5563', whiteSpace: 'nowrap' }}>
            🏠 宿あり
          </button>

          {hasFilter && (
            <button onClick={clearAll}
              style={{ marginLeft: 8, padding: '6px 14px', borderRadius: 20, fontSize: 12, cursor: 'pointer', border: '1.5px solid #ef4444', backgroundColor: 'transparent', color: '#ef4444', whiteSpace: 'nowrap' }}>
              リセット
            </button>
          )}
        </div>
      </div>

      {/* ── Results ── */}
      <main style={{ maxWidth: 1280, margin: '0 auto', padding: '36px 32px 80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
          <p style={{ fontSize: 14, color: '#6b7280' }}>
            <span style={{ fontWeight: 700, color: C.green, fontSize: 18 }}>{filtered.length}</span>
            <span style={{ marginLeft: 6 }}>件のアンサンブル</span>
            {hasFilter && <span style={{ marginLeft: 8, color: C.sage }}>（絞り込み中）</span>}
          </p>
          <p style={{ fontSize: 12, color: '#9ca3af' }}>📅 開催日順</p>
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 20px' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🌿</div>
            <p style={{ fontFamily: SERIF, fontSize: 20, color: C.green, marginBottom: 8 }}>
              該当するイベントが見つかりませんでした
            </p>
            <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 24 }}>条件を変えて検索してみてください</p>
            <button onClick={clearAll}
              style={{ backgroundColor: C.sage, color: C.white, fontWeight: 600, fontSize: 14, padding: '12px 28px', borderRadius: 24, border: 'none', cursor: 'pointer' }}>
              すべてのイベントを見る
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {filtered.map(ev => <EventCard key={ev.id} ev={ev} />)}
          </div>
        )}
      </main>

      {/* ── CTA Banner ── */}
      <section style={{ backgroundColor: C.green, padding: '56px 40px', textAlign: 'center' }}>
        <p style={{ fontFamily: SERIF, fontSize: 'clamp(20px,2.5vw,30px)', color: C.cream, fontWeight: 700, marginBottom: 12, lineHeight: 1.6 }}>
          森の住まい手になる道を、<br />一緒に探しませんか。
        </p>
        <p style={{ color: 'rgba(244,240,231,0.65)', fontSize: 14, marginBottom: 28 }}>
          新しいイベントは随時追加されます。会員登録で最新情報をお届けします。
        </p>
        <a href="/mori-no-oku#philosophy" style={{ display: 'inline-block', backgroundColor: C.sage, color: C.white, fontWeight: 700, fontSize: 15, padding: '14px 36px', borderRadius: 30, textDecoration: 'none' }}>
          新規登録（無料）
        </a>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.green, borderTop: '1px solid rgba(143,164,106,0.15)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '32px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: SERIF, color: C.cream, fontSize: 18, fontWeight: 700 }}>森の奥</div>
          <p style={{ color: 'rgba(244,240,231,0.35)', fontSize: 12 }}>© 2026 森の奥 All rights reserved.</p>
          <a href="/mori-no-oku" style={{ color: C.sage, fontSize: 13, textDecoration: 'none' }}>← トップに戻る</a>
        </div>
      </footer>
    </div>
  )
}

function EventCard({ ev }: { ev: Event }) {
  const seasonColor: Record<string, string> = {
    '春': '#B26342', '初夏': C.teal, '夏': '#4B8B8A', '秋': '#C9A66B', '冬': '#8FA46A',
  }
  const themeColor = seasonColor[ev.season] ?? C.sage

  return (
    <a id={`event-${ev.id}`} href="/mori-no-oku#philosophy" style={{ textDecoration: 'none', display: 'block', scrollMarginTop: 140 }}>
      <div style={{ backgroundColor: C.white, borderRadius: 18, overflow: 'hidden', boxShadow: '0 2px 12px rgba(24,51,38,0.08)', transition: 'transform 0.2s, box-shadow 0.2s', height: '100%', border: ev.featured ? `1px solid rgba(178,99,66,0.24)` : '1px solid rgba(24,51,38,0.06)' }}>
        {/* Image */}
        <div style={{ position: 'relative', height: 200 }}>
          <img src={ev.img} alt={ev.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(24,51,38,0.5) 0%, transparent 50%)' }} />

          {ev.featured && (
            <span style={{ position: 'absolute', top: 12, left: 12, backgroundColor: C.earth, color: C.white, fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 12, letterSpacing: '0.1em' }}>
              おすすめ
            </span>
          )}

          <span style={{ position: 'absolute', top: 12, right: 12, backgroundColor: 'rgba(255,255,255,0.9)', color: '#4b5563', fontSize: 18, width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            🔖
          </span>

          <div style={{ position: 'absolute', bottom: 12, left: 12, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <span style={{ backgroundColor: themeColor, color: C.white, fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 12 }}>
              {ev.season}
            </span>
            {ev.stayAvailable && (
              <span style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: C.green, fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 12 }}>
                🏠 宿あり
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '18px 18px 20px' }}>
          <div style={{ fontSize: 11, color: C.sage, fontWeight: 700, marginBottom: 6, letterSpacing: '0.05em' }}>
            {ev.prefecture}　{ev.village}
          </div>
          <h3 style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 700, color: C.green, marginBottom: 10, lineHeight: 1.5 }}>
            {ev.title}
          </h3>
          <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.7, marginBottom: 14 }}>
            {ev.description}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
            {ev.tags.map(tag => (
              <span key={tag} style={{ fontSize: 11, color: C.teal, backgroundColor: 'rgba(75,139,138,0.1)', padding: '2px 8px', borderRadius: 10, fontWeight: 500 }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Meta */}
          <div style={{ display: 'flex', gap: 12, fontSize: 12, color: '#6b7280', marginBottom: 14, flexWrap: 'wrap' }}>
            <span>⏱ {ev.duration}日間</span>
            <span>🍚 {ev.meals}</span>
          </div>

          {/* Date + arrow */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f3f4f6', paddingTop: 12 }}>
            <span style={{ fontSize: 12, color: C.earth, fontWeight: 600 }}>
              📅 {formatDate(ev.startDate)}〜{formatDate(ev.endDate)}
            </span>
            <span style={{ color: C.sage, fontSize: 14, fontWeight: 700 }}>参加の入口へ →</span>
          </div>
        </div>
      </div>
    </a>
  )
}
