import PlanItem from "./PlanItem.jsx";

const plans = [
  { id: 1, date: "2026-10-01", title: "歯医者", done: false },
  { id: 2, date: "2026-10-02", title: "会議", done: true },
  { id: 3, date: "2026-10-03", title: "飲み会", done: false },
];

// 配列を map で PlanItem の並びに変換する
export default function PlanList() {
  return (
    <ul>
      {plans.map((plan) => (
        <PlanItem
          key={plan.id}
          date={plan.date}
          title={plan.title}
          done={plan.done}
        />
      ))}
    </ul>
  );
}
