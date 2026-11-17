const tex = String.raw;

export const derivations: Record<string, ReadonlyArray<readonly [string, string]>> = {
  golden: [
    [tex`r=(\sqrt5-1)/2,\quad c=b-r(b-a),\quad d=a+r(b-a)`, "让保留区间的比例为 r。要求下一轮能复用一个试探点，得到 r² = 1 − r。"],
    [tex`\phi(c)<\phi(d)\Rightarrow [a,d],\qquad \phi(c)>\phi(d)\Rightarrow [c,b]`, "单峰性保证较高试探点外侧可舍去。图中橙色区域就是本轮舍去的一段。"],
  ],
  midpoint: [
    [tex`m=(a+b)/2,\quad \phi'(m)=2(m-0.83)+1.4(m-0.83)^3`, "对图中的四次函数求导，导数符号与 m − 0.83 相同。"],
    [tex`\phi'(m)>0\Rightarrow [a,m],\qquad \phi'(m)<0\Rightarrow [m,b]`, "切线朝上说明极小点在左侧，朝下说明在右侧。导数为零时停止。"],
  ],
  bracket: [
    [tex`t_{k+1}=t_k+h_k,\qquad h_{k+1}=2h_k`, "第一次试探若使函数值下降，就沿同一方向逐次加倍步长。若第一次上升，则换方向试探。"],
    [tex`\phi(t_{k-1})>\phi(t_k)<\phi(t_{k+1})`, "出现先降后升时，单峰假设下两端点之间含有极小点。图中最后取 [0.36, 1.80]。"],
  ],
  "newton-1d": [
    [tex`q_k(t_k+s)=\phi(t_k)+\phi'(t_k)s+\tfrac12\phi''(t_k)s^2`, "虚线是当前点的二次 Taylor 模型。图例中的模型曲率为正。"],
    [tex`q'_k(t_k+s)=0\Rightarrow t_{k+1}=t_k-\phi'(t_k)/\phi''(t_k)`, "先读出模型最低点的横坐标，再回到真实曲线计算函数值。"],
  ],
  "quadratic-interpolation": [
    [tex`q(t)=At^2+Bt+C,\qquad q(t_i)=\phi(t_i)\quad(i=1,2,3)`, "三个不同采样点给出三个线性方程，解出抛物线的系数。"],
    [tex`q'(t)=2At+B,\qquad t_{\rm trial}=-B/(2A)\quad(A>0)`, "取抛物线顶点试探，再测真实函数值。动图保留最好点及它两侧的邻近样点作为下一轮三点。"],
  ],
  wolfe: [
    [tex`\phi(t)=(1-t)^2,\quad \phi(0)=1,\quad \phi'(0)=-2`, "沿搜索线比较实际函数值和斜率。图中取充分下降参数 0.1、曲率参数 0.7。"],
    [tex`\underbrace{(1-t)^2\le 1-0.2t}_{\rm Armijo},\qquad \underbrace{2(t-1)\ge -1.4}_{\text{Wolfe}}`, "对正步长，Armijo 允许 t ≤ 1.8，弱 Wolfe 还要求 t ≥ 0.3。"],
    [tex`|2(t-1)|\le1.4\Rightarrow t\in[0.3,1.7]`, "强 Wolfe 限制试探点斜率的绝对值，与 Armijo 联立得到绿色区间。"],
  ],
  "conjugate-gradient": [
    [tex`\phi'_k(t)=g_k^\top d_k+t\,d_k^\top Gd_k=0\Rightarrow t_k=-\frac{g_k^\top d_k}{d_k^\top Gd_k}`, "图中 G = diag(2, 20)。沿同一方向的精确线搜索可直接解出步长，搜索完有新梯度与旧方向正交。"],
    [tex`d_0=-g_0,\quad d_{k+1}=-g_{k+1}+\beta_k d_k,\quad\beta_k=\frac{\|g_{k+1}\|^2}{\|g_k\|^2}`, "最速下降每次只取负梯度。共轭梯度加入修正项，使新旧方向关于 G 共轭，旧方向上的零斜率得以保留。"],
  ],
  "newton-dfp": [
    [tex`f(x,y)=(1-x)^2+100(y-x^2)^2,\qquad B_kd_k=-g_k`, "Newton 对二次模型求驻点。图中的阻尼实现使用 Hessian 定方向，非正定时退回负梯度，再回溯选步长。"],
    [tex`d_k=-H_kg_k,\quad H_{k+1}=H_k+\frac{ss^\top}{s^\top y}-\frac{H_kyy^\top H_k}{y^\top H_k y}`, "DFP 用位移 s 和梯度差 y 更新逆 Hessian 近似。右乘 y 后，两项 Hₖy 抵消，恰好得到割线式 Hₖ₊₁y = s。"],
  ],
  "frozen-newton": [
    [tex`B_k=\nabla^2 f(x_{3\lfloor k/3\rfloor}),\qquad B_kd_k=-\nabla f(x_k)`, "同一组的三步共享 Hessian，每一步仍用当前位置重新计算梯度。"],
    [tex`x_{k+1}=x_k+t_k d_k,\quad f(x_k+t_kd_k)\le f(x_k)+10^{-4}t_k g_k^\top d_k`, "图中从单位步长开始回溯。若所用 Hessian 非正定，则采用负梯度，保证起步下降。"],
  ],
  "goldstein-price": [
    [tex`d_k=\begin{cases}-B_k^{-1}g_k&B_k\succ0\\-g_k&\text{otherwise}\end{cases},\qquad B_k=\nabla^2 f(x_k)`, "Newton 分支的起点斜率为 −dₖᵀBₖdₖ，负梯度分支为 −‖gₖ‖²。梯度非零时两者都小于零。"],
    [tex`0.1\le \frac{f(x_k)-f(x_k+td_k)}{-t g_k^\top d_k}\le0.9`, "下降比例低于下限时缩步，高于上限时加大试探。找到合格步长就更新当前位置。"],
  ],
  goldstein: [
    [tex`\phi(t)=(1-t)^2,\qquad 1-1.8t\le\phi(t)\le1-0.2t`, "起点切线斜率为 −2。把它分别乘 0.9 和 0.1 得到函数值的下界和上界。"],
    [tex`\frac{\phi(0)-\phi(t)}{-t\phi'(0)}=1-t/2,\quad 0.1\le1-t/2\le0.9\Rightarrow t\in[0.2,1.8]`, "绿色区间对应允许的下降比例，图中的试探点到达这一区间就接受。"],
  ],
  levenberg: [
    [tex`\lambda_{\min}(B_k+\mu I)=\lambda_{\min}(B_k)+\mu`, "沿对角线加 μ 会把全部特征值一起抬高。动图将最小特征值抬到至少 1。"],
    [tex`(B_k+\mu I)d_k=-g_k\Rightarrow g_k^\top d_k=-d_k^\top(B_k+\mu I)d_k<0`, "对非零梯度，修正后的矩阵给出下降方向，再用回溯选择步长。"],
  ],
  bfgs: [
    [tex`s=x_{k+1}-x_k,\quad y=g_{k+1}-g_k,\quad \rho=1/(y^\top s)`, "用实际走出的位移和梯度变化估计曲率。动图仅在曲率内积超过阈值时更新。"],
    [tex`H_{k+1}=(I-\rho sy^\top)H_k(I-\rho ys^\top)+\rho ss^\top`, "右乘 y，第一项被右侧因子消掉，第二项给出 s。因此新近似满足割线条件，下轮方向取 −Hₖ₊₁gₖ₊₁。"],
  ],
  broyden: [
    [tex`H_{k+1}=(1-\eta)H_{k+1}^{\rm DFP}+\eta H_{k+1}^{\rm BFGS},\qquad \eta=0.5`, "图中选择 DFP 和 BFGS 两种逆矩阵更新的中点。"],
    [tex`H_{k+1}y=(1-\eta)s+\eta s=s`, "两个端点都满足割线条件，所以两者的线性组合也满足。两端都正定时，凸组合仍正定。"],
  ],
  "descent-3d": [
    [tex`z=f(x_1,x_2)=x_1^2+10x_2^2,\qquad x(t)=x_k+td_k`, "底面的虚线是变量的移动路径。曲面上的实线是把同一路径每个位置的目标函数值画成高度。"],
    [tex`\frac{d}{dt}f(x(t))=g_k^\top d_k+t\,d_k^\top Gd_k,\quad G=\operatorname{diag}(2,20)`, "沿曲线高度最低时导数为零。两种方法的步长都由这个式子决定，轨迹差异来自方向的选择。"],
  ],
  simplex: [
    [tex`m=\tfrac1n\sum_{i\ne w}x_i,\quad r=2m-x_w,\quad e=m+2(r-m)`, "排出最差点 x_w，先关于其余顶点的形心反射。反射点比最好点还好时试扩展，保留函数值更低的点。"],
    [tex`c=m+\tfrac12(q-m),\qquad x_i^+=x_{\rm best}+\tfrac12(x_i-x_{\rm best})`, "反射成效有限时试收缩，q 取反射点或原最差点。收缩也未改善时，才围绕最好点整体减半。"],
  ],
  "basic-simplex": [
    [tex`m=\tfrac1n\sum_{i\ne w}x_i,\quad r=2m-x_w,\quad 2m-r=x_w`, "把最差点翻到对面。如果新点仍最差，直接再反射会回到旧点，所以改反射次差点。"],
    [tex`x_i^+=x'+\tfrac12(x_i-x')`, "某个顶点 x′ 连续保留多轮时，以它为中心将单纯形减半。图中二维示例用四轮触发。"],
  ],
  "hooke-jeeves": [
    [tex`u_{\rm trial}=u\pm h e_i,\qquad f(u_{\rm trial})<f(u)`, "按坐标方向分别试探，只保留能降低函数值的移动。"],
    [tex`x_{\rm pattern}=x_{\rm new}+(x_{\rm new}-x_{\rm old})=2x_{\rm new}-x_{\rm old}`, "探测改善后沿新旧基点差值外推。若模式试探失败就回到基点，基点探测也失败时才减小步长。"],
  ],
  lagrange: [
    [tex`f(x,y)=(x-1.35)^2+(y-1.05)^2,\qquad h(x,y)=x+y-1.5=0`, "沿可行直线移动只能取切向方向。在线上达到最小时，目标梯度在切向上的投影为零。"],
    [tex`\nabla f+\lambda\nabla h=0\Rightarrow x=1.35-\lambda/2,\ y=1.05-\lambda/2`, "代入等式得到 λ = 0.9，最优点为 (0.9, 0.6)。图中最低可达等高线在这里与直线相切。"],
  ],
  kkt: [
    [tex`f(x,y)=(x-3)^2+(y-2)^2,\qquad (x^*,y^*)=(2,1)`, "红叉是无约束最小点 (3, 2)。绿点是两条约束边界的交点，也是要用 KKT 验证的候选点。"],
    [tex`g_1=x^2+y^2-5,\quad g_2=x+2y-4,\quad g_3=-x,\quad g_4=-y`, "原始可行要求所有 gᵢ ≤ 0。在 (2, 1) 两条边界相交，只有 g₁、g₂ 活跃。"],
    [tex`u_i\ge0,\quad u_i g_i=0\Rightarrow u_3=u_4=0,\qquad -\nabla f=u_1\nabla g_1+u_2\nabla g_2`, "由对偶可行性和互补松弛，只用两条活跃约束的外法向量配平目标梯度。"],
    [tex`(2,2)=\tfrac13(4,2)+\tfrac23(1,2)`, "两乘子均非负，向量首尾相接恰好得到负梯度。目标和约束均为凸函数，满足这四条即可确认全局最优。"],
  ],
  "reduced-gradient": [
    [tex`y=1-x,\quad F(x)=(x-0.72)^2+2(1-x-0.28)^2=3(x-0.72)^2`, "先用约束消去一个变量，目标函数只剩一个主动变量。"],
    [tex`F'(x)=6(x-0.72),\qquad x^+=x-0.04F'(x),\quad y^+=1-x^+`, "动图用固定步长展示消元后的下降。每次从约束恢复 y，所以整条轨迹都在可行直线上。"],
  ],
  grg: [
    [tex`y=x^2,\quad F(x)=(x-0.85)^2+(x^2-0.6)^2,\quad F'(x)=2(x-0.85)+4x(x^2-0.6)`, "链式法则把因变量 y 随 x 变化的影响计入广义既约梯度。"],
    [tex`x^+=x-0.14F'(x),\qquad y_{\rm lin}=y+2x(x^+-x),\qquad y^+=(x^+)^2`, "先看切向试探点，再恢复到可行曲线上。切线只给出一阶近似，恢复步骤才满足非线性等式。"],
  ],
  penalty: [
    [tex`P_\mu(x)=(x-1)^2+\mu[\max(0,x)]^2,\qquad g(x)=x\le0`, "违反不等式时，超出的量 x 才会产生罚项。图中罚参数 μ 由小到大。"],
    [tex`P_\mu'(x)=2(x-1)+2\mu x=0\quad(x>0)\Rightarrow x_\mu=\frac1{1+\mu}\to0^+`, "有限罚参数下，子问题的解仍在可行域外。逐步增大罚参数，解从右侧逼近约束最优点。"],
  ],
  barrier: [
    [tex`B_\mu(x)=(x-1)^2-\mu\log(-x),\qquad x<0`, "点靠近边界时障碍项发散，所以每个子问题的最优点留在严格可行域内。"],
    [tex`2(x-1)-\mu/x=0\Rightarrow x_\mu=\frac{1-\sqrt{1+2\mu}}2\to 0^-\quad(\mu\downarrow0)`, "取二次方程的负根。减小障碍参数后，极小点从左侧逼近边界。"],
  ],
  "interior-start": [
    [tex`g_1(x)=-x<0,\quad g_2(x)=x-1<0,\quad x_0=1.4`, "起点满足第一条约束，第二条尚未满足。保持 x > 0，同时设法降低 g₂。"],
    [tex`q_\mu(x)=x-1-\mu\log x,\quad q'_\mu(x)=1-\mu/x=0\Rightarrow x_\mu=\mu`, "障碍项维持第一条约束。当 μ 从 1.2 减到 0.85 时，得到满足两条严格不等式的内点。"],
  ],
  multiplier: [
    [tex`L(x,\lambda)=(x-2)^2+\lambda(x-1)+\tfrac12(x-1)^2`, "等式约束是 x = 1。罚参数固定为 1，每轮用当前乘子构造子问题。"],
    [tex`\partial_x L=0\Rightarrow x_{k+1}=(5-\lambda_k)/3,\qquad \lambda_{k+1}=\lambda_k+x_{k+1}-1`, "将子问题解代入乘子更新，得到 λₖ₊₁−2 = ⅔(λₖ−2)。乘子趋于 2，约束残差趋于零。"],
  ],
};
