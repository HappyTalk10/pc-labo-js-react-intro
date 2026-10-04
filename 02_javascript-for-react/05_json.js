// 第2回 JSON
// 実行: node 05_json.js

const plans = [
  { id: 1, date: "2026-10-01", title: "歯医者", done: false },
  { id: 2, date: "2026-10-02", title: "会議", done: true },
];

// オブジェクト・配列 → 文字列
const text = JSON.stringify(plans);
console.log(text);
// [{"id":1,"date":"2026-10-01","title":"歯医者","done":false},{"id":2,"date":"2026-10-02","title":"会議","done":true}]
console.log(typeof text); // string

// 文字列 → オブジェクト・配列
const restored = JSON.parse(text);
console.log(restored[0].title); // 歯医者
console.log(restored.length); // 2

// ---------------------------------------------
// localStorage（ブラウザの機能）
// Node.jsでは使えないので、ブラウザの開発者ツールのコンソールで試す
// ---------------------------------------------
// localStorage.setItem("plans", JSON.stringify(plans));  // 保存
// const saved = localStorage.getItem("plans");           // 取り出す（無ければ null）
// const loaded = saved ? JSON.parse(saved) : [];         // 文字列を配列に戻す
