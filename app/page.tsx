import Animation from "./animation";

const chapters = [
  {
    number: "04", title: "第四章 · 一维搜索",
    animations: [
      ["golden", "黄金分割搜索", "比较两个试探点的函数值，逐步缩小包含极小点的区间。"],
      ["goldstein", "Goldstein 步长条件", "对比步长过大、过小和可接受时，实际函数值相对两条边界的位置。"],
    ],
  },
  {
    number: "05", title: "第五章 · 无约束最优化",
    animations: [
      ["conjugate-gradient", "最速下降与共轭梯度", "在同一个正定二次函数上比较两条路径，看扭摆怎样出现。"],
      ["newton-dfp", "Newton 与 DFP", "在 Rosenbrock 函数的弯谷中对比阻尼 Newton 与 DFP，每帧标出实际接受的步长。"],
      ["descent-3d", "三维曲面上的搜索轨迹", "观察最速下降与共轭梯度怎样沿曲面下降。底面的虚线对应俯视图上的路径。"],
      ["simplex", "可变多面体法", "用三角形的反射、扩展和收缩演示如何只靠函数值搜索。"],
    ],
  },
  {
    number: "06", title: "第六章 · 约束最优化",
    animations: [
      ["reduced-gradient", "既约梯度法", "把等式约束中的一个变量消掉，再沿可行线更新另一个变量。"],
      ["penalty", "外罚函数法", "增大违反约束的代价，观察子问题的解怎样从可行域外逼近边界。"],
      ["barrier", "对数障碍法", "逐渐减小障碍参数，观察子问题的解怎样从可行域内逼近边界。"],
    ],
  },
] as const;

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
            {chapters.map(({ number, title, animations }) => (
              <li key={number}>
                <div className="chapter-row">
                  <span>{title}</span>
                  <a href={"chapter-" + number + ".pptx"} download={title + ".pptx"}>下载 PPT</a>
                </div>
                <details className="chapter-animations">
                  <summary>算法动图（{animations.length}）</summary>
                  {animations.map(([id, title, description]) => (
                    <Animation key={id} id={id} title={title} description={description} />
                  ))}
                </details>
              </li>
            ))}
          </ul>
        </section>
      </section>

      <footer>
        <div className="wrap">浪潮人工智能学院 · 2026</div>
      </footer>
    </main>
  );
}
