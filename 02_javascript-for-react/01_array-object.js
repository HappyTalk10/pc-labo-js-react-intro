// 第2回 配列とオブジェクト
// 実行: node 01_array-object.js

// ---------------------------------------------
// 配列
// ---------------------------------------------
console.log("--- 配列 ---");

const titles = ["会議", "歯医者", "飲み会"];

console.log(titles[0]); // 会議（番号は0から始まる）
console.log(titles.length); // 3

titles.push("ランチ"); // 末尾に追加（元の配列を書き換える）
console.log(titles); // [ '会議', '歯医者', '飲み会', 'ランチ' ]

// ---------------------------------------------
// オブジェクト
// ---------------------------------------------
console.log("--- オブジェクト ---");

const plan = { id: 1, date: "2026-10-01", title: "歯医者", done: false };

console.log(plan.title); // 歯医者
console.log(plan["date"]); // 2026-10-01

plan.done = true; // const でも、オブジェクトの中身は書き換えられる
console.log(plan); // { id: 1, date: '2026-10-01', title: '歯医者', done: true }

// ---------------------------------------------
// 配列の中にオブジェクト
// ---------------------------------------------
console.log("--- 配列の中にオブジェクト ---");

const plans = [
  { id: 1, date: "2026-10-01", title: "歯医者", done: false },
  { id: 2, date: "2026-10-02", title: "会議", done: false },
  { id: 3, date: "2026-10-03", title: "飲み会", done: false },
];

console.log(plans[1].title); // 会議
console.log(plans.length); // 3
