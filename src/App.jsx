import React, { useState, useEffect } from 'react';
import {
  Home, Shirt, ScanLine, Bookmark, Camera, Link2, Upload,
  Search, Bell, Heart, ShoppingBag, TrendingDown, TrendingUp,
  ArrowUpRight, ArrowDownRight, Filter, Plus, Minus, X, Check,
  ChevronRight, ChevronLeft, ArrowLeft, Star, Smile, Frown, Meh,
  AlertTriangle, Shield, Brain, Sparkles, Crown, RefreshCw,
  Clock, Calendar, Tag, Eye, MoreHorizontal, Edit3, Trash2,
  Package, BarChart3, Zap, Image as ImageIcon, MapPin, CloudUpload
} from 'lucide-react';

// ============================================================
// Mock 数据
// ============================================================
const myCloset = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop',
    brand: 'COS',
    name: '米色羊毛大衣',
    price: 2899,
    category: '外套',
    color: '#d4c4a8',
    colorName: '米色',
    platform: '天猫',
    purchaseDate: '2024-10',
    wearCount: 3,
    lastWorn: '2024-11-20',
    mood: 4
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&h=800&fit=crop',
    brand: 'Max Mara',
    name: '驼色双排扣外套',
    price: 14800,
    category: '外套',
    color: '#b08968',
    colorName: '驼色',
    platform: '品牌官网',
    purchaseDate: '2023-12',
    wearCount: 12,
    lastWorn: '2025-01-08',
    mood: 5
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop',
    brand: 'Lemaire',
    name: '真丝衬衫',
    price: 4200,
    category: '上衣',
    color: '#f5e6d3',
    colorName: '奶油色',
    platform: '品牌官网',
    purchaseDate: '2024-06',
    wearCount: 18,
    lastWorn: '2025-01-12',
    mood: 5
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop',
    brand: 'UNIQLO U',
    name: '美丽诺羊毛毛衣',
    price: 399,
    category: '上衣',
    color: '#8b7355',
    colorName: '棕色',
    platform: '淘宝',
    purchaseDate: '2024-10',
    wearCount: 22,
    lastWorn: '2025-01-15',
    mood: 5
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop',
    brand: 'Toteme',
    name: '直筒牛仔裤',
    price: 3200,
    category: '裤装',
    color: '#5a7a9a',
    colorName: '原色丹宁',
    platform: '官网海淘',
    purchaseDate: '2024-08',
    wearCount: 28,
    lastWorn: '2025-01-14',
    mood: 4
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
    brand: 'Veja',
    name: 'Campo 白色运动鞋',
    price: 1180,
    category: '鞋履',
    color: '#f8f8f8',
    colorName: '白色',
    platform: '天猫',
    purchaseDate: '2024-05',
    wearCount: 45,
    lastWorn: '2025-01-16',
    mood: 5
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop',
    brand: 'Polene',
    name: 'Numéro Un 手袋',
    price: 4200,
    category: '配饰',
    color: '#2c2420',
    colorName: '黑色',
    platform: '品牌官网',
    purchaseDate: '2024-03',
    wearCount: 67,
    lastWorn: '2025-01-15',
    mood: 5
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop',
    brand: 'Maje',
    name: '小香风外套',
    price: 4890,
    category: '外套',
    color: '#1a1210',
    colorName: '黑白',
    platform: '天猫',
    purchaseDate: '2024-11',
    wearCount: 2,
    lastWorn: '2024-12-05',
    mood: 3
  }
];

const bookmarks = [
  {
    id: 101,
    image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&h=800&fit=crop',
    brand: 'COS',
    name: 'Oversized Wool Blazer',
    category: '外套',
    colorName: '驼色',
    originalPrice: 2899,
    currentPrice: 2499,
    platforms: {
      '天猫': 2499,
      '淘宝': 2380,
      '京东': 2460,
      '抖音': 2520
    },
    lowestPlatform: '淘宝',
    priceHistory: [2899, 2899, 2699, 2699, 2499, 2499],
    addedAt: '3 天前',
    lastChecked: '2 小时前',
    alert: true,
    dropAmount: 400
  },
  {
    id: 102,
    image: 'https://images.unsplash.com/photo-1608234807905-4466023792f5?w=600&h=800&fit=crop',
    brand: 'Maison Margiela',
    name: 'Tabi Leather Boots',
    category: '鞋履',
    colorName: '黑色',
    originalPrice: 9800,
    currentPrice: 9800,
    platforms: {
      '天猫': 9800,
      '淘宝': 9500,
      '京东': 9900,
      '抖音': 10200
    },
    lowestPlatform: '淘宝',
    priceHistory: [9800, 9800, 9800, 9800, 9800, 9800],
    addedAt: '1 周前',
    lastChecked: '昨天',
    alert: false,
    dropAmount: 0
  },
  {
    id: 103,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=500&fit=crop',
    brand: 'Acne Studios',
    name: 'Fringed Wool Scarf',
    category: '配饰',
    colorName: '粉色',
    originalPrice: 2800,
    currentPrice: 2240,
    platforms: {
      '天猫': 2300,
      '淘宝': 2240,
      '京东': 2350,
      '抖音': 2280
    },
    lowestPlatform: '淘宝',
    priceHistory: [2800, 2800, 2600, 2600, 2400, 2240],
    addedAt: '2 周前',
    lastChecked: '3 天前',
    alert: true,
    dropAmount: 560
  }
];

const categoryFilters = ['全部', '外套', '上衣', '裤装', '鞋履', '配饰'];
const formatPrice = (n) => `¥${n.toLocaleString()}`;

