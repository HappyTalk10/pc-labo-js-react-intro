// 第1回 JavaScriptの基本
// 実行: node basics.js

// ---------------------------------------------
// 1. 変数：const と let
// ---------------------------------------------
console.log("--- 1. 変数 ---");

const title = "歯医者";
let count = 0;

count = count + 1;
console.log(title, count); // 歯医者 1

// const の変数に再代入するとエラーになる。試す時は下の行のコメントを外す
// title = "会議"; // TypeError: Assignment to constant variable.

// ---------------------------------------------
// 2. データ型
// ---------------------------------------------
console.log("--- 2. データ型 ---");

const n = 10; // number（数値）
const s = "予定"; // string（文字列）
const b = true; // boolean（真偽値）
let u; // undefined（値が入っていない）
const nl = null; // null（「何もない」を明示する値）

console.log(typeof n, typeof s, typeof b, typeof u, typeof nl);
// number string boolean undefined object

// ---------------------------------------------
// 3. 文字列に値を埋め込む（テンプレートリテラル）
// ---------------------------------------------
console.log("--- 3. テンプレートリテラル ---");

const date = "2026-10-01";
const plan = "歯医者";

console.log(`${date} の予定：${plan}`);
// 2026-10-01 の予定：歯医者

// ---------------------------------------------
// 4. 比較と条件分岐
// ---------------------------------------------
console.log("--- 4. 比較と条件分岐 ---");

console.log(1 === 1); // true
console.log(1 === "1"); // false（型が違う）
console.log(1 == "1"); // true（型を勝手に変換して比べてしまう。使わない）

const hour = 15;

if (hour < 12) {
  console.log("午前");
} else if (hour < 18) {
  console.log("午後");
} else {
  console.log("夜");
}
// 午後

// ---------------------------------------------
// 5. ループ
// ---------------------------------------------
console.log("--- 5. ループ ---");

for (let i = 1; i <= 3; i++) {
  console.log(`${i}回目`);
}

const plans = ["会議", "歯医者", "飲み会"];

for (const p of plans) {
  console.log(p);
}

// ---------------------------------------------
// 6. 関数とアロー関数
// ---------------------------------------------
console.log("--- 6. 関数 ---");

function formatPlan(d, t) {
  return `${d} ${t}`;
}

console.log(formatPlan("2026-10-01", "歯医者"));

// アロー関数
const formatPlan2 = (d, t) => {
  return `${d} ${t}`;
};

// 処理が return だけの場合は、波括弧と return を省略できる
const formatPlan3 = (d, t) => `${d} ${t}`;

console.log(formatPlan2("2026-10-02", "会議"));
console.log(formatPlan3("2026-10-03", "飲み会"));
