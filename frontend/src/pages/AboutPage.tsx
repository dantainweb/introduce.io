export default function AboutPage() {
  return (
    <div className="page">
      <h1>自我簡介</h1>
      <p className="subtitle">About Me</p>

      <section className="card about-card">
        <div className="about-avatar">
          <div className="avatar-placeholder">D</div>
        </div>
        <div className="about-info">
          <h2>Dantain</h2>
          <p className="about-role">Full-Stack Developer</p>
          <p className="about-bio">
            熱愛技術、持續學習的全端開發者。擅長使用 Spring Boot 建構後端服務，
            以及 React 打造現代化前端介面。追求乾淨的程式碼和優秀的使用者體驗。
          </p>
          <div className="about-tags">
            <span className="tag">Spring Boot</span>
            <span className="tag">React</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Java</span>
            <span className="tag">PostgreSQL</span>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>聯絡資訊</h2>
        <ul className="contact-list">
          <li>
            <span className="contact-label">Email</span>
            <span>d5361920@gmail.com</span>
          </li>
          <li>
            <span className="contact-label">GitHub</span>
            <a href="https://github.com/dantainweb" target="_blank" rel="noopener noreferrer">
              github.com/dantainweb
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
