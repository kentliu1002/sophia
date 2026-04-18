import React, { useState } from 'react';
import {
  Home, Clock, Plus, Bookmark, User, Link2, Camera, X,
  Heart, TrendingDown, TrendingUp, ChevronRight, ArrowLeft,
  Check, MoreHorizontal, Edit3, Trash2, ShoppingBag, RefreshCw,
  Sparkles, Calendar, Tag, Share2, MessageCircle, Filter,
  ArrowUpRight, BarChart3, Smile, Package, Search, Bell,
  Eye, Image as ImageIcon, Repeat, DollarSign, ChevronDown
} from 'lucide-react';

// ============================================================
// Mock 数据 · 用户贴过的链接记录
// ============================================================
const diary = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&h=800&fit=crop',
    brand: 'COS',
    name: 'Oversized Wool Blazer',
    platform: '淘宝',
    platformColor: '#ff4400',
    addedAt: '今天 14:23',
    dateGroup: '今天',
    status: 'want', // want · bought
    currentPrice: 2499,
    addedPrice: 2499,
    lowestPrice: 2380,
    priceTrend: 'stable',
    priceHistory: [2899, 2799, 2699, 2599, 2499, 2499],
    category: '外套',
    userNote: '',
    alert: false
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop',
    brand: 'Maje',
    name: '秋冬小香风外套',
    platform: '天猫',
    platformColor: '#ff0036',
    addedAt: '今天 09:15',
    dateGroup: '今天',
    status: 'want',
    currentPrice: 4300,
    addedPrice: 4890,
    lowestPrice: 4300,
    priceTrend: 'down',
    priceHistory: [4890, 4890, 4700, 4500, 4400, 4300],
    category: '外套',
    userNote: '搭配那条 Toteme 的直筒裤会不会好看？',
    alert: true,
    dropAmount: 590
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
    brand: 'Veja',
    name: 'Campo 真皮小白鞋',
    platform: '京东',
    platformColor: '#e2231a',
    addedAt: '昨天 21:48',
    dateGroup: '昨天',
    status: 'bought',
    currentPrice: 1099,
    addedPrice: 1180,
    paidPrice: 1099,
    lowestPrice: 1099,
    category: '鞋履',
    userNote: '下单了！等了两周终于买到',
    alert: false,
    boughtAt: '昨天 22:03'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop',
    brand: 'Lemaire',
    name: '扭结真丝衬衫',
    platform: '小红书',
    platformColor: '#ff2442',
    addedAt: '昨天 18:30',
    dateGroup: '昨天',
    status: 'want',
    currentPrice: 4200,
    addedPrice: 4200,
    lowestPrice: 4200,
    priceTrend: 'stable',
    priceHistory: [4200, 4200, 4200, 4200, 4200, 4200],
    category: '上衣',
    userNote: '',
    alert: false
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1608234807905-4466023792f5?w=600&h=800&fit=crop',
    brand: 'Maison Margiela',
    name: 'Tabi 分趾皮靴',
    platform: '淘宝',
    platformColor: '#ff4400',
    addedAt: '3 天前',
    dateGroup: '本周',
    status: 'want',
    currentPrice: 9800,
    addedPrice: 9800,
    lowestPrice: 9500,
    priceTrend: 'stable',
    priceHistory: [9800, 9800, 9800, 9500, 9800, 9800],
    category: '鞋履',
    userNote: '心愿单第一位 💭',
    alert: false
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=500&fit=crop',
    brand: 'Acne Studios',
    name: '流苏羊毛围巾',
    platform: '天猫',
    platformColor: '#ff0036',
    addedAt: '5 天前',
    dateGroup: '本周',
    status: 'bought',
    currentPrice: 2240,
    addedPrice: 2800,
    paidPrice: 2240,
    lowestPrice: 2240,
    category: '配饰',
    userNote: '等到降价入手了，省了 560 ✌️',
    alert: false,
    boughtAt: '4 天前'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop',
    brand: 'Polene',
    name: 'Numéro Un 手袋',
    platform: '小红书',
    platformColor: '#ff2442',
    addedAt: '2 周前',
    dateGroup: '本月',
    status: 'want',
    currentPrice: 4200,
    addedPrice: 4400,
    lowestPrice: 4200,
    priceTrend: 'down',
    priceHistory: [4400, 4400, 4300, 4300, 4200, 4200],
    category: '配饰',
    userNote: '',
    alert: false
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop',
    brand: 'UNIQLO U',
    name: '美丽诺羊毛圆领毛衣',
    platform: '天猫',
    platformColor: '#ff0036',
    addedAt: '3 周前',
    dateGroup: '本月',
    status: 'bought',
    currentPrice: 399,
    addedPrice: 399,
    paidPrice: 399,
    lowestPrice: 399,
    category: '上衣',
    userNote: '基础款，很值',
    alert: false,
    boughtAt: '3 周前'
  }
];

const formatPrice = (n) => `¥${n.toLocaleString()}`;

