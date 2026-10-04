# 第2回 Reactで頻出するJavaScript

配列とオブジェクト、分割代入、スプレッド構文、`map`・`filter`、`import`/`export`、JSON、`Date` を、Node.jsで動かして確認します。

## 実行方法

```bash
cd 02_javascript-for-react
node 01_array-object.js
```

`04_modules` だけはフォルダの中に入って実行します。

```bash
cd 04_modules
node main.mjs
```

## ファイル一覧

| ファイル | 内容 |
| --- | --- |
| `01_array-object.js` | 配列、オブジェクト、配列の中のオブジェクト |
| `02_destructuring-spread.js` | 分割代入、スプレッド構文 |
| `03_map-filter.js` | `map`、`filter`、`find`、状態更新のパターン |
| `04_modules/` | `import` / `export`（`plan-utils.mjs` と `main.mjs`） |
| `05_json.js` | `JSON.stringify` / `JSON.parse`、localStorageの書き方 |
| `06_date.js` | カレンダーを作るための日付処理 |

```
02_javascript-for-react/
├── 01_array-object.js
├── 02_destructuring-spread.js
├── 03_map-filter.js
├── 04_modules/
│   ├── plan-utils.mjs
│   └── main.mjs
├── 05_json.js
├── 06_date.js
└── README.md
```
