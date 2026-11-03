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

        <div className="download-card">
          <div>
            <p className="resource-label">COURSE MATERIAL</p>
            <h2>课程 PPT</h2>
            <p>包含课程各章节课件，第四章已更新为公式显示修复版。下载后解压即可查看。</p>
          </div>
          <a href="optimization-course-ppt.zip?v=20261103" download>
            下载课程 PPT
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="wrap">浪潮人工智能学院 · 2026</div>
      </footer>
    </main>
  );
}
