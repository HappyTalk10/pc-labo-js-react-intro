// 第2回 map・filter・find
// 実行: node 03_map-filter.js

const plans = [
  { id: 1, date: "2026-10-01", title: "歯医者", done: false },
  { id: 2, date: "2026-10-02", title: "会議", done: true },
  { id: 3, date: "2026-10-03", title: "飲み会", done: false },
];

// ---------------------------------------------
// map：すべての要素を変換して、新しい配列を作る
// ---------------------------------------------
console.log("--- map ---");

const titles = plans.map((plan) => plan.title);
console.log(titles); // [ '歯医者', '会議', '飲み会' ]

const labels = plans.map((plan) => `${plan.date} ${plan.title}`);
console.log(labels);
// [ '2026-10-01 歯医者', '2026-10-02 会議', '2026-10-03 飲み会' ]

// ---------------------------------------------
// filter：条件に合う要素だけを集めて、新しい配列を作る
// ---------------------------------------------
console.log("--- filter ---");

const notDone = plans.filter((plan) => !plan.done);
console.log(notDone.map((plan) => plan.title)); // [ '歯医者', '飲み会' ]

// ---------------------------------------------
// find：条件に合う最初の1件を取り出す
// ---------------------------------------------
console.log("--- find ---");

const found = plans.find((plan) => plan.id === 2);
console.log(found); // { id: 2, date: '2026-10-02', title: '会議', done: true }

// ---------------------------------------------
// Reactの状態更新でよく使う形
// ---------------------------------------------
console.log("--- 状態更新のパターン ---");

// 削除：id が 2 以外のものを残す
const removed = plans.filter((plan) => plan.id !== 2);
console.log(removed.map((plan) => plan.id)); // [ 1, 3 ]

// 更新：id が 1 のものだけ done を反転し、他はそのまま
const toggled = plans.map((plan) =>
  plan.id === 1 ? { ...plan, done: !plan.done } : plan
);
console.log(toggled.map((plan) => `${plan.id}:${plan.done}`));
// [ '1:true', '2:true', '3:false' ]

console.log(plans[0].done); // false（元の配列は変わっていない）
