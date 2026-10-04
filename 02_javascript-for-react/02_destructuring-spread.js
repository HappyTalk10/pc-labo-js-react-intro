// 第2回 分割代入とスプレッド構文
// 実行: node 02_destructuring-spread.js

const plan = { id: 1, date: "2026-10-01", title: "歯医者", done: false };

// ---------------------------------------------
// 分割代入（オブジェクト）
// ---------------------------------------------
console.log("--- 分割代入 ---");

const { date, title } = plan;
console.log(date, title); // 2026-10-01 歯医者

// 配列の分割代入
const colors = ["赤", "青", "緑"];
const [first, second] = colors;
console.log(first, second); // 赤 青

// 関数の引数で受け取る（Reactのpropsでよく使う形）
const formatPlan = ({ date, title }) => `${date} ${title}`;
console.log(formatPlan(plan)); // 2026-10-01 歯医者

// ---------------------------------------------
// スプレッド構文
// ---------------------------------------------
console.log("--- スプレッド構文 ---");

// オブジェクトのコピー + 一部だけ変更
const updated = { ...plan, done: true };
console.log(updated); // { id: 1, date: '2026-10-01', title: '歯医者', done: true }
console.log(plan.done, updated.done); // false true（元は変わらない）

// 配列のコピー + 要素の追加
const plans = [
  { id: 1, date: "2026-10-01", title: "歯医者", done: false },
  { id: 2, date: "2026-10-02", title: "会議", done: false },
  { id: 3, date: "2026-10-03", title: "飲み会", done: false },
];
const newPlans = [...plans, { id: 4, date: "2026-10-04", title: "ランチ", done: false }];
console.log(plans.length, newPlans.length); // 3 4（元は変わらない）
