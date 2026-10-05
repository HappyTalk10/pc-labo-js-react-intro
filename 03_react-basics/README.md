# 第3回 React入門

JSX、コンポーネント、props、`useState` を、Viteで動かして確認します。

## 実行方法

```bash
cd 03_react-basics
npm install
npm run dev
```

ターミナルに表示される `http://localhost:5173/` を開きます。Codespacesでは、ポートの転送が自動で行われ、「ブラウザーで開く」のボタンが表示されます。

止める時は、ターミナルで `Ctrl + C` を押します。

## ファイル構成

```
03_react-basics/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            （App を画面に描画する入口）
    ├── App.jsx             （各コンポーネントを並べる）
    └── components/
        ├── Hello.jsx       （コンポーネントと props）
        ├── PlanItem.jsx    （1件の予定の表示）
        ├── PlanList.jsx    （map と key による一覧表示）
        ├── Counter.jsx     （useState の基本）
        └── PlanAdder.jsx   （配列の state：追加・削除・完了）
```
