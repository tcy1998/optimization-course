export default function Home() {
  return (
    <main>
      <header>
        <div className="wrap header-inner">
          <span className="course-name">优化理论与方法</span>
          <span className="term">2026 秋季学期</span>
        </div>
      </header>

      <section className="wrap hero">
        <p className="eyebrow">OPTIMIZATION THEORY AND METHODS</p>
        <h1>优化理论与方法</h1>
        <p className="summary">
          本课程介绍优化问题的建模、最优性理论与数值求解方法，
          并结合人工智能、机器人与控制中的实际问题进行讲解。
        </p>

        <div className="course-meta">
          <span>浪潮人工智能学院</span>
          <span>2 学分 · 32 学时</span>
          <span>专业选修课</span>
        </div>

        <section className="download-card" aria-labelledby="materials-title">
          <div>
            <p className="resource-label">COURSE MATERIAL</p>
            <h2 id="materials-title">课程 PPT</h2>
          </div>
          <ul className="chapter-list">
            <li>
              <span>第四章</span>
              <a href="chapter-04.pptx" download="第四章.pptx">下载 PPT</a>
            </li>
            <li>
              <span>第五章</span>
              <span className="pending">待上传</span>
            </li>
            <li>
              <span>第六章</span>
              <span className="pending">待上传</span>
            </li>
          </ul>
        </section>
      </section>

      <footer>
        <div className="wrap">浪潮人工智能学院 · 2026</div>
      </footer>
    </main>
  );
}
