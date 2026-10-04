// 第2回 import / export
// 実行: node main.mjs

// デフォルトは波括弧なし、名前付きは波括弧あり
import countNotDone, { appName, formatPlan } from "./plan-utils.mjs";

const plans = [
  { id: 1, date: "2026-10-01", title: "歯医者", done: false },
  { id: 2, date: "2026-10-02", title: "会議", done: true },
  { id: 3, date: "2026-10-03", title: "飲み会", done: false },
];

console.log(appName); // 予定管理アプリ
console.log(formatPlan(plans[0])); // 2026-10-01 歯医者
console.log(countNotDone(plans)); // 2