// ============================================================
// 主应用
// ============================================================
export default function App() {
  const [activeTab, setActiveTab] = useState('diary');
  const [showPaste, setShowPaste] = useState(false);
  const [pasteResult, setPasteResult] = useState(null);
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-0 lg:p-8"
      style={{
        background: 'radial-gradient(ellipse at top, #2a1a0f 0%, #0d0807 50%, #000 100%)',
        fontFamily: "'Noto Serif SC', serif"
      }}>
      
      {/* 桌面端装饰文字 */}
      <div className="hidden lg:block fixed left-12 top-12 text-white/40 max-w-xs">
        <div className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{fontFamily: "'JetBrains Mono', monospace"}}>PRICE DIARY · iPhone 15</div>
        <div className="text-4xl leading-tight mb-3 text-white/80" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>
          Your shopping,<br/><span className="text-[#ff6b35]">logged</span> beautifully.
        </div>
        <div className="text-xs leading-relaxed">
          贴链接 · 记录心动<br/>
          跟踪价格 · 见证决定
        </div>
      </div>

      <div className="hidden lg:block fixed right-12 bottom-12 text-white/30 max-w-xs text-right">
        <div className="text-[10px] tracking-[0.3em] uppercase mb-2" style={{fontFamily: "'JetBrains Mono', monospace"}}>— DIARY MODE</div>
        <div className="text-xs leading-relaxed">
          时间线风格 · 想买/已买分档<br/>
          点击中间橘色按钮粘贴链接
        </div>
      </div>

      {/* iPhone 15 容器 */}
      <div className="relative w-full lg:w-[393px] h-screen lg:h-[852px] lg:rounded-[55px] overflow-hidden lg:shadow-[0_40px_80px_rgba(0,0,0,0.7),0_0_0_11px_#1a1210,0_0_0_12px_#2a1f1a,0_0_0_14px_#3a2d26]"
        style={{background: '#faf5ee'}}>
        
        {/* Dynamic Island */}
        <div className="hidden lg:block absolute top-[11px] left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-[20px] z-50"></div>

        {/* 状态栏 */}
        <div className="relative z-40 flex justify-between items-center h-[54px] px-[30px] pt-[18px] pb-[8px]" 
          style={{fontFamily: "-apple-system, 'SF Pro Text', system-ui, sans-serif"}}>
          <span className="text-[17px] font-semibold text-[#1a1210] tracking-tight leading-none">9:41</span>
          <span className="flex gap-[5px] items-center text-[#1a1210]">
            <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
              <rect x="0" y="7" width="3" height="4" rx="0.5" />
              <rect x="4.5" y="5" width="3" height="6" rx="0.5" />
              <rect x="9" y="2.5" width="3" height="8.5" rx="0.5" />
              <rect x="13.5" y="0" width="3" height="11" rx="0.5" />
            </svg>
            <span className="text-[15px] font-semibold tracking-tight leading-none">5G</span>
            <svg width="27" height="13" viewBox="0 0 27 13" fill="none" className="ml-[2px]">
              <rect x="0.5" y="0.5" width="22" height="12" rx="3" stroke="currentColor" strokeOpacity="0.4" fill="none" />
              <rect x="2" y="2" width="19" height="9" rx="1.5" fill="currentColor" />
              <rect x="23.5" y="4" width="2" height="5" rx="1" fill="currentColor" fillOpacity="0.4" />
            </svg>
          </span>
        </div>

        {/* 内容区 */}
        <div className="relative h-[calc(100%-54px)] overflow-y-auto overflow-x-hidden pb-28" style={{scrollbarWidth: 'none'}}>
          {activeTab === 'diary' && <DiaryScreen onSelect={setSelected} />}
          {activeTab === 'stats' && <StatsScreen />}
          {activeTab === 'profile' && <ProfileScreen />}
        </div>

        {/* 底部导航 */}
        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} onPaste={() => setShowPaste(true)} />

        {/* Home Indicator */}
        <div className="hidden lg:block absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[134px] h-[5px] rounded-full bg-[#1a1210] z-[60] pointer-events-none"></div>

        {/* 浮层 */}
        {showPaste && <PasteOverlay onClose={() => setShowPaste(false)} onDone={(r) => { setShowPaste(false); setPasteResult(r); }} />}
        {pasteResult && <PasteResultOverlay onClose={() => setPasteResult(null)} />}
        {selected && <DiaryEntryDetail entry={selected} onClose={() => setSelected(null)} />}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Noto+Serif+SC:wght@400;500;700;900&family=JetBrains+Mono:wght@400;500;700&display=swap');
        ::-webkit-scrollbar { display: none; }
        @keyframes pulse-dot { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
        @keyframes slideUp { from { transform: translateY(16px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes slideUpFull { from { transform: translateY(100%); } to { transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes loading-pulse { 0%,100% { opacity: 0.3; } 50% { opacity: 1; } }
        .animate-slideUp { animation: slideUp 0.5s cubic-bezier(0.16,1,0.3,1) backwards; }
        .animate-slideUpFull { animation: slideUpFull 0.4s cubic-bezier(0.16,1,0.3,1); }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .pulse-dot { animation: pulse-dot 1.5s infinite; }
      `}</style>
    </div>
  );
}

// ============================================================
// 底部 Tab
// ============================================================
function TabBar({ activeTab, setActiveTab, onPaste }) {
  const tabs = [
    { id: 'diary', label: '日记', icon: Clock },
    { id: 'stats', label: '统计', icon: BarChart3 },
    { id: 'paste', label: '贴链接', icon: Link2, center: true },
    { id: 'profile', label: '我的', icon: User, isAvatar: true },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 z-40 px-3 pt-2 pb-[26px]"
      style={{background: 'linear-gradient(to top, #faf5ee 70%, rgba(250,245,238,0))'}}>
      <div className="flex items-end justify-around rounded-2xl bg-[#1a1210] py-2.5 px-2 shadow-[0_8px_24px_rgba(26,18,16,0.3)]">
        <button onClick={() => setActiveTab('diary')} className="flex flex-col items-center flex-1 py-1">
          <Clock size={20} strokeWidth={activeTab === 'diary' ? 2.4 : 1.6} className={activeTab === 'diary' ? 'text-[#ff6b35]' : 'text-white/50'} />
          <span className={`text-[10px] mt-1 ${activeTab === 'diary' ? 'text-[#ff6b35]' : 'text-white/50'}`}>日记</span>
        </button>
        <button onClick={() => setActiveTab('stats')} className="flex flex-col items-center flex-1 py-1">
          <BarChart3 size={20} strokeWidth={activeTab === 'stats' ? 2.4 : 1.6} className={activeTab === 'stats' ? 'text-[#ff6b35]' : 'text-white/50'} />
          <span className={`text-[10px] mt-1 ${activeTab === 'stats' ? 'text-[#ff6b35]' : 'text-white/50'}`}>统计</span>
        </button>
        
        <button onClick={onPaste} className="relative -mt-7 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#ff6b35] to-[#c4472b] transition-transform active:scale-95"
            style={{boxShadow: '0 10px 24px rgba(255,107,53,0.5), inset 0 2px 4px rgba(255,255,255,0.2)'}}>
            <Plus size={28} strokeWidth={2.4} className="text-white" />
          </div>
          <span className="text-[10px] mt-1 text-white/90 font-medium">贴链接</span>
        </button>

        <button className="flex flex-col items-center flex-1 py-1 opacity-50">
          <Search size={20} strokeWidth={1.6} className="text-white/50" />
          <span className="text-[10px] mt-1 text-white/50">搜索</span>
        </button>
        <button onClick={() => setActiveTab('profile')} className="flex flex-col items-center flex-1 py-1">
          <div className={`w-6 h-6 rounded-full overflow-hidden border-2 ${activeTab === 'profile' ? 'border-[#ff6b35]' : 'border-white/30'}`}>
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&h=60&fit=crop" className="w-full h-full object-cover" alt="" />
          </div>
          <span className={`text-[10px] mt-1 ${activeTab === 'profile' ? 'text-[#ff6b35]' : 'text-white/50'}`}>我的</span>
        </button>
      </div>
    </div>
  );
}

// ============================================================
// 日记主界面（时间线）
// ============================================================
function DiaryScreen({ onSelect }) {
  const [tab, setTab] = useState('want'); // want · bought
  const wantEntries = diary.filter(d => d.status === 'want');
  const boughtEntries = diary.filter(d => d.status === 'bought');
  const entries = tab === 'want' ? wantEntries : boughtEntries;

  // 按日期分组
  const grouped = entries.reduce((acc, e) => {
    if (!acc[e.dateGroup]) acc[e.dateGroup] = [];
    acc[e.dateGroup].push(e);
    return acc;
  }, {});

  const totalWanted = wantEntries.reduce((s, e) => s + e.currentPrice, 0);
  const totalSpent = boughtEntries.reduce((s, e) => s + (e.paidPrice || e.currentPrice), 0);

  return (
    <div className="text-[#1a1210]">
      {/* Header */}
      <div className="px-6 pt-1 pb-3">
        <div className="flex items-baseline justify-between mb-1">
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>MONDAY · APR 17</div>
            <div className="text-[32px] leading-tight mt-0.5" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>
              Diary<span className="text-[#ff6b35]">.</span>
            </div>
          </div>
          <button className="w-9 h-9 rounded-full bg-white/70 border border-[#1a1210]/5 flex items-center justify-center relative">
            <Bell size={15} />
            <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#ff6b35] pulse-dot"></div>
          </button>
        </div>
      </div>

      {/* 想买/已买 切换 */}
      <div className="px-6 mb-4">
        <div className="flex gap-1 p-1 rounded-2xl bg-[#1a1210]/5">
          <button onClick={() => setTab('want')}
            className={`flex-1 py-2.5 rounded-xl transition-all ${tab === 'want' ? 'bg-white shadow-sm' : ''}`}>
            <div className="text-xs font-medium" style={{fontFamily: "'Noto Serif SC', serif"}}>想买</div>
            <div className="flex items-center justify-center gap-1 mt-0.5">
              <span className="text-[10px] text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>{wantEntries.length} 件</span>
              <span className="text-[10px] text-[#8a7968]">·</span>
              <span className="text-[10px] text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>¥{(totalWanted/1000).toFixed(1)}k</span>
            </div>
          </button>
          <button onClick={() => setTab('bought')}
            className={`flex-1 py-2.5 rounded-xl transition-all ${tab === 'bought' ? 'bg-white shadow-sm' : ''}`}>
            <div className="text-xs font-medium" style={{fontFamily: "'Noto Serif SC', serif"}}>已买</div>
            <div className="flex items-center justify-center gap-1 mt-0.5">
              <span className="text-[10px] text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>{boughtEntries.length} 件</span>
              <span className="text-[10px] text-[#8a7968]">·</span>
              <span className="text-[10px] text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>¥{(totalSpent/1000).toFixed(1)}k</span>
            </div>
          </button>
        </div>
      </div>

      {/* 降价提醒（仅想买档） */}
      {tab === 'want' && (
        <AlertBanner entries={wantEntries.filter(e => e.alert)} onSelect={onSelect} />
      )}

      {/* 时间线 */}
      <div className="px-6">
        {Object.entries(grouped).map(([date, items], gi) => (
          <div key={date} className="mb-5">
            <div className="flex items-center gap-2 mb-3 sticky top-0 z-10 -mx-6 px-6 py-2" style={{background: 'linear-gradient(to bottom, #faf5ee 80%, rgba(250,245,238,0.8))'}}>
              <div className="w-6 h-6 rounded-full bg-[#1a1210] flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#ff6b35]"></div>
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>{date}</div>
              <div className="flex-1 h-px bg-[#1a1210]/10"></div>
              <div className="text-[10px] text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>{items.length} 条</div>
            </div>

            <div className="space-y-3 relative">
              {/* 时间线竖线 */}
              <div className="absolute left-[11px] top-0 bottom-0 w-px bg-[#1a1210]/10"></div>

              {items.map((entry, i) => (
                <DiaryCard key={entry.id} entry={entry} delay={(gi * 4 + i) * 60} onClick={() => onSelect(entry)} />
              ))}
            </div>
          </div>
        ))}
        
        {/* 提示 */}
        <div className="mb-4 rounded-2xl bg-gradient-to-br from-[#faf5ee] to-[#f0e6d8] p-4 border border-[#1a1210]/5">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Sparkles size={12} className="text-[#ff6b35]" />
            <span className="text-[10px] tracking-widest uppercase text-[#ff6b35]" style={{fontFamily: "'JetBrains Mono', monospace"}}>— TIP</span>
          </div>
          <div className="text-sm leading-tight mb-1" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>
            把每次心动都记下来吧。
          </div>
          <div className="text-[11px] text-[#1a1210]/70 leading-relaxed">
            时间一久，你的日记就是一本你的购物故事书。
          </div>
        </div>
      </div>
      <div className="h-4"></div>
    </div>
  );
}

function AlertBanner({ entries, onSelect }) {
  if (entries.length === 0) return null;
  const e = entries[0];
  return (
    <div className="px-6 mb-4">
      <button onClick={() => onSelect(e)}
        className="w-full rounded-2xl p-3 flex items-center gap-3 text-left bg-gradient-to-r from-[#ff6b35] to-[#c4472b] text-white active:scale-99 transition-transform">
        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center flex-shrink-0">
          <TrendingDown size={18} strokeWidth={2.5} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] tracking-widest uppercase opacity-80" style={{fontFamily: "'JetBrains Mono', monospace"}}>— PRICE DROP</div>
          <div className="text-sm font-medium truncate">{e.brand} · {e.name}</div>
          <div className="text-[11px] opacity-90">
            降了 ¥{e.dropAmount}，现在 {formatPrice(e.currentPrice)}
          </div>
        </div>
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

function DiaryCard({ entry, delay, onClick }) {
  return (
    <div className="animate-slideUp relative pl-9" style={{animationDelay: `${delay}ms`}}>
      {/* 时间节点 */}
      <div className="absolute left-0 top-4 w-[23px] flex items-center justify-center">
        <div className={`w-[7px] h-[7px] rounded-full ${entry.alert ? 'bg-[#ff6b35] ring-4 ring-[#ff6b35]/20' : 'bg-[#1a1210]/40'}`}></div>
      </div>

      <button onClick={onClick}
        className="w-full rounded-2xl bg-white border border-[#1a1210]/5 overflow-hidden text-left active:scale-99 transition-transform">
        {/* 头部 · 时间/平台/状态 */}
        <div className="px-3 pt-2.5 pb-1 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="text-[10px] px-1.5 py-0.5 rounded-md text-white font-medium" style={{background: entry.platformColor}}>
              {entry.platform}
            </div>
            <span className="text-[10px] text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>{entry.addedAt}</span>
          </div>
          {entry.status === 'bought' && (
            <div className="flex items-center gap-0.5 text-[10px] text-[#1a8c5a] font-medium">
              <Check size={10} strokeWidth={3} />
              已购买
            </div>
          )}
          {entry.status === 'want' && entry.alert && (
            <div className="flex items-center gap-0.5 text-[10px] text-[#ff6b35] font-semibold">
              <TrendingDown size={10} strokeWidth={2.5} />
              降价
            </div>
          )}
        </div>

        {/* 主体 */}
        <div className="px-3 pb-3 flex gap-3">
          <img src={entry.image} className="w-20 h-24 rounded-xl object-cover flex-shrink-0" alt="" />
          <div className="flex-1 min-w-0">
            <div className="text-[10px] text-[#8a7968] tracking-wider uppercase" style={{fontFamily: "'JetBrains Mono', monospace"}}>{entry.brand}</div>
            <div className="text-xs mt-0.5 line-clamp-2 leading-tight">{entry.name}</div>
            
            {/* 价格 */}
            <div className="flex items-baseline gap-1.5 mt-2">
              <span className="text-lg font-bold leading-none" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>
                {formatPrice(entry.currentPrice)}
              </span>
              {entry.status === 'want' && entry.addedPrice !== entry.currentPrice && (
                <span className={`text-[10px] font-semibold ${entry.currentPrice < entry.addedPrice ? 'text-[#ff6b35]' : 'text-[#8a7968]'}`}
                  style={{fontFamily: "'JetBrains Mono', monospace"}}>
                  {entry.currentPrice < entry.addedPrice ? '↓' : '↑'}
                  {Math.abs(Math.round((entry.currentPrice - entry.addedPrice) / entry.addedPrice * 100))}%
                </span>
              )}
            </div>
            
            {/* 价格趋势迷你图（仅想买） */}
            {entry.status === 'want' && entry.priceHistory && (
              <div className="mt-1.5 flex items-end gap-0.5 h-3">
                {entry.priceHistory.map((v, i) => {
                  const max = Math.max(...entry.priceHistory);
                  const min = Math.min(...entry.priceHistory);
                  const h = max === min ? 50 : ((v - min) / (max - min)) * 75 + 25;
                  const isLast = i === entry.priceHistory.length - 1;
                  return (
                    <div key={i} className={`flex-1 rounded-sm ${isLast && entry.alert ? 'bg-[#ff6b35]' : 'bg-[#1a1210]/15'}`}
                      style={{height: `${h}%`}}></div>
                  );
                })}
              </div>
            )}

            {/* 用户备注 */}
            {entry.userNote && (
              <div className="mt-2 text-[11px] text-[#1a1210]/70 leading-relaxed italic" style={{fontFamily: "'Instrument Serif', serif"}}>
                「{entry.userNote}」
              </div>
            )}
          </div>
        </div>
      </button>
    </div>
  );
}

// ============================================================
// 粘贴链接浮层
// ============================================================
function PasteOverlay({ onClose, onDone }) {
  const [stage, setStage] = useState('input'); // input | parsing
  const [url, setUrl] = useState('');
  
  const platforms = [
    { name: '淘宝', color: '#ff4400', shortcut: 'tb.cn' },
    { name: '天猫', color: '#ff0036', shortcut: 'tmall' },
    { name: '京东', color: '#e2231a', shortcut: 'jd.com' },
    { name: '小红书', color: '#ff2442', shortcut: 'xiaohongshu' },
  ];

  const doPaste = () => {
    setUrl('https://item.taobao.com/…');
    setTimeout(() => setStage('parsing'), 300);
    setTimeout(() => onDone({ ok: true }), 1800);
  };

  return (
    <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm animate-fadeIn flex items-end" onClick={onClose}>
      <div className="w-full bg-[#faf5ee] rounded-t-3xl animate-slideUpFull" onClick={e => e.stopPropagation()}>
        <div className="pt-2 pb-2">
          <div className="w-10 h-1 rounded-full bg-[#1a1210]/20 mx-auto"></div>
        </div>

        {stage === 'input' ? (
          <div className="px-6 pb-6 pt-1">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[10px] tracking-widest uppercase text-[#ff6b35]" style={{fontFamily: "'JetBrains Mono', monospace"}}>— PASTE</div>
                <div className="text-xl mt-0.5" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>贴个链接，记下来</div>
              </div>
              <button onClick={onClose} className="w-8 h-8 rounded-full bg-[#1a1210]/5 flex items-center justify-center">
                <X size={16} />
              </button>
            </div>

            {/* 粘贴区 */}
            <div className="rounded-2xl bg-white border-2 border-dashed border-[#1a1210]/15 p-5 mb-3 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#1a1210] mx-auto mb-3 flex items-center justify-center">
                <Link2 size={22} className="text-[#ff6b35]" />
              </div>
              <div className="text-sm font-medium mb-1">粘贴商品链接</div>
              <div className="text-[11px] text-[#8a7968] mb-3 leading-relaxed">
                从淘宝/天猫/京东/小红书 App<br/>
                点"分享" → "复制链接"
              </div>
              <button onClick={doPaste}
                className="px-5 py-2 rounded-full bg-[#ff6b35] text-white text-xs font-medium">
                自动检测剪贴板
              </button>
            </div>

            {/* 支持平台 */}
            <div className="rounded-2xl bg-white p-4 border border-[#1a1210]/5 mb-4">
              <div className="text-[10px] tracking-widest uppercase text-[#8a7968] mb-2.5" style={{fontFamily: "'JetBrains Mono', monospace"}}>— 支持的平台</div>
              <div className="grid grid-cols-4 gap-2">
                {platforms.map(p => (
                  <div key={p.name} className="flex flex-col items-center gap-1.5 py-2 rounded-xl bg-[#faf5ee]">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: p.color}}>
                      <ShoppingBag size={15} className="text-white" />
                    </div>
                    <span className="text-[10px]">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 图片上传入口（次要） */}
            <button className="w-full py-3 rounded-2xl bg-white border border-[#1a1210]/10 flex items-center justify-center gap-2 text-xs">
              <Camera size={14} />
              或上传商品截图
            </button>
            <div className="h-2"></div>
          </div>
        ) : (
          // 解析中
          <div className="px-6 py-8 text-center">
            <div className="flex items-center justify-center gap-1.5 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#ff6b35]" style={{animation: 'loading-pulse 1.4s infinite'}}></div>
              <div className="w-2 h-2 rounded-full bg-[#ff6b35]" style={{animation: 'loading-pulse 1.4s infinite 0.2s'}}></div>
              <div className="w-2 h-2 rounded-full bg-[#ff6b35]" style={{animation: 'loading-pulse 1.4s infinite 0.4s'}}></div>
            </div>
            <div className="text-xl mb-2" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>正在解析商品…</div>
            <div className="text-xs text-[#8a7968] leading-relaxed">
              提取品牌、价格、图片<br/>
              查询历史价格走势
            </div>
            <div className="mt-6 space-y-2 text-left">
              {['✓ 识别为淘宝链接', '✓ 提取商品基础信息', '· 查询历史价格'].map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] text-[#8a7968]" style={{animationDelay: `${i * 300}ms`}}>
                  <span className={i < 2 ? 'text-[#1a8c5a] font-bold' : 'text-[#ff6b35]'}>{t.charAt(0)}</span>
                  <span>{t.slice(2)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// 粘贴成功结果
// ============================================================
function PasteResultOverlay({ onClose }) {
  const [note, setNote] = useState('');

  return (
    <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm animate-fadeIn flex items-end" onClick={onClose}>
      <div className="w-full bg-[#faf5ee] rounded-t-3xl max-h-[92%] overflow-y-auto animate-slideUpFull"
        onClick={e => e.stopPropagation()} style={{scrollbarWidth: 'none'}}>
        <div className="sticky top-0 bg-[#faf5ee] pt-2 pb-2 z-10">
          <div className="w-10 h-1 rounded-full bg-[#1a1210]/20 mx-auto"></div>
        </div>

        <div className="px-6 pb-6">
          {/* 成功提示 */}
          <div className="text-center mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a8c5a]/10 text-[#1a8c5a] mb-3">
              <Check size={12} strokeWidth={2.5} />
              <span className="text-[11px] font-medium">已记录到日记</span>
            </div>
            <div className="text-2xl" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>
              多了一条<span className="text-[#ff6b35]">心动</span>记录
            </div>
          </div>

          {/* 商品卡片 */}
          <div className="rounded-2xl bg-white border border-[#1a1210]/5 overflow-hidden mb-4">
            <div className="p-4 flex gap-3">
              <img src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=400&h=500&fit=crop" 
                className="w-24 h-28 rounded-xl object-cover" alt="" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="text-[10px] px-1.5 py-0.5 rounded-md text-white font-medium" style={{background: '#ff4400'}}>淘宝</div>
                </div>
                <div className="text-[10px] text-[#8a7968] tracking-wider uppercase" style={{fontFamily: "'JetBrains Mono', monospace"}}>COS</div>
                <div className="text-sm font-medium leading-tight mt-0.5">Oversized Wool Blazer</div>
                <div className="text-xl font-bold mt-2" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>¥2,499</div>
                <div className="text-[10px] text-[#8a7968] mt-0.5">近 30 天最低 ¥2,380</div>
              </div>
            </div>
          </div>

          {/* 状态切换 */}
          <div className="rounded-2xl bg-white p-4 border border-[#1a1210]/5 mb-4">
            <div className="text-[10px] tracking-widest uppercase text-[#8a7968] mb-2" style={{fontFamily: "'JetBrains Mono', monospace"}}>— 归档到</div>
            <div className="flex gap-2">
              <button className="flex-1 py-2.5 rounded-xl bg-[#1a1210] text-white text-xs font-medium flex items-center justify-center gap-1.5">
                <Heart size={13} /> 想买
              </button>
              <button className="flex-1 py-2.5 rounded-xl bg-white border border-[#1a1210]/10 text-xs flex items-center justify-center gap-1.5">
                <Check size={13} /> 已买
              </button>
            </div>
          </div>

          {/* 备注 */}
          <div className="rounded-2xl bg-white p-4 border border-[#1a1210]/5 mb-4">
            <div className="text-[10px] tracking-widest uppercase text-[#8a7968] mb-2" style={{fontFamily: "'JetBrains Mono', monospace"}}>— 写点心情（选填）</div>
            <textarea 
              value={note}
              onChange={e => setNote(e.target.value)}
              placeholder="和谁、为了什么、搭配什么…"
              className="w-full text-sm bg-transparent border-0 focus:outline-none resize-none leading-relaxed"
              style={{fontFamily: "'Noto Serif SC', serif"}}
              rows={3} />
            <div className="text-[10px] text-[#8a7968] text-right">{note.length}/140</div>
          </div>

          {/* 价格监控开关 */}
          <div className="rounded-2xl bg-white p-4 border border-[#1a1210]/5 mb-4 flex items-center justify-between">
            <div>
              <div className="text-xs font-medium">价格监控</div>
              <div className="text-[10px] text-[#8a7968] mt-0.5">每周自动刷新 · 降价通知你</div>
            </div>
            <div className="w-11 h-6 rounded-full bg-[#ff6b35] relative">
              <div className="absolute top-0.5 right-0.5 w-5 h-5 rounded-full bg-white shadow-sm"></div>
            </div>
          </div>

          {/* 保存 */}
          <button onClick={onClose}
            className="w-full py-3.5 rounded-2xl bg-[#ff6b35] text-white text-sm font-medium">
            完成
          </button>
          <div className="h-2"></div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// 单条日记详情
// ============================================================
function DiaryEntryDetail({ entry, onClose }) {
  return (
    <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm animate-fadeIn" onClick={onClose}>
      <div className="absolute inset-x-0 bottom-0 bg-[#faf5ee] rounded-t-3xl max-h-[92%] overflow-y-auto animate-slideUpFull"
        onClick={e => e.stopPropagation()} style={{scrollbarWidth: 'none'}}>
        <div className="sticky top-0 bg-[#faf5ee] pt-2 pb-2 z-10">
          <div className="w-10 h-1 rounded-full bg-[#1a1210]/20 mx-auto"></div>
          <div className="flex items-center justify-between px-6 pt-1">
            <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center"><X size={16} /></button>
            <MoreHorizontal size={18} />
          </div>
        </div>

        {/* 状态顶部条 */}
        <div className="px-6 mb-3">
          <div className="flex items-center gap-2">
            <div className="text-[10px] px-2 py-1 rounded-md text-white font-medium" style={{background: entry.platformColor}}>
              {entry.platform}
            </div>
            <span className="text-[10px] text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>{entry.addedAt}</span>
            <div className="flex-1"></div>
            {entry.status === 'bought' ? (
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#1a8c5a]/10 text-[#1a8c5a] text-[10px] font-medium">
                <Check size={10} strokeWidth={3} /> 已买
              </div>
            ) : (
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] text-[10px] font-medium">
                <Heart size={10} /> 想买
              </div>
            )}
          </div>
        </div>

        {/* 大图 */}
        <div className="px-6 mb-4">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden">
            <img src={entry.image} className="w-full h-full object-cover" alt="" />
          </div>
        </div>

        {/* 基础信息 */}
        <div className="px-6 mb-4">
          <div className="text-[10px] text-[#8a7968] tracking-widest uppercase" style={{fontFamily: "'JetBrains Mono', monospace"}}>{entry.brand}</div>
          <div className="text-xl leading-tight mt-0.5 mb-3" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>{entry.name}</div>
          
          {/* 价格大显示 */}
          <div className="rounded-3xl bg-[#1a1210] p-5 relative overflow-hidden">
            {entry.alert && (
              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full"
                style={{background: 'radial-gradient(circle, rgba(255,107,53,0.4), transparent 70%)'}}></div>
            )}
            <div className="relative text-white">
              <div className="text-[10px] opacity-70 tracking-widest uppercase" style={{fontFamily: "'JetBrains Mono', monospace"}}>当前价</div>
              <div className="flex items-baseline gap-2 mt-1">
                <div className="text-4xl font-bold leading-none" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>
                  {formatPrice(entry.currentPrice)}
                </div>
                {entry.status === 'want' && entry.alert && (
                  <div className="px-2 py-0.5 rounded-full bg-[#ff6b35] text-[10px] font-bold flex items-center gap-0.5">
                    <TrendingDown size={9} /> ↓¥{entry.dropAmount}
                  </div>
                )}
              </div>
              <div className="flex gap-4 mt-3 text-[11px]">
                <div>
                  <div className="opacity-60 text-[9px] uppercase tracking-widest" style={{fontFamily: "'JetBrains Mono', monospace"}}>记录时</div>
                  <div className="mt-0.5">{formatPrice(entry.addedPrice)}</div>
                </div>
                <div>
                  <div className="opacity-60 text-[9px] uppercase tracking-widest" style={{fontFamily: "'JetBrains Mono', monospace"}}>历史最低</div>
                  <div className="mt-0.5 text-[#ff6b35]">{formatPrice(entry.lowestPrice)}</div>
                </div>
                {entry.status === 'bought' && entry.paidPrice && (
                  <div>
                    <div className="opacity-60 text-[9px] uppercase tracking-widest" style={{fontFamily: "'JetBrains Mono', monospace"}}>实付</div>
                    <div className="mt-0.5 text-[#ff6b35]">{formatPrice(entry.paidPrice)}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 价格走势 */}
        {entry.priceHistory && (
          <div className="px-6 mb-4">
            <div className="rounded-2xl bg-white p-4 border border-[#1a1210]/5">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10px] tracking-widest uppercase text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>— 6 周价格走势</div>
                <button className="text-[10px] text-[#ff6b35] flex items-center gap-0.5">
                  <RefreshCw size={10} /> 手动刷新
                </button>
              </div>
              <div className="h-24 flex items-end gap-2">
                {entry.priceHistory.map((v, i, arr) => {
                  const max = Math.max(...arr);
                  const min = Math.min(...arr);
                  const h = max === min ? 50 : ((v - min) / (max - min)) * 85 + 15;
                  const isLast = i === arr.length - 1;
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div className={`text-[8px] ${isLast ? 'text-[#ff6b35] font-bold' : 'text-[#8a7968]'}`} style={{fontFamily: "'JetBrains Mono', monospace"}}>
                        {v >= 1000 ? (v/1000).toFixed(1) + 'k' : v}
                      </div>
                      <div className={`w-full rounded-t ${isLast && entry.alert ? 'bg-[#ff6b35]' : isLast ? 'bg-[#1a1210]' : 'bg-[#1a1210]/15'}`}
                        style={{height: `${h}%`}}></div>
                      <div className="text-[8px] text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>W{i+1}</div>
                    </div>
                  );
                })}
              </div>
              <div className="text-[10px] text-[#8a7968] mt-3 text-center">每周一自动更新</div>
            </div>
          </div>
        )}

        {/* 日记备注 */}
        <div className="px-6 mb-4">
          <div className="rounded-2xl bg-white p-4 border border-[#1a1210]/5">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10px] tracking-widest uppercase text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>— 我的心情</div>
              <Edit3 size={12} className="text-[#8a7968]" />
            </div>
            {entry.userNote ? (
              <div className="text-sm leading-relaxed italic text-[#1a1210]/80" style={{fontFamily: "'Instrument Serif', serif"}}>
                「{entry.userNote}」
              </div>
            ) : (
              <div className="text-xs text-[#8a7968] leading-relaxed">
                点右上角添加备注，记录当时的心情和想法…
              </div>
            )}
          </div>
        </div>

        {/* 操作 */}
        <div className="px-6 mb-2 grid grid-cols-2 gap-2">
          {entry.status === 'want' ? (
            <>
              <button className="py-3 rounded-2xl bg-white border border-[#1a1210]/10 text-xs font-medium flex items-center justify-center gap-1.5">
                <Check size={13} /> 已经买了
              </button>
              <button className="py-3 rounded-2xl bg-[#ff6b35] text-white text-xs font-medium flex items-center justify-center gap-1.5">
                去买 <ArrowUpRight size={13} />
              </button>
            </>
          ) : (
            <>
              <button className="py-3 rounded-2xl bg-white border border-[#1a1210]/10 text-xs font-medium flex items-center justify-center gap-1.5">
                <Repeat size={13} /> 再买一次
              </button>
              <button className="py-3 rounded-2xl bg-[#1a1210] text-white text-xs font-medium flex items-center justify-center gap-1.5">
                <Share2 size={13} /> 分享
              </button>
            </>
          )}
        </div>

        {/* 删除 */}
        <div className="px-6 mb-2">
          <button className="w-full py-2.5 rounded-2xl text-[#c4472b] text-xs flex items-center justify-center gap-1 opacity-70">
            <Trash2 size={12} /> 删除这条记录
          </button>
        </div>
        <div className="h-4"></div>
      </div>
    </div>
  );
}

// ============================================================
// 统计页（简单版）
// ============================================================
function StatsScreen() {
  const wantCount = diary.filter(d => d.status === 'want').length;
  const boughtCount = diary.filter(d => d.status === 'bought').length;
  const totalSpent = diary.filter(d => d.status === 'bought').reduce((s, d) => s + (d.paidPrice || d.currentPrice), 0);
  const totalWanting = diary.filter(d => d.status === 'want').reduce((s, d) => s + d.currentPrice, 0);
  const savedAmount = diary.filter(d => d.status === 'bought' && d.addedPrice > (d.paidPrice || 0))
    .reduce((s, d) => s + (d.addedPrice - (d.paidPrice || d.currentPrice)), 0);

  return (
    <div className="text-[#1a1210]">
      <div className="px-6 pt-1 pb-3">
        <div className="text-[10px] tracking-[0.25em] uppercase text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>— THIS MONTH</div>
        <div className="text-[32px] leading-tight" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>Stats<span className="text-[#ff6b35]">.</span></div>
      </div>

      {/* 核心数字 */}
      <div className="px-6 mb-4">
        <div className="rounded-3xl bg-[#1a1210] p-5 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full"
            style={{background: 'radial-gradient(circle, rgba(255,107,53,0.3), transparent 70%)'}}></div>
          <div className="relative text-white">
            <div className="text-[10px] tracking-widest uppercase text-[#ff6b35] mb-2" style={{fontFamily: "'JetBrains Mono', monospace"}}>— 本月总支出</div>
            <div className="text-5xl leading-none" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>
              ¥{totalSpent.toLocaleString()}
            </div>
            <div className="mt-3 text-[11px] text-white/60">
              已购买 {boughtCount} 件 · 平均每件 ¥{Math.round(totalSpent/boughtCount).toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* 细分卡片 */}
      <div className="px-6 mb-4 grid grid-cols-2 gap-2">
        <div className="rounded-2xl bg-white p-4 border border-[#1a1210]/5">
          <Heart size={14} className="text-[#ff6b35] mb-2" />
          <div className="text-[10px] tracking-widest uppercase text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>想买中</div>
          <div className="text-2xl font-bold leading-none mt-1" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>
            {wantCount}<span className="text-sm text-[#8a7968] ml-1">件</span>
          </div>
          <div className="text-[10px] text-[#8a7968] mt-1">合计 ¥{(totalWanting/1000).toFixed(1)}k</div>
        </div>
        <div className="rounded-2xl bg-white p-4 border border-[#1a1210]/5">
          <TrendingDown size={14} className="text-[#1a8c5a] mb-2" />
          <div className="text-[10px] tracking-widest uppercase text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>等降价省了</div>
          <div className="text-2xl font-bold leading-none mt-1" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif", color: '#1a8c5a'}}>
            ¥{savedAmount}
          </div>
          <div className="text-[10px] text-[#8a7968] mt-1">晚买一晚的奖励</div>
        </div>
      </div>

      {/* 品类分布 */}
      <div className="px-6 mb-4">
        <div className="text-[10px] tracking-widest uppercase text-[#8a7968] mb-2" style={{fontFamily: "'JetBrains Mono', monospace"}}>— 本月品类</div>
        <div className="rounded-2xl bg-white p-4 border border-[#1a1210]/5 space-y-3">
          {[
            { name: '外套', count: 3, pct: 37 },
            { name: '鞋履', count: 2, pct: 25 },
            { name: '上衣', count: 2, pct: 25 },
            { name: '配饰', count: 2, pct: 13 },
          ].map(c => (
            <div key={c.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px]">{c.name}</span>
                <span className="text-[10px] text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>{c.count} 件 · {c.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-[#1a1210]/5 overflow-hidden">
                <div className="h-full rounded-full bg-[#ff6b35]" style={{width: `${c.pct}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 平台分布 */}
      <div className="px-6 mb-4">
        <div className="text-[10px] tracking-widest uppercase text-[#8a7968] mb-2" style={{fontFamily: "'JetBrains Mono', monospace"}}>— 记录来源</div>
        <div className="grid grid-cols-4 gap-2">
          {[
            { name: '淘宝', count: 2, color: '#ff4400' },
            { name: '天猫', count: 3, color: '#ff0036' },
            { name: '京东', count: 1, color: '#e2231a' },
            { name: '小红书', count: 2, color: '#ff2442' },
          ].map(p => (
            <div key={p.name} className="rounded-2xl bg-white p-3 border border-[#1a1210]/5 text-center">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-1.5" style={{background: p.color}}>
                <ShoppingBag size={13} className="text-white" />
              </div>
              <div className="text-[10px] font-medium">{p.name}</div>
              <div className="text-[10px] text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>{p.count}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-4"></div>
    </div>
  );
}

// ============================================================
// 我的页
// ============================================================
function ProfileScreen() {
  return (
    <div className="text-[#1a1210]">
      <div className="px-6 pt-1 pb-3">
        <div className="text-[10px] tracking-[0.25em] uppercase text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>— YOUR ACCOUNT</div>
        <div className="text-[32px] leading-tight" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>Me<span className="text-[#ff6b35]">.</span></div>
      </div>

      {/* 头像卡 */}
      <div className="px-6 mb-4">
        <div className="rounded-3xl bg-gradient-to-br from-[#1a1210] to-[#3a2d26] p-5 text-white">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#ff6b35]">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop" className="w-full h-full object-cover" alt="" />
            </div>
            <div>
              <div className="text-xl" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>Sophia</div>
              <div className="text-[11px] text-white/60 mt-0.5">加入 47 天 · 记录 {diary.length} 条</div>
            </div>
          </div>
        </div>
      </div>

      {/* 功能列表 */}
      <div className="px-6 space-y-2">
        {[
          { icon: Bell, label: '通知设置', desc: '降价提醒频率' },
          { icon: Calendar, label: '价格刷新', desc: '每周一自动更新' },
          { icon: RefreshCw, label: '手动刷新全部', desc: '立刻检查所有记录' },
          { icon: Tag, label: '品类标签', desc: '自定义分类' },
          { icon: Share2, label: '分享日记', desc: '生成我的购物年报' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#1a1210]/5">
            <div className="w-9 h-9 rounded-xl bg-[#faf5ee] flex items-center justify-center flex-shrink-0">
              <item.icon size={15} className="text-[#1a1210]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium">{item.label}</div>
              <div className="text-[10px] text-[#8a7968] mt-0.5">{item.desc}</div>
            </div>
            <ChevronRight size={14} className="text-[#8a7968]" />
          </div>
        ))}
      </div>

      <div className="h-4"></div>
    </div>
  );
}