// ============================================================
// 主应用
// ============================================================
export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showUpload, setShowUpload] = useState(false);
  const [showScan, setShowScan] = useState(false);
  const [selectedClosetItem, setSelectedClosetItem] = useState(null);
  const [selectedBookmark, setSelectedBookmark] = useState(null);
  const [scanResult, setScanResult] = useState(null);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-0 lg:p-8"
      style={{
        background: 'radial-gradient(ellipse at top, #2a1a0f 0%, #0d0807 50%, #000 100%)',
        fontFamily: "'Noto Serif SC', serif"
      }}>
      
      {/* 桌面端装饰 */}
      <div className="hidden lg:block fixed left-12 top-12 text-white/40 max-w-xs">
        <div className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{fontFamily: "'JetBrains Mono', monospace"}}>CLOSET · iPhone 15 · 393×852</div>
        <div className="text-4xl leading-tight mb-3 text-white/80" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>
          Your digital<br/>wardrobe<br/><span className="text-[#ff6b35]">assistant.</span>
        </div>
        <div className="text-xs leading-relaxed">
          衣柜管理 · 商品识别<br/>
          决策支持 · 价格追踪
        </div>
      </div>

      <div className="hidden lg:block fixed right-12 bottom-12 text-white/30 max-w-xs text-right">
        <div className="text-[10px] tracking-[0.3em] uppercase mb-2" style={{fontFamily: "'JetBrains Mono', monospace"}}>— TOOL MODE</div>
        <div className="text-xs leading-relaxed">
          工具型应用 · 围绕你的衣柜建立决策数据库<br/>
          Try: 识别 → 查看决策 → 收藏追踪
        </div>
      </div>

      {/* iPhone 15 容器 */}
      <div className="relative w-full lg:w-[393px] h-screen lg:h-[852px] lg:rounded-[55px] overflow-hidden lg:shadow-[0_40px_80px_rgba(0,0,0,0.7),0_0_0_11px_#1a1210,0_0_0_12px_#2a1f1a,0_0_0_14px_#3a2d26]"
        style={{background: '#faf5ee'}}>
        
        {/* Dynamic Island */}
        <div className="hidden lg:block absolute top-[11px] left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-[20px] z-50"></div>

        {/* iOS 状态栏 */}
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
          {activeTab === 'home' && <HomeScreen onNav={setActiveTab} onScan={() => setShowScan(true)} onUpload={() => setShowUpload(true)} onSelectBookmark={setSelectedBookmark} onSelectClosetItem={setSelectedClosetItem} />}
          {activeTab === 'closet' && <ClosetScreen onUpload={() => setShowUpload(true)} onSelectItem={setSelectedClosetItem} />}
          {activeTab === 'bookmark' && <BookmarkScreen onSelectItem={setSelectedBookmark} />}
        </div>

        {/* 底部导航 */}
        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} onScan={() => setShowScan(true)} />

        {/* iOS Home Indicator */}
        <div className="hidden lg:block absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[134px] h-[5px] rounded-full bg-[#1a1210] z-[60] pointer-events-none"></div>

        {/* 浮层 */}
        {showUpload && <UploadOverlay onClose={() => setShowUpload(false)} />}
        {showScan && <ScanOverlay onClose={() => setShowScan(false)} onResult={(r) => { setScanResult(r); setShowScan(false); }} />}
        {scanResult && <ScanResultOverlay result={scanResult} onClose={() => setScanResult(null)} />}
        {selectedClosetItem && <ClosetItemDetail item={selectedClosetItem} onClose={() => setSelectedClosetItem(null)} />}
        {selectedBookmark && <BookmarkDetail item={selectedBookmark} onClose={() => setSelectedBookmark(null)} />}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Noto+Serif+SC:wght@400;500;700;900&family=JetBrains+Mono:wght@400;500;700&display=swap');
        ::-webkit-scrollbar { display: none; }
        @keyframes pulse-dot { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes slideUpFull { from { transform: translateY(100%); } to { transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scan-line { 0% { top: 0; } 50% { top: 90%; } 100% { top: 0; } }
        .animate-slideUp { animation: slideUp 0.5s cubic-bezier(0.16,1,0.3,1) backwards; }
        .animate-slideUpFull { animation: slideUpFull 0.4s cubic-bezier(0.16,1,0.3,1); }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .pulse-dot { animation: pulse-dot 1.5s infinite; }
        .scan-line { animation: scan-line 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

// ============================================================
// 底部 Tab Bar
// ============================================================
function TabBar({ activeTab, setActiveTab, onScan }) {
  const tabs = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'closet', label: '衣柜', icon: Shirt },
    { id: 'scan', label: '识别', icon: ScanLine, center: true },
    { id: 'bookmark', label: '收藏', icon: Bookmark },
    { id: 'me', label: '我的', icon: null, isAvatar: true },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 z-40 px-3 pt-2 pb-[26px]"
      style={{
        background: 'linear-gradient(to top, #faf5ee 70%, rgba(250,245,238,0))',
      }}>
      <div className="flex items-end justify-around rounded-2xl bg-[#1a1210] py-2.5 px-2 shadow-[0_8px_24px_rgba(26,18,16,0.3)]">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          if (tab.center) {
            return (
              <button
                key={tab.id}
                onClick={onScan}
                className="relative -mt-7 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#ff6b35] to-[#c4472b] transition-transform active:scale-95"
                  style={{boxShadow: '0 10px 24px rgba(255,107,53,0.5), inset 0 2px 4px rgba(255,255,255,0.2)'}}>
                  <ScanLine size={26} strokeWidth={2.2} className="text-white" />
                </div>
                <span className="text-[10px] mt-1 text-white/90 font-medium">{tab.label}</span>
              </button>
            );
          }
          if (tab.isAvatar) {
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className="flex flex-col items-center flex-1 py-1">
                <div className={`w-6 h-6 rounded-full overflow-hidden border-2 ${isActive ? 'border-[#ff6b35]' : 'border-white/30'}`}>
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&h=60&fit=crop" className="w-full h-full object-cover" alt="" />
                </div>
                <span className={`text-[10px] mt-1 ${isActive ? 'text-[#ff6b35]' : 'text-white/50'}`}>{tab.label}</span>
              </button>
            );
          }
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-col items-center flex-1 py-1 transition-all"
            >
              <Icon size={20} strokeWidth={isActive ? 2.4 : 1.6} className={isActive ? 'text-[#ff6b35]' : 'text-white/50'} />
              <span className={`text-[10px] mt-1 ${isActive ? 'text-[#ff6b35]' : 'text-white/50'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================
// 首页
// ============================================================
function HomeScreen({ onNav, onScan, onUpload, onSelectBookmark, onSelectClosetItem }) {
  const totalValue = myCloset.reduce((s, i) => s + i.price, 0);
  const recentWorn = [...myCloset].sort((a,b) => new Date(b.lastWorn) - new Date(a.lastWorn)).slice(0, 4);
  const hasAlert = bookmarks.filter(b => b.alert).length;

  return (
    <div className="text-[#1a1210]">
      {/* Header */}
      <div className="px-6 pt-2 pb-4 flex items-center justify-between">
        <div>
          <div className="text-[10px] tracking-[0.25em] uppercase text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>MONDAY · APR 17</div>
          <div className="text-[28px] leading-tight mt-1" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>你好，<span className="text-[#ff6b35]">Sophia</span>.</div>
        </div>
        <button className="relative w-11 h-11 rounded-full bg-white/60 flex items-center justify-center border border-[#1a1210]/5">
          <Bell size={18} />
          {hasAlert > 0 && (
            <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#ff6b35] border-2 border-[#faf5ee] flex items-center justify-center">
              <span className="text-[9px] text-white font-bold">{hasAlert}</span>
            </div>
          )}
        </button>
      </div>

      {/* 主 CTA · 帮我看看这件 */}
      <div className="px-6 mb-4">
        <button onClick={onScan}
          className="relative w-full rounded-3xl overflow-hidden text-left p-6 group"
          style={{
            background: 'linear-gradient(135deg, #1a1210 0%, #2a1f1a 60%, #3a2d26 100%)',
          }}>
          {/* 装饰圆 */}
          <div className="absolute -right-10 -top-10 w-52 h-52 rounded-full"
            style={{background: 'radial-gradient(circle, rgba(255,107,53,0.4), transparent 70%)'}}></div>
          <div className="absolute right-4 top-4 w-12 h-12 rounded-full bg-[#ff6b35]/20 backdrop-blur flex items-center justify-center">
            <ScanLine size={20} className="text-[#ff6b35]" />
          </div>
          
          <div className="relative">
            <div className="text-[10px] tracking-[0.25em] uppercase text-[#ff6b35] mb-2" style={{fontFamily: "'JetBrains Mono', monospace"}}>◉ MAIN TOOL</div>
            <div className="text-2xl text-white leading-tight mb-1" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>
              帮我看看<br/><span className="text-[#ff6b35]">这件该不该买</span>
            </div>
            <div className="text-xs text-white/60 leading-relaxed mt-2">
              粘贴链接 · 上传截图 · 拍照<br/>
              基于你的衣柜给出购买建议
            </div>
            <div className="flex gap-1.5 mt-4">
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/10 text-white/90 flex items-center gap-1"><Link2 size={10} /> 链接</span>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/10 text-white/90 flex items-center gap-1"><ImageIcon size={10} /> 图片</span>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/10 text-white/90 flex items-center gap-1"><Camera size={10} /> 拍照</span>
            </div>
          </div>
        </button>
      </div>

      {/* 衣柜概览 + 录入入口 */}
      <div className="px-6 mb-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>— MY CLOSET</div>
            <div className="text-lg mt-0.5" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>我的数字衣柜</div>
          </div>
          <button onClick={() => onNav('closet')} className="text-xs text-[#ff6b35] flex items-center gap-0.5">查看全部 <ChevronRight size={14} /></button>
        </div>

        {/* 统计卡 */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          <StatCard label="单品" value={myCloset.length} unit="件" color="#1a1210" />
          <StatCard label="总价值" value={`¥${(totalValue/1000).toFixed(1)}k`} color="#1a1210" />
          <StatCard label="本月最爱" value={myCloset.sort((a,b)=>b.wearCount-a.wearCount)[0].brand.slice(0,5)} color="#ff6b35" isText />
        </div>

        {/* 最近穿过 */}
        <div className="mb-2">
          <div className="text-[10px] tracking-widest uppercase text-[#8a7968] mb-2" style={{fontFamily: "'JetBrains Mono', monospace"}}>— 最近穿过</div>
          <div className="grid grid-cols-4 gap-2">
            {recentWorn.map((item, i) => (
              <button key={item.id} onClick={() => onSelectClosetItem(item)}
                className="aspect-[3/4] rounded-xl overflow-hidden relative border border-[#1a1210]/5">
                <img src={item.image} className="w-full h-full object-cover" alt="" />
                <div className="absolute bottom-1 left-1 right-1 px-1.5 py-0.5 rounded-md bg-white/90 backdrop-blur text-[8px] text-center truncate"
                  style={{fontFamily: "'JetBrains Mono', monospace"}}>
                  ×{item.wearCount}
                </div>
              </button>
            ))}
          </div>
        </div>

        <button onClick={onUpload}
          className="w-full mt-3 py-3 rounded-2xl bg-white border-2 border-dashed border-[#1a1210]/20 text-[#1a1210] text-xs font-medium flex items-center justify-center gap-1.5 active:scale-98 transition-transform">
          <Plus size={14} /> 录入新单品到衣柜
        </button>
      </div>

      {/* 价格追踪提醒 */}
      {hasAlert > 0 && (
        <div className="px-6 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>— PRICE ALERT</div>
              <div className="text-lg mt-0.5" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>收藏 <span className="text-[#ff6b35]">{hasAlert} 件降价</span></div>
            </div>
            <button onClick={() => onNav('bookmark')} className="text-xs text-[#ff6b35] flex items-center gap-0.5">全部 <ChevronRight size={14} /></button>
          </div>
          <div className="space-y-2">
            {bookmarks.filter(b => b.alert).slice(0, 2).map((b, i) => (
              <button key={b.id} onClick={() => onSelectBookmark(b)}
                className="w-full flex gap-3 rounded-2xl bg-white p-3 border border-[#ff6b35]/30 text-left active:scale-99 transition-transform">
                <img src={b.image} className="w-16 h-20 rounded-lg object-cover flex-shrink-0" alt="" />
                <div className="flex-1 min-w-0 py-0.5">
                  <div className="text-[10px] text-[#8a7968] uppercase tracking-wider" style={{fontFamily: "'JetBrains Mono', monospace"}}>{b.brand}</div>
                  <div className="text-xs font-medium truncate">{b.name}</div>
                  <div className="flex items-baseline gap-1.5 mt-1.5">
                    <span className="text-base font-bold" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>{formatPrice(b.currentPrice)}</span>
                    <span className="text-[10px] text-[#8a7968] line-through" style={{fontFamily: "'JetBrains Mono', monospace"}}>{formatPrice(b.originalPrice)}</span>
                  </div>
                  <div className="inline-flex items-center gap-0.5 mt-1 px-1.5 py-0.5 rounded-full bg-[#ff6b35] text-white text-[9px] font-semibold">
                    <TrendingDown size={9} /> ↓ ¥{b.dropAmount}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="px-6 mb-4">
        <div className="rounded-2xl bg-gradient-to-br from-[#faf5ee] to-[#f0e6d8] p-4 border border-[#1a1210]/5">
          <div className="flex items-center gap-1.5 mb-2">
            <Sparkles size={12} className="text-[#ff6b35]" />
            <span className="text-[10px] tracking-widest uppercase text-[#ff6b35]" style={{fontFamily: "'JetBrains Mono', monospace"}}>— 小贴士</span>
          </div>
          <div className="text-sm leading-tight mb-1.5" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>
            衣柜越全，决策越准。
          </div>
          <div className="text-[11px] text-[#1a1210]/70 leading-relaxed">
            把你买过的衣服都录入进来，下次购物时系统会对比出重复度，告诉你「这件你已经有类似的了」。
          </div>
        </div>
      </div>

      <div className="h-6"></div>
    </div>
  );
}

function StatCard({ label, value, unit, color, isText }) {
  return (
    <div className="rounded-2xl bg-white p-3 border border-[#1a1210]/5">
      <div className="text-[9px] text-[#8a7968] tracking-widest uppercase mb-1" style={{fontFamily: "'JetBrains Mono', monospace"}}>{label}</div>
      <div className="flex items-baseline gap-0.5">
        <div className={`${isText ? 'text-sm' : 'text-2xl'} font-bold leading-tight`} style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif", color}}>
          {value}
        </div>
        {unit && <div className="text-[10px] text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>{unit}</div>}
      </div>
    </div>
  );
}

// ============================================================
// 衣柜页
// ============================================================
function ClosetScreen({ onUpload, onSelectItem }) {
  const [filter, setFilter] = useState('全部');
  const [viewMode, setViewMode] = useState('grid'); // grid | list
  
  const filtered = filter === '全部' ? myCloset : myCloset.filter(i => i.category === filter);
  
  const cats = categoryFilters.map(c => ({
    name: c,
    count: c === '全部' ? myCloset.length : myCloset.filter(i => i.category === c).length
  }));

  return (
    <div className="text-[#1a1210]">
      <div className="px-6 pt-2 pb-3">
        <div className="flex items-baseline justify-between mb-1">
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>CHAPTER · 01</div>
            <div className="text-[32px] leading-tight" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>Closet<span className="text-[#ff6b35]">.</span></div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')} 
              className="w-9 h-9 rounded-full bg-white border border-[#1a1210]/10 flex items-center justify-center">
              {viewMode === 'grid' ? <BarChart3 size={15} /> : <Filter size={15} />}
            </button>
            <button onClick={onUpload}
              className="w-9 h-9 rounded-full bg-[#1a1210] flex items-center justify-center">
              <Plus size={15} className="text-white" />
            </button>
          </div>
        </div>
        <div className="text-xs text-[#8a7968] leading-relaxed">共 {myCloset.length} 件 · 总价值 {formatPrice(myCloset.reduce((s,i)=>s+i.price,0))}</div>
      </div>

      {/* 分类筛选 */}
      <div className="px-6 mb-4 flex gap-2 overflow-x-auto">
        {cats.map(c => (
          <button key={c.name} onClick={() => setFilter(c.name)}
            className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs transition-all flex items-center gap-1 ${
              filter === c.name ? 'bg-[#1a1210] text-white' : 'bg-white text-[#1a1210] border border-[#1a1210]/10'
            }`}>
            {c.name}
            <span className={`text-[9px] ${filter === c.name ? 'text-white/60' : 'text-[#8a7968]'}`} style={{fontFamily: "'JetBrains Mono', monospace"}}>
              {c.count}
            </span>
          </button>
        ))}
      </div>

      {/* 网格 */}
      {viewMode === 'grid' ? (
        <div className="px-6">
          <div className="grid grid-cols-2 gap-3">
            {filtered.map((item, i) => (
              <ClosetCard key={item.id} item={item} delay={i * 40} onClick={() => onSelectItem(item)} />
            ))}
            <button onClick={onUpload}
              className="aspect-[3/4] rounded-2xl bg-white/40 border-2 border-dashed border-[#1a1210]/15 flex flex-col items-center justify-center gap-2 text-[#1a1210]/50 active:scale-98 transition-transform">
              <div className="w-10 h-10 rounded-full bg-[#1a1210]/5 flex items-center justify-center">
                <Plus size={20} />
              </div>
              <span className="text-[11px]">添加单品</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="px-6 space-y-2">
          {filtered.map((item, i) => (
            <ClosetListItem key={item.id} item={item} delay={i * 30} onClick={() => onSelectItem(item)} />
          ))}
        </div>
      )}
      <div className="h-6"></div>
    </div>
  );
}

