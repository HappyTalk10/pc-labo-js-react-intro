// 第2回 Date（カレンダーを作るための日付処理）
// 実行: node 06_date.js

// 月は0始まり（0 = 1月, 9 = 10月）
const d = new Date(2026, 9, 1);
console.log(d.getFullYear(), d.getMonth() + 1, d.getDate()); // 2026 10 1

// 曜日（0 = 日曜 〜 6 = 土曜）
const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
console.log(d.getDay(), weekdays[d.getDay()]); // 4 木

// その月の日数：「翌月の0日」は「当月の末日」になる
const lastDay = new Date(2026, 10, 0).getDate();
console.log(lastDay); // 31

// 月初の曜日は、カレンダーの最初に必要な空白マスの数になる
const blankCells = new Date(2026, 9, 1).getDay();
console.log(blankCells); // 4

// "2026-10-01" の形式の文字列にする
const pad = (n) => String(n).padStart(2, "0");
const text = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
console.log(text); // 2026-10-01
