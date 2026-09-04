const modules = [
  ["第 1 单元", "数学基础与优化建模", "向量、矩阵、梯度与 Hessian 矩阵；凸集、凸函数与优化问题分类。"],
  ["第 2 单元", "一维搜索与下降方法", "精确与非精确线搜索，Armijo 与 Wolfe 条件，最速下降法。"],
  ["第 3 单元", "二阶与共轭方向方法", "Newton 法、共轭梯度法、局部收敛速度与数值实现。"],
  ["第 4 单元", "拟 Newton 方法与无约束优化", "DFP、BFGS、L-BFGS，停止准则、尺度与病态问题。"],
  ["第 5 单元", "线性规划", "标准形、几何解释、单纯形法、对偶理论与灵敏度分析。"],
  ["第 6 单元", "约束优化理论", "Lagrange 乘子法，等式与不等式约束，KKT 条件与约束资格。"],
  ["第 7 单元", "约束优化算法与凸优化", "罚函数、障碍函数、增广 Lagrangian、SQP 与全局最优性。"],
  ["第 8 单元", "现代方法与综合应用", "整数规划、全局搜索与多目标优化；人工智能、机器人和控制案例。"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="wrap header-inner">
          <div className="course-name">优化理论与方法</div>
          <div className="term">2026 秋季学期</div>
        </div>
      </header>

      <section className="hero wrap">
        <p className="english-title">OPTIMIZATION THEORY AND METHODS</p>
        <h1>优化理论与方法</h1>
        <p className="intro">本课程系统介绍优化问题的建模、最优性理论与数值求解方法，重点讨论经典算法的推导、收敛性与工程应用。</p>
        <div className="course-meta">
          <div><span>开课单位</span><strong>浪潮人工智能学院</strong></div>
          <div><span>课程属性</span><strong>专业选修课</strong></div>
          <div><span>学分 / 学时</span><strong>2 学分 / 32 学时</strong></div>
          <div><span>授课语言</span><strong>中文</strong></div>
        </div>
      </section>

      <section className="section wrap two-columns">
        <div><p className="section-label">COURSE OBJECTIVES</p><h2>课程目标</h2></div>
        <div className="body-copy">
          <p>学生将学会识别实际问题中的决策变量、目标函数与约束，分析问题的凸性和最优性条件，选择并实现合适的优化算法。</p>
          <ol><li>掌握优化建模与最优性分析的基本方法。</li><li>理解常用数值算法的思想、收敛特性与适用范围。</li><li>能够使用 Python 或 MATLAB 实现算法并评价计算结果。</li></ol>
        </div>
      </section>

      <section className="section syllabus-section">
        <div className="wrap">
          <div className="section-head"><div><p className="section-label">SYLLABUS</p><h2>教学大纲</h2></div><p>共 8 个单元，每单元 4 学时</p></div>
          <div className="syllabus-table">{modules.map(([number,title,description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>

      <section className="section wrap two-columns prerequisites">
        <div><p className="section-label">PREREQUISITES</p><h2>预修要求</h2></div>
        <div className="body-copy"><p>已修高等数学、线性代数和概率论，掌握多元微积分、矩阵运算与基本编程方法；具备 MATLAB 或 Python 基础。</p></div>
      </section>

      <section className="section wrap information-grid">
        <div className="info-block"><p className="section-label">TEACHING TEAM</p><h2>教师组</h2><dl><div><dt>袁媛</dt><dd>副教授</dd></div><div><dt>陶楚沅</dt><dd>助理教授</dd></div></dl></div>
        <div className="info-block"><p className="section-label">ASSESSMENT</p><h2>考核方式</h2><dl><div><dt>平时作业</dt><dd>40%</dd></div><div><dt>课程项目</dt><dd>20%</dd></div><div><dt>期末考试</dt><dd>40%</dd></div></dl></div>
        <div className="info-block textbook"><p className="section-label">TEXTBOOK</p><h2>教材</h2><p>Edwin K. P. Chong、Stanislaw H. Zak 著，孙志强等译，《最优化导论（第四版）》。</p></div>
      </section>

      <section className="resources-section">
        <div className="wrap resources-inner"><div><p className="section-label">COURSE MATERIALS</p><h2>课程资料</h2><p>课程讲义、作业和代码示例将随教学进度更新。</p></div><div className="ppt-placeholder"><span>PPT</span><div><strong>课件待发布</strong><p>课件入口已预留，当前不提供文件或下载链接。</p></div></div></div>
      </section>

      <footer><div className="wrap"><span>优化理论与方法</span><span>浪潮人工智能学院 · 2026</span></div></footer>
    </main>
  );
}