function ClosetCard({ item, delay, onClick }) {
  const freq = item.wearCount >= 20 ? 'hot' : item.wearCount >= 10 ? 'mid' : 'cold';
  return (
    <button onClick={onClick}
      className="animate-slideUp rounded-2xl overflow-hidden bg-white border border-[#1a1210]/5 text-left active:scale-98 transition-transform"
      style={{animationDelay: `${delay}ms`}}>
      <div className="relative aspect-[3/4] overflow-hidden">
        <img src={item.image} className="w-full h-full object-cover" alt="" />
        <div className="absolute top-2 left-2 w-4 h-4 rounded-full border-2 border-white shadow-sm" style={{background: item.color}}></div>
        {freq === 'hot' && (
          <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full bg-[#ff6b35] text-white text-[9px] font-bold flex items-center gap-0.5">
            <TrendingUp size={8} /> HOT
          </div>
        )}
      </div>
      <div className="p-2.5">
        <div className="text-[10px] text-[#8a7968] tracking-wider uppercase" style={{fontFamily: "'JetBrains Mono', monospace"}}>{item.brand}</div>
        <div className="text-xs mt-0.5 line-clamp-1">{item.name}</div>
        <div className="flex items-center justify-between mt-1.5">
          <div className="text-xs font-bold" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>{formatPrice(item.price)}</div>
          <div className="text-[9px] text-[#8a7968] flex items-center gap-0.5" style={{fontFamily: "'JetBrains Mono', monospace"}}>
            <Eye size={9} /> ×{item.wearCount}
          </div>
        </div>
      </div>
    </button>
  );
}

function ClosetListItem({ item, delay, onClick }) {
  return (
    <button onClick={onClick}
      className="animate-slideUp w-full flex gap-3 rounded-2xl bg-white p-2.5 border border-[#1a1210]/5 text-left active:scale-99 transition-transform"
      style={{animationDelay: `${delay}ms`}}>
      <img src={item.image} className="w-16 h-20 rounded-lg object-cover flex-shrink-0" alt="" />
      <div className="flex-1 min-w-0 py-1">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full border border-[#1a1210]/10" style={{background: item.color}}></div>
          <div className="text-[10px] text-[#8a7968] tracking-wider uppercase" style={{fontFamily: "'JetBrains Mono', monospace"}}>{item.brand}</div>
        </div>
        <div className="text-xs mt-0.5 line-clamp-1">{item.name}</div>
        <div className="flex items-center gap-2 mt-1 text-[10px] text-[#8a7968]">
          <span>{item.category}</span>
          <span>·</span>
          <span>{item.purchaseDate}</span>
          <span>·</span>
          <span className="flex items-center gap-0.5"><Eye size={9} />{item.wearCount}</span>
        </div>
      </div>
      <div className="text-right pr-1">
        <div className="text-sm font-bold" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>{formatPrice(item.price)}</div>
        <div className="text-[9px] text-[#8a7968] mt-0.5">{item.platform}</div>
      </div>
    </button>
  );
}

// ============================================================
// 收藏/价格追踪页
// ============================================================
function BookmarkScreen({ onSelectItem }) {
  const [refreshing, setRefreshing] = useState(false);
  const [filter, setFilter] = useState('全部'); // 全部 | 降价 | 持平
  
  const alertCount = bookmarks.filter(b => b.alert).length;
  
  const filtered = bookmarks.filter(b => 
    filter === '全部' ? true : filter === '降价' ? b.alert : !b.alert
  );

  const doRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  return (
    <div className="text-[#1a1210]">
      <div className="px-6 pt-2 pb-3">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>CHAPTER · 02</div>
            <div className="text-[32px] leading-tight" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>Tracking<span className="text-[#ff6b35]">.</span></div>
          </div>
          <button onClick={doRefresh}
            className="w-9 h-9 rounded-full bg-[#1a1210] flex items-center justify-center active:scale-95 transition-transform">
            <RefreshCw size={14} className={`text-white ${refreshing ? 'animate-spin' : ''}`} />
          </button>
        </div>
        <div className="text-xs text-[#8a7968] mt-1 leading-relaxed">
          {refreshing ? '正在同步全平台价格…' : '每周自动更新 · 也可手动刷新'}
        </div>
      </div>

      {/* 统计横幅 */}
      <div className="px-6 mb-4">
        <div className="rounded-3xl bg-[#1a1210] p-5 relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-44 h-44 rounded-full"
            style={{background: 'radial-gradient(circle, rgba(255,107,53,0.3), transparent 70%)'}}></div>
          <div className="relative text-white">
            <div className="text-[10px] tracking-widest uppercase text-[#ff6b35] mb-2" style={{fontFamily: "'JetBrains Mono', monospace"}}>— 收藏概览</div>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-5xl leading-none" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>
                  {bookmarks.length}
                  <span className="text-xl text-white/50 ml-1">件</span>
                </div>
                <div className="text-[10px] text-white/60 mt-1 uppercase tracking-wider" style={{fontFamily: "'JetBrains Mono', monospace"}}>in watch list</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-white/60 mb-0.5">其中降价</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl text-[#ff6b35]" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>{alertCount}</span>
                  <span className="text-xs text-white/50">件</span>
                </div>
                <div className="text-[10px] text-white/60 mt-0.5" style={{fontFamily: "'JetBrains Mono', monospace"}}>
                  共省 ¥{bookmarks.reduce((s,b) => s + b.dropAmount, 0)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 筛选 */}
      <div className="px-6 mb-3 flex gap-2">
        {['全部', '降价', '持平'].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-xs transition-all ${
              filter === f ? 'bg-[#1a1210] text-white' : 'bg-white text-[#1a1210] border border-[#1a1210]/10'
            }`}>
            {f}
            {f === '降价' && alertCount > 0 && (
              <span className={`ml-1 ${filter === f ? 'text-[#ff6b35]' : 'text-[#ff6b35]'}`} style={{fontFamily: "'JetBrains Mono', monospace"}}>
                {alertCount}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* 列表 */}
      <div className="px-6 space-y-3">
        {filtered.map((b, i) => (
          <BookmarkCard key={b.id} item={b} delay={i * 60} onClick={() => onSelectItem(b)} />
        ))}
      </div>
      <div className="h-6"></div>
    </div>
  );
}

function BookmarkCard({ item, delay, onClick }) {
  const max = Math.max(...item.priceHistory);
  const min = Math.min(...item.priceHistory);
  
  return (
    <button onClick={onClick}
      className="animate-slideUp w-full rounded-2xl bg-white p-3 border border-[#1a1210]/5 text-left active:scale-99 transition-transform block"
      style={{animationDelay: `${delay}ms`}}>
      <div className="flex gap-3">
        <div className="relative">
          <img src={item.image} className="w-20 h-24 rounded-xl object-cover" alt="" />
          {item.alert && (
            <div className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full bg-[#ff6b35] flex items-center gap-0.5 shadow-md">
              <TrendingDown size={9} className="text-white" strokeWidth={2.5} />
              <span className="text-[8px] text-white font-bold">降</span>
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div className="text-[10px] text-[#8a7968] tracking-wider uppercase" style={{fontFamily: "'JetBrains Mono', monospace"}}>{item.brand}</div>
            <div className="text-[9px] text-[#8a7968]">{item.lastChecked}</div>
          </div>
          <div className="text-xs font-medium line-clamp-1 mt-0.5">{item.name}</div>
          <div className="flex items-baseline gap-1.5 mt-1">
            <span className="text-lg font-bold" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>
              {formatPrice(item.currentPrice)}
            </span>
            {item.dropAmount > 0 && (
              <>
                <span className="text-[10px] text-[#8a7968] line-through" style={{fontFamily: "'JetBrains Mono', monospace"}}>
                  {formatPrice(item.originalPrice)}
                </span>
                <span className="text-[10px] text-[#ff6b35] font-semibold">
                  ↓¥{item.dropAmount}
                </span>
              </>
            )}
          </div>
          {/* 迷你走势 */}
          <div className="mt-2 flex items-end gap-0.5 h-5">
            {item.priceHistory.map((v, i) => {
              const h = max === min ? 50 : ((v - min) / (max - min)) * 75 + 25;
              const isLast = i === item.priceHistory.length - 1;
              return (
                <div key={i} className={`flex-1 rounded-[1px] ${isLast && item.alert ? 'bg-[#ff6b35]' : 'bg-[#1a1210]/15'}`}
                  style={{height: `${h}%`}}></div>
              );
            })}
          </div>
          <div className="flex items-center justify-between mt-1.5">
            <span className="text-[10px] text-[#8a7968]">最低 · <span className="text-[#ff6b35] font-semibold">{item.lowestPlatform}</span></span>
            <ChevronRight size={12} className="text-[#8a7968]" />
          </div>
        </div>
      </div>
    </button>
  );
}

// ============================================================
// 录入衣柜浮层
// ============================================================
function UploadOverlay({ onClose }) {
  const [step, setStep] = useState('method'); // method | form
  const [method, setMethod] = useState(null);
  const [showOptional, setShowOptional] = useState(false);
  const [mood, setMood] = useState(4);

  return (
    <div className="absolute inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fadeIn flex items-end" onClick={onClose}>
      <div className="w-full bg-[#faf5ee] rounded-t-3xl max-h-[90%] overflow-y-auto animate-slideUpFull"
        onClick={e => e.stopPropagation()} style={{scrollbarWidth: 'none'}}>
        <div className="sticky top-0 bg-[#faf5ee] pt-2 pb-2 z-10 border-b border-[#1a1210]/5">
          <div className="w-10 h-1 rounded-full bg-[#1a1210]/20 mx-auto mb-2"></div>
          <div className="px-6 flex items-center justify-between">
            <button onClick={step === 'form' ? () => setStep('method') : onClose} className="w-7 h-7 rounded-full flex items-center justify-center">
              {step === 'form' ? <ArrowLeft size={16} /> : <X size={16} />}
            </button>
            <div className="text-xs font-medium" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>
              {step === 'method' ? '录入单品到衣柜' : '填写单品信息'}
            </div>
            <div className="w-7"></div>
          </div>
        </div>

        {step === 'method' ? (
          <div className="px-6 py-5">
            <div className="text-[10px] tracking-widest uppercase text-[#ff6b35] mb-3" style={{fontFamily: "'JetBrains Mono', monospace"}}>— 选择录入方式</div>
            <div className="space-y-3">
              <MethodCard 
                icon={Camera} 
                title="拍照 / 上传图片"
                desc="AI 识别品牌、款式、颜色，自动填充"
                tag="推荐"
                onClick={() => { setMethod('image'); setStep('form'); }}
              />
              <MethodCard 
                icon={Link2} 
                title="粘贴商品链接"
                desc="支持 淘宝 / 天猫 / 京东 / 抖音商城"
                onClick={() => { setMethod('link'); setStep('form'); }}
              />
              <MethodCard 
                icon={Edit3} 
                title="手动填写"
                desc="直接输入品牌、名称和价格"
                onClick={() => { setMethod('manual'); setStep('form'); }}
              />
            </div>

            <div className="mt-6 rounded-2xl bg-white p-4 border border-[#1a1210]/5">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Sparkles size={12} className="text-[#ff6b35]" />
                <span className="text-[10px] tracking-widest uppercase text-[#ff6b35]" style={{fontFamily: "'JetBrains Mono', monospace"}}>TIP</span>
              </div>
              <div className="text-[11px] text-[#1a1210]/70 leading-relaxed">
                建议你把已经买过的衣服都慢慢录入，衣柜越完整，未来购物时的决策建议就越精准。
              </div>
            </div>
          </div>
        ) : (
          <div className="px-6 py-5">
            {/* 模拟已识别的图片 */}
            <div className="mb-4 flex gap-3">
              <div className="relative w-24 h-32 rounded-2xl overflow-hidden bg-[#1a1210]/5">
                <img src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=400&h=500&fit=crop" 
                  className="w-full h-full object-cover" alt="" />
                <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-full bg-[#ff6b35] text-white text-[9px] flex items-center gap-0.5" style={{fontFamily: "'JetBrains Mono', monospace"}}>
                  <Sparkles size={8} /> AI
                </div>
              </div>
              <div className="flex-1">
                <div className="text-[10px] text-[#ff6b35] tracking-widest uppercase mb-1" style={{fontFamily: "'JetBrains Mono', monospace"}}>AI 已识别</div>
                <div className="text-xs mb-2 leading-relaxed text-[#1a1210]/80">
                  识别到这是一件 <span className="font-semibold">羊毛混纺西装外套</span>，可能是 <span className="font-semibold">COS / Uniqlo U / Arket</span> 品牌。
                </div>
                <button className="text-[10px] text-[#ff6b35] underline">重新识别</button>
              </div>
            </div>

            {/* 必填区 */}
            <div className="text-[10px] tracking-widest uppercase text-[#8a7968] mb-2" style={{fontFamily: "'JetBrains Mono', monospace"}}>— 基础信息（必填）</div>
            <div className="rounded-2xl bg-white p-4 border border-[#1a1210]/5 space-y-3 mb-4">
              <FormRow label="品牌" value="COS" />
              <FormRow label="商品名称" value="Oversized Wool Blazer" />
              <FormRow label="价格" value="¥2,499" type="price" />
              <FormRow label="购买平台" value="天猫" type="select" />
              <FormRow label="品类" value="外套" type="select" />
              <div>
                <div className="text-[10px] text-[#8a7968] tracking-wider uppercase mb-2" style={{fontFamily: "'JetBrains Mono', monospace"}}>颜色</div>
                <div className="flex gap-2">
                  {['#d4c4a8', '#b08968', '#1a1210', '#f5e6d3', '#5a7a9a', '#8b7355'].map((c, i) => (
                    <button key={c} className={`w-8 h-8 rounded-full border-2 ${i === 0 ? 'border-[#ff6b35]' : 'border-[#1a1210]/10'}`}
                      style={{background: c}}></button>
                  ))}
                  <button className="w-8 h-8 rounded-full bg-white border-2 border-dashed border-[#1a1210]/30 flex items-center justify-center">
                    <Plus size={12} className="text-[#1a1210]/50" />
                  </button>
                </div>
              </div>
            </div>

            {/* 选填区折叠 */}
            <button onClick={() => setShowOptional(!showOptional)}
              className="w-full flex items-center justify-between py-3 px-4 rounded-2xl bg-white border border-[#1a1210]/5 mb-3">
              <div className="text-xs font-medium flex items-center gap-1.5">
                <Sparkles size={12} className="text-[#ff6b35]" />
                添加使用记录
                <span className="text-[10px] text-[#8a7968] font-normal">(选填·越详细决策越精准)</span>
              </div>
              <ChevronRight size={14} className={`text-[#8a7968] transition-transform ${showOptional ? 'rotate-90' : ''}`} />
            </button>

            {showOptional && (
              <div className="rounded-2xl bg-white p-4 border border-[#1a1210]/5 space-y-4 mb-4 animate-slideUp">
                {/* 穿着次数 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-[10px] text-[#8a7968] tracking-wider uppercase" style={{fontFamily: "'JetBrains Mono', monospace"}}>穿着次数</div>
                    <div className="text-xs"><span className="font-bold text-lg" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>0</span> 次</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="w-9 h-9 rounded-full bg-[#faf5ee] flex items-center justify-center"><Minus size={14} /></button>
                    <div className="flex-1 h-1.5 rounded-full bg-[#1a1210]/5">
                      <div className="h-full rounded-full bg-[#ff6b35]" style={{width: '0%'}}></div>
                    </div>
                    <button className="w-9 h-9 rounded-full bg-[#1a1210] flex items-center justify-center"><Plus size={14} className="text-white" /></button>
                  </div>
                </div>

                {/* 最后穿着日期 */}
                <FormRow label="最后穿着" value="今天" type="date" />

                {/* 心情评分 */}
                <div>
                  <div className="text-[10px] text-[#8a7968] tracking-wider uppercase mb-2" style={{fontFamily: "'JetBrains Mono', monospace"}}>穿着心情</div>
                  <div className="flex gap-2">
                    {[
                      { val: 1, icon: Frown, label: '凑合' },
                      { val: 2, icon: Meh, label: '一般' },
                      { val: 3, icon: Meh, label: '还行' },
                      { val: 4, icon: Smile, label: '喜欢' },
                      { val: 5, icon: Heart, label: '最爱' },
                    ].map(m => {
                      const I = m.icon;
                      return (
                        <button key={m.val} onClick={() => setMood(m.val)}
                          className={`flex-1 py-2 rounded-xl flex flex-col items-center gap-0.5 transition-all ${
                            mood === m.val ? 'bg-[#ff6b35] text-white' : 'bg-[#faf5ee] text-[#1a1210]/50'
                          }`}>
                          <I size={16} />
                          <span className="text-[9px]">{m.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 季节标签 */}
                <div>
                  <div className="text-[10px] text-[#8a7968] tracking-wider uppercase mb-2" style={{fontFamily: "'JetBrains Mono', monospace"}}>适合季节</div>
                  <div className="flex gap-1.5 flex-wrap">
                    {['春', '夏', '秋', '冬'].map((s, i) => (
                      <button key={s} className={`px-3 py-1.5 rounded-full text-[11px] transition-all ${
                        i === 2 || i === 3 ? 'bg-[#1a1210] text-white' : 'bg-[#faf5ee] text-[#1a1210]'
                      }`}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 保存按钮 */}
            <button onClick={onClose}
              className="w-full py-3.5 rounded-2xl bg-[#ff6b35] text-white text-sm font-medium active:scale-98 transition-transform">
              保存到衣柜
            </button>
            <div className="h-4"></div>
          </div>
        )}
      </div>
    </div>
  );
}

function MethodCard({ icon: Icon, title, desc, tag, onClick }) {
  return (
    <button onClick={onClick}
      className="w-full flex items-center gap-3 p-4 rounded-2xl bg-white border border-[#1a1210]/5 text-left active:scale-98 transition-transform">
      <div className="w-11 h-11 rounded-xl bg-[#1a1210] flex items-center justify-center flex-shrink-0">
        <Icon size={19} className="text-[#ff6b35]" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-semibold">{title}</span>
          {tag && <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#ff6b35] text-white font-semibold">{tag}</span>}
        </div>
        <div className="text-[11px] text-[#8a7968] mt-0.5 leading-relaxed">{desc}</div>
      </div>
      <ChevronRight size={16} className="text-[#8a7968]" />
    </button>
  );
}

function FormRow({ label, value, type = 'text' }) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-[10px] text-[#8a7968] tracking-wider uppercase" style={{fontFamily: "'JetBrains Mono', monospace"}}>{label}</div>
      <div className="flex items-center gap-1">
        <span className={`text-sm ${type === 'price' ? 'font-bold' : ''}`} style={type === 'price' ? {fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"} : {}}>{value}</span>
        {(type === 'select' || type === 'date') && <ChevronRight size={13} className="text-[#8a7968]" />}
      </div>
    </div>
  );
}

// ============================================================
// 识别浮层
// ============================================================
function ScanOverlay({ onClose, onResult }) {
  const [mode, setMode] = useState(null); // image | link | camera
  const [scanning, setScanning] = useState(false);

  const runScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      onResult({ found: true });
    }, 1800);
  };

  return (
    <div className="absolute inset-0 z-50 bg-black/70 backdrop-blur-sm animate-fadeIn" onClick={onClose}>
      <div className="absolute inset-x-0 bottom-0 bg-[#faf5ee] rounded-t-3xl animate-slideUpFull"
        onClick={e => e.stopPropagation()}>
        <div className="pt-2 pb-2">
          <div className="w-10 h-1 rounded-full bg-[#1a1210]/20 mx-auto"></div>
        </div>
        
        {scanning ? (
          // 扫描动画状态
          <div className="px-6 py-8">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-4 bg-[#1a1210]">
              <img src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&h=600&fit=crop" 
                className="w-full h-full object-cover opacity-80" alt="" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff6b35]/20 to-transparent scan-line"
                style={{height: '20%'}}></div>
              <div className="absolute inset-4 border-2 border-[#ff6b35] rounded-2xl">
                {[0, 1, 2, 3].map(i => (
                  <div key={i} className="absolute w-4 h-4 border-[#ff6b35]"
                    style={{
                      top: i < 2 ? -2 : 'auto',
                      bottom: i >= 2 ? -2 : 'auto',
                      left: i % 2 === 0 ? -2 : 'auto',
                      right: i % 2 === 1 ? -2 : 'auto',
                      borderTopWidth: i < 2 ? 3 : 0,
                      borderBottomWidth: i >= 2 ? 3 : 0,
                      borderLeftWidth: i % 2 === 0 ? 3 : 0,
                      borderRightWidth: i % 2 === 1 ? 3 : 0,
                    }}></div>
                ))}
              </div>
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1210]/80 backdrop-blur text-white text-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] pulse-dot"></div>
                  AI 识别中…
                </div>
              </div>
            </div>
            <div className="text-center text-xs text-[#8a7968]">正在对比全平台价格，请稍候</div>
          </div>
        ) : !mode ? (
          // 选择识别方式
          <div className="px-6 py-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[10px] tracking-widest uppercase text-[#ff6b35]" style={{fontFamily: "'JetBrains Mono', monospace"}}>— SCAN</div>
                <div className="text-xl mt-0.5" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>帮我看看这件</div>
              </div>
              <button onClick={onClose} className="w-8 h-8 rounded-full bg-[#1a1210]/5 flex items-center justify-center">
                <X size={16} />
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-2.5 mb-4">
              <ScanMethodBox icon={Camera} title="拍照" onClick={() => { setMode('camera'); runScan(); }} />
              <ScanMethodBox icon={ImageIcon} title="相册" highlight onClick={() => { setMode('image'); runScan(); }} />
              <ScanMethodBox icon={Link2} title="链接" onClick={() => setMode('link')} />
            </div>

            {/* 支持平台 */}
            <div className="rounded-2xl bg-white p-3.5 border border-[#1a1210]/5">
              <div className="text-[10px] tracking-widest uppercase text-[#8a7968] mb-2" style={{fontFamily: "'JetBrains Mono', monospace"}}>— 支持平台</div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { name: '淘宝', color: '#ff4400' },
                  { name: '天猫', color: '#ff0036' },
                  { name: '京东', color: '#e2231a' },
                  { name: '抖音', color: '#1a1210' }
                ].map(p => (
                  <div key={p.name} className="flex flex-col items-center gap-1 py-1.5 rounded-lg bg-[#faf5ee]">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{background: p.color}}>
                      <ShoppingBag size={14} className="text-white" />
                    </div>
                    <span className="text-[10px]">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 最近识别过 */}
            <div className="mt-4">
              <div className="text-[10px] tracking-widest uppercase text-[#8a7968] mb-2" style={{fontFamily: "'JetBrains Mono', monospace"}}>— 最近识别</div>
              <div className="flex gap-2 overflow-x-auto">
                {['https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=200&h=200&fit=crop',
                  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&h=200&fit=crop',
                  'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&h=200&fit=crop',
                  'https://images.unsplash.com/photo-1608234807905-4466023792f5?w=200&h=200&fit=crop'
                ].map((src, i) => (
                  <button key={i} onClick={() => runScan()}
                    className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-white border border-[#1a1210]/5">
                    <img src={src} className="w-full h-full object-cover" alt="" />
                  </button>
                ))}
              </div>
            </div>

            <div className="h-6"></div>
          </div>
        ) : mode === 'link' ? (
          // 链接输入
          <div className="px-6 py-4">
            <div className="flex items-center justify-between mb-4">
              <button onClick={() => setMode(null)} className="w-8 h-8 rounded-full flex items-center justify-center">
                <ArrowLeft size={16} />
              </button>
              <div className="text-sm" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>粘贴商品链接</div>
              <div className="w-8"></div>
            </div>
            <div className="rounded-2xl bg-white border-2 border-[#ff6b35] p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Link2 size={14} className="text-[#ff6b35]" />
                <span className="text-[10px] tracking-widest uppercase text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>PASTE URL</span>
              </div>
              <input placeholder="https://item.taobao.com/…" 
                className="w-full text-sm py-1 border-0 focus:outline-none bg-transparent" />
              <div className="flex items-center gap-1 mt-2 pt-2 border-t border-[#1a1210]/5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#07c160] pulse-dot"></div>
                <span className="text-[10px] text-[#8a7968]">已复制链接，点击下方粘贴</span>
              </div>
            </div>
            <button onClick={runScan}
              className="w-full py-3.5 rounded-2xl bg-[#ff6b35] text-white text-sm font-medium">
              解析商品 →
            </button>
            <div className="h-6"></div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function ScanMethodBox({ icon: Icon, title, highlight, onClick }) {
  return (
    <button onClick={onClick}
      className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-1.5 active:scale-95 transition-transform ${
        highlight ? 'bg-[#1a1210] text-white' : 'bg-white border border-[#1a1210]/10'
      }`}>
      <Icon size={22} className={highlight ? 'text-[#ff6b35]' : 'text-[#1a1210]'} />
      <span className="text-xs">{title}</span>
    </button>
  );
}

// ============================================================
// 识别结果 + 决策支持浮层
// ============================================================
function ScanResultOverlay({ result, onClose }) {
  const [tab, setTab] = useState('decision'); // decision | price
  
  // mock 结果
  const recognized = {
    image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&h=800&fit=crop',
    brand: 'COS',
    name: 'Oversized Wool Blazer',
    category: '外套',
    color: '#d4c4a8',
    colorName: '驼色',
    price: 2499,
    confidence: 96,
  };
  
  // 衣柜中相似的
  const similarInCloset = myCloset
    .filter(i => i.category === recognized.category)
    .map(i => ({ ...i, similarity: Math.round(70 + Math.random() * 25) }))
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 3);

  const maxSim = similarInCloset[0]?.similarity || 0;
  const verdict = maxSim >= 75 ? 'pause' : maxSim >= 55 ? 'consider' : 'go';
  
  const platforms = [
    { name: '淘宝', price: 2380, ship: 0, coupon: 0, final: 2380, best: true },
    { name: '天猫', price: 2499, ship: 0, coupon: 200, final: 2299, best: false },
    { name: '京东', price: 2499, ship: 0, coupon: 125, final: 2374, best: false },
    { name: '抖音', price: 2520, ship: 0, coupon: 50, final: 2470, best: false },
  ];
  const bestPrice = Math.min(...platforms.map(p => p.final));

  return (
    <div className="absolute inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fadeIn flex items-end" onClick={onClose}>
      <div className="w-full bg-[#faf5ee] rounded-t-3xl max-h-[92%] overflow-y-auto animate-slideUpFull"
        onClick={e => e.stopPropagation()} style={{scrollbarWidth: 'none'}}>
        <div className="sticky top-0 bg-[#faf5ee] pt-2 pb-2 z-10">
          <div className="w-10 h-1 rounded-full bg-[#1a1210]/20 mx-auto"></div>
        </div>
        
        {/* 识别结果 */}
        <div className="px-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[10px] tracking-widest uppercase text-[#ff6b35]" style={{fontFamily: "'JetBrains Mono', monospace"}}>RESULT · {recognized.confidence}% MATCH</div>
            <button onClick={onClose} className="w-8 h-8 rounded-full bg-[#1a1210]/5 flex items-center justify-center">
              <X size={16} />
            </button>
          </div>
          
          <div className="flex gap-3 mb-4">
            <img src={recognized.image} className="w-28 h-32 rounded-2xl object-cover" alt="" />
            <div className="flex-1 min-w-0 py-1">
              <div className="text-[10px] text-[#8a7968] tracking-wider uppercase" style={{fontFamily: "'JetBrains Mono', monospace"}}>{recognized.brand}</div>
              <div className="text-base font-medium leading-tight mt-0.5">{recognized.name}</div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full border border-[#1a1210]/10" style={{background: recognized.color}}></div>
                  <span className="text-[10px] text-[#8a7968]">{recognized.colorName}</span>
                </div>
                <span className="text-[10px] text-[#8a7968]">·</span>
                <span className="text-[10px] text-[#8a7968]">{recognized.category}</span>
              </div>
              <div className="text-xl font-bold mt-2" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>
                {formatPrice(recognized.price)}
              </div>
            </div>
          </div>

          {/* Tab 切换 */}
          <div className="flex gap-1 p-1 rounded-full bg-[#1a1210]/5 mb-4">
            <button onClick={() => setTab('decision')}
              className={`flex-1 py-2 rounded-full text-xs transition-all ${
                tab === 'decision' ? 'bg-[#1a1210] text-white' : 'text-[#1a1210]'
              }`}>
              <Brain size={12} className="inline mr-1" /> 决策建议
            </button>
            <button onClick={() => setTab('price')}
              className={`flex-1 py-2 rounded-full text-xs transition-all ${
                tab === 'price' ? 'bg-[#1a1210] text-white' : 'text-[#1a1210]'
              }`}>
              <BarChart3 size={12} className="inline mr-1" /> 全网比价
            </button>
          </div>

          {tab === 'decision' ? (
            <>
              {/* 核心建议 */}
              <div className={`rounded-3xl p-5 mb-4 text-white relative overflow-hidden ${
                verdict === 'pause' ? 'bg-gradient-to-br from-[#c4472b] to-[#ff6b35]' :
                verdict === 'consider' ? 'bg-gradient-to-br from-[#e08a5a] to-[#ff8c42]' :
                'bg-gradient-to-br from-[#1a8c5a] to-[#07c160]'
              }`}>
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/10"></div>
                <div className="relative">
                  <div className="flex items-center gap-1.5 mb-2">
                    {verdict === 'pause' ? <AlertTriangle size={14} /> : verdict === 'consider' ? <Brain size={14} /> : <Check size={14} />}
                    <span className="text-[10px] tracking-widest uppercase" style={{fontFamily: "'JetBrains Mono', monospace"}}>
                      {verdict === 'pause' ? '谨慎购买' : verdict === 'consider' ? '可以考虑' : '建议入手'}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <div className="text-6xl font-bold leading-none" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>{maxSim}</div>
                    <div className="text-2xl" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>%</div>
                    <div className="text-[10px] opacity-80 uppercase tracking-widest ml-1" style={{fontFamily: "'JetBrains Mono', monospace"}}>衣柜重复度</div>
                  </div>
                  <div className="text-sm leading-relaxed opacity-95">
                    {verdict === 'pause' ? 
                      `你的衣柜里已经有 ${similarInCloset.filter(i => i.similarity >= 75).length} 件高度相似的单品，这件可能会重复。` :
                      verdict === 'consider' ?
                      '衣柜中有一些相似但不完全重叠的单品，可以根据搭配潜力判断。' :
                      '衣柜中没有相似单品，可以大胆入手。'
                    }
                  </div>
                </div>
              </div>

              {/* 衣柜中相似的单品 */}
              <div className="mb-4">
                <div className="text-[10px] tracking-widest uppercase text-[#8a7968] mb-2" style={{fontFamily: "'JetBrains Mono', monospace"}}>— 你衣柜里相似的单品</div>
                <div className="space-y-2">
                  {similarInCloset.map((item, i) => (
                    <div key={item.id} className="flex items-center gap-3 p-2.5 rounded-2xl bg-white border border-[#1a1210]/5">
                      <img src={item.image} className="w-14 h-16 rounded-lg object-cover flex-shrink-0" alt="" />
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] text-[#8a7968] uppercase tracking-wider" style={{fontFamily: "'JetBrains Mono', monospace"}}>{item.brand}</div>
                        <div className="text-xs line-clamp-1">{item.name}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex-1 h-1 rounded-full bg-[#1a1210]/5 overflow-hidden">
                            <div className={`h-full rounded-full ${
                              item.similarity >= 75 ? 'bg-[#ff6b35]' : item.similarity >= 55 ? 'bg-[#ff8c42]' : 'bg-[#1a8c5a]'
                            }`} style={{width: `${item.similarity}%`}}></div>
                          </div>
                          <span className="text-[10px] font-bold" style={{fontFamily: "'JetBrains Mono', monospace"}}>{item.similarity}%</span>
                        </div>
                        <div className="text-[10px] text-[#8a7968] mt-0.5">
                          购于 {item.purchaseDate} · 穿过 {item.wearCount} 次
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 辅助维度 */}
              <div className="rounded-2xl bg-white p-4 border border-[#1a1210]/5 space-y-3 mb-4">
                <div className="text-[10px] tracking-widest uppercase text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>— 辅助维度</div>
                <DimBar label="搭配潜力" score={68} desc="可和衣柜中 8 件搭配" />
                <DimBar label="价格合理性" score={82} desc="比 30 天平均低 8%" />
                <DimBar label="预计使用频率" score={45} desc="基于同类单品数据" />
              </div>
            </>
          ) : (
            <>
              {/* 比价表 */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[10px] tracking-widest uppercase text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>— 4 平台价格</div>
                  <div className="text-[10px] text-[#ff6b35] font-semibold">最低 ¥{bestPrice}</div>
                </div>
                <div className="space-y-2">
                  {platforms.map((p, i) => (
                    <div key={i} className={`rounded-2xl p-3 flex items-center gap-3 animate-slideUp ${
                      p.best ? 'bg-[#1a1210] text-white' : 'bg-white border border-[#1a1210]/5'
                    }`} style={{animationDelay: `${i * 50}ms`}}>
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-semibold">{p.name}</span>
                          {p.best && <span className="inline-flex items-center gap-0.5 text-[9px] px-1.5 py-0.5 rounded-full bg-[#ff6b35] text-white">
                            <Crown size={8} /> 最优
                          </span>}
                        </div>
                        <div className={`text-[10px] mt-0.5 ${p.best ? 'text-white/60' : 'text-[#8a7968]'}`}>
                          {p.ship === 0 ? '包邮' : `+¥${p.ship}`}
                          {p.coupon > 0 && ` · 券 -¥${p.coupon}`}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${p.best ? 'text-[#ff6b35]' : ''}`} style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>
                          {formatPrice(p.final)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white p-4 border border-[#1a1210]/5 mb-4">
                <div className="text-[10px] tracking-widest uppercase text-[#8a7968] mb-2" style={{fontFamily: "'JetBrains Mono', monospace"}}>— 30 天价格走势</div>
                <div className="h-20 flex items-end gap-1">
                  {[2899, 2899, 2699, 2699, 2599, 2499, 2499, 2380].map((v, i, arr) => {
                    const max = Math.max(...arr);
                    const min = Math.min(...arr);
                    const h = ((v - min) / (max - min)) * 80 + 20;
                    const isLast = i === arr.length - 1;
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div className={`w-full rounded-t ${isLast ? 'bg-[#ff6b35]' : 'bg-[#1a1210]/15'}`}
                          style={{height: `${h}%`}}></div>
                      </div>
                    );
                  })}
                </div>
                <div className="text-[10px] text-[#8a7968] mt-2 text-center">近 30 天价格 ↓ 17.9%</div>
              </div>
            </>
          )}

          {/* 底部操作 */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            <button onClick={onClose}
              className="py-3 rounded-2xl bg-white border border-[#1a1210]/10 text-[#1a1210] text-xs font-medium">
              <Bookmark size={13} className="inline mr-1" /> 收藏并追踪
            </button>
            <button onClick={onClose}
              className="py-3 rounded-2xl bg-[#ff6b35] text-white text-xs font-medium">
              {verdict === 'pause' ? '我再想想' : '去购买'} →
            </button>
          </div>
          <div className="h-4"></div>
        </div>
      </div>
    </div>
  );
}

function DimBar({ label, score, desc }) {
  const color = score >= 75 ? '#1a8c5a' : score >= 50 ? '#ff8c42' : '#c4472b';
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px]">{label}</span>
        <span className="text-[11px] font-bold" style={{fontFamily: "'JetBrains Mono', monospace", color}}>{score}</span>
      </div>
      <div className="h-1.5 rounded-full bg-[#1a1210]/5 overflow-hidden mb-1">
        <div className="h-full rounded-full" style={{width: `${score}%`, background: color}}></div>
      </div>
      <div className="text-[10px] text-[#8a7968]">{desc}</div>
    </div>
  );
}

// ============================================================
// 衣柜单品详情浮层
// ============================================================
function ClosetItemDetail({ item, onClose }) {
  const costPerWear = Math.round(item.price / Math.max(item.wearCount, 1));
  const moodEmoji = ['', '😐', '😐', '🙂', '😊', '❤️'];
  
  return (
    <div className="absolute inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fadeIn" onClick={onClose}>
      <div className="absolute inset-x-0 bottom-0 bg-[#faf5ee] rounded-t-3xl max-h-[92%] overflow-y-auto animate-slideUpFull"
        onClick={e => e.stopPropagation()} style={{scrollbarWidth: 'none'}}>
        <div className="sticky top-0 bg-[#faf5ee] pt-2 pb-2 z-10">
          <div className="w-10 h-1 rounded-full bg-[#1a1210]/20 mx-auto"></div>
          <div className="flex items-center justify-between px-6 pt-2">
            <button onClick={onClose}><X size={18} /></button>
            <button><MoreHorizontal size={18} /></button>
          </div>
        </div>

        {/* 大图 */}
        <div className="px-6 mb-4">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden">
            <img src={item.image} className="w-full h-full object-cover" alt="" />
          </div>
        </div>

        {/* 基础信息 */}
        <div className="px-6 mb-4">
          <div className="text-[10px] text-[#8a7968] tracking-widest uppercase" style={{fontFamily: "'JetBrains Mono', monospace"}}>{item.brand}</div>
          <div className="text-xl mt-1 mb-2" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>{item.name}</div>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#1a1210]/10">
              <div className="w-3 h-3 rounded-full" style={{background: item.color}}></div>
              <span className="text-[11px]">{item.colorName}</span>
            </div>
            <div className="px-2.5 py-1 rounded-full bg-white border border-[#1a1210]/10 text-[11px]">{item.category}</div>
            <div className="px-2.5 py-1 rounded-full bg-white border border-[#1a1210]/10 text-[11px]">{item.platform}</div>
          </div>
        </div>

        {/* 关键数据 */}
        <div className="px-6 mb-4 grid grid-cols-3 gap-2">
          <div className="rounded-2xl bg-white p-3 border border-[#1a1210]/5">
            <div className="text-[9px] text-[#8a7968] tracking-widest uppercase" style={{fontFamily: "'JetBrains Mono', monospace"}}>购入价</div>
            <div className="text-lg font-bold mt-0.5" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>
              {formatPrice(item.price)}
            </div>
            <div className="text-[9px] text-[#8a7968] mt-0.5">{item.purchaseDate}</div>
          </div>
          <div className="rounded-2xl bg-white p-3 border border-[#1a1210]/5">
            <div className="text-[9px] text-[#8a7968] tracking-widest uppercase" style={{fontFamily: "'JetBrains Mono', monospace"}}>穿着次数</div>
            <div className="text-lg font-bold mt-0.5" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>
              {item.wearCount}<span className="text-sm text-[#8a7968]">次</span>
            </div>
            <div className="text-[9px] text-[#8a7968] mt-0.5">最近 {item.lastWorn}</div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-[#ff6b35] to-[#c4472b] p-3 text-white">
            <div className="text-[9px] opacity-80 tracking-widest uppercase" style={{fontFamily: "'JetBrains Mono', monospace"}}>单次成本</div>
            <div className="text-lg font-bold mt-0.5" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>
              ¥{costPerWear}
            </div>
            <div className="text-[9px] opacity-80 mt-0.5">{costPerWear < 50 ? '已经回本 ✓' : '再穿穿'}</div>
          </div>
        </div>

        {/* 穿着打卡 */}
        <div className="px-6 mb-4">
          <div className="rounded-2xl bg-white p-4 border border-[#1a1210]/5">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-medium">穿着打卡</div>
              <div className="text-[10px] text-[#8a7968]">{moodEmoji[item.mood]} 最爱</div>
            </div>
            <button className="w-full py-2.5 rounded-xl bg-[#ff6b35] text-white text-xs font-medium flex items-center justify-center gap-1.5">
              <Plus size={13} /> 记录今天穿了
            </button>
            <div className="mt-3 grid grid-cols-7 gap-1">
              {Array.from({length: 14}).map((_, i) => {
                const active = [2, 5, 8, 12].includes(i);
                return (
                  <div key={i} className={`aspect-square rounded ${active ? 'bg-[#ff6b35]' : 'bg-[#1a1210]/5'}`}></div>
                );
              })}
            </div>
            <div className="text-[9px] text-[#8a7968] mt-2 text-center">最近 14 天 · 穿过 4 次</div>
          </div>
        </div>

        <div className="px-6 grid grid-cols-2 gap-2 mb-2">
          <button className="py-3 rounded-2xl bg-white border border-[#1a1210]/10 text-[#1a1210] text-xs font-medium flex items-center justify-center gap-1">
            <Edit3 size={12} /> 编辑
          </button>
          <button className="py-3 rounded-2xl bg-white border border-[#c4472b]/20 text-[#c4472b] text-xs font-medium flex items-center justify-center gap-1">
            <Trash2 size={12} /> 移出衣柜
          </button>
        </div>
        <div className="h-4"></div>
      </div>
    </div>
  );
}

// ============================================================
// 收藏单品详情 (价格追踪详情)
// ============================================================
function BookmarkDetail({ item, onClose }) {
  const platforms = Object.entries(item.platforms).map(([name, price]) => ({
    name, price, best: name === item.lowestPlatform
  })).sort((a, b) => a.price - b.price);

  return (
    <div className="absolute inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fadeIn" onClick={onClose}>
      <div className="absolute inset-x-0 bottom-0 bg-[#faf5ee] rounded-t-3xl max-h-[92%] overflow-y-auto animate-slideUpFull"
        onClick={e => e.stopPropagation()} style={{scrollbarWidth: 'none'}}>
        <div className="sticky top-0 bg-[#faf5ee] pt-2 pb-2 z-10">
          <div className="w-10 h-1 rounded-full bg-[#1a1210]/20 mx-auto"></div>
          <div className="flex items-center justify-between px-6 pt-2">
            <button onClick={onClose}><X size={18} /></button>
            <button><RefreshCw size={16} /></button>
          </div>
        </div>

        {/* 商品头 */}
        <div className="px-6 mb-4 flex gap-3">
          <img src={item.image} className="w-28 h-36 rounded-2xl object-cover" alt="" />
          <div className="flex-1 min-w-0 py-1">
            <div className="text-[10px] text-[#8a7968] tracking-wider uppercase" style={{fontFamily: "'JetBrains Mono', monospace"}}>{item.brand}</div>
            <div className="text-base font-medium leading-tight mt-0.5">{item.name}</div>
            <div className="text-[10px] text-[#8a7968] mt-1">{item.category} · {item.colorName}</div>
            <div className="text-[10px] text-[#8a7968] mt-2">收藏于 {item.addedAt}</div>
            <div className="text-[10px] text-[#8a7968]">上次更新 {item.lastChecked}</div>
          </div>
        </div>

        {/* 当前价格突出显示 */}
        <div className="px-6 mb-4">
          <div className={`rounded-3xl p-5 text-white ${
            item.alert ? 'bg-gradient-to-br from-[#ff6b35] to-[#c4472b]' : 'bg-[#1a1210]'
          }`}>
            <div className="text-[10px] opacity-80 tracking-widest uppercase mb-2" style={{fontFamily: "'JetBrains Mono', monospace"}}>
              {item.alert ? '降价提醒' : '当前价格'}
            </div>
            <div className="flex items-baseline gap-3">
              <div className="text-5xl font-bold leading-none" style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>
                {formatPrice(item.currentPrice)}
              </div>
              {item.dropAmount > 0 && (
                <div>
                  <div className="text-[10px] opacity-80 line-through" style={{fontFamily: "'JetBrains Mono', monospace"}}>{formatPrice(item.originalPrice)}</div>
                  <div className="text-sm font-semibold mt-0.5">↓ ¥{item.dropAmount}</div>
                </div>
              )}
            </div>
            <div className="text-[11px] opacity-90 mt-3">
              最低价在 <span className="font-semibold">{item.lowestPlatform}</span>
            </div>
          </div>
        </div>

        {/* 走势图 */}
        <div className="px-6 mb-4">
          <div className="rounded-2xl bg-white p-4 border border-[#1a1210]/5">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[10px] tracking-widest uppercase text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>— 6 周价格走势</div>
              <div className="text-[10px] text-[#8a7968]">每周自动同步</div>
            </div>
            <div className="h-24 flex items-end gap-2">
              {item.priceHistory.map((v, i, arr) => {
                const max = Math.max(...arr);
                const min = Math.min(...arr);
                const h = max === min ? 50 : ((v - min) / (max - min)) * 85 + 15;
                const isLast = i === arr.length - 1;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div className={`w-full rounded-t ${isLast && item.alert ? 'bg-[#ff6b35]' : 'bg-[#1a1210]/15'}`}
                      style={{height: `${h}%`}}></div>
                    <div className="text-[9px] text-[#8a7968]" style={{fontFamily: "'JetBrains Mono', monospace"}}>W{i+1}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 各平台对比 */}
        <div className="px-6 mb-4">
          <div className="text-[10px] tracking-widest uppercase text-[#8a7968] mb-2" style={{fontFamily: "'JetBrains Mono', monospace"}}>— 4 平台实时价格</div>
          <div className="space-y-2">
            {platforms.map((p, i) => (
              <div key={p.name} className={`flex items-center justify-between p-3 rounded-xl ${
                p.best ? 'bg-[#1a1210] text-white' : 'bg-white border border-[#1a1210]/5'
              }`}>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">{p.name}</span>
                  {p.best && <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#ff6b35] text-white flex items-center gap-0.5">
                    <Crown size={8} /> 最低
                  </span>}
                </div>
                <div className={`text-base font-bold ${p.best ? 'text-[#ff6b35]' : ''}`} style={{fontStyle: 'italic', fontFamily: "'Instrument Serif', serif"}}>
                  {formatPrice(p.price)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 grid grid-cols-2 gap-2 mb-2">
          <button className="py-3 rounded-2xl bg-white border border-[#1a1210]/10 text-[#1a1210] text-xs font-medium">
            取消收藏
          </button>
          <button className="py-3 rounded-2xl bg-[#ff6b35] text-white text-xs font-medium">
            去最低价平台 →
          </button>
        </div>
        <div className="h-4"></div>
      </div>
    </div>
  );
}
