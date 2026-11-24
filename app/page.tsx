import Animation from "./animation";
import katex from "katex";
import { derivations } from "./derivations";

const chapters = [
  {
    number: "04", title: "第一周 · 一维搜索",
    animations: [
      ["golden", "黄金分割搜索", "比较两个试探点的函数值，逐步缩小包含极小点的区间。"],
      ["midpoint", "中点法", "看中点切线的斜率如何决定舍去哪一半。"],
      ["bracket", "进退法", "沿下降方向加倍步长，直到找到两端高中间低的初始区间。"],
      ["newton-1d", "一维 Newton 法", "区分局部二次模型的最低点和真实曲线上的更新点。"],
      ["quadratic-interpolation", "三点二次插值", "用三个样点拟合抛物线，再用它的顶点生成下一次试探。"],
      ["wolfe", "Armijo 与 Wolfe 条件", "同时看函数下降量和试探点的斜率，区分强、弱 Wolfe 条件。"],
    ],
  },
  {
    number: "05", title: "第二周 · 无约束最优化",
    animations: [
      ["conjugate-gradient", "最速下降与共轭梯度", "在同一个正定二次函数上比较两条路径，看扭摆怎样出现。"],
      ["newton-dfp", "Newton 与 DFP", "在 Rosenbrock 函数的弯谷中对比阻尼 Newton 与 DFP，每帧标出实际接受的步长。"],
      ["frozen-newton", "复用 Hessian 的 Newton 法", "每三步重算一次 Hessian，其余步沿用同一矩阵并重新计算梯度。"],
      ["goldstein-price", "Goldstein–Price 方法", "看 Hessian 不正定时怎样改用负梯度，并用 Goldstein 条件选步长。"],
      ["goldstein", "Goldstein 步长条件", "对比步长过大、过小和可接受时，实际函数值相对两条边界的位置。"],
      ["levenberg", "L–M 法", "观察 Hessian 的对角修正量怎样随位置变化。"],
      ["bfgs", "BFGS 法", "用相邻两步的位移和梯度变化更新逆 Hessian 近似。"],
      ["broyden", "Broyden 族", "在 DFP 和 BFGS 的逆矩阵更新之间取中间值，观察迭代轨迹。"],
      ["descent-3d", "三维曲面上的搜索轨迹", "观察最速下降与共轭梯度怎样沿曲面下降。底面的虚线对应俯视图上的路径。"],
      ["simplex", "可变多面体法", "用三角形的反射、扩展和收缩演示如何只靠函数值搜索。"],
      ["basic-simplex", "基本单纯形法", "反射较差的顶点，用新三角形继续搜索，并观察减半操作。"],
      ["hooke-jeeves", "Hooke–Jeeves 模式搜索", "逐坐标试探，然后沿新旧基点的连线外推。"],
    ],
  },
  {
    number: "06", title: "第三周 · 约束最优化",
    animations: [
      ["lagrange", "等式约束与 Lagrange 乘子", "沿可行线找到相切点，观察目标梯度和约束法向量的关系。"],
      ["kkt", "KKT 条件与活跃约束", "用课件第 8–13 页的例题，逐步看可行域、活跃约束和加权法向量的平衡。"],
      ["reduced-gradient", "既约梯度法", "把等式约束中的一个变量消掉，再沿可行线更新另一个变量。"],
      ["grg", "广义既约梯度法", "先沿切向试探，再用非线性约束把新点恢复到可行曲线上。"],
      ["penalty", "外罚函数法", "增大违反约束的代价，观察子问题的解怎样从可行域外逼近边界。"],
      ["barrier", "对数障碍法", "逐渐减小障碍参数，观察子问题的解怎样从可行域内逼近边界。"],
      ["interior-start", "寻找初始内点", "保持已满足的约束，逐步修正尚未满足的约束。"],
      ["multiplier", "增广 Lagrangian 乘子法", "保持罚参数固定，用等式约束的残差更新乘子。"],
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
                  <a href={"chapter-" + number + ".pptx" + (number === "06" ? "?v=aspect-revised" : "")} download={title + ".pptx"}>下载 PPT</a>
                </div>
                <details className="chapter-animations">
                  <summary>算法动图（{animations.length}）</summary>
                  {animations.map(([id, title, description]) => (
                    <Animation key={id} id={id} title={title} description={description}>
                      <details className="derivation" open>
                        <summary>公式与推导</summary>
                        <ol>
                          {derivations[id].map(([formula, explanation]) => (
                            <li key={formula}>
                              <div className="formula" dangerouslySetInnerHTML={{
                                __html: katex.renderToString(formula, { displayMode: true, throwOnError: true }),
                              }} />
                              <p>{explanation}</p>
                            </li>
                          ))}
                        </ol>
                      </details>
                    </Animation>
                  ))}
                </details>
              </li>
            ))}
            <li>
              <div className="chapter-row">
                <span>第四周 · 具身智能导论第三章</span>
                <a href="embodied-intelligence-chapter-03.pptx" download="具身智能导论_第3章.pptx">下载 PPT</a>
              </div>
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
