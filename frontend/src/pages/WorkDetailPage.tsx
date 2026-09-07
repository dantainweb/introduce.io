import { useParams, Link } from 'react-router-dom'

interface WorkDetail {
  title: string
  description: string
  content: string
  tags: string[]
  features: string[]
}

const workDetails: Record<string, WorkDetail> = {
  'work-1': {
    title: '作品一',
    description: '使用 Spring Boot + React 建構的全端 Web 應用程式',
    content:
      '此專案採用前後端分離的 Monorepo 架構，後端使用 Spring Boot 4 提供 RESTful API，前端使用 React + Vite + TypeScript 打造現代化使用者介面。透過 Vite proxy 實現無 CORS 的開發體驗。',
    tags: ['Spring Boot', 'React', 'REST API'],
    features: ['RESTful API 設計', 'JPA 資料庫操作', 'Vite Proxy 開發', '統一錯誤處理'],
  },
  'work-2': {
    title: '作品二',
    description: '基於 TypeScript 的資料視覺化儀表板',
    content:
      '即時資料視覺化儀表板，整合 D3.js 圖表引擎與 WebSocket 即時數據推送。支援多種圖表類型的切換，並提供互動式的資料篩選功能。',
    tags: ['TypeScript', 'D3.js', 'WebSocket'],
    features: ['即時數據推送', '互動式圖表', '資料篩選與匯出', '響應式設計'],
  },
  'work-3': {
    title: '作品三',
    description: '行動裝置優先的響應式電商平台',
    content:
      '完整的電商解決方案，從商品展示、購物車管理到結帳付款一應俱全。採用行動裝置優先的設計策略，確保在各種螢幕尺寸下都有良好的使用體驗。',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    features: ['商品管理系統', '購物車功能', '訂單管理', '響應式 UI'],
  },
}

export default function WorkDetailPage() {
  const { id } = useParams<{ id: string }>()
  const work = id ? workDetails[id] : null

  if (!work) {
    return (
      <div className="page">
        <h1>找不到作品</h1>
        <p className="subtitle">此作品不存在</p>
        <Link to="/works" className="back-link">← 返回作品集</Link>
      </div>
    )
  }

  return (
    <div className="page">
      <Link to="/works" className="back-link">← 返回作品集</Link>

      <h1>{work.title}</h1>
      <p className="subtitle">{work.description}</p>

      <section className="card">
        <h2>專案介紹</h2>
        <p className="work-content">{work.content}</p>
      </section>

      <section className="card">
        <h2>主要功能</h2>
        <ul className="feature-list">
          {work.features.map((f) => (
            <li key={f}>
              <span className="feature-icon">✦</span>
              {f}
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>技術標籤</h2>
        <div className="about-tags">
          {work.tags.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
      </section>
    </div>
  )
}
