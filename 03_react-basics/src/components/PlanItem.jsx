// 1件の予定を表示するコンポーネント
export default function PlanItem({ date, title, done }) {
  return (
    <li>
      {date} {title} {done ? "（完了）" : ""}
    </li>
  );
}
