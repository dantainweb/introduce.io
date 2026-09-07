import { Link } from 'react-router-dom'

interface WorkItem {
  id: string
  title: string
  description: string
  tags: string[]
}

const works: WorkItem[] = [
  {
    id: 'work-1',
    title: '作品一',
    description: '使用 Spring Boot + React 建構的全端 Web 應用程式，實現前後端分離的 RESTful 架構。',
    tags: ['Spring Boot', 'React', 'REST API'],
  },
  {
    id: 'work-2',
    title: '作品二',
    description: '基於 TypeScript 的資料視覺化儀表板，整合即時數據更新和互動式圖表。',
    tags: ['TypeScript', 'D3.js', 'WebSocket'],
  },
  {
    id: 'work-3',
    title: '作品三',
    description: '行動裝置優先的響應式電商平台，支援商品管理、購物車和結帳流程。',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
]

export default function WorksPage() {
  return (
    <div className="page">
      <h1>作品集</h1>
      <p className="subtitle">Portfolio</p>

      <div className="works-grid">
        {works.map((work) => (
          <Link to={`/works/${work.id}`} key={work.id} className="work-card card">
            <div className="work-card-header">
              <span className="work-icon">📁</span>
              <h2>{work.title}</h2>
            </div>
            <p className="work-description">{work.description}</p>
            <div className="about-tags">
              {work.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
            <span className="work-link">查看詳情 →</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
